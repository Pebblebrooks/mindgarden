# Mind Garden v2.4 — Multiplayer repair

Your v2.3 error **Request could not be processed. Check that the v2.2 database migration was applied** is a generic 500 response. It does not prove that the migration is missing.

## 1. Confirm database structure (do this BEFORE altering data)

Open Cloudflare > Storage & databases > D1 > mindgarden-db > Console and execute:

```sql
PRAGMA table_info(rooms);
```

The columns `round_number`, `game_type`, `host_total` and `guest_total` must exist. If a column already exists, **do not run its ALTER TABLE**.

## 2. Add ONLY columns that do not exist

```sql
ALTER TABLE rooms ADD COLUMN round_number INTEGER NOT NULL DEFAULT 1;
ALTER TABLE rooms ADD COLUMN game_type TEXT NOT NULL DEFAULT 'pairs6';
ALTER TABLE rooms ADD COLUMN host_total INTEGER NOT NULL DEFAULT 0;
ALTER TABLE rooms ADD COLUMN guest_total INTEGER NOT NULL DEFAULT 0;
```

These commands are **not idempotent**; run an ALTER command only for a missing column. Do not delete the table or run a complete replacement schema on an existing database.

## 3. Deploy and test

Commit this package to your GitHub main branch, verify the production Pages deployment completed, and keep the production D1 binding `DB` pointing to `mindgarden-db`. Verify:

`https://mindgarden-bk1.pages.dev/api/room?action=health`

Expected JSON: `{"ok":true,"database":"connected","missingColumns":[]}`.

If `ok` is false, only add the listed missing columns. If it still fails, check Cloudflare Pages Functions logs and share the error; the new app reports a more actionable error.

Use the unprefixed production URL for two-device tests, create a fresh room, and join it on another browser.
