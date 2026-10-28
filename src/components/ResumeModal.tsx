import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Briefcase, GraduationCap, Code } from 'lucide-react';
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
                  {PERSONAL_INFO.name} <span className="text-primary text-xl font-normal">({PERSONAL_INFO.shortName})</span>
                </h2>
                <div className="font-mono text-primary text-sm font-semibold mt-1">
                  {PERSONAL_INFO.role} · Android & Web
                </div>
                <div className="font-mono text-xs text-muted mt-2 flex flex-wrap gap-x-4 gap-y-1">
                  <span>{PERSONAL_INFO.email}</span>
                  <span>•</span>
                  <span>{PERSONAL_INFO.location}</span>
                  <span>•</span>
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-primary hover:underline">
                    github.com/asta-JC
                  </a>
                  <span>•</span>
                  <span>Telegram: @GreatProgrammer</span>
                </div>
              </div>

              {/* Summary */}
              <div className="p-4 rounded-lg bg-[#181818] border border-[#262626] font-sora text-xs text-muted leading-relaxed">
                Aspiring software engineer passionate about building modern, practical, and user-focused digital products across Android (Kotlin, Jetpack Compose) and full-stack web platforms (Next.js, Supabase). Focused on clean architecture, maintainability, and reliable software.
              </div>

              {/* Projects & Work */}
              <div>
                <div className="font-mono text-xs text-primary font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Key Projects</span>
                </div>

                <div className="space-y-4">
                  <div className="border-l-2 border-primary/40 pl-4 py-1">
                    <div className="flex justify-between items-start text-xs font-sora">
                      <span className="font-bold text-foreground">Mushirom — Streaming Platform</span>
                      <span className="font-mono text-primary text-[11px]">Live Demo</span>
                    </div>
                    <div className="font-mono text-[11px] text-muted">Next.js · TypeScript · Supabase · Cloudflare R2 · Vercel</div>
                    <p className="font-sora text-xs text-muted mt-1.5 leading-relaxed">
                      Designed and launched a modern streaming platform for movies and series featuring multilingual dubs, user authentication, and high-speed Cloudflare R2 media distribution.
                    </p>
                  </div>

                  <div className="border-l-2 border-[#2b2b2b] pl-4 py-1">
                    <div className="flex justify-between items-start text-xs font-sora">
                      <span className="font-bold text-foreground">CherryApps Suite — 6 Android Apps</span>
                      <span className="font-mono text-primary text-[11px]">Public Repositories</span>
                    </div>
                    <div className="font-mono text-[11px] text-muted">Kotlin · Jetpack Compose · Material 3 · Room Database</div>
                    <p className="font-sora text-xs text-muted mt-1.5 leading-relaxed">
                      Authored six native Android applications (Cherry-Calculator, MusicPlayer, Timer, Weather, Messages, Office) demonstrating modern declarative UI and Clean Architecture.
                    </p>
                  </div>

                  <div className="border-l-2 border-[#2b2b2b] pl-4 py-1">
                    <div className="flex justify-between items-start text-xs font-sora">
                      <span className="font-bold text-foreground">CherryNotes — Productivity App</span>
                      <span className="font-mono text-[#ffbd2e] text-[11px]">In Development</span>
                    </div>
                    <div className="font-mono text-[11px] text-muted">Kotlin · Jetpack Compose · DataStore · Room · Supabase</div>
                    <p className="font-sora text-xs text-muted mt-1.5 leading-relaxed">
                      All-in-one productivity app integrating rich note-taking, task checklists, reminders, customizable themes, and cloud synchronization.
                    </p>
                  </div>
                </div>
              </div>

              {/* Core Competencies */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#262626]">
                <div>
                  <div className="font-mono text-xs text-primary font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Code className="w-3.5 h-3.5" />
                    <span>Mobile & Languages</span>
                  </div>
                  <div className="font-mono text-[11px] text-muted space-y-1">
                    <div>Kotlin, Java fundamentals</div>
                    <div>Jetpack Compose, Android SDK, Material 3</div>
                    <div>Room DB, DataStore, Coroutines & Flow</div>
                  </div>
                </div>

                <div>
                  <div className="font-mono text-xs text-primary font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Web & Tools</span>
                  </div>
                  <div className="font-mono text-[11px] text-muted space-y-1">
                    <div>Next.js, React, TypeScript, Tailwind CSS</div>
                    <div>Supabase, Cloudflare R2, Node.js</div>
                    <div>Git, GitHub, Gradle, Android Studio</div>
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
