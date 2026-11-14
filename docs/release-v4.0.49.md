# v4.0.49 — approved audit follow-up

Continues the functional audit left pending after the v4.0.48 cleanup.

- Account snapshot saves now detect removed players and removed/changed activity or multiplayer history, requiring password verification in that same server request. The deletion dialog saves the authenticated account change before changing local records. No schema migration is needed.
- JSON restoration retains shared/team, preview, timing and matching-pair result fields, independent game defaults and movement settings. CSV includes result qualifiers. Removed the obsolete 300-game backup claim.
- Failed rename storage leaves the editor open with a retry message. Multiplayer entry/rename uses the same duplicate-name validator.
- Sign-out can proceed after a failed sync when a device copy has been saved and the player confirms. Failed device-copy storage still prevents data loss. A reachable sign-out endpoint is required to revoke the server session; no offline sign-out success is claimed.
- Repeated restoration of the same account/player device copy selects its existing independent profile, preserving subsequent edits.
- Progress bouquet hiding outranks decorative CSS. Navbar reserves account, language, appearance, cards, menu in left-to-right order; narrow phones use a labelled account icon. About text remains centred. Keyboard focus filtering checks hidden ancestors. Multiplayer requests time out after 25 seconds.
- Updated English and Chinese About changes, navbar help, and backup metadata.

Validation completed:
- 29 distinct automated scripts passed: account suite (11), release suite (9), multiplayer/preferences suite (4), bilingual screen audit, dashboard preferences, export, audit regression and storage-failure checks.
- Hosted desktop checks verified navbar order, card visibility, light/dark themes, Chinese navigation, centred About text and version, and Progress hiding after reload.
- An isolated Pages test branch rendered 48 combinations: widths 280/320/390/768/1024/1440, text scales 100%/200%, English/Chinese, and light/dark. All five priority navbar controls stayed visible, in bounds and in order. Progress hide/show and About alignment passed. The final 390px view was visually inspected.
- The temporary test page exists only on codex/qa-v49-responsive; it is excluded from the release branch. Its reusable source is tests/responsive-preview.html. No app runtime changes followed the passing test run.

Local Chromium launch remains blocked by socket restrictions, so the rendered checks were run in the hosted browser. These are viewport tests, not physical iOS/Android device tests. Real-device authentication remains unverified.

Target: Cloudflare Pages only. No database migration or Workers changes.
