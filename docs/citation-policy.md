# Citation Policy (15 Oct 2025)

## Purpose
This policy governs how all content within the Raila Odinga static site cites, validates, and maintains factual information. It ensures traceability to reputable sources, supports neutral coverage, and simplifies future audits.

## Core Principles
1. **Source Traceability** — Every non-trivial factual statement must reference at least one source ID from `data/sources.yaml`.
2. **Neutral Synthesis** — Summaries must represent multiple viewpoints where sources diverge, without editorializing.
3. **Verifiability Over Originality** — Prefer primary documents and peer-reviewed analyses; avoid unsourced anecdotes.
4. **Accessibility** — Citations must remain understandable to general audiences and accessible to assistive technologies.

## Citation Formats
- **Inline citations:** Use superscripted reference markers (e.g., `<sup data-cite="britannica-rail-2025"></sup>`) that map to rendered footnotes or side notes.
- **Footnote listings:** Each page must expose a structured list of cited sources, including title, publisher, publication date, retrieval date, and license note pulled from `data/sources.yaml`.
- **Multiple sources:** When statements synthesize more than one reference, supply an ordered array of source IDs (e.g., `["bbc-kenya-election-2022", "kenya-gazette-2008-cabinet"]`).
- **Media assets:** Images, audio, and video require figure captions with source title, creator (if available), license, and direct link.

## Referencing Workflow
1. **Plan** — Identify relevant canonical outline sections and required coverage from the `coverage_matrix` in `data/sources.yaml`.
2. **Select** — Choose at least two corroborating sources for significant claims (dates, statistics, quotes). Ensure publishers are independent when possible.
3. **Record** — In Markdown frontmatter or content blocks, add a `sources` array referencing source IDs. Example:
   ```yaml
   sources:
     - id: bbc-kenya-election-2022
       excerpt: "Independent Electoral and Boundaries Commission declared results on 15 Aug 2022."
     - id: kenya-supreme-court-2017
       excerpt: "Supreme Court nullified the 2017 presidential election citing irregularities."
   ```
4. **Render** — Components will resolve IDs to metadata and present accessible citations.
5. **Validate** — Run `scripts/validate-sources.js` (Batch 6) to confirm referenced IDs exist, licenses are captured, and retrieval dates are populated.

## Handling Conflicting Accounts
- **Document All Sides:** When sources disagree, cite each perspective explicitly and summarize the variance without choosing a side.
- **Reliability Annotation:** Use the `reliability` object to explain why a source is included despite conflict.
- **Context Notes:** Add `dispute_notes` fields in content frontmatter to describe the nature of disagreement and any pending fact-check tasks.

## Updating and Versioning Facts
1. **Change Request:** File an issue describing the fact to update, linked to affected pages and sources.
2. **Source Verification:** Confirm new or revised sources meet reliability criteria and update `data/sources.yaml` with new IDs as needed.
3. **Content Update:** Modify Markdown/MDX files, adjusting `sources` arrays and adding changelog entries to the Updates log.
4. **Review:** Require peer review focusing on neutrality, source validity, and licensing. Use Git history for traceability.
5. **Release:** Reference the commit hash in the Update Log page and ensure the PR summary lists impacted facts.

## Recording Disagreements
- Maintain a `docs/disputes/` folder (to be established in Batch 8) with Markdown entries capturing:
  - Summary of the contested fact.
  - Source IDs representing each viewpoint.
  - Status (`under-review`, `resolved`, `deferred`).
  - Assigned owner and next review date.
- Flag disputed facts with a `dispute: true` frontmatter field so UI components can present context badges.

## Source Maintenance
- **Audit Frequency:** Revalidate high-risk or Medium reliability sources every six months; document reviews in the Update Log.
- **Link Rot Prevention:** Use `archive_url` where provided and store key PDFs under `public/docs/` when licenses allow.
- **License Tracking:** Confirm reuse terms before embedding media. If licensing changes, update the source entry and affected captions immediately.

## Accessibility Considerations
- Ensure footnotes are reachable via keyboard and screen reader by linking markers and references with `aria-describedby`.
- Provide text alternatives for citations (e.g., `data-cite-label`) so non-visual users understand publisher and date without relying on hover states.

## Governance
- **Custodian:** Research & Editorial Team maintains `data/sources.yaml`.
- **Change Control:** All modifications require code review by both Editorial and Technical leads.
- **Compliance Checks:** Automated validation must pass before merging content updates; failures block deployment until resolved.
