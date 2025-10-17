import { spawn } from 'node:child_process';
import { access } from 'node:fs/promises';
import { constants as fsConstants } from 'node:fs';
import net from 'node:net';
import path from 'node:path';
import { setTimeout as sleep } from 'node:timers/promises';

import { platform, runCommand } from './run-command.mjs';

const astroBinary = path.join(
  process.cwd(),
  'node_modules',
  '.bin',
  platform.isWindows ? 'astro.cmd' : 'astro',
);

async function ensureDistExists() {
  try {
    await access('dist', fsConstants.F_OK);
  } catch {
    throw new Error('`dist/` directory not found. Run the build step before using `--skip-build`.');
  }
}

export async function ensureBuild({ skipBuild } = {}) {
  if (skipBuild) {
    await ensureDistExists();
    return;
  }

  await runCommand(platform.npmCommand, ['run', 'build']);
}

export async function getAvailablePort(preferred = 4321) {
  return new Promise((resolve, reject) => {
    const tester = net.createServer();

    tester.once('error', (error) => {
      if ('code' in error && error.code === 'EADDRINUSE') {
        const fallback = net.createServer();
        fallback.listen(0, () => {
          const address = fallback.address();
          fallback.close(() => {
            if (typeof address === 'object' && address) {
              resolve(address.port);
            } else {
              reject(new Error('Unable to determine fallback port.'));
            }
          });
        });
        fallback.once('error', reject);
        return;
      }

      reject(error);
    });

    tester.listen(preferred, () => {
      const address = tester.address();
      tester.close(() => {
        if (typeof address === 'object' && address) {
          resolve(address.port);
        } else {
          reject(new Error('Unable to determine server port.'));
        }
      });
    });
  });
}

export async function waitForServer(port, { timeoutMs = 20000 } = {}) {
  const start = Date.now();
  const url = `http://127.0.0.1:${port}/`;

  while (Date.now() - start < timeoutMs) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return;
      }
    } catch {
      // Ignore fetch errors and retry.
    }

    await sleep(250);
  }

  throw new Error(`Preview server did not respond within ${timeoutMs}ms.`);
}

export async function startPreviewServer({ port, skipBuild = false } = {}) {
  await ensureBuild({ skipBuild });

  const resolvedPort = await getAvailablePort(port);

  const previewProcess = spawn(astroBinary, ['preview', '--host', '127.0.0.1', '--port', String(resolvedPort)], {
    stdio: 'inherit',
  });

  const serverReady = waitForServer(resolvedPort);
  let exitListener;
  const prematureExit = new Promise((_, reject) => {
    exitListener = (code) => {
      reject(new Error(`astro preview exited before becoming ready (code ${code ?? 'unknown'}).`));
    };
    previewProcess.once('exit', exitListener);
  });

  await Promise.race([serverReady, prematureExit]);

  if (exitListener) {
    previewProcess.off('exit', exitListener);
  }

  return {
    port: resolvedPort,
    baseUrl: `http://127.0.0.1:${resolvedPort}`,
    async stop() {
      if (!previewProcess.killed) {
        previewProcess.kill('SIGTERM');
      }

      await new Promise((resolve) => {
        if (previewProcess.exitCode !== null) {
          resolve();
          return;
        }

        previewProcess.once('exit', resolve);
      });
    },
  };
}
