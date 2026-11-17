# Additional audit — 17 November 2026

Scope: source/startup, saved media, account restoration, game/menu/group regressions and cache integrity. PRD references: APP-05, APP-03, VIS-01, QA-03. Local working copy; no deployment.

## Newly confirmed and corrected

1. The inline startup script still generated an obsolete full-page SVG garden. Removed its generator, DOM host and dead styles; neutral page colours remain until selected scenery renders. This is generated artwork, not a stock scenery file. Current selectable backgrounds remain available.
2. A saved photo fell back to stock scenery while IndexedDB was loading. A pending photo now keeps a neutral background, then displays the saved photo. If storage is unavailable or the photo is missing, the supported scenery remains the fallback.
3. Scenery migration rewrote heroLight/heroDark to a stock scene on every apply, overwriting video selections. Migration now normalizes only scenery keys; explicit selection still updates the correct media preferences. Video restoration has a neutral backing.
4. Matching Pairs regression coverage queried obsolete mode buttons, failing before checking the actual game. Updated it to use the current per-game Timing selector. Untimed expiry, pause and timed expiry pass.

## Evidence

Build and syntax checks passed. Targeted startup regression, all 22 scenery light/dark pairs, photo/video lifecycle, per-player preferences, account profile restoration and offline-cache checks passed. All 380 cache-manifest assets exist. Broader audit results are recorded in additional-checks.json; failures/timeouts must not be counted as passes.

## Remaining limits

This is not complete visual certification. Actual cold-load/update on iPhone Safari, reduced bandwidth, all viewport/text-size combinations and all game states still require rendered/device review before release. The shipped site remains unchanged until deployment is approved. No database or personal records were deleted. About/guide remain scoped to shipped behaviour.

## Broader sweep results

Eight of twelve initial suites passed: account status, name validation, gameplay regressions, menu controls, group flow, release cleanup, About/guide and grammar. Matching-mode was corrected and passed on rerun. The info-help fixture declared a non-hover device but expected hover/focus tooltips; A diagnostic rerun with hover enabled got past focus, but its click/tooltip lifecycle expectations still failed. This is unresolved pending a rendered check of the current info-dialog behaviour; the original failing test is retained. The multiplayer lifecycle fixture stops at an old requirement to display room codes in invitation text; current UI intentionally shows host names per GROUP-01. Its remaining lifecycle assertions are therefore unverified by that run. The language-stage sweep exceeded 110 seconds and remains incomplete. Separate current group-flow coverage passed; this does not replace the incomplete older lifecycle sweep.

No claim is made that every app error has been found. Production deployment is still gated on rendered review.
