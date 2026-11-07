CREATE TABLE IF NOT EXISTS mg_room_sessions (
 code TEXT PRIMARY KEY REFERENCES mg_rooms(code),
 total_rounds INTEGER NOT NULL DEFAULT 3 CHECK(total_rounds BETWEEN 1 AND 20),
 ended_at INTEGER,
 end_reason TEXT CHECK(end_reason IN ('finished','cancelled'))
);
CREATE TABLE IF NOT EXISTS mg_round_starts (
 code TEXT NOT NULL,
 round INTEGER NOT NULL,
 token TEXT NOT NULL,
 began_at INTEGER NOT NULL,
 PRIMARY KEY(code,round,token),
 FOREIGN KEY(code,round,token) REFERENCES mg_results(code,round,token)
);
