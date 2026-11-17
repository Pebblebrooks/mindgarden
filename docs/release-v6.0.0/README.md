# Mind Garden v6.0.0

Release date: 17 November 2026 (Singapore). User authorized audit, correction, commit and Cloudflare Pages deployment. PRD revision 1.1 remains the baseline; no design exception is introduced.

## Corrections

- UI-ICON / UI-SPACE: shared icon-only hint/rules controls, consistent utility targets, no selected-state tick over sound icons. Group gameplay has a measured content region and responsive matching board.
- UI-REVIEW: review counter follows the current review item; stale round progress and Pause are hidden during review.
- UI-SPACE: group headings and cards have separate spacing. Connect the Dots actions remain in document flow instead of covering the final board row on short phones.
- Startup: removed obsolete full-page scenery and legacy bouquet illustration renderers. Selected photos wait on a neutral background; saved videos are not overwritten by stock-scene migration. Current dashboard bouquet rendering remains.
- Documentation: approved PRD, corrected preview specification, conflict-handling protocol and future-session instructions are stored in the repository. About includes concise English/Chinese release text.

## Verification

`checks.json` records 15 passing suites, including 1,240 bilingual game-stage checks, full-bundle group flow, readiness, named arrivals, Keep hosting, shared start, review/results, profile restoration, media lifecycle, cache and cleanup. The earlier audit records 224 DOM launches across the 56-game catalogue; these are not visual certification.

Additional final checks: build, syntax checks, startup scenery, review UI, About and information help. Updated legacy test fixtures to current named invitations, catalogue creation and revision-based readiness.

Rendered Chromium review: desktop home/catalogue, Number Patterns at 390×664, 320×568 and 844×390; small-phone answer review and exit; Connect the Dots level 15 at 320×568 and 390×664. The latter exposed and verified the puzzle-toolbar overlap fix. At 320×568, the dense puzzle uses an internal scroll area to retain readable 44px cells; the shared footer remains visible. At 390×664 the complete board and its actions fit. See phone-connect-dots.jpg.

Limitations: not every game/state/theme/text-scale combination was visually exercised. Physical iOS/Android, real-device audio, and live multi-device network behavior were not certified by this run. Simulated multiplayer checks do not replace real-device testing. No claim that the app is free of all errors.

Deployment targets the existing v5-development branch and Cloudflare Pages project only. No database schema changes are included.
