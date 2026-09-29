import React from 'react';

interface SectionHeaderProps {
  title: string;
  note?: string;
}

// The note wraps on narrow screens; a nowrap note once pushed the page wider than a phone.
export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, note }) => (
  <div className="border-b border-alpine-stone pb-4 flex flex-col md:flex-row md:items-baseline md:justify-between gap-x-6 gap-y-2">
    <h2 className="text-3xl font-serif font-bold text-alpine-crepe">{title}</h2>
    {note && <p className="text-sm text-alpine-cloud md:text-right">{note}</p>}
  </div>
);
