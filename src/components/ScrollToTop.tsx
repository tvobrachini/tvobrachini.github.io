import React from 'react';
import { ArrowUp } from 'lucide-react';

interface ScrollToTopProps {
  show: boolean;
}

export const ScrollToTop: React.FC<ScrollToTopProps> = ({ show }) => {
  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className="fixed bottom-8 right-8 z-50 px-3.5 py-3 bg-alpine-obsidian/85 backdrop-blur-sm border border-alpine-stone text-alpine-cloud hover:border-alpine-moss hover:text-alpine-crepe transition-all hover:-translate-y-1 shadow-lg shadow-black/50 flex items-center gap-2 font-mono text-xs uppercase tracking-widest print:hidden"
    >
      <ArrowUp className="w-4 h-4 text-alpine-moss" />
      <span>TOP</span>
    </button>
  );
};
