# Mind Garden V4.0.2

Developed by Pebblebrooks. This release corrects multiplayer matching previews, picture loading, feedback spacing, and leaving one room to join another.

Read **README-INSTALL.txt** for exact GitHub folder destinations. This affected-files update includes the earlier V4.0.1 folder repair. Keep all unchanged artwork, audio, Pages Functions and database configuration.

Cloudflare Pages output is `public`; the repository root contains `package.json`, `public`, `functions` and `scripts`. Prebuilt assets are included. Rebuild with `python3 scripts/build-release.py` or `npm run build`. Finish all update uploads, including the root `package.json`, before checking the production version.

About must show **v4.0.2** after deployment. No new SQL migration is required. Existing multiplayer still needs the previously supplied V3, v3.8.5 and v3.8.6 schema. Do not reset an existing database.

See **CHANGELOG-V4.txt** and **TEST-RESULTS-v4.0.2.txt** for changes and verification limits. Copyright © 2026 Pebblebrooks. Artwork licences remain in `public/art/ATTRIBUTION.txt`, `public/art/LICENSE-GRAPHICS`, and `THIRD-PARTY-NOTICES.txt`.
