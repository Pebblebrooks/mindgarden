// Additive room-specific host presence. v6.1: an arrival no longer closes the group.
// Guests may join while the host is briefly away; a group closes only after its host
// has been absent for HOST_GONE_MS, in any state, so nobody waits indefinitely.
export const HOST_AWAY_MS=45000;
export const HOST_GONE_MS=600000;
const now_ms="CAST((julianday('now')-2440587.5)*86400000 AS INTEGER)";
const pending=new WeakMap();
export async function ensureRoomAvailability(db,now){
 if(!pending.has(db)){
  const statements=[
   `CREATE TABLE IF NOT EXISTS mg_room_availability(code TEXT PRIMARY KEY,host_seen INTEGER NOT NULL,pending_since INTEGER,acknowledged_at INTEGER NOT NULL DEFAULT 0,close_reason TEXT)`,
   // Every open group needs a presence row, including groups that launched before v6.1.
   `INSERT OR IGNORE INTO mg_room_availability(code,host_seen,pending_since) SELECT r.code,?,CASE WHEN r.status='lobby' AND (SELECT COUNT(*) FROM mg_room_memberships m WHERE m.code=r.code)>1 THEN ? ELSE NULL END FROM mg_rooms r WHERE r.status!='closed'`,
   `CREATE TRIGGER IF NOT EXISTS mg_room_presence_create AFTER INSERT ON mg_rooms BEGIN INSERT OR IGNORE INTO mg_room_availability(code,host_seen) VALUES(NEW.code,NEW.created_at); END`,
   `CREATE TRIGGER IF NOT EXISTS mg_room_arrival AFTER INSERT ON mg_room_memberships WHEN NEW.token!=(SELECT host_token FROM mg_rooms WHERE code=NEW.code) BEGIN UPDATE mg_room_availability SET pending_since=COALESCE(pending_since,${now_ms}) WHERE code=NEW.code; END`,
   `CREATE TRIGGER IF NOT EXISTS mg_room_arrival_leave AFTER DELETE ON mg_room_memberships WHEN (SELECT COUNT(*) FROM mg_room_memberships WHERE code=OLD.code)<2 BEGIN UPDATE mg_room_availability SET pending_since=NULL WHERE code=OLD.code; END`,
   // v6.0 refused joins while the host was briefly away (for example while sending the
   // WhatsApp invitation). Joins are now allowed until the group itself closes.
   `DROP TRIGGER IF EXISTS mg_room_available_join`
  ];
  const task=db.batch(statements.map((s,i)=>db.prepare(s).bind(...(i===1?[now,now]:[])))).catch(e=>{pending.delete(db);throw e});pending.set(db,task);
 }
 await pending.get(db);
}
// Kept under its original name for callers; now covers lobby and launched groups.
export async function expireWaitingRooms(db,now){
 const expired=`SELECT r.code FROM mg_rooms r JOIN mg_room_availability a ON a.code=r.code WHERE r.status!='closed' AND a.host_seen<=?`,cutoff=now-HOST_GONE_MS;
 await db.batch([
  db.prepare(`UPDATE mg_room_availability SET close_reason='host_unavailable' WHERE code IN (${expired})`).bind(cutoff),
  db.prepare(`UPDATE mg_room_sessions SET ended_at=?,end_reason='cancelled' WHERE ended_at IS NULL AND code IN (${expired})`).bind(now,cutoff),
  db.prepare(`UPDATE mg_rooms SET status='closed',closed_at=? WHERE status!='closed' AND code IN (${expired})`).bind(now,cutoff)
 ]);
}
export function availability(row,now){
 const seen=row?.host_seen??null;
 return {hostAvailable:!!row&&seen>now-HOST_AWAY_MS,hostAwayFor:row?Math.max(0,now-seen):null,pendingSince:row?.pending_since||null,acknowledgedAt:row?.acknowledged_at||null,expiresAt:row?seen+HOST_GONE_MS:null};
}
