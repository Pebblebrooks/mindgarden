# Mind Garden v6.3.1

Release date: 18 November 2026. Decision D-11 (APPROVAL-RECORD.md): the host decides the number of rounds.

## What changed

- **Choose how many rounds.** *Start a group* now asks "How many rounds?": 1, 3, 5, or *Keep playing*. Keep playing is the default and works as before: the host decides when to stop.
- **Change it in the group.** The host's waiting room has a Rounds card. The number can't be set below the rounds already played. Guests see the plan under the game name.
- **Clear progress.** Labels read "Round 2 of 5", in the countdown and during play.
- **Final results.** After the last planned round, results are titled *Final results*, with the overall winner by total points. The host can:
  - play the same number of rounds again (up to 20 in all);
  - choose another game;
  - end the group.
  
  Guests see "That was the last round" while the host decides.
- **Server.**
  - New additive table `mg_group_rounds`, created on first use.
  - Optional `plannedRounds` on `create`.
  - New host-only `rounds` action.
  - `status` returns `plannedRounds`.
  - Starting a round beyond the plan is refused with "All N rounds are played. Add more rounds or end the group." (Chinese included).
- **About and guide** updated in English and Chinese.

## Checks

- Passing:
  - room8;
  - group-rounds (new);
  - group-public, group-public-ui (extended for rounds);
  - group-flow, group-flow-ui;
  - group-presence, group-presence-ui;
  - multiplayer-lifecycle;
  - grammar.
- Rendered at 390×664 EN (dark and light) and 1366×768 ZH light, with no page errors.

## Evidence

| File | Screen |
|---|---|
| phone-390-en-light-start-rounds.jpg | How many rounds? |
| phone-390-en-dark-lobby-rounds.jpg | Rounds card in the waiting room |
| phone-390-en-dark-final-host.jpg | Final results, host choices |
| phone-390-en-dark-final-guest.jpg | Final results, guest |
| desktop-1366-zh-light-lobby-rounds.jpg | Rounds card, Chinese |
| desktop-1366-zh-light-countdown.jpg | "Round 1 of 1" countdown, Chinese |
