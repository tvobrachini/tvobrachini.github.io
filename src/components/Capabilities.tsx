import React from 'react';
import { capabilities } from '../data/portfolio';

export const Capabilities: React.FC = () => {
  return (
    <section id="capabilities" className="space-y-16">
      <div className="border-b border-alpine-stone pb-4 flex flex-col md:flex-row md:items-baseline md:justify-between flex-wrap gap-y-2">
        <h2 className="text-3xl font-serif font-bold text-alpine-crepe">Capabilities</h2>
        <p className="font-mono text-xs text-alpine-cloud mt-2 md:mt-0 uppercase tracking-widest whitespace-nowrap">
          Frameworks & Technologies
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {capabilities.map((cat) => (
          <div
            key={cat.number}
            className={`border border-alpine-stone bg-alpine-basalt p-8 transition-colors ${cat.hoverBorderClass}`}
          >
            <div className="font-mono text-xs tracking-widest text-alpine-cloud mb-6 uppercase border-b border-alpine-stone/50 pb-2">
              {cat.number}. {cat.category}
            </div>
            <h3 className="text-xl font-serif font-bold mb-4 text-alpine-crepe">{cat.title}</h3>
            <p className="text-sm text-alpine-cloud/80 mb-8 min-h-[3.5rem]">{cat.description}</p>
            <ul className="font-mono text-xs text-alpine-cloud space-y-3 uppercase tracking-widest">
              {cat.skills.map((skill) => (
                <li key={skill.name} className="flex justify-between items-baseline gap-2">
                  <span>• {skill.name}</span>
                  {skill.level && <span className="text-[#5A8F70]">{skill.level}</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
