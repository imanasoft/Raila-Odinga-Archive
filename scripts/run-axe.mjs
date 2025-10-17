import fs from 'node:fs/promises';
import path from 'node:path';

import AxeBuilder from '@axe-core/puppeteer';
import puppeteer from 'puppeteer';

import { auditPages, toAbsoluteUrl } from './audit-pages.mjs';
import { startPreviewServer } from './utils/site-test-helpers.mjs';

const skipBuild = process.argv.includes('--skip-build');

async function run() {
  const { baseUrl, stop } = await startPreviewServer({ skipBuild });
  const reportsDir = path.resolve('artifacts', 'axe');
  await fs.mkdir(reportsDir, { recursive: true });

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const violations = [];

  try {
    for (const { label, path: routePath } of auditPages) {
      const page = await browser.newPage();
      const url = toAbsoluteUrl(baseUrl, routePath);

      await page.goto(url, { waitUntil: 'networkidle0' });

      const axe = new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']);

      const results = await axe.analyze();
      const reportPath = path.join(reportsDir, `${label}.json`);
      await fs.writeFile(reportPath, `${JSON.stringify(results, null, 2)}\n`);

      if (results.violations.length > 0) {
        violations.push({ label, url, violations: results.violations });
        console.error(`Accessibility violations detected on ${label} (${results.violations.length}).`);
      } else {
        console.log(`Accessibility check passed for ${label}.`);
      }

      await page.close();
    }
  } finally {
    await browser.close();
    await stop();
  }

  if (violations.length > 0) {
    for (const violation of violations) {
      console.error(`\n${violation.label} — ${violation.url}`);
      for (const issue of violation.violations) {
        console.error(`  [${issue.impact ?? 'unknown'}] ${issue.id}: ${issue.description}`);
      }
    }

    throw new Error('Accessibility violations detected. Review the logs above for details.');
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
