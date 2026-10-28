import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { About } from './components/About';
import { OpenSource } from './components/OpenSource';
import { Testimonials } from './components/Testimonials';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Keyboard shortcut listener (Cmd/Ctrl + K to open contact or modal)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsContactOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsContactOpen(false);
        setIsResumeOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f2f2f2] font-sora selection:bg-[#22d472]/20 selection:text-[#22d472] relative">
      {/* Navbar */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        {/* Section 2: Hero */}
        <Hero onOpenCV={() => setIsResumeOpen(true)} />

        {/* Section 3: Featured Projects */}
        <Projects />

        {/* Section 4: Tech Stack */}
        <TechStack />

        {/* Section 5: About */}
        <About />

        {/* Section 6: Open Source / GitHub */}
        <OpenSource />

        {/* Section 7: Testimonials */}
        <Testimonials />

        {/* Section 8: Contact CTA */}
        <ContactCTA onOpenModal={() => setIsContactOpen(true)} />
      </main>

      {/* Section 9: Footer */}
      <Footer />

      {/* Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
