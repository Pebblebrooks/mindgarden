Mind Garden v4.0.38 — centred cards and clearer account saving

CHANGES
- Standing centre-alignment standard recorded in AGENTS.md; cards, dialogs,
  player rows, forms and menu text centred in both languages.
- Sign in / Account directly on welcome navbar; compact phone controls retain
  access at enlarged text sizes.
- Offer browser password saving after successful creation or password reset.
  Explicit password-manager and PC login-file buttons remain available.
- Display a generated recovery key immediately after successful creation,
  before choosing players; provide a separate recovery-key download.
- These credentials are passwords and recovery codes, not WebAuthn passkeys.
  Browser saving prompts depend on browser support and preferences.
- My Games cards have an accessible x button to remove a selection, with Undo.
  Removing a selection retains all scores and does not delete a game.

INSTALL / CONFIGURATION
Cloudflare Pages project mindgarden, branch main, output public.
Enable MG_ACCOUNT_SIGNUP=enabled in the production environment to permit new
account creation. Preserve DB and MG_ACCOUNT_PEPPER. No new SQL migration.
Registration remains blocked until that production setting is enabled.
Remove obsolete public/garden-ui-4037.js and .css during manual uploads.
Verify About v4.0.38 and garden-ui-4038.js / .css after deployment.

VALIDATION
Account API, account integration and release suites passed before version bump.
320 browser layout combinations passed with phone/tablet/desktop sizes,
English/Chinese, light/dark and 100/200% text. Regression tests cover direct
sign-in, removal/Undo without score loss, failed registration without saving
credentials, successful automatic saving offer, visible recovery and PC download.
No real production accounts were created during QA. Password wallet prompts
were tested through API mocks, not a real personal vault.

ROLLBACK
Restore the last successful v4.0.37 Pages deployment. Preserve all database
records and existing secrets. No database rollback is needed.
Copyright 2026 Pebblebrooks.
