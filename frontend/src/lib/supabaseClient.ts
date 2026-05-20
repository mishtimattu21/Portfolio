import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

/** Null when env vars are missing (e.g. local clone without .env). */
export const supabase: SupabaseClient | null =
  typeof url === "string" &&
  url.length > 0 &&
  typeof anonKey === "string" &&
  anonKey.length > 0
    ? createClient(url, anonKey)
    : null;
