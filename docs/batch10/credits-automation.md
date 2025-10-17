# Credits Automation & Coverage Reporting (Batch 10)

## Overview
Batch 10 completes the release-ready Credits experience by rendering the full source registry, licence metadata, and coverage expectations directly from `data/sources.yaml`. The automation removes manual duplication, keeps editorial governance in sync with the structured dataset, and highlights areas needing additional sourcing before launch.

## Data Flow
1. `@utils/sources` parses `data/sources.yaml` once at build time and exposes helpers for:
   - Retrieving complete `SourceMeta` records with publisher, licensing, reliability, and archive details.
   - Enumerating every source via `getAllSources()` for catalogue rendering.
   - Mapping coverage matrix entries through `getCoverageAreas()` so each focus area can be inspected alongside the required IDs.
2. Page-level components use these helpers to derive sorted lists, resolve missing IDs, and compute status flags without redundant YAML reads.

## Components
- **`SourceList.astro`** renders responsive cards with IDs, publishers, formatted dates, licence text, and optional archive links. Reliability notes appear inline so reviewers can understand context without leaving the page.
- **Credits layout** consumes the component and injects summary copy, keeping the hero and methodology sections sourced from the Markdown collection.

## Coverage Matrix
The coverage table groups editorial focus areas defined in the YAML `coverage_matrix`. For each area it displays:
- Minimum required sources versus the current resolved count.
- A status badge indicating whether targets are met or additional sourcing is needed.
- Inline warnings for unresolved IDs so editors can reconcile typos or missing registry entries.
- Direct links (where available) to referenced sources to accelerate verification.

## Editorial Workflow
- Editors update `data/sources.yaml` to add new sources, adjust licensing, or revise coverage targets. The Credits page automatically reflects these changes on the next build.
- If new focus areas are introduced, adding them to the YAML `coverage_matrix` immediately adds a new table row with appropriate status messaging.
- Missing IDs surface in the UI, prompting editors to either add the source metadata or adjust the coverage list before the release checklist is signed off.

## Future Enhancements
- Add client-side filtering to the source catalogue by topic, type, or reliability tier for quicker discovery.
- Surface aggregate statistics (e.g., number of government vs. news sources) to help editorial planning.
- Integrate automated validation in CI to fail builds when coverage requirements fall below minimum thresholds.
