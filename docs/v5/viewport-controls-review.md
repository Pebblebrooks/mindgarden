# Gameplay viewport review — 16 November 2026

Local preview only. No deployment or version bump.

Shared solo game shells now reserve a separate control footer within the visual viewport. Long task content scrolls separately. Matching Pairs omits a duplicate level heading and the redundant untimed label; live timers remain visible. Small-height screens use a horizontal progress/control footer. Where does it belong uses side-by-side imagery and answers in landscape.

Common popup action rows, results actions and multiplayer room actions use sticky bottom positioning. Common popup Back/Close remains in the sticky header. Room invitations are hidden during active gameplay to avoid covering controls, and remain available outside gameplay. English/Chinese About guidance and the standing AGENTS.md viewport contract were updated.

## Verified
- Browser, 390×844: Where does it belong, board and footer visible.
- Browser, 844×390: Where does it belong, all three answers and Home/Pause/Hint/Options within viewport; task content does not overflow.
- Browser, 320×568, 200% text: Matching Pairs, all six cards and footer fit; board clientHeight and scrollHeight both 231; footer bottom 558 in a 566px iframe viewport.
- Browser, tablet 768×844 and desktop 1200×844: Matching Pairs footer bottom 834 within 842px iframe viewport.
- Setup Begin visibility checked in landscape and at 200% text on a small phone.
- Native game settings Close/Resume and unsaved-play exit confirmation exercised on small phone.
- Automated bilingual approved game UI, popup shell, About, menu stay-open, info hover and multiplayer lifecycle checks passed.

## Limits
This validates shared layout infrastructure and representative game flows, not every level of all 56 games. Dense puzzles/long text can still need content scrolling; essential shared controls stay separate. Physical mobile browser chrome, keyboard transitions and all game-specific inline actions need further device/game coverage before claiming exhaustive no-scroll access.
