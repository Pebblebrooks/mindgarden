# v4.0.41 release checks — 14 November 2026

Account creation now confirms Account created · Signed in before credential saving. Download and password-manager feedback appears beside the action. Player copying has its own success confirmation. The navbar uses a verified session independently of whether account players have been selected, including after a responsive rebuild. Sign-out restores the device player and shows Continue / Switch player without renaming or deleting records.

## Verification

- `npm run build` and `npm run check`: passed.
- `npm run test:accounts`: passed existing account, profile, recovery and passkey checks plus the new account-status suite.
- New checks cover English/Chinese, delayed startup responses, signup before selecting players, pending password-manager requests, downloads, phone/tablet portrait and landscape resize events, rebuilt navigation, session reload, expired sessions and sign-out record preservation.
- `npm run test:release` and `npm run test:display`: passed.
- `tests/menu-preview.test.cjs`: passed with the portable app preview and isolated simulated account API.
- Browser preview: inspected the centred mobile creation confirmation, Account label in tablet landscape, selected-player save confirmation, and sign-out panel with the original device player. These are simulated accounts, not production credentials.

## Deployment

Use the existing GitHub main → Cloudflare Pages deployment with public as output. This release requires no database migration or secret changes. Existing passkey schema and account data are retained. Native password-manager dialogs, download completion and physical Face ID/fingerprint prompts remain controlled by each user's browser/device; a requested save is not proof that a file was saved.
