# Clean Energy Atlas

Interactive global map of clean energy infrastructure — wind, solar, hydro, geothermal, nuclear, hydrogen, storage, and data centers worldwide.

**Live site:** [cleanenergyatlas.com](https://cleanenergyatlas.com)

## About

Built and maintained by Jim Flanary (P4 Solutions LLC). Sister site to [ikeatlas.com](https://ikeatlas.com).

The atlas is a follow-up tool used in technical recruiting and renewable-energy conversations — it gives engineers and decision-makers a clean visual reference for where clean-energy infrastructure already exists, complementing detailed site-level project conversations.

## Stack

- Vanilla HTML / CSS / JavaScript (no framework)
- [MapLibre GL JS](https://maplibre.org/) v4.7.1
- OpenFreeMap vector tiles
- Hosted on Vercel; domain via Namecheap

## Features (v0.3)

- 8 layered datasets — wind, solar, hydro, geothermal, nuclear, hydrogen, storage, DC interconnects
- Pipeline / Heatmap / DC Links toggles
- Light & dark basemap themes
- Stats bar (live count + GW totals)
- Dataset news feed
- Guided tour
- Feedback form

## Phase 1 upgrades (v0.3, May 2026)

1. **Wider default zoom** — opens on continental US (zoom 3.6) rather than world view
2. **Brighter button contrast** — 1.5px borders, 600 weight, teal hover state
3. *(deferred — Phase 2)* Tour popup → "Take the Tour" button
4. *(deferred — Phase 3)* Hawaii→Cuba marker bug fix
5. **Geographic context** — state/country labels on basemap + "you are here" badge
6. **Bottom legend strip** — always-visible energy-type chips, click-to-toggle

## Local development

```bash
git clone https://github.com/cidpandme-cloud/clean-energy-atlas.git
cd clean-energy-atlas
python3 -m http.server 5000
# open http://localhost:5000
```

No build step required.

## Deployment

Auto-deploys to Vercel on push to `main`. Production: cleanenergyatlas.com.

## License

Source code: MIT (see LICENSE if added).
Project data: see individual dataset sources cited in `data/` files.

## Contact

Jim Flanary — jimflanary@outlook.com
