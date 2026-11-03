# Supabase setup

1. Open https://supabase.com/dashboard and create a project for asta-cc. Choose your organization, a nearby region, and a database password. Keep that database password private.
2. In SQL Editor, run `supabase/schema.sql` once. It creates the content tables, admin permission check, and public image bucket.
3. In Authentication → Providers → Email, disable public sign-ups. In Authentication → Users → Add user → Create new user, create `admin@asta-cc.tech` with the password you chose in chat, and mark the email confirmed. The application never stores that password in source.
4. Copy this user's UUID. In SQL Editor run, replacing the example UUID:

```sql
insert into public.portfolio_admins(user_id)
values ('REPLACE-WITH-THE-AUTH-USER-UUID'::uuid);
```

5. From Project Settings → API / API Keys, copy the project URL and publishable key (legacy anon key also works). Copy `.env.example` to `.env.local` and fill in those two values. Never put a service-role or secret key in a VITE variable.
6. Restart `npm run dev`. Open http://127.0.0.1:5173/admin/ and sign in.
7. Save your profile, save the initial project list, and import existing project notes as drafts. Choose dates and publish them when ready. Imported notes have no invented original publication dates.
8. For hosting, add the same two VITE variables before building. The host must rewrite non-asset paths to `index.html`; a `vercel.json` is included. Configure your site URL in Supabase Authentication → URL Configuration.

## Access model

The admin page's email check is not the security boundary. Database row-level security checks the authenticated, confirmed user's UUID against a protected admin table and the admin email. Visitors can read only published posts whose date has arrived. Project and profile mutations require admin access, as do image uploads. Images in the public bucket can be viewed by anyone with their URL; do not upload private draft material there.

Post content uses Markdown with HTML disabled. Images can be covers or inline Markdown images. Post dates are stored in UTC and displayed in Asia/Tashkent; the editor's date input uses the administrator's device timezone. Future posts become available when the page is refreshed after their publication time.

## Verify after connecting

- Sign in as the admin and save profile/projects; reload the public site and confirm the changes persist.
- Create a draft, upload an image, preview, then publish with a date. Verify in a separate signed-out browser that only the published post is readable.
- Set a future date and verify the post remains inaccessible to signed-out visitors.
- Use another authenticated account to attempt content writes and uploads; database policies must reject them.
- Unpublish and confirm the public post URL shows unavailable, while the admin retains the draft.

No live authentication or database checks can pass until the project is connected and the schema and admin account exist.
