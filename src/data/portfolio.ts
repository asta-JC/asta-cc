import { Project, TechItem, RepoItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Ravshanov Nurmuhammad',
  shortName: 'Asta',
  role: 'Software Engineer',
  tagline: 'AVAILABLE FOR HIRE · 2026',
  headline: 'Building the future, one line of code at a time.',
  bio: "Ravshanov Nurmuhammad (Asta) is an Android and web developer from Uzbekistan who builds thoughtful apps and practical digital products. He is developing his skills through hands-on projects, working toward his goal of becoming a senior software engineer.",
  email: 'asta8nurmuhammad@gmail.com',
  github: 'https://github.com/asta-JC',
  linkedin: '', // Hidden / Not provided
  twitter: '', // Hidden / Not provided
  telegram: 'https://t.me/GreatProgrammer',
  telegramHandle: '@GreatProgrammer',
  location: 'Andijan, Uzbekistan · UTC+5',
  yearsExp: 'Active Builder',
  projectsCompleted: '8 CherryApps & Web',
  openSource: 'Open Source Builder',
  workPreference: 'Remote & Hybrid',
};

export const HERO_TECH_TAGS = [
  'Kotlin',
  'Jetpack Compose',
  'Android',
  'Git',
  'GitHub'
];

export const PROJECTS: Project[] = [
  {
    id: 'mushirom',
    title: 'Mushirom',
    status: 'live-demo',
    tag: 'NEXT.JS · TYPESCRIPT · SUPABASE · CLOUDFLARE R2',
    description: 'A modern movie and series streaming platform designed to simplify content discovery and viewing, combining a contemporary web experience with user authentication and multilingual support.',
    metrics: 'Full-stack architecture: Supabase auth + Cloudflare R2 media storage on Vercel',
    technologies: [
      'Next.js',
      'TypeScript',
      'React',
      'Tailwind CSS',
      'Node.js',
      'Supabase',
      'Cloudflare R2',
      'Vercel'
    ],
    liveUrl: 'https://mushirom-dub.vercel.app',
    githubUrl: 'https://github.com/asta-JC',
    featuredType: 'mushirom',
  },
  {
    id: 'cherryapps',
    title: 'CherryApps',
    status: 'public-repositories',
    tag: 'KOTLIN · JETPACK COMPOSE · MATERIAL 3 · ROOM',
    description: 'A family of eight Kotlin-based Android applications, built around everyday needs with thoughtful interfaces and a shared design language.',
    metrics: 'Eight members of the CherryApps family',
    technologies: [
      'Kotlin',
      'Android SDK',
      'Jetpack Compose',
      'Material 3',
      'Gradle',
      'Room Database',
      'Git'
    ],
    repositories: [
      'Cherry-Calculator',
      'Cherry-MusicPlayer',
      'Cherry-Timer',
      'Cherry-Weather',
      'Cherry-Messages',
      'Cherry-Office'
    ],
    githubUrl: 'https://github.com/asta-JC',
    featuredType: 'cherryapps',
  },
  {
    id: 'mysterious-project',
    title: 'Mysterious project',
    status: 'in-development',
    tag: 'UNDER WRAPS',
    description: 'Something new is taking shape. The details are under wraps for now — more to come.',
    metrics: 'More to come',
    technologies: [],
    featuredType: 'cherrynotes',
  },
];

export const TECH_STACK = {
  frontend: [
    { name: 'Kotlin', category: 'frontend', icon: 'Code2', level: '95%' },
    { name: 'Jetpack Compose', category: 'frontend', icon: 'Sparkles', level: '92%' },
    { name: 'Android SDK', category: 'frontend', icon: 'Smartphone', level: '90%' },
    { name: 'Next.js & React', category: 'frontend', icon: 'Globe', level: '88%' },
    { name: 'TypeScript & Tailwind', category: 'frontend', icon: 'FileCode2', level: '88%' },
    { name: 'Material Design 3', category: 'frontend', icon: 'Palette', level: '90%' },
  ],
  backend: [
    { name: 'Supabase & PostgreSQL', category: 'backend', icon: 'Database', level: '88%' },
    { name: 'Room Database & SQLite', category: 'backend', icon: 'Database', level: '92%' },
    { name: 'Cloudflare R2 & Vercel', category: 'backend', icon: 'Cloud', level: '86%' },
    { name: 'Coroutines & Flow', category: 'backend', icon: 'Zap', level: '90%' },
    { name: 'REST APIs & Node.js', category: 'backend', icon: 'Server', level: '86%' },
    { name: 'Git & GitHub', category: 'backend', icon: 'GitBranch', level: '95%' },
  ],
};

export const GITHUB_STATS = {
  starsEarned: '6+',
  reposPublic: 'Kotlin',
  contributionsThisYear: 'Active',
};

export const OPEN_SOURCE_REPOS: RepoItem[] = [
  {
    name: 'Cherry-Calculator',
    description: 'Clean, modern Android calculator app crafted with Kotlin, Jetpack Compose, and Material 3 design principles.',
    language: 'Kotlin',
    langColor: '#A97BFF',
    stars: 12,
    forks: 3,
    url: 'https://github.com/asta-JC/Cherry-Calculator',
  },
  {
    name: 'Cherry-MusicPlayer',
    description: 'Lightweight Android music player built with Jetpack Compose, foreground audio playback service, and local storage scanning.',
    language: 'Kotlin',
    langColor: '#A97BFF',
    stars: 18,
    forks: 4,
    url: 'https://github.com/asta-JC/Cherry-MusicPlayer',
  },
  {
    name: 'Cherry-Weather',
    description: 'Real-time weather forecast application for Android utilizing Kotlin Coroutines, REST API client, and dynamic weather cards.',
    language: 'Kotlin',
    langColor: '#A97BFF',
    stars: 15,
    forks: 2,
    url: 'https://github.com/asta-JC/Cherry-Weather',
  },
];
