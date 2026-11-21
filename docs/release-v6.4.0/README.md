# Mind Garden v6.4.0

Release date: 21 November 2026. Includes v6.3.2 (B.33, B.36, B.42–B.45; see ../release-v6.3.2) plus the items below, approved one by one on 21 November 2026. Decision records D-12 to D-17 are in APPROVAL-RECORD.md; PRD revision 1.5.

## What changed

| Item | Change | PRD / decision |
|---|---|---|
| 0 | The home "Mind Garden" title starts below the fixed top bar on every screen. The welcome area now uses the measured bar height (`--nav-clearance`) instead of a fixed 20–28 px gap. | LAY-01, QA-03 |
| 1 (B.39, B.27) | About → **For family and caregivers**: not a medical test, when to see a doctor, Dementia Singapore 6377 0700, AIC 1800-650-6060, playing together. The About intro links to it. | APP-04, D-12 |
| 2 (B.40) | Number Patterns shows **Rule type: …** above the sequence, without numbers. The Hint still gives the worked rule. | GAME-07, D-13 |
| 3 (B.41) | Gentle dominoes: a three-step guide on each player's first game, with the matching tile highlighted. **Show me how to play** in setup reopens it. | GAME-03, D-15 |
| 4 (B.38) | **Save and exit** for Sudoku and Garden picture puzzles. Setup offers **Continue saved game** or **Start a new game**. Saves stay on this device and score only when finished. | GAME-01 exception, D-16 |
| 5 (B.46) | My Progress: "Your last game: 80%, 15 points above your 30-day average (65%)." Same game and level only. | APP-04, D-17 |
| 6 | **Family album**: up to 12 named photos per player, on this device only (never uploaded, synced or in backups). My Life Album uses it; Garden picture puzzles can use one of the photos. | APP-02, D-14 |

About → Latest improvements has a Version 6.4 entry in English and Chinese. The privacy section now mentions removing album photos before removing a player.

New files: `public/family-album.js`, `public/saved-games.js`, `tests/v640-features.test.mjs`.

## Checks

- New, passing: `v640-features` (Chromium). It covers:
  - title clearance in 32 states: the 8 QA-02 viewports × English/Chinese × light/dark × 100/140/200% text;
  - the rule type tag;
  - the caregiver section in both languages, including its links;
  - the album: add, name, persist, play, remove, and jigsaw use;
  - the dominoes guide: steps, highlight, once per player, reopen;
  - Save and exit for Sudoku and jigsaw, with the board restored exactly, plus a check that other games keep the plain dialog;
  - the progress line.
- Updated, passing: `five-games` (exit dialog now has Save and exit first for jigsaw; picks Keep playing by name; asserts no score on save).
- Passing, unchanged: review-ui, about-documentation, menu-exit, menu-navigation, popup-shell, release-cache, release-cleanup, live-language, dashboard-preferences, depth-rules, grammar, game-ui-approved, new-features, gameplay-regressions, game-visuals, sequence-language, pattern-explanations, account-menu, profile-restoration, navbar-overflow, analytics-dashboard, first-release, result-dialog, v632-tester-fixes.
- Pre-existing failures at 1bd3c83 are unchanged (see ../release-v6.3.2). commercial-preview also fails on the previous commit with the same assertion (line 19, hawker exit), so it is pre-existing too.
- Rendered review (Playwright Chromium), no page errors. Evidence in this folder. A dark-mode contrast problem in the progress line was found and fixed during review.

## Evidence

| File | Screen |
|---|---|
| home-title-390-en-light.jpg, home-title-844-en-light.jpg, home-title-1366-zh-dark.jpg, home-title-1810-en-dark.jpg | Title below the top bar |
| about-caregivers-390-en-light.jpg | For family and caregivers |
| number-patterns-rule-type-390-zh-dark.jpg | Rule type tag, Chinese, dark |
| dominoes-guide-step2-390-en-light.jpg, dominoes-guide-step2-390-zh-dark.jpg | Dominoes guide |
| sudoku-save-exit-390-en-light.jpg, sudoku-continue-saved-390-en-light.jpg, jigsaw-save-exit-1366-zh-light.jpg | Save and exit, continue |
| progress-compare-390-en-light.jpg, progress-compare-390-zh-dark.jpg | Progress comparison |
| family-album-setup-390-en-light.jpg, family-album-setup-390-en-light-bottom.jpg, family-album-study-390-en-light.jpg, jigsaw-picture-choice-390-en-light.jpg, jigsaw-album-photo-390-en-light.jpg | Family album |

## Not covered

- Real iPhone Safari and Android Chrome: Back gestures, photo picking from the camera roll, and IndexedDB limits in private browsing need a device check.
- A saved game continued from setup is scored with its level but outside a My Games session sequence.
- Matching Pairs photo cards are not included.
- Not deployed. Production uses Cloudflare Pages.
