# Mind Garden v2.4 — Approved Design + Multiplayer Diagnostics

1. Back up your current GitHub version.
2. Upload the **contents** of this `mind-garden-cloudflare` folder to the root of GitHub repository `Pebblebrooks/mindgarden`, replacing older files; commit to `main`. Keep `functions/` and `public/` at repository root.
3. In Cloudflare Pages, verify build output directory is `public`, build command blank, production D1 binding name `DB` and database `mindgarden-db`.
4. **No automatic SQL migration is performed.** Follow `CHECK-MULTIPLAYER.md` to inspect the four v2.2 columns, and add only columns that are missing.
5. Confirm production deployment on `mindgarden-bk1.pages.dev`; refresh with Ctrl+Shift+R. Service worker cache version is v24.
6. Visit `/api/room?action=health`. `ok:true` means all columns required by multiplayer are present and binding resolves. Create and join a new room on separate devices.
7. Confirm Home matches the approved immersive garden mockup, with a single teal navigation and central welcome panel. Confirm All Games uses four-column compact cards on a wide desktop and category filters work.
8. Music and animated animals stay optional and honor reduced-motion settings.

### Contents
`public/garden-landscape.webp`: original scenic garden artwork (no baked-in UI)
`public/v24.css`: visual redesign override
`public/dashboard.js`: home/library layout and interactions
`functions/api/room.js`: server-side multiplayer with health diagnostic and clearer errors
`public/sw.js`: updated cache for new assets

This is a design/function upgrade, not clinical software. Two-person multiplayer rooms and friendly scores remain unchanged.
