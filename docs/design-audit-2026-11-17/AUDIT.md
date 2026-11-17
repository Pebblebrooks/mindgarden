# App-wide design audit

Baseline v5.0.21 / c31de96. 17 November 2026. Application source unchanged during this review.

## What the evidence establishes

- Current source, AGENTS.md, v5.0.20-to-v5.0.21 diff, existing v5.0.20 review data and supplied screenshots were reviewed.
- Live desktop home/catalogue and Remember the Order setup/pre-start were inspected. Catalogue exposes 56 games. The solo flow asks Begin in setup and again before study; this needs a deliberate one-start design decision.
- Current DOM tests passed: result dialog, welcome/menu review, menu navigation and approved game UI. These verify structure/actions, not visual fit. The existence of regressions despite these passes demonstrates missing visual coverage.
- Full-bundle isolated review check passed in English and Chinese: visible item and pager moved 2/4 -> 3/4 -> 4/4 -> 3/4 -> 2/4 -> 1/4. This does NOT disprove a real-device interaction bug; it narrows the investigation. Gameplay progress remains a separate counter, causing ambiguity.
- `launch-audit.json` records the current low/high-level bilingual launch sweep. It does not measure CSS layout or run every round. Embedded movement rendering and real audio are outside DOM coverage.
- Historical v5.0.20 audit contains 216 launch samples across 54 games, with 58 content-scroll flags. Those are historical findings, NOT fresh v5.0.21 passes. Matching Pairs and movement require their own layout coverage beyond that matrix.
- No real iPhone/tablet touch/audio test or complete current rendered state sweep has been completed in this audit. Those remain required before any release. Preview pages are exact static layout proposals, not implemented app screenshots.

## Findings and proposals

| ID | Area / evidence | Finding | Proposed revision / acceptance |
|---|---|---|---|
| A01 | Governance; AGENTS.md | Contradictory historical directions remain active: icon-only vs labelled results; More options vs always visible. | Single approved PRD with superseded rules archived; every future change lists requirement IDs. |
| A02 | Shared CSS; ui-consistency.css | Multiple competing utility-row alignment and sizing rules; solo-specific selectors do not cover group shell. | One shared size/spacing contract; game-specific exceptions explicit. Compare solo/group at same viewport. |
| A03 | feedback-layout.css:40 | Generic aria-pressed=true pseudo-element injects a tick into all buttons in #box, including sound toggles. | Selection decorations scoped to choices. Muted/on sound icons render one recognisable glyph with no stray tick/slash. |
| A04 | game-ui.js:54; supplied group images | Group bulb explicitly receives labelled-action; footer grid places it at left. Text spills beside icon. | Centred icon-only bulb, accessible Rules label; no adjacent text. Solo bulb convention proposed to match. |
| A05 | v4.css, v5.css, game-visuals.css | Group board has competing column/height rules and reserved status rows. Supplied phone screen scrolls beyond board/footer. | Fit board into measured content area; 4x5 portrait for 20 cards where targets fit, wider landscape grid. Remove redundant phase/reserve rows. Preserve all cards. |
| A06 | multiplayer.js:28,335,386 | base({round}) drops started/mode/players context, falling back to Play Together. | Show actual game title with group/round as secondary context. |
| A07 | index.html:775-785; game-ui.js | Review replaces task content but leaves round footer; Hint hides, Pause remains. | One Review n of total position synchronized with displayed answer; no active Pause during completed review. |
| A08 | feedback-layout.js:22-26 | Pager advances in isolated bilingual full-bundle check; reported device freeze not reproduced. | Retain investigation item: rapid tap, touch hold, language rerender, first/last item, final round. Do not announce pager fixed without reproduction. |
| A09 | Live Remember the Order pre-start | Two sequential Begin actions and repeated pre-start instructions; large empty central gap. | Preview one meaningful start gate and group task content; preserve memory study timing. This is a new proposal, not an approved behaviour change yet. |
| A10 | Number Patterns / Time later user images; existing v20/v21 rules | Question separated from sequence/time; explanatory hint needs stronger visual hierarchy. | Question + sequence/time + options grouped centrally; hint below options in readable body size. Keep true pattern explanation. |
| A11 | Word Builder / large boards; historical audit | Some mobile normal-size and many landscape/enlarged-text content-scroll exceptions remain. | Compact headers, adaptive tiles, preserve 44px targets. Per-game fit check; declare unavoidable enlarged-text scrolling rather than clip content. |
| A12 | Result source and current result tests | v20 already restores visible actions; older AGENTS rule still contradicts it. | Retain v20 Done/Replay/Next/Settings/Home, centred stars and right info. Remove filler text; no More or completed Pause. |
| A13 | Garden Pets / movement; source and earlier reports | Distinct engines still risk nested toolbars and mismatched size budgets. | Larger existing art in shared shell, one utilities row/one footer, static heart under reduced motion, no cropping motion cues. Verify sound on actual phone. |
| A14 | Home/catalogue CSS + live catalogue | Shared tools exist but injected help markup exposes duplicated i text in accessibility tree. Visual duplication not established from AX alone. | One visible info glyph and one useful accessible name. Consistent top-right home/top-centre catalogue placement. |
| A15 | Accounts/player/menu source and DOM tests | Current distinction and navigation mostly work; full mobile visual/touch state not freshly verified. | Preserve separate Account/Settings/player identity. Compact identity block; touch-select whole player row; no destructive edits during audit. |
| A16 | Mobile Help user report; menu-simplify v21 change | Auto-scroll change exists but has not been verified against mobile visual viewport/keyboard. | Reveal expanded section inside menu scroll area; maintain focus and visible Close. Test at bottom of screen. |
| A17 | Group-flow source and v21 tests | New catalogue/readiness/arrivals flow should be preserved; live all-player mobile run unverified. | Keep visible names, named arrivals, Ready, one Start, server countdown. Do not restore old Room/Rooms controls. |
| A18 | Group catalogue inventory | 13 supported types / 17 variants; solo catalogue has 56 entries. | Same catalogue visual format, genuine supported settings. More types/difficulty requires separate engine/server work; not arbitrary level labels. |
| A19 | Startup/scenery source and v20 change | Hard-coded startup scenery removal exists; fresh cache-to-update behaviour not retested. | Neutral initial colour; selected image first; inspect cache manifests and references before removing assets. No blind deletion/whole-version rollback. |
| A20 | Cross-app interaction / touch | Oversized glyphs are distinct from touch targets; tooltip hold and active locks can complicate perceived responsiveness. Actual latency cause not measured. | Keep 44-48px targets, smaller glyphs, immediate visual acknowledgement, no delayed normal click, explicit unavailable states. Measure real-device gestures/audio. |

## Earlier-version reference decisions

| Reference | Preserve selectively | Do not restore |
|---|---|---|
| v5.0.20 e1b977c | Shared solo header/utilities; task typography; larger art; explanatory pattern hints; visible results actions. | Known 58 mobile content-scroll exceptions; assumptions that old launch tests prove current layout. |
| v5.0.19 2111dad | Account identity separation, concise controls and host availability alert intent. | Older small art, result More options, fragmented group navigation. |
| v5.0.21 c31de96 | Group readiness revisions, named arrivals, supported catalogue, shared countdown, Keep hosting state preservation. | Group styling regressions, redundant bulb label and context-losing game title call. |

No entire app rollback or database migration is proposed.

## App-wide coverage register

The PDF appendix lists all 56 catalogue entries. Every game inherits the shared header/utilities/progress/exit/result review. Additional checks by family:

- Choice/number/word games: equal-or-larger question text, balanced options, feedback colour+mark, explanatory hints, manual next.
- Memory/study games: start gate, reveal timing, pause/resume, review pager, correct review position, no duplicate score.
- Grid/board games: all playable cells, touch targets, Undo where supported, keyboard/focus, landscape reflow.
- Story/recall games: readable text and listening controls, keyboard-safe inputs, explicit progression; scrolling only when unavoidable and recorded.
- Pets/movement/audio: artwork scale, one toolbar, pointer interaction, reduced-motion feedback, actual sound and narration verification.
- Home/Today/My/All Games; menu/help/About; account/sign-in/create/recovery/device sign-in/photo; players; progress/bouquet/leaderboards/saved rankings; all group states; loading/offline/reconnect/empty/error/confirmation states remain in the release matrix.

## Release gate after approval and implementation

1. Owner approves specific preview/PRD IDs; document decisions and exceptions.
2. Implement shared components, preserving supported functionality/data.
3. Re-run DOM/API checks and every affected rendered state; compare with approved references.
4. Complete viewport/theme/language/text-scale matrix in PRD. Record uncovered states explicitly.
5. Verify iPhone Safari touch/audio, host+guest round lifecycle, cache update, and final app version.
6. Present actual rendered corrected app screens before deployment. Approval of this static design book is not a claim that the application now matches it.
