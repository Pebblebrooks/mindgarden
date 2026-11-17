// Additive, idempotent schema. Legacy rooms retain their original Begin flow.
const installed=new WeakMap();
export async function ensureGroupFlow(db){
 if(!installed.has(db))installed.set(db,db.batch([
  `CREATE TABLE IF NOT EXISTS mg_group_flow(code TEXT PRIMARY KEY,revision INTEGER NOT NULL DEFAULT 1,start_at INTEGER)`,
  `CREATE TABLE IF NOT EXISTS mg_group_ready(code TEXT NOT NULL,token TEXT NOT NULL,revision INTEGER NOT NULL,PRIMARY KEY(code,token))`,
  `CREATE TRIGGER IF NOT EXISTS mg_group_setup AFTER UPDATE OF mode,status ON mg_rooms WHEN EXISTS(SELECT 1 FROM mg_group_flow WHERE code=NEW.code) AND NEW.status='lobby' AND (NEW.mode!=OLD.mode OR NEW.status!=OLD.status) BEGIN UPDATE mg_group_flow SET revision=revision+1,start_at=NULL WHERE code=NEW.code; END`,
  `CREATE TRIGGER IF NOT EXISTS mg_group_ready_leave AFTER DELETE ON mg_room_memberships BEGIN DELETE FROM mg_group_ready WHERE code=OLD.code AND token=OLD.token; END`,
  // v6.1: the host can remove a guest from the waiting group; the guest is told why.
  `CREATE TABLE IF NOT EXISTS mg_group_removals(code TEXT NOT NULL,token TEXT NOT NULL,removed_at INTEGER NOT NULL,PRIMARY KEY(code,token))`
 ].map(sql=>db.prepare(sql).bind())).catch(e=>{installed.delete(db);throw e}));
 await installed.get(db);
}
