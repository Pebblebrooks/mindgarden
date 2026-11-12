# Mind Garden Classic v4.0.27

Classic design maintenance candidate. Not yet approved for packaging or deployment.

Changes: English singular/plural agreement, clear non-clickable “Answer differs”
feedback, and removal of obsolete generated bundles and redundant root mirrors.
The app and tests use `public/`; editable older-named styles are still required.

Build: `python3 scripts/build-release.py`
Tests: `npm run check`, `node tests/grammar.test.cjs`, and `npm test`.
Deploy directory (only after approval): `public/`. No database migration required.

Branch plan: `release/v4-classic` maintains the classic release;
`develop/v5` contains v5 with Modern and Classic layouts sharing games and data.
`main` remains unchanged until release approval. v4.0.26 is the rollback baseline.
