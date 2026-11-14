Mind Garden v4.0.35 — clearer menus and accounts

CHANGES
- Separate sign-in, create-account and password recovery forms; Show/Hide password.
- Recovery-key downloads identify the account. New passwords require 10 characters.
- Player photo and remove controls restored beside each player.
- Compact Games library, category search, info buttons inside each card.
- Results: Next, Replay, Games; secondary actions under More.
- Clearer room joining/creation, Settings, Garden, Sound and Account menus.
- Progress views: Overview, By game, History. Expandable Family View.
- Dashboard selection counts, simpler rankings, bilingual About and help updates.
- Independent player/game settings and existing scores preserved.

UPDATE
Existing Cloudflare Pages project: mindgarden-bk1; production branch main;
build output public; preserve existing build settings and functions/.
No new SQL migration is required. Keep DB, MG_ACCOUNT_PEPPER and
MG_ACCOUNT_SIGNUP unchanged. Never replace the account pepper for this update.
Verify About v4.0.35 and garden-ui-4035.js / garden-ui-4035.css.
When manually uploading, delete obsolete public/garden-ui-4034.js and .css.
Close and reopen app tabs to refresh. Do not clear site data or reset D1.

VALIDATION
Bilingual menu-flow, account API/sync, display preferences and release checks.
Eight-client multiplayer joining, invitations, reconnect and round progression.
Eight menu layouts checked at 320, 360, 768 and 1280 pixels without horizontal overflow.
Earlier approved gameplay checks: 300 transitions and 118 bilingual setups.
Physical devices and live account creation/recovery are not covered by local tests.

ROLLBACK
Restore the previous successful Cloudflare Pages deployment (v4.0.34).
No database rollback is needed for this UI release. Preserve secrets and player data.
Copyright 2026 Pebblebrooks.
