"use client";

import Link from "next/link";
import { ShoppingCart, LogIn, LogOut, Menu, X } from "lucide-react";
import { useCart } from "./CartContext";
import { useSession, signOut } from "next-auth/react";
import { GlassPanel } from "./GlassPanel";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function Navbar() {
  const { itemCount } = useCart();
  const pathname = usePathname();
  const { data: session } = useSession();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll detection for dynamic styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Explore", path: "/products" },
    { name: "Custom Request", path: "/custom" },
    { name: "Materials", path: "/materials" },
    { name: "Lab Status", path: "/faq" },
  ];

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 p-4 transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="max-w-[1600px] mx-auto">
        <GlassPanel 
          className={`flex items-center justify-between px-6 md:px-8 py-4 !rounded-2xl transition-all duration-300 ${
            isScrolled 
              ? "bg-surface/90 shadow-2xl shadow-surface-lowest backdrop-blur-xl border border-surface-bright/50" 
              : "bg-surface-lowest/50 border-transparent shadow-none"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="font-display text-2xl font-bold tracking-tight text-white flex items-center gap-2 relative z-20 group">
            <span className="group-hover:text-primary transition-colors">TriFab</span>
            <span className="text-secondary font-light group-hover:text-white transition-colors">3D</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-10 font-body font-bold text-[11px] uppercase tracking-[0.2em] relative z-20">
            {navLinks.map((item) => {
               const isActive = pathname === item.path || (pathname?.startsWith(item.path) && item.path !== "/");
               return (
                 <Link 
                   key={item.name} 
                   href={item.path} 
                   className={`transition-colors pb-1 border-b-2 ${
                     isActive 
                       ? "text-primary border-primary" 
                       : "text-on-surface-variant hover:text-white border-transparent"
                   }`}
                 >
                   {item.name}
                 </Link>
               );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-6 relative z-20">
            <Link href="/cart" className={`relative transition-colors flex items-center justify-center ${
                pathname === "/cart" ? "text-primary" : "text-on-surface-variant hover:text-white"
              }`}
            >
              <ShoppingCart className="w-5 h-5" />
              <AnimatePresence>
                {itemCount > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-2 -right-2 w-4 h-4 bg-tertiary text-on-tertiary rounded-full text-[10px] flex items-center justify-center font-bold"
                  >
                    {itemCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
            
            {session ? (
              <button onClick={() => signOut()} title="Sign Out" className="text-on-surface-variant hover:text-white transition-colors flex items-center justify-center">
                <LogOut className="w-5 h-5" />
              </button>
            ) : (
              <Link href="/api/auth/signin" title="Sign In" className="text-on-surface-variant hover:text-white transition-colors flex items-center justify-center">
                <LogIn className="w-5 h-5" />
              </Link>
            )}
            
            <button className="!text-[11px] px-6 py-2 rounded-full text-white bg-surface-highest border border-surface-bright hover:bg-white hover:text-black transition-colors font-body font-bold uppercase tracking-wider">
              Submit Request
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-6 relative z-20 text-on-surface-variant">
             <Link href="/cart" className="relative transition-colors hover:text-white">
               <ShoppingCart className="w-5 h-5" />
               {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-4 h-4 bg-tertiary text-on-tertiary rounded-full text-[10px] flex items-center justify-center font-bold">
                    {itemCount}
                  </span>
                )}
             </Link>
             <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="hover:text-white transition-colors">
               {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
             </button>
          </div>
        </GlassPanel>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden absolute top-[80px] left-4 right-4 bg-surface-highest/95 backdrop-blur-xl border border-surface-bright p-8 rounded-3xl shadow-2xl flex flex-col gap-6"
            >
              <nav className="flex flex-col gap-6 font-body font-bold text-sm uppercase tracking-[0.2em]">
                {navLinks.map((item) => {
                  const isActive = pathname === item.path || (pathname?.startsWith(item.path) && item.path !== "/");
                  return (
                    <Link 
                      key={item.name} 
                      href={item.path} 
                      onClick={() => setMobileMenuOpen(false)}
                      className={`${isActive ? "text-primary" : "text-on-surface-variant"}`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
              
              <div className="w-full h-[1px] bg-surface-bright" />
              
              <div className="flex flex-col gap-4">
                {session ? (
                  <button 
                    onClick={() => { setMobileMenuOpen(false); signOut(); }}
                    className="text-on-surface-variant flex items-center gap-4 font-body text-xs uppercase tracking-widest font-bold"
                  >
                    <LogOut className="w-4 h-4" /> Sign Out
                  </button>
                ) : (
                  <Link 
                    href="/api/auth/signin"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-on-surface-variant flex items-center gap-4 font-body text-xs uppercase tracking-widest font-bold"
                  >
                    <LogIn className="w-4 h-4" /> Account Login
                  </Link>
                )}
                <button className="!text-[11px] px-6 py-4 rounded-full text-white bg-surface-high border border-surface-bright font-body font-bold uppercase tracking-wider w-full">
                  Submit Request
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
