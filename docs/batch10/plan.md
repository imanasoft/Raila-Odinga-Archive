# Batch 10 Plan — Launch Readiness & Credits Automation (15 Oct 2025)

## Objectives
- Automate the Credits page so it ingests the structured registry in `data/sources.yaml` and surfaces licensing, reliability, and topical metadata without manual duplication.
- Visualise the coverage matrix to confirm each editorial focus area meets the minimum source threshold before release.
- Finalise navigation polish and documentation required for the public launch, including QA and governance checklists.
- Capture the release sign-off workflow so editorial, design, and engineering teams share a single go-live playbook.

## Tasks & Estimates
| Task | Description | Owner | Estimate |
| --- | --- | --- | --- |
| T1 | Expand `@utils/sources` to expose typed accessors for the full source registry and coverage matrix | Eng | 2h |
| T2 | Build reusable Credits components that render source cards with licensing, reliability, and archive metadata | Eng | 4h |
| T3 | Implement a coverage matrix table with status indicators for missing or insufficient sources | Eng | 3h |
| T4 | Audit primary navigation, footer links, and metadata to ensure launch parity across all templates | Eng | 2h |
| T5 | Document release QA (content validation, lint/build, performance, accessibility) and establish sign-off owners | Eng | 3h |

## Risks & Mitigations
- **Schema drift between `data/sources.yaml` and utility typings** could break automation. *Mitigation*: parse the YAML once, validate required fields, and fail fast if IDs are missing.*
- **Stale coverage targets** may hide editorial gaps. *Mitigation*: expose coverage counts directly in the UI and flag missing identifiers in the matrix.*
- **Launch regressions** (navigation, metadata, build tooling) might slip through. *Mitigation*: run the full lint/build suite and document a regression checklist tied to responsible owners.*

## Dependencies
- Batch 8 content ingestion for populated narratives and datasets.
- Batch 9 quality tooling for automated lint, build, and audit checks.
- `data/sources.yaml` maintained by the editorial team.

## Definition of Done
- Credits page renders live data from `data/sources.yaml`, including per-source licensing and reliability details.
- Coverage matrix displays minimum thresholds, current counts, and missing IDs for each focus area.
- Navigation reflects the final launch IA without duplication or broken links.
- Release QA checklist stored in batch documentation and referenced by stakeholders ahead of go-live.
