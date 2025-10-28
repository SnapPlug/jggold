import { createClient } from '@supabase/supabase-js'

// Supabase 프로젝트 설정
const supabaseUrl = 'https://wtbxqmsfnjhixabtgisj.supabase.co'
// 실제 anon key는 Supabase 대시보드에서 확인 후 교체 필요
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0YnhxbXNmbmpoaXhhYnRnaXNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ5NzI4MDAsImV4cCI6MjA1MDU0ODgwMH0.PLEASE_REPLACE_WITH_ACTUAL_ANON_KEY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
