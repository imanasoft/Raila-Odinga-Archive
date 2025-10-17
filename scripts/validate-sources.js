#!/usr/bin/env node
/* eslint-env node */
/* global console, process */
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { globby } from 'globby';
import yaml from 'yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.join(__dirname, '..');

async function loadSourceRegistry() {
  const raw = await readFile(path.join(repoRoot, 'data', 'sources.yaml'), 'utf-8');
  const parsed = yaml.parse(raw);
  const sourceIds = new Set((parsed.sources ?? []).map((entry) => entry.id));
  return sourceIds;
}

async function collectContentFiles() {
  const patterns = ['src/content/**/*.md'];
  const files = await globby(patterns, { cwd: repoRoot });
  return files;
}

function extractSourceIds(frontmatter) {
  if (!frontmatter) return [];
  if (Array.isArray(frontmatter.sources)) {
    return frontmatter.sources;
  }
  return [];
}

async function parseFrontmatter(filePath) {
  const raw = await readFile(path.join(repoRoot, filePath), 'utf-8');
  const frontmatterMatch = /^---\n([\s\S]*?)\n---/m.exec(raw);
  if (!frontmatterMatch) return { sources: [] };
  try {
    const data = yaml.parse(frontmatterMatch[1]);
    return data ?? {};
  } catch (error) {
    throw new Error(`Failed to parse frontmatter in ${filePath}: ${error.message}`);
  }
}

async function main() {
  const [registry, files] = await Promise.all([loadSourceRegistry(), collectContentFiles()]);
  const issues = [];

  for (const filePath of files) {
    const frontmatter = await parseFrontmatter(filePath);
    const declared = extractSourceIds(frontmatter);
    for (const sourceId of declared) {
      if (!registry.has(sourceId)) {
        issues.push(`${filePath}: unknown source id "${sourceId}"`);
      }
    }
  }

  if (issues.length > 0) {
    console.error('Source validation failed:');
    for (const issue of issues) {
      console.error(` - ${issue}`);
    }
    process.exitCode = 1;
  } else {
    console.log('All referenced sources resolved successfully.');
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
