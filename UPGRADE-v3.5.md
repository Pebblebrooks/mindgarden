# V3.5 — personal garden and expanded sounds

Deploy the complete public/ and functions/ directories using the existing Cloudflare setup. Keep the D1 binding. No new SQL migration is required for an existing V3 database.

- Desktop Settings exposes Rename me, Choose/add player, Family view and Music & nature. More is available at every screen size.
- Accessible home icon replaces navbar Home text.
- Welcome name opens the rename editor. Names are stored with the active device profile and retained when going offline. The room has its own inline name editor; rename preserves session and membership. Generic Player 1 defaults become stable per-device Guest identifiers. Shared display names have short identifying suffixes and You labels in room rosters.
- Four original arrangements: Chamber garden (piano, violin, cello, clarinet), Harp & woodwinds, Piano & cello, Twilight ensemble (violin, cello, flute, clarinet).
- Six procedural nature choices: ocean/gulls, garden/birds, wind, rain/leaves, stream, evening crickets. Personal audio and 60-second mix downloads remain available.
- Added CC0 skeletal corgi with idle/walk cycles, a second dragonfly in Standard mode, and subtle CSS cloud/leaf motion. Gentle includes one dragonfly. Motion respects Off, reduced-motion, overlays, visibility and background tabs. Full 3D animals require WebGL; existing cat/fox/owl GIF fallback remains available without it.

Validation: syntax checks; real SQLite API tests; eight independent DOM clients; in-room rename and token preservation; logout name retention; browser desktop controls, welcome persistence; offline rendering of all four music and six nature choices. The standalone/hosted preview has no multiplayer backend; test online rooms in Cloudflare deployment.
