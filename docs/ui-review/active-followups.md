# Follow-up status — 14 November 2026

Implemented in the review branch, not deployed:

- Centred current scene footer and separate optional account shortcut/info.
- Explicit password/recovery device downloads, with unencrypted-file warning.
- Real WebAuthn enrollment/sign-in/revocation and additive migration, with password fallback.
- Customise my home under ☰ → Settings, with Player: name; removed from the welcome page. Cards, game visibility, favourites and scenery remain personal.
- Restore each player’s display, sound, language, game choices and difficulty on sign-in/selection.
- Removed local 300-entry history trimming; independent account copies survive sign-out.
- Selected-player destructive controls with named confirmation and account-password check.
- Updated bilingual About and standing maintenance instructions.

Validation: syntax, account, display, release, cryptographic passkey and portable preview tests pass. Local and online profile restoration are covered. See approved-flow-reconciliation.md for detailed limits and earlier layout findings.

Remaining before release: preview review; final browser layout audit; production signup/runtime verification; D1 passkey migration and genuine device authentication tests. No production settings were changed. Keep the simulated portable review distinct from the deployable app.

## Compact menu follow-up

Implemented in the same v4.0.39 review draft, not published:

- Device sign-in and its independent information action share one button outline; setup details live in the info popover. Account-purpose info is beside the form title.
- Short bilingual labels, matching bounded/searchable Visible games and My favourite games lists, matching All/Clear controls and selection counts.
- Show/Hide has an independent grid column, intrinsic width and no selected checkmark. Full-width credential actions apply only to direct children. Save Password to Device includes the account name, password and visible matching recovery key in one explicitly unencrypted file; separate recovery download remains available.
- Removal status has its own row, followed by Undo and Close together. Removing favourites preserves scores.
- Leaderboard keeps every loaded player and uses up to two columns for four or more players when width and text size permit. Narrow/enlarged layouts use one column, preserving rank order.
- Removed the duplicate Appearance heading. Play preferences use short toggle labels, a separate break interval row and explicit Plain/Garden background choices; optional explanation is in info.
- Family View identifies the current account or device collection. It is a weekly group summary, not account management. Its Leaderboard shortcut compares that collection; online room rankings remain separate.
- About and the standing UI instructions reflect the new menu location, credential download and Family View meaning.

Validation: build/syntax, account, release, display, personal-game, movement and portable-preview checks passed. Added coverage for same-container device info without unintended authentication, combined credential file contents, separate undo/footer controls, both game-list searches, background toggles, break visibility, all leaderboard players, family scope and account-aware ranking labels. The standalone movement test required NODE_PATH to the existing test runtime; it passed after correcting that test invocation.

Visual QA is incomplete: the managed static preview reports running, but its browser URL returns an older Mind Garden page instead of the generated preview, even after reload. No screenshot from that stale route is evidence for these changes. The downloadable preview embeds the revised app scripts/styles and has direct views for each affected screen, phone/desktop sizes, English/Chinese and enlarged text. Final browser geometry, actual device password-manager behavior and production account creation remain unverified. No deployment or Cloudflare configuration change was made.

### Removal status alignment correction

The sentence formatter was inserting a newline into the My Games removal status. The status now opts out, reads “Removed from My Games · Scores kept”, and uses the card’s full width with centred text and automatic wrapping only when space requires it. Undo and Close remain together underneath. The matching Chinese status is also combined. About was reviewed; no update was needed because removal and score-retention behavior are unchanged. Build and the existing removal/undo integration check passed. Preview updated; no deployment.

Credential download labels now read “Save Password to Device” and “Save Recovery Key to Device”, including account screens, help, password-manager fallback messages and bilingual About. Download contents and behavior are unchanged. Existing credential/download tests passed; preview updated, not deployed.
