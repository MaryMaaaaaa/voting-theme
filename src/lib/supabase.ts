import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dnsuzddhjwwgkqrjunmv.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuc3V6ZGRoand3Z2txcmp1bm12Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM3MDgxMDYsImV4cCI6MjA3OTI4NDEwNn0.w2W74GABSOQCj5XXn_FhlVVisBGabLrFxVce-hjA4hM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
