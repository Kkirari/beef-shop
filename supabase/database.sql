-- ============================================
-- PrimeCut Beef Shop - Supabase Database Schema
-- ============================================

-- 1. Profiles (extends Supabase Auth)
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT,
  phone TEXT,
  role TEXT DEFAULT 'customer' CHECK (role IN ('customer', 'admin')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Admin can view all profiles" ON profiles
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (id, email, full_name)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- 2. Products
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  origin TEXT,
  portion TEXT,
  price NUMERIC(10,2) NOT NULL,
  old_price NUMERIC(10,2),
  badge TEXT,
  image_url TEXT,
  category TEXT DEFAULT 'steak',
  stock INT DEFAULT 100,
  mb_score BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view products" ON products
  FOR SELECT USING (true);

CREATE POLICY "Admin can manage products" ON products
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- 3. Cart Items
CREATE TABLE cart_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE NOT NULL,
  quantity INT DEFAULT 1 CHECK (quantity > 0),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, product_id)
);

ALTER TABLE cart_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage own cart" ON cart_items
  FOR ALL USING (auth.uid() = user_id);

-- 4. Orders
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'shipped', 'delivered', 'cancelled')),
  subtotal NUMERIC(10,2) NOT NULL,
  shipping NUMERIC(10,2) DEFAULT 0,
  tax NUMERIC(10,2) DEFAULT 0,
  total NUMERIC(10,2) NOT NULL,
  first_name TEXT,
  last_name TEXT,
  address TEXT,
  city TEXT,
  postcode TEXT,
  delivery_method TEXT DEFAULT 'express',
  payment_method TEXT DEFAULT 'card',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users view own orders" ON orders
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users create orders" ON orders
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admin can manage all orders" ON orders
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- 5. Order Items
CREATE TABLE order_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE NOT NULL,
  product_id UUID REFERENCES products(id) ON DELETE SET NULL,
  product_name TEXT NOT NULL,
  quantity INT NOT NULL,
  unit_price NUMERIC(10,2) NOT NULL
);

ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users view own order items" ON order_items
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM orders WHERE orders.id = order_items.order_id AND orders.user_id = auth.uid())
  );

CREATE POLICY "Users create order items" ON order_items
  FOR INSERT WITH CHECK (
    EXISTS (SELECT 1 FROM orders WHERE orders.id = order_items.order_id AND orders.user_id = auth.uid())
  );

CREATE POLICY "Admin can manage all order items" ON order_items
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- ============================================
-- SEED DATA: 6 Products
-- ============================================

INSERT INTO products (name, slug, description, origin, portion, price, old_price, badge, image_url, category) VALUES
(
  'Miyazaki Wagyu Ribeye',
  'miyazaki-wagyu-ribeye',
  'Our Miyazaki Prefecture A5 Ribeye represents the absolute peak of the Kuroge Washu breed.',
  'Japanese Kyushu Origin',
  '250g Portions',
  129.00,
  158.00,
  'A5 GRADE',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCw7AOxqSjAbH5XblTGWMl0ao-MtKn0rJbnecoasVtBVUmwOvvL8csVlSdWIhniO3LRXHVcrjOs3NTQK1LQFzLj8EEGOA8yygd_9-IW4NSc7vJOodMK40N9bAejwTQc3t3kMWtDw5rs2ItKFE_h_orYR4MOK96jbqVlT4BTtuuJ_LlesUt7rLLRe7sBpWRmMtlB-uxTn0xkwYcDc9e6-8cwvqVc7ztWHl5jgG-SUBALfHnIL5E7d2b2eg3p_eJEWQL-7sdo7CEvK9HZ',
  'wagyu'
),
(
  'Black Angus Striploin',
  'black-angus-striploin',
  'Premium Australian grain-fed Black Angus striploin with exceptional marbling.',
  'Australian Grain-Fed',
  '300g Portions',
  65.00,
  NULL,
  'BESTSELLER',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDgqSP0xVg44XxN29N_ZKnepqIMraw3cAuW-hcGSxl2C4GhzliWWT8h18BPEe-Pi6IxU5rUCTbfwkGgRNMVbLRbJ6wi0l6cr8AJlGGkawSx6a3DigTq_ezy7Xi0_JogGy9toMqTquYuNSqMmrWD_JM_UAeGJsCcB06kJ3MnY7SUIfQ2ZmkCrAemQDXuqrKSa8pliRvRhIRl5YNzPkLCGcHzs_oRFoz0KSzGDsJqKNuyfimWTCODBgyggtCveSKzBSguXwPTAcd-Z10Q',
  'steak'
),
(
  'Chateaubriand Tenderloin',
  'chateaubriand-tenderloin',
  'Center-cut fillet tenderloin from rare heritage cattle.',
  'Center Cut Fillet',
  '200g Fillet',
  89.00,
  NULL,
  'RARE ORIGIN',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBWHprhyjQ2lx8q6g55KwSOYw21agSWeKiS-j-zlaLptHU9deSn2wbPWF8g2XifpaIogiXlOW6PEU1JaRYuCkYIwN34JSWyxdEmEMbk3chw_5R4UfSZYva2zC_Z-5XKj06ZWMZGw2OBevoIYrfzUKCmMlR-WbMsr9WRk8sKPu1rrT0bMbNUYLlEldRHL9ERTgPGr4xWF4UtakhqJWWwPhdv3ks6MnG5JgHLPgcAsQ9EAX1puobSE4d4IprnzmlR7DgFZT6IEr792iyt',
  'steak'
),
(
  'Grand Tomahawk Steak',
  'grand-tomahawk-steak',
  'Bone-in long rib tomahawk, a showstopper for any occasion.',
  'Bone-In Long Rib',
  '1.2kg Single',
  145.00,
  NULL,
  NULL,
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAxaATTMLVvVmY16Y3ExdS2wif3DcfIfbEG_OooLbwAVvVBt28zuRqQcSEMjNhEDA98xAM9fYFCEZjUA-zBmsH_pN7pvBBHgFGIcEF_qYXJWL9O1DmdNg9pPd-BCAPvJUqBhLfyOcPVDAQ9H6SOIg71tfJzDyOK4FkXy6dc2VDl80-38pXqBDQu0AFbA3q8yGsoBxL005Wyi-68vpkLWu4w22gIJBUiXe7LEnJpO9A0q9JhAb48HKDY671b1CZpJm_i4k8nf_7fuDcN',
  'steak'
),
(
  'Kobe Yakiniku Slices',
  'kobe-yakiniku-slices',
  'Japanese hybrid Kobe-style thin slices perfect for yakiniku grilling.',
  'Japanese Hybrid',
  '150g Box',
  78.00,
  NULL,
  NULL,
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB-d-4Mp4DqOQtgX_Q5siyDg1OFypPGJlLtVZt5Txzrox79bqp0V7RuVR_Wmt_YvIWZ5EOaqhqiQtoTLAy1sP4Ei5TYMCe_LkgxWJRMqmpCPhP3eyOvTYJ0mD_NRuXztF5a_66b4-R_A5NnvCe9owj73xEL8L-JmUr7uzkR54rRqZWNjUY_nUwDgfoQrpISq8XsywXhEXfev_ddY0RNkUF4zMicAfOk_qNyN93eb4k706hO6C_OMEl9bcP-N2fBDPNuS93vfkn4UVeZ',
  'wagyu'
),
(
  'Aged Porterhouse',
  'aged-porterhouse',
  'Premium USDA Choice porterhouse dry-aged for 45 days.',
  'Premium USDA Choice',
  '800g Cut',
  110.00,
  NULL,
  '45-DAY AGED',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDjfUNXHYPXBDemM4g0pCR2HlJBrc13IPNIZv5NnppeTu0HPW0-NYsATQUpwcjosCP4wDd27zIND36R3Tra5ohmSGmRaiwfNdxelpY462E-6w4bYaXB0uORMFEbFnLUC1LtkVTorquROwLhCS30fGLGIv2y-Slll0ml3dU0rCOjetK2-xpZQ5Fm7SYWs4IMdCG_BrSXi85GO_jopASUX80tHZ82IEtV23g2VKh-OxPF6PUGQ4Re20W0VMCB5ErLGs2aRyHlMNE60JSn',
  'steak'
);
