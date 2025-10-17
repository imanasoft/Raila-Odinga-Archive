# Information Architecture & Navigation Model (15 Oct 2025)

## Global Navigation Structure
1. Home
2. Key Highlights
3. Early Life & Lineage
4. Political Journey
5. Speeches & Writings
6. Policies & Positions
7. International Engagements
8. Philanthropy
9. Media & Gallery
10. Controversies & Critiques
11. Timeline
12. FAQs & Glossary
13. Credits & Sources

### Secondary Navigation Elements
- **Utility Bar (top right):** Updates Log, Sitemap, Language selector (future locales), Search.
- **Footer Columns:** About the Archive, Contact, Data & Licensing, Accessibility Statement, Social Channels (official).

## Navigation Principles
- Limit top-level choices to strategic pillars while exposing contextual sub-navigation via section landing pages.
- Provide breadcrumb trail on all interior pages: `Home › Section › Subsection › Page`.
- Maintain persistent skip links: `Skip to main content`, `Skip to section navigation`, `Skip to timeline filters` (where applicable).
- Ensure nav supports keyboard activation using `Tab`, `Enter`, and arrow keys (ARIA `menubar` pattern for desktop mega menus, collapsible accordion for mobile).

## Section-Level Architecture (Level 2/3)
### Home
- Hero overview
- Quote slider
- Quick chronology
- Featured policies, speeches, and media

### Early Life & Lineage
- Overview
- Family tree
- Education timeline
- Lineage map

### Political Journey
- Overview timeline (decade filters)
- Roles & offices
- Elections
- Coalitions & alliances
- Legislative initiatives

### Speeches & Writings
- Search and filter panel
- Speech detail pages with transcript, metadata, citations
- Related documents

### Policies & Positions
- Topic index (economy, governance, social justice, etc.)
- Policy detail pages with history, evolution, sources

### International Engagements
- Regional initiatives
- Multilateral organizations
- Diplomatic missions

### Philanthropy
- Programs overview
- Impact metrics
- Partnerships

### Media & Gallery
- Photo grid with filters (type, year, license)
- Video library with transcripts
- Featured collections

### Controversies & Critiques
- Issue index
- Timeline of events
- Perspectives & outcomes

### Timeline
- Interactive timeline
- Static printable view
- Filter presets (decade, topic, role)

### FAQs & Glossary
- FAQ accordions by theme
- Glossary index A–Z
- Related resources

### Credits & Sources
- Source index with filters
- Licensing statement
- Update log
- Sitemap

## Related Content Patterns
- **On-page sidebars (desktop)** and **inline stacks (mobile)** list related items by shared tags (topic, period, people).
- Each detail page features: `Related Events`, `Related People`, `Recommended Reading`, and `Source context` panels referencing `data/sources.yaml`.
- Related items are limited to 3–5 per panel with “View all” linking to filtered indexes.

## Metadata & Taxonomy Integration
- Each page surface primary topic tags, chronological tags, geographic references, and role associations from Batch 1 taxonomy.
- Breadcrumbs incorporate taxonomy facets where relevant (e.g., `Policies › Governance › Devolution`).

## Search & Filtering
- Global search uses pre-built index (Lunr.js) generated at build time; includes result badges showing type (Speech, Policy, Event).
- Section-level filters persist across navigation using query parameters and highlight active filters with clear reset controls.

## Error & Edge States
- Provide dedicated `No results` messaging with alternative suggestions.
- Offline scenario: Service worker cached shell offers fallback message with key contacts.

## Governance
- IA updates require review by content strategy and accessibility leads to preserve clarity and compliance with sourcing policy.
