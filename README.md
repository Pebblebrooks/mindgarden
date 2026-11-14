# Mind Garden Classic v4.0.41

Approved compact menus, separate account tasks, per-player preferences and retained device records, with optional WebAuthn device sign-in.

Build: `python3 scripts/build-release.py`.
Deploy the existing Cloudflare Pages project from `main`, output directory `public`.

Preserve the existing D1 `DB` binding and `MG_ACCOUNT_PEPPER`. Account saving requires `migrate-v4.0.33.sql`; new registrations require `MG_ACCOUNT_SIGNUP=enabled`. Device sign-in additionally requires the additive `migrate-passkeys.sql` migration. Password sign-in does not depend on the optional passkey tables.

See `README-UPDATE.txt`, `README-PASSKEYS.md`, and `docs/account-saving.md`. Historical review documents describe earlier drafts, not current deployment status.
