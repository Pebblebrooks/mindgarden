# Mind Garden v6.1.0 — Play Together fixes and invite-only groups

Date: 18 November 2026 (Singapore). Parent: v6.0.0 (b416711) on v5-development. PRD baseline: revision 1.2 (1.1 plus decisions D-01 and D-02 in `../design-audit-2026-11-17/APPROVAL-RECORD.md`). Not deployed by this change.

## What changed (PRD IDs)

- D-01 / GROUP-01 — invite-only groups. Play Together lists only the player's own groups ("Your groups"), each naming its host, player count, game and whether it is waiting or in progress. New groups are not announced to other online players. The room API no longer returns other players' groups, names, online count or invitation recipients. Joining is by group code or invite link.
- D-02 / GROUP-04 — review finding 1. An unacknowledged arrival no longer closes the group. The "Boris joined" notice and chime remain. Guests can join while the host is briefly away (for example while sending the WhatsApp invitation).
- D-02 / GROUP-03 — review finding 2. Start needs every present guest to be Ready and at least one present guest. A guest away for 45 seconds no longer blocks Start and sits out that round, with an explanation. The host can remove a guest before the game starts; the guest is told and can rejoin with the code.
- D-02 / GROUP-04, GROUP-05 — review finding 3. Any open group (waiting, playing or at results) closes after its host has been away for 10 minutes, keeping saved scores. Guests see a host-away note with the time left, and a Leave group button in the waiting room, the waiting screen and results. Closing messages say why the group closed.
- LAY-05 / GROUP-05 — the lobby's next-step line and host-away note are pinned above the actions. On short screens the results score list scrolls so Choose game / Replay / Finish (host) and Leave (guest) remain visible; short landscape places scores and actions side by side.
- APP-04 — About "Latest improvements" and the Play Together guide entries updated in English and Chinese; outdated statements (two-minute expiry, invitations hidden during games) removed.
- Directory grammar: "1 player". Statuses: Away, Not ready yet, Sitting out.

Database: additive runtime changes only, applied automatically by the Functions code. New table `mg_group_removals`; trigger `mg_room_available_join` is dropped; presence rows are added for open groups that launched before v6.1. No manual D1 migration.

Production data action (separate from the code, at the product owner's request): groups 664A9E and DJF5JV were closed in the live database at about 02:05 SGT on 18 November using the same writes as Close group. Saved scores were kept.

## Verification

Automated (Node 22, in-memory D1 harness; jsdom for client suites; full v6.1.0 bundle where noted):

| Suite | Result |
| --- | --- |
| tests/room8.test.mjs (updated for invite-only) | pass |
| tests/group-flow.test.mjs (17 variants × 8 players) | pass |
| tests/group-presence.test.mjs (new: findings 1–3, Remove, privacy) | pass |
| tests/group-flow-ui.test.mjs, full bundle | pass |
| tests/group-presence-ui.test.mjs (new), full bundle | pass |
| tests/multiplayer-lifecycle.test.mjs (updated for invite-only) | pass |
| about-documentation, release-cache, release-cleanup, menu-navigation, popup-shell, personal-garden, player-preferences | pass |
| tests/multiplayer-ui.test.mjs, tests/shared-menus.test.mjs | fail — also fail on v6.0.0; they drive the pre-v5.0.21 Create room form |
| tests/bingo-room.test.mjs | fail — also fails on v6.0.0 (legacy flow, not in any npm script) |

Rendered (Chrome via Playwright against the local room API; text 100%): states — empty directory, host waiting room with Remove and Away, guest directory card, guest waiting room with host-away note, sitting-out screen, guest results with host away, automatic-close message, host results. Viewports/language/theme — 390×664 EN dark, 390×664 EN light, 390×664 ZH dark, 320×568 EN dark, 844×390 EN dark, 1366×768 ZH light. Each state was measured for elements outside a non-scrolling container: 0 after fixes (results clipping at 320×568 and 844×390 was found and fixed). Evidence: `phone-390-en-states.jpg`, `small-landscape-zh-states.jpg`, `host-results-sizes.jpg`.

Known limitations: on 320×568 and 844×390 the waiting-room player list is a small scrolling area under the game/Invite controls, and at 320×568 the results list shows one row before scrolling (actions stay visible). This is the existing layout; it is addressed in the pending redesign preview (D-03). Not checked: 140%/200% text, 430×800, 768×1024, 1024×600, 1920×1080, physical iOS/Android devices, real multi-device network play, Bingo and quiz screens after these changes.
