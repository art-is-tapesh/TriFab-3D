"use client";

import { motion } from "framer-motion";
import { UploadCloud, CheckCircle2 } from "lucide-react";
import { NeonButton } from "@/components/NeonButton";
import { useState } from "react";

export default function CustomPrintPage() {
  const [selectedMaterial, setSelectedMaterial] = useState("aero");

  return (
    <div className="flex flex-col relative w-full pt-16 pb-32 px-8 max-w-5xl mx-auto min-h-[90vh]">
      <div className="mb-16 text-center max-w-2xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="inline-flex items-center gap-2 mb-6 border border-secondary/30 px-3 py-1 rounded-full"
         >
           <span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(0,227,253,0.8)]" />
           <span className="font-body text-[9px] uppercase tracking-[0.2em] text-secondary font-bold">
             Home System
           </span>
         </motion.div>

        <motion.h1 
          className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-6 text-white leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Manifest Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Geometry</span>
        </motion.h1>

        <motion.p 
          className="font-body text-sm md:text-md text-on-surface-variant leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Upload your digital blueprints or describe your vision. Our neural-integrated lab translates complex data into high-fidelity physical artifacts.
        </motion.p>
      </div>

      <motion.form 
        className="flex flex-col gap-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {/* Blueprint Ingestion */}
        <div className="flex flex-col gap-4">
          <h2 className="font-display text-2xl font-bold text-white tracking-tight">Blueprint Ingestion</h2>
          
          <div className="bg-surface-highest border-2 border-dashed border-surface-bright hover:border-secondary/50 rounded-3xl p-12 flex flex-col items-center justify-center text-center cursor-pointer transition-colors group">
             <UploadCloud className="w-12 h-12 text-on-surface-variant group-hover:text-secondary mb-4 transition-colors" />
             <p className="font-body text-white font-bold tracking-wider uppercase text-sm mb-2">Drop .STL, .OBJ, or .3MF</p>
             <p className="font-body text-[10px] uppercase tracking-[0.1em] text-on-surface-variant">Max payload: 256MB per sequence</p>
          </div>
        </div>

        {/* Conceptual Logic */}
        <div className="flex flex-col gap-4">
          <h2 className="font-display text-2xl font-bold text-white tracking-tight">Conceptual Logic</h2>
          <textarea 
            rows={5}
            className="bg-surface-highest/50 px-6 py-6 rounded-2xl border border-surface-bright focus:outline-none focus:border-secondary focus:bg-surface-highest text-white font-body text-sm transition-all resize-none shadow-inner"
            placeholder="Describe the geometric intent, structural requirements, or scale adjustments..."
          />
        </div>

        {/* Material Configuration */}
        <div className="flex flex-col gap-4">
          <h2 className="font-display text-2xl font-bold text-white tracking-tight">Material Configuration</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Aero Carbon */}
            <div 
              onClick={() => setSelectedMaterial("aero")}
              className={`p-6 rounded-2xl border cursor-pointer transition-all ${selectedMaterial === "aero" ? "bg-surface-highest border-secondary shadow-[0_0_20px_rgba(0,227,253,0.1)]" : "bg-transparent border-surface-bright hover:bg-surface-highest/50"}`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-display font-bold text-white text-lg">Aero Carbon</h3>
                {selectedMaterial === "aero" && <CheckCircle2 className="w-5 h-5 text-secondary" />}
              </div>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">Aerospace grade tensile strength. Matte finish.</p>
            </div>

            {/* Neural Flex */}
            <div 
              onClick={() => setSelectedMaterial("neural")}
              className={`p-6 rounded-2xl border cursor-pointer transition-all ${selectedMaterial === "neural" ? "bg-surface-highest border-primary shadow-[0_0_20px_rgba(207,150,255,0.1)]" : "bg-transparent border-surface-bright hover:bg-surface-highest/50"}`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-display font-bold text-white text-lg">Neural Flex</h3>
                {selectedMaterial === "neural" && <CheckCircle2 className="w-5 h-5 text-primary" />}
              </div>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">Lattice memory polymers. High impact resistance.</p>
            </div>

            {/* Opaline Glass */}
            <div 
              onClick={() => setSelectedMaterial("opaline")}
              className={`p-6 rounded-2xl border cursor-pointer transition-all ${selectedMaterial === "opaline" ? "bg-surface-highest border-secondary shadow-[0_0_20px_rgba(0,227,253,0.1)]" : "bg-transparent border-surface-bright hover:bg-surface-highest/50"}`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-display font-bold text-white text-lg">Opaline Glass</h3>
                {selectedMaterial === "opaline" && <CheckCircle2 className="w-5 h-5 text-secondary" />}
              </div>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">Translucent ceramic hybrid. Refractive finish.</p>
            </div>
          </div>
        </div>

        {/* Footer & Submit */}
        <div className="mt-8 pt-8 border-t border-surface-high flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex flex-col gap-2 text-center md:text-left">
              <p className="font-body text-[10px] text-white/50 uppercase tracking-[0.2em]">Estimated Credit Cost: Variable</p>
              <p className="font-body text-xs text-on-surface-variant max-w-sm">
                By initializing, you accept the Molecular Binding Terms & Conditions. Forging the intersection of digital precision and physical reality.
              </p>
           </div>
           
           <NeonButton type="button" className="w-full md:w-auto px-12">
             Initialize Sequence
           </NeonButton>
        </div>
      </motion.form>
    </div>
  );
}
