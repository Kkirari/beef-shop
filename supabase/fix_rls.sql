-- ============================================
-- FIX: Drop and recreate policies to fix infinite recursion
-- Run this in Supabase SQL Editor
-- ============================================

-- Fix 1: Drop the recursive admin policy on profiles
DROP POLICY IF EXISTS "Admin can view all profiles" ON profiles;

-- Fix 2: Recreate admin policy using auth.jwt() instead of querying profiles table
CREATE POLICY "Admin can view all profiles" ON profiles
  FOR SELECT USING (
    auth.uid() = id
    OR
    (auth.jwt() ->> 'role') = 'admin'
    OR
    EXISTS (
      SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role = 'admin'
    )
  );

-- Actually the above still recurses. The correct fix is to use a security definer function:

-- Drop the broken policy again
DROP POLICY IF EXISTS "Admin can view all profiles" ON profiles;

-- Create a helper function that bypasses RLS
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM profiles
    WHERE id = auth.uid() AND role = 'admin'
  );
$$ LANGUAGE sql SECURITY DEFINER STABLE;

-- Recreate policies on profiles using the helper function
CREATE POLICY "Admin can view all profiles" ON profiles
  FOR SELECT USING (
    auth.uid() = id OR is_admin()
  );

-- Fix products admin policy too
DROP POLICY IF EXISTS "Admin can manage products" ON profiles;
DROP POLICY IF EXISTS "Admin can manage products" ON products;
CREATE POLICY "Admin can manage products" ON products
  FOR ALL USING (is_admin());

-- Fix orders admin policy
DROP POLICY IF EXISTS "Admin can manage all orders" ON orders;
CREATE POLICY "Admin can manage all orders" ON orders
  FOR ALL USING (is_admin());

-- Fix order_items admin policy
DROP POLICY IF EXISTS "Admin can manage all order items" ON order_items;
CREATE POLICY "Admin can manage all order items" ON order_items
  FOR ALL USING (is_admin());
