-- Migration: 001_create_users
-- Users table for custom Express auth (bcrypt + JWT), with optional
-- Google OAuth linkage for later. password_hash is nullable because
-- Google-only accounts won't have a local password.

CREATE TABLE IF NOT EXISTS users (
  id              SERIAL PRIMARY KEY,
  email           VARCHAR(255) NOT NULL UNIQUE,
  password_hash   VARCHAR(255),
  full_name       VARCHAR(150) NOT NULL,
  avatar_url      TEXT,
  google_id       VARCHAR(255) UNIQUE,
  auth_provider   VARCHAR(20) NOT NULL DEFAULT 'local', -- 'local' | 'google'
  is_verified     BOOLEAN NOT NULL DEFAULT FALSE,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_google_id ON users(google_id);

-- Refresh tokens kept server-side so we can revoke them (logout / "logout
-- everywhere") instead of relying purely on short-lived JWTs.
CREATE TABLE IF NOT EXISTS refresh_tokens (
  id          SERIAL PRIMARY KEY,
  user_id     INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  token_hash  VARCHAR(255) NOT NULL,
  expires_at  TIMESTAMPTZ NOT NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  revoked_at  TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_refresh_tokens_user_id ON refresh_tokens(user_id);