// Additive, repeatable upgrade. Original memberships, scores and room history remain intact.
const pending=new WeakMap();
export function ensureRoomMemberships(db){
 if(pending.has(db))return pending.get(db);
 const sql=[
 "CREATE TABLE IF NOT EXISTS mg_room_memberships(token TEXT NOT NULL,code TEXT NOT NULL,PRIMARY KEY(token,code))",
 "CREATE INDEX IF NOT EXISTS mg_memberships_code ON mg_room_memberships(code)",
 "INSERT OR IGNORE INTO mg_room_memberships(token,code) SELECT a.token,a.code FROM mg_active_rooms a JOIN mg_rooms r ON r.code=a.code WHERE r.status!='closed'",
 "CREATE TABLE IF NOT EXISTS mg_room_requests(token TEXT NOT NULL,request_id TEXT NOT NULL,code TEXT NOT NULL,PRIMARY KEY(token,request_id))",
 "CREATE TRIGGER IF NOT EXISTS mg_multi_capacity BEFORE INSERT ON mg_room_memberships WHEN NOT EXISTS(SELECT 1 FROM mg_room_memberships WHERE token=NEW.token AND code=NEW.code) BEGIN SELECT CASE WHEN (SELECT COUNT(*) FROM mg_room_memberships WHERE code=NEW.code)>=8 THEN RAISE(ABORT,'ROOM_FULL') END; SELECT CASE WHEN (SELECT status FROM mg_rooms WHERE code=NEW.code)!='lobby' THEN RAISE(ABORT,'ROOM_STARTED') END; END",
 "CREATE TRIGGER IF NOT EXISTS mg_multi_release AFTER UPDATE OF status ON mg_rooms WHEN NEW.status='closed' BEGIN DELETE FROM mg_room_memberships WHERE code=NEW.code; END",
 "DROP INDEX IF EXISTS mg_one_open_room_per_host"
 ];
 const task=db.batch(sql.map(s=>db.prepare(s).bind())).catch(e=>{pending.delete(db);throw e});pending.set(db,task);return task;
}
