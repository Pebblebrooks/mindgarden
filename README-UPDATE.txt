MIND GARDEN V4.0.17
Approved gameplay reliability and feedback update.

- Immediate touch/keyboard press feedback across game controls.
- Rapid matching-pair input, isolated delayed callbacks, and artwork fallback.
- Results remain visible until Next; memory sequences wait for Begin.
- Clear correct/input sequence comparison, sound feedback and ready-state cues.
- Melody final note, Skip round, Team Garden turns and drawing touch fixes.
- Separate local player progress and game/difficulty score charts.
- Clear matching award explanations and top-three multiplayer trophies.
- Optional detail in accessible information icons.

DEPLOYMENT
Upload package contents to repository root. Cloudflare Pages output: public.
Keep the existing functions/ API and D1 binding. No database migration or data reset.
Verify About v4.0.17 and garden-ui-4017.js/.css after deployment.
If an old version remains, close app tabs and reopen. Do not clear site data.

VALIDATION
See tests/AUDIT-2026-11-09.md for automated coverage and limitations.
Physical iPad/iPhone touch and audio testing remains recommended.
Copyright 2026 Pebblebrooks.
