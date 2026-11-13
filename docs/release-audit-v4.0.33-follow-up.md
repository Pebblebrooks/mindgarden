# Mind Garden release audit — draft after v4.0.33

## Corrections

- Shared Next level, Replay and Easier level transitions use saved settings directly. Change settings remains explicit. Settings use an opaque backdrop to hide the previous board and scenery.
- Move & Remember advances directly to its next level; an empty movement selection cannot crash the start routine. Movement/pet queue exits now launch the next scored activity directly. A movement activity still shows its initial movement choices when first selected.
- Story memory no longer asks about the action before a drink until the drink is actually included in the story.
- Recall/drawing readiness messages register complete bilingual sentences, preventing residual Chinese text when switching back to English.
- Voice metadata tolerates missing name/language fields.
- Game grids use viewport-aware dimensions and compact choices without scaling text or reducing touch targets below 44px. Long content uses internal scrolling rather than clipping. Replacing a round resets its content scroll position.
- About documentation updated in English and Chinese.

## Verification

- All 80 automated regression suites passed after the recorded fixes and test-fixture repairs. A melody test now waits for playback readiness instead of a fixed sleep.

- 300 Next/Replay/Easier transitions across all 50 scored games in English and Chinese.
- 118 bilingual setup/launch and configuration checks.
- 240 complete original-game sessions, 1,456 rounds: levels 1 and 15, English/Chinese, light/dark state.
- 400 rendered game-boundary checks at 320×568, 390×844, 768×1024 and 1366×768: no outer-boundary or horizontal-content overflow after correction. Some long boards/content still scroll internally; this is not a claim that every board fits without scrolling.
- 400 rendered setup-dialog checks at those viewports and 100%/200% text: no outer-boundary or horizontal-content overflow.
- Shared release tests cover About, offline cache atomicity, no API caching, menu layout, profile preferences and theme behaviour.
- Broad automated audit includes accounts/API validation, profile/export isolation, multiplayer lifecycle/readiness/recovery, game rules, difficulty progression, live translations, input feedback, audio lifecycle, storage failure and pets.
- Older tests were repaired to use the current versioned bundle, current readiness controls, paired scenery, default-hidden pets and safe simulated-window disposal. Assertions were retained or updated to the current intended behaviour; old configuration assumptions are not app defects.

## Limits and release status

This is bounded testing, not proof that every possible defect is absent. The browser audit used a local static preview. Production D1 bindings/secrets, real remote-player network conditions, physical phone audio/touch behaviour and real GPU drawing were not independently verified. Wildlife tests stub GPU drawing; the cloud browser has no WebGL context.

The audited changes are included in release v4.0.34. Deployment status is reported separately after publishing.

Release v4.0.34 regenerates versioned bundles and the service-worker cache.
