# Component Inventory (15 Oct 2025)

| Component | Description | Key States | Notes |
| --- | --- | --- | --- |
| Header | Global navigation with skip link, language switch placeholder | Default, scrolled, mobile menu | Sticky with reduced motion support |
| Footer | Global footer with credits teaser, contact, sitemap links | Default, compact mobile | Includes newsletter placeholder (static) |
| Hero Banner | Intro section with headline, summary, CTA anchor links | Mobile stacked, desktop split | Uses background texture, lazy image |
| Highlight Card | Summaries of achievements/events | Default, hover/focus | Includes citation badge |
| Quote Slider | Rotating quotes with sources | Auto-rotate (prefers-reduced-motion off), manual controls | Keyboard accessible |
| Chronology Strip | Horizontal scroll of key dates | Scroll, focus | Progressive enhancement |
| Timeline Module | Detailed interactive timeline | Filtered, detail expanded | Batch 7 focus |
| Family Tree Diagram | Visual tree with textual fallback | Collapsed, expanded branches | Uses SVG with accessible table fallback |
| Education Timeline | Vertical timeline component | Mobile stacked, desktop timeline | Shares timeline styles |
| Tabset | For Policies topics and media types | Active, inactive, focus | ARIA roles |
| Accordion | FAQ and Controversies detail | Expanded, collapsed | Arrow indicators |
| Media Figure | Figure with caption, attribution, license | Image, video, audio | Alt text + transcripts |
| Citation Badge | Inline reference linking to sources | Default, focus | Numeric and symbolic variants |
| Source List | Detailed source listing | Filtered, grouped | Batch 10 automation |
| Update Log Entry | Timeline of updates with commit hash | Default | Links to git history |
| Breadcrumb | Secondary navigation | Mobile collapse | Structured data ready |
| Search Bar | Section-level filtering | Focus, results active | Minimal JS |
| Tag Chip | Taxonomy labels | Default, selected | Color-coded, accessible |
| Back-to-Top | Scroll utility | Hidden, visible | respects reduced motion |
| Skip Link | Accessibility utility | Focused | Always first tabbable element |
