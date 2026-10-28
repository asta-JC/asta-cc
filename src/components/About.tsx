import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Laptop, Globe2, Coffee, Sparkles, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

export const About: React.FC = () => {
  const statChips = [
    { label: PERSONAL_INFO.yearsExp, icon: Laptop },
    { label: PERSONAL_INFO.projectsCompleted, icon: Sparkles },
    { label: PERSONAL_INFO.openSource, icon: Terminal },
    { label: PERSONAL_INFO.workPreference, icon: Globe2 },
  ];

  return (
    <section id="about" className="py-24 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto scroll-mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Bio & Philosophy */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Section Marker */}
          <div className="font-mono text-[11px] text-primary tracking-widest uppercase mb-2 flex items-center gap-2">
            <span className="text-muted">03 //</span>
            <span>PROFILE</span>
          </div>

          {/* Heading */}
          <h2 className="font-sora font-extrabold text-[#f2f2f2] text-3xl sm:text-4xl lg:text-5xl tracking-[-0.04em] mb-8">
            About me<span className="text-primary">.</span>
          </h2>

          {/* 3 Paragraphs */}
          <div className="space-y-5 text-muted text-[15px] sm:text-[16px] leading-relaxed font-sora font-light">
            <p>
              I am <span className="text-foreground font-normal">Ravshanov Nurmuhammad</span>, a full-stack software engineer dedicated to building resilient, lightning-fast digital products. Over the past five years, I have navigated complex codebases ranging from early-stage venture prototypes to enterprise cloud architectures handling millions of daily events.
            </p>
            <p>
              My engineering approach prioritizes <span className="text-foreground font-normal">precision and lean architecture</span>. I advocate for strict compile-time type safety, sub-50ms server responses, and accessible user experiences that respect human attention. I treat code maintainability and documentation not as afterthoughts, but as first-class product features.
            </p>
            <p>
              When I'm not writing code or analyzing database execution plans, I contribute to the open-source TypeScript ecosystem, explore modern distributed consensus protocols, and experiment with ergonomic developer workflows.
            </p>
          </div>

          {/* Stat Chips */}
          <div className="mt-8 pt-6 border-t border-border w-full">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {statChips.map((chip) => {
                const IconComponent = chip.icon;
                return (
                  <div
                    key={chip.label}
                    className="p-3 rounded-lg bg-surface border border-border card-glow flex flex-col items-start justify-center gap-2 group"
                  >
                    <IconComponent className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                    <span className="font-mono text-[11px] text-[#f2f2f2] font-medium leading-tight">
                      {chip.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Visual Portrait Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-5 w-full flex justify-center"
        >
          <div className="relative w-full max-w-[420px] rounded-xl bg-surface border border-border p-5 overflow-hidden card-glow shadow-2xl group">
            {/* Green ambient glow ring */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/10 rounded-full blur-2xl pointer-events-none group-hover:bg-primary/20 transition-all duration-500" />

            {/* Developer Desk & Portrait Visual Canvas */}
            <div className="relative rounded-lg bg-[#0c0c0c] border border-[#212121] overflow-hidden aspect-[4/5] flex flex-col justify-between p-6">
              {/* Top Bar of Desk Canvas */}
              <div className="flex items-center justify-between z-10">
                <span className="font-mono text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  WORKSPACE
                </span>
                <span className="font-mono text-[10px] text-muted">UTC±5 · ONLINE</span>
              </div>

              {/* Graphic Portrait Illustration: Developer at dark minimal workstation */}
              <div className="relative my-auto flex flex-col items-center justify-center text-center py-4">
                {/* Visual Avatar with Ambient Lighting */}
                <div className="relative w-28 h-28 rounded-full border-2 border-primary/40 p-1 flex items-center justify-center bg-gradient-to-b from-[#1c1c1c] to-[#0d0d0d] shadow-lg group-hover:border-primary transition-colors">
                  {/* Stylized Developer Silhouette with Terminal Aura */}
                  <div className="w-full h-full rounded-full bg-[#161616] flex items-center justify-center overflow-hidden relative">
                    <svg className="w-20 h-20 text-[#303030] group-hover:text-primary/70 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                    </svg>
                    {/* Code reflection on glasses/screen simulation */}
                    <div className="absolute inset-x-0 bottom-3 text-[7px] font-mono text-primary/40 select-none overflow-hidden whitespace-nowrap">
                      {`{ dev: "active" }`}
                    </div>
                  </div>
                </div>

                {/* Identity Tag */}
                <h4 className="font-sora font-bold text-foreground text-lg mt-4 mb-0.5">
                  {PERSONAL_INFO.name}
                </h4>
                <p className="font-mono text-xs text-primary font-medium">
                  Full-Stack Architect & Dev
                </p>

                {/* Micro tech indicators */}
                <div className="flex items-center gap-2 mt-4 text-[10px] font-mono text-muted">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-primary" /> Verified Code
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Coffee className="w-3 h-3 text-primary" /> Clean Arch
                  </span>
                </div>
              </div>

              {/* Bottom Terminal Snippet */}
              <div className="bg-[#121212] border border-[#212121] rounded p-2.5 font-mono text-[10px] text-left z-10">
                <div className="flex justify-between items-center text-muted text-[9px] mb-1">
                  <span>SYSTEM ENVIRONMENT</span>
                  <span className="text-primary font-bold">ARM64 macOS</span>
                </div>
                <div className="text-muted/90 truncate">
                  <span className="text-primary">$</span> uptime: <span className="text-foreground">99.99%</span> · vim + zsh
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
