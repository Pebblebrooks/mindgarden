# Mind Garden Classic v4.0.36

Approved account/player, games-library and results designs, restored welcome account entry and corrected information-button spacing. Existing player data and account saving are retained.

Build: `python3 scripts/build-release.py`.
Deploy the existing Cloudflare Pages project from `main`, output directory `public`.
Preserve the existing D1 DB binding. Account saving requires `migrate-v4.0.33.sql`, the `MG_ACCOUNT_PEPPER` secret and optional `MG_ACCOUNT_SIGNUP=enabled` registration setting.
See `README-UPDATE.txt` and `docs/account-saving.md`. Historical REVIEW files document earlier drafts.
