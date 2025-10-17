# Design Tokens Overview (15 Oct 2025)

These CSS variables power the classic editorial design language defined in Batch 5. Integrate `design/tokens.css` into the Astro pipeline during Batch 6 to ensure consistency across templates and components.

## Usage
1. Import the file globally (e.g., in `src/styles/global.css`).
2. Reference semantic roles (e.g., `--color-text-primary`) instead of raw hex values to maintain accessibility guarantees.
3. Extend via custom properties scoped to components or theme toggles (e.g., `[data-theme='high-contrast']`).

## Maintenance Notes
- Validate color contrast when introducing new hues using WCAG 2.2 AA targets (4.5:1 for body text, 3:1 for large text/icons).
- Typography scale follows a 1.25 modular ratio. Add intermediate steps by multiplying/dividing by 1.25 and rounding to 3 decimals.
- Update motion tokens alongside component behavior and ensure equivalent reduced-motion experiences.
