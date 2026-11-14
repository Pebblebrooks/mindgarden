# v4.0.49 — approved audit follow-up

Continues the functional audit left pending after the v4.0.48 cleanup.

- Account snapshot saves now detect removed players and removed/changed activity or multiplayer history, requiring password verification in that same server request. The deletion dialog saves the authenticated account change before changing local records. No schema migration is needed.
- JSON restoration retains shared/team, preview, timing and matching-pair result fields, independent game defaults and movement settings. CSV includes result qualifiers. Removed the obsolete 300-game backup claim.
- Failed rename storage leaves the editor open with a retry message. Multiplayer entry/rename uses the same duplicate-name validator.
- Sign-out can proceed after a failed sync when a device copy has been saved and the player confirms. Failed device-copy storage still prevents data loss. A reachable sign-out endpoint is required to revoke the server session; no offline sign-out success is claimed.
- Repeated restoration of the same account/player device copy selects its existing independent profile, preserving subsequent edits.
- Progress bouquet hiding outranks decorative CSS. Navbar reserves account, language, appearance, cards, menu in left-to-right order; narrow phones use a labelled account icon. About text remains centred. Keyboard focus filtering checks hidden ancestors. Multiplayer requests time out after 25 seconds.
- Updated English and Chinese About changes, navbar help, and backup metadata.

Validation: account and release suites passed before the final version bump; targeted API authorization, backup, quota retry and restoration regression checks added. Final release checks and rendered preview verification are recorded in the PR.

Local Chromium launch is blocked by the environment's socket restrictions. The rendered layout test is included as `npm run test:audit-layout`; a hosted preview must be inspected before declaring visual verification complete. Real-device authentication and multi-device gameplay remain outside these automated checks.

Target: Cloudflare Pages only. No Workers deployment or database migration.
