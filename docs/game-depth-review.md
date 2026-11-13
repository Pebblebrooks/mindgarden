# Progression revision 2 — v4.0.31

Includes the responsive welcome/lobby changes in viewport-follow-up.md. Packaged for v4.0.31; deployment is verified separately. Retains the V4 visual design and earlier pet animations.

## Behaviour

- Balanced 15-level sessions now use all difficulty values 1–15, instead of ten rounded values. Gentle retains the intentional 1–5 cap, explained in setup. Existing score records are preserved; new scores and JSON backups retain progressionRevision: 2.
- Matching automatically progresses from identical pictures to picture/word pairs (6+) and related objects (10+), with explicit manual style selection.
- Reverse recall (10+), reverse food/route memory (10+), reverse melody (11+), reverse positional picture questions (10+), updated shopping lists (11+), and story-event relationships (11+).
- Pathways: graduated board sizes, some aligned tiles at low levels, seeded constructive routes with detours at 8+, one checkpoint at 7+, three at 12+. Hints/undo retained. Generation has a bounded search and a solvable fallback.
- Dominoes varies pip/hand sizes, prioritises high pips at 6+, and considers remaining-hand mobility at 10+ without inspecting the player's hand.
- Bingo removes picture cues at 6+ and calls two names at 11+. Both must be matched before advancing. Shared online bingo rules are unchanged.
- Sayings mixes completion/meaning at 8+ and uses meaning at 12+. Four meaning choices cap mobile layout; session length limits question count.
- Colour Links varies board size, pair count and route segments; all supplied solutions remain adjacent and disjoint. Remember & Draw adds rotated outlines at 7+, retaining tolerant scoring and recognition alternative.
- Everyday activities add calendar/time applications, food-group comparisons and reasoning from the existing dated news text. No new unverified news is generated.
- Sound choices and selective Team Garden counting grow in challenge. Existing arithmetic, category, visual and jigsaw mechanisms now receive the full Balanced difficulty range.
- Move & Remember generates varied sequences with more memory steps; selected physical pace and movement range remain unchanged. Pet toys/feed/brush and unscored relaxation remain available.
- Cross-level recent-question history, recent sequence rotation, consolidation prompts, explicit rest button, existing practice/replay/easier/next choices. No automatic upward promotion, mandatory answer timer or new streak penalty.
- Bilingual previews state actual rules. Recall previews refresh when number/word mode changes. Pause/resume now also restarts a delayed recall countdown.

## Validation

- 294 bilingual launches (all scored library games at 1, 8, 15), full Balanced mapping, Gentle cap, reverse answer scoring, 120 checkpoint boards, link solution invariants, complete meaning/bingo/reverse route flows.
- 300 seeded generated path puzzles after adding detours: solvable, initially unsolved, no repeated route cells.
- Complete picture-word pair game, matching identities, score revision JSON round-trip, and advanced domino game.
- 118 personal setup/launch checks including practice isolation, profile overrides, saved settings and scores.
- 48 bilingual movement flows across tiers, optional reaches, pause, narration and empty selections.
- Release checks: menus, responsive navbar, cache coherency and V4 UI. Syntax and diff checks.
- Browser: mobile advanced paths and meaning choices; Chinese reverse-recall setup. At 390x844 the path board and controls fit, with no horizontal overflow. Four meaning options fit at normal text size.

## Limits and maintenance

Not every game state/device/zoom combination has been manually played. Large text or very short viewports may require accessible scrolling. Native board families still share some sizes between levels; this is consolidation, not a promise of 15 unique mechanics per game. Finite recordings, photos and verified news need additional curated content for long-term novelty. Multiplayer content and rules were not expanded in this update.

About updated in English and Chinese: latest changes, full progression, quiet startup, menu paths, mobile icons, rest choices, sound controls and compact lobby sharing. AGENTS.md records the standing documentation requirement. About version continues to follow release metadata.
