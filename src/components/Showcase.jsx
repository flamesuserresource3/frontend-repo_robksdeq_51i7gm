import { motion } from 'framer-motion';

const items = [
  {
    tag: 'Interactive',
    title: 'Real-time interactions',
    blurb: 'Orbit, pan, and explore the scene fluidly across devices.'
  },
  {
    tag: 'Futuristic',
    title: 'Chrome & iridescence',
    blurb: 'A modern sheen that reflects your brand’s forward momentum.'
  },
  {
    tag: 'Expressive',
    title: 'Organic liquid forms',
    blurb: 'Abstract blobs blend and morph in a cyclical motion.'
  }
];

export default function Showcase() {
  return (
    <section id="showcase" className="relative bg-black py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Built for impact</h2>
          <p className="mt-4 text-white/70">Visually rich, thoughtfully crafted sections to highlight your story.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6"
            >
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(300px_200px_at_30%_20%,rgba(168,85,247,0.25),transparent),radial-gradient(400px_300px_at_80%_80%,rgba(34,211,238,0.2),transparent)]" />
              <div className="relative">
                <span className="text-xs uppercase tracking-widest text-white/60">{card.tag}</span>
                <h3 className="mt-3 text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-white/70 text-sm">{card.blurb}</p>
                <motion.div
                  className="mt-6 h-36 rounded-xl border border-white/10 bg-black/40"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                >
                  <div className="h-full w-full rounded-xl bg-[conic-gradient(at_50%_50%,rgba(217,70,239,0.15),rgba(56,189,248,0.15),rgba(139,92,246,0.15),rgba(217,70,239,0.15))]" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <div id="contact" className="mt-16 flex flex-col items-center text-center">
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm text-white"
          >
            Back to top
          </motion.a>
        </div>
      </div>
    </section>
  );
}
