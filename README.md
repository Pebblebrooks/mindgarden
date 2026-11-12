# Mind Garden v5.0.0 — development candidate

Modern and Classic are two layouts of the same application. Choose Design on
Home. The preference belongs to the selected local player and is included in
preference backups. Switching preserves scores, games, names and room identity;
it is unavailable during gameplay or a dialog. Classic retains the v4 layout
while sharing v5 fixes and facilitator tools.

Includes the v4.0.27 grammar and answer-feedback corrections, source cleanup,
and the pilot facilitator/session-summary work. The optional usage log remains
on-device. This is not a cloud-account or clinical assessment system.

Build: `python3 scripts/build-release.py`. Deploy directory: `public/`.
Development review server: `npm run dev:review` (isolated in-memory database).
Tests: `npm run check`, `npm test`, `node tests/grammar.test.cjs`,
`node tests/layout-switch.test.cjs`, `node tests/pilot.test.mjs` and
`node tests/pilot-ui.test.mjs`.

Before any approved deployment, back up and test the additive
`migrate-v5.0.0.sql` migration. Do not apply it to production without approval.
The migration is for facilitator controls and request throttling, not player
accounts. Existing migration history remains necessary for old databases.

No release package or deployment is authorized yet. Branch commits use the
Cloudflare Pages skip-build marker. `main` remains the v4.0.26 baseline.
