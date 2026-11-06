MIND GARDEN v3.8.8 — AFFECTED-FILES UPDATE

For an existing complete v3.8.7 Mind Garden project (with v3.8.6 multiplayer
setup already applied). This is an update patch, not a standalone app.
The approved v3.8.8 draft is supplied unchanged. No new SQL migration is required.
Unlike v3.8.7, this update ALSO includes a multiplayer backend file.

FIVE APPLICATION FILES TO COPY
  public/index.html
  public/garden-ui-388.css
  public/garden-ui-388.js
  public/sw.js
  functions/api/room8.js

INSTALLATION
1. Back up your current COMPLETE project. For player data, use the app's
   Settings > Backup and restore > Download JSON backup for each player.
2. Extract this ZIP and open mind-garden-v3.8.8-update.
3. Merge its public folder into your existing project's public folder:
   replace index.html and sw.js, and add garden-ui-388.css and garden-ui-388.js.
   Replace functions/api/room8.js in your existing project's functions/api.
   Copy the contents into the matching folders; do not nest an extra public
   folder and do not replace or delete either whole folder.
4. Keep all existing images, audio, shared modules, other functions and
   configuration. In particular, keep shared/online-activities.js, which the
   updated backend imports. Keep the existing DB binding to your D1 database.
   Older versioned bundles may remain; index.html now loads the 388 bundles.
5. Deploy the COMPLETE merged project using your existing Git integration or
   Wrangler workflow so that Pages Functions are deployed as well.
   Do not deploy this small update folder by itself. Do not upload only public
   and assume that functions/api/room8.js has also been updated.

   Wrangler example, run from the existing project root containing public,
   functions and shared:

   npx wrangler pages deploy public --project-name YOUR_PAGES_PROJECT --branch YOUR_PRODUCTION_BRANCH

   Replace both placeholders with your existing Pages project and production
   branch. Keep your current deployment configuration and bindings. Cloudflare
   dashboard drag-and-drop Direct Upload does not support a functions folder;
   use your established Git or Wrangler workflow for this update.

   The UI assets in this patch are already built. This package is not an updated
   editable-source tree. Do not run an older UI build script or a Git build step
   that regenerates the UI from old sources: it would overwrite these files.
   If your deployment already rebuilds the UI, use the matching v3.8.8 source
   tree before enabling that build step.
6. Once deployment completes, close other Mind Garden tabs and reopen the app.
   On Windows, use Ctrl+Shift+R if needed. About must show v3.8.8.
   Do not clear browser site data to refresh: it contains player information.

DATABASE / MULTIPLAYER
No v3.8.8 SQL file is needed. This patch does not repair earlier missing tables,
indexes or triggers. If the previous database check reported MISSING objects,
complete the outstanding v3 / v3.8.5 / v3.8.6 setup using the existing migration
files, then rerun the read-only check. All 19 expected objects should be PRESENT.
Presence alone does not verify each object's definition; also test online play.
Do not drop or recreate the database to install this update.

VERIFY AFTER DEPLOYMENT
- About shows v3.8.8, Pebblebrooks copyright, updated English/Chinese help,
  first-time setup, and Privacy, PDPA & my data.
- At mobile/tablet widths and 140%/200% text, navigation stays on one row;
  hidden controls remain available under the hamburger menu. Bouquet artwork
  stays proportional.
- Start Today's Games opens an activity. JSON backup/import controls remain
  available in Settings.
- Create a room, join from a second device, launch a game, finish a round,
  check saved online rankings, and test guest exit/host cancellation.
- Photo/video completion after closing Settings does not reopen the dialog.

IF AN OLD VERSION APPEARS
Check that all five files were copied and the production deployment succeeded.
Close old tabs and refresh. Replacing only CSS does not install this release.
Check that no old build step overwrote index.html or the 388 bundles.

ROLLBACK
Redeploy the complete project backup from step 1. No database rollback is needed.

Checksums for every other file in this ZIP are in SHA256SUMS.txt.
This package has been verified but has not been deployed to your account.

Cloudflare deployment references, checked 7 November 2026:
https://developers.cloudflare.com/pages/functions/get-started/
https://developers.cloudflare.com/workers/wrangler/commands/pages/
