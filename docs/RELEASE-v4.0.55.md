# Mind Garden v4.0.55

User-approved release for Cloudflare Pages. No database migration. No Workers deployment.

## Player changes
- Four solo games: Sudoku, Stroop Colour Match (including arrow mode), Flag Match and Scene Recall.
- Unique-solution Sudoku generation, notes, erase, undo and placement hints; 4×4 / 6×6 plus optional 9×9.
- Forty locally bundled MIT-licensed flags; regional learning, similar flag choices, reverse recognition and typed recall.
- User-controlled scene viewing with object, location and count questions. Hinted rounds remain distinct from unaided accuracy.
- Shared level settings, practice, results and per-game saved options in English and Chinese.
- Approved plain game background, corner Home/Pause, footer progress/Settings, yellow hints and labelled icon controls.
- Centred result dialogs; Replay then Next level; Games in footer; contextual options; exit confirmation.
- Automatic paused-aware domino opponent and varied solvable numbered grid routes.
- Updated bilingual About/user guide and asset credits; regenerated versioned bundles and offline cache.

## Validation
- 135 generated Sudoku boards across three sizes, three ranges and all fifteen ranks: valid answers and exactly one solution.
- 108 bilingual new-game rounds, typed/reverse flags, colour/arrow modes, assisted scoring, pause/resume and level results.
- 180 numbered-route solutions plus approved gameplay integration checks.
- Release suite: menu/layout DOM contracts, 36 navbar size budgets, cache safety, About, popup navigation, asset cleanup and scenery.
- Result/personal progression and movement regression suites.

Local Chromium is blocked by the environment's Unix socket policy. DOM checks are not a substitute for physical-device touch and screen-reader validation. Deployment verification is recorded separately after publication.
