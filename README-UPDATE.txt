Mind Garden Classic v4.0.41 — approved menu and personal-profile update
14 November 2026

CHANGES
- Clear account-created, download-request and players-saved confirmations.
- Navbar uses the confirmed session in both orientations, including setup/reload.
- Explicit sign-out screen keeps the device player and offers Switch player.
- This release changes no database schema; already applied migrations remain.
- Separate player names, sign-in and account creation, with direct Close / Escape.
- Compact centred menus, attached device-sign-in info, consistent game selectors.
- Customise my home in the menu; per-player home, games and difficulty restored.
- Save Password to Device and Save Recovery Key to Device; readable Show/Hide.
  Password download includes the account name and any displayed recovery key.
- My Games removal message is centred together above Undo / Close. Scores remain.
- Responsive leaderboard columns, clearer Family View scope, compact preferences.
- Current scene name in the footer; concise answer review without repeated answers.
- Local account copies survive sign-out; no automatic 300-record history trimming.
- Optional real WebAuthn device sign-in, with password fallback.

UPDATE THE EXISTING CLOUDFLARE PAGES PROJECT
1. Back up player data and the production D1 database before schema changes.
2. Use the complete repository, including functions/ and functions/lib/.
   Production branch: main. Build output: public. Assets are already built.
   Uploading only public/ through dashboard drag-and-drop omits the account API.
3. Keep DB bound to the existing mindgarden-db database. Preserve the existing
   MG_ACCOUNT_PEPPER secret. Keep MG_ACCOUNT_SIGNUP=enabled for registrations.
4. If account tables already exist, do not replace them. For optional device
   sign-in, run migrate-passkeys.sql once in that SAME database; it is additive
   and safe to re-run. It requires migrate-v4.0.33.sql account tables first.
   Password sign-in remains available if the passkey migration is not applied.
5. Deploy main through the existing Pages Git integration. Do not use the
   separate Workers build to deploy this Pages Functions project.
6. Verify About v4.0.41 and garden-ui-4041.js/css. Close old tabs and reopen the
   app; do not clear browser storage, as that would remove device player data.
7. Test account creation/sign-in and select the correct player. For passkeys,
   sign in with a password, set up device sign-in, then sign out and test it on
   the stable HTTPS production hostname. Native biometric prompts vary by device.

PACKAGE
Complete source and built public assets. Excludes Git metadata, installed
node_modules, local QA pages, preview hosting configuration and simulated accounts.
When copying over an old checkout, remove obsolete public/garden-ui-4040.js/css
and older garden-ui-* bundles. Keep the current garden-ui-4041.js/css pair.

ROLLBACK
Redeploy the previous successful v4.0.40 Pages deployment. Preserve all player
records, secrets and additive passkey tables; do not reverse the SQL by dropping
account tables. See README-PASSKEYS.md for prerequisites and verification limits.
Copyright 2026 Pebblebrooks.
