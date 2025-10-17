# Batch 2 Plan — Source Audit and Citation Strategy (15 Oct 2025)

## Objectives
- Compile a vetted catalog of primary and secondary sources covering all mandated site sections.
- Establish a maintainable citation policy covering sourcing, disagreement handling, and fact versioning.
- Ensure image and media sources include explicit license and reuse guidance.

## Tasks & Estimates
| Task | Description | Owner | Estimate |
| --- | --- | --- | --- |
| T2.1 | Define critical claim areas and coverage expectations | Content Strategy | 1.0 day |
| T2.2 | Research and validate sources (news, academic, gov, NGO, archives) | Research | 2.5 days |
| T2.3 | Document sources in `data/sources.yaml` with metadata and tagging | Research | 1.0 day |
| T2.4 | Draft `docs/citation-policy.md` including citation formats, disagreement logging, version control workflow | Content Ops | 0.8 day |
| T2.5 | Peer review for completeness, neutrality, and licensing compliance | Editorial | 0.7 day |
| T2.6 | Handoff summary and next steps | PM | 0.2 day |

## Dependencies
- Batch 1 canonical outline and taxonomy for topic coverage.
- Availability of credible, verifiable sources up to 15 Oct 2025.

## Risks & Mitigations
| Risk | Impact | Likelihood | Mitigation |
| --- | --- | --- | --- |
| Limited public licensing for archival images | Medium | Medium | Prioritize sources with explicit Creative Commons or public domain licensing, note gaps for later rights clearance. |
| Conflicting accounts on controversies | High | High | Capture multiple perspectives, annotate reliability, and flag for editorial reconciliation in Batch 8. |
| Source link rot over time | Medium | Medium | Record archive URLs or DOIs when available; include retrieval dates and encourage periodic validation via `scripts/validate-sources.js`. |
| Excessive reliance on single publisher | High | Low | Track publisher distribution, ensure minimum three independent sources per critical area. |

## Definition of Done
- `data/sources.yaml` includes vetted sources with IDs, metadata, topic tags, reliability notes, and licensing details.
- `docs/citation-policy.md` defines citation formats, disagreement logging, and fact versioning workflows.
- Coverage matrix confirms ≥3 independent high-quality sources per critical area, including controversial topics and imagery.
- Deliverables reviewed for neutrality, accessibility, and compliance with Batch 2 acceptance criteria.

## Success Metrics
- 100% of canonical outline sections mapped to at least three reputable sources.
- All sources include publication and retrieval dates and licensing notes.
- Citation policy adopted by content and engineering stakeholders for subsequent batches.

## Next Steps After Completion
- Initiate Batch 3 schema design informed by source structure and reliability tiers.
