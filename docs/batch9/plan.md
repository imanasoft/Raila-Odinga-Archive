# Batch 9 Plan — Performance & Accessibility Hardening (15 Oct 2025)

## Objectives
- Establish automated Lighthouse baselines for exemplar sections to monitor performance and SEO regressions.
- Integrate scripted axe-core accessibility audits targeting WCAG 2.2 AA for primary narrative templates.
- Document quality gates, metric budgets, and remediation workflow to guide ongoing optimisation work.

## Tasks & Estimates
| Task | Description | Owner | Estimate |
| --- | --- | --- | --- |
| T1 | Build reusable audit helpers to compile the site, launch a preview server on an available port, and share route definitions between checks | Eng | 3h |
| T2 | Implement automated Lighthouse runner capturing JSON baselines for Home, Timeline, Policies, International Engagements, and Philanthropy pages | Eng | 4h |
| T3 | Add puppeteer-driven axe-core audit covering the same routes with WCAG 2.2 AA rules and JSON reporting | Eng | 4h |
| T4 | Wire npm scripts (`test:perf`, `test:a11y`, `test:quality`) and write documentation for interpreting results and responding to regressions | Eng | 2h |
| T5 | Record Batch 9 quality gate standards, including target scores, failure handling, and follow-up checklist for future batches | Eng | 2h |

## Risks & Mitigations
- **Headless browser availability** could block automated audits in CI environments. *Mitigation*: bundle Puppeteer-managed Chromium and expose configuration overrides for custom Chrome paths.*
- **Flaky metrics** from Lighthouse due to network variance might produce noisy baselines. *Mitigation*: use simulated throttling with deterministic settings and capture JSON artefacts for diffing.*
- **Accessibility rule conflicts** (e.g., false positives for decorative SVGs) could halt builds unnecessarily. *Mitigation*: keep violation reporting granular and document suppression review workflow before disabling any rule.*

## Dependencies
- Batch 6 tooling scaffolding (`npm` workflows, validation helpers).
- Batch 8 exemplar pages and navigation ensuring consistent templates for audits.
- `data/sources.yaml` and corresponding content collections for complete render coverage.

## Definition of Done
- Reusable preview server helper with build orchestration committed under `scripts/utils/`.
- `npm run test:perf` outputs Lighthouse JSON baselines and logs core category scores for five priority routes.
- `npm run test:a11y` runs axe-core against the same routes, failing on violations and storing reports for review.
- Combined `npm run test:quality` command executes both suites without redundant builds.
- Documentation describing metrics, budgets, and remediation workflow lives in `docs/batch9/` alongside this plan.
