import { useState, useEffect } from 'react';
import { navLinks } from './data/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Capabilities } from './components/Capabilities';
import { Credentials } from './components/Credentials';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { scrollBehavior } from './lib/scroll';

export function App() {
  const [activeSection, setActiveSection] = useState('executive-summary');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle direct hash navigation (e.g. from GitHub profile links) and browser back/forward
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.slice(1);
      if (!hash) return;

      if (hash === 'executive-summary') {
        window.scrollTo({ top: 0, behavior: scrollBehavior() });
        return;
      }

      const tryScroll = (attempts = 0) => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: scrollBehavior() });
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

      {/* Navigation */}
      <Navbar activeSection={activeSection} />

      <main className="max-w-4xl mx-auto px-6 pt-36 md:pt-44 pb-24 space-y-36 print:pt-4 print:space-y-12">
        <Hero />
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
