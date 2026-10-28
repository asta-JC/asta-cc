import React from 'react';
import { motion } from 'motion/react';
import {
  Code2,
  Sparkles,
  Smartphone,
  Globe,
  FileCode2,
  Palette,
  Database,
  Cloud,
  Zap,
  Server,
  GitBranch,
  Terminal,
} from 'lucide-react';
import { TECH_STACK } from '../data/portfolio';

// Icon mapper for tech items
const getTechIcon = (name: string) => {
  if (name.includes('Kotlin')) return <Code2 className="w-4 h-4 text-primary" />;
  if (name.includes('Compose')) return <Sparkles className="w-4 h-4 text-primary" />;
  if (name.includes('Android')) return <Smartphone className="w-4 h-4 text-primary" />;
  if (name.includes('Next') || name.includes('React')) return <Globe className="w-4 h-4 text-primary" />;
  if (name.includes('TypeScript')) return <FileCode2 className="w-4 h-4 text-primary" />;
  if (name.includes('Material')) return <Palette className="w-4 h-4 text-primary" />;
  if (name.includes('Database') || name.includes('Room') || name.includes('Supabase')) return <Database className="w-4 h-4 text-primary" />;
  if (name.includes('Cloudflare') || name.includes('Vercel')) return <Cloud className="w-4 h-4 text-primary" />;
  if (name.includes('Coroutines') || name.includes('Flow')) return <Zap className="w-4 h-4 text-primary" />;
  if (name.includes('REST') || name.includes('Node') || name.includes('APIs')) return <Server className="w-4 h-4 text-primary" />;
  if (name.includes('Git')) return <GitBranch className="w-4 h-4 text-primary" />;
  return <Terminal className="w-4 h-4 text-primary" />;
};

export const TechStack: React.FC = () => {
  return (
    <section id="stack" className="bg-[#121212] border-y border-[#212121] py-24 px-6 sm:px-12 lg:px-16 scroll-mt-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-left">
          <div className="font-mono text-[11px] text-primary tracking-widest uppercase mb-2 flex items-center gap-2">
            <span className="text-muted">02 //</span>
            <span>CAPABILITIES</span>
          </div>
          <h2 className="font-sora font-extrabold text-[#f2f2f2] text-3xl sm:text-4xl lg:text-5xl tracking-[-0.04em]">
            The stack<span className="text-primary">.</span>
          </h2>
          <p className="font-sora font-light text-muted text-sm sm:text-base max-w-md mt-3">
            Core technologies, libraries, and runtime platforms I use to build robust Android applications and full-stack web products.
          </p>
        </div>

        {/* Stack Groups */}
        <div className="space-y-10">
          {/* Row 1: Mobile & Frontend */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-[9px] uppercase tracking-wider text-muted font-semibold">
                // LAYER 01: MOBILE & FRONTEND
              </span>
              <div className="h-[1px] flex-1 bg-border/60" />
              <span className="font-mono text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                ANDROID & WEB
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {TECH_STACK.frontend.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="bg-[#171717] hover:bg-[#1c1c1c] border border-[#262626] rounded-lg p-3.5 flex flex-col items-start justify-between card-glow group cursor-default"
                >
                  <div className="flex items-center justify-between w-full mb-3">
                    <div className="p-1.5 rounded bg-[#101010] border border-[#2b2b2b] group-hover:border-primary/50 transition-colors">
                      {getTechIcon(tech.name)}
                    </div>
                    {tech.level && (
                      <span className="font-mono text-[9px] text-muted group-hover:text-primary transition-colors">
                        {tech.level}
                      </span>
                    )}
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-[#f2f2f2] group-hover:text-primary transition-colors font-medium">
                      {tech.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Row 2: Backend & Tooling */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-[9px] uppercase tracking-wider text-muted font-semibold">
                // LAYER 02: BACKEND, STORAGE & TOOLING
              </span>
              <div className="h-[1px] flex-1 bg-border/60" />
              <span className="font-mono text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                DATABASES & CLOUD
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {TECH_STACK.backend.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.15 + index * 0.05 }}
                  className="bg-[#171717] hover:bg-[#1c1c1c] border border-[#262626] rounded-lg p-3.5 flex flex-col items-start justify-between card-glow group cursor-default"
                >
                  <div className="flex items-center justify-between w-full mb-3">
                    <div className="p-1.5 rounded bg-[#101010] border border-[#2b2b2b] group-hover:border-primary/50 transition-colors">
                      {getTechIcon(tech.name)}
                    </div>
                    {tech.level && (
                      <span className="font-mono text-[9px] text-muted group-hover:text-primary transition-colors">
                        {tech.level}
                      </span>
                    )}
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-[#f2f2f2] group-hover:text-primary transition-colors font-medium">
                      {tech.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
