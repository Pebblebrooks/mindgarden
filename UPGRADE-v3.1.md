# Mind Garden v3.1 — the living garden

## What changed

- Removed the sailboat/sea banner from the home page. The expanded garden now has a real progress flower bed containing twelve planting positions.
- The bed uses the existing 0–60 growth system: seeds, sprouts, buds, opening flowers and full bloom. Choosing a flower, switching player or planting a new garden immediately updates both the bed and the progress panel.
- New daylight and sunset garden artwork contains no baked-in birds or butterflies. Dark mode selects the sunset image; Auto follows the device's color scheme.
- Birds and butterflies use locally bundled, genuinely animated 16-frame transparent GIFs with flapping wings. Their travel paths remain animated separately. Gentle mode uses slower GIFs. Off, reduced motion and paused scenes show still posters instead of continuously running GIFs.
- The daily-game button and its descriptive caption are centered on separate lines at every screen size.
- Redesigned progress panel: large growth total, next-stage explanation, accessible progress bar, clear illustrated milestones, separate daily statistics and a prominent flower-selection button. The panel grows with its content instead of clipping text into a fixed height.
- Drawn icons on the home page and progress panel no longer depend on emoji fonts.

## Deployment

Upload the package contents to the root of `Pebblebrooks/mindgarden`, keeping Cloudflare Pages output `public` and D1 binding `DB` → `mindgarden-db`.

**No new database migration is needed from V3.0.** If upgrading from V2.9 or earlier and using eight-player multiplayer, run the included `migrate-v3.sql` first as described in `UPGRADE-v3.0.md`.

The cache version is `mind-garden-v31`, with release-specific script/style URLs and offline precaching for both garden images, animated GIFs and still posters. Refresh browsers after deployment. Local player data and the V3.0 multiplayer protocol are unchanged. No live deployment was performed during this revision.

## Preview

The supplied standalone HTML preview embeds the two garden backgrounds and all GIFs, and supports local games, progress and theme/motion settings. Online multiplayer requires the deployed backend. Use Settings or the More menu to switch Light/Dark/Auto.

Rebuild a preview with `python3 scripts/build-preview.py /path/to/preview.html`.

## Verified

- JavaScript syntax checks.
- Chromium rendering inspected at desktop and mobile sizes; screenshots checked for daylight, sunset and visible progress stages.
- Browser assertions at 1440, 768, 390 and 320 pixels; Chinese and larger/high-contrast text; no horizontal overflow; separate centered button/caption.
- Browser checks for day, sunset and Auto switching; actual GIF pixel/frame changes; poster substitution during dialogs, Off and reduced motion.
- Flower-bed checks at 0, 9, 36 and 60 points, flower selection, garden reset and player switch.
- Existing eight-client English/Chinese multiplayer and SQL regression tests.

For reproducible checks: Node.js 24+, `npm install`, `npm run check`, `npm test`. For browser tests install Chromium with `npx playwright install chromium`, then `npm run test:browser`. An existing browser executable can be selected with `BROWSER_EXECUTABLE=/path/to/chromium`.

## Asset notes

`garden-day.webp` and `garden-sunset.webp` are generated artwork derived from the prior garden composition. The built-in image generator produced the clean backgrounds; the packaged files are optimized WebP versions. Neither contains wildlife. Prompt specifications: preserve the blossom tree, bench, fence, hills and stone path; remove every animal and insect; keep the lower-middle lawn open for a live flower bed; no text or UI. The daylight version uses bright blue sky. The sunset version uses a low orange sun, apricot/coral/amber sky fading into muted plum, golden leaf edges and teal foreground shadows.

The bird and butterfly GIFs were rendered from original articulated SVG artwork in `wildlife.js`, then encoded with transparent backgrounds. They are illustrated animations, not photographic wildlife. `scripts/build-wildlife-gifs.cjs` retains the frame renderer; shipped GIFs need no build step.
