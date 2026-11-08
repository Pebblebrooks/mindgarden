MIND GARDEN V4.0.14 — APPROVED DEPLOYMENT PACKAGE
Developer: Pebblebrooks | 8 November 2026

This ZIP contains the approved preview, ready for your existing GitHub-connected
Cloudflare Pages project. It has not been deployed by preparing this package.
The ZIP has no enclosing folder: public/, functions/ and package.json are at its root.

INSTALLATION
1. Back up the existing repository and export player data if desired.
2. Extract the ZIP. Merge its contents into the ROOT of Pebblebrooks/mindgarden,
   replacing matching files. Preserve existing project-specific configuration,
   Cloudflare secrets and DB bindings. Do not upload the ZIP as a repository file.
3. Commit the complete update together. Do not flatten public/, create
   public/public/, or nest the update inside a new version folder.
4. Keep the Cloudflare Pages build output directory set to public.
   Prebuilt assets are included. If rebuilding, use npm run build
   (python3 scripts/build-release.py). The build script requires Python 3.
   Keep functions/ at the repository root so Pages deploys the multiplayer API.
5. Wait for the successful deployment matching your final commit, then reload.
   About should show v4.0.14. Page source should load garden-ui-4014.js and
   garden-ui-4014.css. If an old page persists, close all app tabs and reopen.
   Do NOT clear site data: player progress and personal media are stored there.

DATABASE
No new SQL is needed when upgrading from V4.0.3 or later.
Keep the existing DB binding and database. Do not reset tables or run schema.sql
against an existing installation. check-database-v4.0.14.sql is an optional
read-only object-name check; it does not validate object definitions.
Older installations require the existing migrate-v3.sql, migrate-v3.8.5.sql,
migrate-v3.8.6.sql and migrate-v4.0.3.sql prerequisites in version order.

RELEASE CHECK
- All Games > Everyday Life contains Today & Here, Food & Kitchen, Around Us.
- Today & Here: confirm time zone/country, begin, answer, advance and replay.
- Food & Kitchen: check large artwork and all three difficulty levels.
- Around Us: read the dated source, hide it, then recall details.
- Multiplayer: create a test room, join from another device, then have host close
  the room; guests should receive closure and be able to leave normally.
- Garden pets: centered title, background wildlife behind panel, sound enabled
  by user gesture. Test on the actual phones/tablets used by your players.

CONTENT MAINTENANCE
Around Us is a Singapore pilot, not an automatic news feed. Its current NParks
pack was reviewed 8 Nov 2026 and expires 22 Nov 2026 at 00:00 Singapore time.
After expiry it refuses to start until editorial content is refreshed.
Update the news object AND questions in public/everyday-games.js, verify the
source/date, rebuild, and ship a new version. Never extend expiry without review.
Today & Here uses the device clock and chosen time zone; it does not geolocate.
The Everyday Life activities are single-player. Six commercial game prototypes
are included for review; they do not save scores or earn growth points.

See RELEASE-v4.0.14.txt and TEST-RESULTS-v4.0.14.txt.

V4.0.14 adds six approved playable prototypes under New game previews, with no
saved scores. Team Garden uses one shared device, not online rooms. My Life
Album images stay in session memory and are cleared on leaving. Menu and Pause
are distinct; Everyday Life Skip advances without credit. No new DB migration.

V4.0.14: five new paired garden themes, eight total themes / sixteen views.
Updated bilingual About/Help and scenery backup import. No new database migration.

V4.0.14 repairs the coastal daylight image, keeps scene arrows aligned, and hides ground animals on the five panoramic themes. Birds and flying insects remain. No database changes.
