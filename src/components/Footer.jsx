export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} Iridescent. All rights reserved.</p>
        <div className="text-white/60 text-sm flex items-center gap-4">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#showcase" className="hover:text-white">Showcase</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
