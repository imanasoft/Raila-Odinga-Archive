# Neutral Language and Sourcing Policy (15 Oct 2025)

## Tone and Voice
- Write in third-person, past tense for historical events, present tense for ongoing roles.
- Use descriptive, fact-based language; avoid adjectives implying judgment.
- Present multiple perspectives when covering controversies, attributing statements to sources.
- Avoid speculative language; clearly mark uncertainties or disputed facts.

## Structure
- Lead with the most verifiable fact, followed by contextual detail.
- Provide balanced coverage of achievements and critiques within relevant sections.
- Separate analysis from reporting by framing interpretive content as sourced commentary.

## Citation Requirements
- Every paragraph containing factual claims must reference at least one source ID from `data/sources.yaml`.
- Use inline citation badges referencing source IDs; allow multiple IDs for comprehensive coverage.
- For multimedia, include source ID, license, creator, and capture date if available.
- When quoting speeches or documents, include quotation marks and precise citation with page or timestamp.

## Handling Conflicting Information
- Record each viewpoint with its corresponding source ID.
- Note the nature of the disagreement (e.g., differing vote counts) and provide context.
- Escalate unresolved conflicts to the editorial board before publishing.

## Source Evaluation Criteria
- Prefer primary sources (official records, transcripts) and reputable secondary sources (international media, academic publications).
- Document publisher, publication date, and access date.
- Flag potential bias in `reliability_notes` field in `data/sources.yaml`.

## Updates and Versioning
- All content changes must update the `update_log` entity with date and commit hash.
- Citation changes require corresponding updates in `data/sources.yaml` with version comments.
- Run `scripts/validate-sources.js` prior to deployment to ensure integrity.

## Accessibility of Citations
- Provide descriptive link text for external references.
- Ensure citation modals or drawers are keyboard navigable.
- Offer downloadable bibliography in accessible formats (HTML, JSON).
