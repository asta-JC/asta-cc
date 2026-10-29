import { Project, TechItem, RepoItem, Testimonial } from '../types';

export const PERSONAL_INFO = {
  name: 'Ravshanov Nurmuhammad',
  shortName: 'Asta',
  role: 'Software Engineer',
  tagline: 'AVAILABLE FOR HIRE · 2026',
  headline: 'Building the future, one line of code at a time.',
  bio: "I'm an aspiring software engineer passionate about building useful apps and turning ideas into reality. I'm constantly learning, experimenting, and creating software that solves real problems.",
  email: 'asta8nurmuhammad@gmail.com',
  github: 'https://github.com/asta-JC',
  linkedin: '', // Hidden / Not provided
  twitter: '', // Hidden / Not provided
  telegram: 'https://t.me/GreatProgrammer',
  telegramHandle: '@GreatProgrammer',
  location: 'Andijan, Uzbekistan · UTC+5',
  yearsExp: 'Active Builder',
  projectsCompleted: '6+ Kotlin Apps & Web',
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
    description: 'A collection of six Kotlin-based Android applications focused on everyday needs, covering calculations, music, time management, weather, messaging, and office-related tasks.',
    metrics: 'Six public Kotlin Android apps demonstrating real-world architecture concepts',
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
    id: 'cherrynotes',
    title: 'CherryNotes',
    status: 'in-development',
    tag: 'KOTLIN · JETPACK COMPOSE · DATASTORE · SUPABASE',
    description: 'An upcoming Android productivity application planned to combine note-taking and task management with organized notes, search, customizable themes, reminders, to-do lists, and cloud synchronization.',
    metrics: 'All-in-one productivity with notes, reminders, and to-do lists',
    technologies: [
      'Kotlin',
      'Android',
      'Jetpack Compose',
      'Material 3',
      'DataStore',
      'Room Database',
      'Supabase'
    ],
    plannedFeatures: [
      'Create, edit, and delete notes',
      'Folders or tags',
      'Search and filtering',
      'Pinned and favorite notes',
      'Dark mode and themes',
      'Supabase cloud sync',
      'Reminders and to-do lists',
      'Markdown formatting'
    ],
    githubUrl: 'https://github.com/asta-JC',
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

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Nurmuhammad is smart, has a great sense of humor, and knows how to make conversations enjoyable. His intelligence and personality make him a genuinely interesting person to talk to.",
    name: 'Jabbarova Gulbadanbegim',
    role: 'International Law',
    company: 'Webster University',
    avatar: 'JG',
  },
];
