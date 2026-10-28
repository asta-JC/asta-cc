import React from 'react';
import { motion } from 'motion/react';
import { Star, GitFork, ArrowUpRight, Github, Code } from 'lucide-react';
import { GITHUB_STATS, OPEN_SOURCE_REPOS, PERSONAL_INFO } from '../data/portfolio';

export const OpenSource: React.FC = () => {
  const stats = [
    { label: 'STARS EARNED', value: GITHUB_STATS.starsEarned },
    { label: 'REPOS PUBLIC', value: GITHUB_STATS.reposPublic },
    { label: 'CONTRIBUTIONS THIS YEAR', value: GITHUB_STATS.contributionsThisYear },
  ];

  return (
    <section id="opensource" className="bg-[#121212] border-y border-[#212121] py-20 px-6 sm:px-12 lg:px-16 scroll-mt-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="font-mono text-[11px] text-primary tracking-widest uppercase mb-2 inline-flex items-center gap-2">
            <span className="text-muted">04 //</span>
            <span>COMMUNITY & ECOSYSTEM</span>
          </div>
          <h2 className="font-sora font-extrabold text-[#f2f2f2] text-3xl sm:text-4xl lg:text-5xl tracking-[-0.04em] mb-4">
            Open source<span className="text-primary">.</span>
          </h2>
          <p className="font-sora font-light text-muted text-sm sm:text-base">
            Contributing tooling, performance libraries, and accessible UI primitives to developers around the world.
          </p>
        </div>

        {/* GitHub Stats Row (3 Surface Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#171717] border border-[#262626] rounded-xl p-6 text-center card-glow group"
            >
              <div className="font-sora font-extrabold text-3xl sm:text-4xl text-primary mb-1 tracking-tight group-hover:scale-105 transition-transform duration-200">
                {stat.value}
              </div>
              <div className="font-mono text-[10px] text-muted tracking-wider uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3 Repo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {OPEN_SOURCE_REPOS.map((repo, index) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 + index * 0.1 }}
              className="bg-[#171717] hover:bg-[#1c1c1c] border border-[#262626] rounded-xl p-6 card-glow flex flex-col justify-between group transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-primary" />
                    <span className="font-mono font-bold text-sm text-[#f2f2f2] group-hover:text-primary transition-colors">
                      {repo.name}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                <p className="font-sora font-light text-muted text-xs leading-relaxed mb-6">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#262626] font-mono text-[11px] text-muted">
                {/* Language badge */}
                <div className="flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: repo.langColor }}
                  />
                  <span>{repo.language}</span>
                </div>

                {/* Stars and Forks */}
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 hover:text-foreground">
                    <Star className="w-3.5 h-3.5 text-primary/80" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1 hover:text-foreground">
                    <GitFork className="w-3.5 h-3.5" />
                    {repo.forks}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* GitHub Profile Button */}
        <div className="text-center mt-10">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-primary transition-colors py-2 px-4 rounded-md border border-[#262626] hover:border-primary/50 bg-[#171717]"
          >
            <Github className="w-4 h-4 text-primary" />
            <span>Explore all repositories on GitHub →</span>
          </a>
        </div>
      </div>
    </section>
  );
};
