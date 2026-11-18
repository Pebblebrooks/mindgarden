# Mind Garden v6.2.0 — Play Together redesign

Date: 18 November 2026 (Singapore). Parent: v6.1.0 (d9f0e01, not yet pushed). PRD baseline: revision 1.3 (decision D-03 in `../design-audit-2026-11-17/APPROVAL-RECORD.md`). Approved preview: Design canvas "Play Together redesign — preview for approval" (claude.ai artifact TZHK3YDS7VgSeR4TwBVM4Y), approved by the product owner at 08:29 SGT. Not deployed by this change.

## What changed (PRD IDs)

- GROUP-01 / D-03 screen 1 — first visit: one-line explanation, Start a group and Join a group cards, three-step How it works, "Playing as <name> · Change name". The separate "Enter lobby" name form is gone; the online identity is created when the player first starts or joins a group.
- Screen 2 — returning players see Your groups first. Each card names the host, player count, game and state, shows "You are the host" or "You are in this group", and has Open group on its own row (LAY-07). Start a group / Join with a code and the privacy line follow.
- Screen 3 — Join a group: one large 6-character code field (letters and numbers only, Join group enabled at 6), where the code comes from, and the name others will see.
- Screens 4-5 — host: game card with Change; while alone, the invite is open with a large code, Send on WhatsApp (primary), Copy link, Share, the link behind "Show the link", and the join-sound switch. Once someone joins it folds into "Invite more" and the code shows on the game card. Players show Ready / Not ready yet / Away chips with Remove; arrivals appear as a green "Boris and Terri joined your group." banner.
- Screen 6 — guest: "You are in <host>'s group", the game, How to play (rules taken from the real scoring: 3000 − 40 per turn − 3 per second), I’m ready (then "You’re ready"), Leave group.
- Screen 7 — shared countdown: large ring, first step for the game, player count and round, and "Everyone gets the same cards/questions and the same start time."
- Screen 8 / GROUP-05 — results: "Round N complete", the round winner ("Boris wins this round!", "You win this round!", ties "share first place"), a table of rank (medals for 1-3), player, round score (or Sat out / Not finished) and total. Host actions renamed Choose another game, Play again, End group (End group now asks for confirmation). Short portrait screens scroll the results as one unit; short landscape shows table and actions side by side.
- APP-04 — About "Latest improvements" and the Play Together guide line updated in English and Chinese.
- Removed dead pre-v5 code: Rooms/Lobby/My rooms tabs, round-count create form, player dropdown, unused mode list.

## Build fix found during review

`scripts/compact-release.mjs` concatenated raw stdin Buffers, splitting multi-byte characters at chunk boundaries. Shipped bundles contained U+FFFD replacement characters (v6.0.0 `garden-ui-600.js`: 5; v6.1.0: 7), visible as garbled Chinese text (e.g. "加��"). Input is now decoded as UTF-8, and the build fails if the source or output contains U+FFFD. `garden-ui-620.js` and `.css`: 0.

## Verification

Automated (Node 22, in-memory D1, jsdom; full v6.2.0 bundle where marked):

| Suite | Result |
| --- | --- |
| group-presence-ui (full bundle; extended with D-03 screens 1, 4–8) | pass |
| group-flow-ui (full bundle), group-flow (17 variants × 8 players), group-presence, room8 | pass |
| multiplayer-lifecycle (updated: no separate lobby entry; join fires input) | pass |
| storage-failure (updated: Play Together home replaces the lobby entry check) | pass |
| about-documentation, release-cache, release-cleanup | pass |

Regression comparison: the 35 test files that touch Play Together, menus, results labels or About were run on v6.1.0 and on v6.2.0 (2-minute cap each). 19 pass on both, 15 fail on both (already failing on v6.1.0, e.g. bingo-room, multiplayer-ui, shared-menus, older tests that still type into the pre-v5 lobby form), and storage-failure was the only change (fixed above). The full 132-file suite was not completed: on this 2-CPU machine several legacy tests run until their timeout.

Rendered (Chrome via Playwright, local room API, text 100%): all nine states — first visit, returning, join, host invite, host waiting, guest waiting with host away, countdown, host results, guest results — at 390×664 EN dark, 320×568 EN dark, 844×390 EN dark, 390×664 ZH light and 1366×768 ZH dark. Each state was measured for elements outside a non-scrolling container, horizontal text overflow and touch targets under 44 px: 0 findings after fixes. Found and fixed during review: stretched footer buttons (legacy flex:1), results labels reset by game-ui.js, cards overlapping on 320 px (flex shrink), results actions clipped on 320×568, names centred by a legacy v4 margin rule, garbled Chinese from the compactor. Evidence: `phone-390-en-dark.jpg`, `phone-320-en-dark.jpg`, `phone-390-zh-light.jpg`, `landscape-844-en-dark.jpg`, `desktop-1366-zh-dark.jpg`.

## Known limitations

- Not checked: 140%/200% text, 430×800, 768×1024, 1024×600, 1920×1080, physical iOS/Android, real multi-device network play, Bingo and quiz countdown wording on screen.
- On phone landscape (844×390) the waiting room's scrolling area is short because the two guest actions and status line stay pinned; content scrolls.
