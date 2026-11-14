Mind Garden v4.0.37 — clearer players, accounts and readable word cards

CHANGES
- Separate player selection, Edit name, and optional online account screens.
- Renaming keeps the same profile and all its retained records; new players start empty.
- Select device players explicitly before copying them into an account. Device originals
  remain separate. Conflicting IDs create independent copies; names never merge.
- Optional strong password generation and browser password-manager saving where supported.
- Optional recovery-key generation at registration or later with the current password.
  Save the recovery file privately. Generating a replacement invalidates the previous key.
- Word-picture cards scale their text with card size and fit long English/Chinese labels.
- Cream-and-green light forms, updated dark forms and bilingual About guidance.

INSTALL / UPDATE
GitHub production branch: main. Cloudflare Pages output directory: public.
Preserve functions/, existing build settings, DB binding, MG_ACCOUNT_PEPPER and
MG_ACCOUNT_SIGNUP. No new SQL migration or secret changes are needed for an
installation already using the v4.0.33 account schema. Do not clear player data.
For manual repository updates, remove obsolete public/garden-ui-4036.js and .css.
Verify About v4.0.37 and garden-ui-4037.js / garden-ui-4037.css after deployment.
Close and reopen old app tabs to load the update.

VALIDATION
Account API and integration tests cover optional recovery generation, old-key invalidation,
record-preserving rename, selective copying, ID collisions, credential exclusion,
sign-in/signout, offline retry, and conflict protection. Release checks passed.
224 browser layout combinations passed across desktop/mobile widths, 100/200% text,
English/Chinese and light/dark modes. Browser password-manager prompts vary by browser.
No real production accounts were created or changed during QA.

ROLLBACK
Restore the previous successful Cloudflare Pages v4.0.36 deployment.
No database rollback is needed. Keep the existing secrets and all player records.
Copyright 2026 Pebblebrooks.
