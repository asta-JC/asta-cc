import { useState } from 'react';
import { ArrowUpRight, Cherry, CircleHelp, Film } from 'lucide-react';
import { safeUrl, type Post } from '../cms/content';

export function BlogPostCard({ post, index, featured }: { post: Post; index: number; featured: boolean }) {
  const [failedCover, setFailedCover] = useState<string>();
  const cover = safeUrl(post.cover_url);
  const Icon = post.slug === 'cherryapps' ? Cherry : post.slug === 'mushirom' ? Film : CircleHelp;
  const theme = post.slug === 'cherryapps' ? 'cherry' : post.slug === 'mushirom' ? 'film' : 'journal';
  const href = `/blog/${post.slug}/`;

  return (
    <article className={`blog-card blog-card--${theme}${featured ? ' blog-card--featured' : ''}`}>
      <a className="blog-card-art" href={href} aria-label={`Read ${post.title}`}>
        <div className="blog-card-emblem" aria-hidden="true"><Icon strokeWidth={1.1} /></div>
        {cover && cover !== failedCover && <img src={cover} alt="" loading="lazy" onError={() => setFailedCover(cover)} />}
        <span className="blog-card-art-label" aria-hidden="true"><span>PROJECT JOURNAL</span><span>{String(index + 1).padStart(2, '0')}</span></span>
      </a>
      <div className="blog-card-body">
        {post.published_at && <time className="post-date" dateTime={post.published_at}>{new Intl.DateTimeFormat('en', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Asia/Tashkent' }).format(new Date(post.published_at))}</time>}
        <h2><a href={href}>{post.title}</a></h2>
        <p>{post.summary}</p>
        <div className="tags">{post.tags.map(tag => <a href={`/blog/?tag=${encodeURIComponent(tag)}`} key={tag}>#{tag}</a>)}</div>
        <a className="blog-card-read" href={href} aria-label={`Read the story: ${post.title}`}><span>Read the story</span><ArrowUpRight size={17} /></a>
      </div>
    </article>
  );
}
