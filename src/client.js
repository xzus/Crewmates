import { createClient } from '@supabase/supabase-js'
const API_KEY = import.meta.env.VITE_APP_API_KEY;

const url = 'https://wynzhztkvigkcfarqhld.supabase.co';

export const supabase = createClient(url, API_KEY);