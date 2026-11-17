# v5.0.21 approved group-flow implementation

Implemented the approved walkthrough: a single host-named group directory; 13 searchable/categorised game types with 17 supported variants; visible names/readiness; named arrival notices; guest Ready and host Start game with a shared server start timestamp; Choose game/Replay/Finish results; Keep hosting preserves the current screen. Continuing keeps players and saved scores. No unsupported solo difficulty levels are advertised. Legacy rooms retain Begin until closed.

The additive group-flow tables and triggers are created idempotently by the API, like the existing membership/presence schema. No existing records are deleted. Creation and shared launch writes are transactional; launch guards readiness and setup revision. Old-session tests remain applicable.

Also includes the previously requested completion-copy removal, responsive result spacing, Number Patterns question placement/larger hint text and automatic scrolling of expanded mobile menu groups. Shared group utilities use the existing Language/Background sound/Game sound icon row. About, welcome help and quick guide are updated in English and Chinese.

Validation: all 17 supported variants start with eight ready players; Bingo rejects calls during countdown. Syntax/build; new API tests for readiness/revisions, permission checks, late joins, shared start time, early submission rejection, round continuation, preserved players/scores and Finish; new DOM integration tests against individual source and complete release bundle for catalogue/search, named arrivals, visible readiness, Keep hosting and shared quiz start. Existing room8, room availability and multiplayer session tests passed. Pattern explanations, result dialog, menu navigation and About tests passed.

Known pre-existing test failure: bingo-room.test.mjs fails when it reapplies migrate-v3.8.5.sql to an active room after a departure (ROOM_STARTED). Reproduced with the unmodified deployed v5.0.20 API. This release neither reruns nor changes that historical migration.

Limits: no new physical-device or rendered browser layout verification in this turn. Phone/tablet visual spacing, touch and audible chime should be checked on devices. DOM tests verify behavior and controls, not rendered fit. Earlier v5.0.20 viewport audit is not a certification of this new layout. Background tabs resume from server time; a late/reconnecting client does not receive a restarted preview or extra study time.
