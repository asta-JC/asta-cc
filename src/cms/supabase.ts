import { createClient } from '@supabase/supabase-js';
const env = (import.meta as ImportMeta & { env: Record<string, string> }).env;
export const supabase = env.VITE_SUPABASE_URL && env.VITE_SUPABASE_PUBLISHABLE_KEY
  ? createClient(env.VITE_SUPABASE_URL, env.VITE_SUPABASE_PUBLISHABLE_KEY) : null;
export const ADMIN_EMAIL = 'admin@asta-cc.tech';
export async function uploadImage(file: File) {
  if (!supabase) throw new Error('Connect Supabase first.');
  if (!['image/jpeg','image/png','image/webp','image/gif'].includes(file.type)) throw new Error('Choose a JPG, PNG, WebP, or GIF image.');
  if (file.size > 5 * 1024 * 1024) throw new Error('Images must be smaller than 5 MB.');
  const ext = file.type.split('/')[1].replace('jpeg','jpg');
  const path = `${crypto.randomUUID()}.${ext}`;
  const { error } = await supabase.storage.from('portfolio-images').upload(path, file, { upsert: false, contentType: file.type });
  if (error) throw error;
  return supabase.storage.from('portfolio-images').getPublicUrl(path).data.publicUrl;
}
