INSERT INTO worker_service (worker_id, service_id, price, duration, is_online)
VALUES
  -- Bella Salon Workers
  (
    (SELECT wp.id FROM worker_profile wp JOIN providers p ON wp.provider_id = p.id WHERE p.name = 'Bella Salon' AND wp.username = 'Ana Martínez'),
    (SELECT s.id FROM services s WHERE s.name = 'Haircut'),
    30.00, -- Precio en la moneda correspondiente
    45,    -- Duración en minutos
    FALSE
  ),
  (
    (SELECT wp.id FROM worker_profile wp JOIN providers p ON wp.provider_id = p.id WHERE p.name = 'Bella Salon' AND wp.username = 'Ana Martínez'),
    (SELECT s.id FROM services s WHERE s.name = 'Facial'),
    50.00,
    60,
    TRUE
  ),
  (
    (SELECT wp.id FROM worker_profile wp JOIN providers p ON wp.provider_id = p.id WHERE p.name = 'Bella Salon' AND wp.username = 'Luis Gómez'),
    (SELECT s.id FROM services s WHERE s.name = 'Manicure'),
    25.00,
    30,
    FALSE
  ),
  (
    (SELECT wp.id FROM worker_profile wp JOIN providers p ON wp.provider_id = p.id WHERE p.name = 'Bella Salon' AND wp.username = 'Luis Gómez'),
    (SELECT s.id FROM services s WHERE s.name = 'Pedicure'),
    30.00,
    35,
    FALSE
  ),

  -- Zen Spa Center Workers
  (
    (SELECT wp.id FROM worker_profile wp JOIN providers p ON wp.provider_id = p.id WHERE p.name = 'Zen Spa Center' AND wp.username = 'María López'),
    (SELECT s.id FROM services s WHERE s.name = 'Massage Therapy'),
    60.00,
    60,
    TRUE
  ),
  (
    (SELECT wp.id FROM worker_profile wp JOIN providers p ON wp.provider_id = p.id WHERE p.name = 'Zen Spa Center' AND wp.username = 'Carlos Rodríguez'),
    (SELECT s.id FROM services s WHERE s.name = 'Aromatherapy'),
    40.00,
    45,
    TRUE
  ),

  -- TechFix Solutions Workers
  (
    (SELECT wp.id FROM worker_profile wp JOIN providers p ON wp.provider_id = p.id WHERE p.name = 'TechFix Solutions' AND wp.username = 'Sofía Fernández'),
    (SELECT s.id FROM services s WHERE s.name = 'Computer Repair'),
    80.00,
    90,
    TRUE
  ),
  (
    (SELECT wp.id FROM worker_profile wp JOIN providers p ON wp.provider_id = p.id WHERE p.name = 'TechFix Solutions' AND wp.username = 'Pedro Sánchez'),
    (SELECT s.id FROM services s WHERE s.name = 'Network Setup'),
    100.00,
    120,
    TRUE
  ),

  -- Smart Learning Workers
  (
    (SELECT wp.id FROM worker_profile wp JOIN providers p ON wp.provider_id = p.id WHERE p.name = 'Smart Learning' AND wp.username = 'Laura Pérez'),
    (SELECT s.id FROM services s WHERE s.name = 'Tutoring'),
    40.00,
    60,
    TRUE
  ),
  (
    (SELECT wp.id FROM worker_profile wp JOIN providers p ON wp.provider_id = p.id WHERE p.name = 'Smart Learning' AND wp.username = 'Juan Hernández'),
    (SELECT s.id FROM services s WHERE s.name = 'Language Classes'),
    35.00,
    60,
    TRUE
  ),

  -- Green Thumbs Workers
  (
    (SELECT wp.id FROM worker_profile wp JOIN providers p ON wp.provider_id = p.id WHERE p.name = 'Green Thumbs' AND wp.username = 'Mónica Ramírez'),
    (SELECT s.id FROM services s WHERE s.name = 'Landscape Design'),
    150.00,
    180,
    FALSE
  ),
  (
    (SELECT wp.id FROM worker_profile wp JOIN providers p ON wp.provider_id = p.id WHERE p.name = 'Green Thumbs' AND wp.username = 'Andrés Torres'),
    (SELECT s.id FROM services s WHERE s.name = 'Lawn Mowing'),
    25.00,
    30,
    FALSE
  ),
  (
    (SELECT wp.id FROM worker_profile wp JOIN providers p ON wp.provider_id = p.id WHERE p.name = 'Green Thumbs' AND wp.username = 'Andrés Torres'),
    (SELECT s.id FROM services s WHERE s.name = 'Garden Maintenance'),
    30.00,
    45,
    FALSE
  );