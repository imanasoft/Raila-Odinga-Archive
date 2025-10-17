# Performance & Accessibility Audit Tooling (Batch 9)

## Overview
Batch 9 introduces automated quality gates built on top of Lighthouse and axe-core. The scripts run against the production build served via `astro preview`, capture machine-readable artefacts, and surface actionable summaries in the terminal. Reports live under `artifacts/` (ignored by Git) so reviewers can inspect historical outputs without polluting the repo.

## Routes Under Test
| Label | Path | Rationale |
| --- | --- | --- |
| Home | `/` | Entry point covering hero, highlights, and cross-link blocks. |
| Timeline | `/timeline/` | Exercises interactive filters, timeline component, and sourced events. |
| Policies | `/policies/` | Represents policy cards, data integrations, and citation patterns. |
| International Engagements | `/international-engagements/` | Validates diplomacy layouts, media embeds, and map fallbacks. |
| Philanthropy | `/philanthropy/` | Covers initiative tables, statistics, and supporting gallery links. |

The route list is centralised in `scripts/audit-pages.mjs` so future batches can add or reprioritise coverage from a single location.

## Commands
- `npm run test:perf` — Builds the site (unless `--skip-build` flag used), launches a preview server on a free port, and runs Lighthouse for each route. JSON reports are stored under `artifacts/lighthouse/` alongside a `summary.json` capturing category scores.
- `npm run test:a11y` — Builds the site (unless `--skip-build` flag used), runs axe-core via Puppeteer against each route, and saves violation reports in `artifacts/axe/`. The command fails if any violations are detected.
- `npm run test:quality` — Convenience wrapper that runs performance then accessibility audits, ensuring the second step skips the redundant rebuild.

Each script supports the `--skip-build` CLI flag (e.g., `npm run test:a11y -- --skip-build`) for workflows that reuse a freshly built `dist/` directory.

## Metric Budgets & Targets
| Category | Target | Notes |
| --- | --- | --- |
| Lighthouse Performance | ≥ 0.90 | Focus on image optimisation, script payloads, and render-blocking resources. |
| Lighthouse Accessibility | ≥ 1.00 | Expect zero accessibility violations flagged by Lighthouse; triage regressions immediately. |
| Lighthouse Best Practices | ≥ 1.00 | Maintain secure requests, responsive images, and proper web app manifests. |
| Lighthouse SEO | ≥ 1.00 | Ensure metadata, headings, and crawlability stay intact. |
| Axe Violations | 0 | Any violation fails the run; review findings, prioritise fixes, and document exceptions if absolutely necessary. |

## Remediation Workflow
1. **Investigate** — Open the relevant JSON artifact, review `audits` (Lighthouse) or `violations` (axe) sections, and reproduce locally.
2. **Triage** — Categorise findings as regression, content issue, or false positive. Coordinate with design/content if copy or imagery is implicated.
3. **Fix** — Implement changes with accompanying tests or documentation updates.
4. **Document** — Record remediation details in the Updates log and, if applicable, note any accepted risk in `docs/disputes/` once established.
5. **Verify** — Re-run `npm run test:perf` and `npm run test:a11y` to confirm clean outputs before opening a pull request.

## Configuration Notes
- The preview server helper automatically discovers an available port to avoid clashes with local development.
- Puppeteer ships with a bundled Chromium binary. To override the executable (e.g., for CI caches), set the `CHROME_PATH` environment variable to a custom Chrome/Chromium path.
- Lighthouse runs in simulated throttling mode for deterministic scoring. Adjustments can be made within `scripts/run-lighthouse.mjs` if future optimisation work demands mobile-first baselines or different categories.
