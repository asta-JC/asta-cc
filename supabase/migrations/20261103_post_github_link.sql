alter table public.posts add column if not exists github_url text not null default '';
notify pgrst, 'reload schema';
