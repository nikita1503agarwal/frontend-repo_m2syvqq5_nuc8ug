import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-20 w-full">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-rose-500/15 ring-1 ring-rose-400/30 grid place-items-center">
            <span className="text-rose-400 font-semibold">✿</span>
          </div>
          <div className="text-white font-semibold tracking-tight text-lg">Bouquet</div>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-white/80 hover:text-white transition">Features</a>
          <a href="#how" className="text-white/80 hover:text-white transition">How it works</a>
          <a href="#cta" className="text-white/80 hover:text-white transition">Get the app</a>
        </div>
        <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 text-white">
          <Menu size={18} />
        </button>
      </nav>
    </header>
  );
}
