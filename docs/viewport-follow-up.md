# Responsive welcome and room layout follow-up (draft)

- Welcome cards start hidden on each page load. Navbar and menu toggles share page-session state. A more-specific hide rule fixes the conflicting grid display rule.
- Navbar card switch restored. Mobile uses a compact brand, prioritizing language/cards/menu, with audio and motion kept when measured space allows.
- Mobile welcome cards use two columns and three rows, smaller artwork and padding. Text scaling is retained.
- Desktop scenery edge arrows invoke the existing previous/next scenery controls.
- Room lobby uses two desktop columns, one mobile column, compact spacing, and collapsible invitation sharing.
- Dialog viewport bounds retain scrolling for content that cannot fit, including large text.

Validation: release suite and syntax checks pass. Browser audit: 400 game setup dialogs across 320x568, 390x844, 768x1024 and 1366x768 at 100%/200% text; no horizontal overflow or outer viewport overflow. This does not cover every possible game state or device. Desktop two-player lobby fixture measured 880x633 with no internal scrolling. At 320px its width was 266px with no horizontal overflow. 390px navbar showed language, audio, motion, cards and menu on one row. Verified hidden cards after reload and next-scene change from Blossom garden to Lavender meadow. QA uses local fixtures, not live player rooms.

## Scenery and dialog follow-up (draft after v4.0.31)

Fixed a shared high-specificity viewport rule that overrode content width limits. Simple dialogs use a 560px desktop width; game setup 620px; My Games 760px; settings, audio and About 800px. Existing multiplayer and movement-specific layouts retain their own limits. All dialogs remain viewport-capped and long content scrolls internally.

Browser audit: 620 menu/setup combinations, five viewports (320×568, 390×844, 768×1024, 1366×768, 1920×1080), text sizes 100% and 200%; no outer viewport or horizontal content overflow. Covered rename, Game menu, pause, settings, players, music, flowers, avatar, family, My Games, About, navigation and 50 game setup screens. This does not claim exhaustive live multiplayer or gameplay-state coverage. Desktop Game menu measured 560×271px; rename 560×417px.

Built-in scenery selection now pairs day/night versions, including legacy divergent selections on theme toggle; custom photos remain separate per appearance. Targeted tests pass all eight pairs, both directions and profile isolation. Release validation passed. About Latest improvements and FAQ updated in English and Chinese. Not yet packaged or deployed.
