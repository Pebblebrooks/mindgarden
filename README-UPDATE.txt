Mind Garden v4.0.39 — direct menu exit

Adds a visible sticky Close button and Escape-key dismissal for navigation and
account menus, without backing through earlier screens. Existing Back buttons
remain available. Active gameplay result dialogs retain their own actions.
Bilingual About documentation explains the controls.

Account registration is still controlled by production MG_ACCOUNT_SIGNUP=enabled.
This release does not change that server setting. Preserve DB and MG_ACCOUNT_PEPPER.
No SQL migration is required.

Deploy main to the existing Cloudflare Pages project, output public.
For manual updates remove obsolete garden-ui-4038.js/css, use 4039 assets.
Rollback to v4.0.38 without modifying database records or secrets.
