import { createClient } from '@supabase/supabase-js';

const url = process.env.REACT_APP_SUPABASE_URL;
const anonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

// null until the project is configured (see .env.example); callers fall back
// to local content in that case.
export const supabase = url && anonKey ? createClient(url, anonKey) : null;
