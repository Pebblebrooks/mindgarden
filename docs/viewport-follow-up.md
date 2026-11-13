# Responsive welcome and room layout follow-up (draft)

- Welcome cards start hidden on each page load. Navbar and menu toggles share page-session state. A more-specific hide rule fixes the conflicting grid display rule.
- Navbar card switch restored. Mobile uses a compact brand, prioritizing language/cards/menu, with audio and motion kept when measured space allows.
- Mobile welcome cards use two columns and three rows, smaller artwork and padding. Text scaling is retained.
- Desktop scenery edge arrows invoke the existing previous/next scenery controls.
- Room lobby uses two desktop columns, one mobile column, compact spacing, and collapsible invitation sharing.
- Dialog viewport bounds retain scrolling for content that cannot fit, including large text.

Validation: release suite and syntax checks pass. Browser audit: 400 game setup dialogs across 320x568, 390x844, 768x1024 and 1366x768 at 100%/200% text; no horizontal overflow or outer viewport overflow. This does not cover every possible game state or device. Desktop two-player lobby fixture measured 880x633 with no internal scrolling. At 320px its width was 266px with no horizontal overflow. 390px navbar showed language, audio, motion, cards and menu on one row. Verified hidden cards after reload and next-scene change from Blossom garden to Lavender meadow. QA uses local fixtures, not live player rooms.
