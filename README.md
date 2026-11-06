# Mind Garden v3.4

Start with **UPGRADE-v3.4.md** for the distinct sampled piano/violin/cello chamber music and harp/woodwind arrangements, deployment and checks.

The eight-player multiplayer system from V3.0 is preserved. New multiplayer installations should also read **UPGRADE-v3.0.md** and apply `migrate-v3.sql` to an existing pre-V3 database, or `schema.sql` to a new database. No new migration is required from V3.0.

Cloudflare Pages output: `public`. D1 binding: `DB`. Tests: Node.js 24+, `npm install`, `npm run check`, `npm test`. Browser: `npx playwright install chromium`, then `npm run test:browser`.
