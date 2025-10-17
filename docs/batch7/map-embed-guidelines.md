# Map Embed Guidelines (15 Oct 2025)

## Component Summary
`LocationMap.astro` renders OpenStreetMap iframes using coordinates from `content/locations/*.yaml`. Bounding boxes scale with
the requested zoom level, and each embed includes a caption with source identifiers.

## Accessibility
- Captions summarise the place name, description, and source IDs for screen reader context.
- Lazy loading keeps the initial payload light; a fallback paragraph links directly to OpenStreetMap for users who block iframes.
- Reduced-motion media queries disable smooth scrolling that some browsers apply to embedded maps.

## Performance & Resilience
- No third-party JavaScript is loaded; the embed relies on a single iframe with lazy loading and a textual fallback.
- When coordinates are missing the component renders a placeholder block, preventing layout collapse and signalling data gaps.

## Next Steps
- Add support for multiple markers (e.g., campaign routes) once Batch 8 introduces richer geospatial data.
