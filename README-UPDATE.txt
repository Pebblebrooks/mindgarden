Mind Garden v4.0.32 — compact menus and paired scenery

CHANGES
- Corrected the shared dialog width override. Rename and Game menu are compact;
  settings, About and game setup use content-appropriate widths.
- Built-in scenery stays at the same location when switching light/dark mode.
  Older separate scenery preferences are reconciled when switching appearance.
- About FAQ and Latest improvements updated in English and Chinese.

INSTALLATION
Replace repository files with this package. Cloudflare Pages uses main and
output directory public. Preserve existing DB binding and environment settings.
No database migration or data reset is required.
Verify About shows v4.0.32. Close older tabs and refresh if needed; do not clear
site data, which contains local progress.
Built assets: garden-ui-4032.js and garden-ui-4032.css.

VALIDATION
620 menu/setup viewport checks at 100% and 200% text sizes passed across five
phone, tablet and desktop sizes. Long panels retain internal scrolling.
All eight built-in scenery pairs tested in both directions, including older
preferences and profile isolation. Release, About, cache and syntax checks pass.
This does not claim exhaustive live multiplayer or gameplay-state coverage.
