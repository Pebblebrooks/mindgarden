# Mind Garden maintenance

After every app update, review the About documentation and update it wherever the change affects players. This is a standing user requirement.

- Keep English and Chinese documentation aligned with actual shipped behaviour.
- Review Latest improvements, first-time setup, user guide, FAQs and control/menu paths; remove stale descriptions of changed features.
- Describe only implemented behaviour. Keep proposed features and testing limits in developer documentation.
- The displayed About version comes from the release metadata generated from package.json; bump the release version when packaging/deploying.
- Check About as part of release validation. Record what was updated, or why no documentation change was applicable.
- Keep local qa-*.html/js harnesses and .openai preview configuration out of Cloudflare release packages.

## Standing UI alignment rule

- Centre popup headings, labels and explanatory paragraphs per the approved November 15 revision. Keep structured lists readable; avoid text-align-last justification.
- Do not apply blanket centring to paragraph/list text or inherit a centred last line from a parent. Follow the user's reference: centred heading/disclosure header above left-aligned multi-line instructions.
- Keep existing button labels, compact controls and game-answer layouts unless separately requested. This rule does not require changing their alignment.
- Verify English and Chinese, light and dark modes, mobile/desktop, and enlarged text.

## Account and player flow contract

- Keep Choose player/Edit name separate from online account tasks. Rename retains the same profile and history; adding a new player starts empty.
- Sign in is an existing-account form. Create account is a separate form reached from Online account. Neither form contains player selection, exports or the other form's inputs.
- Successful creation/reset opens a dedicated Save login details step before selecting players. Failed creation must never claim success or generate a recovery key locally.
- Copy only explicitly selected players; retain device originals, never merge records by name. Credentials must never enter player exports.
- All menu screens offer direct Close and Escape, without forcing a chain of Back buttons.
- Review changes against the approved references and actual rendered screens, not just generated mockups. Preserve these contracts in integration tests.

- The rename dialog may offer a separate optional Online account shortcut plus a purpose info button. Keep authentication forms on separate screens; never save a pending name implicitly when opening account options.
- Name the current welcome background in a centred page footer, following scenery, personal photo/video and language changes.
- Call current credentials passwords and recovery keys. Device downloads must be explicit and disclose that login files are unencrypted. Do not label password downloads as WebAuthn passkeys.

## Personal profiles and device records

- Restore display, language, sound, home cards, selected games and per-game difficulty by stable profile ID on sign-in/player switch. A name change never creates a new identity.
- Place Customise my home in the menu, never on the welcome page and show whose settings are being edited. Never confuse hiding a card or removing a favourite with deleting scores.
- Do not trim local activity or multiplayer history automatically. Preserve independent device copies of account players through sign-out and remote profile replacement. Keep them out of account exports.
- Player-card deletion applies only to the explicitly named card; history deletion applies only to the selected player, require the exact player name, and require account reauthentication for connected players. Do not claim person-only access control for unprotected shared browsers/group accounts.
- Keep WebAuthn passkeys distinct from passwords and recovery keys. Native device authentication requires real server verification; show no simulated success in production. The portable review must clearly label simulated credentials.
- Explain that local copies survive sign-out and remain accessible in that browser. Browser clearing/eviction and finite capacity require backup guidance; do not promise permanent storage.

- Keep visible copy concise; put optional explanations in attached info buttons. Visible games and favourites share the same scrollable selector. Password visibility controls must never cover their input.

## Game result popup format

- Use Replay followed by Next level for a completed solo level. Omit Next level at the final level and for unscored practice. Never abbreviate it to Next when that could mean a different game.
- Use icon-only result actions with accessible bilingual labels and hover/focus/long-press help. Settings uses a gear; hints use a larger filled yellow bulb with rays. Put Easier level and conditional Next selected game in Settings; no More drawer.
- Centre popup text, including the garden-growth status.
- Close returns to the originating games list. Show Back only on related Options/break screens and preserve the result without re-awarding it. Icons require accessible names and comfortable touch targets.

## Approved gameplay layout (November 15)

- Gameplay uses a plain background, with no scenery toggle. The title, content and footer share a centred maximum 720px column. Home, Pause, Hint and Options are borderless icons in one centred row below progress. Leave 32px after answers, 16px between round label and dots, and 28px before controls. Exit confirmation has one border, centred Confirm Exit? / Game will not be saved text and icon-only cancel/exit actions; completed results retain truthful saved-result wording.
- Any action that discards unfinished gameplay requires confirmation; cancellation preserves the round. Ordinary menu Back returns one step without confirmation. Use shared catalogue card markup and a single visible circled info icon. Settings pauses solo play and resumes when dismissed.
- All games offer contextual help. Existing scored/assisted rules remain explicit; never silently give multiplayer answer advantages.
- Domino opponent turns run automatically after a brief delay and stop while paused or after leaving.
- Numbered grid routes replace outline tracing in Connect the Dots: ordered checkpoints, adjacent steps, no reused cells, validated solvability and varied ranks.

## Gameplay viewport contract
- Keep essential game controls visible without scrolling on phone, tablet and desktop, including landscape. Reserve a separate control area; long task content must not push it out of view.
- Preserve readable text and at least 44px touch targets. Use compact landscape layouts and disclosures for secondary information; never hide answers or clip essential actions to fake a fit.
- Test enlarged text, short viewports, keyboard opening, popup primary actions and exit confirmation before release. Record unverified game-specific exceptions.
- Do not let room invitation banners cover active game controls.

## Gameplay copy and normal-size layout (November 16)

- Keep the immediate task instruction short. Put longer optional rules and explanations behind a labelled info control or collapsed disclosure when they interfere with gameplay. Never hide the actual question, answers or essential progress/actions.
- At 100% text size, every desktop/tablet game must fit its available play area. Adapt board/card sizes and placement before allowing essential content to overflow; retain readable text and comfortable targets.
- Report the exact live viewport, language, difficulty and state coverage. Do not certify every possible state from a sampled sweep.

## Approved icon and layout revision (November 17)

This newer approval supersedes the earlier icon-only result and exit guidance above.
- Back and Close have distinct destinations and sit in the gameplay header. Pause, Hint and Settings use one labelled footer row; the gear opens Settings, including Change level.
- Completed solo results put labelled Done first, followed by Replay and conditional Next level. Additional result actions stay in More options. Movement completion has no active-game toolbar.
- Confirm unfinished exits with labelled Keep playing and Exit. Completed activities close immediately.
- Use small consistent circled information glyphs within 48px touch areas: welcome-card top-right; catalogue-card top-centre. Remove favourite uses minus-in-circle, not Close or Delete.
- Keep sign-in identity separate from save status. Account photos are optional device-local media, keyed separately from players; never imply cross-device photo sync.

## Gameplay review follow-up (November 17)
- Keep Language, Background sound and Game sound centred; space rows according to available width and height. Question text must be at least the answer-text size.
- Completion actions remain visible: Done, Replay, conditional Next level, Settings and Home. Do not hide navigation in More options or show active Pause after completion. Replay/Next level use the same icon-above-label treatment as gameplay.
- Never suppress the Matching Pairs header when session metadata is present. Reduced-motion petting retains static heart feedback.
