# Account saving and compact game setup — v4.0.33

Included in v4.0.33. Server account availability depends on the production configuration below.

## Behaviour
- An account name and passphrase protect a collection of player profiles. All people with that account can access its players. Display names are not authentication.
- New accounts upload the current device's players. Signing into an existing account retrieves its profiles; the original device-only players are preserved and restored after sign-out.
- Changes to player records, scores and preferences save automatically. Switching players first saves local changes, then retrieves the latest server snapshot. Offline changes remain local with a pending/error status.
- Optimistic revision checks reject stale writes. The conflict screen offers a download containing both versions and explicit server/local choices.
- My Games is a short chosen-game list. Each game opens a compact setup with less-used controls under More options. My Games and All Games settings are isolated by game and player. Applying common settings is explicit.
- Account JSON export includes all stored profiles; CSV includes activity and multiplayer result rows. These are self-reported game results, not server-verified ranking submissions.
- Uploaded scenery/video/music assets remain device-local. Their preferences sync but assets are not uploaded. Previously trimmed history cannot be recovered. Connected accounts stop the former 300-entry trimming; a request over 4 MB (or compressed storage over 1.8 MB) is rejected visibly, never silently truncated.

## Required deployment setup
1. Back up the production D1 database through the usual administrator process.
2. Run `migrate-v4.0.33.sql` on the existing Pages DB binding. It adds four tables and is safe to run twice; no existing tables are dropped.
3. Configure Pages secret `MG_ACCOUNT_PEPPER` as a cryptographically random value of at least 32 characters. Generate it outside chat and never put it in the repository, exports or logs. Keep it stable: changing it invalidates passphrase verification; recovery keys still permit passphrase resets.
4. Set `MG_ACCOUNT_SIGNUP=enabled` if public account registration is intended. Otherwise new registrations are rejected. Existing account sign-in remains available.
5. Deploy the v4.0.33 build to Pages with its existing DB binding. No email service is required: sign-in uses account name/passphrase; recovery uses a private generated key downloaded once at registration or reset.
6. Validate registration, recovery-key download, two devices signing into one account, edits in different profiles, offline/reconnect, conflict choices, both export formats and sign-out on the actual Cloudflare runtime before wider rollout.

## Security and limits
- Credentials are not in profiles or exports. Passphrases use salted PBKDF2-SHA512 (100,000 iterations within Workers WebCrypto limits), with a server-side pepper; passphrases require at least 15 characters.
- Session cookies are Secure, HttpOnly, SameSite=Strict and scoped to the host; only token hashes are stored. Recovery rotates its key and revokes all sessions. Sessions expire after 30 days.
- Exact-origin JSON requests, account-scoped SQL, request-size limits, input checks and database-backed rate limits are enforced.
- The application retains an offline copy on trusted browsers. Sign out before sharing the browser. Separate device-only profiles remain accessible without account sign-in.
- Account deletion/self-service data removal is not included; removal of a player while connected syncs that removal. Do not interpret clearing browser storage as deleting server records.
- This is not a managed identity-provider integration. The operator must monitor registration abuse, D1 growth and runtime CPU/latency, and review authentication before broad deployment.

Storage uses gzip snapshots to stay below D1’s 2,000,000-byte row limit. Limits: https://developers.cloudflare.com/d1/platform/limits/ ; Workers compression support: https://developers.cloudflare.com/workers/runtime-apis/web-standards/ .

## Per-player dashboard display
Settings → Garden & appearance → Customise dashboard (also in the Garden view menu) saves welcome shortcut visibility, All Games card visibility, and launch choices for welcome cards, pets and the progress bouquet. New players start with cards and pets hidden. Temporary navbar show/hide controls do not overwrite launch choices. Display filtering does not change My Games selections, scores or difficulty settings. “Show all game cards” temporarily reveals the full catalogue. Display preferences are included in player JSON backups and account snapshots.

Validated dashboard selection persistence, player switching, JSON backup round trips, cancellation and bilingual entry points with automated tests; inspected the customisation panel in the browser at desktop and mobile sizes. Production account saving still requires the migration, secret configuration and Cloudflare end-to-end verification described above.
