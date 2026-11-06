# Mind Garden v2.8 — Viewport layout and multiplayer handoff fix

This is a **full replacement project** for the existing Cloudflare Pages GitHub repository `Pebblebrooks/mindgarden`, NOT for the unrelated `mind-garden.workers.dev` application.

## What's fixed

1. Desktop Home uses a true, measured viewport layout: Welcome **50dvh**, panoramic sea **25dvh**, and growth details **25dvh**. No large nested garden thumbnail or blank bottom region. Very short desktop screens and mobile devices allow additional vertical height so controls aren't clipped.
2. Navbar automatically switches to a hamburger menu on narrower phones/tablets (<=1100px). Menu contains language, settings, theme and music controls.
3. Multiplayer room poll runs throughout active games, and on focus/visibility return. The guest automatically enters the next round after the host chooses it; no new invitation or room is required.
4. Invitation links use `?room=ABC234`. Opening one automatically brings up the join dialog with the code prefilled; the friend enters/accepts their display name and taps **Join room**. No automatic identity submission occurs. Existing player room tokens can reconnect without trying to join a full room again.
5. Front-end assets now have versioned URLs and the service-worker cache name is updated. `_headers` requests a fresh HTML shell on subsequent deployments.

## Deployment — keep the existing database

1. Download and unzip the v2.8 package. Copy the *contents* of `mind-garden-cloudflare/` (including `public/`, `functions/`, and `public/_headers`) to the root of `Pebblebrooks/mindgarden` on GitHub.
2. Commit to the `main` branch. Cloudflare Pages should build automatically.
3. Check **Settings -> Bindings -> Production**: D1 binding variable is exactly `DB`, database is `mindgarden-db`.
4. Confirm deployment status is successful, then open **https://mindgarden-bk1.pages.dev/** (not a hash-prefixed one-off deployment).
5. Hard refresh (`Ctrl+Shift+R` / `Cmd+Shift+R`) on each device. If an installed PWA still shows the old layout, close and reopen it or test in a fresh browser tab. Verify page source contains `mind-garden-release` set to `v2.8.0` and the stylesheet URL `v28.css?v=28-1`.

**D1 migration:** This release makes no schema change. If your v2.2 migration was already applied, do not run it again. Database check: `https://mindgarden-bk1.pages.dev/api/room?action=health`. Missing columns must be addressed individually, not by resetting the database.

## Acceptance checks

- On a 1440x900 desktop viewport: welcome 450px, sea 225px, progress 225px; no extra scroll.
- On a 390px phone: menu is collapsed to **☰ More**, and clicking opens navigation and display modes.
- Host creates room, copies invitation link. In a different browser/device, opening the URL shows the correct six-character room code already filled in. Tap **Join room**.
- Both players finish matching pairs. Host selects **Mental sums**, clicks **Start next round**; the guest should see the quiz automatically within a few seconds, keeping the same room code. Then repeat with Number patterns and return to the same scoreboard.
- Returning to the app from a background tab should refresh room status promptly.

## Troubleshooting

If the guest doesn't move, keep the same room and bring the guest tab into focus; the new code fetches status on focus. Confirm both devices have v2.8 loaded. If the D1 health endpoint shows missing schema columns, apply **only** the missing migration commands. If a request fails, inspect **Workers & Pages -> mindgarden -> Observability / Functions logs**; note the exact error. No permanent auth or anti-cheat service is included: invitations are private token-based friendly rooms, not clinical or regulated-care infrastructure.

## Test coverage

Checked via browser rendering with in-memory HTML/CSS/JS: desktop 1440x900, compact desktop 1200x650, mobile 390x844, hamburger menu operation. Checked with two separate browser pages and a simulated status/submit/advance backend: join -> round 1 -> results -> host advances -> guest enters round 2 -> both finish and see results. Production deployment and live Cloudflare D1 requests still require user-side confirmation.
