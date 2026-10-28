import { Project, TechItem, RepoItem, Testimonial } from '../types';

export const PERSONAL_INFO = {
  name: 'Ravshanov Nurmuhammad',
  shortName: 'Nurmuhammad',
  role: 'Full-Stack Developer',
  tagline: 'AVAILABLE FOR HIRE · 2026',
  headline: 'Building apps people actually use.',
  bio: 'Full-stack developer specialising in React, Node.js, and TypeScript. Fast, accessible, and built to scale.',
  email: 'nurmuhammad@ravshanov.dev',
  github: 'https://github.com/nurmuhammad-dev',
  linkedin: 'https://linkedin.com/in/nurmuhammad-ravshanov',
  twitter: 'https://twitter.com/nurmuhammad_dev',
  telegram: 'https://t.me/nurmuhammad_dev',
  location: 'Remote · UTC±5 (Flexible hours)',
  yearsExp: '5 yrs exp',
  projectsCompleted: '30+ projects',
  openSource: 'Open source contributor',
  workPreference: 'Remote-friendly',
};

export const HERO_TECH_TAGS = [
  'React',
  'Node.js',
  'TypeScript',
  'PostgreSQL',
  'AWS',
  'Next.js'
];

export const PROJECTS: Project[] = [
  {
    id: 'aether-analytics',
    title: 'Aether Analytics',
    tag: 'REACT · NODE · POSTGRES · CLICKHOUSE',
    description: 'High-throughput cloud analytics platform processing 45M+ daily events with sub-second OLAP queries and live streaming telemetry.',
    metrics: 'Sub-120ms p99 query latency · 45M events/day',
    technologies: ['React', 'TypeScript', 'Node.js', 'ClickHouse', 'PostgreSQL', 'Tailwind CSS', 'Kafka'],
    liveUrl: 'https://aether-demo.example.com',
    githubUrl: 'https://github.com/nurmuhammad-dev/aether-analytics',
    featuredType: 'dashboard',
  },
  {
    id: 'veloce-commerce',
    title: 'Veloce Commerce',
    tag: 'NEXT.JS · TYPESCRIPT · PRISMA · REDIS',
    description: 'Headless e-commerce infrastructure featuring edge-rendered storefronts, multi-currency checkout, and sub-50ms global TTFB.',
    metrics: '42ms average TTFB · 99.98% checkout conversion rate',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Redis', 'Stripe API', 'Docker'],
    liveUrl: 'https://veloce-demo.example.com',
    githubUrl: 'https://github.com/nurmuhammad-dev/veloce-commerce',
    featuredType: 'ecommerce',
  },
  {
    id: 'nexus-synapse',
    title: 'Nexus Synapse',
    tag: 'REACT · WEBSOCKETS · CRDT · NODE',
    description: 'Multiplayer interactive workspace featuring zero-conflict CRDT document editing, live cursor presence, and spatial voice channels.',
    metrics: '<15ms synchronization delay · 100+ concurrent peers',
    technologies: ['React', 'WebSockets', 'Node.js', 'Y.js CRDT', 'WebRTC', 'Framer Motion', 'Tailwind CSS'],
    liveUrl: 'https://nexus-synapse-demo.example.com',
    githubUrl: 'https://github.com/nurmuhammad-dev/nexus-synapse',
    featuredType: 'collaboration',
  },
];

export const TECH_STACK = {
  frontend: [
    { name: 'React', category: 'frontend', icon: 'Atom', level: '95%' },
    { name: 'Next.js', category: 'frontend', icon: 'Globe', level: '92%' },
    { name: 'TypeScript', category: 'frontend', icon: 'FileCode2', level: '96%' },
    { name: 'Tailwind CSS', category: 'frontend', icon: 'Palette', level: '95%' },
    { name: 'Framer Motion', category: 'frontend', icon: 'Sparkles', level: '90%' },
    { name: 'TanStack Query', category: 'frontend', icon: 'Database', level: '92%' },
  ],
  backend: [
    { name: 'Node.js', category: 'backend', icon: 'Server', level: '94%' },
    { name: 'Express / Nest', category: 'backend', icon: 'Cpu', level: '90%' },
    { name: 'PostgreSQL', category: 'backend', icon: 'Database', level: '92%' },
    { name: 'Redis', category: 'backend', icon: 'Layers', level: '88%' },
    { name: 'Prisma ORM', category: 'backend', icon: 'Binary', level: '92%' },
    { name: 'AWS & Docker', category: 'backend', icon: 'Cloud', level: '86%' },
  ],
};

export const GITHUB_STATS = {
  starsEarned: '1,420+',
  reposPublic: '48',
  contributionsThisYear: '1,842',
};

export const OPEN_SOURCE_REPOS: RepoItem[] = [
  {
    name: 'fast-cache-ts',
    description: 'High-throughput in-memory caching engine with O(1) LRU eviction policy and strict TypeScript generics support.',
    language: 'TypeScript',
    langColor: '#3178c6',
    stars: 684,
    forks: 72,
    url: 'https://github.com/nurmuhammad-dev/fast-cache-ts',
  },
  {
    name: 'react-terminal-ui',
    description: 'Headless, accessible terminal interface component for modern React apps with command history and ANSI colors.',
    language: 'TypeScript',
    langColor: '#3178c6',
    stars: 492,
    forks: 53,
    url: 'https://github.com/nurmuhammad-dev/react-terminal-ui',
  },
  {
    name: 'postgres-schema-guard',
    description: 'Static analysis CLI tool that detects breaking database migration patterns and locking hazards in CI/CD.',
    language: 'TypeScript',
    langColor: '#22d472',
    stars: 244,
    forks: 29,
    url: 'https://github.com/nurmuhammad-dev/postgres-schema-guard',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Nurmuhammad is one of the sharpest full-stack engineers I've worked with. He re-architected our data pipeline and reduced page load times by 68% in under two weeks.",
    name: 'Alex Rivera',
    role: 'VP of Engineering',
    company: 'ScaleStack Technologies',
    avatar: 'AR',
  },
  {
    quote: "His attention to system reliability and UI polish is exceptional. The real-time canvas he delivered handles hundreds of simultaneous users without a single dropped frame.",
    name: 'Elena Rostova',
    role: 'Lead Product Architect',
    company: 'Horizon Labs',
    avatar: 'ER',
  },
  {
    quote: "Consistently delivers clean, type-safe code that our team easily maintains. A rare engineer who understands both deep backend concurrency and refined frontend micro-interactions.",
    name: 'Marcus Vance',
    role: 'Founder & CTO',
    company: 'Hyperion Systems',
    avatar: 'MV',
  },
];
