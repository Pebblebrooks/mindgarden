// Additive room-specific presence. Polling is not acknowledgement of an arrival.
const pending=new WeakMap();
export async function ensureRoomAvailability(db,now){
 if(!pending.has(db)){
  const statements=[
   `CREATE TABLE IF NOT EXISTS mg_room_availability(code TEXT PRIMARY KEY,host_seen INTEGER NOT NULL,pending_since INTEGER,acknowledged_at INTEGER NOT NULL DEFAULT 0,close_reason TEXT)`,
   `INSERT OR IGNORE INTO mg_room_availability(code,host_seen,pending_since) SELECT r.code,?,CASE WHEN (SELECT COUNT(*) FROM mg_room_memberships m WHERE m.code=r.code)>1 THEN ? ELSE NULL END FROM mg_rooms r WHERE r.status='lobby'`,
   `CREATE TRIGGER IF NOT EXISTS mg_room_presence_create AFTER INSERT ON mg_rooms BEGIN INSERT OR IGNORE INTO mg_room_availability(code,host_seen) VALUES(NEW.code,NEW.created_at); END`,
   `CREATE TRIGGER IF NOT EXISTS mg_room_arrival AFTER INSERT ON mg_room_memberships WHEN NEW.token!=(SELECT host_token FROM mg_rooms WHERE code=NEW.code) BEGIN UPDATE mg_room_availability SET pending_since=COALESCE(pending_since,CAST((julianday('now')-2440587.5)*86400000 AS INTEGER)) WHERE code=NEW.code; END`,
   `CREATE TRIGGER IF NOT EXISTS mg_room_arrival_leave AFTER DELETE ON mg_room_memberships WHEN (SELECT COUNT(*) FROM mg_room_memberships WHERE code=OLD.code)<2 BEGIN UPDATE mg_room_availability SET pending_since=NULL WHERE code=OLD.code; END`,
   `CREATE TRIGGER IF NOT EXISTS mg_room_available_join BEFORE INSERT ON mg_room_memberships WHEN NEW.token!=(SELECT host_token FROM mg_rooms WHERE code=NEW.code) AND EXISTS(SELECT 1 FROM mg_room_availability WHERE code=NEW.code AND (host_seen<CAST((julianday('now')-2440587.5)*86400000 AS INTEGER)-45000 OR pending_since<=CAST((julianday('now')-2440587.5)*86400000 AS INTEGER)-120000)) BEGIN SELECT RAISE(ABORT,'HOST_UNAVAILABLE'); END`
  ];
  const task=db.batch(statements.map((s,i)=>db.prepare(s).bind(...(i===1?[now,now]:[])))).catch(e=>{pending.delete(db);throw e});pending.set(db,task);
 }
 await pending.get(db);
}
export async function expireWaitingRooms(db,now){
 // Guard both writes against launch/acknowledgement races. Existing close triggers release memberships.
 const expired=`SELECT r.code FROM mg_rooms r JOIN mg_room_availability a ON a.code=r.code WHERE r.status='lobby' AND (a.host_seen<=? OR a.pending_since<=?)`;
 await db.batch([
  db.prepare(`UPDATE mg_room_availability SET close_reason='host_unavailable' WHERE code IN (${expired})`).bind(now-120000,now-120000),
  db.prepare(`UPDATE mg_room_sessions SET ended_at=?,end_reason='cancelled' WHERE ended_at IS NULL AND code IN (${expired})`).bind(now,now-120000,now-120000),
  db.prepare(`UPDATE mg_rooms SET status='closed',closed_at=? WHERE status='lobby' AND code IN (${expired})`).bind(now,now-120000,now-120000)
 ]);
}
export function availability(row,now){return {hostAvailable:!!row&&row.host_seen>now-45000,pendingSince:row?.pending_since||null,acknowledgedAt:row?.acknowledged_at||null,expiresAt:row?Math.min(row.host_seen+120000,row.pending_since===null?Infinity:row.pending_since+120000):null};}
