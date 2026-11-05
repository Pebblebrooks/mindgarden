# Mind Garden v2.2 — Upgrade your already working Cloudflare Pages site

**This release preserves the `mindgarden` GitHub repository, your Cloudflare Pages project `mindgarden-bk1`, and your existing D1 database `mindgarden-db`. Do not delete these.**

## Before deployment: run the existing-database migration ONCE

1. Cloudflare dashboard → **Storage & databases → D1 → mindgarden-db → Console**.
2. Open `migrate-v2.2.sql` from this package. Execute each of its four `ALTER TABLE` statements **once**, in order. Do not run `schema.sql` against your existing database: that file is for fresh installations.
3. Verify columns using:

```sql
PRAGMA table_info(rooms);
```

Check that `round_number`, `game_type`, `host_total`, and `guest_total` appear.

> If a statement says `duplicate column name`, that column was already added; continue with missing columns only. Do not drop the `rooms` table.

## Deploy via GitHub

1. Unzip this package; open its `mind-garden-cloudflare/` folder.
2. Upload the **contents** of that folder into the root of GitHub repo `Pebblebrooks/mindgarden`. **Replace** existing files with matching paths, especially `public/multiplayer.js`, `functions/api/room.js`, and `public/sw.js`. Add `migrate-v2.2.sql` and `UPGRADE-v2.2.md`.
3. Commit changes to `main`. Cloudflare Pages should deploy automatically (if its GitHub connection is authorized). Otherwise use its connected deployment workflow.
4. The existing **Production** D1 binding should remain **`DB` → `mindgarden-db`**. You do not need another binding. Confirm a new successful production deployment.
5. Open `https://mindgarden-bk1.pages.dev/` and refresh to load the new service-worker cache.

## Test v2.2

1. Player A opens **Play Together** and creates a room.
2. Click **Copy invitation link**; paste into a message to Player B. The link points at `https://mindgarden-bk1.pages.dev/?room=XXXXXX` (origin follows where you created the room).
3. Player B opens it, sees the pre-filled six-character code, enters a name and clicks **Join room**.
4. Both finish the first matching game. The host selects **Matching pairs · 10 pairs**, **Mental sums**, **Number patterns**, or **Odd one out**, then clicks **Start next round**.
5. Player B sees the next challenge automatically (allow a couple of seconds for status polling). Check that the same room code remains and cumulative scores increase.
6. Use **Finish together / Leave screen** to exit. Rooms expire 24 hours after creation, even after multiple rounds.

## Current limitations

- Still **two players per room**. No live collaborative board, authenticated accounts, or multi-user tournaments.
- Scores rely on the player browser and are for entertainment, not clinical assessment or high-stakes competitions.
- The host chooses the next activity **only after both players finish**; the other player sees the selection when the new round begins.
- Games are matched at the activity level: both receive identical board layout or question sequence, but do not see each other's moves in real time.
- Reopening the page during an incomplete round may restart that player's local board or questions. Already-submitted results remain stored on D1. Use the same device/browser to resume a room.
- Share links expose a room code, not a login. Avoid sharing them publicly. Room records remain in D1 until deleted by an administrator; expiration prevents API use after 24 hours.
- The app is a cognitive engagement and wellness aid. It is not demonstrated to diagnose, prevent, or treat dementia.
