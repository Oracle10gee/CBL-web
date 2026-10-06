-- Carter Biggs — Insights CMS schema.
-- Run in the Supabase SQL editor, then set REACT_APP_SUPABASE_URL and
-- REACT_APP_SUPABASE_ANON_KEY (see .env.example).

create table if not exists public.insights (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  category text,
  excerpt text,
  body text not null default '',          -- plain text; blank lines separate paragraphs
  cover_url text,
  published boolean not null default false,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists insights_published_at_idx
  on public.insights (published_at desc)
  where published;

create table if not exists public.subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now()
);

alter table public.insights enable row level security;
alter table public.subscribers enable row level security;

-- Visitors can read published articles only.
create policy "Published insights are public"
  on public.insights for select
  to anon, authenticated
  using (published);

-- Signed-in editors manage everything (tighten to a role/claim when the CMS is built).
create policy "Editors manage insights"
  on public.insights for all
  to authenticated
  using (true)
  with check (true);

-- Visitors can sign up but never read the list.
create policy "Anyone can subscribe"
  on public.subscribers for insert
  to anon, authenticated
  with check (true);

create policy "Editors read subscribers"
  on public.subscribers for select
  to authenticated
  using (true);
