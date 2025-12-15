import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://izzrgdiwpkuoqjpmqgtu.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6enJnZGl3cGt1b3FqcG1xZ3R1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE1NzE0MTUsImV4cCI6MjA3NzE0NzQxNX0.IvVyEBFtHEXaDpqwYdwZbb3DzKR4_2qcmEsHTRSyS_k'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
