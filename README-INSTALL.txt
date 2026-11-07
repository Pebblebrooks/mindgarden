MIND GARDEN V4.0.3 — INSTALLATION
Developer: Pebblebrooks

Affected-files update for your existing project. Includes the V4.0.1 folder repair and V4.0.2 fixes. It is NOT a standalone app. Keep unchanged artwork, music, configuration and source files.

1. APPLY THE DATABASE MIGRATION FIRST
Open the existing Cloudflare D1 database used by this Pages project's DB binding. Choose Console.
Open migrate-v4.0.3.sql in a text editor. Copy its two CREATE TABLE statements to the console and Execute. If your console only accepts one statement, run each CREATE TABLE statement separately, including its final semicolon.
This file contains no SQL comments, so it also works if the console collapses line breaks. It only adds two tables; do not delete tables or reset the database.
Run check-database-v4.0.3.sql afterward. Expect 21 rows, all PRESENT. If an older V3/v3.8.5/v3.8.6 object is MISSING, complete the corresponding original migration before updating the app. The check verifies object names only; use the app checks below to verify behavior.
It is safe to rerun the new migration. Existing scores remain intact. Keep a backup of your repository and export player data before updating; do not clear browser site data.

2. MERGE THE UPDATE INTO GITHUB
Extract this ZIP first. Do not upload the ZIP itself. The ZIP has public/, functions/, shared/ and tests/ folders plus top-level files, with no wrapper folder.
Recommended: merge these folders into a local copy of your existing repository, replacing matching files and retaining all other files. Commit and push the complete update in one commit.

If uploading using GitHub's website, use these EXACT destinations:
- Inside the existing public folder: upload the 36 FILES INSIDE the extracted public folder.
  Correct: public/index.html, public/garden-ui-403.js, public/garden-ui-403.css.
  Wrong: index.html at repository root, or public/public/index.html.
- Inside functions/api: upload room8.js from extracted functions/api.
- Inside shared: upload online-activities.js from extracted shared.
- Inside tests: upload the 27 files inside extracted tests.
- At repository root: upload package.json, README.md, README-INSTALL.txt, CHANGELOG-V4.txt, TEST-RESULTS-v4.0.3.txt, SHA256SUMS-v4.0.3.txt, migrate-v4.0.3.sql and check-database-v4.0.3.sql.
Finish EVERY upload before testing the final deployment. A partial upload can mix old server code with new controls. package.json must say 4.0.3.

3. CHECK CLOUDFLARE DEPLOYMENT
Use the same Pages project, repository root, output directory public, Pages Functions, and DB binding. Prebuilt assets are included; if your existing build command rebuilds the app, use python3 scripts/build-release.py or npm run build.
Wait for the successful production deployment whose commit matches the FINAL GitHub upload. Reload the same site; if needed, close all Mind Garden tabs and reopen it. Do not delete site storage.
About must report v4.0.3. The page must load garden-ui-403.css and garden-ui-403.js.

4. VERIFY ON YOUR DEVICES
- Scroll the main page with the mouse wheel. Open Play Together, scroll inside it, and verify the page behind it stays still. Close it and confirm wheel scrolling resumes.
- Repeat with text size 100%, 140% and 200%, and with a narrow browser window.
- Create a NEW room and select 1 round. Join from a second device. The host prepares a quiz; neither player should see questions until pressing Begin individually.
- For matching pairs, verify closed cards > Begin > full timed preview > automatic close > play. The preview is 5 seconds for 6 pairs and 8 seconds for 10 pairs.
- For bingo, both players must press Begin before any pictures are shown or called.
- Complete the final planned round: both players should see Session complete and final rankings, with no next-round button. Return to the lobby and join/create another room.
- Test a multi-round session: Finish session between rounds ends normally; Cancel game & close room during a round stops play for everyone. Scores already completed remain in Saved online rankings.

Browser/device visual verification was not available in this environment. Automated DOM/API/CSS tests are described in TEST-RESULTS-v4.0.3.txt; they are not a substitute for these device checks.
