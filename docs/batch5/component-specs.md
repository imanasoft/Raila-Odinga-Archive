# Component Specifications (15 Oct 2025)

Each component references the design tokens in `design/tokens.css` and adheres to WCAG 2.2 AA. Interaction notes include keyboard and reduced-motion guidance.

## Global Utilities
- **Skip Link**
  - **Purpose:** First focusable element, jumps to main content.
  - **Tokens:** Background `--color-brand-primary`, text `--color-text-inverse`, padding `--space-3`.
  - **States:** Hidden off-screen until focused. On focus, moves into view with translateY animation; in reduced motion, appears instantly.
  - **Accessibility:** `href="#main"`, high-contrast ensures ≥ 4.5:1. Provide `role="link"` and maintain `:focus-visible` outline using `--focus-ring-color`.

- **Back-to-Top Button**
  - **Purpose:** Quick navigation for long pages.
  - **Tokens:** Circular button using `--space-3` padding, `--border-radius-lg`, `--elevation-raised` shadow.
  - **States:** Appears after scrolling 600px; `prefers-reduced-motion` disables scroll animation and jumps instantly.
  - **Accessibility:** `aria-label="Back to top"`, keyboard activatable with Enter/Space, ensures focus returns to top container.

## Site Framework
- **Header**
  - **Structure:** Top bar with logo lockup, primary nav, utility items (language toggle placeholder, search trigger).
  - **Tokens:** Background `--color-surface-default`, text `--color-text-primary`, nav spacing `--space-4` horizontal.
  - **Responsive:** Mobile uses hamburger to open navigation drawer (progressive enhancement). Desktop shows horizontal nav.
  - **Accessibility:** Landmark `role="banner"`, navigation labelled `aria-label="Primary"`, skip duplicates across breakpoints.
  - **States:** Sticky on scroll with shadow `--elevation-raised`; high-contrast theme flips to inverse tokens.

- **Footer**
  - **Structure:** Four-column layout scaling to single column on mobile, includes contact info, quick links, newsletter signpost, legal.
  - **Tokens:** Background `--color-brand-primary`, text `--color-text-inverse`, columns separated by `--space-6` desktop.
  - **Accessibility:** `role="contentinfo"`, ensure link group headings use `<h2>` or `<h3>` with `aria-level` in navigation contexts.

- **Navigation Drawer**
  - **Purpose:** Mobile overlay for menu.
  - **Tokens:** Surface `--color-surface-elevated`, focus outlines `--focus-ring-color`.
  - **Motion:** Slide in using `--motion-duration-standard`; in reduced motion, fade-in via opacity.
  - **Accessibility:** `aria-modal="true"`, focus trap with first/last focusable elements, close on `Esc`.

## Content Presentation
- **Timeline Container**
  - **Structure:** Wraps filter controls, chronological list/grid, and legend.
  - **Tokens:** Uses `--space-6` vertical spacing between groups, timeline spine color `--color-neutral-200`.
  - **Accessibility:** Provides `role="region"` with `aria-label="Timeline"`, ensures chronological order in DOM even when visually alternating columns.
  - **Interaction:** Supports hash-based deep links; updates announced via polite `aria-live` region when filters change.

- **Card**
  - **Structure:** Image/media (optional), overline, heading, summary, metadata.
  - **Tokens:** Padding `--space-4`, radius `--border-radius-md`, text `--font-size-200` heading.
  - **States:** Hover adds `--elevation-raised` and border color shift to `--color-brand-tertiary`.
  - **Accessibility:** Entire card clickable via `<a>` wrapper with `display: block;` and maintain `:focus-visible` ring.

- **Timeline Item**
  - **Structure:** Date label, event title, summary, tags, CTA.
  - **Tokens:** Date uses `--font-size-200`, line connecting items uses `--color-neutral-200`.
  - **Responsive:** Single column on mobile; desktop uses alternating columns with accessible source order.
  - **Interaction:** Keyboard toggles filters; each item includes `aria-describedby` referencing summary.

- **Tabs**
  - **Pattern:** Horizontal on desktop, collapsible accordion on mobile.
  - **Tokens:** Active tab border `--color-brand-primary`, inactive text `--color-text-secondary`.
  - **Accessibility:** Implement WAI-ARIA tablist roles, ensure arrow-key navigation. In mobile accordion mode, use `<button>` with `aria-expanded`.

- **Accordion**
  - **Structure:** Multi-disclosure for FAQs and policy details.
  - **Tokens:** Header font `--font-size-300`, divider `--color-border-default`.
  - **Motion:** Expand/collapse uses `--motion-duration-standard`; disabled when reduced motion.
  - **Accessibility:** Buttons with `aria-controls`, `aria-expanded`. Panel uses `id` and `role="region"`.

- **Callout / Pull Quote**
  - **Structure:** Quote text, attribution, optional icon.
  - **Tokens:** Background `--color-surface-subtle`, border accent `--color-brand-tertiary` 4px left rule, text `--font-size-300`.
  - **Accessibility:** Provide `<figure>` and `<figcaption>`. Ensure quote marks announced by screen readers with accessible text.

- **Media Figure**
  - **Structure:** `<figure>` with responsive image/video, caption containing citation and license.
  - **Tokens:** Caption uses `--font-size-75`, color `--color-text-secondary`.
  - **Accessibility:** Alt text mandatory, video includes transcript link. Provide `loading="lazy"` for images.

- **Citation Badge**
  - **Purpose:** Inline reference indicator linking to sources list.
  - **Tokens:** Background `--color-neutral-100`, border `--color-border-strong`, typography `--font-size-75`.
  - **States:** Focus ring uses `--focus-ring-color` and 3px outline.
  - **Accessibility:** Use `<sup>` with `<a>` and `aria-describedby` to source entry; ensure 44px tap target via padding.

- **Source List**
  - **Structure:** Ordered list with source title, publisher, date, license, link icon.
  - **Tokens:** Each list item uses `--space-4` vertical spacing, headings `--font-size-200`.
  - **Accessibility:** Provide `aria-label="Sources"`, ensure links open in same tab unless external site requires otherwise. Provide `rel="external"` when necessary.

- **Timeline Filter Controls**
  - **Structure:** Combo of select dropdowns (year range, topic) and toggle buttons (decade chips).
  - **Tokens:** Controls spaced with `--space-3`, active toggles use `--color-brand-secondary` background and `--color-text-inverse` text.
  - **Accessibility:** Use native `<select>` and `<button>` elements with `aria-pressed` for toggles. Focus order matches visual order.

- **Quote Slider**
  - **Structure:** Carousel cycling through verified quotes.
  - **Tokens:** Slide container uses `--space-5` padding, navigation dots `--color-neutral-400` default, `--color-brand-secondary` active.
  - **Motion:** Auto-play disabled by default; manual transitions respect reduced-motion by switching to fade or instant swap.
  - **Accessibility:** Provide `role="region"` with descriptive `aria-label`. Buttons have `aria-controls` referencing slide ids. Maintain visible focus states.

- **Timeline Legend / Tags**
  - **Structure:** Inline list of colored pills representing themes (e.g., Elections, Diplomacy).
  - **Tokens:** Pill background uses variations of `--color-brand-tertiary` tinted via opacity, text `--color-text-primary`.
  - **Accessibility:** Provide `aria-pressed` toggles if interactive; ensure color is not sole indicator by including text labels.

- **Form Elements (Newsletter/Feedback)**
  - **Tokens:** Inputs use border `--color-border-default`, focus `--color-border-focus`. Label font `--font-size-100` bold.
  - **Accessibility:** Labels explicitly associated, error text color `--color-status-critical` with `role="alert"`.

## Documentation Patterns
- Provide component-specific MDX in future Batches referencing these specs.
- Every component example must include citation placeholders and instructions for linking to `data/sources.yaml` entries.
