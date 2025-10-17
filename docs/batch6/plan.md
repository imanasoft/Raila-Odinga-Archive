# Batch 6 Plan — Static Site Scaffolding (15 Oct 2025)

## Objectives
- Bootstrap the Astro-based static site foundation with TypeScript support, responsive layouts, and integration hooks for future content batches.
- Wire up content collections aligned with previously defined schemas and example data to enable markdown/YAML driven pages.
- Establish build, linting, and deployment tooling (sitemap, RSS, image optimization, Netlify) to satisfy performance and governance requirements.

## Tasks & Estimates
| Task | Description | Owner | Estimate |
| --- | --- | --- | --- |
| T1 | Audit existing assets, design tokens, and data to align folder structure for Astro project | Eng | 2h |
| T2 | Configure Astro project (package.json, astro.config.mjs, tsconfig) with TypeScript, sitemap, RSS, and image integrations | Eng | 4h |
| T3 | Implement base layout, global styles, navigation, footer, and accessibility utilities consuming design tokens | Eng | 5h |
| T4 | Define content collections with validation and seed exemplar markdown/YAML content for home, credits, and updates | Eng | 4h |
| T5 | Add tooling (ESLint, Prettier, npm scripts), Netlify configuration, robots manifest, and documentation | Eng | 3h |
| T6 | Smoke-test build and lint commands, document results, and capture next-step notes | Eng | 2h |

## Risks & Mitigations
- **Schema drift between Astro collections and prior JSON Schema**: cross-reference required fields and note gaps for Batch 8 ingestion. *Mitigation*: embed comments referencing schema parity and capture TODOs in docs.
- **Performance regression from global CSS imports**: ensure tokens and base styles are lean; leverage Astro scoped styles to limit global footprint.
- **Tooling misconfiguration** causing failed CI builds. *Mitigation*: run `npm run build` and `npm run lint` locally and document outputs.

## Dependencies
- Batch 5 design tokens (`design/tokens.css`).
- Source registry (`data/sources.yaml`) for citation references.

## Definition of Done
- Astro project compiles to static `dist/` via `npm run build` without errors.
- Linting and formatting tooling configured with npm scripts and verified locally.
- Base layout with header, footer, skip links, and placeholder content wired to content collections.
- Sitemap, RSS feed, robots.txt, Netlify config, and README section included.
- Deliverables summarized with checklist and ready for Batch 7 enhancements.
