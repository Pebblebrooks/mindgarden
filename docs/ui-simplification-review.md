# v4.0.30 UI simplification

Release v4.0.30, based on v4.0.29.

- Menu starts with Today’s Games, My Games, All Games, Play Together, My Progress and Leaderboard. Garden view & pets is the second, collapsed group. Brand button retains Home navigation.
- Incorrect review answers use bold red text; the comparison panel retains a neutral background.
- Pet visibility is page-session state, initially hidden even if old local storage says visible. Existing sleep/play and progress animation assets are preserved.
- Compact picture/numeric grids, sequences, bingo, scene comparison and board dimensions. Matching board size uses measured toolbar position. Interactive targets retain a minimum 44 pixels in the changed matching/grid rules; static counting pictures may be 40 pixels.

## Verification

Release suite, syntax checks and pet-heart feedback tests pass. Bilingual personal-game tests report 118 setup/gameplay assertions passed, then the existing jsdom window-close error prevents the combined personal test command completing.

Browser audit: 50 games, two selected levels, at 390×844, 768×1024 and 1366×768 (300 opening-board cases). Final audit had two desktop overflows. Both were subsequently fixed and measured individually: matching bottom 752px; counting answer controls bottom 749.9px within 768px height.

Limits: the audit exercises opening boards at default text size and default challenge range, not every randomly generated round, delayed reveal, review state, multiplayer board or movement iframe. Short landscape screens and enlarged text may still need scrolling; do not hide overflow or shrink essential text to claim universal no-scroll support. Further testing is needed before calling the entire app scroll-free.

## Applied follow-up simplifications

- Hide game cards now lives exclusively in Garden view & pets; the duplicate toolbar icon is removed.
- Family View and Switch Player share a Player section.
- Optional melody, fictional-map and team-score explanations use information buttons. Essential play instructions and live feedback remain visible. Tooltip cleanup now also follows game content changes.
