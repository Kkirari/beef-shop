-- ============================================
-- FIX: Create missing profiles from auth.users
-- and set the first user as admin
-- Run this in Supabase SQL Editor
-- ============================================

-- Step 1: Create profiles for all existing auth users that don't have one
INSERT INTO profiles (id, email, full_name, role)
SELECT 
  id,
  email,
  COALESCE(raw_user_meta_data->>'full_name', email) as full_name,
  'customer' as role
FROM auth.users
WHERE id NOT IN (SELECT id FROM profiles)
ON CONFLICT (id) DO NOTHING;

-- Step 2: Set the FIRST user as admin
UPDATE profiles
SET role = 'admin'
WHERE id = (SELECT id FROM auth.users ORDER BY created_at ASC LIMIT 1);

-- Step 3: Verify — see all profiles
SELECT id, email, full_name, role FROM profiles;

-- Step 4: Fix the trigger so future signups work
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email),
    'customer'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Recreate trigger
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
