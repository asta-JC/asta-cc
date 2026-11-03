-- Run once in the Supabase SQL Editor for this portfolio project.
begin;
create table if not exists public.portfolio_admins (
 user_id uuid primary key references auth.users(id) on delete cascade
);
alter table public.portfolio_admins enable row level security;
revoke all on public.portfolio_admins from anon, authenticated;
create or replace function public.is_portfolio_admin() returns boolean
language sql stable security definer set search_path = '' as $$
 select exists(select 1 from public.portfolio_admins a join auth.users u on u.id=a.user_id
 where a.user_id=(select auth.uid()) and lower(u.email)='admin@asta-cc.tech' and u.email_confirmed_at is not null);
$$;
revoke all on function public.is_portfolio_admin() from public;
grant execute on function public.is_portfolio_admin() to anon,authenticated;
create table if not exists public.site_content(id text primary key check(id='main'), data jsonb not null, updated_at timestamptz not null default now());
create table if not exists public.projects(id text primary key,position integer not null default 0,data jsonb not null);
create table if not exists public.posts(
 id uuid primary key default gen_random_uuid(),slug text not null unique check(slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
 title text not null check(length(trim(title))>0),summary text not null default '',content text not null default '',
 tags text[] not null default '{}',cover_url text not null default '',github_url text not null default '',
 status text not null default 'draft' check(status in ('draft','published')),
 published_at timestamptz,updated_at timestamptz not null default now(),
 check(status='draft' or published_at is not null)
);
create or replace function public.portfolio_updated_at() returns trigger language plpgsql set search_path='' as $$ begin new.updated_at=now(); return new; end $$;
drop trigger if exists posts_updated_at on public.posts;
create trigger posts_updated_at before update on public.posts for each row execute function public.portfolio_updated_at();
drop trigger if exists site_updated_at on public.site_content;
create trigger site_updated_at before update on public.site_content for each row execute function public.portfolio_updated_at();
alter table public.site_content enable row level security;
alter table public.projects enable row level security;
alter table public.posts enable row level security;
grant select on public.site_content,public.projects,public.posts to anon,authenticated;
grant insert,update,delete on public.site_content,public.projects,public.posts to authenticated;
create policy "Public site content" on public.site_content for select to anon,authenticated using(true);
create policy "Admin site edits" on public.site_content for all to authenticated using(public.is_portfolio_admin()) with check(public.is_portfolio_admin());
create policy "Public projects" on public.projects for select to anon,authenticated using(true);
create policy "Admin project edits" on public.projects for all to authenticated using(public.is_portfolio_admin()) with check(public.is_portfolio_admin());
create policy "Published posts only" on public.posts for select to anon,authenticated using(status='published' and published_at<=now());
create policy "Admin posts" on public.posts for all to authenticated using(public.is_portfolio_admin()) with check(public.is_portfolio_admin());
create or replace function public.save_portfolio_projects(entries jsonb) returns void
language plpgsql security invoker set search_path='' as $$
begin
 if not public.is_portfolio_admin() then raise exception 'Admin access required'; end if;
 if jsonb_typeof(entries)<>'array' then raise exception 'Projects must be an array'; end if;
 insert into public.site_content(id,data) values('main',jsonb_build_object('projectsInitialized',true))
 on conflict(id) do update set data=public.site_content.data || jsonb_build_object('projectsInitialized',true);
 delete from public.projects;
 insert into public.projects(id,position,data)
 select item->>'id',ordinality::integer,item from jsonb_array_elements(entries) with ordinality as t(item,ordinality);
end $$;
revoke all on function public.save_portfolio_projects(jsonb) from public;
grant execute on function public.save_portfolio_projects(jsonb) to authenticated;
insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types)
values('portfolio-images','portfolio-images',true,5242880,array['image/jpeg','image/png','image/webp','image/gif']) on conflict(id) do nothing;
create policy "Public portfolio images" on storage.objects for select to anon,authenticated using(bucket_id='portfolio-images');
create policy "Admin image uploads" on storage.objects for insert to authenticated with check(bucket_id='portfolio-images' and public.is_portfolio_admin());
-- No browser delete policy: unpublishing preserves posts, and uploads use unique names.
commit;
