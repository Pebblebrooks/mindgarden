# Mind Garden v6.3.0

Release date: 18 November 2026. Implements the approved proposals from "Mind Garden — UI consistency review and proposals (v6.3)". Decisions D-04 and D-07 to D-10 (APPROVAL-RECORD.md); PRD revision 1.4 addendum.

## What changed

- **Public groups (D-04).** After choosing a game, the host picks who can join: *Only people I invite* (default) or *Anyone using Mind Garden*. Public groups are listed under **Open groups** in Play Together with only the host name, game and player count. They drop off the list when the game starts, the group is full, the host has been away for 45 seconds, or after 24 hours. The host can switch privacy in Invite while waiting. Joining asks for confirmation first.
  - Server: new table `mg_group_visibility` (additive, created at runtime); new host-only action `visibility`; `lounge` returns `openGroups`; `status` returns `visibility`.
- **Picture game tiles (D-08).** Choose game shows all 13 group games as picture tiles that reuse the solo game pictures. The screen has search, a category filter, an info button per tile, and an empty state with Clear search.
- **Stable panels (D-06).** All Play Together panels use the device-class sizes from LAY-05.
- **Shells (D-07).** The Home top bar stays at the top while scrolling, and it is sticky on the library page.
- **Round control (D-09).**
  - Before starting, the host is told who is away and asked to confirm.
  - At each round start there is a chime (if sounds are on) and "Round N is starting".
  - Players see "X is back." when someone returns.
  - Anyone who missed the start is told when it started.
  - Host-set number of rounds is not included.
- **One word list (D-10).** The text says "group" everywhere, never room or lobby, in English and Chinese, including server error messages.
- **About and guide.** The Version 6.3 entry and the Play Together guide are updated in English and Chinese.

## Render review fixes

- The group code fits on one line at 320 px; it used to wrap.
- The landscape countdown starts at the top and scrolls; its title used to be cut off.
- Desktop "How it works" steps are left-aligned.
- The countdown footnote stays centred when it wraps.

## Checks

- Passing: room8, group-public (new), group-public-ui (new), group-flow, group-flow-ui, group-presence, group-presence-ui, multiplayer-lifecycle and grammar.
- Rendered at 390×664 EN dark, 320×568 EN light, 844×390 ZH dark and 1366×768 ZH light, with no page errors.
- The live database is not changed by this release until deploy; the new table is created on first use.

## Evidence

| File | Screen |
|---|---|
| phone-390-en-dark-choose-game.jpg | Picture tiles |
| phone-390-en-dark-who-can-join.jpg | Who can join |
| phone-390-en-dark-open-groups.jpg | Open groups list |
| phone-390-en-dark-away.jpg | Host told a player is away |
| phone-320-en-light-invite.jpg | Invite, code on one line |
| phone-320-en-light-countdown.jpg | Round starting |
| landscape-844-zh-dark-countdown.jpg | Countdown, landscape |
| desktop-1366-zh-light-choose-game.jpg | Picture tiles, desktop |
| desktop-1366-zh-light-play-together.jpg | Play Together, desktop |
| phone-390-dark-home-top-bar.jpg | Home top bar while scrolled |
