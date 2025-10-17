# Batch 8 Plan — Content Ingestion, Fact Checking & Cross-linking (15 Oct 2025)

## Objectives
- Populate representative narrative and data-driven content across all primary sections with citations referencing `data/sources.yaml`.
- Deliver at least five exemplar pages demonstrating end-to-end layouts, cross-links, and sourced copy ready for editorial review.
- Integrate citation surfacing patterns, navigation updates, and supporting datasets to reinforce neutral, accessible storytelling.

## Tasks & Estimates
| Task | Description | Owner | Estimate |
| --- | --- | --- | --- |
| T1 | Audit existing datasets, identify coverage gaps, and script new YAML entries for events, policies, media, and philanthropy | Eng | 4h |
| T2 | Author sourced Markdown narratives for key sections (Early Life, Political Journey, Policies, Diplomacy, Philanthropy, Media, Controversies, FAQs, Glossary) | Eng | 6h |
| T3 | Update Astro pages to consume content collections, render data visualisations, and expose citation badges with cross-links | Eng | 6h |
| T4 | Expand navigation, global styles, and utility helpers to support additional sections and citation UI | Eng | 3h |
| T5 | Run lint/build/source validation, document ingestion summary, and file Batch 8 update log entry | Eng | 2h |

## Risks & Mitigations
- **Citation mismatches** between Markdown frontmatter and `data/sources.yaml` could break validation. *Mitigation*: introduce shared source lookup helper and run `npm run validate:sources` after every major content addition.*
- **Navigation overflow** due to additional sections may impact usability on small screens. *Mitigation*: implement responsive wrapping and spacing adjustments validated against mobile viewport specs.*
- **Data inconsistency** across YAML exemplars might surface parsing errors. *Mitigation*: align new entries with Batch 3 schemas and add targeted spot-checks before build.*

## Dependencies
- Batch 3 schemas and exemplar YAML content under `content/`.
- Batch 5 design tokens and component specifications.
- Batch 6 Astro scaffolding and Batch 7 interactive components.

## Definition of Done
- All primary sections feature sourced narrative content with cross-links and supporting data pulled from YAML collections.
- Minimum of five sections (Early Life, Political Journey, Policies, International Engagements, Philanthropy) reach exemplar fidelity with full layouts and citation surfacing.
- Navigation, citation helpers, and global styles support expanded IA across viewports.
- `npm run lint`, `npm run build`, and `npm run validate:sources` pass.
- Batch 8 ingestion summary and update log committed.
