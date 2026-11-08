MIND GARDEN V4.0.6 — INSTALLATION
8 November 2026 · Developer: Pebblebrooks

CONTENTS
Approved welcome layout, grouped navigation, centered popup controls,
larger-text spacing fixes and updated English/Chinese help. Complete application
assets, editable source, Pages Functions, build script and tests are included.
Merge into your existing repository. public/, functions/, shared/, src/,
scripts/ and tests/ are at the ZIP root, with no wrapper folder.
Your Cloudflare account settings, database and player records are not in this ZIP.
Includes six new single-player activities, interactive cat/dog companions,
progress-panel peeks, full-bloom previews and compact scenery controls.
See RELEASE-v4.0.6.txt for scope and limitations.

1. DATABASE
If the V4.0.3 database migration is installed, NO NEW SQL is required.
V4.0.6 uses the same schema as V4.0.3.

If upgrading from V4.0.2 or earlier, complete migrate-v4.0.3.sql first in the
existing D1 database bound to this app as DB. Execute its two complete CREATE
TABLE statements, including final semicolons: mg_room_sessions and mg_round_starts.
It preserves scores. The older migrate-v3.sql, migrate-v3.8.5.sql and
migrate-v3.8.6.sql prerequisites must already be complete.
Do not use schema.sql to update an existing database or delete existing tables.

Optional check: run check-database-v4.0.6.sql in the D1 Console.
Expected: 21 rows, all PRESENT. This checks object names, not their definitions.
If an older object is MISSING, complete its corresponding original migration.
For SQL containing comments, preserve line breaks, or omit lines beginning
with -- before pasting into the Console.

2. MERGE THE EXTRACTED FILES
Keep a backup of your repository. Extract this ZIP; do not upload the ZIP itself.
Merge its contents into the existing repository root, replacing matching files
and retaining project-specific configuration and unrelated files.
Commit and push the complete update together where possible.

Correct paths after merging:
  package.json                     version 4.0.6
  public/index.html
  public/garden-ui-406.js
  public/garden-ui-406.css
  public/sw.js
  public/welcome-media.js
  public/dashboard.js
  functions/api/room8.js
  shared/online-activities.js
  scripts/build-release.py

Do not flatten public/ into the root, create public/public/, or upload everything
inside an extra Mind-Garden-v4.0.6-update/ folder.
If using GitHub's website, preserve every folder's relative path and finish all
uploads before testing the final deployment. Uploading only index.html or only
the generated bundle can leave the build using older editable source.
Old garden-ui-400/401/402/403/404 files may remain; the new page references 406 assets.

3. CLOUDFLARE PAGES
Keep the existing project, repository connection, Pages Functions and DB binding.
Build output directory: public
Prebuilt assets are included. If your deployment rebuilds the app, use
npm run build (or python3 scripts/build-release.py).
Do not change the output directory to the extracted ZIP folder.

Wait for the successful deployment matching the final uploaded commit.
Reload Mind Garden. If the older page remains, close all Mind Garden tabs and
reopen the same production URL. Do not clear browser site data: local player
progress and personal media are stored there.

Open Menu > Help > About. It must show v4.0.6.
The HTML must reference garden-ui-406.js and garden-ui-406.css.
If the version remains older, check the deployed commit and folder paths above.

4. QUICK CHECK
- Welcome/name has no colored box or border and still opens the name editor.
- Matching cards appear as Today's Games, All Games, Play Together, in that order.
  They reflow on narrow screens or when text is enlarged.
- Today's Games still opens the guided daily activities.
- Progress, Leaderboard and Quick guide remain accessible from the menu.
- Compact sound/animation icons appear in the navbar when space permits;
  Menu > Preferences also contains them, text size and display mode.
- Test 100%, 140% and 200% text in light/dark modes and a narrow viewport.
- In Play Together, Activity and Prepare first round have visible separation.
- In Music, volume labels and percentages appear above their sliders.
- Information icons work by hover, keyboard or tap; Escape dismisses them.
- Create a new multiplayer room and confirm each player can press Begin.

This approved release is intended for GitHub-triggered Cloudflare Pages deployment. No D1 mutation is required.
See TEST-RESULTS-v4.0.6.txt for completed checks and their limits.
