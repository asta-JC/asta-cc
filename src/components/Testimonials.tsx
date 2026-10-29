import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Quote, Send } from 'lucide-react';
import { PERSONAL_INFO, TESTIMONIALS } from '../data/portfolio';

export const Testimonials: React.FC = () => {
  const [draftOpened, setDraftOpened] = useState(false);

  const handleReviewSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const review = String(data.get('review') ?? '').trim();
    if (!name || !review) return;

    const affiliation = String(data.get('affiliation') ?? '').trim();
    const body = `${review}\n\n— ${name}${affiliation ? ` / ${affiliation}` : ''}`;
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      `Portfolio review from ${name}`
    )}&body=${encodeURIComponent(body)}`;
    setDraftOpened(true);
  };

  return (
    <section className="py-24 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto scroll-mt-12">
      {/* Header */}
      <div className="mb-14 text-left">
        <div className="font-mono text-[11px] text-primary tracking-widest uppercase mb-2 flex items-center gap-2">
          <span className="text-muted">05 //</span>
          <span>REPUTATION</span>
        </div>
        <h2 className="font-sora font-extrabold text-[#f2f2f2] text-3xl sm:text-4xl lg:text-5xl tracking-[-0.04em]">
          From Friends, Family, Relatives<span className="text-primary">.</span>
        </h2>
        <p className="font-sora font-light text-muted text-sm sm:text-base max-w-md mt-3">
          Kind words from the people who know me best.
        </p>
      </div>

      {/* Testimonial cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  {item.role} ● {item.company}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
        <form
          onSubmit={handleReviewSubmit}
          className="bg-[#121212] border border-[#212121] rounded-xl p-7 space-y-4"
        >
          <div>
            <h3 className="font-sora font-semibold text-xl text-[#f2f2f2]">Share your review</h3>
            <p className="font-sora text-sm text-muted mt-2">
              Know me? I’d love to hear your thoughts. Send your review by email.
            </p>
          </div>
          <div>
            <label htmlFor="review-name" className="block font-mono text-xs text-muted mb-2">Your name</label>
            <input
              id="review-name" name="name" autoComplete="name" required maxLength={100} pattern=".*\S.*"
              className="w-full bg-[#171717] border border-[#2b2b2b] rounded-md px-3 py-2 text-sm text-[#f2f2f2] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="review-affiliation" className="block font-mono text-xs text-muted mb-2">Role or university (optional)</label>
            <input
              id="review-affiliation" name="affiliation" maxLength={150}
              placeholder="International Law ● Webster University"
              className="w-full bg-[#171717] border border-[#2b2b2b] rounded-md px-3 py-2 text-sm text-[#f2f2f2] placeholder:text-muted/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="review-message" className="block font-mono text-xs text-muted mb-2">Your review</label>
            <textarea
              id="review-message" name="review" required rows={4} maxLength={2000}
              className="w-full bg-[#171717] border border-[#2b2b2b] rounded-md px-3 py-2 text-sm text-[#f2f2f2] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-y"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-[#18a355] text-[#0a0a0a] font-sora font-semibold text-sm px-5 py-3 rounded-md transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <Send className="w-4 h-4" aria-hidden="true" />
            Send review by email
          </button>
          <p className="font-sora text-xs text-muted" role="status">
            {draftOpened
              ? 'Your email draft is ready to open. Send it from your email app to complete your review.'
              : 'Opens your email app with a draft for you to send.'}
            {' '}You can also email{' '}
            <a className="text-primary underline break-all" href={`mailto:${PERSONAL_INFO.email}`}>
              {PERSONAL_INFO.email}
            </a>.
          </p>
        </form>
      </div>
    </section>
  );
};
