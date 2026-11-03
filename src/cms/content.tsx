import { createContext, useContext, useEffect, useState } from 'react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolio';
import type { Project } from '../types';
import { seedPosts } from './seed';
import { supabase } from './supabase';
export type Post = { id: string; slug: string; title: string; summary: string; tags: string[]; content: string; cover_url: string; published_at: string | null; status: 'draft' | 'published'; };
export const defaultSettings = {
  ...PERSONAL_INFO, projectsInitialized: false, brand: 'asta-cc.', keywords: 'ANDROID · WEB · OPEN SOURCE', subtitle: 'aspiring software engineer · building useful things',
  heroText: 'I build practical Android apps and web experiences with Kotlin, Jetpack Compose, and Android Development. Based in Andijan, Uzbekistan. Learning by making, with a soft spot for clean code and thoughtful design.',
  aboutTitle: 'Useful software.\nThoughtfully made.',
  aboutText: "I'm Ravshanov Nurmuhammad, also known as Asta — an aspiring software engineer from Andijan, Uzbekistan.\n\nI build practical Android apps and web experiences that turn ideas into useful products. My work spans Kotlin and Jetpack Compose on Android, and React, Next.js, and TypeScript on the web.\n\nI care about clean code and intuitive design. I'm constantly learning, exploring new tools, and finding better ways to build and ship software.",
  blogTitle: 'Blog.', blogDescription: "Projects, experiments, and the things I'm building along the way.",
  homeProjectsTitle: 'Selected projects', homeNotesTitle: 'Project notes',
  helloTitle: 'Have something in mind?', helloText: "I'm always happy to talk about software, ideas, and opportunities to build.",
  footerText: 'built with care, always learning', accentDark: '#dfbc68', accentLight: '#89631c',
  skills: [{ title: 'Android development', items: ['Kotlin','Jetpack Compose','Android SDK','Material 3','Room','DataStore','Coroutines & Flow'] }, { title: 'Web development', items: ['React','Next.js','TypeScript','Tailwind CSS','Node.js'] }, { title: 'Backend & workflow', items: ['Supabase','PostgreSQL','Cloudflare R2','Vercel','Git','GitHub','Android Studio','Gradle'] }],
};
export type Settings = typeof defaultSettings;
export type CmsProject = Project & { image_url?: string };
export function safeUrl(value: string | undefined) { if (!value) return undefined; return /^(https?:\/\/|mailto:|\/[^/])/.test(value) ? value : undefined; }
const defaults = { settings: defaultSettings, projects: PROJECTS as CmsProject[], posts: seedPosts as Post[], loading: !!supabase, error: '', reload: async () => {} };
const ContentContext = createContext(defaults);
export const useContent = () => useContext(ContentContext);
export function ContentProvider({children}:{children:React.ReactNode}) {
  const [settings,setSettings] = useState(defaultSettings), [projects,setProjects] = useState<CmsProject[]>(PROJECTS), [posts,setPosts] = useState<Post[]>(seedPosts);
  const [loading,setLoading] = useState(!!supabase), [error,setError] = useState('');
  const reload = async () => {
    if (!supabase) return;
    try {
      const [site,work,writing] = await Promise.all([supabase.from('site_content').select('data').eq('id','main').maybeSingle(), supabase.from('projects').select('data').order('position'), supabase.from('posts').select('*').order('published_at',{ascending:false,nullsFirst:false})]);
      if (site.error || work.error || writing.error) throw site.error || work.error || writing.error;
      if (site.data) setSettings({...defaultSettings,...site.data.data});
      if (work.data?.length || site.data?.data.projectsInitialized) setProjects((work.data || []).map(row=>row.data));
      setPosts((writing.data || []).filter(post=>post.status==='published' && post.published_at && new Date(post.published_at).getTime()<=Date.now()));
      setError('');
    } catch (e) { setError(e instanceof Error ? e.message : 'Could not load content.'); }
    finally { setLoading(false); }
  };
  useEffect(()=>{void reload();},[]);
  return <ContentContext.Provider value={{settings,projects,posts,loading,error,reload}}>{children}</ContentContext.Provider>;
}
