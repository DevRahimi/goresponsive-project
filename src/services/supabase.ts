import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
	throw new Error('Both Supabase URL and API Key are required.');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
