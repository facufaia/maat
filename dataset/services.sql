INSERT INTO services (category_id, name, description)
VALUES
  -- Belleza Services
  (1, 'Haircut', 'Professional haircut services for all hair types.'),
  (1, 'Manicure', 'Complete manicure services including nail shaping and polish.'),
  (1, 'Pedicure', 'Relaxing pedicure treatments for healthy feet.'),
  (1, 'Facial', 'Revitalizing facial treatments for glowing skin.'),
  (1, 'Makeup', 'Expert makeup application for all occasions.'),

  -- Tecnología Services
  (2, 'Computer Repair', 'Comprehensive computer repair and maintenance.'),
  (2, 'Smartphone Repair', 'Fast and reliable smartphone screen and hardware repairs.'),
  (2, 'Network Setup', 'Professional network installation and configuration services.'),
  (2, 'IT Consulting', 'Expert IT consulting to optimize your business operations.'),

  -- Educación Services
  (3, 'Tutoring', 'Personalized tutoring sessions for various subjects.'),
  (3, 'Online Courses', 'Flexible online courses available anytime, anywhere.'),
  (3, 'Language Classes', 'Interactive language classes for all proficiency levels.'),

  -- Jardinería Services
  (4, 'Lawn Mowing', 'Regular lawn mowing and garden upkeep services.'),
  (4, 'Landscape Design', 'Creative landscape design to enhance your outdoor space.'),
  (4, 'Garden Maintenance', 'Comprehensive garden maintenance and care.'),

  -- Spa Services
  (5, 'Massage Therapy', 'Therapeutic massage sessions to relieve stress and tension.'),
  (5, 'Sauna Access', 'Access to our relaxing sauna facilities.'),
  (5, 'Aromatherapy', 'Aromatherapy treatments for holistic well-being.');

 INSERT INTO worker_profile (provider_id, username, description)
VALUES
  -- Bella Salon
  (
    (SELECT id FROM providers WHERE name = 'Bella Salon'),
    'Ana Martínez',
    'Estilista Senior'
  ),
  (
    (SELECT id FROM providers WHERE name = 'Bella Salon'),
    'Luis Gómez',
    'Manicurista'
  ),
  
  -- Zen Spa Center
  (
    (SELECT id FROM providers WHERE name = 'Zen Spa Center'),
    'María López',
    'Masajista'
  ),
  (
    (SELECT id FROM providers WHERE name = 'Zen Spa Center'),
    'Carlos Rodríguez',
    'Técnico de Aromaterapia'
  ),
  
  -- TechFix Solutions
  (
    (SELECT id FROM providers WHERE name = 'TechFix Solutions'),
    'Sofía Fernández',
    'Técnico de Reparación'
  ),
  (
    (SELECT id FROM providers WHERE name = 'TechFix Solutions'),
    'Pedro Sánchez',
    'Especialista en Redes'
  ),
  
  -- Smart Learning
  (
    (SELECT id FROM providers WHERE name = 'Smart Learning'),
    'Laura Pérez',
    'Tutora de Matemáticas'
  ),
  (
    (SELECT id FROM providers WHERE name = 'Smart Learning'),
    'Juan Hernández',
    'Instructor de Idiomas'
  ),
  
  -- Green Thumbs
  (
    (SELECT id FROM providers WHERE name = 'Green Thumbs'),
    'Mónica Ramírez',
    'Diseñadora de Paisajes'
  ),
  (
    (SELECT id FROM providers WHERE name = 'Green Thumbs'),
    'Andrés Torres',
    'Jardinero Senior'
  );