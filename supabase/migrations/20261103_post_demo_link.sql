alter table public.posts add column if not exists demo_url text not null default '';
notify pgrst, 'reload schema';
