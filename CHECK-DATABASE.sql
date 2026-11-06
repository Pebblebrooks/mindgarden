-- Read-only: paste this complete statement into the app's D1 Console.
-- Expected after all required migrations: 19 rows, each marked PRESENT.
-- Presence is a check, not proof that every object has the intended definition.
WITH required(release,kind,name) AS (VALUES
 ('V3','table','mg_sessions'),
 ('V3','table','mg_rooms'),
 ('V3','table','mg_members'),
 ('V3','table','mg_results'),
 ('V3','table','mg_invites'),
 ('V3','index','mg_rooms_created'),
 ('V3','index','mg_sessions_seen'),
 ('V3','index','mg_one_open_room_per_host'),
 ('v3.8.5','table','mg_departures'),
 ('v3.8.5','table','mg_active_rooms'),
 ('v3.8.5','table','mg_bingo_rounds'),
 ('v3.8.5','table','mg_bingo_marks'),
 ('v3.8.5','trigger','mg_capacity'),
 ('v3.8.5','trigger','mg_launch'),
 ('v3.8.5','trigger','mg_release_room'),
 ('v3.8.5','trigger','mg_active_capacity'),
 ('v3.8.6','table','mg_rounds'),
 ('v3.8.6','trigger','mg_round_metadata'),
 ('v3.8.6','index','mg_results_player_history')
)
SELECT r.release,r.kind,r.name,
 CASE WHEN s.name IS NULL THEN 'MISSING' ELSE 'PRESENT' END AS status
FROM required r LEFT JOIN sqlite_master s ON s.type=r.kind AND s.name=r.name
ORDER BY r.release,r.kind,r.name;
