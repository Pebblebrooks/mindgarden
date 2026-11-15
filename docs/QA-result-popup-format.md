# Approved game-result popup format

Implemented on `codex/consistent-game-popups`; not deployed. Package version remains the existing version until release packaging.

## Scope

- Shared result renderer used by 50 scored solo games: Replay followed by Next level, final-level/practice handling, compact pause/Options/Games/Home footer, centred garden-growth status.
- Game options: Easier level and conditional Next selected game; Back restores the completed result without rescoring. Close/Escape returns to the originating All Games/My Games list.
- Break screen: shared title, Back and Close; preserves completed results and unscored practice.
- Move & Remember: Replay/Next level, compact footer, Options with easier/queued-game choices, break return, and origin-aware exits. Movement stays unscored.
- Daily journey: explicit Next game label, compact Games/Home footer and shared Close header. Daily progression remains separate from level progression.
- English/Chinese About guidance and AGENTS.md updated.

## Validation

Passed:
- 300 next/replay/easier transitions across 50 scored games in English and Chinese; 118 setup/launch combinations.
- Result-specific Back/Close/Escape, practice/final-level and no-duplicate-score checks.
- 48 bilingual movement flows and movement integration/source validation.
- 30 games across 15 levels in both languages, including mixed daily journeys.
- Release suite: review UI, responsive nav fitting, cache, themes, About, menu exits/history, popup shell, cleanup and scenery regressions.
- Syntax and git whitespace checks.

Remaining: rendered browser verification at phone/tablet/desktop widths, both themes and enlarged text. Local Chromium was previously blocked by this environment; automated DOM checks do not establish visual correctness. No production deployment or database changes.
