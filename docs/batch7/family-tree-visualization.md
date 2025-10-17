# Family Tree Visualization Notes (15 Oct 2025)

## Overview
The family tree component (`src/components/FamilyTree.astro`) translates YAML lineage data into a keyboard-navigable tree. Roots
are inferred from members without parent references, with a fallback to the focused individual when necessary.

## Data Handling
- Combines `content/families/*.yaml` entries with person metadata from `content/people/*.yaml` to populate display names,
  biographical blurbs, and source arrays.
- Relationships are rendered recursively while guarding against cycles. Children are ordered by declared generation and
  birth order fields, then alphabetically.

## Accessibility
- Uses `role="tree"`, `role="treeitem"`, and `role="group"` semantics; the focused node receives `tabindex="0"` and keyboard
  focus outlines.
- Highlight IDs surface key individuals visually for faster scanning, while source identifiers remain available for citation
  cross-checks.

## Visual Treatment
- Card layout relies on existing design tokens, with subtle callouts for highlighted nodes and responsive horizontal scrolling
  when branches widen.

## Follow-Up
- Add spouse relationship rendering and printable layout refinements in later batches once additional schema fields are
  populated.
