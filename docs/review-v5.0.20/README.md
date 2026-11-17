# Mind Garden v5.0.20 release review

Based on v5.0.19. Approved for commit and Cloudflare Pages deployment on 17 November 2026.

Implemented shared navigation, centered sound/language controls, responsive question typography and spacing, larger pet/movement artwork, reduced-motion pet hearts, explanatory pattern hints, matching rules/hint counts, prepare-round feedback, and removal of the hard-coded startup scenery fallback.

Completion review: removed More options and completed-game Pause; retained visible Settings/Home. Replay/Next use labelled icons. Centred the three stars independently from the information button. Corrected clipped stars, empty-row margins and mobile heading size. Verified completion screenshot at 390×664 with all actions visible.

Functional checks completed: 318 bilingual launches, 48 movement flows, result-dialog behavior, pet gestures and reduced-motion hearts, all 13 pattern families and missing positions, eight-client multiplayer flow, room alerts, documentation and release cache checks.

Final viewport audit: 216 launch screens across 390×664 English/100%/level 1, 390×664 Chinese/140%/level 15, 844×390 English/100%/level 15 and 1363×936 English/100%/level 15. No missing navigation, off-screen footer, horizontal overflow or launch exceptions. All 54 desktop samples fit. 58 mobile samples require internal content scrolling (3 normal portrait, 20 enlarged-text portrait, 35 landscape); controls remain outside the scrolling play area. This is a documented limitation, not a claim that every viewport fits without scrolling. Real iPhone audio/touch remains unverified.

Local screenshot checks used review fixtures, not production player results. Screenshots are excluded from the public repository.
