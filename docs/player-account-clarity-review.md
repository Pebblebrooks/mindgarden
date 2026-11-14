# Player and account clarity implementation

Implemented against v4.0.36 and included in the v4.0.37 release. Deployment verification is reported separately.

## Delivered
- Separate rename screen preserves profile identity and all retained records. New players start empty.
- Per-player Edit name and game counts; Delete is under Manage player. Online account is a separate navigation entry and optional storage section.
- Separate online storage choice, sign-in, creation, reset and authenticated recovery-key generation screens.
- Explicit selection before copying players to an empty or existing account. Original device profiles are preserved. Conflicting IDs create independent copies; names never merge automatically. Repeated copying can create duplicates, as explained in the screen.
- Optional Web Crypto password generation, browser password-manager saving when supported, optional server-generated recovery keys and private recovery downloads. No credentials in player storage/exports.
- Card-relative picture–word typography with long-label fitting after layout/translation changes. Text-size preferences increase the preferred size; very dense boards constrain it to avoid clipping.
- Updated English and Chinese About and account documentation. Existing account schema and passwords remain compatible; no extra SQL migration required for an installation already using account storage.

## Verification
- Account API: optional recovery generation, authentication, rate limits, old-key invalidation, isolation, revision conflicts and session revocation.
- Account integration: rename record preservation, selective copy, no automatic upload, ID collisions, password manager handoff, credential exclusion, separate device records on signout and saved account retrieval on signin; offline and conflict regression coverage.
- Browser: 224 combinations across 320/390/768/1280 widths, 100/200% text, English/Chinese, light/dark, and player/rename/account/signup/signin/recovery/picture-word screens. Zero horizontal dialog or word-card overflow after settling. Final compact signup and rename visually inspected.
- Observed example word sizes: 14 px on dense 320 px boards, 26.73 px on 1280 px boards at 100%; 44.28 px in one desktop 200% case. Long labels shrink as required by actual card dimensions.
- Release suites, account suites, pairing-language and menu-clarity checks passed.

## Limits
Account API tested with local test database and browser integration mocks, not live production credentials. Browser password-manager UI varies; unsupported browsers show guidance. Screenshots show local implementation and test fixtures, not deployed production. No real accounts were created or changed during visual QA.
