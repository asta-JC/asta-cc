import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail, Copy, Check, Clock, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

interface ContactCTAProps {
  onOpenModal: () => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ onOpenModal }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-24 px-6 sm:px-12 lg:px-16 overflow-hidden scroll-mt-12">
      {/* Centered Radial Green Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle, hsl(142 72% 50% / 0.10) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-border mb-6 card-glow"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="font-mono text-[11px] text-primary font-medium tracking-wide">
            Currently available · 2–3 project slots open
          </span>
        </motion.div>

        {/* H2 Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-sora font-black text-white text-4xl sm:text-5xl lg:text-6xl tracking-[-0.04em] mb-6"
        >
          Let's build something<span className="text-primary">.</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-sora font-light text-muted text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Have a product in mind, need to re-architect an existing stack, or looking for a high-impact senior engineer to join your team?
        </motion.p>

        {/* Two CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <button
            onClick={onOpenModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-[#18a355] text-[#0a0a0a] font-sora font-semibold text-sm px-7 py-3.5 rounded-[6px] transition-all duration-200 shadow-lg shadow-primary/25 hover:shadow-primary/45 active:scale-95 group cursor-pointer"
          >
            <span>Start a conversation</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={handleCopyEmail}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-surface hover:bg-surface-raised border border-border hover:border-primary/50 text-[#f2f2f2] font-sora font-medium text-sm px-6 py-3.5 rounded-[6px] transition-all duration-200 active:scale-95 group"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-primary" />
                <span className="text-primary font-mono text-xs">Email copied!</span>
              </>
            ) : (
              <>
                <Mail className="w-4 h-4 text-muted group-hover:text-primary transition-colors" />
                <span>Or email me</span>
                <span className="font-mono text-xs text-muted group-hover:text-foreground transition-colors ml-1">
                  ({PERSONAL_INFO.email})
                </span>
              </>
            )}
          </button>
        </motion.div>

        {/* Response Time Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-2 font-mono text-[11px] text-muted"
        >
          <Clock className="w-3.5 h-3.5 text-primary/70" />
          <span>Average response time: &lt; 4 hours · UTC±5</span>
        </motion.div>
      </div>
    </section>
  );
};
