Mind Garden Classic v4.0.40

Existing installation: follow README-UPDATE.txt. Do not clear player data.
Cloudflare Pages uses GitHub main and output directory public.
The update includes both the static app and functions/ API source.

New installation: follow docs/account-saving.md for account schema and required
DB / MG_ACCOUNT_PEPPER / MG_ACCOUNT_SIGNUP configuration. Optional Face ID,
fingerprint or device-PIN sign-in also needs migrate-passkeys.sql; see
README-PASSKEYS.md. Use the same stable HTTPS hostname for passkey registration
and sign-in. No new passkey secret is required.

Save Password to Device downloads an unencrypted private credentials file.
It is not a WebAuthn passkey. Player JSON backups never contain account passwords.
Keep downloaded files private. Browser password-manager prompts vary by device.

Copyright 2026 Pebblebrooks.
