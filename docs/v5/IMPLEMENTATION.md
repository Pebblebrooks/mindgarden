# Mind Garden v5.0.0 — review build

This implementation lives on `v5-development`, based on v4.0.56 commit
`9e64502ab643439ca232e306fd4e2301a05d26a9`.
`main` and `archive/v4.0.56-before-v5` remain unchanged.

## Implemented

- Home game actions stay available even when secondary home cards are hidden.
  New player cards default to visible; explicit existing preferences are retained.
  Enjoy the garden has a labelled Back to games action.
- Labelled Menu replaces the crowded toolbar. Existing account, profile, sound,
  motion, appearance and text-size controls remain available inside the menu.
- English / 中文 opens an explicit language picker; opening it changes nothing.
  Language names are protected from automatic translation.
- Today’s Games uses the existing per-game preparation screen directly, with
  progress through the daily selection, saved settings, Options and one Begin.
  The underlying matching reveal/readiness behaviour is retained.
- All Games uses compact responsive rows, wrapped category buttons, search and
  recent games derived from the selected player's real history.
- My Games uses Edit mode for Remove controls and retains Undo without deleting scores.
- Information opens in a native modal dialog with keyboard dismissal and focus return.
- Large text reflows, optional tagline hides at 150%+, and the home actions remain
  reachable. Menu and game-action layouts have been checked at 200% on phone.
- Friendly two-digit guest display names; internal multiplayer identity is unchanged.
- About, first-time setup and affected FAQ copy updated in English and Chinese.
- Version metadata, language catalogue, JS/CSS bundle and offline cache rebuilt as 5.0.0.

## Validation performed

- Release build and syntax checks passed.
- `tests/v5-flow.test.cjs` passed: language picker, fresh profile defaults, single daily
  preparation, Begin launch, favourites edit/remove/Undo and score preservation,
  catalogue search and categories.
- `tests/personal-games.test.cjs` passed: 126 bilingual setup/launch cases and
  324 replay/next/easier transitions, saved difficulty and unscored-practice checks.
  Its information-control assertion was updated for the approved modal behaviour.
- `tests/account-flow.test.cjs` passed using a simulated server: selective copying,
  stable profile identity, credentials excluded from player exports and sign-out isolation.
- `tests/player-preferences.test.cjs` passed.
- Eight-player room API/migration tests passed. The broader `npm test` run stopped
  at `tests/multiplayer-ui.test.mjs:45`, which still expects three wildlife posters;
  the current source has removed those home animals. The whole legacy suite is not green.
- Browser inspection in 390×844 and 768×1024 frames: home entry, information dialog,
  direct matching start, language picker, Chinese catalogue and dark appearance.
  Phone home at 200% text had equal document and viewport widths (375 CSS pixels
  excluding scrollbar), with the primary action fully visible within the frame.

## Remaining release gates

This is a review build, not a production deployment or a claim of exhaustive QA.
Real-device touch, landscape layouts, all 18 scene contrast measurements, sound,
screen-reader behaviour and complete game/result coverage still need validation.
Online accounts and multiplayer must be tested against isolated infrastructure.
No database was copied, bound, migrated or modified for this work.
No Cloudflare project was created, changed or deployed.

Before any hosted v5 testing, create a separate Pages project and D1 database,
verify branch/build settings and all bindings, and use test-only account records.
Do not point v5 tests at v4's database or merge into main before review.

Local review: build with `npm install`, `npm run build`, then serve `public/` on a
separate local origin. Static previews support solo UI, not server account/room APIs.
