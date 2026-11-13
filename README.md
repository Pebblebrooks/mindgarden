# Mind Garden Classic v4.0.34

Audited gameplay transitions, responsive boards, bilingual readiness instructions and story-memory corrections, with personal dashboards and account saving retained.

Build: `python3 scripts/build-release.py`.
Deploy the existing Cloudflare Pages project from `main`, output directory `public`.
Preserve the existing D1 DB binding. Account saving requires `migrate-v4.0.33.sql`, the `MG_ACCOUNT_PEPPER` secret and optional `MG_ACCOUNT_SIGNUP=enabled` registration setting.
See `README-UPDATE.txt` and `docs/account-saving.md`. Historical REVIEW files document earlier drafts.
