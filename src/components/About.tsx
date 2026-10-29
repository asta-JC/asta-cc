import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Laptop, Globe2, Sparkles, CheckCircle2, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

export const About: React.FC = () => {
  const statChips = [
    { label: 'Android & Web Dev', icon: Laptop },
    { label: '6+ Kotlin Apps & Web', icon: Sparkles },
    { label: 'Open Source Explorer', icon: Terminal },
    { label: 'Andijan, UZ · UTC+5', icon: Globe2 },
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

          {/* Bio */}
          <div className="space-y-4 text-muted text-[15px] sm:text-[16px] leading-relaxed font-sora font-light">
            <p>
              I’m <span className="text-primary font-normal">Ravshanov Nurmuhammad</span>, a <span className="text-primary font-normal">17-year-old</span> aspiring software engineer from <span className="text-primary font-normal">Andijan, Uzbekistan</span>. I build practical <span className="text-primary font-normal">Android apps</span> and <span className="text-primary font-normal">web experiences</span> that turn ideas into useful products.
            </p>
            <p>
              My projects include <span className="text-primary font-normal">Mushirom</span>, a movie and series platform, and <span className="text-primary font-normal">CherryApps</span>, a collection of Kotlin Android apps. I’m also building <span className="text-primary font-normal">CherryNotes</span> for notes, reminders, and to-do lists.
            </p>
            <p>
              I care about <span className="text-primary font-normal">clean code</span> and <span className="text-primary font-normal">intuitive design</span>. I’m always learning, exploring new tools, and finding better ways to build and ship software.
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
                <span className="font-mono text-[10px] text-muted">ANDIJAN, UZ · UTC+5</span>
              </div>

              {/* Graphic Portrait Illustration */}
              <div className="relative my-auto flex flex-col items-center justify-center text-center py-4">
                {/* Visual Avatar with Ambient Lighting */}
                <div className="relative w-28 h-28 rounded-full border-2 border-primary/40 p-1 flex items-center justify-center bg-gradient-to-b from-[#1c1c1c] to-[#0d0d0d] shadow-lg group-hover:border-primary transition-colors">
                  <div className="w-full h-full rounded-full bg-[#161616] flex items-center justify-center overflow-hidden relative">
                    <span className="font-sora font-extrabold text-3xl text-primary/90">
                      A
                    </span>
                    {/* Code reflection simulation */}
                    <div className="absolute inset-x-0 bottom-2 text-[7px] font-mono text-primary/40 select-none overflow-hidden whitespace-nowrap">
                      {`{ dev: "asta" }`}
                    </div>
                  </div>
                </div>

                {/* Identity Tag */}
                <h4 className="font-sora font-bold text-foreground text-lg mt-4 mb-0.5">
                  {PERSONAL_INFO.name}
                </h4>
                <p className="font-mono text-xs text-primary font-medium">
                  {PERSONAL_INFO.role} ({PERSONAL_INFO.shortName})
                </p>

                {/* Micro tech indicators */}
                <div className="flex items-center gap-2 mt-4 text-[10px] font-mono text-muted">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-primary" /> Clean Code
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Code2 className="w-3 h-3 text-primary" /> Kotlin & Web
                  </span>
                </div>
              </div>

              {/* Bottom Terminal Snippet */}
              <div className="bg-[#121212] border border-[#212121] rounded p-2.5 font-mono text-[10px] text-left z-10">
                <div className="flex justify-between items-center text-muted text-[9px] mb-1">
                  <span>DEV ENVIRONMENT</span>
                  <span className="text-primary font-bold">Android Studio & VS Code</span>
                </div>
                <div className="text-muted/90 truncate">
                  <span className="text-primary">$</span> git status: <span className="text-foreground">clean branch</span> · git + github
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
