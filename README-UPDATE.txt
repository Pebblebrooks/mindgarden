MIND GARDEN CLASSIC v4.0.28
Compact containers and consistent companions

INSTALL / UPDATE
1. Keep the existing Pebblebrooks/mindgarden repository and Cloudflare Pages project.
2. Production branch: main. Build command: empty. Output directory: public.
3. This package includes the full source, built public files, functions and tests.
4. Preserve the existing D1 DB binding. No migration or data reset is required.
5. About should display v4.0.28; the page loads garden-ui-4028.js and garden-ui-4028.css.
6. Close old app tabs and reopen if necessary. Do not clear site data: it holds local history and preferences.

CHANGES
- Filtered catalog cards stay compact; library header and category controls fit their content.
- Online login/lobby dialogs use bounded widths with tighter spacing.
- Petting generates rising red hearts; sustained strokes generate more feedback with a bounded particle count.
- Matching kitten and puppy artwork in welcome and progress areas.
- Left/right walking with braking, sitting, front-facing turns, standing and gentle pose blends.
- Motion respects pause, reduced-motion, scene visibility and hidden tabs.
- Separate progress roaming areas prevent animals walking through one another.
- Classic v4 design retained. No Modern/Classic, facilitator or pilot controls added.

ANIMATION SCOPE
The release uses illustrated poses, not rigged 3D models. Old abrupt autonomous jump, grooming and toy/nap image swaps are replaced by calm walking and seated reactions. Complete new lying-down and toy-play sequences remain future work. Existing opt-in audio remains available in the app.
Motion-only comparison: /pet-motion-preview.html

VALIDATION
Build and syntax passed. Companion motion and integrated heart-feedback tests passed.
Release UI, navigation sizing, cache, and v4 design assertions passed after updating stale test references to the current release and the existing My Games/Move & Remember additions.
Multiplayer API/UI, progress and preference assertions passed. Existing jsdom shutdown observer warnings remain in the broad suite; these are recorded, not treated as a clean error-free run.
Browser: v4.0.28 release marker, correct welcome pet width, two progress companions, filtered card 360px, login dialog 560px without horizontal overflow.
Not an exhaustive physical-device or every-gameplay-state audit.

ROLLBACK
Previous production commit: cceb8e5a28da59ffd75d1c3ebcd5215a2da52aef (v4.0.27).
Use the existing Cloudflare Pages deployment history to roll back if needed; no database rollback is necessary.
Copyright 2026 Pebblebrooks.
