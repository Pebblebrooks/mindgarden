-- Additive account/profile storage. Existing game and multiplayer tables are unchanged.
CREATE TABLE IF NOT EXISTS mg_accounts (
 id TEXT PRIMARY KEY, username TEXT NOT NULL UNIQUE,
 salt TEXT NOT NULL, password_hash TEXT NOT NULL, recovery_hash TEXT NOT NULL,
 created_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS mg_account_sessions (
 token_hash TEXT PRIMARY KEY, account_id TEXT NOT NULL REFERENCES mg_accounts(id) ON DELETE CASCADE,
 expires_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS mg_account_sessions_owner ON mg_account_sessions(account_id);
CREATE TABLE IF NOT EXISTS mg_account_profiles (
 account_id TEXT PRIMARY KEY REFERENCES mg_accounts(id) ON DELETE CASCADE,
 revision INTEGER NOT NULL DEFAULT 0, document TEXT NOT NULL DEFAULT '{"schemaVersion":1,"profiles":{}}',
 updated_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS mg_account_limits (
 bucket TEXT PRIMARY KEY, attempts INTEGER NOT NULL, expires_at INTEGER NOT NULL
);
