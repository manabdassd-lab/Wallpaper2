# Wallpaper2

Minimal Next.js + Supabase wallpaper gallery.

## Setup

1. **Install dependencies:**  
   ```bash
   npm install
   ```

2. **Environment variables:**  
   Copy `.env.example` to `.env.local` and fill in your Supabase credentials.
   ```
   cp .env.example .env.local
   ```

3. **Supabase setup:**  
   - Create a Supabase project.
   - Add a table named `wallpapers` with these columns:
     - `id` (bigserial, primary key)
     - `title` (text)
     - `image_url` (text)
   - SQL to create the table:
     ```sql
     create table wallpapers (
       id bigserial primary key,
       title text not null,
       image_url text not null
     );
     ```

4. **Run locally:**  
   ```bash
   npm run dev
   ```

## Deployment (Vercel)

1. **Push your code to GitHub.**
2. **Go to [Vercel](https://vercel.com/) and import your repository.**
3. **Set environment variables on Vercel:**
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. **Deploy!**

## Notes

- Make sure your Supabase table is publicly readable (enable “select” for “anonymous” role in Supabase table policies).
- Add wallpapers directly in Supabase or extend with upload functionality.
