import fs from 'node:fs/promises';
import path from 'node:path';

import { Launcher, launch } from 'chrome-launcher';
import lighthouse from 'lighthouse';
import puppeteer from 'puppeteer';

import { auditPages, toAbsoluteUrl } from './audit-pages.mjs';
import { startPreviewServer } from './utils/site-test-helpers.mjs';

const skipBuild = process.argv.includes('--skip-build');

async function findChromePath() {
  if (process.env.CHROME_PATH) {
    return process.env.CHROME_PATH;
  }

  const executablePath = puppeteer.executablePath();
  if (executablePath && executablePath !== 'undefined') {
    return executablePath;
  }

  const installations = Launcher.getInstallations();
  if (Array.isArray(installations) && installations.length > 0) {
    return installations[0];
  }

  throw new Error('Unable to locate a Chrome or Chromium executable for Lighthouse.');
}

async function run() {
  const { baseUrl, stop } = await startPreviewServer({ skipBuild });
  const reportsDir = path.resolve('artifacts', 'lighthouse');
  await fs.mkdir(reportsDir, { recursive: true });

  const summary = [];
  const chromePath = await findChromePath();

  for (const { label, path: routePath } of auditPages) {
    const chrome = await launch({
      chromePath,
      chromeFlags: ['--headless', '--no-sandbox', '--disable-gpu'],
    });

    try {
      const url = toAbsoluteUrl(baseUrl, routePath);
      const runnerResult = await lighthouse(
        url,
        {
          port: chrome.port,
          output: 'json',
          logLevel: 'error',
        },
        {
          extends: 'lighthouse:default',
          settings: {
            formFactor: 'desktop',
            screenEmulation: {
              mobile: false,
              width: 1365,
              height: 935,
              deviceScaleFactor: 1,
              disabled: false,
            },
            throttling: {
              rttMs: 40,
              throughputKbps: 10240,
              cpuSlowdownMultiplier: 1,
            },
            throttlingMethod: 'simulate',
            disableStorageReset: true,
          },
        },
      );

      const reportPath = path.join(reportsDir, `${label}.json`);
      await fs.writeFile(reportPath, runnerResult.report);

      const categories = Object.fromEntries(
        Object.entries(runnerResult.lhr.categories).map(([key, value]) => [key, value.score]),
      );

      summary.push({
        label,
        url,
        categories,
      });

      const scoreSummary = Object.entries(categories)
        .map(([key, value]) => `${key}: ${(value ?? 0).toFixed(2)}`)
        .join(' | ');

      console.log(`Lighthouse (${label}): ${scoreSummary}`);
    } finally {
      await chrome.kill();
    }
  }

  const summaryPath = path.join(reportsDir, 'summary.json');
  await fs.writeFile(summaryPath, `${JSON.stringify(summary, null, 2)}\n`);

  await stop();
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
