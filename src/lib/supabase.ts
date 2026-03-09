import { createClient, SupabaseClient } from "@supabase/supabase-js";

/** 创建 Supabase 客户端（仅在运行时调用，避免构建时报错） */
export function getSupabase(): SupabaseClient {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) throw new Error("NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are required");
  return createClient(url, key);
}

/** Server-only: 用于店员后台读取，需配置 SUPABASE_SERVICE_ROLE_KEY */
export function createAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("SUPABASE_SERVICE_ROLE_KEY is required for admin");
  return createClient(url, key);
}
