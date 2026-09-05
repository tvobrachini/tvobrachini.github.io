import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, personalInfo } from '../data/portfolio';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-40 top-0 bg-alpine-obsidian/90 backdrop-blur-md border-b border-alpine-stone py-4 md:py-5 transition-all print:hidden">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 flex justify-between items-center">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            if (window.location.hash) {
              window.history.pushState(null, '', window.location.pathname);
            }
          }}
          className="text-xl font-serif font-bold text-alpine-crepe tracking-tight hover:text-alpine-moss transition-colors whitespace-nowrap cursor-pointer"
        >
          {personalInfo.displayName}
        </a>

        {/* Desktop nav */}
        <div className="hidden xl:flex gap-4 2xl:gap-8 text-[10px] 2xl:text-xs font-mono uppercase tracking-widest text-alpine-cloud whitespace-nowrap">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => {
                if (href === '#executive-summary') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  window.history.pushState(null, '', window.location.pathname);
                }
              }}
              className={`transition-all pb-1 border-b-2 hover:border-alpine-moss hover:text-alpine-crepe ${
                activeSection === href.slice(1)
                  ? 'border-alpine-moss text-alpine-crepe font-bold'
                  : 'border-transparent'
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile menu toggle button with Lucide Icons */}
        <button
          className="xl:hidden flex items-center gap-2 font-mono text-xs border border-alpine-stone px-3 py-1.5 uppercase text-alpine-cloud hover:bg-alpine-stone hover:text-alpine-crepe transition-colors"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="w-4 h-4 text-alpine-moss" /> : <Menu className="w-4 h-4" />}
          <span>{menuOpen ? 'CLOSE' : 'MENU'}</span>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="xl:hidden border-t border-alpine-stone bg-alpine-basalt mt-4 animate-in fade-in duration-200">
          <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col gap-4 font-mono text-xs uppercase tracking-widest">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`transition-colors py-2 border-b border-alpine-stone/50 ${
                  activeSection === href.slice(1) ? 'text-alpine-moss font-bold' : 'text-alpine-cloud'
                }`}
                onClick={(e) => {
                  setMenuOpen(false);
                  if (href === '#executive-summary') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    window.history.pushState(null, '', window.location.pathname);
                  }
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
