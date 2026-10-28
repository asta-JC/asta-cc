import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Github, ExternalLink, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/portfolio';
import { ProjectMockup } from './ProjectMockup';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto scroll-mt-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
        <div>
          <div className="font-mono text-[11px] text-primary tracking-widest uppercase mb-2 flex items-center gap-2">
            <span className="text-muted">01 //</span>
            <span>FEATURED WORK</span>
          </div>
          <h2 className="font-sora font-extrabold text-[#f2f2f2] text-3xl sm:text-4xl lg:text-5xl tracking-[-0.04em]">
            Projects<span className="text-primary">.</span>
          </h2>
        </div>
        <p className="font-sora font-light text-muted text-sm sm:text-base max-w-md">
          Selected production applications engineered for high performance, sub-second latency, and intuitive developer experiences.
        </p>
      </div>

      {/* Stacked Project Cards */}
      <div className="space-y-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className="group relative bg-[#121212] border border-[#212121] rounded-[12px] p-6 sm:p-8 lg:p-10 card-glow overflow-hidden"
          >
            {/* Ambient internal card glow on hover */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/0 group-hover:bg-primary/[0.03] rounded-full blur-3xl pointer-events-none transition-colors duration-500" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Column: Project Info */}
              <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6">
                <div>
                  {/* Category / Stack Tag */}
                  <div className="font-mono text-[10px] text-primary font-medium tracking-wider mb-3 uppercase flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{project.tag}</span>
                  </div>

                  {/* Project Title */}
                  <h3 className="font-sora font-bold text-2xl sm:text-[24px] text-[#f2f2f2] group-hover:text-primary transition-colors tracking-tight mb-3">
                    {project.title}
                  </h3>

                  {/* 2-line Description */}
                  <p className="font-sora font-light text-muted text-[14px] sm:text-[15px] leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Real-world Metrics Banner */}
                  {project.metrics && (
                    <div className="font-mono text-[11px] text-[#f2f2f2]/90 bg-[#1a1a1a] border border-[#262626] rounded-md px-3 py-2 mb-6 flex items-center gap-2 w-fit">
                      <Sparkles className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{project.metrics}</span>
                    </div>
                  )}

                  {/* Tech Chip Row */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] text-muted group-hover:text-[#f2f2f2] bg-[#181818] border border-[#242424] px-2.5 py-1 rounded-[4px] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-6 pt-2 border-t border-[#1e1e1e]">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary hover:text-primary-dark font-sora font-semibold text-[13px] group/link transition-colors cursor-pointer"
                  >
                    <span>View project</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-muted hover:text-foreground font-mono text-[12px] transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source code</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive UI Mockup / Screenshot */}
              <div className="lg:col-span-6 w-full relative">
                <div className="relative group/mockup rounded-lg overflow-hidden border border-[#212121] group-hover:border-primary/30 transition-all duration-300">
                  <ProjectMockup type={project.featuredType} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
