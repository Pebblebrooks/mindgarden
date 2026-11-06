# Mind Garden v2.9 — translation and animated scenes

This revision continues the v2.8 package. Upload the contents of `mind-garden-cloudflare` to the repository root of `Pebblebrooks/mindgarden` on `main`, using the existing Cloudflare Pages configuration. Keep the production D1 binding `DB` pointing to `mindgarden-db`. No new database migration is required from v2.8.

## Changes

- Simplified Chinese for the nine newer activities, story text and answers, difficulty selection, multiplayer controls/results/errors, and accessibility labels. Chinese game search now works.
- Inline animated sea scene with detailed sailboat, rocking, drifting, waves and reflected sunlight.
- Two butterflies, a bird, a bee, a running cat, dog and rabbit in the welcome garden.
- Persistent Off/Gentle/Standard motion controls in Settings. Honors device reduced motion; pauses decorations during games, dialogs and hidden tabs.
- Invitation URL automatically joins once using the current display name, or resumes a matching saved session. Failures retain the Join action for retry. Room screens expose a selectable URL and Copy/Share buttons. Native sharing remains a user-triggered action because browsers require a gesture and the user must select a recipient.
- Leaving a room screen stops focus-triggered polling from reopening it. Existing two-player, multi-round backend retained.
- Updated offline cache and versioned asset URLs. v2.8 desktop section proportions and mobile layout retained.

## Validation

Passed JavaScript syntax checks for frontend and room API; DOM execution checks for Chinese home, game library, all nine added activities and difficulty menus; motion mode persistence, dialog pause/resume, visitor reattachment, and reduced-motion default; mocked invitation auto-join (one request), visible link, and leaving-screen behavior.

A browser rendering run was unavailable because the Chromium download failed. Visual layout and real two-device Cloudflare/D1 multiplayer still need deployment checks. The hosted site has not been changed by this package.

After deployment: hard refresh once, check Chinese settings and story game, try all three motion modes, and open an invitation on a second device. Complete two rounds and confirm both devices advance with the scores preserved. Copy/Share needs HTTPS; selectable-link fallback remains available.
