import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black" id="hero">
      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/jdTN4VDCXmSY8utE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays that won't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
      <div className="pointer-events-none absolute -inset-x-20 -top-20 h-72 blur-3xl opacity-50 bg-[radial-gradient(closest-side,rgba(168,85,247,0.35),transparent)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            Fluid. Futuristic. <span className="bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">Immersive</span>
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl">
            A mesmerizing experience with liquid, chrome-like forms dancing in 3D. Built for modern brands that want to feel alive.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <motion.a
              href="#features"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full bg-white text-black px-6 py-3 text-sm font-medium shadow-lg shadow-white/10"
            >
              Explore Features
            </motion.a>
            <motion.a
              href="#showcase"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full border border-white/20 bg-white/10 text-white px-6 py-3 text-sm font-medium"
            >
              See it in action
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
