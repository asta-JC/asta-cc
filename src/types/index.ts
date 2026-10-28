export interface Project {
  id: string;
  title: string;
  tag: string;
  description: string;
  metrics?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featuredType: 'dashboard' | 'ecommerce' | 'collaboration';
}

export interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'devops' | 'tools';
  icon: string;
  level?: string;
}

export interface RepoItem {
  name: string;
  description: string;
  language: string;
  langColor: string;
  stars: number;
  forks: number;
  url: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
}
