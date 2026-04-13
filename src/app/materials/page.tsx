"use client";

import { motion } from "framer-motion";
import { Hexagon, Droplet, Shield } from "lucide-react";

export default function MaterialsPage() {
  return (
    <div className="flex flex-col relative w-full pt-16 pb-32 px-8 max-w-[1600px] mx-auto min-h-screen">
      <div className="mb-24 text-center max-w-3xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="inline-flex items-center gap-2 mb-6 border border-secondary/30 px-3 py-1 rounded-full"
         >
           <span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(0,227,253,0.8)]" />
           <span className="font-body text-[9px] uppercase tracking-[0.2em] text-secondary font-bold">
             Material Science
           </span>
         </motion.div>

        <motion.h1 
          className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Molecular <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Substrates</span>
        </motion.h1>

        <motion.p 
          className="font-body text-base text-on-surface-variant leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We rely on three proprietary formulation matrixes to deliver structure, flexibility, and light dynamics. Choose the protocol that fits your engineering schematic.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Aero Carbon */}
        <motion.div 
          className="bg-surface-highest rounded-3xl p-10 border border-surface-bright flex flex-col items-center text-center relative overflow-hidden group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
           <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-white w-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
           <div className="w-20 h-20 rounded-full border border-white/20 bg-surface-high mb-8 flex items-center justify-center">
             <Hexagon className="w-8 h-8 text-white" />
           </div>
           <h2 className="font-display text-2xl font-bold text-white mb-4">Aero Carbon</h2>
           <p className="font-body text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold mb-6">Tensile Strength / Matte</p>
           <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-8">
             Aerospace grade polymer blended with microscopic carbon filaments. Generates exceptionally rigid structures capable of withstanding massive shear forces while maintaining an unreflective matte-obsidian shell.
           </p>
           <ul className="w-full text-left font-body text-xs text-on-surface-variant space-y-4 border-t border-surface-high pt-6">
              <li className="flex justify-between border-b border-surface-high pb-2"><span>Infill Density:</span> <span className="text-white font-bold">100% Core</span></li>
              <li className="flex justify-between border-b border-surface-high pb-2"><span>Heat Deflection:</span> <span className="text-white font-bold">145°C</span></li>
              <li className="flex justify-between"><span>Price Modifier:</span> <span className="text-white font-bold">Standard</span></li>
           </ul>
        </motion.div>

        {/* Neural Flex */}
        <motion.div 
          className="bg-surface-highest rounded-3xl p-10 border border-surface-bright flex flex-col items-center text-center relative overflow-hidden group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
           <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary w-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
           <div className="w-20 h-20 rounded-full border border-primary/20 bg-surface-high mb-8 flex items-center justify-center shadow-[0_0_20px_rgba(207,150,255,0.1)]">
             <Shield className="w-8 h-8 text-primary" />
           </div>
           <h2 className="font-display text-2xl font-bold text-white mb-4">Neural Flex</h2>
           <p className="font-body text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold mb-6">Impact Resistance / Semi-Gloss</p>
           <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-8">
             Lattice memory polymers formulated to absorb kinetic energy. Structures rendered in Neural Flex bend and snap back into pre-mapped geometry sequences, making it ideal for interlocking mechanisms.
           </p>
           <ul className="w-full text-left font-body text-xs text-on-surface-variant space-y-4 border-t border-surface-high pt-6">
              <li className="flex justify-between border-b border-surface-high pb-2"><span>Elasticity Margin:</span> <span className="text-primary font-bold">+24%</span></li>
              <li className="flex justify-between border-b border-surface-high pb-2"><span>Impact Absorption:</span> <span className="text-white font-bold">Tier 02</span></li>
              <li className="flex justify-between"><span>Price Modifier:</span> <span className="text-primary font-bold">+15%</span></li>
           </ul>
        </motion.div>

        {/* Opaline Glass */}
        <motion.div 
          className="bg-surface-highest rounded-3xl p-10 border border-surface-bright flex flex-col items-center text-center relative overflow-hidden group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
           <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-secondary w-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
           <div className="w-20 h-20 rounded-full border border-secondary/20 bg-surface-high mb-8 flex items-center justify-center shadow-[0_0_20px_rgba(0,227,253,0.1)]">
             <Droplet className="w-8 h-8 text-secondary" />
           </div>
           <h2 className="font-display text-2xl font-bold text-white mb-4">Opaline Glass</h2>
           <p className="font-body text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold mb-6">Translucent / Refractive</p>
           <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-8">
             A hybrid ceramic-resin capable of refracting light across multiple spectrums. Ideal for ambient nodes, light casing, and aesthetic components where photon dispersion is a primary requirement.
           </p>
           <ul className="w-full text-left font-body text-xs text-on-surface-variant space-y-4 border-t border-surface-high pt-6">
              <li className="flex justify-between border-b border-surface-high pb-2"><span>Light Transmission:</span> <span className="text-secondary font-bold">88%</span></li>
              <li className="flex justify-between border-b border-surface-high pb-2"><span>Finish Protocol:</span> <span className="text-white font-bold">Liquid Cure</span></li>
              <li className="flex justify-between"><span>Price Modifier:</span> <span className="text-secondary font-bold">+28%</span></li>
           </ul>
        </motion.div>
      </div>

    </div>
  );
}
