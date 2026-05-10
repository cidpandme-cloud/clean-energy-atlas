# Changelog

## [0.3.0] — 2026-05-09

### Phase 1 — Distribution Blocker Upgrades

**Added**
- Default map view now opens on continental US (`center=[-96, 39], zoom=3.6`) instead of world view
- State/province boundary lines (admin_level=4) on light basemap, visible from zoom 3
- State labels on basemap from zoom 4
- Widened city-label rank filter from 1–4 to 1–8 for better mid-zoom context
- "You are here" badge — top-left pill showing region + lat/lon + zoom (e.g., `Texas, USA · 31.5°N 100.0°W · z5.2`). Uses client-side bbox lookup for 51 US states + ~35 countries; zero API calls
- Bottom legend strip — 8 always-visible energy-type chips with colored dots and emoji. Click-to-toggle layers; stays in sync with left-panel checkboxes
- New CSS variable `--legend-h: 38px`; `#app-main` bottom now `calc(--stats-h + --legend-h)`

**Changed**
- Header buttons (Database / Theme / News / Help / Log Out) and layer action buttons (All On / All Off / Pipeline / Heatmap / DC Links) — bumped to 1.5px borders, 600 weight, primary text color, teal `#0A7E8C` hover
- `buildLightStyle()` refactored to id-based `setLayer()` lookup for cleaner layer injection

**Deferred to later phases**
- Phase 2 — Replace auto-launching tour popup with on-demand "Take the Tour" button (Upgrade 3)
- Phase 3 — Fix Hawaii markers rendering at Cuba's location (Upgrade 4 — needs root cause investigation)

### Notes

- Repo split out from the live cleanenergyatlas.com bundle into a clean source-first project ("Path 2") so future changes can be version-controlled and reviewed before deploy.

## v0.3.5 — 2026-05-09 (Cosmetic polish round 2)
- **Stat numbers** much higher contrast — gold (#ffd66e) on dark, burnt-orange (#b8541b) on light. Layer counts (Transmission Lines 307, Substations 205) use the same accent.
- **Land orientation when zoomed in** — state labels now appear at z3 (was z4), city labels show all ranks at high zoom, new town/village labels at z7+. Country labels persist all the way to z10+.
- **Border contrast** — left rail, header, button outlines now visible (border opacity 0.08→0.16 dark, 0.10→0.22 light; active 0.18→0.32 / 0.20→0.42).
- **Dark mode label brightness** — country/state/city labels brighter (#cfdcf0 / #a8bfdb / #94afd0) with darker halos.
