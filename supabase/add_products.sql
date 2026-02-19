-- ============================================
-- ADD MORE PRODUCTS (24 new products)
-- Run this in Supabase SQL Editor
-- ============================================

INSERT INTO products (name, slug, description, origin, portion, price, badge, image_url, category) VALUES

-- === WAGYU COLLECTION ===
(
  'Hokkaido Snow Beef Sirloin',
  'hokkaido-snow-beef-sirloin',
  'Ultra-rare Snow Beef from Hokkaido, known for its delicate snowflake marbling pattern and melt-in-your-mouth texture.',
  'Hokkaido, Japan',
  '200g Portion',
  189.00,
  'ULTRA RARE',
  'https://images.unsplash.com/photo-1615937722923-67f6deaf2cc9?w=600&h=400&fit=crop',
  'wagyu'
),
(
  'Matsusaka Wagyu Filet Mignon',
  'matsusaka-wagyu-filet-mignon',
  'The queen of Japanese beef — Matsusaka cattle raised with beer and daily massage for supreme tenderness.',
  'Mie Prefecture, Japan',
  '180g Portion',
  210.00,
  'A5 GRADE',
  'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&h=400&fit=crop',
  'wagyu'
),
(
  'Omi Wagyu Zabuton',
  'omi-wagyu-zabuton',
  'Denver cut from 400-year heritage Omi cattle. Rich, buttery flavor with intense marbling.',
  'Shiga Prefecture, Japan',
  '200g Portion',
  165.00,
  'HERITAGE',
  'https://images.unsplash.com/photo-1551028150-64b9f398f678?w=600&h=400&fit=crop',
  'wagyu'
),
(
  'Australian Wagyu Brisket',
  'australian-wagyu-brisket',
  'Full-blood Wagyu brisket point-end, perfect for slow smoking. Incredible fat content for BBQ.',
  'Queensland, Australia',
  '1.5kg Piece',
  135.00,
  'MS 7+',
  'https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?w=600&h=400&fit=crop',
  'wagyu'
),
(
  'Kagoshima Wagyu Sukiyaki Set',
  'kagoshima-wagyu-sukiyaki-set',
  'Paper-thin sliced A5 Kagoshima Wagyu, pre-portioned for traditional sukiyaki hot pot.',
  'Kagoshima, Japan',
  '300g Set',
  142.00,
  'A5 GRADE',
  'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?w=600&h=400&fit=crop',
  'wagyu'
),

-- === STEAK CUTS ===
(
  'Bone-In Ribeye Cap Steak',
  'bone-in-ribeye-cap-steak',
  'The spinalis dorsi — widely regarded as the single best-tasting cut on the entire animal.',
  'USDA Prime, USA',
  '400g Bone-In',
  98.00,
  'CHEF PICK',
  'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&h=400&fit=crop',
  'steak'
),
(
  'Picanha Cap Steak',
  'picanha-cap-steak',
  'Brazilian-style top sirloin cap with signature fat cap. The king of churrasco.',
  'Brazilian Heritage, USA',
  '350g Piece',
  58.00,
  'BESTSELLER',
  'https://images.unsplash.com/photo-1558030137-a56c1b004fa3?w=600&h=400&fit=crop',
  'steak'
),
(
  'Flank Steak Premium',
  'flank-steak-premium',
  'Lean, flavor-packed flank steak perfect for fajitas, stir-fry, or Korean bulgogi.',
  'Grass-Fed, New Zealand',
  '500g Piece',
  42.00,
  NULL,
  'https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=600&h=400&fit=crop',
  'steak'
),
(
  'Flat Iron Steak',
  'flat-iron-steak',
  'The second most tender cut after filet mignon, with incredible beefy flavor at a great value.',
  'Grain-Fed, Australia',
  '250g Portion',
  38.00,
  'VALUE PICK',
  'https://images.unsplash.com/photo-1588347818036-558601350947?w=600&h=400&fit=crop',
  'steak'
),
(
  'NY Strip Steak Dry-Aged 30 Days',
  'ny-strip-dry-aged-30',
  'Classic New York strip intensified by 30 days of dry aging. Nutty, concentrated beefy perfection.',
  'USDA Prime, USA',
  '350g Steak',
  88.00,
  '30-DAY AGED',
  'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop',
  'steak'
),
(
  'T-Bone Steak',
  't-bone-steak',
  'Two steaks in one — strip on one side, tenderloin on the other. A timeless classic.',
  'Grain-Fed, USA',
  '600g Bone-In',
  72.00,
  NULL,
  'https://images.unsplash.com/photo-1432139509613-5c4255a1d184?w=600&h=400&fit=crop',
  'steak'
),
(
  'Tri-Tip Roast',
  'tri-tip-roast',
  'Santa Maria-style tri-tip, a California BBQ legend. Great for smoking or reverse searing.',
  'USDA Choice, USA',
  '800g Piece',
  48.00,
  NULL,
  'https://images.unsplash.com/photo-1619221882220-947b3d3c8861?w=600&h=400&fit=crop',
  'steak'
),
(
  'Hanger Steak (Onglet)',
  'hanger-steak-onglet',
  'The butcher''s secret — only one per animal. Intensely flavorful, best served medium-rare.',
  'Grass-Fed, Argentina',
  '300g Piece',
  55.00,
  'RARE CUT',
  'https://images.unsplash.com/photo-1625937286930-3c5898472bf1?w=600&h=400&fit=crop',
  'steak'
),

-- === BBQ & GRILLING ===
(
  'Wagyu Beef Burger Patties',
  'wagyu-beef-burger-patties',
  'Hand-pressed Wagyu blend patties with 30% fat ratio for the juiciest burger you''ve ever had.',
  'Australian Wagyu Blend',
  '4-Pack (150g each)',
  45.00,
  'BESTSELLER',
  'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop',
  'bbq'
),
(
  'Beef Short Ribs (Galbi Cut)',
  'beef-short-ribs-galbi',
  'Korean-style flanken cut short ribs, cross-cut thin for quick grilling. Marinate and grill!',
  'USDA Choice, USA',
  '500g Pack',
  52.00,
  NULL,
  'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop',
  'bbq'
),
(
  'Prime Beef Sausages',
  'prime-beef-sausages',
  'Hand-crafted artisan beef sausages with cracked black pepper and garlic. No fillers, 100% beef.',
  'Craft Made, Australia',
  '6-Pack (500g)',
  32.00,
  NULL,
  'https://images.unsplash.com/photo-1525164286253-04e68b9d94c6?w=600&h=400&fit=crop',
  'bbq'
),
(
  'BBQ Lovers Sampler Box',
  'bbq-lovers-sampler-box',
  'Curated box: 2x ribeye, 4x burger patties, 500g short ribs, and 6x sausages. Feeds 6-8 people.',
  'Mixed Premium Origins',
  '3kg Box',
  199.00,
  'SAVE 20%',
  'https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?w=600&h=400&fit=crop',
  'bbq'
),
(
  'Bone Marrow Canoe Cut',
  'bone-marrow-canoe-cut',
  'Split lengthwise beef marrow bones. Roast and spread on toast — pure umami luxury.',
  'Grass-Fed, New Zealand',
  '4 Pieces',
  28.00,
  NULL,
  'https://images.unsplash.com/photo-1607116667573-1b01d072a26d?w=600&h=400&fit=crop',
  'bbq'
),

-- === SPECIALTY & GROUND ===
(
  'Wagyu Beef Tartare Kit',
  'wagyu-beef-tartare-kit',
  'Sashimi-grade Wagyu tenderloin with capers, shallots, egg yolk, and the secret house dressing.',
  'Australian Wagyu, MS 6+',
  '200g Kit',
  68.00,
  'PREMIUM',
  'https://images.unsplash.com/photo-1611171711912-e3f6b536f532?w=600&h=400&fit=crop',
  'wagyu'
),
(
  'Premium Ground Beef',
  'premium-ground-beef',
  '80/20 blend from premium trim. Perfect for burgers, bolognese, meatballs, and tacos.',
  'Grain-Fed, Australia',
  '500g Pack',
  18.00,
  NULL,
  'https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=600&h=400&fit=crop',
  'steak'
),
(
  'Beef Cheeks',
  'beef-cheeks',
  'Slow-cook these for 4 hours and you get fork-tender, gelatinous, deeply savory meat.',
  'Grass-Fed, Australia',
  '500g Pack (2 Pieces)',
  35.00,
  'SLOW COOK',
  'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=600&h=400&fit=crop',
  'steak'
),
(
  'Dry-Aged Ribeye 60 Days',
  'dry-aged-ribeye-60-days',
  'Extreme 60-day dry-aged bone-in ribeye. Intense funky depth that only time can create.',
  'USDA Prime, USA',
  '500g Bone-In',
  155.00,
  '60-DAY AGED',
  'https://images.unsplash.com/photo-1558030006-450675393462?w=600&h=400&fit=crop',
  'steak'
),
(
  'Osso Buco (Beef Shank)',
  'osso-buco-beef-shank',
  'Cross-cut beef shank with marrow center. The Italian classic — braise low and slow.',
  'Grass-Fed, New Zealand',
  '600g (2 Pieces)',
  38.00,
  NULL,
  'https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?w=600&h=400&fit=crop',
  'steak'
),
(
  'Oxtail Premium Cut',
  'oxtail-premium-cut',
  'Meaty oxtail sections perfect for rich stews, pho, ramen, or Jamaican-style oxtail.',
  'Grass-Fed, Australia',
  '800g Pack',
  42.00,
  NULL,
  'https://images.unsplash.com/photo-1551028150-64b9f398f678?w=600&h=400&fit=crop',
  'steak'
);
