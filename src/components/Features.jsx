import { motion } from 'framer-motion';
import { Layers, Zap, Palette, Shield } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: 'Layered Depth',
    desc: 'Immersive 3D scene with parallax depth that feels tangible and responsive.'
  },
  {
    icon: Zap,
    title: 'Fluid Motion',
    desc: 'Silky-smooth animations powered by a modern, GPU-accelerated pipeline.'
  },
  {
    icon: Palette,
    title: 'Iridescent Aesthetic',
    desc: 'Chromatic gradients and reflective surfaces for a futuristic brand vibe.'
  },
  {
    icon: Shield,
    title: 'Performance First',
    desc: 'Optimized assets and lazy-loading to keep interactions effortless.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative bg-black py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_400px_at_80%_20%,rgba(56,189,248,0.18),transparent),radial-gradient(500px_300px_at_15%_80%,rgba(217,70,239,0.18),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Designed to mesmerize</h2>
          <p className="mt-4 text-white/70">A curated set of interactions and visuals that elevate your narrative.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/20 blur-2xl" />
              <div className="relative">
                <div className="h-11 w-11 rounded-xl bg-white/10 border border-white/10 grid place-items-center">
                  <f.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-4 font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-white/70">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
