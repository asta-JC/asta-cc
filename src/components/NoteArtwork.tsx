import { useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, Cherry, CircleHelp, Film } from 'lucide-react';
import { safeUrl, type Post } from '../cms/content';

export function NoteArtwork({ post, index }: { post: Post; index: number }) {
  const target = useRef<HTMLAnchorElement>(null);
  const reducedMotion = useReducedMotion();
  const [failedCover, setFailedCover] = useState<string>();
  const cover = safeUrl(post.cover_url);
  const Icon = post.slug === 'cherryapps' ? Cherry : post.slug === 'mushirom' ? Film : CircleHelp;
  const theme = post.slug === 'cherryapps' ? 'cherry' : post.slug === 'mushirom' ? 'film' : 'journal';
  const number = String(index + 1).padStart(2, '0');
  // Track the stationary link, so the rotating face cannot change its own progress.
  const { scrollYProgress } = useScroll({ target, offset: ['center 95%', 'center 52%'] });
  const rotateY = useTransform(scrollYProgress, [0, 1], [180, 0]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [-7, 0]);

  return (
    <a ref={target} className={`note-art note-art--${theme}`} href={`/blog/${post.slug}/`} aria-label={`Read ${post.title}`}>
      <motion.div className="note-art-flipper" style={{ rotateY: reducedMotion ? 0 : rotateY, rotateZ: reducedMotion ? 0 : rotateZ }} aria-hidden="true">
        <div className="note-art-face note-art-front">
          <div className="note-art-visual">
            <span className="note-art-orbit" />
            <Icon className="note-art-icon" strokeWidth={1.25} />
            {cover && cover !== failedCover && <img src={cover} alt="" loading="lazy" onError={() => setFailedCover(cover)} />}
            <span className="note-art-number">{number}</span>
          </div>
          <div className="note-art-caption"><span>Read the story</span><ArrowUpRight size={14} /></div>
        </div>
        <div className="note-art-face note-art-back">
          <span className="note-art-back-label">PROJECT NOTES</span>
          <span className="note-art-monogram">a.</span>
          <span className="note-art-back-footer"><span>FIELD NOTES</span><span>{number}</span></span>
        </div>
      </motion.div>
    </a>
  );
}
