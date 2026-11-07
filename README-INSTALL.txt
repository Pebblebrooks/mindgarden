MIND GARDEN V4.0.2 — INSTALLATION
Developer: Pebblebrooks

This download contains affected files for your existing Mind Garden project. It includes the V4.0.1 GitHub folder repairs as well as the new multiplayer fixes. You do not need to apply the separate V4.0.1 repair ZIP first. It is not a complete standalone project.

Keep a backup of your existing project. Export any player data you want to back up through Settings > Backup and restore. Do not clear browser site data while updating.

GITHUB WEBSITE — THREE UPLOADS
Extract the ZIP using Windows Extract All. Inside are public and tests folders plus six top-level files. Do not upload the ZIP itself.

1. OPEN THE EXISTING public FOLDER IN YOUR GITHUB mindgarden REPOSITORY, ON main.
   Choose Add file > Upload files. Select the 35 FILES INSIDE the extracted local public folder, then commit through your normal workflow.
   Correct target: public/index.html
   Wrong targets: index.html at repository root; public/public/index.html
   Merge/replace matching files. Keep all other files in public, including artwork, audio and wildlife assets.

2. OPEN THE EXISTING tests FOLDER IN GITHUB.
   Upload the 20 FILES INSIDE the extracted local tests folder and commit.

3. RETURN TO THE GITHUB REPOSITORY'S TOP LEVEL.
   Upload the six top-level files from the extracted ZIP:
     package.json
     README.md
     README-INSTALL.txt
     CHANGELOG-V4.txt
     TEST-RESULTS-v4.0.2.txt
     SHA256SUMS-v4.0.2.txt
   In particular, package.json must be the new file with version 4.0.2. Commit these changes.

Complete ALL THREE uploads before checking the final Cloudflare deployment. If your build command rebuilds the app, it takes the version from package.json. An intermediate deployment may still report the old version until the last upload is committed.

LOCAL CHECKOUT ALTERNATIVE
Merge the extracted public and tests folders and the six top-level files into the root of your complete local project. Replace matching files, keep unchanged files, then commit/push the merged changes in one commit.

CLOUDFLARE
Use your existing Pages project and production address. The intended root is the repository root and build output is public. Preserve Pages Functions and the D1 binding DB.
Prebuilt assets are included. If using a build command, use python3 scripts/build-release.py or npm run build. Do not change output to the repository root to serve the misplaced duplicate files.
Wait for the successful production deployment whose commit matches the FINAL GitHub upload. Then reload the website. If necessary close every Mind Garden tab and reopen the same address.

CONFIRM
About must show v4.0.2. public/index.html must load garden-ui-402.css and garden-ui-402.js; public/sw.js uses mind-garden-v402.
In a fresh matching round:
- Cards are closed before Begin.
- Begin opens them for 5 seconds (6 pairs) or 8 seconds (10 pairs).
- They close automatically and matching begins, without another tap.
- Card pictures show as SVG illustrations, or emoji while unavailable.
- Match feedback has a reserved area so changing text does not move the board.
- Leave this room returns to the lobby, ready for a new code. A new room must still be open, have a free place, and not already be launched.
- Back to garden · stay joined deliberately retains membership. Use Leave this room when changing rooms. Hosts must close their room first.

DATABASE
There is NO NEW SQL migration and no API/schema change in V4.0.2. Do not reset or drop tables. Existing multiplayer requires the earlier V3, v3.8.5 and v3.8.6 migrations.

VALIDATION LIMIT
Automated multiplayer, cache, and artwork fallback checks passed. Browser visual testing was blocked by the current environment, so confirm picture rendering and feedback spacing on an affected mobile device after deployment. This package has not been deployed by the assistant.
