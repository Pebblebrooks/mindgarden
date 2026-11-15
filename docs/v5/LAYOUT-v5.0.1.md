# v5.0.1 approved layout revision

- Approved welcome Option A: larger live title and tagline directly over scenery, subtle shading for readability, no title box, quiet lower-left scenery caption. Existing backgrounds and game actions are retained.
- Centre menu and home/catalogue card labels independently of leading icons and trailing status/info controls.
- Keep menu sections at natural content height so the scroll panel cannot shrink them into overlapping rows.
- Shared solo game chrome: bounded 720px Home/level/Pause toolbar; progress above grouped Hint/Options controls. Game-specific board tools remain with their boards.
- Active-round exit: single border, Confirm Exit? / Game will not be saved, cancel and exit icons. Hide the suspended pause overlay behind the native dialog, retaining cancellation/resume behaviour. Completed results retain truthful saved-result messaging.
- Restore the All Games category dropdown; retain search, recent games and compact cards. Centre its footer.
- About: centre headings/disclosure titles; left-align paragraphs/lists. Update bilingual gameplay and catalogue documentation.

Validation: build, syntax checks, v5-flow and game-ui-approved tests passed, including cancel/resume, bilingual hints and 180 route solutions. Browser checked desktop light at 200% text, desktop dark at 100%, menu spacing, About computed alignment, category dropdown/footer alignment and 390x844 dark phone gameplay/confirmation. Full real-device, multiplayer and exhaustive layout coverage were not rerun for this UI revision. No backend, database, account secrets or main-branch changes.
