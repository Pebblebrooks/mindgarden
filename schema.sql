CREATE TABLE IF NOT EXISTS rooms (
 code TEXT PRIMARY KEY,
 host_name TEXT NOT NULL,
 host_token TEXT NOT NULL,
 guest_name TEXT,
 guest_token TEXT,
 seed INTEGER NOT NULL,
 created_at INTEGER NOT NULL,
 started_at INTEGER,
 host_score INTEGER,
 guest_score INTEGER,
 host_moves INTEGER,
 guest_moves INTEGER,
 host_elapsed INTEGER,
 guest_elapsed INTEGER,
 round_number INTEGER NOT NULL DEFAULT 1,
 game_type TEXT NOT NULL DEFAULT 'pairs6',
 host_total INTEGER NOT NULL DEFAULT 0,
 guest_total INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX IF NOT EXISTS idx_rooms_created ON rooms(created_at);
