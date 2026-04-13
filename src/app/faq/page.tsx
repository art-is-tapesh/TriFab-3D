"use client";

import { motion } from "framer-motion";
import { Activity, Beaker, Server, CheckCircle2 } from "lucide-react";

export default function LabStatusPage() {
  return (
    <div className="flex flex-col relative w-full pt-16 pb-32 px-8 max-w-[1600px] mx-auto min-h-screen">
      <div className="mb-24 text-center max-w-3xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="inline-flex items-center gap-2 mb-6 border border-secondary/30 px-3 py-1 rounded-full"
         >
           <span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(0,227,253,0.8)] animate-pulse" />
           <span className="font-body text-[9px] uppercase tracking-[0.2em] text-secondary font-bold">
             Real-Time Telemetry
           </span>
         </motion.div>

        <motion.h1 
          className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Laboratory <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Status</span>
        </motion.h1>
      </div>

      <div className="flex flex-col gap-16 max-w-6xl mx-auto w-full">
        
        {/* Active Fabrication Sequences */}
        <section>
          <h2 className="font-display text-3xl font-bold text-white mb-8 border-b border-surface-bright pb-4 flex items-center gap-4">
             <Activity className="w-6 h-6 text-primary" /> Active Fabrication Sequences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {/* Vortex Core Mod */}
             <div className="bg-surface-highest p-8 rounded-2xl border border-surface-bright flex flex-col gap-4 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4">
                  <span className="text-[9px] font-bold text-secondary uppercase tracking-wider bg-secondary/10 px-2 py-1 rounded">Active</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">Vortex Core Mod</h3>
                <div className="w-full bg-surface-lowest h-2 rounded-full overflow-hidden mt-2">
                   <div className="bg-secondary w-[65%] h-full transition-all" />
                </div>
                <p className="font-body text-xs text-on-surface-variant uppercase tracking-widest mt-2">65% Rendered // Matrix Alignment Nominal</p>
             </div>

             {/* Neural Link Case */}
             <div className="bg-surface-highest p-8 rounded-2xl border border-surface-bright flex flex-col gap-4 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4">
                  <span className="text-[9px] font-bold text-primary uppercase tracking-wider bg-primary/10 px-2 py-1 rounded">Initializing</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">Neural Link Case</h3>
                <div className="w-full bg-surface-lowest h-2 rounded-full overflow-hidden mt-2">
                   <div className="bg-primary w-[15%] h-full transition-all" />
                </div>
                <p className="font-body text-xs text-on-surface-variant uppercase tracking-widest mt-2">15% Rendered // Warming Extruder</p>
             </div>
          </div>
        </section>

        {/* Material Stockpile */}
        <section>
          <h2 className="font-display text-3xl font-bold text-white mb-8 border-b border-surface-bright pb-4 flex items-center gap-4">
             <Beaker className="w-6 h-6 text-secondary" /> Material Stockpile
          </h2>
          <div className="bg-surface-highest rounded-2xl border border-surface-bright p-8">
             <div className="flex items-center justify-between py-4 border-b border-surface-bright">
                <span className="font-body text-sm font-bold text-white uppercase tracking-wider">Aero Carbon (Obsidian)</span>
                <span className="font-body text-xs text-secondary font-bold tracking-widest">98% / OPTIMAL</span>
             </div>
             <div className="flex items-center justify-between py-4 border-b border-surface-bright">
                <span className="font-body text-sm font-bold text-white uppercase tracking-wider">Neural Flex (Cyber Cyan)</span>
                <span className="font-body text-xs text-secondary font-bold tracking-widest">84% / OPTIMAL</span>
             </div>
             <div className="flex items-center justify-between py-4">
                <span className="font-body text-sm font-bold text-white uppercase tracking-wider">Opaline Glass</span>
                <span className="font-body text-xs text-primary font-bold tracking-widest">42% / REFILL REQUIRED</span>
             </div>
          </div>
        </section>

        {/* Environmental Data */}
        <section>
          <h2 className="font-display text-3xl font-bold text-white mb-8 border-b border-surface-bright pb-4 flex items-center gap-4">
             <Server className="w-6 h-6 text-tertiary" /> Environmental Data
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="bg-surface-high border border-surface-bright p-6 rounded-2xl">
               <p className="font-body text-[10px] text-on-surface-variant uppercase tracking-[0.2em] mb-2">Internal Core Temp</p>
               <p className="font-display text-3xl font-bold text-white">21.4°C</p>
             </div>
             <div className="bg-surface-high border border-surface-bright p-6 rounded-2xl">
               <p className="font-body text-[10px] text-on-surface-variant uppercase tracking-[0.2em] mb-2">Ambient Humidity</p>
               <p className="font-display text-3xl font-bold text-white">45% RH</p>
             </div>
             <div className="bg-surface-high border border-surface-bright p-6 rounded-2xl">
               <p className="font-body text-[10px] text-on-surface-variant uppercase tracking-[0.2em] mb-2">Vibration Deflection</p>
               <p className="font-display text-3xl font-bold text-white">&lt;0.01mm</p>
             </div>
          </div>
        </section>

        {/* Synthesized Artifacts */}
        <section>
          <h2 className="font-display text-3xl font-bold text-white mb-8 border-b border-surface-bright pb-4 flex items-center gap-4">
             <CheckCircle2 className="w-6 h-6 text-white" /> Synthesized Artifacts
          </h2>
          <div className="bg-surface-high p-8 rounded-2xl border border-surface-bright">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center pb-4 border-b border-surface-bright mb-4">
                <span className="font-body text-[10px] text-on-surface-variant uppercase tracking-[0.2em]">ID</span>
                <span className="font-body text-[10px] text-on-surface-variant uppercase tracking-[0.2em]">Artifact</span>
                <span className="font-body text-[10px] text-on-surface-variant uppercase tracking-[0.2em]">Status</span>
                <span className="font-body text-[10px] text-on-surface-variant uppercase tracking-[0.2em]">Time</span>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center items-center py-3">
                <span className="font-mono text-xs text-white/50">#891-B</span>
                <span className="font-body text-xs text-white font-bold">Prism Gate</span>
                <span className="text-[10px] text-secondary font-bold uppercase">Dispatched</span>
                <span className="font-mono text-xs text-on-surface-variant">08:14</span>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center items-center py-3">
                <span className="font-mono text-xs text-white/50">#890-X</span>
                <span className="font-body text-xs text-white font-bold">Abstract Mono</span>
                <span className="text-[10px] text-secondary font-bold uppercase">Dispatched</span>
                <span className="font-mono text-xs text-on-surface-variant">04:22</span>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center items-center py-3 border-t border-surface-bright/50">
                <span className="font-mono text-xs text-white/50">#889-C</span>
                <span className="font-body text-xs text-white font-bold">Halo Core Grid</span>
                <span className="text-[10px] text-primary font-bold uppercase">Curing</span>
                <span className="font-mono text-xs text-on-surface-variant">-02:00</span>
             </div>
          </div>
        </section>

        {/* Footer Technical Resources specifically mapped from Stitch */}
        <div className="flex justify-center gap-8 border-t border-surface-bright pt-12 mt-12">
            <a href="#" className="font-body text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-white transition-colors">Technical Specs</a>
            <a href="#" className="font-body text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-white transition-colors">API Documentation</a>
            <a href="#" className="font-body text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-white transition-colors">Privacy Protocol</a>
            <a href="#" className="font-body text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  );
}
