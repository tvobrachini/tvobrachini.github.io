import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-alpine-stone py-12 text-center md:text-left bg-alpine-basalt mt-20 print:border-t-2 print:border-black print:bg-transparent print:py-6">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="font-mono text-xs text-alpine-cloud uppercase tracking-widest">
            © {new Date().getFullYear()} {personalInfo.displayName}
          </p>
          <div className="font-serif italic text-sm text-alpine-cloud/70 mt-1">
            Precision in a complex landscape.
          </div>
        </div>

        <div className="flex items-center gap-4 text-alpine-cloud print:hidden">
          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="p-2 border border-alpine-stone hover:border-alpine-moss hover:text-alpine-crepe transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="p-2 border border-alpine-stone hover:border-alpine-moss hover:text-alpine-crepe transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2 border border-alpine-stone hover:border-alpine-moss hover:text-alpine-crepe transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};
