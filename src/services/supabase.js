import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://doxutjfhkkpejugusuop.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRveHV0amZoa2twZWp1Z3VzdW9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUwMDA5MjEsImV4cCI6MjA0MDU3NjkyMX0.qy0f5LW9uRZHphQAvDuXKyUKEss7CoZ5ECXPPnkuGos";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

