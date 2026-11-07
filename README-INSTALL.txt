MIND GARDEN V4.0.0 — UPDATE INSTALLATION
Developer: Pebblebrooks
Release date: 7 November 2026

WHAT THIS DOWNLOAD IS
This is a cumulative update for your existing complete Mind Garden v3.8.8 project (also suitable for the reviewed v3.8.9 draft). It includes affected files and new artwork only. It is not a standalone website: unchanged scenery, audio and server files remain in your existing project.

1. BACK UP
Keep a copy of your complete current project. In the app, use Menu > Settings > Backup and restore to export a JSON backup for each player you want to protect. JSON backups do not contain personal photos, videos or music. Keep originals separately.

2. MERGE THE UPDATE
Extract Mind-Garden-v4.0.0-update.zip.
Open its mind-garden-cloudflare folder.
Copy its CONTENTS into the root of your existing complete project, matching the folders and replacing the files when prompted.
The project root is the folder containing package.json, public and functions.
Merge public into public; do not replace/delete the entire old public folder.
Keep your existing functions, shared, scenery/audio files, deployment configuration and D1 bindings.
Do not upload the small update folder by itself.

The complete updated public folder must include:
  index.html
  garden-ui-400.css
  garden-ui-400.js
  sw.js
  art/ (all supplied SVG illustrations and attribution files)
  your existing scenery, audio, models and other assets

The prebuilt UI is included. You do not need to build before deploying it.
For later source edits, use Python 3 from the project root:
  python3 scripts/build-release.py
On Windows, if Python is installed through the launcher:
  py -3 scripts/build-release.py
This generates matching HTML, CSS, JavaScript and service-worker assets from package.json's version.

3. DEPLOY THE COMPLETE MERGED PROJECT
Use the existing Cloudflare Pages project and the same production address, so browser-local player data stays associated with the same site.

If your project uses Git integration, commit the merged changes to your existing repository and use your usual Pages deployment workflow. Keep public as the output directory and retain the existing Functions and D1 settings.

If your project uses Wrangler, run from the complete project's root:
  npx wrangler pages deploy public --project-name YOUR_EXISTING_PROJECT_NAME
Replace YOUR_EXISTING_PROJECT_NAME with the actual name in Cloudflare. Keep the existing DB binding pointed to your current mindgarden-db database.

Cloudflare dashboard drag-and-drop does not compile a functions folder. This app uses Pages Functions for multiplayer, so use the existing Git workflow or Wrangler to preserve that functionality. Do not deploy only public through dashboard drag-and-drop for this Functions-based project.
Official reference:
https://developers.cloudflare.com/pages/functions/get-started/
https://developers.cloudflare.com/pages/get-started/direct-upload/

4. DATABASE
V4 has NO new SQL migration and does not change the API or database schema.
A working current multiplayer database still requires the previous V3, v3.8.5 and v3.8.6 migrations. If the app already reports a database setup problem, this visual update does not resolve it. Check the existing migration files and schema before changing the database. Do not drop or reset tables. The V4 package contains no new SQL to paste into D1.

5. CONFIRM THE UPDATE
Open the existing app address while online, allow the update to load, then reload. If an older page remains, close all Mind Garden tabs and reopen the same address. A hard refresh on desktop may also help. Do not clear site data as a first step; it contains local progress and media.
Open Menu > About: it must show v4.0.0.
Check that:
- Light mode uses ivory/sage surfaces with dark teal text and primary buttons.
- Start Today's Games appears before the three secondary destination cards.
- The hamburger is icon-only; controls that cannot fit move into its menu.
- Quick guide opens and closes, including at large text sizes.
- Quiet/Garden changes the background during a game without restarting it.
- The welcome scenery arrows sit beside the caption below the main actions.
- Pictures load, card selections work, and the bouquet remains proportional.
- Your saved players, progress and preferences remain present.
- Two devices can join your existing multiplayer service and complete a round.

Quiet view is initially selected. Change it above a game board or in Settings. The setting and the dismissed first-use hint are saved per player and included in JSON backups. The welcome garden remains scenic in either mode.

If pictures are missing, confirm the ENTIRE new art folder was merged and deployed with the new bundle. Do not mix old index.html, new CSS and old JavaScript.

ROLLBACK
Re-deploy your complete previous project backup to the same Pages project. V4 makes no database schema changes. Keep user backups; do not clear browser data just to roll back the visual release.
