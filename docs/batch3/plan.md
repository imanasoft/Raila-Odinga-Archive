# Batch 3 Plan — Content Model and Data Schemas (15 Oct 2025)

## Objectives
- Formalize machine-readable schemas for all core content types to unlock consistent authoring, validation, and cross-linking.
- Supply representative YAML examples aligned to the schemas to seed future content ingestion and QA workflows.

## Task Breakdown & Estimates
| Task | Description | Owner | Estimate |
| --- | --- | --- | --- |
| Requirements alignment | Reconcile Batch 1 content model with sourcing policy and timeline/filter needs | Content Architect | 4h |
| Schema authoring | Draft JSON Schemas for biography, event, role, election, speech, policy, media, family, and location types with shared definitions | Data Engineer | 10h |
| Validation tooling notes | Document validation expectations and cross-schema relationships for later automation | Data Engineer | 2h |
| YAML exemplars | Produce representative YAML files per schema referencing data/sources.yaml | Content Team | 6h |
| Review & QA | Peer review for accessibility, naming, field coverage, and sourcing arrays | Editorial Lead | 2h |

## Dependencies
- Batch 1 content model draft for field inspiration.
- Batch 2 sources registry for valid `source_id` references.

## Risks & Mitigations
- **Schema drift vs. future Astro collections**: Mitigate by using JSON Schema draft 2020-12 compatible with forthcoming tooling.
- **Over-complexity for editors**: Provide inline descriptions and optional fields to keep authoring manageable.
- **Citation enforcement gaps**: Embed `sources` arrays as required fields and document validation expectations.

## Definition of Done
- JSON Schemas exist for all required content types with shared `$defs` for identifiers, dates, tags, and sources.
- YAML examples validate against schemas conceptually and reference real source IDs.
- Documentation updated to explain schema usage and validation approach.
- Git diff reviewed and ready for Batch 3 acceptance.
