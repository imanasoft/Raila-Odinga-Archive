# ODM Theme Guidelines

Batch 11 introduces an ODM-specific theme that keeps the archive's editorial voice while mirroring the party's instantly recognisable colours.

## Core Palette

- **Primary – ODM Orange (`#f57400`)**: use for key accents, active states, and data highlights. Pair with white or `--text-900` for legible contrast.
- **Secondary – ODM Blue (`#114b9b`)**: anchors navigation, footer shells, and callout typography. Works on white backgrounds at AA for body text and on tinted badges for large labels.
- **Neutral – White (`#ffffff`)**: maintain generous negative space and typographic clarity.
- Supporting tints (`--odm-orange-100`, `--color-surface-callout`) provide soft backgrounds for callouts and citation badges without overpowering content.

## Typography

- Headings use **Merriweather** to deliver the archival, editorial tone.
- Interface labels, navigation, and badges use **Work Sans** for crisp, legible uppercase treatments.
- Maintain uppercase eyebrows and badges with a minimum letter spacing of `0.12em` to echo ODM collateral.

## Spacing & Layout

- The spacing scale is tuned around 6/12/24/36px steps for rhythm. Use `--space-4` (24px) for section gutters and `--space-7` (64px) to separate major narrative blocks.
- Rounded pills (`border-radius: 999px`) on navigation, callouts, and citation chips reinforce modern campaign collateral.

## Accent Usage

- **Do**
  - Anchor the header underline, footer top border, and citation badges in ODM orange.
  - Use ODM blue for navigation backgrounds, eyebrow text, and CTA hover states.
  - Apply callout backgrounds via `--color-surface-highlight` with orange borders for emphasis.
- **Don't**
  - Set long-form body text in orange; reserve it for accents to protect readability.
  - Combine orange text on blue backgrounds unless the text is bold and larger than 18px equivalent.
  - Introduce high-motion transitions—respect the existing reduced-motion tokens.

## Accessibility Notes

- Navigation states and citation badges meet WCAG AA contrast targets by pairing ODM blue (#114b9b) or white text against orange accents and vice versa.
- Maintain pill badges and callouts with a minimum 1px border to support differentiation in grayscale or low-contrast viewing.

Follow these guidelines when extending components within `/src`, `/public`, or Markdown content so the ODM look stays cohesive without overwhelming the editorial layout.
