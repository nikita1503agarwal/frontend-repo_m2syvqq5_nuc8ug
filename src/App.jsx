import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-rose-900">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <footer className="bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-rose-900/60 text-sm">
          © {new Date().getFullYear()} Bouquet — Made with love
        </div>
      </footer>
    </div>
  );
}

export default App;
