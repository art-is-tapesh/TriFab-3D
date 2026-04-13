"use client";

import { motion } from "framer-motion";
import { ProductCard, Product } from "@/components/ProductCard";

const ALL_PRODUCTS: Product[] = [
  { id: "prism-gate", name: "Prism Gate", price: 75.00, material: "Opaline Glass", image: "purple" },
  { id: "vortex-core-mod", name: "Vortex Core Mod", price: 45.00, material: "Matte Resin", image: "blue" },
  { id: "neural-link-case", name: "Neural Link Case", price: 120.00, material: "PLA+ Cyber Cyan", image: "purple" },
  { id: "abstract-sculpture", name: "Abstract Sculpture 01", price: 210.00, material: "PLA", image: "purple" },
  { id: "modular-organizer", name: "Modular Desk Organizer", price: 65.00, material: "PLA", image: "blue" },
  { id: "geo-vase", name: "Geometric Array Vase", price: 85.00, material: "PLA", image: "blue" },
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col relative w-full pt-16 pb-32 px-8 max-w-[1600px] mx-auto min-h-screen">
      <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="inline-flex items-center gap-2 mb-6 border border-secondary/30 px-3 py-1 rounded-full"
           >
             <span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(0,227,253,0.8)]" />
             <span className="font-body text-[9px] uppercase tracking-[0.2em] text-secondary font-bold">
               Central Archive
             </span>
           </motion.div>
          <motion.h1 
            className="font-display text-5xl md:text-6xl font-bold tracking-tight text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Digital Artifacts
          </motion.h1>
        </div>
        <motion.div 
           className="flex gap-4 font-body text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold"
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button className="text-white border-b border-primary pb-1">All Items</button>
          <button className="hover:text-white transition-colors pb-1 border-b border-transparent">Gifts</button>
          <button className="hover:text-white transition-colors pb-1 border-b border-transparent">Utility</button>
          <button className="hover:text-white transition-colors pb-1 border-b border-transparent">Home Decor</button>
          <button className="hover:text-white transition-colors pb-1 border-b border-transparent">Desk Setup</button>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ALL_PRODUCTS.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
