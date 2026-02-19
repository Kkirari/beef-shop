import { createClient, SupabaseClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

const isConfigured =
    supabaseUrl !== "" &&
    supabaseUrl !== "your_supabase_url_here" &&
    supabaseAnonKey !== "" &&
    supabaseAnonKey !== "your_supabase_anon_key_here"

export const supabase: SupabaseClient = isConfigured
    ? createClient(supabaseUrl, supabaseAnonKey)
    : (createClient("https://placeholder.supabase.co", "placeholder-key") as SupabaseClient)

export const isSupabaseConfigured = () => isConfigured
