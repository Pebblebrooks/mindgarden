# Gameplay release gate — 16 November 2026

**QA status: NOT PASSED. User subsequently instructed “proceed to commit and deploy” after disclosure of the unresolved layout issues. Release v5.0.16 is authorized with these known limitations; this is not an error-free certification.**

Base: `Pebblebrooks/mindgarden`, `v5-development`, GitHub commit `6f0dec275fa9f9cacfd21ed4ed92c034a8d37dd7` (v5.0.15). The recovered local base has the identical Git tree `009d0e82f073bea96ec213f3c6ab533faf0b50d8`. Work is isolated on `gameplay-qa-v5.0.16`; release preparation subsequently advances the version to v5.0.16 under the user’s explicit deployment instruction.

## Changes prepared

- Numeric choices are explicitly identified at rendering time. The first paint has two columns, then the available width and actual font metrics determine up to six columns. Higher levels retain every answer. Long numeric labels remain intact; the font fitting floor is 18px. This is not a claim that every enlarged-text layout fits vertically.
- Long word answers can wrap within their buttons instead of overrunning their implicit grid track.
- Short-screen numeric prompts use less decorative spacing. Short landscape review screens put the next-round action beside the answer comparison.
- Board fitting is scheduled on animation frames to reduce resize-observer feedback during layout.
- About's latest-improvements entry describes horizontal numeric answers in English and Chinese.
- Two older regression expectations now follow the current UI: progress headings exclude the adjacent info button, paired scenery sets are checked without an obsolete fixed count, and Home uses cancel/confirm exit rather than an obsolete menu.

## Passed nonvisual checks

- JavaScript syntax and production bundle build.
- Standard tests: eight-player room lifecycle and synchronization simulations, separate progress/rankings, scenery preferences and player isolation.
- 42 matching-board geometries.
- Approved gameplay controls: bilingual hints, exit cancellation/confirmation, paused automatic domino turns, 180 route solutions and final-level results.
- Difficulty tests: 318 bilingual launches and progression invariants.
- Level 15: 120 complete original-game sessions and 728 correct rounds, across English/Chinese and light/dark modes, in DOM simulation.
- Gameplay regressions: ten profile records, melody completion, turn/skip flow, drawing pointer isolation and image-load fallback.
- About documentation, offline-cache safety and release-source cleanup.

These checks do not replace rendered browser testing or physical-device testing.

## Live browser method and limits

The supported cloud browser renders the actual local app bundles inside separate fixed-size, same-origin frames. Each frame uses isolated in-memory local storage. These are actual Chromium layout/rendering checks, not jsdom layout results. Launches use the app's setup and Begin handlers. Ready/recall transitions use the rendered buttons and normal timers.

Viewport sizes: 320×568, 360×640, 390×844, 430×932, 568×320, 667×375, 844×390, 768×1024, 820×1180, 1024×768, 1366×768 and 1920×1080.

The completed catalogue sweep checked all 56 activities at level 1 in English/light/100% and Chinese/dark/200%, including supported initial/ready/answer transitions. A separate completed numeric sweep checked ten numeric/clock/counting activities at levels 1, 8 and 15, including wrong-answer review, at the three phone sizes 320×568, 360×640 and 390×844 (360 checks). That earlier numeric run preceded the final first-paint two-column rule; it is not a completed 12-size numeric regression run. Neither run is an all-level, all-state, all-browser certification.

Earlier resizing measurements were discarded when they were found to race the viewport update. A twelve-frame concurrent run was not accepted as complete after the browser became unresponsive. The current runner uses batches of three fixed-size frames and records failures rather than silently skipping them.

Remaining required verification includes complete playthroughs for every activity and level, every result/replay/next-level state, all English/Chinese × light/dark combinations, real touch and keyboard interactions, mobile keyboard opening, Safari/Firefox and physical devices, real multi-device multiplayer/network behavior, audio and narration. No claim of universal error-free software is made.

## Completed catalogue results

The final candidate produced **1,674 rendered state checks across 56 activities and 12 viewport sizes**. **741 sampled states were flagged** by the layout assertions. These are failing state observations, not 741 distinct confirmed defects; repeated manifestations and measurements requiring visual triage are included. The batch count varies because the harness only records ready/recall transitions that are present at the sampled time.

| Viewport | Sampled states | Flagged states |
| --- | ---: | ---: |
| 320×568 | 140 | 93 |
| 360×640 | 140 | 69 |
| 390×844 | 140 | 41 |
| 430×932 | 138 | 30 |
| 568×320 | 138 | 111 |
| 667×375 | 138 | 101 |
| 844×390 | 140 | 92 |
| 768×1024 | 140 | 24 |
| 820×1180 | 140 | 8 |
| 1024×768 | 140 | 56 |
| 1366×768 | 140 | 56 |
| 1920×1080 | 140 | 60 |

In the final catalogue samples, numeric checks found **zero single-column answer grids, zero horizontally clipped numbers and zero answer targets below 44px**. Numeric answer scrolling remained in 52 sampled states. Three ResizeObserver loop warnings were captured, one at each of the first three phone sizes.

Additional direct browser interaction verified Mental sums: three choices in one row at 390×844/level 1/English/100%; six choices in one row at 1366×768/level 15/English/100%; six choices in two columns at 320×568/level 15/Chinese/200%. The last case still needs vertical scrolling and therefore fails the release requirement. A deliberately wrong level-1 answer displayed the actual chosen answer and the correct answer separately, and Next round advanced play.

## Confirmed release blockers

- Several dense game boards or instructions still make answer/action controls require scrolling on short or enlarged-text screens, including Count it, Read the clock, Connect the Dots, Garden Pets and Spot the Difference · Garden.
- Enlarged text can still make review content require scrolling.
- ResizeObserver loop warnings remain in some runs and need isolation.
- The full required functional/device matrix is incomplete.

The absence of single-column numeric choices is a narrow layout result; it must never be represented as a pass for the whole game or release.

## Reproducing the audit

Run `python3 scripts/build-release.py`, then `python3 scripts/prepare-gameplay-audit.py`. Start the managed preview at the output directory. Open `gameplay-audit.html?batch=0&cycle=all` for the catalogue sweep or `gameplay-audit.html?batch=0&cycle=numbers` for numeric initial/review states. A cycle navigates through four groups of three viewports and retains only its own QA records in the parent page's session storage.

The harness shows the raw results and counts. Inspect failures in the enlarged frame view. Treat viewport overflow, clipped answers, unavailable primary actions, small touch targets, runtime errors and untested required states as blockers. Inspect actual pixels and interact with controls before accepting fixes. The `.openai` preview output and `qa-*` pages must remain out of production packages.
