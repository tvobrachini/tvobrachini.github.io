import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, personalInfo } from '../data/portfolio';
import { profileLinks } from './profileLinks';
import { scrollToTop } from '../lib/scroll';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    setMenuOpen(false);
    if (href === '#executive-summary') {
      e.preventDefault();
      scrollToTop();
    }
  };

  return (
    <nav className="fixed w-full z-40 top-0 bg-alpine-obsidian/90 backdrop-blur-md border-b border-alpine-stone py-4 md:py-5 print:hidden">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 flex justify-between items-center gap-6">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          className="text-xl font-serif font-bold text-alpine-crepe tracking-tight hover:text-alpine-moss transition-colors whitespace-nowrap"
        >
          {personalInfo.displayName}
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm text-alpine-cloud whitespace-nowrap">
          {navLinks.map(({ href, label }) => {
            const active = activeSection === href.slice(1);
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                aria-current={active ? 'location' : undefined}
                className={`transition-colors pb-1 border-b-2 hover:border-alpine-moss hover:text-alpine-crepe ${
                  active ? 'border-alpine-moss text-alpine-crepe' : 'border-transparent'
                }`}
              >
                {label}
              </a>
            );
          })}
          <span className="flex items-center gap-1 border-l border-alpine-stone pl-5">
            {profileLinks.map(({ href, label, Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
                className="p-1.5 hover:text-alpine-crepe transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </span>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden flex items-center gap-2 text-sm border border-alpine-stone px-3 py-1.5 text-alpine-cloud hover:bg-alpine-stone hover:text-alpine-crepe transition-colors"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="w-4 h-4 text-alpine-moss" /> : <Menu className="w-4 h-4" />}
          <span>{menuOpen ? 'Close' : 'Menu'}</span>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="lg:hidden border-t border-alpine-stone bg-alpine-basalt mt-4">
          <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col gap-4 text-sm">
            {navLinks.map(({ href, label }) => {
              const active = activeSection === href.slice(1);
              return (
                <a
                  key={href}
                  href={href}
                  aria-current={active ? 'location' : undefined}
                  className={`transition-colors py-2 border-b border-alpine-stone/50 ${
                    active ? 'text-alpine-moss' : 'text-alpine-cloud'
                  }`}
                  onClick={(e) => handleNavClick(e, href)}
                >
                  {label}
                </a>
              );
            })}
            <div className="flex gap-6 pt-2 text-alpine-cloud">
              {profileLinks.map(({ href, label, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 py-2 hover:text-alpine-crepe transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
