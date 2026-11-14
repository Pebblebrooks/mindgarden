# Approved menu design alignment

Implements the approved account/player, results and games-library visual direction without changing Cloudflare or account credentials.

- Outlined green surfaces in dark mode, coordinated pale surfaces in light mode, gold main actions and clear typography.
- Sign-in/create/recovery screens retain separate flows. Password reveal is inside the field. Secondary exports and privacy are under More when signed out. Account Back returns to player selection.
- Player photo, name and remove controls share one outlined row. Selected rows are gold. Add player, rename, account and Done follow the approved ordering. Existing last-player protection and second-tap removal confirmation remain.
- Library uses horizontal illustration/text cards, internal help buttons, aligned heights, adjacent library tabs, search and one category selector. Existing game names, catalogue and artwork are retained (these are not the exact painted illustrations in the concept image).
- Results use a two-column statistics grid, Next/Replay/Games, and More. A real matching-pairs round exposed duplicate growth copy and an empty legacy action row; both were corrected.
- At enlarged text sizes, main result buttons wrap instead of overflowing. Scrollable forms retain their controls.

Validation: account synchronization/recovery-download test; bilingual menu-flow test; 300 progression transitions; 118 bilingual setups; release/navigation/offline/About suites; syntax checks. Final browser layout audit: 192 combinations passed with no measured overflow or info/text overlap. Browser QA covers 320/390/768/1280px, 100/200% text, English/Chinese and light/dark for six menu states. Result-state matrix uses seeded example metrics; an actual matching-pairs round was also played manually.

About: added aligned English/Chinese guidance for main account actions, More, photo editing and removal confirmation. Version remains 4.0.35 until release packaging. No deployment or database migration performed.
