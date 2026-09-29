import React from 'react';
import { capabilities } from '../data/portfolio';
import { SectionHeader } from './SectionHeader';
import { Card } from './Card';

export const Capabilities: React.FC = () => {
  return (
    <section id="capabilities" className="space-y-16">
      <SectionHeader title="Capabilities" />

      <div className="grid md:grid-cols-2 gap-6">
        {capabilities.map((cat) => (
          <Card key={cat.title}>
            <h3 className="text-xl font-serif font-bold mb-3 text-alpine-crepe">{cat.title}</h3>
            <p className="text-sm text-alpine-cloud/80 mb-6">{cat.description}</p>
            <ul className="text-sm text-alpine-cloud space-y-2 border-t border-alpine-stone/50 pt-5">
              {cat.skills.map((skill) => (
                <li key={skill.name} className="flex justify-between items-baseline gap-2">
                  <span>{skill.name}</span>
                  {skill.level && <span className="text-alpine-moss">{skill.level}</span>}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
};
