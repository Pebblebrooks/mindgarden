# Optional device sign-in — v4.0.41

This release implements real WebAuthn passkeys. Physical Face ID/fingerprint prompts require device testing. The portable HTML review deliberately simulates account and passkey calls; it creates no real credentials.

## Enable on Cloudflare

1. Confirm the existing account API works on the production hostname: account migration `migrate-v4.0.33.sql`, D1 binding `DB`, a stable secret `MG_ACCOUNT_PEPPER` of at least 32 characters, and `MG_ACCOUNT_SIGNUP=enabled` when registration is wanted. Do not replace an existing pepper: current passwords depend on it.
2. Back up the D1 database. In that same production database, run the additive, repeatable `migrate-passkeys.sql`. It creates only passkey/challenge tables and indexes. It does not alter player data or credentials. The release code does not run this migration automatically.
3. Deploy the complete reviewed repository including `functions/lib/`, `functions/api/account.js`, and rebuilt `public/` assets. Directly uploading static `public/` files alone does not install the API. Exclude local QA pages and `.openai` preview configuration.
4. Use the stable HTTPS production hostname. Passkeys belong to its hostname (RP ID); passkeys created on a unique preview deployment hostname will not authenticate on the production hostname. No additional passkey secret is required.
5. Sign in with the account password. Open Account → Set up device sign-in → Set up on this device. The OS/browser chooses available face, fingerprint or device-PIN verification. The passkey provider may sync credentials across devices.
6. Sign out, choose Sign in on this device, complete verification, and confirm the correct account/player preferences load. Test cancellation, password fallback, expired sessions and a second device/browser. Never claim a native prompt was tested from a simulated preview.
7. Verify Saved passkeys revocation and recovery-key password reset. Resetting a password revokes existing passkeys and sessions; enrol again afterwards. Unsupported devices or absent tables keep password sign-in available.

## Security and privacy

Server verification requires a one-use, five-minute challenge bound to the current origin and session (registration) or secure flow cookie (sign-in), required user verification, expected RP ID/origin and a valid signature. Enrollment/removal require the current account password. The server stores public credentials and counters, never private keys or biometric data. Use a personal device for personal accounts.

Device copies intentionally remain accessible after sign-out. A shared browser without separate OS/browser users cannot identify the physical player. Deletion controls require selecting the player and typing its name, plus the account password for connected profiles; they do not constitute per-person access control for a shared group account. The generic account snapshot API is account-scoped, not a per-player permission system.

Local storage can be cleared/evicted by the browser or fill up. The app reports failed writes and retains old stored data; do not promise unlimited or indestructible storage. Export backups. Personal media files do not transfer with account snapshots.

## Checks and rollback

`npm run check`, `npm run test:accounts`, `npm run test:display`, and `npm run test:release` cover the release. Cryptographic tests generate P-256 credentials and signed assertions; UI tests simulate the native API. Native device and deployed Cloudflare runtime verification remain required.

To roll back UI/API, redeploy the prior tested version. Leave the additive passkey tables in place; deleting the tables destroys registered device sign-ins. Account-password fallback remains independent of the passkey migration.
