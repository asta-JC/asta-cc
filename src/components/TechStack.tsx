import React from 'react';
import { motion } from 'motion/react';
import {
  Code2,
  Globe,
  FileCode2,
  Palette,
  Sparkles,
  Database,
  Server,
  Cpu,
  Layers,
  Binary,
  Cloud,
  Terminal,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { TECH_STACK } from '../data/portfolio';

// Icon mapper for tech items
const getTechIcon = (name: string) => {
  switch (name) {
    case 'React':
      return <Code2 className="w-4 h-4 text-primary" />;
    case 'Next.js':
      return <Globe className="w-4 h-4 text-primary" />;
    case 'TypeScript':
      return <FileCode2 className="w-4 h-4 text-primary" />;
    case 'Tailwind CSS':
      return <Palette className="w-4 h-4 text-primary" />;
    case 'Framer Motion':
      return <Sparkles className="w-4 h-4 text-primary" />;
    case 'TanStack Query':
      return <Zap className="w-4 h-4 text-primary" />;
    case 'Node.js':
      return <Server className="w-4 h-4 text-primary" />;
    case 'Express / Nest':
      return <Cpu className="w-4 h-4 text-primary" />;
    case 'PostgreSQL':
      return <Database className="w-4 h-4 text-primary" />;
    case 'Redis':
      return <Layers className="w-4 h-4 text-primary" />;
    case 'Prisma ORM':
      return <Binary className="w-4 h-4 text-primary" />;
    case 'AWS & Docker':
      return <Cloud className="w-4 h-4 text-primary" />;
    default:
      return <Terminal className="w-4 h-4 text-primary" />;
  }
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
            Core technologies and runtime environments I use to construct fast, production-grade architectures.
          </p>
        </div>

        {/* Stack Groups */}
        <div className="space-y-10">
          {/* Row 1: Frontend */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-[9px] uppercase tracking-wider text-muted font-semibold">
                // LAYER 01: FRONTEND
              </span>
              <div className="h-[1px] flex-1 bg-border/60" />
              <span className="font-mono text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                CLIENT-SIDE & SSR
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
                    <span className="font-mono text-[9px] text-muted group-hover:text-primary transition-colors">
                      {tech.level}
                    </span>
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

          {/* Row 2: Backend */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-[9px] uppercase tracking-wider text-muted font-semibold">
                // LAYER 02: BACKEND & INFRASTRUCTURE
              </span>
              <div className="h-[1px] flex-1 bg-border/60" />
              <span className="font-mono text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                DISTRIBUTED & EDGE
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
                    <span className="font-mono text-[9px] text-muted group-hover:text-primary transition-colors">
                      {tech.level}
                    </span>
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

        {/* Technical Standard Guarantees Strip */}
        <div className="mt-12 pt-8 border-t border-[#262626] grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-[#0e0e0e] border border-[#212121]">
            <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
            <div className="font-mono text-[11px]">
              <span className="text-foreground font-semibold block">Strict Type Safety</span>
              <span className="text-muted text-[10px]">100% TypeScript compile-time checks</span>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-[#0e0e0e] border border-[#212121]">
            <Zap className="w-4 h-4 text-primary shrink-0" />
            <div className="font-mono text-[11px]">
              <span className="text-foreground font-semibold block">Zero-Jank 60FPS</span>
              <span className="text-muted text-[10px]">Optimized React renders & CSS GPU accel</span>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-[#0e0e0e] border border-[#212121]">
            <Database className="w-4 h-4 text-primary shrink-0" />
            <div className="font-mono text-[11px]">
              <span className="text-foreground font-semibold block">ACID Compliant</span>
              <span className="text-muted text-[10px]">Resilient relational schema migrations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
