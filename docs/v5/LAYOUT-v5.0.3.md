# v5.0.3 — compact game layout

Approved 16 November 2026 (Singapore).

- Remove Recently Played markup and search-update handling from All Games; retain category dropdown, search and history records.
- Shared solo controls: Home, Pause, Hint and Options sit together below progress. Borderless icons retain accessible names, hover/focus/long-press help, 48px touch targets and visible keyboard focus.
- Game title, prompt, content and footer use a centred maximum 720px column. Answers in Where does it belong use a narrower 540px row, equal compact widths and normal body text; enlarged text uses wider wrapped buttons.
- Increase this game's artwork to 112–144px and remove the surrounding tile border. Allow normal page scrolling rather than clipping it inside a height-limited game panel.
- Leave 32px after answers, 16px between round label and dots, 28px before controls, and 24px between control targets.
- Update bilingual About content and standing layout instructions.

Validation: build and syntax pass; v503-layout, v5-flow, game-ui-approved, release-cache, release-cleanup and About checks cover catalogue search without recents, bilingual controls, settings resume, exit cancellation and existing game behaviour. Initial desktop and phone 100% layouts were inspected in browser. Phone 200% testing identified the old inner scrolling constraint; the final CSS removes it. Local preview then continued serving an older cached stylesheet, so final large-text visual verification requires the deployed build. No new claim of full-app audit clearance; see AUDIT-v5.0.2.md for existing limitations.
