# Mind Garden v2.6 — Welcome-first compact garden

This update moves the large garden-progress illustration **below** the Welcome page and reduces its height to a compact, responsive progress strip. The Welcome title and four action cards now appear immediately, without scrolling past the old garden banner.

## Deployment
1. Upload all the files from this folder to the root of your existing `Pebblebrooks/mindgarden` GitHub repository, replacing the old files.
2. Commit the changes to `main`.
3. Wait for a successful Cloudflare Pages deployment.
4. Refresh `https://mindgarden-bk1.pages.dev/` (hard-refresh if needed).

No database migration is needed. Your existing D1 `DB` binding, multiplayer code and local progress are unchanged. The service-worker cache version has been bumped so clients refresh the updated files.

## What to verify
- Home: navigation, welcome heading and four pastel cards appear before the garden-progress strip.
- The strip below the welcome illustration remains small, showing growth, streak and Choose flowers.
- All Games: the strip does not appear.
- Light / Dark / Match Device: still work.
- Check on desktop and mobile; small-screen layouts may still scroll normally because four action cards need accessible tap targets.
