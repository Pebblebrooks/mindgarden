# Mind Garden v2.3 — Upgrade from your working v2.2 deployment

## Important: NO NEW DATABASE MIGRATION

This is a frontend, audio, navigation and game-mode upgrade. The existing `rooms` table from v2.2 is compatible. **Do not re-run** `migrate-v2.2.sql` if you already ran it. **Do not delete** your `mindgarden-db` D1 database, Pages project, or binding.

## GitHub → Cloudflare Pages

1. Download and unzip this release.
2. Open the inner `mind-garden-cloudflare` folder.
3. Copy its **contents** (not an extra nested folder) into the root of `Pebblebrooks/mindgarden` on GitHub, replacing files of the same name. It must include:
   - `public/index.html`, `public/v23.css`, `public/ambient.js`, `public/dashboard.js`, `public/multiplayer.js`, `public/sw.js`
   - `functions/api/room.js`
   - `schema.sql`, the old migration file, and documentation
4. Commit to the `main` branch. Let Cloudflare Pages deploy the new commit (fix GitHub authorization first if Cloudflare reports disconnection).
5. Cloudflare Pages build settings: framework **None**, blank build command, output directory **`public`**.
6. Cloudflare Pages → **Settings → Bindings** → **Production** must contain `DB` connected to `mindgarden-db` (reuse the existing one).
7. Wait for a successful **Production** deployment, then open `https://mindgarden-bk1.pages.dev/`. Reload the page; if an older interface remains, close and reopen the tab (service-worker cache has a new version).

## What you will see

- ONE responsive navigation bar across Home and All Games, rather than duplicate button rows.
- A full-height, illustrated garden welcome with Start Today's Games, All Games and Play Together.
- Searchable library: filter by Memory, Attention, Logic, Language, Numbers, Shapes & Time.
- Short/Standard/Long mini-game sessions (4/6/10 questions; larger sessions may take longer depending on the game).
- Personalized garden progress retained below the welcome panel.
- Five decorative visitors: butterfly, bird, bee, cat and dog. They are **not interactive** and can be turned off in **Settings → Stop moving pictures**. System reduced-motion preferences should also be respected by CSS.
- Calming music picker now offers **12 tracks/soundscapes**. Music is synthesized locally in the browser, not streamed, and requires a click to start.
- Two-player persistent multiplayer rooms, invitation link, cumulative scores, next-game selection and new 12-question choices for Mental Sums, Number Patterns and Odd One Out. No schema change required.

## Test checklist

- Home: verify one navbar and three large main action buttons.
- Library: search for "memory", filter categories, select a mini-game and try Short, Standard and Long.
- Match Pairs: open the card and choose an unlocked level.
- Settings: enable "Stop moving pictures" and verify the visitors disappear; try reduced motion in device accessibility settings.
- Music: choose Forest morning, Soft breeze, Quiet stream, Evening insects, Birdsong garden, Morning harp and Gentle lullaby; adjust volume and turn music off.
- Multiplayer: player 1 creates a room, copies invitation link; player 2 joins on a separate device; play 6-pair matching, then a 12-question game, and verify round totals update without leaving the room.
- Mobile: test 375px-wide screen and tablet; check navigation can scroll and large buttons remain usable.

## Limitations

- Max **two players per room**; no live co-op, chat or authenticated user accounts.
- Multiplayer browser-reported scores are for fun, not verified competition.
- Long quiz sessions use the existing level mechanics; the 15 levels are choices, not clinically calibrated adaptive difficulty.
- Music is generative synthesizer audio; the quality varies with speakers and browsers.
- Some existing English-language game content needs further native Chinese localization and review.
- First-time onboarding, cloud account sync, full-session restoration, caregiver consent controls and clinical validation remain future features.
- This build passed JS syntax checks, but has not been verified with a full Cloudflare deployment or live cross-device test.
