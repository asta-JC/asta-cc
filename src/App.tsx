import { flushSync } from 'react-dom';
import { useEffect, useRef, useState, lazy, Suspense } from 'react';
import { Github, Mail, Send, Sun, Moon, ArrowUpRight, Cherry, Film, CircleHelp, ArrowLeft } from 'lucide-react';
import { useContent, ContentProvider, safeUrl } from './cms/content';
import { NoteList, Blog, Article, ContactCards } from './cms/PublicContent';
const Admin = lazy(() => import('./cms/Admin'));

function Socials() { const {settings:me}=useContent(); return <div className="socials"><a href={safeUrl(me.github)} aria-label="GitHub"><Github /></a><a href={safeUrl(me.telegram)} aria-label="Telegram"><Send /></a><a href={`mailto:${me.email}`} aria-label="Email"><Mail /></a></div>; }
function SectionTitle({ children }: {children: React.ReactNode}) { return <h2 className="section-title">{children}<span /></h2>; }
function Mark() {
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const el = canvas.current; if (!el) return;
    const ctx = el.getContext('2d'); if (!ctx) return;
    const size = 760;
    el.width = size; el.height = size;
    let seed = 91;
    const random = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
    const particles: { x: number; y: number; homeX: number; homeY: number; vx: number; vy: number; radius: number; color: string; phase: number }[] = [];
    const mask = document.createElement('canvas');
    mask.width = size; mask.height = size;
    const ink = mask.getContext('2d'); if (!ink) return;
    ink.fillStyle = '#fff';
    ink.font = 'italic 520px Georgia, "Times New Roman", serif';
    ink.textAlign = 'center';
    ink.fillText('A', 370, 555);
    // A flowing entrance and trailing flourish make the letter a signature.
    ink.strokeStyle = '#fff'; ink.lineCap = 'round';
    ink.lineWidth = 8;
    ink.beginPath();
    ink.moveTo(162, 573);
    ink.bezierCurveTo(112, 610, 128, 650, 211, 620);
    ink.bezierCurveTo(323, 576, 475, 526, 601, 548);
    ink.bezierCurveTo(651, 558, 642, 589, 602, 584);
    ink.stroke();
    const pixels = ink.getImageData(0, 0, size, size).data;
    for (let y = 90; y < 665; y += 3) {
      for (let x = 80; x < 680; x += 3) {
        const px = x + (random() - .5) * 3;
        const py = y + (random() - .5) * 3;
        if (pixels[(Math.floor(py) * size + Math.floor(px)) * 4 + 3] < 100) continue;
        const gradient = Math.max(0, Math.min(1, .55 * (px / size) + .65 * (1 - py / size)));
        particles.push({ x: px, y: py, homeX: px, homeY: py, vx: 0, vy: 0, radius: 1 + random() * 1.2,
          color: `rgb(255,${Math.round(221 - gradient * 145 + random() * 12)},${Math.round(75 - gradient * 53)})`, phase: random() * Math.PI * 2 });
      }
    }
    const embers = Array.from({ length: 25 }, () => ({
      x: 150 + random() * 480, offset: random(), speed: 22 + random() * 25,
      radius: 1.4 + random() * 2.2, phase: random() * Math.PI * 2,
    }));
    const pointer = { x: -1000, y: -1000, active: false };
    const move = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return;
      const rect = el.getBoundingClientRect();
      pointer.x = (event.clientX - rect.left) * size / rect.width;
      pointer.y = (event.clientY - rect.top) * size / rect.height;
      pointer.active = true;
    };
    const leave = () => { pointer.active = false; };
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerleave', leave);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = 0;
    let previous = 0;
    const draw = (time: number) => {
      const delta = Math.min(32, time - previous || 16.7); previous = time;
      const steps = Math.ceil(delta / 8.33);
      const step = delta / steps / 16.667;
      ctx.clearRect(0, 0, size, size);
      for (const p of particles) {
        let targetX = p.homeX, targetY = p.homeY;
        if (pointer.active) {
          const dx = p.homeX - pointer.x, dy = p.homeY - pointer.y;
          const distance = Math.hypot(dx, dy);
          const radius = 43;
          if (distance < radius + 18) {
            const angle = distance > .01 ? Math.atan2(dy, dx) : p.phase;
            const edge = radius + p.radius + 5;
            const displacement = Math.max(0, edge - distance);
            targetX += Math.cos(angle) * displacement;
            targetY += Math.sin(angle) * displacement;
          }
        }
        if (reduced) {
          p.x = targetX; p.y = targetY; p.vx = 0; p.vy = 0;
        } else {
          // Underdamped springs overshoot the pointer boundary, then settle.
          // Small time steps keep the bounce consistent across frame rates.
          for (let i = 0; i < steps; i++) {
            p.vx = (p.vx + (targetX - p.x) * .15 * step) * Math.pow(.84, step);
            p.vy = (p.vy + (targetY - p.y) * .15 * step) * Math.pow(.84, step);
            p.x += p.vx * step;
            p.y += p.vy * step;
          }
        }
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = .84 + Math.sin(p.phase + (reduced ? 0 : time / 2400)) * .14;
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      if (!reduced) for (const ember of embers) {
        const progress = (ember.offset + time * ember.speed / 540000) % 1;
        const y = 660 - progress * 580;
        const x = ember.x + Math.sin(progress * 5 + ember.phase) * 16;
        const alpha = Math.sin(progress * Math.PI) * .7;
        const trail = ctx.createLinearGradient(x, y, x, y + 38);
        trail.addColorStop(0, `rgba(255,191,69,${alpha * .6})`);
        trail.addColorStop(1, 'rgba(255,140,35,0)');
        ctx.fillStyle = trail;
        ctx.beginPath(); ctx.ellipse(x, y + 18, ember.radius * .7, 22, 0, 0, Math.PI * 2); ctx.fill();
        ctx.shadowColor = '#ffb849'; ctx.shadowBlur = 12;
        ctx.fillStyle = `rgba(255,207,98,${alpha})`;
        ctx.beginPath(); ctx.arc(x, y, ember.radius, 0, Math.PI * 2); ctx.fill();
        ctx.shadowBlur = 0;
      }
      frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(frame); el.removeEventListener('pointermove', move); el.removeEventListener('pointerleave', leave); };
  }, []);
  return <div className="hero-art"><canvas ref={canvas} aria-label="Calligraphic A made of glowing gold and orange circles, with rising embers. Move your pointer over it to push the particles aside." role="img"/><span className="art-caption">ALWAYS A WORK IN PROGRESS</span></div>;
}
function Home() { const {settings:me,projects:PROJECTS,posts:notes}=useContent(); return <><section className="hero"><div className="hero-copy"><h1>{me.name}</h1><span className="eyebrow hero-keywords">{me.keywords}</span><p className="subtitle">{me.subtitle}</p><p>{me.heroText.split(/(Kotlin|Jetpack Compose|Android Development)/g).map((text,i)=>['Kotlin','Jetpack Compose','Android Development'].includes(text)?<code key={i}>{text}</code>:text)}</p><div className="hero-bottom"><Socials/><a className="text-link" href="/about/">about me →</a></div></div><Mark/></section><section><SectionTitle>{me.homeProjectsTitle}</SectionTitle><div className="projects">{PROJECTS.map((p,i)=>{const Icon=i===0?Film:i===1?Cherry:CircleHelp;return <article className="project" key={p.id}><div className={`project-icon icon-${i}`}><Icon/></div>{safeUrl(p.image_url)&&<img className="project-cover" src={p.image_url} alt={p.title} loading="lazy"/>}<h3>{p.title}</h3><p>{p.description}</p><div className="project-bottom"><span>{p.status==='in-development'?'in development':i===0?'web platform':'android collection'}</span><a href={safeUrl(p.liveUrl)||safeUrl(p.githubUrl)||"/blog/"} aria-label={`Explore ${p.title}`}><ArrowUpRight size={17}/></a></div></article>})}</div></section><section><SectionTitle>{me.homeNotesTitle}</SectionTitle><NoteList items={notes.slice(0,3)}/><a className="text-link" href="/blog/">all notes →</a></section><section className="hello"><h2>{me.helloTitle}</h2><p>{me.helloText}</p><a className="text-link" href={`mailto:${me.email}`}>say hello ↗</a></section></>; }
function About() { const {settings:me,projects:PROJECTS}=useContent(); return <div className="reading"><header className="page-heading"><span className="eyebrow">A LITTLE ABOUT ME</span><h1 style={{whiteSpace:'pre-line'}}>{me.aboutTitle}</h1></header><div className="prose">{me.aboutText.split('\n\n').map((text,i)=><p key={i}>{text}</p>)}<ContactCards/></div><section><SectionTitle>What I'm building</SectionTitle><div className="timeline">{PROJECTS.map((p,i)=><article key={p.id}><div className="timeline-meta">{i===2?'IN DEVELOPMENT':'INDEPENDENT PROJECT'}</div><div><h3><a href={safeUrl(p.liveUrl)||safeUrl(p.githubUrl)||"/blog/"}>{p.title} <ArrowUpRight size={16}/></a></h3><p>{p.description}</p><div className="tags">{p.technologies.slice(0,4).map(t=><span key={t}>{t}</span>)}</div></div></article>)}</div></section><section><SectionTitle>Tools of the trade</SectionTitle>{me.skills.map(({title,items})=><div className="skill-group" key={title}><h3>{title}</h3><div className="skill-tags">{items.map(s=><span key={s}>{s}</span>)}</div></div>)}</section><section className="hello"><h2>Let's build something useful.</h2><p>Based in {me.location}. Open to remote and hybrid opportunities.</p><a href={`mailto:${me.email}`} className="text-link">{me.email} ↗</a></section></div>; }
function PortfolioApp() {
 const {settings:me}=useContent();
 const [route, setRoute] = useState(() => location.pathname + location.search);
 useEffect(() => {
   const sync = () => { setRoute(location.pathname + location.search); window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior }); };
   const navigate = (event: MouseEvent) => {
     if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
     const target = event.target instanceof Element ? event.target.closest('a') : null;
     if (!target || target.getAttribute('href')?.startsWith('#') || target.hasAttribute('download') || (target.target && target.target !== '_self')) return;
     const url = new URL(target.href, location.href);
     if (url.origin !== location.origin || url.hash || !['http:', 'https:'].includes(url.protocol)) return;
     event.preventDefault();
     if (url.pathname + url.search === location.pathname + location.search) return;
     history.pushState(null, '', url.pathname + url.search);
     sync();
     requestAnimationFrame(() => document.getElementById('main')?.focus({ preventScroll: true }));
   };
   document.addEventListener('click', navigate);
   window.addEventListener('popstate', sync);
   return () => { document.removeEventListener('click', navigate); window.removeEventListener('popstate', sync); };
 }, []);
 const path=route.split('?')[0].replace(/\/$/,'')||'/';const page=path==='/about'?'about':path.startsWith('/blog')?'blog':path==='/admin'?'admin':'home';
 const [theme,setTheme]=useState(()=>{try{return localStorage.getItem('asta-theme-v1')||'dark'}catch{return 'dark'}});
 const themeAnimating = useRef(false);
 const toggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
   if (themeAnimating.current) return;
   const next = theme === 'dark' ? 'light' : 'dark';
   const apply = () => {
     document.documentElement.dataset.theme = next;
     document.documentElement.style.colorScheme = next;
     flushSync(() => setTheme(next));
   };
   const transitionDocument = document as Document & {
     startViewTransition?: (callback: () => void) => { ready: Promise<void>; finished: Promise<void> };
   };
   if (!transitionDocument.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
     apply(); return;
   }
   const rect = event.currentTarget.getBoundingClientRect();
   const x = rect.left + rect.width / 2, y = rect.top + rect.height / 2;
   const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
   themeAnimating.current = true;
   document.documentElement.classList.add('theme-revealing');
   document.documentElement.classList.toggle('theme-reveal-dark', next === 'dark');
   const root = document.documentElement;
   root.style.setProperty('--theme-reveal-x', `${x}px`);
   root.style.setProperty('--theme-reveal-y', `${y}px`);
   root.style.setProperty('--theme-reveal-radius', `${Math.ceil(radius) + 2}px`);
   const transition = transitionDocument.startViewTransition(apply);
   // CSS starts at the first snapshot frame, with no delayed full-page flash.
   void transition.ready.catch(() => {});
   void transition.finished.catch(() => {}).finally(() => {
     themeAnimating.current = false;
     document.documentElement.classList.remove('theme-revealing', 'theme-reveal-dark');
     root.style.removeProperty('--theme-reveal-x');
     root.style.removeProperty('--theme-reveal-y');
     root.style.removeProperty('--theme-reveal-radius');
   });
 };
 useEffect(()=>{document.documentElement.dataset.theme=theme;document.documentElement.style.colorScheme=theme;try{localStorage.setItem('asta-theme-v1',theme)}catch{}},[theme]);
 useEffect(()=>{document.documentElement.style.setProperty('--gold',theme==='dark'?me.accentDark:me.accentLight)},[theme,me.accentDark,me.accentLight]);
 useEffect(()=>{document.title=`${page==='home'?me.name:page==='about'?'About':page==='admin'?'Admin':'Blog'} — Asta`;},[page]);
 return <><a className="skip" href="#main">Skip to content</a><header className="site-header"><nav className="nav-wrap" aria-label="Main navigation"><a className="wordmark" href="/">{me.brand}</a><div className="nav-links">{['home','blog','about'].map(p=><a key={p} href={p==='home'?'/':`/${p}/`} aria-current={page===p?'page':undefined}>{p}</a>)}<button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme==='dark'?'light':'dark'} theme`}>{theme==='dark'?<Moon size={21}/>:<Sun size={21}/>}</button></div></nav></header><main id="main" key={route} tabIndex={-1} className="container page-enter">{path==='/admin'?<Suspense fallback={<p>Loading studio…</p>}><Admin/></Suspense>:path==='/'?<Home/>:path==='/about'?<About/>:path==='/blog'?<Blog/>:path.startsWith('/blog/')?<Article slug={path.split('/')[2]}/>:<div className="reading"><h1>Page not found</h1><a href="/">Back home →</a></div>}</main><footer className="site-footer"><Socials/><p>© {new Date().getFullYear()} {me.name}<span> · {me.footerText}</span></p><a className="back-top" href="#" onClick={(event) => {
   event.preventDefault();
   window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' as ScrollBehavior : 'smooth' });
 }}>back to top ↑</a></footer></>;
}

export default function App(){return <ContentProvider><PortfolioApp/></ContentProvider>}
