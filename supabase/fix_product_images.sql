-- ============================================
-- FIX PRODUCT IMAGES (v2)
-- Run this in Supabase SQL Editor
-- Uses verified working image URLs
-- ============================================

-- WAGYU COLLECTION
UPDATE products SET image_url = 'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
WHERE slug = 'hokkaido-snow-beef-sirloin';

UPDATE products SET image_url = 'https://images.pexels.com/photos/3997609/pexels-photo-3997609.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
WHERE slug = 'matsusaka-wagyu-filet-mignon';

UPDATE products SET image_url = 'https://images.pexels.com/photos/618775/pexels-photo-618775.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
WHERE slug = 'omi-wagyu-zabuton';

UPDATE products SET image_url = 'https://images.pexels.com/photos/1251208/pexels-photo-1251208.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
WHERE slug = 'australian-wagyu-brisket';

UPDATE products SET image_url = 'https://images.pexels.com/photos/8753710/pexels-photo-8753710.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
WHERE slug = 'kagoshima-wagyu-sukiyaki-set';

UPDATE products SET image_url = 'https://images.pexels.com/photos/8477066/pexels-photo-8477066.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
WHERE slug = 'wagyu-beef-tartare-kit';

-- STEAK CUTS
UPDATE products SET image_url = 'https://images.pexels.com/photos/2491636/pexels-photo-2491636.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
WHERE slug = 'bone-in-ribeye-cap-steak';

UPDATE products SET image_url = 'https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
WHERE slug = 'picanha-cap-steak';

UPDATE products SET image_url = 'https://images.pexels.com/photos/3997608/pexels-photo-3997608.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
WHERE slug = 'flank-steak-premium';

UPDATE products SET image_url = 'https://images.pexels.com/photos/3535380/pexels-photo-3535380.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
WHERE slug = 'flat-iron-steak';

UPDATE products SET image_url = 'https://images.pexels.com/photos/8694633/pexels-photo-8694633.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
WHERE slug = 'ny-strip-dry-aged-30';

UPDATE products SET image_url = 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
WHERE slug = 't-bone-steak';

UPDATE products SET image_url = 'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
WHERE slug = 'tri-tip-roast';

UPDATE products SET image_url = 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
WHERE slug = 'hanger-steak-onglet';

UPDATE products SET image_url = 'https://images.pexels.com/photos/8694633/pexels-photo-8694633.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
WHERE slug = 'dry-aged-ribeye-60-days';

UPDATE products SET image_url = 'https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
WHERE slug = 'beef-cheeks';

UPDATE products SET image_url = 'https://images.pexels.com/photos/4110003/pexels-photo-4110003.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
WHERE slug = 'premium-ground-beef';

UPDATE products SET image_url = 'https://images.pexels.com/photos/8477066/pexels-photo-8477066.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
WHERE slug = 'osso-buco-beef-shank';

UPDATE products SET image_url = 'https://images.pexels.com/photos/1251208/pexels-photo-1251208.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
WHERE slug = 'oxtail-premium-cut';

-- BBQ & GRILLING
UPDATE products SET image_url = 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
WHERE slug = 'wagyu-beef-burger-patties';

UPDATE products SET image_url = 'https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
WHERE slug = 'beef-short-ribs-galbi';

UPDATE products SET image_url = 'https://images.pexels.com/photos/4518655/pexels-photo-4518655.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
WHERE slug = 'prime-beef-sausages';

UPDATE products SET image_url = 'https://images.pexels.com/photos/1307658/pexels-photo-1307658.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
WHERE slug = 'bbq-lovers-sampler-box';

UPDATE products SET image_url = 'https://images.pexels.com/photos/8753710/pexels-photo-8753710.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
WHERE slug = 'bone-marrow-canoe-cut';

-- SHABU & SUKIYAKI
UPDATE products SET image_url = 'https://images.pexels.com/photos/6646069/pexels-photo-6646069.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
WHERE slug = 'premium-shabu-shabu-set';

UPDATE products SET image_url = 'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
WHERE slug = 'a5-wagyu-shabu-shabu';

UPDATE products SET image_url = 'https://images.pexels.com/photos/6646071/pexels-photo-6646071.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
WHERE slug = 'sukiyaki-beef-sirloin';

UPDATE products SET image_url = 'https://images.pexels.com/photos/3997609/pexels-photo-3997609.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
WHERE slug = 'wagyu-sukiyaki-premium-set';

UPDATE products SET image_url = 'https://images.pexels.com/photos/618775/pexels-photo-618775.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
WHERE slug = 'black-angus-shabu-rolls';

UPDATE products SET image_url = 'https://images.pexels.com/photos/6646069/pexels-photo-6646069.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
WHERE slug = 'hot-pot-trio-pack';

UPDATE products SET image_url = 'https://images.pexels.com/photos/2491636/pexels-photo-2491636.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
WHERE slug = 'marbled-short-plate-slices';

UPDATE products SET image_url = 'https://images.pexels.com/photos/1307658/pexels-photo-1307658.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
WHERE slug = 'shabu-party-box';
