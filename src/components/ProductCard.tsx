"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export interface Product {
  id: string;
  name: string;
  price: number;
  material: string;
  image: string;
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="bg-surface-highest rounded-[1.5rem] ghost-border ghost-border-hover relative overflow-hidden group h-full flex flex-col"
      >
        {/* Faux Neon glow on hover */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 z-0" />
        
        <div className="relative aspect-square w-full bg-black/40 z-10 overflow-hidden p-8 flex items-center justify-center">
          {/* Glass Material Pill */}
          <div className="absolute top-6 right-6 z-20">
            <div className="glass-panel ghost-border px-4 py-2 rounded-full font-body font-bold text-label-md uppercase text-secondary">
              {product.material}
            </div>
          </div>
          
          <motion.div 
            className="w-full h-full relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          >
            {/* Using a placeholder gradient block for 3D model simulation. In a real app, this would be an Image. */}
            <div 
              className="absolute inset-0 rounded-2xl shadow-xl border border-white/5 opacity-80"
              style={{
                background: `linear-gradient(135deg, ${product.image === 'blue' ? '#00e3fd, #006875' : '#cf96ff, #480079'})`
              }}
            />
          </motion.div>
        </div>

        <div className="p-8 z-10 flex flex-col gap-2 flex-grow justify-end">
          <h3 className="font-body text-xl font-bold leading-tight">{product.name}</h3>
          <p className="font-display text-primary-dim text-lg tracking-wider">${product.price.toFixed(2)}</p>
        </div>
      </motion.div>
    </Link>
  );
}
