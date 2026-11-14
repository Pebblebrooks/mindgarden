# v4.0.40 release checks — 14 November 2026

The approved compact menu, personal-profile, password-download and optional passkey changes were reconciled with production v4.0.39. The release retains the reviewed implementation and rebuilds its versioned assets.

## Automated verification

- `npm run build` and `npm run check`: passed.
- `npm run test:accounts`: passed account creation/recovery, account isolation, selective player copying, credential downloads, profile restoration, retained device records, device-sign-in UI and real signed WebAuthn assertions.
- `npm run test:display`: passed dashboard selection, player isolation, restore and backup round-trip checks.
- `npm run test:release`: passed menus, bilingual navigation, responsive navbar budgets, direct Close/Escape, current About documentation and atomic offline cache checks.
- `npm test`: passed eight-client multiplayer flows, rankings, rename, scenes and per-player preferences. The older modular multiplayer fixture now loads account-sync and info-help, matching the rename dialog's production dependencies.
- Confirmed the exact Save Password to Device / Save Recovery Key to Device labels and the single Removed from My Games · Scores kept message in the production bundle.
- Checked versioned script/style references, required API/passkey files and absence of conflict markers or demo recovery credentials in the production bundle.
- The language catalogue excludes local qa-* scripts; rebuilding no longer imports stale preview phrases.

About documentation was reviewed in both languages. It describes separated account tasks, personal settings and local copies, concise menu paths, device downloads and optional passkeys. The displayed version is generated from package.json.

## Deployment and remaining device verification

Deploy through the existing Cloudflare Pages project connected to main, with public as its output. Apply migrate-passkeys.sql to the existing DB binding only if enabling device sign-in. Preserve MG_ACCOUNT_PEPPER and existing player data. README-UPDATE.txt and README-PASSKEYS.md contain setup and rollback instructions.

Automated native-API stubs and cryptographic tests do not verify a physical Face ID/fingerprint prompt. Enrollment, sign-in and cancellation on supported personal devices remain deployment checks. The portable preview simulates accounts explicitly; production calls the real account API. Do not equate successful publication with successful native-device enrollment.
