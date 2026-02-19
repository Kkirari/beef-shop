-- ============================================
-- FIX PRODUCT CATEGORIES
-- Run this in Supabase SQL Editor
-- ============================================

-- WAGYU (should be wagyu)
UPDATE products SET category = 'wagyu' WHERE slug IN (
  'hokkaido-snow-beef-sirloin',
  'matsusaka-wagyu-filet-mignon',
  'omi-wagyu-zabuton',
  'australian-wagyu-brisket',
  'kagoshima-wagyu-sukiyaki-set',
  'wagyu-beef-tartare-kit',
  'miyazaki-wagyu-ribeye',
  'kobe-yakiniku-slices'
);

-- STEAK CUTS (should be steak)
UPDATE products SET category = 'steak' WHERE slug IN (
  'bone-in-ribeye-cap-steak',
  'picanha-cap-steak',
  'flank-steak-premium',
  'flat-iron-steak',
  'ny-strip-dry-aged-30',
  't-bone-steak',
  'tri-tip-roast',
  'hanger-steak-onglet',
  'dry-aged-ribeye-60-days',
  'chateaubriand-tenderloin',
  'grand-tomahawk-steak',
  'aged-porterhouse',
  'black-angus-striploin',
  'beef-cheeks',
  'premium-ground-beef',
  'osso-buco-beef-shank',
  'oxtail-premium-cut'
);

-- BBQ & GRILLING (should be bbq)
UPDATE products SET category = 'bbq' WHERE slug IN (
  'wagyu-beef-burger-patties',
  'beef-short-ribs-galbi',
  'prime-beef-sausages',
  'bbq-lovers-sampler-box',
  'bone-marrow-canoe-cut'
);

-- SHABU & SUKIYAKI (should be shabu)
UPDATE products SET category = 'shabu' WHERE slug IN (
  'premium-shabu-shabu-set',
  'a5-wagyu-shabu-shabu',
  'sukiyaki-beef-sirloin',
  'wagyu-sukiyaki-premium-set',
  'black-angus-shabu-rolls',
  'hot-pot-trio-pack',
  'marbled-short-plate-slices',
  'shabu-party-box'
);
