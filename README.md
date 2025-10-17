# Raila Odinga Reference Site

_Static, citation-first archive for Raila Amolo Odinga_

## Project Structure
- `src/` — Astro application code, layouts, components, and content collections.
- `content/` — Canonical YAML datasets defined in earlier batches.
- `data/sources.yaml` — Master registry of citations and licensing metadata.
- `design/` — Design system tokens and documentation.
- `docs/` — Batch deliverables, plans, and process documentation.

## Getting Started
```bash
npm install
npm run dev
```

## Tooling
- `npm run lint` runs ESLint across Astro, TypeScript, and Markdown files.
- `npm run build` generates a production-ready static site inside `dist/`.
- `npm run preview` serves the generated build locally.
- `npm run test:perf` executes Lighthouse baselines across key routes and saves JSON artefacts under `artifacts/lighthouse/`.
- `npm run test:a11y` runs axe-core accessibility audits via Puppeteer for the same route list, writing reports to `artifacts/axe/`.
- `npm run test:quality` chains the performance and accessibility suites while reusing the compiled build.

## Deployment
A default `netlify.toml` is included. Set `SITE` or update `astro.config.mjs` to your production domain before deployment.

## Accessibility & Performance Commitments
- WCAG 2.2 AA focus styles, skip links, semantic landmarks.
- Prefers-reduced-motion honoured via design tokens.
- Sitemap, RSS feed, and robots manifest included for SEO hygiene.
