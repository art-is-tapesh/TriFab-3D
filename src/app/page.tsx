"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Gift, Wrench, Home, Monitor, Zap, Hexagon, Plane } from "lucide-react";
import { SpotlightCard } from "@/components/SpotlightCard";

export default function LandingPage() {
  return (
    <div className="flex flex-col relative w-full bg-surface">
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-between px-8 max-w-[1600px] mx-auto w-full pt-28 pb-12 gap-12">
        {/* Left Content */}
        <div className="w-full md:w-[45%] flex flex-col z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 mb-6 border border-secondary/30 px-3 py-1 rounded-full w-fit"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(0,227,253,0.8)]" />
            <span className="font-body text-[9px] uppercase tracking-[0.2em] text-secondary font-bold">
              Advanced Fabrication Protocol
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-6xl md:text-[5.5rem] leading-[1.05] tracking-tight font-bold text-white mb-6"
          >
            Print Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Imagination
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-base md:text-lg text-on-surface-variant max-w-md leading-relaxed mb-10"
          >
            Transforming digital signals into hyper-complex physical matter. Explore our archive of customizable, algorithmically generated artifacts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
          >
            <button className="flex-1 bg-secondary hover:bg-secondary-dim text-black font-body text-[11px] font-bold uppercase tracking-[0.15em] py-4 rounded-full transition-colors w-full sm:w-auto text-center" onClick={() => window.location.href='/products'}>
              Explore Collection
            </button>
            <button className="flex-1 bg-surface-high hover:bg-surface-highest border border-surface-bright text-white font-body text-[11px] font-bold uppercase tracking-[0.15em] py-4 rounded-full transition-colors w-full sm:w-auto text-center">
              View Schematics
            </button>
          </motion.div>
        </div>

        {/* Right Content - 3D Cube & Status */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-full md:w-[50%] relative flex flex-col items-center justify-center mt-12 md:mt-0"
        >
          {/* Subtle glow behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] aspect-square bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
          
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative z-10 w-full max-w-[600px] aspect-square object-contain flex items-center justify-center"
          >
            <Image 
              src="/images/hero_cube.png" 
              alt="3D Floating Cube" 
              width={600} 
              height={600}
              className="w-full h-auto drop-shadow-2xl object-contain"
              priority
            />
          </motion.div>

          {/* Status Pill matching the screenshot */}
          <div className="absolute bottom-4 left-4 md:bottom-12 md:left-12 bg-surface-highest/90 border border-surface-bright p-4 rounded-2xl backdrop-blur-md z-20 flex flex-col gap-1 min-w-[200px]">
             <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(0,227,253,0.8)]" />
                <span className="font-body text-[9px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">Real-Time Status</span>
             </div>
             <p className="font-body text-[8px] text-white/50 uppercase tracking-[0.2em]">Operational // System ID</p>
             <p className="font-display text-secondary font-bold tracking-widest text-lg">AX-15 PROTO</p>
          </div>
        </motion.div>
      </section>

      <div className="w-full max-w-[1600px] mx-auto px-8 my-16">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-surface-bright to-transparent" />
      </div>

      {/* --- CATEGORIES SECTION --- */}
      <section className="px-8 max-w-[1600px] mx-auto w-full py-16">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h3 className="font-body text-[10px] text-primary uppercase tracking-[0.2em] font-bold mb-2">Categorized Clusters</h3>
            <h2 className="font-display text-4xl font-bold text-white tracking-tight">Featured Categories</h2>
          </div>
          <span className="font-body text-[10px] text-on-surface-variant uppercase tracking-[0.1em]">3.2 Impressions</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[320px]">
          {/* Gifts Layout - large block */}
          <SpotlightCard className="md:col-span-8 bg-surface-highest group cursor-pointer border border-transparent hover:border-surface-bright transition-colors h-[240px] md:h-full" spotlightColor="rgba(239, 68, 68, 0.25)">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-surface-highest z-0 pointer-events-none" />
            <div className="absolute inset-0 flex items-center justify-center pt-8 pointer-events-none">
               <Gift className="w-32 h-32 text-red-500/20 group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="absolute bottom-6 left-6 z-10 pointer-events-none">
              <span className="bg-secondary/20 text-secondary text-[8px] px-2 py-1 rounded-sm uppercase tracking-widest font-bold mb-2 block w-fit">Manual</span>
              <h3 className="font-display text-2xl font-bold text-white group-hover:-translate-y-1 transition-transform">Gifts</h3>
            </div>
          </SpotlightCard>
          
          {/* Utility Layout - small block */}
          <SpotlightCard className="md:col-span-4 bg-surface-highest group cursor-pointer border border-transparent hover:border-surface-bright transition-colors h-[240px] md:h-full" spotlightColor="rgba(255, 255, 255, 0.15)">
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-surface-highest z-0 pointer-events-none" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <Wrench className="w-24 h-24 text-white/10 group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="absolute bottom-6 left-6 z-10 pointer-events-none">
              <h3 className="font-display text-2xl font-bold text-white group-hover:-translate-y-1 transition-transform">Utility</h3>
            </div>
          </SpotlightCard>

          {/* Home Decor Layout */}
          <SpotlightCard className="md:col-span-4 bg-surface-highest group cursor-pointer border border-transparent hover:border-surface-bright transition-colors h-[240px] md:h-full" spotlightColor="rgba(74, 222, 128, 0.25)">
            <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 to-surface-highest z-0 pointer-events-none" />
             <div className="absolute inset-0 flex items-center p-8 opacity-20 pointer-events-none">
               <Home className="w-16 h-16 text-green-400 group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="absolute bottom-6 left-6 z-10 pointer-events-none">
              <h3 className="font-display text-2xl font-bold text-white group-hover:-translate-y-1 transition-transform">Home Decor</h3>
            </div>
          </SpotlightCard>

          {/* Desk Setup Layout */}
          <SpotlightCard className="md:col-span-8 bg-surface-highest group cursor-pointer border border-transparent hover:border-surface-bright transition-colors h-[240px] md:h-full" spotlightColor="rgba(0, 227, 253, 0.2)">
             <div className="absolute inset-0 bg-gradient-to-l from-black to-surface-highest z-0 pointer-events-none" />
             <div className="absolute inset-y-0 right-12 flex items-center opacity-10 pointer-events-none">
               <Monitor className="w-48 h-48 text-white group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute bottom-6 left-6 z-10 pointer-events-none">
              <h3 className="font-display text-2xl font-bold text-white group-hover:-translate-y-1 transition-transform">Desk Setup</h3>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* --- ACTIVE SEQUENCES SECTION --- */}
      <section className="px-8 max-w-[1600px] mx-auto w-full py-24">
        <div className="text-center mb-16">
           <h2 className="font-display text-4xl font-bold text-white tracking-tight mb-2">Active Fabrication Sequences</h2>
           <p className="font-body text-[10px] text-on-surface-variant uppercase tracking-[0.2em]">Processing Within The Matrix</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Item 1 */}
          <div className="bg-surface-high border border-surface-bright rounded-[2rem] p-6 group cursor-pointer">
            <div className="flex justify-between items-center mb-6">
              <span className="text-[9px] font-bold text-tertiary uppercase tracking-wider">Visual</span>
              <span className="text-[9px] font-bold text-secondary uppercase tracking-wider">Active</span>
            </div>
            <div className="bg-surface-lowest aspect-square rounded-2xl mb-8 flex items-center justify-center p-8 border border-white/5 relative overflow-hidden">
               <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors" />
               <div className="w-full h-full relative" style={{ background: 'linear-gradient(135deg, #cf96ff, #480079)', opacity: 0.8, WebkitMaskImage: 'url(/images/hero_cube.png)', WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center', filter: 'brightness(0)' }} />
            </div>
            <div className="flex justify-between items-end">
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-1">Voronoi V4</h3>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">Photopolymer Resin 4k</p>
              </div>
              <div className="text-right">
                <p className="font-display text-primary text-xl font-bold">$42.00</p>
                <p className="text-[9px] text-on-surface-variant uppercase tracking-wider">In Stock</p>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="bg-surface-high border border-surface-bright rounded-[2rem] p-6 group cursor-pointer">
            <div className="flex justify-between items-center mb-6">
              <span className="text-[9px] font-bold text-primary uppercase tracking-wider">Data</span>
            </div>
            <div className="bg-surface-lowest aspect-square rounded-2xl mb-8 flex items-center justify-center p-8 border border-white/5 relative overflow-hidden">
               <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors" />
               <div className="w-32 h-32 rounded-full border border-secondary shadow-[0_0_30px_rgba(0,227,253,0.5)] flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full border border-secondary shadow-[0_0_15px_rgba(0,227,253,0.5)]" />
               </div>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-1">Halo Core</h3>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">Dynamic Routing Unit</p>
              </div>
              <div className="text-right">
                <p className="font-display text-primary text-xl font-bold">$120.00</p>
                <p className="text-[9px] text-on-surface-variant uppercase tracking-wider">In Stock</p>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="bg-surface-high border border-surface-bright rounded-[2rem] p-6 group cursor-pointer">
            <div className="flex justify-between items-center mb-6">
              <span className="text-[9px] font-bold text-tertiary uppercase tracking-wider">Physical</span>
              <span className="text-[9px] font-bold text-on-surface-variant uppercase tracking-wider">Pending</span>
            </div>
            <div className="bg-surface-lowest aspect-square rounded-2xl mb-8 flex items-center justify-center p-8 border border-white/5 relative overflow-hidden">
               <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors" />
                <div className="w-32 h-32 bg-white/10" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
            </div>
            <div className="flex justify-between items-end">
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-1">Prism Gate</h3>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">Structural Channel Alloy</p>
              </div>
              <div className="text-right">
                <p className="font-display text-primary text-xl font-bold">$75.00</p>
                <p className="text-[9px] text-on-surface-variant uppercase tracking-wider">In Stock</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROTOCOL ADVANTAGES --- */}
      <section className="px-8 max-w-[1600px] mx-auto w-full py-16 flex flex-col md:flex-row gap-16 lg:gap-32 items-center">
        {/* Left List */}
        <div className="w-full md:w-1/2">
           <h3 className="font-body text-[10px] text-secondary uppercase tracking-[0.2em] font-bold mb-4">System Hardware</h3>
           <h2 className="font-display text-5xl font-bold text-white tracking-tight mb-16">Protocol<br/>Advantages</h2>

           <div className="flex flex-col gap-12">
             <div className="flex gap-6">
               <div className="w-12 h-12 rounded-full bg-surface-high border border-surface-bright flex items-center justify-center text-secondary shrink-0">
                  <Zap className="w-5 h-5" />
               </div>
               <div>
                 <h4 className="font-display text-xl font-bold text-white mb-2">Absolute Customization</h4>
                 <p className="font-body text-sm text-on-surface-variant max-w-sm">Command our arrays instantaneously. Adjust geometry scaled and material density in real-time through our lab interface.</p>
               </div>
             </div>

             <div className="flex gap-6">
               <div className="w-12 h-12 rounded-full bg-surface-high border border-surface-bright flex items-center justify-center text-primary shrink-0">
                  <Hexagon className="w-5 h-5" />
               </div>
               <div>
                 <h4 className="font-display text-xl font-bold text-white mb-2">Unique Geometry</h4>
                 <p className="font-body text-sm text-on-surface-variant max-w-sm">Leveraging models deemed impossible to manufacture through traditional injection molding. We print the future of physics.</p>
               </div>
             </div>

             <div className="flex gap-6">
               <div className="w-12 h-12 rounded-full bg-surface-high border border-surface-bright flex items-center justify-center text-tertiary shrink-0">
                  <Plane className="w-5 h-5" />
               </div>
               <div>
                 <h4 className="font-display text-xl font-bold text-white mb-2">Quantum Delivery</h4>
                 <p className="font-body text-sm text-on-surface-variant max-w-sm">Our network exports ready material via localized centers near your location to allow unparalleled lead times.</p>
               </div>
             </div>
           </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 relative bg-black rounded-3xl overflow-hidden border border-surface-bright aspect-square shadow-2xl">
           <Image
             src="/images/lab_equip.png"
             alt="Laboratory Equipment"
             fill
             className="object-cover opacity-80"
           />
           {/* Stat Overlay */}
           <div className="absolute bottom-0 right-0 bg-surface-highest/80 backdrop-blur-md border-t border-l border-surface-bright px-8 py-6 rounded-tl-3xl">
              <p className="font-display text-5xl font-bold text-secondary tracking-tight">99.9%</p>
              <p className="font-body text-[8px] uppercase tracking-widest text-white/50 mt-1">Structural Accuracy Rating</p>
           </div>
        </div>
      </section>

      {/* --- NEURAL FEEDBACK --- */}
      <section className="px-8 max-w-[1600px] mx-auto w-full py-24">
        <h2 className="font-display text-3xl font-bold text-white tracking-tight mb-12">Neural Feedback</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="bg-surface-high p-8 rounded-2xl border border-surface-bright relative">
             {/* Quote icon abstract */}
             <div className="absolute top-6 right-6 w-12 h-12 border-2 border-white/5 rounded-tl-xl rounded-br-xl opacity-20" />
             <div className="flex items-center gap-4 mb-6">
               <div className="w-10 h-10 rounded-full bg-surface-bright" />
               <div>
                 <p className="font-bold text-sm text-white uppercase tracking-wider">CRIZBY_</p>
                 <p className="text-[10px] text-tertiary tracking-widest uppercase">Verified Receiver</p>
               </div>
             </div>
             <p className="font-body text-sm text-on-surface-variant italic leading-relaxed">
               &quot;The lattice constructs on the V4 model arrived absolutely pristine level. TriFab 3D has outpaced living thermal expectations.&quot;
             </p>
           </div>

           <div className="bg-surface-high p-8 rounded-2xl border border-surface-bright relative">
             <div className="absolute top-6 right-6 w-12 h-12 border-2 border-white/5 rounded-tl-xl rounded-br-xl opacity-20" />
             <div className="flex items-center gap-4 mb-6">
               <div className="w-10 h-10 rounded-full bg-surface-bright" />
               <div>
                 <p className="font-bold text-sm text-white uppercase tracking-wider">REVA-9</p>
                 <p className="text-[10px] text-secondary tracking-widest uppercase">Fabrication Tech</p>
               </div>
             </div>
             <p className="font-body text-sm text-on-surface-variant italic leading-relaxed">
               &quot;I absolutely love the raw finish flow. Looks like equivalent of a high level matrixation. The lab elements connect over everything.&quot;
             </p>
           </div>

           <div className="bg-surface-high p-8 rounded-2xl border border-surface-bright relative">
             <div className="absolute top-6 right-6 w-12 h-12 border-2 border-white/5 rounded-tl-xl rounded-br-xl opacity-20" />
             <div className="flex items-center gap-4 mb-6">
               <div className="w-10 h-10 rounded-full bg-surface-bright" />
               <div>
                 <p className="font-bold text-sm text-white uppercase tracking-wider">ELXO210</p>
                 <p className="text-[10px] text-primary tracking-widest uppercase">Verified Receiver</p>
               </div>
             </div>
             <p className="font-body text-sm text-on-surface-variant italic leading-relaxed">
               &quot;Quality uncompromised. The real time scaling of the fabrication sequence was addictive. Total conversion achieved.&quot;
             </p>
           </div>
        </div>
      </section>

      {/* --- INITIATE SEQUENCE --- */}
      <section className="px-8 max-w-[1600px] mx-auto w-full py-24 mb-12">
        <div className="bg-surface-highest/50 border border-surface-bright rounded-3xl p-16 flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 blur-[100px] w-full h-full pointer-events-none" />
          <h2 className="font-display text-4xl font-bold text-white tracking-tight mb-4 z-10">Initiate New Sequence</h2>
          <p className="font-body text-sm text-on-surface-variant max-w-md z-10 mb-8">
            Align with our communications channel to process raw algorithmic design codes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm z-10">
             <input type="email" placeholder="NEURAL_LINK@PROTOCOL.COM" className="flex-1 bg-surface-lowest text-white font-body text-[10px] uppercase tracking-widest px-6 py-4 rounded-full border border-surface-bright focus:outline-none focus:border-secondary transition-colors" />
             <button className="bg-white text-black font-body text-[10px] font-bold uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white/80 transition-colors shrink-0">Connect</button>
          </div>
        </div>
      </section>

    </div>
  );
}
