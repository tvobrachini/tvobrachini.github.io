import React from 'react';
import { ExternalLink, GraduationCap, Award, BookOpen } from 'lucide-react';
import { education, training, publication } from '../data/portfolio';
import { SectionHeader } from './SectionHeader';
import { Card } from './Card';
import { ExternalAnchor } from './ExternalAnchor';

export const Credentials: React.FC = () => {
  return (
    <section id="credentials" className="space-y-16">
      <SectionHeader title="Education & Credentials" />

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <div className="flex items-center gap-2 mb-6 text-alpine-moss">
            <GraduationCap className="w-5 h-5" />
            <h3 className="text-xl font-serif font-bold text-alpine-crepe">Education</h3>
          </div>
          <ul className="space-y-6">
            {education.map((item, idx) => (
              <li
                key={item.institution}
                className={idx > 0 ? 'border-t border-alpine-stone/50 pt-6' : undefined}
              >
                <p className={`font-serif font-bold text-alpine-crepe ${idx === 0 ? 'text-lg' : ''}`}>
                  {item.title}
                </p>
                <p className="text-sm text-alpine-cloud mt-1">
                  <ExternalAnchor href={item.institutionUrl}>
                    <span>{item.institution}</span>
                  </ExternalAnchor>
                  <span className="font-mono text-xs text-alpine-slate ml-2">{item.period}</span>
                </p>
                <p className="text-sm text-alpine-cloud/80 leading-relaxed mt-2">{item.description}</p>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-4 text-alpine-slate">
              <Award className="w-5 h-5" />
              <h3 className="text-xl font-serif font-bold text-alpine-crepe">Training</h3>
            </div>
            <ul className="text-sm text-alpine-cloud/80 space-y-3">
              {training.map((item) => (
                <li key={item.title}>
                  <strong className="text-alpine-cloud font-medium">{item.title}</strong>
                  <span className="block text-alpine-cloud/70">{item.issuer}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-alpine-stone/50 pt-8">
            <div className="flex items-center gap-2 mb-4 text-alpine-leather">
              <BookOpen className="w-5 h-5" />
              <h3 className="text-xl font-serif font-bold text-alpine-crepe">Publications</h3>
            </div>
            <a
              href={publication.url}
              target="_blank"
              rel="noreferrer"
              className="group block"
            >
              <p className="text-sm text-alpine-cloud/80 font-medium group-hover:text-alpine-moss transition-colors leading-relaxed">
                "{publication.title}"
              </p>
              <span className="text-xs text-alpine-slate mt-2 flex items-center gap-1.5">
                <span>{publication.source}</span>
                <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              </span>
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};
