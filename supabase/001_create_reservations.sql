-- 雨姐咖啡 · 预约表
-- 在 Supabase Dashboard → SQL Editor 中执行

create table if not exists public.reservations (
  id uuid primary key default gen_random_uuid(),
  date date not null,
  slot text not null,
  party_size int not null,
  name text not null,
  phone text not null,
  email text,
  notes text,
  status text not null default 'pending' check (status in ('pending', 'confirmed', 'cancelled')),
  created_at timestamptz not null default now()
);

-- 便于按日期+时段查询
create index if not exists idx_reservations_date_slot on public.reservations (date, slot);

-- RLS：允许匿名插入（顾客预约），读取需服务端密钥
alter table public.reservations enable row level security;

create policy "allow_anon_insert"
  on public.reservations for insert
  to anon
  with check (true);

-- anon 仅能插入，不能读取；店员通过 service_role（绕过 RLS）访问
