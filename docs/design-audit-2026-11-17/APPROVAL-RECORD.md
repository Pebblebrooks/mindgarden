# Approval record

17 November 2026, Singapore: user approved the PRD as the baseline and authorized next steps, subject to correcting the supplied Connect the Dots and Play Together mockups.

Revision 1.1 adds PRD-04 (future-request conflict discussion and exception/global scope) and LAY-06/07 (content-driven wrapping, measured clear gaps, corrected references). These are direct user instructions, not additional approval questions.

The design book is updated in place. Implementation may proceed against revision 1.1. Production deployment still requires review of the actual rendered implementation; mockups are not runtime evidence.

Exception register: none (D-01 and D-02 below are global changes, not isolated exceptions). Future entries must include requirement IDs, exact scope, approved decision, visual reference and tests.

## Decision records (PRD-04)

D-01, 18 November 2026, Singapore. Request: make Play Together groups private after review finding 4 (every group and online name was visible to everyone). Conflicts with: GROUP-01 (one directory visible to all). Scope: global change to all Play Together screens and the room API. Agreed behaviour: invite-only; the directory lists only the player's own groups; join by code or invite link; no broadcast invitations; the server no longer returns other players' groups, names, online count or invitation recipients. Approval: product owner chose "Invite-only" when asked. Previews: none needed for the data change; directory copy changes are included in the pending redesign preview. Tests: room8, group-presence, group-presence-ui, multiplayer-lifecycle.

D-02, 18 November 2026, Singapore. Request: fix review findings 1-3 (group closes 2 minutes after an arrival unless the host taps; one quiet guest blocks Start; guests wait indefinitely for a lost host). Conflicts with: GROUP-04 "preserve shipped timeout/alert behaviour until explicitly changed" and GROUP-03 "everyone required is ready". Scope: global group-play behaviour. Agreed behaviour: as recorded in GROUP-03/04 revision 1.2; the 'Boris joined' notice and chime are kept. Approval: product owner asked to "fix 1 to 3". Tests: group-presence, group-presence-ui, group-flow, group-flow-ui.

D-03, 18 November 2026, Singapore. Request: improve the Play Together UI for first-time players and seamless play. Conflicts with: none beyond PRD-03 (a redesign needs an approved preview). Scope: global to Play Together (home, join, waiting rooms, countdown, results); game screens unchanged. Preview: Design canvas "Play Together redesign — preview for approval" (eight phone screens, claude.ai artifact TZHK3YDS7VgSeR4TwBVM4Y). Approval: product owner replied "Proceed with redesign as proposed" at 08:29 SGT. Implemented in v6.2.0. Deviations from the preview: a small More options button (saved rankings, go offline) sits beside Change name; the invitation link is behind "Show the link"; results keep a visible Rank header. PRD revision 1.3 records the behaviour in GROUP-01 and GROUP-05. Tests: group-presence-ui (screens 1, 4-8), group-flow-ui, multiplayer-lifecycle; rendered review in docs/release-v6.2.0.

Release authorization: user requested audit/correction followed by committing all fixes and deploying as v6.0.0. This supersedes the prior deployment pause once required checks are complete; it does not waive visual or functional quality requirements. No design exception requested.


D-05, 18 November 2026, Singapore. Request: consistent text alignment and line breaks (review question 1; proposal doc "Mind Garden — UI consistency review and proposals (v6.3)", section 1; canvas screen 9). Conflicts with: none; clarifies VIS-02. Scope: global, every screen and device. Agreed behaviour: recorded in VIS-02. Approval: product owner replied "proceed with recommendations" at 10:54 SGT. Implemented in v6.2.1 (`feedback-layout.js` measures each paragraph; the sentence splitter is limited to `#mmsg` and `[data-feedback]`). Tests: ui-followup, group UI suites; rendered review in docs/release-v6.2.1.

D-06, 18 November 2026, Singapore. Request: stable panel sizes (review question 2, section 2; canvas screens 10-12). Conflicts with: none; clarifies LAY-05. Scope: v6.2.1 fixes the Choose game height; v6.3 applies the device-class sizes to all Play Together panels. Other panels (Settings, Account, Rankings, About) need the side-by-side audit first and are not changed yet. Approval: as D-05.
