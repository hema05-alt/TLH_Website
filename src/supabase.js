import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://bfvecfrnjwyhcrfrlete.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_AoET_8l0iMCJBi1pypmPzw_yVGoMgRQ"; 

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
