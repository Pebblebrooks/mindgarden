Mind Garden v4.0.33 — personal dashboards and saved player accounts

CHANGES
- Per-player dashboard: choose welcome shortcuts and game cards, launch visibility
  for welcome cards and pets, and visibility of the progress bouquet.
- Simplified Settings, player management, music choices and My Games menus.
- Separate My Games / All Games settings for each game and each player.
- Account-based server saving of profiles, scores and preferences; offline pending
  changes, revision conflict protection and all-player JSON / score CSV export.
- English and Chinese About documentation updated.

INSTALLATION
Existing Cloudflare Pages project: main branch, output directory public.
Preserve the DB binding and all existing data. Do not clear browser site data.
For server accounts, back up D1 and run migrate-v4.0.33.sql on the Pages database.
Add Pages secret MG_ACCOUNT_PEPPER (cryptographically random, at least 32 characters).
Keep this secret stable; never commit it or share it in chat.
Set MG_ACCOUNT_SIGNUP=enabled to allow account registration, then redeploy Pages.
Without this setup, account saving reports unavailable; device-local play still works.
See docs/account-saving.md for setup, recovery, limits and runtime acceptance checks.
Verify About v4.0.33 and garden-ui-4033.js / garden-ui-4033.css after deployment.
Remove obsolete garden-ui-4032.js / .css when manually replacing package files.

VALIDATION
Account API/client tests cover account isolation, authentication, revision conflicts,
profile retrieval, offline retry and export. Dashboard tests cover player isolation,
visibility, show-all access, cancellation and backup import/export. Release, About,
cache and syntax checks pass. Dashboard panel inspected at desktop and mobile sizes.
Live Cloudflare account registration, recovery and two-device syncing require the
configuration above and have not yet been verified against production.

LIMITS
Personal photos/videos/music files remain device-local. Previously trimmed history
cannot be recovered. Account snapshots have a 4 MB request / 1.8 MB compressed limit.
New players start with welcome cards and pets hidden; saved launch choices override it.
Copyright 2026 Pebblebrooks.
