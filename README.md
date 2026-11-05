> **v2.7 update:** See [UPGRADE-v2.7.md](UPGRADE-v2.7.md) for the approved layout, mobile menu and deployment steps.

# Mind Garden v2.5 — approved four-card home

**Latest update:** see [UPGRADE-v2.5.md](UPGRADE-v2.5.md) for theme settings, deployment and multiplayer checks.

> **v2.4 update:** Follow [UPGRADE-v2.4.md](UPGRADE-v2.4.md) and [CHECK-MULTIPLAYER.md](CHECK-MULTIPLAYER.md) for the approved designs and multiplayer repair.

# Mind Garden v2.3 — Senior-friendly brain games + Cloudflare Pages multiplayer

**Existing v2.2 user? Read [UPGRADE-v2.3.md](UPGRADE-v2.3.md).** No new SQL migration is required for v2.3.

Mind Garden is a recreational cognitive engagement app, not a dementia prevention, diagnosis, or treatment service. It retains your original offline-capable garden, 21 minigames and matching pairs, and adds nine cognitive activities, user-adjustable difficulty, a three-activity guided daily session, a searchable games library, calming synthesized music, optional garden animations, and private two-player online competitions.

## Project structure

```text
mind-garden-cloudflare/
  public/
    index.html               Original game engine + integrated audio enhancements
    v23.css                  New Home and All Games visual design
    dashboard.js             Single navigation, home, library, daily session
    ambient.js               Optional butterflies, bird, bee, cat and dog
    upgrade.js               Nine added games and difficulty choices
    multiplayer.js           Two-player persistent room UI
    i18n.js                  Existing English/Chinese translation layer
    sw.js                    Versioned offline cache, API excluded
    icon.svg
    manifest.webmanifest
    _routes.json
  functions/api/room.js       Pages Function multiplayer backend
  schema.sql                 New installations only
  migrate-v2.2.sql           ONLY for installations upgrading v2.1 → v2.2
  UPGRADE-v2.3.md
  package.json
```

## Deploy a NEW site

1. Create a GitHub repository such as `Pebblebrooks/mindgarden`; upload the **contents** of this folder into its root.
2. Cloudflare dashboard → Workers & Pages → Create → **Pages** → connect to Git repository.
3. Framework preset: **None**. Build command: **leave blank**. Output directory: **`public`**. Branch: `main`.
4. Cloudflare D1 → create `mindgarden-db`, then in its SQL Console execute the statements in `schema.sql`.
5. Cloudflare Pages project → **Settings → Bindings** → Production → add **D1** with variable name `DB` and database `mindgarden-db`. Deploy a new production build after adding binding.
6. Open the Pages site's assigned `*.pages.dev` production URL and test multiplayer from two separate devices.

> If your D1 database already has the `rooms` table and the four v2.2 fields (`round_number`, `game_type`, `host_total`, `guest_total`), **do not** run `schema.sql` or migrations again.

## Local development

`npm install` followed by `npm run dev` to use Wrangler Pages local development. An actual Cloudflare D1 database binding is needed for multiplayer testing; offline single-player games do not require it. `npm run check` checks JS syntax.

## Privacy and accessibility

Local player progress and personal photos remain in device localStorage, unless a user explicitly shares an online game name/room score. Online rooms retain player display names, random session tokens and results in Cloudflare D1. Do not share sensitive medical information or identifiable photos as multiplayer names. Rooms expire for access after 24 hours; stored room rows are not automatically purged in this build. Cloud sync, authenticated accounts and caregiver sharing permissions have not been implemented.

Adjust Music, Large text, High contrast, Motion and Break reminders under Settings. Users sensitive to motion should switch **Stop moving pictures** on. System `prefers-reduced-motion` also disables CSS animations.

## Key limitations

- Two online players per room, not three or four.
- Five existing multiplayer families with short and longer question variants; not every solo game works online.
- 15 levels are user-selectable, not medically validated.
- No clinical claims. Test with seniors and carers before public launch.
- See `UPGRADE-v2.3.md` for detailed upgrade and test steps.
