# Mind Garden v2.7 — Approved 50 / 25 / 25 Layout

This update uses the approved desktop proportions and improves mobile navigation.

## Changes
- Welcome section: 50% of desktop viewport height. Four game cards and daily-games button remain prominent.
- Panoramic sea illustration: 25% of desktop viewport height, full viewport width.
- Garden-progress details: 25% of desktop viewport height, with milestone tracker, next target, daily streak, and flower controls.
- Mobile (up to 1250 CSS px, where the full nav no longer fits): a hamburger menu with Home, All Games, Play Together, My Progress, Leaderboard, Family View, player switcher, Settings, Music, Language, and Light/Dark/Auto theme choices.
- Narrow phones: sections may grow taller so controls never become too small or overlap.
- No database changes. Existing multiplayer Pages Functions and D1 binding remain intact.

## Upgrade
1. Extract this archive. Upload the CONTENTS of `mind-garden-cloudflare` into the root of your existing `Pebblebrooks/mindgarden` GitHub repository.
2. Replace matching files. In particular, confirm `public/v27.css`, `public/sea-banner.svg`, `public/dashboard.js`, `public/index.html`, and `public/sw.js` are present.
3. Commit to `main`; wait for the Cloudflare Pages `mindgarden-bk1` production deployment to complete.
4. Keep Pages build output directory `public`, and keep D1 binding `DB` → `mindgarden-db`.
5. Reload the live site. If the old page appears, close the tab and reopen it; the service worker's cache version is now `mind-garden-v27`.

## Test checklist
- Desktop 1440×900: welcome, sea and progress each occupy the intended 50/25/25 visual bands; the welcome buttons remain usable.
- Mobile 390×844: nav collapses to `☰ More`, menu opens, and all links are visible; no horizontal scrollbar.
- Menu Light / Dark / Auto choices work and persist on reload.
- All Games search, filtering and game launch still work.
- Play Together creates/join rooms using existing Cloudflare D1. If multiplayer fails, check `/api/room?action=health` and the D1 migration from v2.2.

The full landscape background is decorative. Animated visitors remain optional and respect the motion setting.
