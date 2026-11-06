# Mind Garden v3.0 — eight-player rooms and articulated wildlife

## Deploy this revision

1. In Cloudflare D1, open `mindgarden-db` → Console and execute **migrate-v3.sql** once. It is safe to run again. It adds new tables and keeps the previous two-player room tables intact. New installations can run the complete `schema.sql` instead.
2. Replace the project files at the root of `Pebblebrooks/mindgarden` on `main` with this package's contents. Keep the Pages output directory `public` and the D1 binding `DB` → `mindgarden-db`.
3. Deploy, then refresh each player's browser. The new cache is `mind-garden-v30`; versioned URLs load the updated UI, wildlife and styles. The older `/api/room` endpoint remains available for cached v2 clients, but their old rooms are separate from eight-player rooms. Start a new v3 room for your group.

## How everyone receives the room code

- Each player opens **Play Together → Enter online lobby**. The app has device-local profiles; it does not have email/password accounts. An online lobby session is the meaning of “logged in” for this feature.
- The host selects **Create room & invite online players**. All connected lobby sessions receive an in-app invitation banner and an open-room entry containing the host's name and room code, normally within 2.5 seconds.
- The host sees each recipient and whether their browser has acknowledged receipt. Players can join directly from the invitation, enter the code, or open a shared link. Joining is not automatic from a general announcement; opening a specific invitation link retains automatic joining.
- After 2–8 people have joined, the host chooses an activity and presses **Launch for all joined players**. Everyone in the room receives the same round and seeded challenge, normally within 1.5 seconds. A room-status panel shows launch acknowledgement and online/reconnecting status.
- Receipt means that the invitation was rendered on that browser, not that the person read it. Offline, suspended, or closed browsers cannot receive a live announcement. A reconnect fetches current room state; the host can wait for receipts and joined-player status before launch. New players cannot join after launch, but existing members can rejoin.
- Codes are intentionally announced to all online lobby sessions on this deployment. Use a separate deployment if the game is intended for a separate private group. There is no email, SMS, WhatsApp, or operating-system push delivery.

## Rounds and reconnects

The room limit is enforced in the database, including simultaneous joins. Only the host can launch, advance, end a round early, or close the room. Every player sees the same room code, a full room leaderboard, and cumulative totals. Duplicate result submissions do not add points twice. Players can leave the screen and resume with their unfinished question or matching board restored on the same browser. Do not clear browser storage if you want to resume that device's identity.

A disconnected player keeps their room slot. The host can end a round early; unfinished players receive no points for that round and appear as “Not finished”. The next round includes all eight members again. Rooms expire after 24 hours. Online status is recent polling activity, not proof that a person is looking at the screen.

## Wildlife animation

The previous sliding emoji are replaced with original articulated SVG illustrations:

- Butterflies: patterned wings with independent folded/open wingbeats and curved flight routes.
- Bird: feathered near/far wings, body lift and head movement.
- Bee: fast translucent wingbeats and hovering motion.
- Cat and dog: phased four-leg walking, knee flex, body bob, head motion and tail movement; dog ears move too.
- Rabbit: shorter legs, rounded haunches, coordinated hopping and ear movement.

These are detailed vector illustrations, not photographic GIFs. SVG keeps edges crisp, works offline without third-party image hosts, and supports the existing Off/Gentle/Standard setting. Decorative animation pauses during games, dialogs and hidden tabs and honors reduced-motion preferences.

## Validation

Run with Node.js 24+, `npm install`, `npm run check`, then `npm test`.

Passed:
- SQL API tests: invitation receipts, eight-player capacity, host authorization, launch acknowledgements, reconnect, two rounds, cumulative scores, duplicate submissions, unfinished results, room closure, and repeatable migration.
- Eight independent DOM clients (English and Chinese) connected to the actual room API backed by SQLite: seven guests received the same code, host receipts reached 7/7, all launched into identical challenges, all submitted answers through UI buttons, all saw the eight-player leaderboard, and all entered the second round.
- Local checkpoint/resume, articulated wildlife structure and motion controls.
- JavaScript syntax checks; static wildlife illustrations rendered and visually inspected.

The browser engine download was unavailable in this environment. CSS motion timing, complete browser rendering and a real Cloudflare deployment across eight physical devices still need a final smoke check. No production deployment was performed.
