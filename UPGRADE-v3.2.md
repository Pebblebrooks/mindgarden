# Mind Garden v3.2 — garden wildlife

The garden now uses locally downloaded, rigged 3D cat, fox and owl models instead of flat SVG ground animals. It is a stylized 3D garden, not photorealistic wildlife footage.

## Behavior and scene

- Independent skeletal animation clips for walking, resting, sitting, eating, sleeping and playful hops. Cat rolling combines a tucked resting pose with a smooth body roll. Randomized rest lengths and curved, eased paths replace the repeated left/right rail.
- Animals change heading gradually, explore foreground/background positions, and become smaller farther away. Ground contact shadows track their feet; the owl occasionally takes off and lands.
- Three small flying birds (swallow and finch designs), four butterfly colors, two bees and a dragonfly. Wing movements are separate from flight paths, with brief glides. Gentle mode slows walking without slowing wingbeats into slow motion.
- The progress bed is a shallow soil patch with grass edging, positioned on the grass beside the path. The raised wooden rim and detached shadow were removed. Twelve plants retain the existing 0–60 progression and flower choices.
- Motion pauses when the page is hidden, the garden leaves the viewport, a dialog opens or gameplay begins. Off and system reduced-motion settings freeze the scene.
- If WebGL is unavailable, transparent 24-frame cat, fox and owl GIFs are used. Off/paused modes switch these GIFs to still PNG posters. GIFs were rendered from the downloaded models, not downloaded photographic footage.

The sunset theme, centered daily-game button/caption, readable progress panel and eight-player multiplayer system remain in place.

## Assets and source

Downloaded free sample: https://vuena.itch.io/blocky-pets-free — “Cute Pets FREE Sample - Cat, Fox, Owl (CC0, Rigged, 12 Animations, GLB/FBX)”. The original license is included in `public/wildlife/Vuena-LICENSE.txt`. The packaged GLBs are the downloaded sample files. Their built-in clips are procedural, not motion capture. Cat rolling, path selection and insect/bird meshes are app-authored behavior.

Three.js is bundled locally under its MIT license (`public/wildlife/Three-LICENSE.txt`). No runtime CDN or third-party asset requests are required. The source is `src/garden-wildlife.js`; rebuild the committed browser bundle with `npm install && npm run build:wildlife`.

The preview embeds all models, GIFs and backgrounds. It is larger than V3.1 (about 6.2 MB). Animated models need WebGL; the GIF fallback supports browsers without it. The phone layout reduces animal scale and keeps controls above the wildlife layer.

## Checks

JavaScript syntax; real Chromium desktop/mobile rendering at 1440, 768, 390 and 320 pixels; Chinese/large text; day/sunset/Auto; depth wandering; canvas animation; dialog/Off/reduced-motion pausing; no-WebGL GIF playback/poster switching; flower progression/choice/reset/profile switching; embedded standalone preview without external requests. Existing eight-client SQL/UI regression tests cover room capacity, code delivery receipts, host launch acknowledgments, rejoining, two rounds and results.

Run `npm run check`, `npm test`, and `npm run test:browser` after installing dependencies. Browser tests require Playwright Chromium, or set `BROWSER_EXECUTABLE` to a Chromium executable. Node.js 24+ is required for the SQL tests.

## Deployment

Deploy the package to the existing Cloudflare Pages project with output `public` and D1 binding `DB`. No database migration is needed from V3.0/V3.1. Upgrades from earlier versions still require `migrate-v3.sql` as described in `UPGRADE-v3.0.md`. The cache is now `mind-garden-v32`. No live deployment was performed during this revision.

The standalone preview does not provide live multiplayer. Multiplayer requires the deployed backend; code delivery is to signed-in, connected app clients, with receipt/launch acknowledgments visible to the host.
