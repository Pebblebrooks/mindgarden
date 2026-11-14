-- Apply AFTER migrate-v4.0.33.sql. Additive and safe to re-run.
CREATE TABLE IF NOT EXISTS mg_account_passkeys (
 id TEXT PRIMARY KEY, account_id TEXT NOT NULL REFERENCES mg_accounts(id) ON DELETE CASCADE,
 rp_id TEXT NOT NULL, public_key TEXT NOT NULL, counter INTEGER NOT NULL,
 transports TEXT NOT NULL DEFAULT '[]', created_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS mg_account_passkeys_owner ON mg_account_passkeys(account_id);
CREATE TABLE IF NOT EXISTS mg_passkey_challenges (
 id TEXT PRIMARY KEY, kind TEXT NOT NULL, account_id TEXT,
 binding TEXT NOT NULL, challenge TEXT NOT NULL, origin TEXT NOT NULL,
 expires_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS mg_passkey_challenges_expiry ON mg_passkey_challenges(expires_at);
