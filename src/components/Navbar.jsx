import { motion } from 'framer-motion';
import { Rocket, Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#"
          className="flex items-center gap-2 text-white"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 via-cyan-400 to-violet-500 p-[2px]">
            <div className="h-full w-full rounded-[10px] bg-black grid place-items-center">
              <Rocket className="h-5 w-5 text-white" />
            </div>
          </div>
          <span className="font-semibold tracking-tight">Iridescent</span>
        </motion.a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#showcase" className="hover:text-white transition">Showcase</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 text-sm border border-white/10"
        >
          <Sparkles className="h-4 w-4" />
          Launch Demo
        </motion.button>
      </div>
    </header>
  );
}
