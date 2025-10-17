# Design Tokens Summary (15 Oct 2025)

## Overview
- Token source: `design/tokens.css`
- Palette anchored in deep navy, burgundy, and ochre for classic editorial mood while maintaining WCAG 2.2 AA contrast on neutral backgrounds.
- Typographic system leverages Source Serif 4 for body/headline copy with Source Sans 3 for navigation and UI chrome.
- Spacing uses an 8px base scale with modular increments to keep rhythm across breakpoints.
- Motion tokens default to subtle easing and durations, with full motion suppression when `prefers-reduced-motion` is detected.

## Color Roles
| Role | Variable | Contrast on #ffffff | Usage Notes |
| --- | --- | --- | --- |
| Primary text | `--color-text-primary` (`#2f2a24`) | 13.5:1 | Core body copy, headlines, timeline labels. |
| Secondary text | `--color-text-secondary` (`#5b564f`) | 7.6:1 | Metadata, captions, secondary navigation. |
| Inverse text | `--color-text-inverse` (`#ffffff`) | – | Used on dark overlays, hero banners. |
| Link default | `--color-link` (`#193a63`) | 10.5:1 | Inline citations, nav links. |
| Link hover | `--color-link-hover` (`#0f2948`) | 14.6:1 | Provides clear hover focus change. |
| Surface subtle | `--color-surface-subtle` (`#f7f4ef`) | – | Section dividers, quotes. |
| Surface elevated | `--color-surface-elevated` (`#ffffff`) | – | Cards, modals with `--elevation-raised`. |
| Border focus | `--color-border-focus` (`#1a73e8`) | 4.7:1 vs neutral backgrounds | Focus ring and keyboard outlines.

## Typography Scale
| Token | Rem | Example Application |
| --- | --- | --- |
| `--font-size-75` | 0.875 | Caption, citation badge details |
| `--font-size-100` | 1 | Body copy, glossary entries |
| `--font-size-200` | 1.25 | Lead paragraphs, quick facts |
| `--font-size-300` | 1.563 | Section subheadings |
| `--font-size-400` | 1.953 | H4 / timeline decade headings |
| `--font-size-500` | 2.441 | H3 / key highlight callouts |
| `--font-size-600` | 3.052 | H2 / page hero |
| `--font-size-700` | 3.815 | H1 / home masthead |

Line heights: `--line-height-tight` for large headings, `--line-height-standard` for long-form text, `--line-height-relaxed` for quotes or transcripts.

## Spacing & Layout
- Use `--space-4` (16px) as base vertical rhythm for paragraphs.
- Section padding: mobile `var(--space-5)` top/bottom, desktop `var(--space-7)`.
- Cards adopt `var(--space-4)` padding and `--border-radius-md` for subtle rounding.
- Page width constrained to `--container-reading-width` for articles; hero and gallery features can expand to `--container-max-width`.

## Elevation & Borders
- `--elevation-raised` reserved for hover/active cards and modals.
- `--elevation-floating` for overlays like navigation drawers; pair with `--color-surface-elevated` and 88% backdrop scrim.

## Motion & Interaction
- Primary transitions use `--motion-duration-standard` with `--motion-easing-standard`.
- Entry animations (timeline filters, accordions) capped at `--motion-duration-deliberate`.
- Reduced motion mode zeroes durations and linear easing; components must provide non-animated affordances (e.g., instantly expanding accordions).

## High-Contrast Mode
- `[data-theme='high-contrast']` overrides shift surfaces to black and text to white/near-white while retaining accent cues.
- Additional components should respect the same attribute and avoid hard-coded colors.

## Implementation Notes
- Document updates in `design/README.md` before adjusting variables.
- When introducing dark mode, extend tokens via data attributes rather than overwriting base tokens to keep AA verification straightforward.
