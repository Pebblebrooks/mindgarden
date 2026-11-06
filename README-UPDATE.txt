MIND GARDEN v3.8.7 — AFFECTED-FILES UPDATE

This updates your existing v3.8.6 project. It contains the approved responsive
navbar and bouquet sizing fixes. It is not a standalone app or a full package.
No new SQL, database migration, backend update or media download is required.
Any outstanding database setup from v3.8.6 is separate from this UI update.

FOUR APPLICATION FILES TO COPY
  public/index.html
  public/garden-ui-387.css
  public/garden-ui-387.js
  public/sw.js

INSTALLATION
1. Keep a backup of your current complete Mind Garden project.
2. Extract this ZIP and open mind-garden-v3.8.7-update/public.
3. Copy all four files into the public folder of your EXISTING complete project.
   Replace index.html and sw.js; add both garden-ui-387 files. Do not delete or
   replace the entire public folder. Keep the existing images, audio, functions,
   shared folder, database bindings and other configuration. Old 386 bundles
   can remain; the new index loads 387.
4. Deploy the COMPLETE merged project through your existing deployment method.
   Do not deploy this small update folder by itself. This would omit the app's
   existing media and backend. Use your existing Git deployment or Wrangler
   so the existing Pages Functions are included.

   If using Wrangler, run from the existing project root containing public,
   functions and shared (not from inside public or this extracted update):

   npx wrangler pages deploy public --project-name YOUR_PAGES_PROJECT --branch YOUR_PRODUCTION_BRANCH

   Replace the two placeholders with your existing project and production
   branch values. Keep the current D1 binding. No D1 Console steps are needed
   for this version.

   These assets are already built. Do not run an older UI build script: it can
   overwrite the supplied release with older source. This is a deployment
   patch, not an updated editable-source tree.
5. After deployment completes, close other Mind Garden tabs and reopen the app.
   On Windows, use Ctrl+Shift+R if needed. About should show v3.8.7. Do not clear
   browser site data, because player history and preferences are stored there.

CHECK THE UPDATE
- The navbar stays on one row. Controls that do not fit are available in the
  hamburger menu. The visible word "More" is removed.
- Open the hamburger menu to access hidden links, text-size controls, appearance
  options, About and Contact. Resize the window or change text size to check
  that the navbar adjusts automatically.
- At 140% and 200% text size, the bouquet artwork stays proportional and bounded.
  Its heading, description and rotation controls remain readable and visible.
- Confirm the rest of the app and online play still open through the same site.

IF THE OLD LAYOUT REMAINS
Confirm all four files were deployed together and About shows v3.8.7. Close
old tabs, reopen and refresh. Replacing only the CSS is not sufficient for the
navbar changes. Keep browser site data intact.

ROLLBACK
Redeploy the complete project backup from step 1. No database rollback is needed.

This package has been prepared and checked, but has not been deployed to your
Cloudflare account. SHA256SUMS.txt lists checksums for all other included files.
