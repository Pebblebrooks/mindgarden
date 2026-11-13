Mind Garden v4.0.34 — audited gameplay and layout fixes

- Next level, Replay and Easier level use saved choices without repeated setup.
- Settings hide the previous board and scenery. Move & Remember advances directly.
- Corrected story-memory question prerequisites and bilingual readiness text.
- Responsive grids and bounded content preserve readable text and touch targets.
- Long content may scroll internally on small screens or with enlarged text.
- About documentation updated in English and Chinese.

UPDATE
Use the existing Cloudflare Pages project, production branch main, output public.
No additional SQL migration is required for this release. Keep the existing DB
binding, MG_ACCOUNT_PEPPER and MG_ACCOUNT_SIGNUP settings unchanged.
Upload the package contents to the repository root, then deploy the latest main.
Verify About v4.0.34 and garden-ui-4034.js / garden-ui-4034.css.
Remove obsolete garden-ui-4033.js / .css when manually replacing files.
Close and reopen app tabs to refresh. Do not clear site data or reset the database.

VALIDATION
80 regression suites passed; 800 rendered layout checks; 240 complete sessions
covering 1,456 rounds. See docs/release-audit-v4.0.33-follow-up.md for scope/limits.
Physical devices and live production account/network behaviour remain unverified.
Copyright 2026 Pebblebrooks.
