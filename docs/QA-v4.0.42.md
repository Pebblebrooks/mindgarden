# Account feedback and regression review — v4.0.42

Reviewed 14 November 2026. Base: e42e759dc3183c059fc346c42984343bf27a34b1 (v4.0.41).

## Implemented

- Account form feedback sits beside the submit action and scrolls into view. Creating account, Signing in and Resetting password states identify the operation; repeated form submissions are blocked. A failed request retains inputs and offers Try again.
- Password generation explicitly asks the user to complete creation/reset. Generating a password is not reported as account creation.
- The persistent server-confirmed creation screen identifies the signed-in account, retains explicit credential-saving controls, and requires Continue to players. Player upload confirmation remains separate from account creation.
- Navbar displays the account username with a person icon when the server session is valid, or Sign in otherwise. Long names use ellipsis; the accessible label and account menu retain the full name. The underlying account has a username, not a separate display-name field. Local player replaces the longer signed-out status.
- Password-manager feedback appears immediately, before the browser prompt resolves; file-download feedback does not claim the operating system saved a file.
- Account requests time out after 25 seconds. Interrupted creation is reported as unconfirmed, advising sign-in before another creation attempt.
- Sync verifies the server session even with no pending local edits, instead of reporting Saved without contacting the server.
- Player-copy loading and initial account exit now catch asynchronous failures and display an error.
- Local players and separate account copies keep their existing identities and histories through sign-out. No schema or database migration changes.
- English/Chinese About improvements and account help updated. Generated UI, version metadata and service-worker manifest rebuilt coherently for v4.0.42.

## Validation

90 existing test scripts passed across the broad audit and targeted reruns. This includes account API/flow/status, passkeys, local storage failure, profile restoration, multilingual UI, navbar width budgeting, game rules, multiplayer synchronization, media lifecycle, About, release assets and offline caching. All configured syntax checks passed; git diff --check passed.

The full original-game session test passed all 15 difficulty batches: 1,800 sessions and 10,920 correctly answered rounds across English/Chinese and light/dark state. These are DOM simulations, not rendered screen checks.

The account regression tests additionally exercise pending submissions, repeated Enter, server rejection, retry, persistent success, separate player upload, password-manager prompts that remain open, startup/auth races, expired sessions with no edits, sign-out preservation and orientation/rebuild state.

Three older tests were updated to exercise the current category dropdown, Backup and data settings action, and player-specific Edit name controls. An online-expansion test interrupted by the versioned asset rebuild passed on rerun. The pet rollback test passed after fetching its historical comparison commit. The initial 100-second full-session timeout was resolved by running the full test to completion without that short audit timeout.

## Limits and follow-up

- Chromium cannot launch in this execution environment: its process-singleton Unix socket is denied. Existing garden-ui.test.cjs and the new account-feedback-browser.test.cjs therefore remain unverified here. The new test covers real rendered account feedback, long names, 320/390/768/844/1024-pixel layouts, 200% text, Chinese, failures and retries. Run with `BROWSER_EXECUTABLE=<chromium path> npm run test:account-browser` in a browser-capable environment.
- menu-preview.test.cjs requires a separately generated portable preview argument and was not applicable to this repository release audit.
- Physical phones/tablets, real password-manager prompts, real passkey hardware and live Cloudflare account storage have not been verified in this turn. No production accounts were created for testing.
- Saved on a review branch; production deployment is not claimed. Review the browser checks before promoting to main. This is a bounded regression audit, not a guarantee that every possible app defect has been eliminated.
