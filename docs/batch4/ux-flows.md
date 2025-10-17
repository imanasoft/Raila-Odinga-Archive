# UX & Keyboard Flows (15 Oct 2025)

## Primary User Journeys
1. **Researcher reviews 2007 election context**
   - Home › Timeline filter by decade `2000s` › Select `2007 Presidential Election` › Jump to related policies and speeches.
   - Key tasks: apply filters, open event detail, access citations, download media.
2. **Student explores early life and family lineage**
   - Home hero CTA `Explore Early Life` › Early Life landing › View family tree › Open person profile › Follow breadcrumb back.
3. **Journalist fact-checks policy positions**
   - Global search `infrastructure` › Policies hub filtered by topic › Open policy detail › Copy citation › Navigate to related speeches.
4. **Accessibility advocate audits sourcing**
   - Footer `Credits & Sources` › Filter by `Government Records` › Review licensing › Access update log with commit references.

## Keyboard Navigation Standards
- **Global**
  - `Tab` order: Skip links → Header nav → Search → Main content → In-page navigation → Footer.
  - Skip links visible on focus, anchor to landmarks using `id` and `aria-label`.
  - Focus ring: 3px solid #0B57D0 with 2px offset shadow for contrast.
- **Navigation Menu**
  - Desktop: ARIA `menubar` with left/right arrow to traverse items, down arrow opens submenu, `Esc` closes.
  - Mobile: Hamburger toggles `nav` dialog; trap focus within menu until closed via `Esc` or close button.
- **Timeline Filters**
  - Filter checkboxes accessible with `Space`; `Shift+Tab` returns to filter header.
  - `Enter` applies filter immediately; `Alt+R` (accesskey) resets filters.
- **Interactive Timeline Component**
  - Enhanced mode: arrow keys move along events; `Enter` opens event drawer; `Esc` closes.
  - Static fallback ensures all content remains in DOM as ordered list.
- **Family Tree Visualization**
  - Keyboard toggles between generations with `Tab`; interactive nodes accessible as buttons with `aria-expanded` states.
  - Provide CSV download link before interactive component.
- **Media Lightbox**
  - `Tab` cycles controls, `Esc` closes, arrow keys move between assets, `Shift+?` displays help overlay.

## Screen Reader Announcements
- Live regions announce filter changes (`aria-live="polite"`).
- Timeline event selection announces year, title, and summary snippet.
- Speech transcript footnotes provide `aria-describedby` linking references to citations.

## Form & Search Interactions
- Search suggestions accessible via `aria-activedescendant`; `Enter` selects highlighted suggestion.
- Filter chips toggle with `Space`; announcement indicates selection state.

## Error Handling Flows
- If no search results: focus moves to message with suggestions and link to sitemap.
- When media fails to load: fallback message with source info and contact link.

## Responsive Behavior Considerations
- Breakpoint-specific navigation (hamburger vs horizontal) preserves identical focus order.
- Sticky elements use `position: sticky` with `top` offsets to avoid occluding skip links.

## Task Completion Criteria
- Each persona scenario completes without pointer device.
- All dynamic announcements degrade gracefully when JavaScript disabled (static content visible).
