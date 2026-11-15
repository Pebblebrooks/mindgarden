# Approved gameplay revision — November 15

Included in the user-approved v4.0.55 release.

## Changes

- Plain gameplay background; removed scenery selection from game Settings.
- Home/logo and Pause at the top; centred footer progress and Settings on the right. Footer space is included in board sizing.
- Icon-only utility controls, accessible bilingual labels, hover/focus help, and long-press help in the main application. Larger filled yellow Hint bulb with rays.
- Centred popup headings, labels, paragraphs and garden-growth messages.
- Confirmation before Home/Back exits. Cancellation retains the current game/menu. Confirmation click propagation is stopped so returning to the main menu does not immediately dismiss it.
- Contextual shared hints supplement native hints. Word-builder clues identify the next letter. Memory activities can show again, commercial activities provide contextual cues, and everyday hints no longer submit an answer on the player's behalf. Assisted-answer scoring already present in individual engines is retained. Online hints explain rules only.
- Domino opponent moves automatically after 950 ms. Pause clears the pending timer; resume schedules it once. Leaving or switching activities invalidates the callback.
- Connect the Dots uses ordered grid checkpoints and adjacent routes without reused cells. Later levels require filling the board. Rank/range change dimensions, route length, checkpoint density and the target route complexity. Boards are generated from valid routes. Bounded continuation search provides a hint or an explicit undo towards a known solution; no claim of a unique solution is made.
- Move & Remember shares icon controls, footer settings/progress and exit confirmation. Its no-camera, unscored activity model is unchanged.
- About and quick guide updated in English and Chinese.

## Verification

Passed:
- Dedicated approved-UI integration test: bilingual word hints, footer placement, exit cancel/confirm, automatic domino turns with pause, 180 generated route solutions, final-level results.
- 72 complete board/game sessions in English and Chinese.
- 294 bilingual depth launches; advanced domino completion; 300 existing pathway solutions.
- 300 replay/next/easier transitions; 118 setup/launch checks; practice score preservation.
- 48 movement flows, standalone movement controls and embedded origin/settings/exit checks.
- 592 language stage checks with no mixed-language issues.
- Menu navigation, result dialogs, everyday and commercial game suites.
- Syntax and release build; release cache, navbar, About, cleanup and scenery checks.

Limitation: local Chromium cannot launch because this environment denies its Unix socket creation. Real browser screenshots, touch dragging, 320 px/landscape geometry, 200% text and screen-reader usability still need visual/device verification on physical devices. DOM/logic tests do not establish accessibility conformance.

## Review notes

The first expansion ships Sudoku, Stroop Colour Match, Flag Match and Scene Recall in v4.0.55. Later proposals remain on the roadmap. No database migrations or Workers deployment are required.
