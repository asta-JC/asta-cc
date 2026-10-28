import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolio';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto scroll-mt-12">
      {/* Header */}
      <div className="mb-14 text-left">
        <div className="font-mono text-[11px] text-primary tracking-widest uppercase mb-2 flex items-center gap-2">
          <span className="text-muted">05 //</span>
          <span>REPUTATION</span>
        </div>
        <h2 className="font-sora font-extrabold text-[#f2f2f2] text-3xl sm:text-4xl lg:text-5xl tracking-[-0.04em]">
          From clients & teams<span className="text-primary">.</span>
        </h2>
        <p className="font-sora font-light text-muted text-sm sm:text-base max-w-md mt-3">
          Feedback from technical founders, VP of Engineering leaders, and teammates I’ve shipped with.
        </p>
      </div>

      {/* 3 Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className="relative bg-[#121212] border border-[#212121] rounded-xl p-7 flex flex-col justify-between card-glow group overflow-hidden"
          >
            {/* Green top border 2px */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-primary group-hover:shadow-[0_0_12px_#22d472] transition-shadow duration-300" />

            <div className="mb-6">
              <Quote className="w-6 h-6 text-primary/40 mb-4 group-hover:text-primary transition-colors" />
              <p className="font-sora font-light italic text-[#f2f2f2]/90 text-[14px] leading-relaxed">
                "{item.quote}"
              </p>
            </div>

            <div className="pt-4 border-t border-[#1e1e1e] flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#1c1c1c] border border-primary/40 flex items-center justify-center font-mono text-xs font-bold text-primary shrink-0">
                {item.avatar}
              </div>
              <div className="flex flex-col">
                <span className="font-sora font-semibold text-sm text-[#f2f2f2]">
                  {item.name}
                </span>
                <span className="font-mono text-[10px] text-muted">
                  {item.role} · {item.company}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
