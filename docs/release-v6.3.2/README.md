# Mind Garden v6.3.2

Release date: 21 November 2026. Fixes for Phase 2 tester reports B.33, B.36, B.42, B.43, B.44 and B.45 (Project Testing Tracker, Mind Garden tab). No design departures, so no new decision record is needed.

## What changed

| Item | Change | PRD IDs |
|---|---|---|
| B.36 | The phone or browser Back button now steps back inside Mind Garden instead of going to the previous website: dialog or menu → previous menu or close; game → the usual unfinished-game confirmation; All Games → home. Home itself adds no history entry, so Back from home still leaves. New file `public/browser-back.js`. | GAME-01, A11Y-01 |
| B.42 | Picture bingo redraws in the newly chosen language straight away (called picture, board labels, buttons and the current message). Game state is kept. | VIS-04, APP-04 |
| B.43 | The Picture bingo hint no longer shows "Look for ." when every called picture is already matched. It now says to call the next picture. The Chinese hint ends with 。. | GAME-04 |
| B.44 | Daily routines no longer shows the answer inside the question. The asked-for step (and any steps between) appear as "?". At higher levels, more steps are hidden. | GAME-04, GAME-07 |
| B.33 | Home cards follow the menu order: Today's Games, My Games, All Games. | VIS-04, APP-01 |
| B.45 | The Today's Games ⓘ explains how the three games are picked (lowest recent scores first; new players get a mix that changes each day). | APP-04 |

About → Latest improvements has a Version 6.3.2 entry in English and Chinese. The user guide needed no change.

Reviewed but not changed (no defect, or a design change that needs owner approval under PRD-03/PRD-04): B.34, B.35, B.37 (per-game level memory is required by AGENTS.md "Restore … per-game difficulty"), B.38, B.39, B.40, B.41, B.46.

## Checks

- New: `tests/v632-tester-fixes.test.cjs` (EN and ZH start): home order, browser Back through library, setup, game confirmation, keep playing, exit and in-app home; Daily routines levels 1/8/15; Picture bingo language change and hint. Passing.
- Updated: `review-ui` (home card order). Passing.
- Passing, unchanged: about-documentation, menu-exit, menu-navigation, popup-shell, release-cache, release-cleanup, live-language, dashboard-preferences, five-games, depth-progression, depth-rules, result-dialog, grammar, game-ui-approved, new-features, gameplay-regressions, game-visuals, sequence-language, pattern-explanations, account-menu, profile-restoration, navbar-overflow.
- Failing before and after this change, with the same error (pre-existing at 1bd3c83, not caused by v6.3.2): v4-design, v5-flow, personal-games, bingo-ui, all-level-sessions, daily-and-controls, welcome-account-options, ui-followup, review-corrections. game-language-stages and extended-language-stages time out at 280 s on both.
- Rendered in Chromium (Playwright headless) with no page errors. The real browser Back was checked in Chromium (library → home; in game → confirmation).

## Evidence

| File | Screen |
|---|---|
| phone-390-en-light-home-order.jpg | Home order, phone |
| desktop-1366-zh-light-home-order.jpg | Home order, Chinese desktop |
| phone-390-en-light-routine-l1.jpg | Daily routines level 1, step hidden |
| phone-390-zh-light-routine-l15.jpg | Daily routines level 15, three steps hidden, Chinese |
| phone-390-zh-light-bingo-after-language.jpg | Picture bingo after switching to Chinese, hint shown |
| phone-390-en-light-back-confirm.jpg | Browser Back during a game shows the exit confirmation |

## Not covered

- Real iPhone Safari and Android Chrome: hardware/gesture Back and Safari swipe-back need a device check.
- Dark theme, 140%/200% text and the full QA-02 viewport matrix were not re-run; the changed screens reuse existing layouts.
- Complete the saying keeps its sayings in the language the round started in (unchanged behaviour); the rest of its screen follows a language change.
- Not deployed. Production uses Cloudflare Pages.
