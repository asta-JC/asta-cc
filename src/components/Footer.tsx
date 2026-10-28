import React from 'react';
import { Github, Send, Terminal, ArrowUp, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="border-t border-[#1a1a1a] px-6 sm:px-12 lg:px-16 pt-10 pb-8"
      style={{
        backgroundColor: 'hsl(0 0% 3%)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-[#1f1f1f]">
          {/* Left: Name and Role */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-primary" />
              <span className="font-sora font-bold text-base text-[#f2f2f2]">
                {PERSONAL_INFO.name}
              </span>
              <span className="font-mono text-[10px] text-primary bg-primary/10 px-1.5 py-0.5 rounded border border-primary/20">
                {PERSONAL_INFO.shortName}
              </span>
            </div>
            <span className="font-mono text-[10px] text-muted">
              {PERSONAL_INFO.role} · {PERSONAL_INFO.location}
            </span>
          </div>

          {/* Right: Social Icon Links */}
          <div className="flex items-center gap-3">
            {PERSONAL_INFO.github && (
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-md bg-[#121212] border border-[#212121] text-muted hover:text-primary hover:border-primary/50 transition-all hover:scale-105"
              >
                <Github className="w-4 h-4" />
              </a>
            )}

            {PERSONAL_INFO.telegram && (
              <a
                href={PERSONAL_INFO.telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram Message"
                className="p-2 rounded-md bg-[#121212] border border-[#212121] text-muted hover:text-primary hover:border-primary/50 transition-all hover:scale-105"
              >
                <Send className="w-4 h-4" />
              </a>
            )}

            {PERSONAL_INFO.email && (
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Email Me"
                className="p-2 rounded-md bg-[#121212] border border-[#212121] text-muted hover:text-primary hover:border-primary/50 transition-all hover:scale-105"
              >
                <Mail className="w-4 h-4" />
              </a>
            )}

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-md bg-[#121212] border border-[#212121] text-muted hover:text-primary hover:border-primary/50 transition-all ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-muted">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name} ({PERSONAL_INFO.shortName}). All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Android · Kotlin · Jetpack Compose · Git
            </span>
            <span>·</span>
            <span>JetBrains Mono typography</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
