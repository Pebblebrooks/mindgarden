# Mind Garden v2.5 — four-card welcome + dark mode

This release follows the approved four-card welcome-page reference and its mint All Games layout. It is an incremental replacement of v2.4 and preserves the two-player Cloudflare Pages + D1 backend, music, profile data, and existing activities.

## Deploy to GitHub and Cloudflare Pages

1. Back up your current GitHub `Pebblebrooks/mindgarden` code before uploading the replacement files.
2. Upload the **contents** of this `mind-garden-cloudflare` directory to the **root** of `Pebblebrooks/mindgarden` on branch `main`. Do not upload a parent folder around `public` and `functions`.
3. Cloudflare Pages project: `mindgarden-bk1`; build output directory: `public`; build command: blank. Keep the Functions directory at the GitHub repository root.
4. Production binding: variable `DB` → existing D1 database `mindgarden-db`. Do not create another database. Make a new production deployment after any binding change.
5. Refresh the production URL `https://mindgarden-bk1.pages.dev/` and, if stale, close older tabs / hard-reload after the new service worker activates.

## Light / dark / automatic display

Navigate to **Settings → Appearance** and choose **Light**, **Dark**, or **Match device**. These options are stored on the device for the current local app configuration. The garden welcome artwork gets a dusk overlay in Dark mode; the All Games catalog, cards, and filters switch to a teal night palette. High-contrast settings remain separately available.

## Multiplayer troubleshooting (do not blindly rerun migrations)

Visit `https://mindgarden-bk1.pages.dev/api/room?action=health` in a browser. If it reports missing columns, in Cloudflare D1 Console run:

```sql
PRAGMA table_info(rooms);
```

For any *missing* column, run only its corresponding ALTER TABLE statement from `migrate-v2.2.sql`. Do **not** run an ALTER TABLE statement for a column that already exists. The server returns a targeted schema error when it detects an old table. Existing two-player invitation links and multi-round rooms remain supported. Real network multiplayer still must be tested from two devices after deployment.

## What changed

- The welcome layout now follows the approved bright garden composition with four working pastel buttons: All Games, Play Together, My Progress, Leaderboard.
- An optional separate `Start Today's Games` control preserves the guided daily journey.
- A single navigation bar remains on both pages, plus a compact More menu on phones.
- All Games keeps its working search, category filters, difficulty choice, session length, and game library in a compact card grid.
- Dark mode and automatic OS theme have matching visual treatments, including readable text contrast.
- v2.5 service-worker cache key refreshes static assets. Multiplayer API routes are not cached.

## Verification

Syntax and archive integrity can be checked with `npm run check` and `unzip -t`. Full interactive browser and real Cloudflare D1 tests are still required after deployment.
