Mind Garden v5.0.0

Production deployment authorized by the user. The user confirmed that mg_pilot_rooms and mg_request_limits exist in the production D1 database after the additive migration.

Source: develop/v5 at 23e9dfd606076368485cd801c5097881a63c4233.
Deploy through the existing Cloudflare Pages project from main; output directory public. Prebuilt assets are included. Preserve functions/ and the DB binding.

Modern and Classic share games, scores and preferences. Classic v4.0.27 remains on release/v4-classic; the v4.0.26 rollback baseline remains on archive/v4.0.26.

Validated: build and syntax, grammar, saved preferences, eight-client EN/ZH multiplayer, layout switching, facilitator backend/UI, and offline caching. Physical-device pilot testing remains outstanding.

Verify About shows v5.0.0 and garden-ui-500.js and .css load. Do not clear site data; it holds local player history.
Deployment success is reported separately after Cloudflare completes publication.
