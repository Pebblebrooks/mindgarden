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
-- Additive migration: preserves all existing two-player rooms and local profiles.
CREATE TABLE IF NOT EXISTS mg_sessions (
 token TEXT PRIMARY KEY, id TEXT NOT NULL UNIQUE, name TEXT NOT NULL,
 last_seen INTEGER NOT NULL, created_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS mg_rooms (
 code TEXT PRIMARY KEY, host_token TEXT NOT NULL REFERENCES mg_sessions(token),
 created_at INTEGER NOT NULL, status TEXT NOT NULL DEFAULT 'lobby',
 round INTEGER NOT NULL DEFAULT 0, mode TEXT NOT NULL DEFAULT 'pairs6',
 seed INTEGER NOT NULL, started_at INTEGER, closed_at INTEGER
);
CREATE TABLE IF NOT EXISTS mg_members (
 code TEXT NOT NULL REFERENCES mg_rooms(code), token TEXT NOT NULL REFERENCES mg_sessions(token),
 joined_at INTEGER NOT NULL, seen_round INTEGER NOT NULL DEFAULT 0,
 PRIMARY KEY(code,token)
);
CREATE TABLE IF NOT EXISTS mg_results (
 code TEXT NOT NULL, round INTEGER NOT NULL, token TEXT NOT NULL,
 score INTEGER, moves INTEGER, elapsed INTEGER, skipped INTEGER NOT NULL DEFAULT 0,
 PRIMARY KEY(code,round,token), FOREIGN KEY(code,token) REFERENCES mg_members(code,token)
);
CREATE TABLE IF NOT EXISTS mg_invites (
 code TEXT NOT NULL REFERENCES mg_rooms(code), token TEXT NOT NULL REFERENCES mg_sessions(token),
 received_at INTEGER, PRIMARY KEY(code,token)
);
CREATE INDEX IF NOT EXISTS mg_rooms_created ON mg_rooms(created_at);
CREATE INDEX IF NOT EXISTS mg_sessions_seen ON mg_sessions(last_seen);
CREATE TRIGGER IF NOT EXISTS mg_capacity BEFORE INSERT ON mg_members
WHEN NOT EXISTS(SELECT 1 FROM mg_members WHERE code=NEW.code AND token=NEW.token)
BEGIN
 SELECT CASE WHEN (SELECT COUNT(*) FROM mg_members WHERE code=NEW.code)>=8 THEN RAISE(ABORT,'ROOM_FULL') END;
 SELECT CASE WHEN (SELECT status FROM mg_rooms WHERE code=NEW.code)!='lobby' THEN RAISE(ABORT,'ROOM_STARTED') END;
END;
-- Freeze each round's participant set atomically with the host's launch.
CREATE TRIGGER IF NOT EXISTS mg_launch AFTER UPDATE OF round ON mg_rooms
WHEN NEW.round>OLD.round
BEGIN
 INSERT INTO mg_results(code,round,token) SELECT NEW.code,NEW.round,token FROM mg_members WHERE code=NEW.code;
END;

CREATE UNIQUE INDEX IF NOT EXISTS mg_one_open_room_per_host ON mg_rooms(host_token) WHERE status != 'closed';
