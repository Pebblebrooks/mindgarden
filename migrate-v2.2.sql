-- Run ONCE on an existing v2.1 Mind Garden D1 database before deploying v2.2.
-- Keep all existing rooms and players. Do not repeat this migration.
ALTER TABLE rooms ADD COLUMN round_number INTEGER NOT NULL DEFAULT 1;
ALTER TABLE rooms ADD COLUMN game_type TEXT NOT NULL DEFAULT 'pairs6';
ALTER TABLE rooms ADD COLUMN host_total INTEGER NOT NULL DEFAULT 0;
ALTER TABLE rooms ADD COLUMN guest_total INTEGER NOT NULL DEFAULT 0;
