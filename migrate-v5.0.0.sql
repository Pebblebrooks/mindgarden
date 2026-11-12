-- Additive pilot controls; existing rooms and results are preserved.
CREATE TABLE IF NOT EXISTS mg_pilot_rooms (
 code TEXT PRIMARY KEY REFERENCES mg_rooms(code),
 activities TEXT NOT NULL,
 released_round INTEGER NOT NULL DEFAULT 0,
 released_at INTEGER
);
CREATE TABLE IF NOT EXISTS mg_request_limits (
 bucket TEXT PRIMARY KEY,
 expires_at INTEGER NOT NULL,
 hits INTEGER NOT NULL DEFAULT 1
);
