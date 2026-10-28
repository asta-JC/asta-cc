import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Stack', href: '#stack' },
    { name: 'About', href: '#about' },
    { name: 'Open Source', href: '#opensource' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
          scrolled
            ? 'bg-[#0a0a0a]/92 backdrop-blur-md border-[#212121] shadow-lg shadow-black/40'
            : 'bg-[#0a0a0a]/80 backdrop-blur-md border-[#212121]/60'
        }`}
        style={{
          backgroundColor: 'hsl(var(--background) / 0.92)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
          {/* Left: Brand */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-8 h-8 rounded border border-border bg-surface flex items-center justify-center group-hover:border-primary transition-colors">
              <Terminal className="w-4 h-4 text-primary" />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
              <span className="font-sora font-bold text-[15px] sm:text-[16px] text-[#f2f2f2] tracking-tight group-hover:text-primary transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="font-mono text-[10px] text-primary bg-primary/10 px-1.5 py-0.5 rounded border border-primary/20 w-fit">
                {PERSONAL_INFO.role}
              </span>
            </div>
          </a>

          {/* Center: Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted hover:text-foreground text-[13px] font-sora font-medium transition-colors hover:scale-105 active:scale-95 duration-150 relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right: Action & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                if (onOpenContact) {
                  e.preventDefault();
                  onOpenContact();
                }
              }}
              className="hidden sm:inline-flex items-center gap-1.5 bg-primary hover:bg-[#18a355] text-[#0a0a0a] font-sora font-semibold text-[12px] px-4 py-2 rounded-[6px] transition-all duration-200 shadow-sm shadow-primary/20 hover:shadow-primary/40 active:scale-95 cursor-pointer"
            >
              <span>Hire me</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md border border-border text-muted hover:text-foreground hover:bg-surface transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 bg-[#0e0e0e]/95 backdrop-blur-xl border-b border-border z-40 px-6 py-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sora text-sm text-foreground/80 hover:text-primary py-2 px-3 rounded hover:bg-surface flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="font-mono text-xs text-muted">→</span>
                </a>
              ))}
              <div className="pt-4 border-t border-border">
                <a
                  href="#contact"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenContact) onOpenContact();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-[#18a355] text-[#0a0a0a] font-sora font-semibold text-xs py-3 rounded-[6px] transition-all"
                >
                  <span>Hire me →</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
