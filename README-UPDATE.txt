MIND GARDEN v3.8.6 — AFFECTED-FILES UPDATE
Prepared: 6 November 2026 (UTC)

START HERE
This patch updates an existing v3.8.5 Cloudflare Pages project. It is not a
standalone app. Merge it into your existing complete project, then deploy that
complete project. Keep all existing images, audio, other Functions and settings.
The seven application/migration files listed below contain all approved v3.8.6
changes. The ZIP also includes these instructions, release notes, checksums,
a read-only database check and an optional copy of the earlier SQL migration.

FILES TO MERGE INTO YOUR EXISTING PROJECT
  public/index.html
  public/garden-ui-386.css
  public/garden-ui-386.js
  public/sw.js
  functions/api/room8.js
  shared/online-activities.js
  migrate-v3.8.6.sql

IMPORTANT: shared is a new folder beside public and functions. The updated
room8.js imports shared/online-activities.js. Include both in deployment.
Apply the complete set together; replacing just the CSS will miss fixes.
The existing feedback-banner.jpg and other media are unchanged and are not
duplicated here. Old garden-ui-385 files can remain; the new index loads 386.

1. BACK UP AND PREPARE
Back up your current project and D1 database. In Mind Garden, export each
player through More > Settings > Backup and restore > Download JSON backup.
Local photos, videos, music and online identity credentials are not in JSON
backups. Keep this browser's site data so online rankings remain accessible.
Finish or close active multiplayer rooms before applying SQL updates.

2. MERGE THE FILES
Extract this ZIP. Open mind-garden-v3.8.6-update and merge its public, functions
and shared folders into the matching locations in your EXISTING project.
Replace matching files. Copy migrate-v3.8.6.sql to the existing project root.
Do not replace the entire project folder with this small patch folder.

3. UPDATE THE CORRECT D1 DATABASE
In Cloudflare, open your Pages project's bindings and identify the database
bound as DB in the environment you will deploy. Open that database under
D1 SQL database, then Console. Do not create a new database.

Run CHECK-DATABASE.sql from this package first. It reads schema metadata only.
Before this upgrade, the v3.8.6 rows are expected to say MISSING.

Required order:
  A. V3 multiplayer schema already installed.
  B. Complete v3.8.5 migration installed.
  C. Apply migrate-v3.8.6.sql from this update.

Your screenshots showed the V3 tables and both bingo tables. Those table names
alone do not verify all v3.8.5 triggers. If you only created the two bingo tables,
or are unsure whether the complete v3.8.5 file ran, apply the FULL included
prerequisites/migrate-v3.8.5.sql first. It is repeatable and preserves completed
scores. It reconciles old multiple-room participation, so use it with no active
games. If any V3 rows are missing, stop and use the original migrate-v3.sql from
your existing project before continuing. Do not run a fresh-install schema.

Then apply the complete migrate-v3.8.6.sql. It adds mg_rounds, a round-metadata
trigger and a history index. Completed scores stay in the existing mg_results
table; this update does not duplicate or delete them. Earlier rounds without
reliable activity metadata remain visible as "Earlier activity".

If using the D1 Console, run each complete SQL statement in order. A CREATE
TRIGGER statement includes its entire BEGIN ... END; block: do not split it at
the semicolon inside that block. Alternatively, use the full SQL-file commands
below from the merged project folder. Replace YOUR_D1_DATABASE with the actual
database name or configured binding. Only run the first command if step B is
needed (copy the prerequisites folder into the project first):

  npx wrangler d1 execute YOUR_D1_DATABASE --remote --file=./prerequisites/migrate-v3.8.5.sql
  npx wrangler d1 execute YOUR_D1_DATABASE --remote --file=./migrate-v3.8.6.sql

Run CHECK-DATABASE.sql again. All 19 listed objects should show PRESENT. This
checks object presence; successful execution of the complete migration files
is what installs the intended definitions. Stop if a statement fails.

4. DEPLOY THE COMPLETE MERGED PROJECT
Keep your existing Pages project, production branch, D1 binding DB and other
configuration. No frontend build is required for the supplied prebuilt assets.
Do not run an older UI build script: it can regenerate the previous bundles.

Use your existing Git-connected deployment if it deploys these prebuilt public
files and compiles the Functions without regenerating the UI. Otherwise, from
the project root that contains public, functions and shared, use Wrangler:

  npx wrangler pages deploy public --project-name YOUR_PAGES_PROJECT --branch YOUR_PRODUCTION_BRANCH

Replace both uppercase placeholders with your existing project's values.
Do not run this from inside public or from this standalone update folder.
Do not use dashboard drag-and-drop for this functions-folder update: that
method does not compile Pages Functions. Use Git integration or Wrangler.

5. RELOAD AND VERIFY
Close other Mind Garden tabs and reopen the app. On Windows, use Ctrl+Shift+R
if necessary. About must show v3.8.6. Do not clear browser site data.

Check:
- Welcome navigation is centered, with utility controls on the right, and
  wrapping at smaller widths. T-/T+, percentage presets and 100% reset work.
- Bouquet rotation has a || pause button and a faster Standard rotation.
- Music uses a solid triangle play button and centered controls.
- Contact shows the banner and the current bilingual form.
- Number Patterns offers digit answers and stronger advanced patterns.
- Today's Games > Begin opens an activity. A new profile receives starter
  selections; a profile with history targets its three weakest games.
- With two browser sessions/devices, host and join a room. Try one of the
  additional activities. Complete a round, close the room, then reopen
  Play Together > Saved online rankings (also available from Leaderboard).
- Verify guests can leave and hosts can cancel/close. One online identity
  participates in one active room at a time.

TROUBLESHOOTING
- Still seeing v3.8.5 or missing controls: check that index.html, both 386
  bundles and sw.js were deployed together. Confirm the deployment finished,
  close old tabs and reload. Retain browser site data.
- Missing shared/online-activities.js during deployment: shared belongs beside
  functions at the project root, not inside public.
- App asks for V3/v3.8.5/v3.8.6 SQL: verify the DB binding points at the database
  you updated. Run CHECK-DATABASE.sql there and follow the migration order.
- No saved online rankings on another device: history uses the original
  browser's online identity, not the display name. JSON import does not restore
  online credentials. Local multiplayer results in backups remain separate.
- No weakest-game recommendation yet: play and finish several activities.
  Recommendations use local activity history, not online room totals.

ROLLBACK
If necessary, redeploy your complete pre-update project backup. The v3.8.6
database additions can remain: they do not require dropping tables to return
to the earlier app. Do not delete D1 records or clear browser site data.

VALIDATION AND LIMITS
The release passed JavaScript syntax checks, UI/cache checks and the tested
gameplay, daily-practice, accessibility and multiplayer checks described in
CHANGELOG.txt. Migration tests used an in-memory SQLite adapter, not your live
D1 database. This package has not been deployed to your Cloudflare account;
no live database changes or Google Form submissions were made.

This is a prebuilt deployment patch, not a replacement editable-source tree.
SHA256SUMS.txt records every included file except the checksum list itself.

Cloudflare references (checked 6 November 2026):
https://developers.cloudflare.com/pages/get-started/direct-upload/
https://developers.cloudflare.com/pages/functions/get-started/
https://developers.cloudflare.com/d1/get-started/
https://developers.cloudflare.com/d1/wrangler-commands/
