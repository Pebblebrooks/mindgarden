# Mind Garden V4.0.0

Developed by Pebblebrooks. This major visual update introduces a consistent light palette, clearer daily start, optional Quiet game view, bundled game illustrations and bilingual first-use help.

Read **README-INSTALL.txt** before applying the cumulative update. **CHANGELOG-V4.txt** describes changes; **TEST-RESULTS-V4.txt** records validation and its limits; **USABILITY-CHECKLIST.txt** is the proposed participant test plan. Older UPGRADE documents describe historical releases, not the current migration requirements.

Cloudflare Pages output is `public`. Keep the project's Pages Functions and D1 binding `DB`. V4 adds no SQL migration. Existing multiplayer needs the prior `migrate-v3.sql`, complete `migrate-v3.8.5.sql` and `migrate-v3.8.6.sql` schema. Do not reset an existing database.

Prebuilt assets are supplied. Rebuild editable UI sources with `python3 scripts/build-release.py`. The version in `package.json` generates matching assets and About version metadata. Use Node.js 24+ for the test tools; install development dependencies before running `npm run check`, `npm test`, or the focused tests in `tests/`.

Artwork credits and licence: `public/art/ATTRIBUTION.txt`, `public/art/LICENSE-GRAPHICS`, and `THIRD-PARTY-NOTICES.txt`. No external artwork service is needed during gameplay.
