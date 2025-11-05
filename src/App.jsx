import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white selection:bg-fuchsia-500 selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <Footer />
    </div>
  );
}

export default App;
