# Mind Garden v5.0.19 review

Prepared 17 November 2026. Approved for commit and Cloudflare Pages deployment. Deployment outcome is recorded separately after verification.

## Changes

- Move & Remember now has one voice control, one language control, a horizontal stage indicator and one gameplay action row. Render lifecycle cleanup prevents accumulating controls.
- Completed activities show labelled Done, Replay and conditional Next level actions. Unfinished exits show labelled Keep playing and Exit actions; cancelling restores pause state.
- Shared gameplay controls use consistent SVG symbols and labels. Time later groups the question, starting time and answers together with compact progress spacing.
- Welcome information icons share a top-right position. Catalogue information icons are centred in the card's top row; remove uses a minus symbol and search sits on the right.
- Account and Account settings show the same prominent identity, separate from the current player. Optional account photos are saved on this device, with initials as fallback; photos are not uploaded or synced.
- English and Chinese guide text, version and release assets updated.

## Validation

Passed syntax/build checks and targeted suites for movement activity (48 bilingual flows), mobile gameplay, account menu and status, results, menu navigation, shared menus, About documentation and release cache. Movement tests cover duplicate controls, pause/settings, unfinished exits and completion. Account tests include identity and photo-key isolation.

Browser checks covered phone, landscape, tablet and desktop layouts. Time later retained all six answers at 375 × 600 with 140% text. Other inspected sizes: 390 × 664, 844 × 390, 768 × 900 and 1363 × 936. Light/dark and English/Chinese views were inspected. Attached screenshots show the actual local app.

## Remaining device verification

Physical iPhone voice/audio playback and its native photo chooser remain to be checked. The cloud browser had no matching narration voice and displayed the fallback. Account layout previews used simulated integration-test account data, not a live account. This is targeted regression testing, not certification of every game and device.

## Group-play first release (17 November)

Added host join notices and optional chimes, one reminder after 30 seconds, explicit I’m here acknowledgement, Keep hosting/Close room choices, and manual WhatsApp invitation links. New messages are short and bilingual. Joining is suspended after 45 seconds without a host heartbeat; waiting rooms expire after two minutes without host presence or arrival acknowledgement. Polling alone never acknowledges an arrival. Active games retain their existing lifecycle.

Availability is checked on server requests and enforced before listing/joining/renewing rooms. No scheduled job or browser-close event is required: an expired room cannot accept a new join even if nobody was polling when its deadline passed. The additive availability table/triggers initialize through the room API, following the existing membership upgrade approach; no production database was changed during this work.

Passed room availability tests, bilingual host/guest UI tests (including sound deduplication/reminder/mute), eight-player UI and multi-room directory tests, session lifecycle, About, release cache and syntax/build checks. One existing session test still asserted the obsolete one-room restriction; it now verifies the already-supported multiple-room behaviour.

Browser review uses rendered integration-test snapshots at 375 × 667, with sample identities. It is not a live Cloudflare multiplayer test. Physical iPhone chimes and the WhatsApp app handoff still need device verification; no WhatsApp message was sent. Alerts are in-app only, and browser suspension can delay them. The server timeout is independent of alert playback.
