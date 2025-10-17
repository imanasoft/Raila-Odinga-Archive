# Batch 3 Schema Overview (15 Oct 2025)

This overview summarises how the JSON Schemas and YAML exemplars address Batch 3 acceptance criteria.

## Highlights
- **Shared definitions** centralise identifiers, tags, temporal spans, and citation references for consistent validation and cross-linking.
- **Temporal coverage** via `temporalSpan` and `temporalBound` ensures timeline queries and zooming are supported for events, roles, policies, and family records.
- **Citation enforcement** requires `sources` arrays across all content types, with optional `quote` and `summary` fields to align with the citation policy.
- **Internationalisation-ready** content uses `localizedString` objects so additional locales can be layered in without schema changes.

## Validation Notes
- Schemas conform to JSON Schema draft 2020-12, enabling reuse in Astro content collections and external tooling.
- Link references rely on identifier strings; the forthcoming `scripts/validate-sources.js` will extend validation to cross-file references.
- YAML exemplars are organised under `content/` by type to mirror the eventual content collection structure.

## Next Steps
- Integrate schemas with Astro collections during Batch 6 scaffolding.
- Implement automated schema validation in CI once the Node.js toolchain is introduced.
- Expand exemplars into fully authored pages in Batch 8, ensuring each fact references `data/sources.yaml` entries.
