export function Footer() {
  return (
    <footer className="bg-surface-low border-t border-surface-high mt-auto w-full pt-16 pb-8">
      <div className="max-w-[1600px] mx-auto px-8 flex flex-col items-center gap-8">
        <h2 className="font-display text-2xl font-bold text-white flex items-center gap-2">
          <span>TriFab</span>
          <span className="text-secondary font-light">3D</span>
        </h2>
        <div className="flex gap-8 font-body text-[11px] uppercase tracking-[0.2em] text-on-surface-variant">
          <a href="/products" className="hover:text-white transition-colors">Archive</a>
          <a href="/custom" className="hover:text-white transition-colors">Home System</a>
          <a href="#" className="hover:text-white transition-colors">Private Protocol</a>
          <a href="#" className="hover:text-white transition-colors">Terms Of Service</a>
        </div>
        <p className="font-body text-[10px] text-on-surface-variant/50 uppercase tracking-widest mt-8">
          &copy; 2026 TRIFAB 3D. ALL RIGHTS RESERVED IN REALTIME.
        </p>
      </div>
    </footer>
  );
}
