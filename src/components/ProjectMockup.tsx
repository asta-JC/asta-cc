import React from 'react';
import { Activity, Server, Zap, Globe, Users, Database, ArrowUp, ShieldCheck } from 'lucide-react';

interface ProjectMockupProps {
  type: 'dashboard' | 'ecommerce' | 'collaboration';
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ type }) => {
  if (type === 'dashboard') {
    return (
      <div className="w-full h-full min-h-[260px] bg-[#0c0c0c] rounded-lg border border-[#212121] overflow-hidden flex flex-col font-mono text-[11px] select-none shadow-inner group-hover:border-primary/40 transition-colors">
        {/* Mockup Topbar */}
        <div className="flex items-center justify-between px-3.5 py-2 bg-[#141414] border-b border-[#212121]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-[#f2f2f2] font-semibold text-[11px]">aether.telemetry.io</span>
            <span className="text-muted text-[9px] px-1.5 py-0.5 rounded bg-[#1f1f1f] border border-[#292929]">
              PROD-US-EAST
            </span>
          </div>
          <div className="flex items-center gap-2 text-muted text-[10px]">
            <span className="text-primary flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              99.99% UP
            </span>
            <span>45.2M req/d</span>
          </div>
        </div>

        {/* Mockup Body */}
        <div className="p-3.5 space-y-3 flex-1 flex flex-col justify-between">
          {/* Top Metrics Row */}
          <div className="grid grid-cols-3 gap-2">
            <div className="p-2 rounded bg-[#141414] border border-[#212121]">
              <div className="text-muted text-[9px] uppercase">p99 Latency</div>
              <div className="text-primary font-bold text-sm flex items-center gap-1">
                84ms <span className="text-[9px] text-[#22d472]/70 font-normal">-12%</span>
              </div>
            </div>
            <div className="p-2 rounded bg-[#141414] border border-[#212121]">
              <div className="text-muted text-[9px] uppercase">Ingest Rate</div>
              <div className="text-foreground font-bold text-sm flex items-center gap-1">
                48.2k/s <ArrowUp className="w-2.5 h-2.5 text-primary" />
              </div>
            </div>
            <div className="p-2 rounded bg-[#141414] border border-[#212121]">
              <div className="text-muted text-[9px] uppercase">Active Nodes</div>
              <div className="text-foreground font-bold text-sm">32 / 32</div>
            </div>
          </div>

          {/* Sparkline / Chart Mock */}
          <div className="p-2.5 rounded bg-[#141414] border border-[#212121]">
            <div className="flex justify-between items-center mb-1.5 text-[9px] text-muted">
              <span>EVENT STREAM (LAST 60 MINS)</span>
              <span className="text-primary font-mono">LIVE SYNC</span>
            </div>
            {/* SVG Wave chart */}
            <svg viewBox="0 0 300 60" className="w-full h-12 stroke-primary fill-none overflow-visible">
              <defs>
                <linearGradient id="primaryGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22d472" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="#22d472" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M0,45 Q25,38 50,42 T100,24 T150,30 T200,12 T250,22 T300,10"
                strokeWidth="2"
                stroke="#22d472"
              />
              <path
                d="M0,45 Q25,38 50,42 T100,24 T150,30 T200,12 T250,22 T300,10 L300,60 L0,60 Z"
                fill="url(#primaryGlow)"
                stroke="none"
              />
              <circle cx="200" cy="12" r="3.5" fill="#22d472" />
              <circle cx="300" cy="10" r="3.5" fill="#22d472" />
            </svg>
          </div>

          {/* Telemetry Log Lines */}
          <div className="space-y-1 text-[10px] text-muted/80 bg-[#0e0e0e] p-2 rounded border border-[#1e1e1e]">
            <div className="flex items-center justify-between">
              <span className="text-primary/90 font-mono">[CLICKHOUSE]</span>
              <span>120,400 rows scanned</span>
              <span className="text-muted">14ms</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#f2f2f2]/90 font-mono">[WEBSOCKET]</span>
              <span>Peer 0x8a92 connected</span>
              <span className="text-primary">OK</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'ecommerce') {
    return (
      <div className="w-full h-full min-h-[260px] bg-[#0c0c0c] rounded-lg border border-[#212121] overflow-hidden flex flex-col font-mono text-[11px] select-none shadow-inner group-hover:border-primary/40 transition-colors">
        {/* Mockup Topbar */}
        <div className="flex items-center justify-between px-3.5 py-2 bg-[#141414] border-b border-[#212121]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-[#f2f2f2] font-semibold text-[11px]">veloce.storefront.edge</span>
            <span className="text-primary text-[9px] px-1.5 py-0.5 rounded bg-primary/10 border border-primary/20">
              SUB-50MS TTFB
            </span>
          </div>
          <div className="flex items-center gap-2 text-muted text-[10px]">
            <Globe className="w-3 h-3 text-primary" />
            <span>280 Edge PoPs</span>
          </div>
        </div>

        {/* Mockup Body */}
        <div className="p-3.5 space-y-3 flex-1 flex flex-col justify-between">
          {/* Performance strip */}
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2.5 rounded bg-[#141414] border border-[#212121] flex items-center justify-between">
              <div>
                <span className="text-muted text-[9px] block">Global Median TTFB</span>
                <span className="text-primary font-bold text-base">42ms</span>
              </div>
              <Zap className="w-5 h-5 text-primary/70" />
            </div>
            <div className="p-2.5 rounded bg-[#141414] border border-[#212121] flex items-center justify-between">
              <div>
                <span className="text-muted text-[9px] block">Checkout Uptime</span>
                <span className="text-foreground font-bold text-base">99.98%</span>
              </div>
              <ShieldCheck className="w-5 h-5 text-primary/70" />
            </div>
          </div>

          {/* Product Matrix Simulation */}
          <div className="p-2.5 rounded bg-[#141414] border border-[#212121] space-y-2">
            <div className="flex justify-between items-center text-[9px] text-muted">
              <span>REAL-TIME TRANSACTION ROUTING</span>
              <span className="text-primary">STRIPE WEBHOOK ACTIVE</span>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between p-1.5 bg-[#0a0a0a] rounded border border-[#1f1f1f] text-[10px]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-foreground">Order #98421</span>
                </div>
                <span className="text-muted">Tokyo, JP</span>
                <span className="text-primary font-semibold">$380.00</span>
                <span className="text-muted text-[9px]">38ms edge</span>
              </div>
              <div className="flex items-center justify-between p-1.5 bg-[#0a0a0a] rounded border border-[#1f1f1f] text-[10px]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-foreground">Order #98422</span>
                </div>
                <span className="text-muted">Frankfurt, DE</span>
                <span className="text-primary font-semibold">$1,250.00</span>
                <span className="text-muted text-[9px]">44ms edge</span>
              </div>
            </div>
          </div>

          {/* Edge Cache Stat */}
          <div className="flex items-center justify-between px-2.5 py-1.5 bg-[#0e0e0e] rounded border border-[#1e1e1e] text-[10px] text-muted">
            <span className="flex items-center gap-1.5">
              <Database className="w-3 h-3 text-primary" />
              Redis Stale-While-Revalidate
            </span>
            <span className="text-primary font-medium">98.4% Hit Rate</span>
          </div>
        </div>
      </div>
    );
  }

  // Collaboration Mockup
  return (
    <div className="w-full h-full min-h-[260px] bg-[#0c0c0c] rounded-lg border border-[#212121] overflow-hidden flex flex-col font-mono text-[11px] select-none shadow-inner group-hover:border-primary/40 transition-colors relative">
      {/* Mockup Topbar */}
      <div className="flex items-center justify-between px-3.5 py-2 bg-[#141414] border-b border-[#212121]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-[#f2f2f2] font-semibold text-[11px]">nexus.synapse.canvas</span>
          <span className="text-primary text-[9px] px-1.5 py-0.5 rounded bg-primary/10 border border-primary/20">
            CRDT Y.JS V2
          </span>
        </div>
        <div className="flex items-center gap-2 text-muted text-[10px]">
          <Users className="w-3 h-3 text-primary" />
          <span>4 Active Peers</span>
        </div>
      </div>

      {/* Mockup Canvas Canvas Area */}
      <div className="relative p-4 flex-1 flex flex-col justify-between overflow-hidden bg-grid-pattern bg-[length:16px_16px]">
        {/* Floating collaborative nodes */}
        <div className="flex items-center justify-between gap-3">
          <div className="p-2.5 rounded bg-[#161616]/90 border border-primary/40 text-[10px] shadow-lg max-w-[170px]">
            <div className="text-primary font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              State Node: Architecture
            </div>
            <div className="text-muted text-[9px] mt-1">Multiplayer CRDT vector clock sync</div>
          </div>

          <div className="p-2 rounded bg-[#161616]/90 border border-[#2a2a2a] text-[10px] shadow-lg">
            <span className="text-muted text-[9px]">WebRTC Audio:</span>
            <div className="text-[#22d472] font-medium flex items-center gap-1">
              <Activity className="w-3 h-3" /> Stereo 48kHz
            </div>
          </div>
        </div>

        {/* Live Multiplayer Cursors Simulation */}
        <div className="relative h-20 w-full my-1">
          {/* Cursor 1: Nurmuhammad */}
          <div className="absolute left-[20%] top-[10%] flex items-start gap-1 transition-all">
            <svg className="w-3.5 h-3.5 text-primary fill-primary -rotate-45" viewBox="0 0 24 24">
              <polygon points="3 3 21 12 12 14 9 21" />
            </svg>
            <span className="bg-primary text-black font-semibold text-[9px] px-1.5 py-0.5 rounded shadow">
              Nurmuhammad
            </span>
          </div>

          {/* Cursor 2: Elena */}
          <div className="absolute right-[25%] bottom-[20%] flex items-start gap-1">
            <svg className="w-3.5 h-3.5 text-[#3b82f6] fill-[#3b82f6] -rotate-45" viewBox="0 0 24 24">
              <polygon points="3 3 21 12 12 14 9 21" />
            </svg>
            <span className="bg-[#3b82f6] text-white font-semibold text-[9px] px-1.5 py-0.5 rounded shadow">
              Elena R.
            </span>
          </div>
        </div>

        {/* Bottom Status bar */}
        <div className="flex items-center justify-between px-2.5 py-1.5 bg-[#141414] rounded border border-[#212121] text-[10px]">
          <span className="text-muted flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
            Delta conflict resolution: 0 conflicts
          </span>
          <span className="text-primary font-mono font-medium">&lt; 15ms latency</span>
        </div>
      </div>
    </div>
  );
};
