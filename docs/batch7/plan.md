# Batch 7 Plan — Interactive Timeline & Visualizations (15 Oct 2025)

## Objectives
- Deliver an accessible, progressively enhanced timeline explorer with decade and topic filters fed by structured YAML events.
- Implement a sourced family tree visualization for the Early Life & Lineage section with keyboard navigation support.
- Provide reusable, accessible map embed components with graceful fallbacks and reduced-motion considerations.
- Document component behaviors, data dependencies, and QA steps to guide future content ingestion and enhancements.

## Tasks & Estimates
| Task | Description | Owner | Estimate |
| --- | --- | --- | --- |
| T1 | Audit event, family, and location data to confirm field coverage for filters and visualizations | Eng | 2h |
| T2 | Build timeline explorer component with filter UI, progressive enhancement script, and documentation | Eng | 6h |
| T3 | Implement family tree visualization component using existing lineage data and write usage guidance | Eng | 4h |
| T4 | Create reusable location map embed with fallbacks, integrate into Early Life page, and note accessibility features | Eng | 3h |
| T5 | Update navigation/shared utilities, create Early Life page shell, and run lint/build/source validation checks | Eng | 3h |
| T6 | Document deliverables, capture next steps, and prepare Batch 8 prerequisites | Eng | 2h |

## Risks & Mitigations
- **Data completeness gaps** for events or family members may block full visualization fidelity. *Mitigation*: surface TODO notes in component docs and rely on placeholder messaging where necessary.*
- **Client-side enhancement regressions** (e.g., scripts blocking initial render). *Mitigation*: ensure functionality works with JavaScript disabled and keep enhancement bundle under 5 KB.
- **Map embeds depending on third-party availability** causing blank areas. *Mitigation*: provide textual fallback links and stored coordinates for alternative renderers.*

## Dependencies
- Batch 3 schemas and YAML exemplars under `content/`.
- Batch 5 design tokens and component guidelines.
- Batch 6 Astro scaffolding and navigation framework.

## Definition of Done
- Timeline page renders sourced events with working decade/topic filters, keyboard accessible controls, live result counts, and client-side enhancement while remaining functional without JavaScript.
- Family tree component displays lineage relationships, supports keyboard navigation, includes textual descriptions, and references source IDs.
- Map embed component accepts location IDs, displays lazy-loaded map with fallback content, and honors reduced-motion preferences.
- Early Life page integrates family tree and map components within the existing layout.
- Documentation for new components and enhancement behavior stored under `docs/batch7/`.
- `npm run lint`, `npm run build`, and `npm run validate:sources` succeed.
