-- ============================================
-- ADD SHABU & SUKIYAKI PRODUCTS
-- Run this in Supabase SQL Editor
-- ============================================

INSERT INTO products (name, slug, description, origin, portion, price, badge, image_url, category) VALUES

-- === SHABU & SUKIYAKI COLLECTION ===
(
  'Premium Shabu-Shabu Beef Set',
  'premium-shabu-shabu-set',
  'Paper-thin sliced premium beef chuck roll, perfectly cut for shabu-shabu hot pot. Melts the moment it touches the broth.',
  'Grain-Fed, Australia',
  '300g Set',
  52.00,
  'BESTSELLER',
  'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?w=600&h=400&fit=crop',
  'shabu'
),
(
  'A5 Wagyu Shabu-Shabu Slices',
  'a5-wagyu-shabu-shabu',
  'Ultra-thin A5 Japanese Wagyu slices with snowflake marbling. Swish once in hot dashi for 3 seconds — pure luxury.',
  'Kagoshima, Japan',
  '200g Pack',
  168.00,
  'A5 GRADE',
  'https://images.unsplash.com/photo-1615937722923-67f6deaf2cc9?w=600&h=400&fit=crop',
  'shabu'
),
(
  'Sukiyaki Beef Sirloin Slices',
  'sukiyaki-beef-sirloin',
  'Thinly sliced sirloin specifically portioned for sukiyaki. Rich beefy flavor pairs perfectly with sweet soy broth and raw egg.',
  'USDA Choice, USA',
  '400g Pack',
  48.00,
  NULL,
  'https://images.unsplash.com/photo-1504973960431-1c1c6f3e5289?w=600&h=400&fit=crop',
  'shabu'
),
(
  'Wagyu Sukiyaki Premium Set',
  'wagyu-sukiyaki-premium-set',
  'Curated sukiyaki experience: 300g Wagyu slices, tofu, shirataki noodles, enoki mushrooms, and house sukiyaki sauce.',
  'Australian Wagyu, MS 6+',
  'Full Set (Serves 2)',
  125.00,
  'CHEF PICK',
  'https://images.unsplash.com/photo-1551028150-64b9f398f678?w=600&h=400&fit=crop',
  'shabu'
),
(
  'Black Angus Shabu Rolls',
  'black-angus-shabu-rolls',
  'Premium Black Angus ribeye rolled and frozen for perfect paper-thin slicing. Ideal fat-to-meat ratio for hot pot.',
  'Grain-Fed, Australia',
  '500g Pack',
  65.00,
  NULL,
  'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&h=400&fit=crop',
  'shabu'
),
(
  'Hot Pot Beef Trio Pack',
  'hot-pot-trio-pack',
  'Three-cut variety pack: chuck roll, short plate, and brisket — all sliced thin for the ultimate hot pot spread.',
  'Mixed Premium, Australia',
  '600g (3x200g)',
  78.00,
  'VALUE PACK',
  'https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?w=600&h=400&fit=crop',
  'shabu'
),
(
  'Marbled Beef Short Plate Slices',
  'marbled-short-plate-slices',
  'Rich, fatty short plate cut into thin strips. The go-to cut for Korean-style shabu and Japanese nabemono.',
  'USDA Prime, USA',
  '400g Pack',
  55.00,
  'POPULAR',
  'https://images.unsplash.com/photo-1558030006-450675393462?w=600&h=400&fit=crop',
  'shabu'
),
(
  'Shabu-Shabu Party Box',
  'shabu-party-box',
  'Feed the whole group: 1kg mixed premium shabu slices, ponzu sauce, sesame dipping sauce, and condiment set.',
  'Mixed Premium Origins',
  '1kg Party Box',
  149.00,
  'SAVE 15%',
  'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop',
  'shabu'
);
