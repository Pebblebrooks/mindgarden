MIND GARDEN v3.8.5 — UPDATE PACKAGE
Release date: 6 November 2026 (Singapore)

For an existing v3.8.4 Cloudflare project. This is an update folder, not a complete application.
The seven deployment files below contain the cumulative reviewed v3.8.5 changes.

FILES AND DESTINATIONS
Copy each file to the same relative location in your existing project:
  public/index.html
  public/garden-ui-385.css
  public/garden-ui-385.js
  public/sw.js
  public/feedback-banner.jpg
  functions/api/room8.js
  migrate-v3.8.5.sql

INSTALL
1. Back up your existing project and D1 database. In Mind Garden, use
   More > Settings > Backup and restore to export each player's JSON backup.
2. Extract this ZIP. Open its mind-garden-v3.8.5-update folder and merge the
   public and functions folders into the corresponding folders of your existing
   project. Copy migrate-v3.8.5.sql to the project root. Replace matching files;
   retain all other existing files, images, audio, configuration and Functions.
   Use the complete set of update files together; do not replace only the CSS.
3. When no multiplayer games are active, run the complete migrate-v3.8.5.sql file
   against the same D1 database used by this app, before deploying the update.
   It requires the existing V3 multiplayer schema (migrate-v3.sql already applied).
   The migration is repeatable and preserves completed scores. It adds room
   departure/active-room handling and online bingo tables. For legacy sessions
   in several rooms, it keeps a hosted room first, otherwise the most recently
   joined open room, and ends the other unfinished participation.
   Do not replace your database or rerun a fresh-install schema.
4. Deploy your complete merged project through your existing Cloudflare deployment
   method, retaining the current Functions and D1 bindings. Uploading this small
   update folder alone would omit the app's existing assets and backend files.
5. Reload Mind Garden and check About > Version v3.8.5. If the old UI remains,
   close other Mind Garden tabs and reload; on Windows, try Ctrl+Shift+R.
   Do not clear browser site data, which contains local players and progress.

QUICK CHECK AFTER INSTALLATION
- About shows v3.8.5, first-time setup, user guide, FAQ and Privacy & my data.
- All Games contains 36 activities, including the five new games below.
- Contact shows the autumn banner and bilingual Google feedback form.
- Navbar T− / T+ and appearance controls work; cards wrap at larger text sizes.
- Welcome Animation On/Off, scenery arrows and photo/video Settings are available.
- Settings > Backup and restore offers Export JSON and Import JSON backup.
- With two devices or browser sessions, create/join a Picture bingo room: only
  the host can call the next picture; players mark called pictures; a full card
  saves one result. Check guest Leave room and host Cancel / close room.

INCLUDED CHANGES
- Garden picture puzzles: 6, 12 or 24 tap-to-swap pieces, reference picture,
  hints and undo.
- Gentle dominoes: turn-based play against a garden partner with three choices.
- Picture bingo: solo 9/12/16-picture cards and cooperative online 9-picture
  rooms, manually paced by the host; equal full-card scores without speed bonus.
- Garden pathways: 3x3, 4x4 or 5x5 solvable rotation puzzles, hints and undo.
- Complete the saying: English sayings and Chinese proverbs with explanations.
- New activities support English/Chinese, pause/leave, saved progress/growth,
  history and JSON backups. Mobile bingo cards reflow for enlarged text.
- Rotating bouquet, per-player text size, appearance control, revised sage
  styling, restored animation toggles and updated room leave/cancel controls.
- About includes version, app description, features, user guide, first-time
  setup, troubleshooting and Privacy & my data. The quote card is removed.
- Contact uses https://forms.gle/L3NGNsizZcATs9xA8. Google's embedded view omits
  the form header, so feedback-banner.jpg supplies the exact autumn banner above
  the live form. If you change the Google Form's banner later, update this image
  too. Form questions, collection settings and responses are managed in Google.

VALIDATION AND LIMITS
The reviewed draft passed gameplay completion, progress/JSON round-trip,
300 generated pathway-board checks, 150 domino-deal checks, online bingo API
and two-client UI checks, existing eight-client multiplayer checks, and
release UI/cache checks. Browser review included desktop, phone/tablet widths,
Chinese text and 200% text size. These are simulated viewports, not physical
mobile-device tests. Online deployment and feedback submission have not been
performed by preparing this package. No feedback response was submitted.

DEVELOPER NOTE
This is a deployment-only patch. The UI modules are already bundled in
 garden-ui-385.js and garden-ui-385.css. No install/build step is required merely
 to copy these prebuilt assets. Keep the v3.8.5 source checkpoint if making
 future source changes; an older build configuration could regenerate old
 assets. Source checkpoint: eb78b2b522111b6f82d2e0ba9013b0216d52b4eb.
