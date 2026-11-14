Mind Garden v4.0.36 — approved menu designs and spacing corrections

CHANGES
- Account and player menus follow the approved outlined-panel design.
- Password reveal stays inside its field; secondary account options are under More.
- Player photo, name and remove actions share one row; selected rows are gold.
- Games use aligned horizontal cards, larger illustrations and internal info controls.
- Results use two-column statistics, Next/Replay/Games and secondary actions under More.
- Corrected duplicate result growth text, empty action spacing and large-text overflow.
- Restored Player & account entry from the welcome name.
- Reserved info-button space on My Games, library and welcome cards.
- English/Chinese About guidance updated. Existing game artwork and data retained.

UPDATE
Production branch: main. Build output: public. Preserve functions/ and existing
Cloudflare build settings, DB binding, MG_ACCOUNT_PEPPER and MG_ACCOUNT_SIGNUP.
No SQL migration or secret changes are required for this release.
Verify About v4.0.36 and garden-ui-4036.js / garden-ui-4036.css.
For a manual repository update, remove obsolete public/garden-ui-4035.js and .css.
Close and reopen app tabs after deployment. Do not clear player data or reset D1.

VALIDATION
192 browser layout combinations: 320/390/768/1280px, English/Chinese,
light/dark and 100/200% text across six menu states. No measured overflow
or info/text overlap. An actual Matching Pairs round was also played.
Account sync/recovery-download, menu flow, navigation, offline caching and About
checks passed. Gameplay regression: 300 transitions and 118 bilingual setups.
Physical devices and live account creation/recovery remain outside these tests.

ROLLBACK
Restore the previous successful Cloudflare Pages v4.0.35 deployment.
No database rollback is needed. Preserve secrets and all player data.
Copyright 2026 Pebblebrooks.
