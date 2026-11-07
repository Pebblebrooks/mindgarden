# Mind Garden V4.0.4

Developed by Pebblebrooks. The welcome page now has a text-only player greeting and three matching cards: **Today's Games**, **All Games**, and **Play Together**. Navigation is grouped by purpose, sound and animation controls use compact icons, and popup spacing remains readable at enlarged text sizes.

Read **README-INSTALL.txt** before updating. Merge the package's folders into the existing repository root; retain existing Cloudflare Pages settings and the `DB` binding. Output directory: `public`. Prebuilt assets and editable sources are both included.

No new SQL migration is required after V4.0.3. For an earlier release, complete `migrate-v4.0.3.sql` and its prerequisites first. `check-database-v4.0.4.sql` checks the same 21 database objects. Do not reset the database or clear browser storage.

Build: `npm run build`. Syntax: `npm run check`. After installing development dependencies, `npm run test:release` checks the release UI, navigation and cache. Use Node 24 or newer for SQLite API tests.

About must show **v4.0.4**. See **CHANGELOG-V4.txt** and **TEST-RESULTS-v4.0.4.txt** for scope and verification. Animal artwork and motion proposals remain studies; this release retains the existing wildlife engine and assets.

Copyright © 2026 Pebblebrooks. Existing third-party licences and attribution remain applicable.
