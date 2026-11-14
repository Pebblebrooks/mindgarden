# Account saving and player profiles

Account storage was introduced in v4.0.33. This document also describes the current local UI revision; publication is tracked separately. Server account availability depends on the production configuration below.

## Behaviour
- An account name and passphrase protect a collection of player profiles. All people with that account can access its players. Display names are not authentication.
- Empty accounts ask the user to select device players to copy, or enter a new player name. Nothing is uploaded automatically. Existing account holders can copy selected device players later. Copies preserve records and the device originals; ID collisions create separate copies, never overwrite or merge by name. Signing into an existing account retrieves its profiles; the original device-only players are preserved and restored after sign-out.
- The navbar reflects the verified server session, independently of whether players have been selected. Creating an account confirms success immediately; device-save feedback is adjacent to each action. A download request or manager handoff is not proof the user saved the file.
- Sign-out restores the previous device player with an explicit confirmation and Switch player option. It never renames a player to Unknown. The welcome label distinguishes account players from device-only players and cached account copies awaiting sign-in.
- Changes to player records, scores and preferences save automatically. Switching players first saves local changes, then retrieves the latest server snapshot. Offline changes remain local with a pending/error status.
- Optimistic revision checks reject stale writes. The conflict screen offers a download containing both versions and explicit server/local choices.
- My Games is a short chosen-game list. Each game opens a compact setup with less-used controls under More options. My Games and All Games settings are isolated by game and player. Applying common settings is explicit.
- Account JSON export includes all stored profiles; CSV includes activity and multiplayer result rows. These are self-reported game results, not server-verified ranking submissions.
- Uploaded scenery/video/music assets remain device-local. Their preferences sync but assets are not uploaded. Previously trimmed history cannot be recovered. All players stop the former 300-entry trimming; a request over 4 MB (or compressed storage over 1.8 MB) is rejected visibly, never silently truncated.

## Required deployment setup
1. Back up the production D1 database through the usual administrator process.
2. Run `migrate-v4.0.33.sql` on the existing Pages DB binding. It adds four tables and is safe to run twice; no existing tables are dropped.
3. Configure Pages secret `MG_ACCOUNT_PEPPER` as a cryptographically random value of at least 32 characters. Generate it outside chat and never put it in the repository, exports or logs. Keep it stable: changing it invalidates passphrase verification; recovery keys still permit passphrase resets.
4. Set `MG_ACCOUNT_SIGNUP=enabled` if public account registration is intended. Otherwise new registrations are rejected. Existing account sign-in remains available.
5. Deploy the v4.0.41 build to Pages with its existing DB binding. No email service is required: sign-in uses account name/passphrase; recovery uses a private generated key. Generation is optional at registration, available later with the current password, and automatic after a password reset. Download and keep it privately. Existing account/password installations keep that schema. Optional device sign-in additionally requires migrate-passkeys.sql; password sign-in remains available without it.
6. Validate registration, recovery-key download, two devices signing into one account, edits in different profiles, offline/reconnect, conflict choices, both export formats and sign-out on the actual Cloudflare runtime before wider rollout.

## Security and limits
- Credentials are not in profiles or exports. Passphrases use salted PBKDF2-SHA512 (100,000 iterations within Workers WebCrypto limits), with a server-side pepper; passphrases require at least 10 characters.
- Session cookies are Secure, HttpOnly, SameSite=Strict and scoped to the host; only token hashes are stored. Recovery rotates its key and revokes all sessions. Sessions expire after 30 days.
- Exact-origin JSON requests, account-scoped SQL, request-size limits, input checks and database-backed rate limits are enforced.
- The application retains an offline copy on trusted browsers. Sign-out restores device-only players. Separate saved account copies remain on this browser and can be restored locally; use separate OS/browser users on a shared device.
- Account deletion/self-service data removal is not included; removal of a player while connected syncs that removal. Do not interpret clearing browser storage as deleting server records.
- This is not a managed identity-provider integration. The operator must monitor registration abuse, D1 growth and runtime CPU/latency, and review authentication before broad deployment.

Storage uses gzip snapshots to stay below D1’s 2,000,000-byte row limit. Limits: https://developers.cloudflare.com/d1/platform/limits/ ; Workers compression support: https://developers.cloudflare.com/workers/runtime-apis/web-standards/ .

## Per-player dashboard display
☰ → Settings → Customise my home saves welcome shortcut visibility, All Games card visibility, and launch choices for welcome cards, pets and the progress bouquet. New players start with cards and pets hidden. Temporary navbar show/hide controls do not overwrite launch choices. Visible games controls catalogue cards. My favourite games controls My Games selections. Hiding/removing a card does not erase scores or per-game difficulty settings. “Show all game cards” temporarily reveals the full catalogue. Display preferences are included in player JSON backups and account snapshots.

Validated dashboard selection persistence, player switching, JSON backup round trips, cancellation and bilingual entry points with automated tests; inspected the customisation panel in the browser at desktop and mobile sizes. Production account saving still requires the migration, secret configuration and Cloudflare end-to-end verification described above.

Player selection and editing names are separate from optional online accounts. Editing a name preserves the same profile and its records; creating a new profile starts empty, even if its name matches an existing player. Delete is under Manage player, with exact-name confirmation and an account-password check when connected.

Account menus separate Sign in, Create account and Reset password. The optional password generator uses Web Crypto. Use password manager passes the in-memory username/password to the browser's Password Credential API where supported, with guidance otherwise. It does not write plaintext passwords to app storage or player exports. Browser support and save prompts vary.

Recovery keys are generated server-side. Creation offers an unchecked opt-in; signed-in users can generate or replace a key after verifying their password. The previous key becomes invalid. Password reset rotates the key and revokes sessions. The downloaded recovery JSON identifies the account and contains the key. Keep it private. Keys are not persisted in browser profile data or player exports. Existing account passwords and recovery keys remain valid until explicitly changed.

Save Password to Device downloads the account name, password and any currently displayed matching recovery key in one unencrypted file. Save Recovery Key to Device downloads the key separately. Neither download changes player records. WebAuthn credentials are managed by the device/provider and are never included in these files.
