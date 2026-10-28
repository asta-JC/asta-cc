# Ravshanov Nurmuhammad — Full-Stack Developer Portfolio

A dark, technical, and precise personal portfolio website built with modern web technologies. Near-black foundation, code green accent, strong JetBrains Mono presence, terminal energy, monospaced labels, and syntax-highlight moments.

## ⚡ Tech Stack

- **Framework**: React 18 + Vite + TypeScript
- **Styling**: Tailwind CSS + Custom Design System tokens
- **Animations**: Motion (`motion/react` v12)
- **Icons**: Lucide React
- **Typography**: Sora (Display/Headings) + JetBrains Mono (Code, labels, technical metadata)

## 🎨 Design System

```css
:root {
  --background: 0 0% 4%;            /* #0a0a0a near-black */
  --surface: 0 0% 7%;               /* #121212 surface */
  --surface-raised: 0 0% 10%;       /* #1a1a1a raised */
  --border: 0 0% 13%;               /* #212121 border */
  --foreground: 0 0% 95%;           /* #f2f2f2 off-white */
  --muted: 0 0% 42%;                /* #6b6b6b muted */
  --primary: 142 72% 50%;           /* #22d472 code green */
  --primary-dark: 142 76% 38%;      /* #18a355 hover */
  --primary-glow: 142 72% 50% / 0.12;
  --mono: 'JetBrains Mono', monospace;
}
```

## 🚀 Sections Included

1. **Navbar**: Fixed blurred header (`hsl(var(--background) / 0.92)`), brand identifier with code tag, responsive drawer, and quick "Hire me" trigger.
2. **Hero**: Full viewport split hero with green badge, blinking cursor, Sora 800 display heading, subtitle, CTAs, tech pills, and floating syntax-highlighted terminal snippet.
3. **Featured Projects**: 3 large stacked cards with glow hover, metrics tags, live link triggers, and interactive dark-mode dashboard/mockup visualizers:
   - *Aether Analytics* (SaaS analytics & streaming telemetry)
   - *Veloce Commerce* (Headless e-commerce infrastructure)
   - *Nexus Synapse* (Real-time collaboration CRDT tool)
4. **The Stack**: Categorized frontend & backend capabilities in small surface cards with hover glow and tech level indicators.
5. **About Me**: 3-paragraph engineering philosophy, 4 stat chips, and custom developer workstation portrait canvas.
6. **Open Source / GitHub**: 3 metric cards (Stars, Public Repos, Contributions) + 3 interactive repository cards.
7. **Testimonials**: 3 feedback cards with 2px green top border, quotes, author avatars, and roles.
8. **Contact CTA**: Radial green glow, live availability status, direct email copy button, and interactive contact modal.
9. **Footer**: Minimalist dark footer with social links, copyright, and back-to-top button.
10. **Interactive Modals**:
    - **Contact Modal** (`Cmd/Ctrl + K` or "Hire me" / "Start a conversation")
    - **CV / Resume Modal** ("Download CV" button with printable resume format)

## 🛠️ Getting Started

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
