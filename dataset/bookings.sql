-- Bookings Insertions

-- User 1: user1@x.com
WITH
  user1 AS (
    SELECT user_id FROM auth_providers WHERE email = 'user1@x.com'
  ),
  booking1_worker_service AS (
    SELECT ws.id AS worker_service_id
    FROM worker_service ws
    JOIN worker_profile wp ON ws.worker_id = wp.id
    JOIN services s ON ws.service_id = s.id
    WHERE wp.username = 'Ana Martínez' AND s.name = 'Haircut'
  )
INSERT INTO bookings (user_id, worker_service_id, booking_date, start_time, status)
SELECT
  user1.user_id,
  booking1_worker_service.worker_service_id,
  '2023-04-10'::date,
  '2023-04-10 10:00:00'::timestamp,
  ARRAY['COMPLETED']::status_type[]
FROM user1, booking1_worker_service;

WITH
  user1 AS (
    SELECT user_id FROM auth_providers WHERE email = 'user1@x.com'
  ),
  booking2_worker_service AS (
    SELECT ws.id AS worker_service_id
    FROM worker_service ws
    JOIN worker_profile wp ON ws.worker_id = wp.id
    JOIN services s ON ws.service_id = s.id
    WHERE wp.username = 'Luis Gómez' AND s.name = 'Manicure'
  )
INSERT INTO bookings (user_id, worker_service_id, booking_date, start_time, status)
SELECT
  user1.user_id,
  booking2_worker_service.worker_service_id,
  '2023-12-15'::date,
  '2023-12-15 14:00:00'::timestamp,
  ARRAY['CONFIRMED']::status_type[]
FROM user1, booking2_worker_service;

-- User 2: user2@x.com
WITH
  user2 AS (
    SELECT user_id FROM auth_providers WHERE email = 'user2@x.com'
  ),
  booking3_worker_service AS (
    SELECT ws.id AS worker_service_id
    FROM worker_service ws
    JOIN worker_profile wp ON ws.worker_id = wp.id
    JOIN services s ON ws.service_id = s.id
    WHERE wp.username = 'María López' AND s.name = 'Massage Therapy'
  )
INSERT INTO bookings (user_id, worker_service_id, booking_date, start_time, status)
SELECT
  user2.user_id,
  booking3_worker_service.worker_service_id,
  '2023-05-20'::date,
  '2023-05-20 11:00:00'::timestamp,
  ARRAY['COMPLETED']::status_type[]
FROM user2, booking3_worker_service;

WITH
  user2 AS (
    SELECT user_id FROM auth_providers WHERE email = 'user2@x.com'
  ),
  booking4_worker_service AS (
    SELECT ws.id AS worker_service_id
    FROM worker_service ws
    JOIN worker_profile wp ON ws.worker_id = wp.id
    JOIN services s ON ws.service_id = s.id
    WHERE wp.username = 'Carlos Rodríguez' AND s.name = 'Aromatherapy'
  )
INSERT INTO bookings (user_id, worker_service_id, booking_date, start_time, status)
SELECT
  user2.user_id,
  booking4_worker_service.worker_service_id,
  '2024-01-10'::date,
  '2024-01-10 16:00:00'::timestamp,
  ARRAY['CONFIRMED']::status_type[]
FROM user2, booking4_worker_service;

-- User 3: user3@x.com
WITH
  user3 AS (
    SELECT user_id FROM auth_providers WHERE email = 'user3@x.com'
  ),
  booking5_worker_service AS (
    SELECT ws.id AS worker_service_id
    FROM worker_service ws
    JOIN worker_profile wp ON ws.worker_id = wp.id
    JOIN services s ON ws.service_id = s.id
    WHERE wp.username = 'Laura Pérez' AND s.name = 'Tutoring'
  )
INSERT INTO bookings (user_id, worker_service_id, booking_date, start_time, status)
SELECT
  user3.user_id,
  booking5_worker_service.worker_service_id,
  '2023-06-15'::date,
  '2023-06-15 09:00:00'::timestamp,
  ARRAY['COMPLETED']::status_type[]
FROM user3, booking5_worker_service;

WITH
  user3 AS (
    SELECT user_id FROM auth_providers WHERE email = 'user3@x.com'
  ),
  booking6_worker_service AS (
    SELECT ws.id AS worker_service_id
    FROM worker_service ws
    JOIN worker_profile wp ON ws.worker_id = wp.id
    JOIN services s ON ws.service_id = s.id
    WHERE wp.username = 'Juan Hernández' AND s.name = 'Language Classes'
  )
INSERT INTO bookings (user_id, worker_service_id, booking_date, start_time, status)
SELECT
  user3.user_id,
  booking6_worker_service.worker_service_id,
  '2023-11-20'::date,
  '2023-11-20 13:00:00'::timestamp,
  ARRAY['CONFIRMED']::status_type[]
FROM user3, booking6_worker_service;