import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, HERO_TECH_TAGS } from '../data/portfolio';
import { TerminalCodeBlock } from './TerminalCodeBlock';

interface HeroProps {
  onOpenCV?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-24 pb-16 lg:py-0 px-6 sm:px-12 lg:px-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-primary/3 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Headline and CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          {/* Badge: Available for hire */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border mb-6 group hover:border-primary/40 transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="font-mono text-[11px] text-primary font-medium tracking-wider">
              {PERSONAL_INFO.tagline}
            </span>
            <span className="cursor-blink font-mono text-primary text-xs font-bold leading-none">
              |
            </span>
          </motion.div>

          {/* H1 Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sora font-extrabold text-[#f2f2f2] text-left tracking-[-0.04em] leading-[0.92] text-[46px] sm:text-[64px] lg:text-[76px] xl:text-[84px] mb-6"
            style={{
              letterSpacing: '-0.04em',
              lineHeight: 0.94,
            }}
          >
            Building apps
            <br />
            <span className="text-white">people actually use.</span>
            <span className="text-primary cursor-blink inline-block ml-1">|</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sora font-light text-[#6b6b6b] text-[15px] sm:text-[16px] leading-relaxed max-w-[420px] mb-8"
          >
            {PERSONAL_INFO.bio}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-[#18a355] text-[#0a0a0a] font-sora font-semibold text-[13px] px-6 py-3.5 rounded-[6px] transition-all duration-200 shadow-md shadow-primary/20 hover:shadow-primary/40 active:scale-95 group"
            >
              <span>View projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <button
              onClick={() => {
                if (onOpenCV) {
                  onOpenCV();
                } else {
                  window.open('/resume.pdf', '_blank');
                }
              }}
              className="inline-flex items-center justify-center gap-2 bg-surface hover:bg-surface-raised border border-border hover:border-primary/50 text-[#f2f2f2] font-sora font-medium text-[13px] px-5 py-3.5 rounded-[6px] transition-all duration-200 active:scale-95"
            >
              <Download className="w-4 h-4 text-primary" />
              <span>Download CV</span>
            </button>
          </motion.div>

          {/* Tech Tag Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-2"
          >
            <span className="font-mono text-[10px] text-muted uppercase mr-1 select-none flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-primary/60" /> Core Stack:
            </span>
            {HERO_TECH_TAGS.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[10px] text-primary bg-[#121212] border border-[#212121] px-2.5 py-1 rounded-[4px] hover:border-primary/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Floating Terminal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="lg:col-span-5 flex justify-center lg:justify-end w-full"
        >
          <div className="w-full max-w-[460px] sm:w-[92%] lg:w-full">
            <TerminalCodeBlock />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
