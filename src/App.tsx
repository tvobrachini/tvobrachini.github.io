import { useState, useEffect } from 'react';
import { navLinks } from './data/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Divider } from './components/Divider';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Capabilities } from './components/Capabilities';
import { Credentials } from './components/Credentials';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export function App() {
  const [activeSection, setActiveSection] = useState('executive-summary');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle direct hash navigation (e.g. from GitHub profile links) and browser back/forward
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.slice(1);
      if (!hash) return;

      const tryScroll = (attempts = 0) => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else if (attempts < 15) {
          setTimeout(() => tryScroll(attempts + 1), 80);
        }
      };

      tryScroll();
    };

    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);

  // Scroll spy
  useEffect(() => {
    const sectionIds = navLinks.map(({ href }) => href.slice(1));
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollTop(scrollY > 300);
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop - 140 <= scrollY) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-alpine-obsidian text-alpine-crepe font-sans selection:bg-alpine-moss selection:text-white scroll-smooth relative print:bg-white print:text-black">
      {/* Background ambient accents (hidden in print) */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-alpine-basalt/20 via-transparent to-transparent print:hidden" />

      {/* Atmospheric Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-[700px] md:h-[900px] pointer-events-none opacity-40 bg-cover bg-[center_bottom] print:hidden"
        style={{
          backgroundImage: "url('/alpine_bg.webp')",
          maskImage: 'linear-gradient(to bottom, black 10%, transparent 95%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 10%, transparent 95%)',
        }}
      />

      {/* Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Hero Content */}
      <main className="max-w-4xl mx-auto px-6 pt-36 md:pt-44 pb-0 space-y-36 print:pt-4 print:space-y-12">
        <Hero />
      </main>

      {/* Cinematic Terrain Divider */}
      <div className="my-24 md:my-32">
        <Divider />
      </div>

      {/* Body Content */}
      <main className="max-w-4xl mx-auto px-6 pt-6 pb-24 space-y-36 print:pt-0 print:space-y-12">
        <Experience />
        <Projects />
        <Capabilities />
        <Credentials />
      </main>

      {/* Scroll to Top floating action */}
      <ScrollToTop show={showScrollTop} />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
