# Approval record

17 November 2026, Singapore: user approved the PRD as the baseline and authorized next steps, subject to correcting the supplied Connect the Dots and Play Together mockups.

Revision 1.1 adds PRD-04 (future-request conflict discussion and exception/global scope) and LAY-06/07 (content-driven wrapping, measured clear gaps, corrected references). These are direct user instructions, not additional approval questions.

The design book is updated in place. Implementation may proceed against revision 1.1. Production deployment still requires review of the actual rendered implementation; mockups are not runtime evidence.

Exception register: none (D-01 and D-02 below are global changes, not isolated exceptions). Future entries must include requirement IDs, exact scope, approved decision, visual reference and tests.

## Decision records (PRD-04)

D-01, 18 November 2026, Singapore. Request: make Play Together groups private after review finding 4 (every group and online name was visible to everyone). Conflicts with: GROUP-01 (one directory visible to all). Scope: global change to all Play Together screens and the room API. Agreed behaviour: invite-only; the directory lists only the player's own groups; join by code or invite link; no broadcast invitations; the server no longer returns other players' groups, names, online count or invitation recipients. Approval: product owner chose "Invite-only" when asked. Previews: none needed for the data change; directory copy changes are included in the pending redesign preview. Tests: room8, group-presence, group-presence-ui, multiplayer-lifecycle.

D-02, 18 November 2026, Singapore. Request: fix review findings 1-3 (group closes 2 minutes after an arrival unless the host taps; one quiet guest blocks Start; guests wait indefinitely for a lost host). Conflicts with: GROUP-04 "preserve shipped timeout/alert behaviour until explicitly changed" and GROUP-03 "everyone required is ready". Scope: global group-play behaviour. Agreed behaviour: as recorded in GROUP-03/04 revision 1.2; the 'Boris joined' notice and chime are kept. Approval: product owner asked to "fix 1 to 3". Tests: group-presence, group-presence-ui, group-flow, group-flow-ui.

D-03, 18 November 2026, Singapore. Request: improve the Play Together UI for first-time players and seamless play. PRD-03 requires a proposed preview. Product owner chose "preview first". Status: preview pending approval; no redesign implemented. Fix-level UI additions required by D-02 (Remove, Leave group, host-away note, status wording) use the existing visual system.

Release authorization: user requested audit/correction followed by committing all fixes and deploying as v6.0.0. This supersedes the prior deployment pause once required checks are complete; it does not waive visual or functional quality requirements. No design exception requested.
