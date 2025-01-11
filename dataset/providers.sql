
INSERT INTO categories (id, name)
VALUES
  (1, 'Belleza'),
  (2, 'Tecnología'),
  (3, 'Educación'),
  (4, 'Jardinería'),
  (5, 'Spa');
  
  INSERT INTO brands (id, name, color_primary, color_secondary)
VALUES
  (1, 'BeautyCo', '#FF4081', '#C51162'),
  (2, 'TechPro', '#2196F3', '#0D47A1'),
  (3, 'EduTech', '#4CAF50', '#1B5E20');
  
INSERT INTO providers (
  brand_id,
  user_id,
  category_id,
  name,
  description,
  color_primary,
  color_secondary,
  phone_number,
  image_url,
  service_types,
  verified,
  subscription_date
)
VALUES
  -- Bella Salon
  (
    1,
    (SELECT id FROM users ORDER BY id LIMIT 1 OFFSET 1),
    1,
    'Bella Salon',
    'Salón de belleza profesional con servicios premium',
    '#FF4081',
    '#C51162',
    '+54911234567',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYZxGeNLdR5A6DfUyrMfRmBCj8Zb6sH5hGNw&s',
    '{"LOCAL","HOME"}'::service_type[],
    true,
    CURRENT_TIMESTAMP
  ),
  -- Zen Spa Center
  (
    null,
    (SELECT id FROM users ORDER BY id LIMIT 1 OFFSET 2),
    5,
    'Zen Spa Center',
    'Centro de relajación y bienestar',
    '#9C27B0',
    '#4A148C',
    '+54922345678',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYZxGeNLdR5A6DfUyrMfRmBCj8Zb6sH5hGNw&s',
    '{"LOCAL"}'::service_type[],
    true,
    CURRENT_TIMESTAMP
  ),
  -- TechFix Solutions
  (
    2,
    (SELECT id FROM users ORDER BY id LIMIT 1 OFFSET 3),
    2,
    'TechFix Solutions',
    'Servicios de reparación y soporte técnico',
    '#2196F3',
    '#0D47A1',
    '+54933456789',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYZxGeNLdR5A6DfUyrMfRmBCj8Zb6sH5hGNw&s',
    '{"HOME","ONLINE","MOBILE"}'::service_type[],
    true,
    CURRENT_TIMESTAMP
  ),
  -- Smart Learning
  (
    3,
    (SELECT id FROM users ORDER BY id LIMIT 1 OFFSET 4),
    3,
    'Smart Learning',
    'Tutorías personalizadas y cursos online',
    '#4CAF50',
    '#1B5E20',
    '+54944567890',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYZxGeNLdR5A6DfUyrMfRmBCj8Zb6sH5hGNw&s',
    '{"ONLINE","HOME"}'::service_type[],
    true,
    CURRENT_TIMESTAMP
  ),
  -- Green Thumbs
  (
    null,
    (SELECT id FROM users ORDER BY id LIMIT 1 OFFSET 5),
    4,
    'Green Thumbs',
    'Servicios de jardinería y paisajismo',
    '#8BC34A',
    '#33691E',
    '+54955678901',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYZxGeNLdR5A6DfUyrMfRmBCj8Zb6sH5hGNw&s',
    '{"HOME","MOBILE"}'::service_type[],
    true,
    CURRENT_TIMESTAMP
  );

  INSERT INTO labor_shift (worker_id, day_of_week, start_time, end_time)
VALUES
  -- Bella Salon Workers
  (
    (SELECT wp.id FROM worker_profile wp JOIN providers p ON wp.provider_id = p.id WHERE p.name = 'Bella Salon' AND wp.username = 'Ana Martínez'),
    'Monday',
    '09:00:00',
    '17:00:00'
  ),
  (
    (SELECT wp.id FROM worker_profile wp JOIN providers p ON wp.provider_id = p.id WHERE p.name = 'Bella Salon' AND wp.username = 'Ana Martínez'),
    'Wednesday',
    '09:00:00',
    '17:00:00'
  ),
  (
    (SELECT wp.id FROM worker_profile wp JOIN providers p ON wp.provider_id = p.id WHERE p.name = 'Bella Salon' AND wp.username = 'Luis Gómez'),
    'Tuesday',
    '10:00:00',
    '18:00:00'
  ),
  (
    (SELECT wp.id FROM worker_profile wp JOIN providers p ON wp.provider_id = p.id WHERE p.name = 'Bella Salon' AND wp.username = 'Luis Gómez'),
    'Thursday',
    '10:00:00',
    '18:00:00'
  ),

  -- Zen Spa Center Workers
  (
    (SELECT wp.id FROM worker_profile wp JOIN providers p ON wp.provider_id = p.id WHERE p.name = 'Zen Spa Center' AND wp.username = 'María López'),
    'Monday',
    '08:00:00',
    '16:00:00'
  ),
  (
    (SELECT wp.id FROM worker_profile wp JOIN providers p ON wp.provider_id = p.id WHERE p.name = 'Zen Spa Center' AND wp.username = 'Carlos Rodríguez'),
    'Tuesday',
    '09:00:00',
    '17:00:00'
  ),

  -- TechFix Solutions Workers
  (
    (SELECT wp.id FROM worker_profile wp JOIN providers p ON wp.provider_id = p.id WHERE p.name = 'TechFix Solutions' AND wp.username = 'Sofía Fernández'),
    'Monday',
    '09:00:00',
    '17:00:00'
  ),
  (
    (SELECT wp.id FROM worker_profile wp JOIN providers p ON wp.provider_id = p.id WHERE p.name = 'TechFix Solutions' AND wp.username = 'Pedro Sánchez'),
    'Wednesday',
    '10:00:00',
    '18:00:00'
  ),

  -- Smart Learning Workers
  (
    (SELECT wp.id FROM worker_profile wp JOIN providers p ON wp.provider_id = p.id WHERE p.name = 'Smart Learning' AND wp.username = 'Laura Pérez'),
    'Tuesday',
    '10:00:00',
    '14:00:00'
  ),
  (
    (SELECT wp.id FROM worker_profile wp JOIN providers p ON wp.provider_id = p.id WHERE p.name = 'Smart Learning' AND wp.username = 'Juan Hernández'),
    'Thursday',
    '10:00:00',
    '14:00:00'
  ),

  -- Green Thumbs Workers
  (
    (SELECT wp.id FROM worker_profile wp JOIN providers p ON wp.provider_id = p.id WHERE p.name = 'Green Thumbs' AND wp.username = 'Mónica Ramírez'),
    'Friday',
    '08:00:00',
    '16:00:00'
  ),
  (
    (SELECT wp.id FROM worker_profile wp JOIN providers p ON wp.provider_id = p.id WHERE p.name = 'Green Thumbs' AND wp.username = 'Andrés Torres'),
    'Monday',
    '07:00:00',
    '15:00:00'
  ),
  (
    (SELECT wp.id FROM worker_profile wp JOIN providers p ON wp.provider_id = p.id WHERE p.name = 'Green Thumbs' AND wp.username = 'Andrés Torres'),
    'Wednesday',
    '07:00:00',
    '15:00:00'
  );