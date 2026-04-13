"use client";

import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
}

export function NeonButton({ variant = "primary", className, children, ...props }: NeonButtonProps) {
  const baseStyles = "relative font-body text-label-md uppercase tracking-wider font-bold transition-all duration-300";

  const variants = {
    primary: "px-8 py-4 rounded-full text-white neon-gradient-bg hover:scale-105 neon-glow overflow-hidden",
    secondary: "px-8 py-4 rounded-full text-white glass-panel ghost-border ghost-border-hover hover:scale-105 hover:bg-surface-high/80",
    tertiary: "text-secondary hover:text-primary transition-colors",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={cn(baseStyles, variants[variant], className)}
      {...props as any}
    >
      {variant === "primary" && (
        <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity" />
      )}
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </motion.button>
  );
}
