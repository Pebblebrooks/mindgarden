# Mind Garden Classic v4.0.38

Centred cards, direct navbar sign-in, explicit login/recovery saving, and My Games quick removal with Undo. Existing player records remain intact.

Build: `python3 scripts/build-release.py`.
Deploy the existing Cloudflare Pages project from `main`, output directory `public`.
Preserve the existing D1 DB binding. Account saving requires `migrate-v4.0.33.sql`, the `MG_ACCOUNT_PEPPER` secret and `MG_ACCOUNT_SIGNUP=enabled` setting to permit new registrations.
See `README-UPDATE.txt` and `docs/account-saving.md`. Historical REVIEW files document earlier drafts.
