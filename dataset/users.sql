-- 1) Insert 9 users into "users" table: 1 ADMIN, 5 PROVIDER_OWNER, 3 USER
INSERT INTO users (role, created_at)
VALUES
  ('ADMIN', CURRENT_TIMESTAMP),
  ('PROVIDER_OWNER', CURRENT_TIMESTAMP), -- 1
  ('PROVIDER_OWNER', CURRENT_TIMESTAMP), -- 2
  ('PROVIDER_OWNER', CURRENT_TIMESTAMP), -- 3
  ('PROVIDER_OWNER', CURRENT_TIMESTAMP), -- 4
  ('PROVIDER_OWNER', CURRENT_TIMESTAMP), -- 5
  ('USER', CURRENT_TIMESTAMP),           -- 1
  ('USER', CURRENT_TIMESTAMP),           -- 2
  ('USER', CURRENT_TIMESTAMP);           -- 3

-- 2) Now link each of those 9 user rows with an auth_account, all using "CREDENTIALS".
--    We match them by selecting in order of creation (using OFFSET).
--    provider_id is a manual primary key (no autoincrement).
--    Use the same emails and hashed passwords from snippet if desired, or your own.

INSERT INTO auth_providers (provider_id, user_id, provider_type, email, password)
VALUES
  -- ADMIN user (first row)
  (1,
    (SELECT id FROM users ORDER BY id LIMIT 1 OFFSET 0),
    'CREDENTIALS',
    'admin@maat.com',
    '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewwxPr0HUrb.GocG' -- admin123
  ),

  -- 5 PROVIDER_OWNERs (rows 2..6)
  (2,
    (SELECT id FROM users ORDER BY id LIMIT 1 OFFSET 1),
    'CREDENTIALS',
    'salon@x.com',
    '$2a$12$dR7DQr8hoKfMgxL7OC1tFev8rT4NGhZ0IX7w0yTEtWF6YgY0fM4lK' -- salon123
  ),
  (3,
    (SELECT id FROM users ORDER BY id LIMIT 1 OFFSET 2),
    'CREDENTIALS',
    'spa@x.com',
    '$2a$12$9F4ka0dR7DQr8hoKfM0yTEtWF6YgY0fM4lK' -- spa123
  ),
  (4,
    (SELECT id FROM users ORDER BY id LIMIT 1 OFFSET 3),
    'CREDENTIALS',
    'tech@x.com',
    '$2a$12$9F4ka0dR7DQr8hoKfM0yTEtWF6YgY0fM4lK' -- spa123 reused
  ),
  (5,
    (SELECT id FROM users ORDER BY id LIMIT 1 OFFSET 4),
    'CREDENTIALS',
    'teacher@x.com',
    '$2a$12$9F4ka0dR7DQr8hoKfM0yTEtWF6YgY0fM4lK' -- spa123 reused
  ),
  (6,
    (SELECT id FROM users ORDER BY id LIMIT 1 OFFSET 5),
    'CREDENTIALS',
    'garden@x.com',
    '$2a$12$9F4ka0dR7DQr8hoKfM0yTEtWF6YgY0fM4lK' -- spa123 reused
  ),

  -- 3 USERs (rows 7..9)
  (7,
    (SELECT id FROM users ORDER BY id LIMIT 1 OFFSET 6),
    'CREDENTIALS',
    'user1@x.com',
    '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8'
  ),
  (8,
    (SELECT id FROM users ORDER BY id LIMIT 1 OFFSET 7),
    'CREDENTIALS',
    'user2@x.com',
    '$2a$12$dR7DQr8hoKfMgxL7OC1tFev8rT4NGhZ0IX7'
  ),
  (9,
    (SELECT id FROM users ORDER BY id LIMIT 1 OFFSET 8),
    'CREDENTIALS',
    'user3@x.com',
    '$2a$12$9F4ka0dR7DQr8hoKfM0yTEtWF6YgY0fM4lK'
  );