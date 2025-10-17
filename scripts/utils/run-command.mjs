import { spawn } from 'node:child_process';

const isWindows = process.platform === 'win32';

function resolveCommand(command) {
  if (!isWindows) {
    return command;
  }

  if (command.endsWith('.cmd') || command.endsWith('.exe')) {
    return command;
  }

  return `${command}.cmd`;
}

export function runCommand(command, args = [], options = {}) {
  const resolved = resolveCommand(command);

  return new Promise((resolve, reject) => {
    const child = spawn(resolved, args, {
      stdio: 'inherit',
      ...options,
    });

    child.on('error', (error) => {
      reject(error);
    });

    child.on('close', (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(`Command \`${command} ${args.join(' ')}\` exited with code ${code}.`));
    });
  });
}

export const platform = {
  isWindows,
  npmCommand: resolveCommand('npm'),
};
