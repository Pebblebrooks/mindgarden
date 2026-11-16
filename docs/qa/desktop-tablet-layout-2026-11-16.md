# Desktop/tablet gameplay layout follow-up — 16 November 2026

Status: v5.0.17 release preparation. The user explicitly authorized commit and deployment after disclosure of the remaining verification limits. This report does not supersede the earlier release-gate report or certify all devices/states.

## Implemented changes

- Single picture references and picture answer choices share square containers and artwork sizing.
- Language, background audio and game sounds are directly accessible above gameplay. The footer offers Change level with the existing discard confirmation; cancelling preserves the game.
- My Progress uses a taller panel and ten history entries per page, with its history area scrollable when the viewport cannot show all ten.
- Desktop/tablet game surfaces use available viewport height. Dense boards, optional spacing and footer placement adapt to preserve the playable area at 100% text size.
- Count It uses eight columns for noninteractive counted objects on desktop/tablet. Numeric choices remain separate and horizontal.
- Dense odd-picture and jigsaw boards fit their available space; game content and answers are not removed to force a fit.
- Connect the Dots and Sudoku show a collapsed, labelled Rules disclosure. Immediate task instructions remain visible. Sudoku's action instruction is shortened in both languages.
- About's bilingual latest-improvements entry and the project instructions document the layout/copy behavior.

## Browser method

Actual candidate bundles run in Chromium frames at fixed CSS viewport sizes, with isolated memory storage and real timers. The harness opens each activity through its setup/Begin handlers and samples initial, supported ready/recall and answer states. It checks play-area overflow, clipping, offscreen controls, numeric columns and numeric/footer target sizes. It does not substitute DOM simulation for rendered layout.

Sizes: 768×1024, 820×1180, 1024×768, 1180×820, 1366×768, 1920×1080. Profiles: English/light and Chinese/dark, both at 100% text size. All 56 catalogue activities are included.

Reproduce after building and preparing the managed preview:

`gameplay-audit.html?batch=0&scale=100&matrix=large&cycle=all&level=15`

Change `level` to 8 or 1 for the corresponding sweep. Counts can differ slightly when a ready transition is not yet present at the sample time.

## Results

Completed full-catalogue sweeps on the penultimate candidate:

| Difficulty | Rendered checks | Flagged states | Runtime errors |
| --- | ---: | ---: | ---: |
| Level 1 | 840 | 0 | 0 |
| Level 8 | 840 | 1 | 0 |
| Level 15 | 852 | 3 | 0 |

Each sweep covered all 56 games and all six sizes in both profiles. Remaining flags were Remember the Order (level 8), Word Builder (level 15), and Count It (level 15, both languages), all at 1180×820. The final adjustment reduces noninteractive counting tiles from 56 to 52px, uses 132px memory-order cards in a wider responsive grid, and compacts Word Builder's reference tile and letter choices. The first targeted rerun produced 48 checks per level: levels 1 and 8 passed; level 15 had six sequence-card failures caused by an older, more specific two-column rule. Count It and Word Builder passed all their retests. After correcting that specificity conflict, Remember the Order passed another 24 checks at each of levels 1, 8 and 15 (72 total), with zero flagged states and zero runtime errors.

Final outcome: all identified failures in the sampled desktop/tablet matrix were corrected and the affected games retested successfully. This is combined full-catalogue coverage plus targeted regression coverage, not a fresh full-catalogue sweep after the last isolated sequence selector change. It is not an all-state/all-device certification. The subsequent user instruction authorizes committing and deploying these changes with the documented verification limits.

Earlier iterations exposed odd-picture, picture puzzle, pet, link and spot-picture overflow; those specific fixes passed the completed sweeps above.

Direct interaction verified Sudoku Rules opens without play-area overflow at 1024×768. Highest-level Count It has eight columns and no play-area overflow at 1024×768; the highest-level picture puzzle fits at 768×1024.

## Nonvisual validation

Passed: JavaScript syntax; production build; approved gameplay control and exit behavior; 135 uniquely solvable Sudoku boards and 108 bilingual expansion rounds; 42 board geometries; gameplay regression coverage for profile isolation, final melody notes, turn/skip, drawing and image fallback; ten-entry progress pagination and analytics; bilingual About documentation; offline cache and release-source cleanup.

## Remaining verification limits

The browser sweep samples selected states, not every round of every level. Complete playthroughs, all results/replay/next-level states, all four language/theme combinations, all enlarged-text/mobile/short-landscape cases, real device keyboard/touch behavior, Safari/Firefox, narration/audio and live multi-device multiplayer are not certified by this report. The earlier mobile/enlarged-text release blockers remain open unless separately retested. No universal error-free claim is made.
