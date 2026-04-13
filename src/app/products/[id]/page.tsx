"use client";

import { useState, use } from "react";
import { motion } from "framer-motion";
import { NeonButton } from "@/components/NeonButton";
import { useCart } from "@/components/CartContext";

const MOCK_DB: Record<string, any> = {
  "prism-gate": { 
    name: "Prism Gate", 
    price: 75.00, 
    material: "Opaline Glass", 
    desc: "A holographic material array that refracts light into complex geometry. Engineered for desk-side ambient light diffusion and spatial enhancement.", 
  },
  "vortex-core-mod": {
    name: "Vortex Core Mod",
    price: 45.00,
    material: "Matte Resin",
    desc: "Advanced fluid dynamic replacement component. Engineered in Obsidian black for maximum structural integrity.",
  },
  "neural-link-case": {
    name: "Neural Link Case",
    price: 120.00,
    material: "PLA+ Cyber Cyan",
    desc: "End-to-End Encrypted Tunnel housing unit. High-impact casing designed explicitly for deep-dive hardware security.",
  }
};

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const idToUse = MOCK_DB[unwrappedParams.id] ? unwrappedParams.id : "prism-gate"; // Default to Prism Gate specifically for this demo if ID fails
  const product = MOCK_DB[idToUse];
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart({ id: idToUse, name: product.name, price: product.price, quantity: 1, variant: product.material });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="flex flex-col relative w-full pt-16 pb-32 px-8 max-w-[1600px] mx-auto min-h-screen">
      
      {/* Top Product Hero */}
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-32 items-start">
        {/* Visual Matrix */}
        <motion.div 
          className="w-full lg:w-[45%] aspect-square bg-surface-highest rounded-3xl border border-surface-bright p-8 flex items-center justify-center relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-8 left-8 z-20 flex flex-col gap-2">
            <span className="font-body text-[9px] uppercase tracking-[0.2em] text-secondary font-bold bg-surface-highest/80 px-3 py-1 rounded-full border border-secondary/30 backdrop-blur-md">
              Lab Verified
            </span>
          </div>
          
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 aspect-square rounded-full bg-secondary/10 blur-[120px] pointer-events-none" />
          
          <motion.div 
            className="relative w-[70%] h-[70%] border border-white/10 opacity-90 shadow-2xl"
            style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(0,227,253,0.2))', backdropFilter: 'blur(10px)' }}
            animate={{ rotateY: [0, 20, -20, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Data Architecture */}
        <motion.div 
          className="w-full lg:w-[45%] flex flex-col pt-8"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white">{product.name}</h1>
          <p className="font-display text-secondary text-4xl font-bold mb-10">${product.price.toFixed(2)}</p>

          <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-12">
            {product.desc}
          </p>

          <div className="flex flex-col gap-0 border-y border-surface-high mb-12">
            <div className="flex justify-between items-center py-6 border-b border-surface-high">
              <span className="font-body text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">Material Synthesis</span>
              <span className="font-body text-sm font-bold text-white uppercase">{product.material}</span>
            </div>
            <div className="flex justify-between items-center py-6">
              <span className="font-body text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">Availability Protocol</span>
              <span className="font-body text-sm font-bold text-secondary uppercase">Ready to Render</span>
            </div>
          </div>

          <div className="flex gap-4">
             <NeonButton onClick={handleAdd} className="flex-1 max-w-sm">
               {added ? "Data Queued" : "Add to Queue"}
             </NeonButton>
          </div>
        </motion.div>
      </div>

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-surface-bright to-transparent mb-24" />

      {/* Two Column Extended Information */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        
        {/* Synthesized Feedback */}
        <div className="flex flex-col">
           <h2 className="font-display text-3xl font-bold text-white tracking-tight mb-4">Synthesized Feedback</h2>
           <p className="font-body text-sm text-on-surface-variant mb-12">Validated transmissions from the global user ecosystem.</p>

           <div className="flex flex-col gap-6">
             {/* Review 1 */}
             <div className="bg-surface-high p-8 rounded-2xl border border-surface-bright">
               <div className="flex items-center gap-4 mb-4">
                 <div className="w-8 h-8 rounded-full border border-secondary bg-surface-highest" />
                 <div>
                   <p className="font-bold text-xs text-white uppercase tracking-wider">Synth_Architect</p>
                   <p className="text-[9px] text-secondary tracking-widest uppercase font-bold">Level 09 Collector</p>
                 </div>
               </div>
               <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                 &quot;The way the Prism Gate interacts with my setup&apos;s lighting is unreal. It doesn&apos;t just sit there—it actively shapes the atmosphere.&quot;
               </p>
             </div>

             {/* Review 2 */}
             <div className="bg-surface-high p-8 rounded-2xl border border-surface-bright">
               <div className="flex items-center gap-4 mb-4">
                 <div className="w-8 h-8 rounded-full border border-primary bg-surface-highest" />
                 <div>
                   <p className="font-bold text-xs text-white uppercase tracking-wider">Void_Merchant</p>
                   <p className="text-[9px] text-primary tracking-widest uppercase font-bold">Technician</p>
                 </div>
               </div>
               <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                 &quot;Exceptional print quality. No visible layering, just pure translucent perfection. Highly recommended for workstation upgrades.&quot;
               </p>
             </div>

             {/* Review 3 */}
             <div className="bg-surface-high p-8 rounded-2xl border border-surface-bright">
               <div className="flex items-center gap-4 mb-4">
                 <div className="w-8 h-8 rounded-full border border-tertiary bg-surface-highest" />
                 <div>
                   <p className="font-bold text-xs text-white uppercase tracking-wider">Lumina_X</p>
                   <p className="text-[9px] text-tertiary tracking-widest uppercase font-bold">Beta Tester</p>
                 </div>
               </div>
               <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                 &quot;Opaline glass variant is heavy and premium. Definitely feels like it came from a high-tech lab, not a home printer.&quot;
               </p>
             </div>
           </div>
        </div>

        {/* Complementary Data Nodes */}
        <div className="flex flex-col">
           <h2 className="font-display text-3xl font-bold text-white tracking-tight mb-12">Complementary Data Nodes</h2>

           <div className="flex flex-col gap-12">
             {/* Node 1 */}
             <div className="group cursor-pointer">
               <div className="w-full aspect-[21/9] bg-surface-highest rounded-2xl border border-transparent group-hover:border-surface-bright transition-colors mb-6 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent z-0" />
                  <div className="font-display text-secondary font-bold opacity-30 text-5xl z-10">&lt; // &gt;</div>
               </div>
               <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">Helix Light Node</h3>
               <p className="font-body text-sm text-on-surface-variant">Interlocking lattice structure designed for warm spectrum emission and fractal shadowing.</p>
             </div>

             {/* Node 2 */}
             <div className="group cursor-pointer">
               <div className="w-full aspect-[21/9] bg-surface-highest rounded-2xl border border-transparent group-hover:border-surface-bright transition-colors mb-6 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-l from-secondary/10 to-transparent z-0" />
                  <div className="font-display text-primary font-bold opacity-30 text-5xl z-10">[ 02 ]</div>
               </div>
               <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">Crystalline Wall Plate</h3>
               <p className="font-body text-sm text-on-surface-variant">Organic growth patterns captured in high-density aero-carbon resin modules.</p>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
