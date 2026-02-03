import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://zgenogachdctgrwcgoph.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpnZW5vZ2FjaGRjdGdyd2Nnb3BoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAxNTQ4NjEsImV4cCI6MjA4NTczMDg2MX0.Fy6Zq57ijB2N9Vw7lNoIUYXuHYxTbuM7Ku8gcMVEymI'

export const supabase = createClient(supabaseUrl, supabaseKey)
