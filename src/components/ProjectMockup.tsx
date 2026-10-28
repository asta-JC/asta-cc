import React from 'react';
import {
  Play,
  Film,
  Tv,
  CheckCircle2,
  Clock,
  Cloud,
  Smartphone,
  Layers,
  Sparkles,
  Calculator,
  Music,
  Timer,
  CloudSun,
  MessageSquare,
  FileSpreadsheet,
  CheckSquare,
  Search,
  Tag,
  Bookmark,
} from 'lucide-react';

interface ProjectMockupProps {
  type: 'mushirom' | 'cherryapps' | 'cherrynotes';
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ type }) => {
  if (type === 'mushirom') {
    return (
      <div className="w-full h-full min-h-[290px] bg-[#0c0c0c] rounded-lg border border-[#212121] overflow-hidden flex flex-col font-mono text-[11px] select-none shadow-inner group-hover:border-primary/40 transition-colors">
        {/* Mockup Topbar */}
        <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#141414] border-b border-[#212121]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[#f2f2f2] font-semibold text-[11px]">mushirom-dub.vercel.app</span>
            <span className="text-primary text-[9px] px-1.5 py-0.5 rounded bg-primary/10 border border-primary/20">
              LIVE PLATFORM
            </span>
          </div>
          <div className="flex items-center gap-2 text-muted text-[10px]">
            <span className="text-foreground/90 flex items-center gap-1 font-mono">
              <Cloud className="w-3 h-3 text-primary" />
              Cloudflare R2
            </span>
          </div>
        </div>

        {/* Mockup Body: Streaming UI */}
        <div className="p-3.5 space-y-3 flex-1 flex flex-col justify-between">
          {/* Video Player Mockup Frame */}
          <div className="relative rounded bg-[#161616] border border-[#262626] p-3 overflow-hidden">
            {/* Ambient player gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-black/60 pointer-events-none" />

            <div className="relative flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-primary/20 border border-primary/40 flex items-center justify-center text-primary">
                  <Play className="w-3 h-3 fill-primary" />
                </div>
                <div>
                  <div className="text-[#f2f2f2] font-bold text-xs">Streaming Player</div>
                  <div className="text-muted text-[9px]">Multilingual Audio · 1080p FHD</div>
                </div>
              </div>
              <span className="font-mono text-[9px] text-primary bg-[#0f0f0f] px-2 py-0.5 rounded border border-primary/30">
                Supabase Auth: Active
              </span>
            </div>

            {/* Simulated Progress bar */}
            <div className="w-full bg-[#222222] h-1.5 rounded-full overflow-hidden my-2.5">
              <div className="bg-primary h-full w-[65%]" />
            </div>

            <div className="flex items-center justify-between text-[9px] text-muted font-mono">
              <span>01:14:28 / 01:54:00</span>
              <div className="flex items-center gap-2 text-foreground/80">
                <span className="text-primary">EN</span>
                <span>•</span>
                <span className="text-primary">UZ Dub</span>
                <span>•</span>
                <span>JP Sub</span>
              </div>
            </div>
          </div>

          {/* Discovery Shelf Preview */}
          <div className="grid grid-cols-3 gap-2">
            <div className="p-2 rounded bg-[#141414] border border-[#212121] flex flex-col justify-between">
              <div className="flex items-center gap-1 text-[9px] text-muted mb-1">
                <Film className="w-3 h-3 text-primary" />
                <span>MOVIES</span>
              </div>
              <div className="text-foreground font-semibold text-[10px] truncate">Featured Titles</div>
            </div>

            <div className="p-2 rounded bg-[#141414] border border-[#212121] flex flex-col justify-between">
              <div className="flex items-center gap-1 text-[9px] text-muted mb-1">
                <Tv className="w-3 h-3 text-primary" />
                <span>SERIES</span>
              </div>
              <div className="text-foreground font-semibold text-[10px] truncate">Dubbed Episodes</div>
            </div>

            <div className="p-2 rounded bg-[#141414] border border-[#212121] flex flex-col justify-between">
              <div className="flex items-center gap-1 text-[9px] text-muted mb-1">
                <Sparkles className="w-3 h-3 text-primary" />
                <span>FAST CDN</span>
              </div>
              <div className="text-primary font-bold text-[10px]">Zero Buffering</div>
            </div>
          </div>

          {/* Infrastructure footer badge */}
          <div className="flex items-center justify-between px-2.5 py-1.5 bg-[#0e0e0e] rounded border border-[#1e1e1e] text-[10px] text-muted">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3 h-3 text-primary" />
              Full-Stack: Next.js + Supabase + Cloudflare R2
            </span>
            <span className="text-primary font-mono">Deployed on Vercel</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'cherryapps') {
    return (
      <div className="w-full h-full min-h-[290px] bg-[#0c0c0c] rounded-lg border border-[#212121] overflow-hidden flex flex-col font-mono text-[11px] select-none shadow-inner group-hover:border-primary/40 transition-colors">
        {/* Mockup Topbar */}
        <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#141414] border-b border-[#212121]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary" />
            <span className="text-[#f2f2f2] font-semibold text-[11px]">cherry.android.suite</span>
            <span className="text-primary text-[9px] px-1.5 py-0.5 rounded bg-primary/10 border border-primary/20">
              6 PUBLIC REPOSITORIES
            </span>
          </div>
          <div className="flex items-center gap-2 text-muted text-[10px]">
            <Smartphone className="w-3 h-3 text-primary" />
            <span>Jetpack Compose</span>
          </div>
        </div>

        {/* Mockup Body: 6 Kotlin Apps Suite */}
        <div className="p-3.5 space-y-3 flex-1 flex flex-col justify-between">
          {/* Subheading */}
          <div className="flex items-center justify-between text-[10px] text-muted">
            <span className="uppercase text-primary font-mono tracking-wider font-semibold">
              KOTLIN APPLICATION SUITE
            </span>
            <span className="text-muted/80">Material Design 3</span>
          </div>

          {/* 6 Apps Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <div className="p-2 rounded bg-[#141414] border border-[#242424] hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-1.5 mb-1 text-primary">
                <Calculator className="w-3.5 h-3.5" />
                <span className="text-[#f2f2f2] font-bold text-[10px] truncate">Calculator</span>
              </div>
              <div className="text-[9px] text-muted">Clean math parser</div>
            </div>

            <div className="p-2 rounded bg-[#141414] border border-[#242424] hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-1.5 mb-1 text-primary">
                <Music className="w-3.5 h-3.5" />
                <span className="text-[#f2f2f2] font-bold text-[10px] truncate">MusicPlayer</span>
              </div>
              <div className="text-[9px] text-muted">Foreground service</div>
            </div>

            <div className="p-2 rounded bg-[#141414] border border-[#242424] hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-1.5 mb-1 text-primary">
                <Timer className="w-3.5 h-3.5" />
                <span className="text-[#f2f2f2] font-bold text-[10px] truncate">Timer</span>
              </div>
              <div className="text-[9px] text-muted">Accurate stopwatch</div>
            </div>

            <div className="p-2 rounded bg-[#141414] border border-[#242424] hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-1.5 mb-1 text-primary">
                <CloudSun className="w-3.5 h-3.5" />
                <span className="text-[#f2f2f2] font-bold text-[10px] truncate">Weather</span>
              </div>
              <div className="text-[9px] text-muted">Live forecast API</div>
            </div>

            <div className="p-2 rounded bg-[#141414] border border-[#242424] hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-1.5 mb-1 text-primary">
                <MessageSquare className="w-3.5 h-3.5" />
                <span className="text-[#f2f2f2] font-bold text-[10px] truncate">Messages</span>
              </div>
              <div className="text-[9px] text-muted">Conversations UI</div>
            </div>

            <div className="p-2 rounded bg-[#141414] border border-[#242424] hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-1.5 mb-1 text-primary">
                <FileSpreadsheet className="w-3.5 h-3.5" />
                <span className="text-[#f2f2f2] font-bold text-[10px] truncate">Office</span>
              </div>
              <div className="text-[9px] text-muted">Work productivity</div>
            </div>
          </div>

          {/* Bottom highlight pill */}
          <div className="flex items-center justify-between px-2.5 py-1.5 bg-[#0e0e0e] rounded border border-[#1e1e1e] text-[10px] text-muted">
            <span className="flex items-center gap-1.5">
              <Layers className="w-3 h-3 text-primary" />
              Room Database · Gradle · Coroutines
            </span>
            <span className="text-primary font-mono">100% Kotlin</span>
          </div>
        </div>
      </div>
    );
  }

  // CherryNotes Mockup (In Development)
  return (
    <div className="w-full h-full min-h-[290px] bg-[#0c0c0c] rounded-lg border border-[#212121] overflow-hidden flex flex-col font-mono text-[11px] select-none shadow-inner group-hover:border-primary/40 transition-colors">
      {/* Mockup Topbar */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#141414] border-b border-[#212121]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] animate-pulse" />
          <span className="text-[#f2f2f2] font-semibold text-[11px]">cherrynotes.android</span>
          <span className="text-[#ffbd2e] text-[9px] px-1.5 py-0.5 rounded bg-[#ffbd2e]/10 border border-[#ffbd2e]/30">
            IN DEVELOPMENT
          </span>
        </div>
        <div className="flex items-center gap-2 text-muted text-[10px]">
          <span className="text-primary flex items-center gap-1">
            <Cloud className="w-3 h-3 text-primary" />
            Supabase Sync
          </span>
        </div>
      </div>

      {/* Mockup Body: Note & Productivity Editor Canvas */}
      <div className="p-3.5 space-y-3 flex-1 flex flex-col justify-between">
        {/* Search & Tag Bar */}
        <div className="flex items-center justify-between p-2 rounded bg-[#141414] border border-[#212121] text-[10px]">
          <div className="flex items-center gap-2 text-muted">
            <Search className="w-3 h-3 text-primary" />
            <span>Search notes & to-dos...</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="px-1.5 py-0.5 rounded bg-[#202020] text-primary text-[9px]">#android</span>
            <span className="px-1.5 py-0.5 rounded bg-[#202020] text-muted text-[9px]">#tasks</span>
          </div>
        </div>

        {/* Note Card Preview */}
        <div className="p-2.5 rounded bg-[#161616] border border-[#262626] space-y-2">
          <div className="flex items-center justify-between">
            <div className="text-foreground font-bold text-[11px] flex items-center gap-1.5">
              <Bookmark className="w-3 h-3 text-primary" />
              Architecture & Features Roadmap
            </div>
            <span className="text-muted text-[9px]">Pinned</span>
          </div>

          <div className="space-y-1.5 text-[10px]">
            <div className="flex items-center gap-2 text-[#22d472]">
              <CheckSquare className="w-3.5 h-3.5 text-primary" />
              <span>Jetpack Compose Material 3 Dark UI</span>
            </div>
            <div className="flex items-center gap-2 text-[#22d472]">
              <CheckSquare className="w-3.5 h-3.5 text-primary" />
              <span>Room Database & DataStore Preferences</span>
            </div>
            <div className="flex items-center gap-2 text-muted">
              <span className="w-3.5 h-3.5 rounded border border-muted/50 inline-block" />
              <span>Supabase Cloud Sync & Reminders engine</span>
            </div>
          </div>
        </div>

        {/* Feature Capabilities row */}
        <div className="flex items-center justify-between px-2.5 py-1.5 bg-[#0e0e0e] rounded border border-[#1e1e1e] text-[10px] text-muted">
          <span className="flex items-center gap-1.5">
            <Tag className="w-3 h-3 text-primary" />
            Markdown · Tags · Reminders · Themes
          </span>
          <span className="text-primary font-mono">Coming Soon</span>
        </div>
      </div>
    </div>
  );
};
