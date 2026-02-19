-- Add tracking_number column to orders table
ALTER TABLE orders ADD COLUMN IF NOT EXISTS tracking_number TEXT;

-- Backfill existing orders with generated tracking numbers
UPDATE orders
SET tracking_number = 'CC-' || LPAD(FLOOR(RANDOM() * 1000)::TEXT, 3, '0') || '-' || LPAD(FLOOR(RANDOM() * 1000)::TEXT, 3, '0') || '-' || LPAD(FLOOR(RANDOM() * 1000)::TEXT, 3, '0')
WHERE tracking_number IS NULL;
