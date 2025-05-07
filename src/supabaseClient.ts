import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pfteqqpsagfcztycwohv.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmdGVxcXBzYWdmY3p0eWN3b2h2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NjYyNzAyNywiZXhwIjoyMDYyMjAzMDI3fQ.7zAZH-bTmnV6ZPrBWIXHEXn0_MCdEhNuTsBleVM4KI8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)