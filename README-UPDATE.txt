MIND GARDEN CLASSIC v4.0.29
Restore familiar pet movement

CHANGES
- Progress animals and controller restored exactly from v4.0.27.
- Welcome pet uses its original idle, sleep, toy-play and petting sprite sequences.
- Removed the v4.0.28 welcome walking controller, reduced sprite sizing and walking preview.
- Floating red hearts, repeated-stroke feedback, opt-in audio and compact library/lobby layouts retained.
- Original v4.0.27 front/side artwork is restored as requested; this rollback does not introduce a new 3D animation system or redesign.

DEPLOYMENT
Cloudflare Pages, production branch main, output directory public; existing DB binding unchanged.
No database migration or data reset.
About displays v4.0.29. New bundle files: garden-ui-4029.js and garden-ui-4029.css.
If an old version remains, close old app tabs and reopen. Do not clear site data.

VALIDATION
Build and JavaScript syntax passed.
Pet rollback tests verify exact progress-controller restoration, cat/dog sleep and toy frames, no welcome locomotion and retained heart feedback.
Existing progress movement tests pass at 340px and 640px: gait phases, no teleporting, resting in place, offscreen exits and pause.
Existing heart tests pass for taps/strokes, particle limits, cat/dog audio requests, pause and reduced motion.
Release UI, navbar, cache and v4 design tests are run for this release.
Not an exhaustive physical-device or every-gameplay-state audit.

Copyright 2026 Pebblebrooks.
