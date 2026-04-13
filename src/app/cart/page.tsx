"use client";

import { motion } from "framer-motion";
import { useCart } from "@/components/CartContext";
import { NeonButton } from "@/components/NeonButton";
import Link from "next/link";
import { Trash2, AlertCircle } from "lucide-react";

export default function CartPage() {
  const { items, removeFromCart, cartTotal, itemCount } = useCart();

  return (
    <div className="flex flex-col relative w-full pt-16 pb-32 px-8 max-w-[1600px] mx-auto min-h-screen">
      <div className="mb-16">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="inline-flex items-center gap-2 mb-6 border border-secondary/30 px-3 py-1 rounded-full"
         >
           <span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(0,227,253,0.8)]" />
           <span className="font-body text-[9px] uppercase tracking-[0.2em] text-secondary font-bold">
             Lumina Filament Node
           </span>
         </motion.div>

        <motion.h1 
          className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-4 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Acquisition Queue
        </motion.h1>
      </div>

      {items.length === 0 ? (
        <motion.div 
          className="text-center py-32 bg-surface-highest/50 rounded-3xl border border-surface-bright flex flex-col items-center justify-center max-w-2xl mx-auto w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="w-16 h-16 rounded-full bg-surface-high border-2 border-dashed border-surface-bright flex items-center justify-center mb-6">
            <span className="w-2 h-2 rounded-full bg-surface-bright animate-pulse" />
          </div>
          <p className="font-body text-sm font-bold tracking-wider uppercase text-white mb-2">No Sequences Queued</p>
          <p className="font-body text-[10px] text-on-surface-variant uppercase tracking-[0.2em] mb-8">System awaiting input parameters</p>
          <NeonButton onClick={() => window.location.href = '/products'}>
            Access Archive
          </NeonButton>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <motion.div 
            className="lg:col-span-8 flex flex-col gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Warning Spec Panel */}
            <div className="bg-surface-high border border-surface-bright p-6 rounded-2xl flex items-start gap-4 mb-4">
              <AlertCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <div>
                <p className="font-body text-xs font-bold text-white uppercase tracking-wider mb-2">Fabrication Protocol Active</p>
                <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                  Items are rendered on-demand using Lumina Filament protocol. Expected materialization and delivery timeline: <span className="text-white">4-6 Business Days</span>. Precision 3D manufacturing for the digital era.
                </p>
              </div>
            </div>

            {/* Cart Items configured like Active Sequences */}
            {items.map((item) => (
              <div key={`${item.id}-${item.variant}`} className="bg-surface-highest border border-surface-bright rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-8 relative overflow-hidden group">
                 {/* Item Image representation */}
                 <div className="bg-surface-lowest w-full sm:w-40 aspect-square rounded-xl shrink-0 flex items-center justify-center border border-white/5 relative overflow-hidden">
                   <div className="w-16 h-16 rounded-full border border-secondary shadow-[0_0_15px_rgba(0,227,253,0.3)] flex items-center justify-center">
                     <div className="w-8 h-8 rounded-full border border-primary shadow-[0_0_10px_rgba(207,150,255,0.3)]" />
                   </div>
                 </div>

                 {/* Item Details */}
                 <div className="flex-1 flex flex-col gap-4 w-full">
                   <div className="flex justify-between items-start">
                     <div>
                       <h3 className="font-display text-2xl font-bold text-white mb-2">{item.name}</h3>
                       {item.variant && (
                         <span className="font-body text-[9px] uppercase tracking-[0.2em] bg-surface-high border border-surface-bright px-3 py-1 rounded-full text-on-surface-variant">
                           {item.variant}
                         </span>
                       )}
                     </div>
                     <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-on-surface-variant hover:text-error transition-colors p-2 bg-surface-high rounded-full border border-transparent hover:border-error"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                   </div>
                   
                   <div className="flex justify-between items-end mt-auto">
                     <p className="font-body text-[10px] text-on-surface-variant uppercase tracking-[0.2em]">Quantity: <span className="text-white font-bold">{item.quantity}</span></p>
                     <p className="font-display text-primary text-2xl font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                   </div>
                 </div>
              </div>
            ))}
          </motion.div>

          <motion.div 
            className="lg:col-span-4 bg-surface-highest border border-surface-bright p-8 rounded-3xl h-fit sticky top-32"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="font-display text-2xl font-bold text-white mb-8">Summary</h2>
            <div className="flex flex-col gap-6 font-body text-xs text-on-surface-variant mb-8">
              <div className="flex items-center justify-between">
                <span className="uppercase tracking-wider">Subtotal</span>
                <span className="text-white font-bold">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between pb-6 border-b border-surface-bright">
                <span className="uppercase tracking-wider">Lumina Processing Fee</span>
                <span className="text-white font-bold">Standard</span>
              </div>
            </div>

            <div className="flex items-center justify-between font-display text-3xl font-bold text-white mb-10">
              <span>Total</span>
              <span className="text-secondary">${cartTotal.toFixed(2)}</span>
            </div>
            <NeonButton className="w-full">
              Checkout & Allocate
            </NeonButton>
            
            <p className="font-body text-[8px] uppercase tracking-[0.2em] text-on-surface-variant/50 text-center mt-6">
              Encrypted end-to-end tunnel active.
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
}
