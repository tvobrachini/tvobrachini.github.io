import React from 'react';
import { skills } from '../data/portfolio';
import { SectionHeader } from './SectionHeader';

// The CV's skills list, word for word, so the site and the PDF never disagree.
export const Capabilities: React.FC = () => {
  return (
    <section id="capabilities" className="space-y-16">
      <SectionHeader title="Skills" />

      <dl className="divide-y divide-alpine-stone/60 border-y border-alpine-stone/60">
        {skills.map((group) => (
          <div key={group.title} className="grid md:grid-cols-[12rem_1fr] gap-x-8 gap-y-1 py-5 print:break-inside-avoid">
            <dt className="font-serif font-bold text-alpine-crepe">{group.title}</dt>
            <dd className="text-alpine-cloud leading-relaxed">{group.skills}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};
