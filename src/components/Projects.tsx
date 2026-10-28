import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Github, Sparkles, FolderGit2, CheckCircle2 } from 'lucide-react';
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
          A showcase of real-world full-stack web platforms and native Android application suites built with Kotlin and modern web frameworks.
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
                  {/* Category / Stack Tag & Status */}
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className="font-mono text-[10px] text-primary font-medium tracking-wider uppercase flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {project.tag}
                    </span>

                    {project.status === 'live-demo' && (
                      <span className="font-mono text-[9px] text-[#22d472] bg-[#22d472]/10 border border-[#22d472]/30 px-2 py-0.5 rounded uppercase">
                        ● LIVE DEMO
                      </span>
                    )}
                    {project.status === 'public-repositories' && (
                      <span className="font-mono text-[9px] text-primary bg-primary/10 border border-primary/30 px-2 py-0.5 rounded uppercase">
                        ● 6 PUBLIC REPOS
                      </span>
                    )}
                    {project.status === 'in-development' && (
                      <span className="font-mono text-[9px] text-[#ffbd2e] bg-[#ffbd2e]/10 border border-[#ffbd2e]/30 px-2 py-0.5 rounded uppercase">
                        ● IN DEVELOPMENT
                      </span>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3 className="font-sora font-bold text-2xl sm:text-[26px] text-[#f2f2f2] group-hover:text-primary transition-colors tracking-tight mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sora font-light text-muted text-[14px] sm:text-[15px] leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Architecture Highlight Banner */}
                  {project.metrics && (
                    <div className="font-mono text-[11px] text-[#f2f2f2]/90 bg-[#1a1a1a] border border-[#262626] rounded-md px-3 py-2 mb-4 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{project.metrics}</span>
                    </div>
                  )}

                  {/* If CherryApps: Show Repositories List */}
                  {project.repositories && (
                    <div className="mb-4 p-3 rounded-lg bg-[#161616] border border-[#262626]">
                      <div className="font-mono text-[10px] text-primary uppercase mb-2 flex items-center gap-1">
                        <FolderGit2 className="w-3 h-3" />
                        <span>Included Repositories:</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.repositories.map((repo) => (
                          <span
                            key={repo}
                            className="font-mono text-[10px] text-foreground bg-[#202020] px-2 py-0.5 rounded border border-[#2b2b2b]"
                          >
                            {repo}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* If CherryNotes: Show Planned Features */}
                  {project.plannedFeatures && (
                    <div className="mb-4 p-3 rounded-lg bg-[#161616] border border-[#262626]">
                      <div className="font-mono text-[10px] text-primary uppercase mb-2 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Planned Features:</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.plannedFeatures.slice(0, 5).map((feature) => (
                          <span
                            key={feature}
                            className="font-mono text-[10px] text-muted bg-[#202020] px-2 py-0.5 rounded"
                          >
                            ✓ {feature}
                          </span>
                        ))}
                      </div>
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
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-primary hover:text-primary-dark font-sora font-semibold text-[13px] group/link transition-colors cursor-pointer"
                    >
                      <span>Visit Live Platform</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-muted hover:text-foreground font-mono text-[12px] transition-colors"
                    >
                      <Github className="w-3.5 h-3.5 text-primary" />
                      <span>{project.status === 'live-demo' ? 'Source on GitHub' : 'View on GitHub'}</span>
                    </a>
                  )}

                  {project.status === 'in-development' && !project.liveUrl && (
                    <span className="font-mono text-xs text-muted flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]" />
                      Active Development
                    </span>
                  )}
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
