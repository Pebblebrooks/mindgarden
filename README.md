# Mind Garden Classic v4.0.37

Separate player identity and optional account storage, explicit player copying, optional password/recovery-key generation, and responsive picture-word card text. Existing player records remain intact.

Build: `python3 scripts/build-release.py`.
Deploy the existing Cloudflare Pages project from `main`, output directory `public`.
Preserve the existing D1 DB binding. Account saving requires `migrate-v4.0.33.sql`, the `MG_ACCOUNT_PEPPER` secret and optional `MG_ACCOUNT_SIGNUP=enabled` registration setting.
See `README-UPDATE.txt` and `docs/account-saving.md`. Historical REVIEW files document earlier drafts.
