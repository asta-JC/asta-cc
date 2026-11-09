import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Github, Send, Mail, ExternalLink } from 'lucide-react';
import { NoteArtwork } from '../components/NoteArtwork';
import { BlogPostCard } from '../components/BlogPostCard';
import { useContent, safeUrl, githubUrl, demoUrl, type Post } from './content';
export function ProjectButtons({github,demo}:{github:string|undefined;demo:string|undefined}) {
 const repo=githubUrl(github),live=demoUrl(demo);
 return repo||live?<div className="post-project-links">{repo&&<a className="github-project-button" href={repo} target="_blank" rel="noopener noreferrer"><Github size={20}/><span>View on GitHub</span><span aria-hidden="true">↗</span></a>}{live&&<a className="github-project-button demo-project-button" href={live} target="_blank" rel="noopener noreferrer"><ExternalLink size={20}/><span>View demo</span></a>}</div>:null;
}
export function PostDate({value}:{value:string|null}) {return value?<time className="post-date" dateTime={value}>{new Intl.DateTimeFormat('en',{day:'numeric',month:'short',year:'numeric',timeZone:'Asia/Tashkent'}).format(new Date(value))}</time>:null;}
export function NoteList({items}:{items:Post[]}){return <div className="note-list">{items.map((n,index)=><article className="note-row" key={n.id}><div><PostDate value={n.published_at}/><h3><a href={`/blog/${n.slug}/`}>{n.title}</a></h3><p>{n.summary}</p><div className="tags">{n.tags.map(t=><a href={`/blog/?tag=${encodeURIComponent(t)}`} key={t}>#{t}</a>)}</div></div><NoteArtwork post={n} index={index}/></article>)}</div>}
export function Blog() {
 const {posts,settings,loading,error}=useContent();
 const tag=new URLSearchParams(location.search).get('tag')||'all';
 const tags=['all',...new Set(posts.flatMap(p=>p.tags))];
 const filteredPosts=posts.filter(p=>tag==='all'||p.tags.includes(tag));
 return <div className="blog-index">
  <header className="page-heading"><span className="eyebrow">THE BUILDING JOURNAL</span><h1>{settings.blogTitle}</h1><p>{settings.blogDescription}</p></header>
  <nav className="filters" aria-label="Filter blog posts">{tags.map(t=><a key={t} aria-current={tag===t?'page':undefined} href={t==='all'?'/blog/':`/blog/?tag=${encodeURIComponent(t)}`}>{t==='all'?'all posts':`#${t}`}</a>)}</nav>
  {loading?<p role="status">Loading posts…</p>:filteredPosts.length?<div className={`blog-grid${filteredPosts.length===1?' blog-grid--single':''}`}>{filteredPosts.map((post,index)=><BlogPostCard key={post.id} post={post} index={index} featured={index===0&&(tag==='all'||filteredPosts.length===1)}/>)}</div>:<p className="blog-index-empty">{!posts.length?(error?'Posts are temporarily unavailable. Please try again later.':'New stories are on the way.'):'No stories with this tag yet.'}</p>}
 </div>;
}
export function Article({slug}:{slug:string}){const {posts,loading}=useContent();const post=posts.find(p=>p.slug===slug);return <div className="reading"><a className="text-link back" href="/blog/"><ArrowLeft size={15}/>back to posts</a>{loading?<p>Loading post…</p>:post?<><header className="page-heading"><PostDate value={post.published_at}/><h1>{post.title}</h1><p>{post.summary}</p><div className="tags">{post.tags.map(t=><a href={`/blog/?tag=${encodeURIComponent(t)}`} key={t}>#{t}</a>)}</div></header>{safeUrl(post.cover_url)&&<img className="post-cover" src={post.cover_url} alt={post.title}/>}<div className="prose markdown-preview"><ReactMarkdown>{post.content}</ReactMarkdown></div><ProjectButtons github={post.github_url} demo={post.demo_url}/></>:<><h1>Post not found</h1><p>This post is unavailable or hasn't been published yet.</p></>}</div>}
export function ContactCards(){const {settings:s}=useContent();return <div className="contact-cards">{[{label:'GitHub',detail:'Explore my code',href:safeUrl(s.github),Icon:Github},{label:'Telegram',detail:'Start a conversation',href:safeUrl(s.telegram),Icon:Send},{label:'Email',detail:'Send a hello',href:`mailto:${s.email}`,Icon:Mail}].map(({label,detail,href,Icon})=><a key={label} href={href}><Icon/><span><strong>{label}</strong><small>{detail}</small></span><span className="contact-arrow">↗</span></a>)}</div>}
