# v4.0.48 — runtime cleanup

Removed confirmed unused quote and sailboat code, the unloaded v27 stylesheet,
and a superseded V3.8 preview builder. Moved the SVG artwork generator out of
public/ while preserving its GIF build tool. Removed a duplicate translation key.
The release now uses an explicit active-source manifest for both the bundle and
translation builds, with esbuild compaction and retained third-party legal notices.
The current portable review builder supports compact CSS URLs. Updated the English
and Chinese About text and made the language audit discover the current bundle.

Combined UI bundles: 1,849,062 → 1,760,995 bytes (88,067 fewer, 4.76%).
Gzip comparison: 545,674 → 529,197 bytes (16,477 fewer, 3.02%).
These are UI bundle measurements, not a claim of equivalent total-app reduction
or a measured improvement in rendering speed.

Validation completed before publication:
- 94 automated scripts passed in an isolated copy, including account/API,
  multiplayer, gameplay, language, preference, menu and offline-cache checks.
- Separate portable-review flow and git-dependent pet regression checks passed
  (96 scripts in total).
- Syntax checks, editable-source diff checks and identical-output rebuild passed.
  The generated Three.js shader strings retain upstream whitespace; they are
  not stripped merely to silence whitespace warnings.
- Portable-review CSS contained no remaining relative asset URLs.

Limits: the two local Playwright browser suites were not run because their browser
executable was unavailable in this environment. The long exhaustive all-level
session runner was not repeated; focused progression, difficulty and custom-level
suites passed. This is a cleanup release, not completion of the broader audit:
server-enforced deletion reauthentication, failed-save/sign-out handling, backup
result-field completeness, restoration identity, navbar priority, Progress hiding,
About alignment, focus filtering and multiplayer timeouts remain pending.

Deployment target: Cloudflare Pages. No Workers changes or database migrations.
