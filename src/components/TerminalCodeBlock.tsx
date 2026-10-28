import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Copy, Terminal } from 'lucide-react';

export const TerminalCodeBlock: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const rawCode = `// building the future
const nurmuhammad = {
  role: "Full-Stack Dev",
  stack: ["React", "Node", "TS"],
  open: true
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(rawCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      className="relative w-full max-w-lg mx-auto lg:mx-0 group"
      style={{
        filter: 'drop-shadow(0 0 40px hsl(142 72% 50% / 0.15))',
      }}
    >
      {/* Outer Glow frame */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary/5 rounded-xl blur-sm opacity-50 group-hover:opacity-100 transition duration-500" />

      {/* Terminal Card */}
      <div 
        className="relative bg-[#121212] border border-[#212121] rounded-lg overflow-hidden shadow-2xl transition-all duration-300 group-hover:border-primary/50"
        style={{
          fontFamily: "var(--mono)",
        }}
      >
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#0e0e0e] border-b border-[#212121] select-none text-xs">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]/80 hover:bg-[#ff5f56] transition-colors" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/80 hover:bg-[#ffbd2e] transition-colors" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]/80 hover:bg-[#27c93f] transition-colors" />
            <span className="ml-2 text-muted text-[11px] font-mono flex items-center gap-1.5">
              <Terminal className="w-3 h-3 text-primary/70" />
              developer.ts
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1 text-[10px] text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              live session
            </span>
            <button
              onClick={handleCopy}
              aria-label="Copy snippet"
              className="p-1 rounded text-muted hover:text-foreground hover:bg-[#1a1a1a] transition-colors flex items-center gap-1 text-[11px]"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-primary" />
                  <span className="text-primary text-[10px]">copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="text-[10px]">copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Code Content */}
        <div className="p-5 sm:p-6 text-[13px] leading-relaxed overflow-x-auto text-left select-text">
          <div className="grid grid-cols-[28px_1fr] gap-3">
            {/* Line numbers */}
            <div className="text-muted/50 select-none text-right font-mono text-xs space-y-1">
              <div>01</div>
              <div>02</div>
              <div>03</div>
              <div>04</div>
              <div>05</div>
              <div>06</div>
              <div>07</div>
            </div>

            {/* Code lines */}
            <div className="font-mono text-[13px] space-y-1 font-normal">
              <div>
                <span style={{ color: '#6b6b6b' }}>// building the future</span>
              </div>
              <div>
                <span style={{ color: '#22d472' }}>const</span>{' '}
                <span style={{ color: '#f2f2f2' }} className="font-medium">nurmuhammad</span>{' '}
                <span style={{ color: '#f2f2f2' }}>= {'{'}</span>
              </div>
              <div className="pl-4">
                <span style={{ color: '#f2f2f2' }}>role:</span>{' '}
                <span style={{ color: '#22d472' }}>"Full-Stack Dev"</span>,
              </div>
              <div className="pl-4">
                <span style={{ color: '#f2f2f2' }}>stack:</span>{' '}
                <span style={{ color: '#f2f2f2' }}>[</span>
                <span style={{ color: '#22d472' }}>"React"</span>
                <span style={{ color: '#f2f2f2' }}>, </span>
                <span style={{ color: '#22d472' }}>"Node"</span>
                <span style={{ color: '#f2f2f2' }}>, </span>
                <span style={{ color: '#22d472' }}>"TS"</span>
                <span style={{ color: '#f2f2f2' }}>]</span>,
              </div>
              <div className="pl-4">
                <span style={{ color: '#f2f2f2' }}>open:</span>{' '}
                <span style={{ color: '#22d472' }}>true</span>
              </div>
              <div>
                <span style={{ color: '#f2f2f2' }}>{'}'}</span>
              </div>
              <div className="pt-2 flex items-center gap-2 text-muted text-xs">
                <span className="text-primary font-bold">➜</span>
                <span className="text-muted/80">ready to deploy high-scale systems</span>
                <span className="inline-block w-2 h-4 bg-primary cursor-blink ml-1" />
              </div>
            </div>
          </div>
        </div>

        {/* Status bar */}
        <div className="px-4 py-1.5 bg-[#0a0a0a] border-t border-[#212121] flex items-center justify-between text-[11px] text-muted font-mono">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              TypeScript 5.6
            </span>
            <span className="hidden sm:inline text-muted/50">|</span>
            <span className="hidden sm:inline">UTF-8</span>
          </div>
          <span className="text-primary/90 font-medium">status: available</span>
        </div>
      </div>
    </motion.div>
  );
};
