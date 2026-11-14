# Mind Garden Classic v4.0.35

Clearer account, game, results and settings menus with responsive cards, simplified multiplayer entry and separate progress views. Existing player data and account saving are retained.

Build: `python3 scripts/build-release.py`.
Deploy the existing Cloudflare Pages project from `main`, output directory `public`.
Preserve the existing D1 DB binding. Account saving requires `migrate-v4.0.33.sql`, the `MG_ACCOUNT_PEPPER` secret and optional `MG_ACCOUNT_SIGNUP=enabled` registration setting.
See `README-UPDATE.txt` and `docs/account-saving.md`. Historical REVIEW files document earlier drafts.
