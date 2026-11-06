-- Apply AFTER migrate-v3.sql. Repeatable; preserves scores and existing rooms.
CREATE TABLE IF NOT EXISTS mg_departures (
 code TEXT NOT NULL REFERENCES mg_rooms(code), token TEXT NOT NULL REFERENCES mg_sessions(token),
 left_at INTEGER NOT NULL, PRIMARY KEY(code,token)
);
CREATE TABLE IF NOT EXISTS mg_active_rooms (
 token TEXT PRIMARY KEY REFERENCES mg_sessions(token), code TEXT NOT NULL REFERENCES mg_rooms(code)
);
-- Reconcile older clients that joined multiple rooms: keep a hosted room first,
-- otherwise the most recently joined open room. Prior scores stay intact.
INSERT OR IGNORE INTO mg_active_rooms(token,code)
 SELECT token,code FROM (
 SELECT m.token,m.code,ROW_NUMBER() OVER(PARTITION BY m.token ORDER BY
 CASE WHEN m.token=r.host_token THEN 0 ELSE 1 END,m.joined_at DESC,m.code) AS priority
 FROM mg_members m JOIN mg_rooms r ON r.code=m.code
 WHERE r.status!='closed' AND NOT EXISTS(SELECT 1 FROM mg_departures d WHERE d.code=m.code AND d.token=m.token)
 ) WHERE priority=1;
INSERT OR IGNORE INTO mg_departures(code,token,left_at)
 SELECT m.code,m.token,CAST(strftime('%s','now') AS INTEGER)*1000 FROM mg_members m JOIN mg_rooms r ON r.code=m.code
 WHERE r.status!='closed' AND EXISTS(SELECT 1 FROM mg_active_rooms a WHERE a.token=m.token AND a.code!=m.code);
UPDATE mg_results SET skipped=1 WHERE score IS NULL AND EXISTS(
 SELECT 1 FROM mg_departures d WHERE d.code=mg_results.code AND d.token=mg_results.token);
DELETE FROM mg_active_rooms WHERE code IN(SELECT code FROM mg_rooms WHERE status='closed');
DROP TRIGGER IF EXISTS mg_capacity;
CREATE TRIGGER mg_capacity BEFORE INSERT ON mg_members
WHEN NOT EXISTS(SELECT 1 FROM mg_members WHERE code=NEW.code AND token=NEW.token)
BEGIN
 SELECT CASE WHEN (SELECT COUNT(*) FROM mg_members m WHERE m.code=NEW.code AND NOT EXISTS(SELECT 1 FROM mg_departures d WHERE d.code=m.code AND d.token=m.token))>=8 THEN RAISE(ABORT,'ROOM_FULL') END;
 SELECT CASE WHEN (SELECT status FROM mg_rooms WHERE code=NEW.code)!='lobby' THEN RAISE(ABORT,'ROOM_STARTED') END;
END;
DROP TRIGGER IF EXISTS mg_launch;
CREATE TRIGGER mg_launch AFTER UPDATE OF round ON mg_rooms WHEN NEW.round>OLD.round
BEGIN
 INSERT INTO mg_results(code,round,token) SELECT NEW.code,NEW.round,m.token FROM mg_members m
 WHERE m.code=NEW.code AND NOT EXISTS(SELECT 1 FROM mg_departures d WHERE d.code=m.code AND d.token=m.token);
END;
CREATE TRIGGER IF NOT EXISTS mg_release_room AFTER UPDATE OF status ON mg_rooms WHEN NEW.status='closed'
BEGIN
 DELETE FROM mg_active_rooms WHERE code=NEW.code;
 UPDATE mg_results SET skipped=1 WHERE code=NEW.code AND score IS NULL;
END;
DROP TRIGGER IF EXISTS mg_active_capacity;
CREATE TRIGGER mg_active_capacity BEFORE INSERT ON mg_active_rooms
WHEN NOT EXISTS(SELECT 1 FROM mg_active_rooms WHERE token=NEW.token)
BEGIN
 SELECT CASE WHEN (SELECT COUNT(*) FROM mg_active_rooms WHERE code=NEW.code)>=8 THEN RAISE(ABORT,'ROOM_FULL') END;
 SELECT CASE WHEN (SELECT status FROM mg_rooms WHERE code=NEW.code)!='lobby' THEN RAISE(ABORT,'ROOM_STARTED') END;
END;
-- Host-paced picture bingo. Marks are server-held so refresh/reconnect is safe.
CREATE TABLE IF NOT EXISTS mg_bingo_rounds (
 code TEXT NOT NULL REFERENCES mg_rooms(code), round INTEGER NOT NULL,
 called INTEGER NOT NULL DEFAULT 1 CHECK(called BETWEEN 1 AND 9),
 PRIMARY KEY(code,round)
);
CREATE TABLE IF NOT EXISTS mg_bingo_marks (
 code TEXT NOT NULL REFERENCES mg_rooms(code), round INTEGER NOT NULL,
 token TEXT NOT NULL REFERENCES mg_sessions(token), mask INTEGER NOT NULL DEFAULT 0 CHECK(mask BETWEEN 0 AND 511),
 PRIMARY KEY(code,round,token)
);
