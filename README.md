# Mind Garden V4.0.3

Developed by Pebblebrooks. This release fixes document/dialog scrolling and adds bounded multiplayer sessions, personal Begin controls, bingo readiness, and clear completion controls.

Read **README-INSTALL.txt** first. Apply **migrate-v4.0.3.sql** to the existing D1 database before deploying this version. This additive migration preserves results and is safe to repeat. Existing V3, v3.8.5 and v3.8.6 migrations must already be complete. Do not reset the database.

The affected-files package includes the earlier V4.0.1 folder repair and V4.0.2 fixes. Merge folders; keep unchanged assets and configuration. Repository root contains package.json, public, functions, shared and scripts. Cloudflare Pages output remains public. Prebuilt assets are included; rebuild with python3 scripts/build-release.py or npm run build. Upload all files, including functions/api/room8.js and the root package.json, before checking the final deployment.

About must show **v4.0.3**. See **CHANGELOG-V4.txt** and **TEST-RESULTS-v4.0.3.txt** for changes and verification limits. Copyright © 2026 Pebblebrooks. Existing artwork licences and attribution files remain applicable.
