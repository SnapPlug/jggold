import { createClient } from '@supabase/supabase-js'

// Supabase 프로젝트 설정
const supabaseUrl = 'https://wtbxqmsfnjhixabtgisj.supabase.co'
// 실제 anon key는 Supabase 대시보드에서 확인 후 교체 필요
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0YnhxbXNmbmpoaXhhYnRnaXNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE2ODQwNjIsImV4cCI6MjA3NzI2MDA2Mn0.QEAn4xEQj_MhsUEHwynUN1r4ep7W9KyPi0zW7-eemrg'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
