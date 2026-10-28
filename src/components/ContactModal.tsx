import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, Copy, Check, Mail, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Project inquiry',
    message: '',
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitted(true);
    setTimeout(() => {
      // open mailto as fallback or reset
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        `[Portfolio] ${formData.subject} from ${formData.name}`
      )}&body=${encodeURIComponent(formData.message)}`;
    }, 1200);
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
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-lg bg-[#121212] border border-[#262626] rounded-xl shadow-2xl p-6 sm:p-8 z-10 card-glow overflow-hidden"
          >
            {/* Top Accent line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-1.5 rounded-md text-muted hover:text-foreground hover:bg-[#1f1f1f] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <div className="font-mono text-[10px] text-primary uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                START A CONVERSATION
              </div>
              <h3 className="font-sora font-bold text-2xl text-[#f2f2f2]">
                Let's discuss your project
              </h3>
              <p className="font-sora font-light text-muted text-xs mt-1">
                Direct channel to Ravshanov Nurmuhammad. I'll get back within 4 hours.
              </p>
            </div>

            {/* Direct Email Pill */}
            <div className="bg-[#181818] border border-[#292929] rounded-lg p-3 flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 text-xs font-mono">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-[#f2f2f2]">{PERSONAL_INFO.email}</span>
              </div>
              <button
                type="button"
                onClick={handleCopy}
                className="px-2.5 py-1 rounded bg-[#242424] hover:bg-[#2e2e2e] text-[11px] font-mono text-primary flex items-center gap-1 transition-colors"
              >
                {copied ? <Check className="w-3 h-3 text-primary" /> : <Copy className="w-3 h-3" />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>

            {/* Form */}
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center flex flex-col items-center justify-center space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-sora font-bold text-lg text-foreground">Message Dispatched!</h4>
                <p className="font-sora font-light text-muted text-xs max-w-xs">
                  Opening your default mail client with the drafted inquiry. Looking forward to speaking!
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-5 py-2 rounded bg-primary text-black font-semibold text-xs"
                >
                  Close Window
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[11px] text-muted mb-1.5 uppercase">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#171717] border border-[#2b2b2b] rounded-md px-3 py-2 text-xs text-[#f2f2f2] placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary font-sora"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] text-muted mb-1.5 uppercase">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#171717] border border-[#2b2b2b] rounded-md px-3 py-2 text-xs text-[#f2f2f2] placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary font-sora"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[11px] text-muted mb-1.5 uppercase">
                    Subject / Goal
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#171717] border border-[#2b2b2b] rounded-md px-3 py-2 text-xs text-[#f2f2f2] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary font-sora"
                  >
                    <option value="Full-Time Engineering Role">Full-Time Engineering Role</option>
                    <option value="Contract / Architecture Consulting">Contract / Architecture Consulting</option>
                    <option value="SaaS MVP Development">SaaS MVP Development</option>
                    <option value="General Technical Inquiry">General Technical Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[11px] text-muted mb-1.5 uppercase">
                    Project Brief
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your product requirements, timeline, or current stack challenges..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#171717] border border-[#2b2b2b] rounded-md px-3 py-2 text-xs text-[#f2f2f2] placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary font-sora resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-[#18a355] text-[#0a0a0a] font-sora font-semibold text-xs py-3 rounded-[6px] transition-all duration-200 active:scale-95 shadow-md shadow-primary/20"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
