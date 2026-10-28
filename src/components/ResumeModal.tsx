import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Printer, ExternalLink, Briefcase, GraduationCap, Code } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl bg-[#121212] border border-[#262626] rounded-xl shadow-2xl p-6 sm:p-8 z-10 card-glow max-h-[90vh] overflow-y-auto"
          >
            {/* Action Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-[#212121] mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                <span className="font-mono text-xs text-muted">CURRICULUM VITAE · 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="px-3 py-1.5 rounded bg-surface hover:bg-surface-raised border border-border text-muted hover:text-foreground text-xs font-mono flex items-center gap-1.5 transition-colors"
                >
                  <Printer className="w-3.5 h-3.5 text-primary" />
                  <span>Print / PDF</span>
                </button>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-md text-muted hover:text-foreground hover:bg-[#1f1f1f] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Resume Content */}
            <div className="space-y-6 text-left">
              {/* Header */}
              <div>
                <h2 className="font-sora font-extrabold text-2xl sm:text-3xl text-foreground">
                  {PERSONAL_INFO.name}
                </h2>
                <div className="font-mono text-primary text-sm font-semibold mt-1">
                  {PERSONAL_INFO.role} & Software Architect
                </div>
                <div className="font-mono text-xs text-muted mt-2 flex flex-wrap gap-x-4 gap-y-1">
                  <span>{PERSONAL_INFO.email}</span>
                  <span>•</span>
                  <span>{PERSONAL_INFO.location}</span>
                  <span>•</span>
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-primary hover:underline">
                    github.com/nurmuhammad-dev
                  </a>
                </div>
              </div>

              {/* Summary */}
              <div className="p-4 rounded-lg bg-[#181818] border border-[#262626] font-sora text-xs text-muted leading-relaxed">
                Full-stack engineer with 5+ years of experience specializing in high-concurrency Node.js architectures, React/Next.js frontend systems, and distributed database optimization. Passionate about sub-50ms latency, strict TypeScript typing, and developer tooling.
              </div>

              {/* Experience */}
              <div>
                <div className="font-mono text-xs text-primary font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Professional Experience</span>
                </div>

                <div className="space-y-4">
                  <div className="border-l-2 border-primary/40 pl-4 py-1">
                    <div className="flex justify-between items-start text-xs font-sora">
                      <span className="font-bold text-foreground">Senior Full-Stack Engineer</span>
                      <span className="font-mono text-muted text-[11px]">2023 — Present</span>
                    </div>
                    <div className="font-mono text-[11px] text-primary/80">Hyperion Systems · Cloud Infrastructure</div>
                    <p className="font-sora text-xs text-muted mt-1.5 leading-relaxed">
                      Architected real-time streaming pipelines processing 45M daily telemetry events using ClickHouse, Node.js, and React. Reduced p99 latency from 340ms to 84ms.
                    </p>
                  </div>

                  <div className="border-l-2 border-[#2b2b2b] pl-4 py-1">
                    <div className="flex justify-between items-start text-xs font-sora">
                      <span className="font-bold text-foreground">Full-Stack Developer</span>
                      <span className="font-mono text-muted text-[11px]">2021 — 2023</span>
                    </div>
                    <div className="font-mono text-[11px] text-primary/80">ScaleStack Technologies</div>
                    <p className="font-sora text-xs text-muted mt-1.5 leading-relaxed">
                      Spearheaded the rebuild of the flagship multi-tenant e-commerce platform using Next.js 14, TypeScript, and Redis caching. Achieved sub-50ms median TTFB globally.
                    </p>
                  </div>

                  <div className="border-l-2 border-[#2b2b2b] pl-4 py-1">
                    <div className="flex justify-between items-start text-xs font-sora">
                      <span className="font-bold text-foreground">Software Engineer</span>
                      <span className="font-mono text-muted text-[11px]">2019 — 2021</span>
                    </div>
                    <div className="font-mono text-[11px] text-primary/80">Horizon Digital Agency</div>
                    <p className="font-sora text-xs text-muted mt-1.5 leading-relaxed">
                      Delivered 20+ responsive web applications using React, PostgreSQL, and Express with CI/CD automation and test suites.
                    </p>
                  </div>
                </div>
              </div>

              {/* Education & Skills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#262626]">
                <div>
                  <div className="font-mono text-xs text-primary font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Education</span>
                  </div>
                  <div className="font-sora text-xs text-foreground font-semibold">
                    B.S. in Computer Science & Software Engineering
                  </div>
                  <div className="font-mono text-[11px] text-muted">2016 — 2020</div>
                </div>

                <div>
                  <div className="font-mono text-xs text-primary font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Code className="w-3.5 h-3.5" />
                    <span>Core Competencies</span>
                  </div>
                  <div className="font-mono text-[11px] text-muted space-y-1">
                    <div>React, Next.js, TypeScript, Tailwind</div>
                    <div>Node.js, Express, PostgreSQL, Prisma, Redis</div>
                    <div>Docker, AWS, WebSockets, Kafka, CI/CD</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
