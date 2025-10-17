# Low-Fidelity Wireframes (15 Oct 2025)

> Note: Wireframes described per breakpoint with numbered regions. "SR" denotes screen reader-specific notes.

## Home Page
### Mobile (360px)
1. **Utility header** with logo, hamburger menu, search icon, skip-link anchor (revealed on focus).
2. **Hero intro**: text block, CTA buttons (`Explore Timeline`, `View Sources`). Background uses subtle texture.
3. **Quote slider**: single quote with citation, swipe dots, auto-rotation disabled unless user opts-in.
4. **Quick chronology**: vertical list of top 5 events with year badges.
5. **Highlights grid**: stacked cards for Policies, Speech, Media.
6. **Updates strip**: latest three updates with dates.
7. **Footer**: stacked sections with contact, credits link.

### Tablet (768px)
- Split hero (text left 60%, image right 40%).
- Quote slider shows two quotes per view with arrow controls.
- Quick chronology becomes two-column grid.
- Highlights grid: 2-up layout with card equal heights.

### Desktop (1280px)
- Persistent horizontal navigation bar.
- Hero spans full width with supporting image to right, CTA buttons aligned below lead paragraph.
- Quote slider anchored below hero with keyboard focus indicators.
- Quick chronology horizontal scroller with sticky year axis.
- Highlights grid: 3-up cards, each with metadata and citation badges.
- Footer uses four-column layout with site map summary.

## Timeline Page
### Mobile
1. **Top bar**: page title, `View printable timeline` link.
2. **Filter drawer**: collapsible, includes decades (multi-select), topics, roles.
3. **Timeline list**: cards stacked chronologically with year marker chips.
4. **Sticky "Jump to top"** button bottom-right.

### Tablet
- Filters displayed in left column (25%) as accordions; timeline cards in right column.
- Scroll-spy indicates current decade; keyboard navigation using `Tab` + `Shift+Tab` respects order.

### Desktop
- Full-width timeline with horizontal axis (progressively enhanced). Default view: vertical stacked for accessibility with toggle to horizontal view (ARIA `tabpanel`).
- Filter column pinned left with persistent reset button.
- Secondary context rail on right showing related people and sources.

## Biography Section (Early Life & Lineage Landing)
### Mobile
1. **Intro summary**.
2. **Family tree preview**: static image with `View interactive tree` CTA.
3. **Education timeline**: accordion segments by stage.
4. **Lineage map**: thumbnail map with caption and alt text.
5. **Featured narratives**: stacked cards.

### Tablet
- Intro summary and family tree preview placed side-by-side.
- Education timeline becomes horizontally scrollable stepper with `Previous/Next` buttons.

### Desktop
- Hero banner with quick links to subsections (anchors).
- Family tree interactive embed centered with zoom controls.
- Education timeline as timeline component with milestone cards.
- Related resources column right-hand side.

## Policies Hub
### Mobile
1. **Page intro**.
2. **Topic filter chips** (horizontal scrollable).
3. **Policy cards**: stacked with summary, last updated date, citation count badge.
4. **Toggle** for "View by chronology" vs "View by topic".

### Tablet
- Filters appear in sticky horizontal bar.
- Policy cards arranged two per row with equal heights.

### Desktop
- Left sidebar filter menu (checkbox list) with collapsible groups.
- Main area shows three-column card grid with pagination.
- Right sidebar highlights related speeches and metrics.

## Speech Detail Page
### Mobile
1. **Breadcrumb + back link**.
2. **Speech header**: title, date, location, tags, source badges.
3. **Key takeaways** list.
4. **Transcript**: collapsible sections by segment with `Copy citation` buttons.
5. **Media embeds** (audio/video) with captions.
6. **Related items**: policies, events.
7. **Source list** appended with `Download transcript (PDF)`.

### Tablet
- Transcript uses two-column layout (transcript left, contextual notes right) for landscape orientation when width allows.
- Sticky mini TOC for transcript sections.

### Desktop
- Hero band with featured image/video left, summary right.
- Transcript and annotations in split view; footnotes appear in right margin with keyboard-accessible `Return to reference` links.

## Media & Gallery
### Mobile
1. **Filter bar**: media type, year, license.
2. **Masonry grid** simplified to single column with lazy-loaded cards.
3. **Media detail drawer** triggered via modal (ARIA dialog) with metadata and download options.

### Tablet
- Two-column grid with consistent aspect ratio.
- Inline detail expansion instead of modal for improved context.

### Desktop
- Three-column responsive grid with hover captions; focus states replicate hover info.
- Lightbox overlay supports keyboard controls (`Esc`, arrow keys).

## Credits & Sources Page
### Mobile
1. **Search input** with filter icons.
2. **Source list**: accordion by category (e.g., Government Records, News Media).
3. **Update log** timeline stacked chronologically.
4. **Licensing summary** with icons.

### Tablet
- Filters displayed inline with search; source list shows two accordions open by default.
- Update log in two-column grid (date left, description right).

### Desktop
- Three-column layout: filter sidebar, source table, update log aside.
- Table supports column sorting and keyboard-accessible pagination.

## Interaction & Motion Guidance
- Hover states limited to subtle underline & color shift; focus rings high contrast (#0B57D0).
- Reduced motion preference disables slider transitions and timeline animations.

## Annotation Legend
- Primary actions: filled buttons.
- Secondary actions: outlined buttons.
- Citation badges: pill-shaped labels linking to references.
- Icons include text labels for clarity.
