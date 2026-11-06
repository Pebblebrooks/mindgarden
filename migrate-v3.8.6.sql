-- Apply after migrate-v3.sql and the complete migrate-v3.8.5.sql.
-- Completed scores remain in mg_results. This table records each round's activity.
CREATE TABLE IF NOT EXISTS mg_rounds (
 code TEXT NOT NULL REFERENCES mg_rooms(code),
 round INTEGER NOT NULL,
 mode TEXT NOT NULL,
 started_at INTEGER,
 PRIMARY KEY(code, round)
);
-- Only the most recent historical round has reliable mode metadata in mg_rooms.
-- Older scores remain visible with an "Earlier activity" label; do not invent metadata.
INSERT OR IGNORE INTO mg_rounds(code,round,mode,started_at)
 SELECT code,round,mode,started_at FROM mg_rooms WHERE round>0;
CREATE TRIGGER IF NOT EXISTS mg_round_metadata
 AFTER UPDATE OF round ON mg_rooms WHEN NEW.round>OLD.round
BEGIN
 INSERT OR IGNORE INTO mg_rounds(code,round,mode,started_at)
 VALUES(NEW.code,NEW.round,NEW.mode,NEW.started_at);
END;
CREATE INDEX IF NOT EXISTS mg_results_player_history ON mg_results(token,code,round);
