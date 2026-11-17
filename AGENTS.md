# Mind Garden maintenance

## Required before every change, including new conversations

Read `docs/design-audit-2026-11-17/PRODUCT-DESIGN-REQUIREMENTS.md`, `APPROVAL-RECORD.md`, `README.md` and `AUDIT.md`. PRD revision 1.1 is the approved product design baseline. Follow the corrected visual references closely. Implementation and the v6.0.0 release are authorized after audit and correction. Review actual rendered screens and record verification coverage and limitations in the release record before deployment.

Flag any future request that conflicts with the PRD, including requests from the product owner. Name the affected requirement and discuss isolated exception versus global change before implementing the conflicting part. Record the decision and update the relevant PRD/reference/test scope. Continue unaffected work. Never silently substitute defaults or infer that a local exception changes every screen.

Historical layout instructions are archived in `HISTORICAL-AGENTS-SUPERSEDED.md` in the same directory and are not active design requirements. Each change must identify PRD IDs and verification coverage. DOM launch tests do not establish visual compliance. No clipped or overlapping text, including wrapped questions and group-list headings.

After every app update, review About and the guide in English and Chinese. Describe only shipped behaviour, record what changed, and update release metadata when packaging. Keep QA fixtures and preview configuration out of Cloudflare release packages. Do not deploy to Workers; production uses Pages.

## Account and player flow contract

- Keep Choose player/Edit name separate from online account tasks. Rename retains the same profile and history; adding a new player starts empty.
- Sign in is an existing-account form. Create account is a separate form reached from Online account. Neither form contains player selection, exports or the other form's inputs.
- Successful creation/reset opens a dedicated Save login details step before selecting players. Failed creation must never claim success or generate a recovery key locally.
- Copy only explicitly selected players; retain device originals, never merge records by name. Credentials must never enter player exports.
- All menu screens offer direct Close and Escape, without forcing a chain of Back buttons.
- Review changes against the approved references and actual rendered screens, not just generated mockups. Preserve these contracts in integration tests.

- The rename dialog may offer a separate optional Online account shortcut plus a purpose info button. Keep authentication forms on separate screens; never save a pending name implicitly when opening account options.
- Name the current welcome background in a centred page footer, following scenery, personal photo/video and language changes.
- Call current credentials passwords and recovery keys. Device downloads must be explicit and disclose that login files are unencrypted. Do not label password downloads as WebAuthn passkeys.

## Personal profiles and device records

- Restore display, language, sound, home cards, selected games and per-game difficulty by stable profile ID on sign-in/player switch. A name change never creates a new identity.
- Place Customise my home in the menu, never on the welcome page and show whose settings are being edited. Never confuse hiding a card or removing a favourite with deleting scores.
- Do not trim local activity or multiplayer history automatically. Preserve independent device copies of account players through sign-out and remote profile replacement. Keep them out of account exports.
- Player-card deletion applies only to the explicitly named card; history deletion applies only to the selected player, require the exact player name, and require account reauthentication for connected players. Do not claim person-only access control for unprotected shared browsers/group accounts.
- Keep WebAuthn passkeys distinct from passwords and recovery keys. Native device authentication requires real server verification; show no simulated success in production. The portable review must clearly label simulated credentials.
- Explain that local copies survive sign-out and remain accessible in that browser. Browser clearing/eviction and finite capacity require backup guidance; do not promise permanent storage.

- Keep visible copy concise; put optional explanations in attached info buttons. Visible games and favourites share the same scrollable selector. Password visibility controls must never cover their input.
