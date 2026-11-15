# v5.0.2 approved corrections and audit status

## Implemented

The 15 confirmed findings A01–A15 in [the baseline audit](AUDIT-v5.0.1.html) are addressed in source:

- Garden opens one Animation section with Off, Gentle and Standard choices.
- Help controls have a CSS-drawn circle and 48px hit target; opening information sets dialog semantics and returns focus when closed.
- The menu uses a centred, bounded icon/label column with aligned icons and compact audio/animation switches. Scenery & media is a normal full row. Scene arrows flank the name and counter.
- Player cards show rename and delete icons directly. Deletion targets the named stable ID, requires exact-name confirmation and connected-account reauthentication, and preserves the active player when another card is removed. Cancelling keeps records. Deleting the sole local player creates a fresh default profile.
- Sign-in omits repeated introductory text, has an eye icon with an accessible name, and retains conditional device sign-in.
- About Version and section headings are centred; reading paragraphs use the full content width and remain left-aligned with natural wrapping. Copyright and artwork credits have dedicated formatting.
- Scenery caption is centred at the bottom of the scenery above Enjoy the garden. The secondary-card switch says More game cards, since the two primary actions remain visible.
- English and Chinese About instructions reflect the actual menu, player actions and Animation controls.

## Validation

Build and JavaScript syntax checks pass. `npm run test:v502` covers the changed flows, information dialog, exact-card deletion, account sync, device sign-in, About, preferences, popup shell, bilingual menu navigation, live language changes, multiplayer lifecycle and release cache/cleanup.

Browser inspection: desktop dark home/menu; Garden Animation choices; 390×844 dark phone menu at 100% and 200% text. At 200%, document scroll width equalled viewport width (375 CSS pixels excluding scrollbar); labels wrap and the menu scrolls. This is browser emulation, not physical-device testing. [Phone screenshot](menu-v5.0.2.jpg).

Test harness corrections: shared jsdom dialog support, Node-compatible AbortSignal for in-memory API requests, observer/timer cleanup; language tests select an explicit picker choice; player tests assert direct card actions. These are test-only files and are excluded from the browser bundle.

The broad initial run attempted 109 entry points with a 180-second limit each: **74 passed, 34 failed, 1 timed out**. [Raw initial inventory](audit-v502-initial-results.json). This initial inventory predates targeted test repairs; it must not be presented as the final status of the repaired checks.

Subsequent successful checks include account sync, device sign-in, About, dashboard preferences, popup shell, menu navigation and live language. The extended language suite passed 592 stage checks with no issues after using the picker. The depth and personal-game suites completed in the broad run. The general multiplayer UI test completed its eight-client game/room assertions before failing an obsolete three-poster scenery assertion. Dedicated multiplayer ready, round-flow, tap, lifecycle, bingo and expansion UI suites passed; this is an in-memory backend, not production proof.

## Still open — not a full all-clear

| Area | Outstanding work |
| --- | --- |
| Legacy tests | Reconcile remaining v4 selectors and counts: old dailyGo setup, hidden home defaults, navbar controls, route drawing, tooltip behaviour, wildlife/poster counts and older scenery counts. Do not remove their underlying behavioural coverage. |
| Long-running suites | Full all-level run exceeds 180 seconds while emitting completed level batches. The revised general game-language run exceeded 90 seconds. Allow an appropriate CI budget and investigate any non-terminating cases. |
| Browser automation | Three Playwright browser suites cannot launch here because the bundled browser is missing; the installed browser was blocked by the environment. CUA visual inspection is partial coverage. |
| Responsive coverage | Complete 320px phones, tablet portrait/landscape, EN/ZH, light/dark and 100/150/200% visual matrix; measure contrast across all 18 scenes. |
| Production-only flows | Real account/password recovery/passkey ceremonies, Cloudflare bindings, isolated live multiplayer, speech/audio and physical touch gestures remain unverified. |
| Offline resilience | Existing sequential ~29 MB precache remains an engineering review item. Cache integrity tests pass; adverse-network upgrade behaviour needs separate validation. |
| Maintainability | Many historical CSS/script layers remain active. Consolidate deliberately with tests; do not delete included sources indiscriminately. |

No backend endpoint, database migration, credentials or main-branch change is part of this revision.
