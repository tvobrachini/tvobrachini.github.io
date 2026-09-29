import React from 'react';
import { Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { profileLinks } from './profileLinks';

const iconLinkClass = 'p-2 border border-alpine-stone hover:border-alpine-moss hover:text-alpine-crepe transition-colors';

export const Footer: React.FC = () => {
  return (
    // pb-24 keeps the footer links above the fixed "Top" button (bottom-8, about 46px tall),
    // which would otherwise cover them on narrow phones and on tablet widths.
    <footer className="border-t border-alpine-stone pt-12 pb-24 text-center md:text-left bg-alpine-basalt mt-20 print:border-t-2 print:border-black print:bg-transparent print:py-6">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="text-sm text-alpine-cloud">
            © {new Date().getFullYear()} {personalInfo.displayName}
          </p>
        </div>

        <div className="flex items-center gap-4 text-alpine-cloud print:hidden">
          {profileLinks.map(({ href, label, Icon }) => (
            <a key={href} href={href} target="_blank" rel="noreferrer" className={iconLinkClass} aria-label={label} title={label}>
              <Icon className="w-4 h-4" />
            </a>
          ))}
          <a href={`mailto:${personalInfo.email}`} className={iconLinkClass} aria-label="Email" title="Email">
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};
