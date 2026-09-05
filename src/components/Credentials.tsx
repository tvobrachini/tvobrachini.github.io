import React from 'react';
import { ExternalLink, GraduationCap, Award, BookOpen } from 'lucide-react';
import { credentials, certificationsAndDegrees, publication } from '../data/portfolio';

export const Credentials: React.FC = () => {
  return (
    <section id="credentials" className="space-y-16">
      <div className="border-b border-alpine-stone pb-4 flex flex-col md:flex-row md:items-baseline md:justify-between flex-wrap gap-y-2">
        <h2 className="text-3xl font-serif font-bold text-alpine-crepe">Credentials & Education</h2>
        <p className="font-mono text-xs text-alpine-cloud mt-2 md:mt-0 uppercase tracking-widest whitespace-nowrap">
          Academic Foundations
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {credentials.map((cred) => (
          <div key={cred.institution} className="border border-alpine-stone bg-alpine-basalt p-8 relative">
            <div className="flex items-center gap-2 mb-2 text-alpine-moss">
              <GraduationCap className="w-5 h-5" />
              <h3 className="text-xl font-serif font-bold text-alpine-crepe">
                <a
                  href={cred.institutionUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-alpine-moss transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{cred.institution}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              </h3>
            </div>
            <div className="font-mono text-xs text-alpine-slate mb-4 uppercase tracking-widest">
              {cred.location}
            </div>
            <p className="text-sm text-alpine-cloud/80 leading-relaxed">{cred.description}</p>
          </div>
        ))}

        <div className="border border-alpine-stone bg-alpine-basalt p-8 relative space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-4 text-alpine-slate">
              <Award className="w-5 h-5" />
              <h3 className="text-xl font-serif font-bold text-alpine-crepe">
                Certifications & Degrees
              </h3>
            </div>
            <ul className="text-sm text-alpine-cloud/80 space-y-3">
              {certificationsAndDegrees.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-alpine-moss font-mono mr-2">›</span>
                  {item.institutionUrl ? (
                    <span>
                      <strong className="text-alpine-cloud mr-1">{item.title}</strong> at{' '}
                      <a
                        href={item.institutionUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-alpine-moss transition-colors border-b border-alpine-stone hover:border-alpine-moss pb-0.5"
                      >
                        {item.institution}
                      </a>
                    </span>
                  ) : (
                    <span>
                      <strong className="text-alpine-cloud mr-1">{item.title}</strong>{' '}
                      <span className="text-alpine-cloud/70">{item.issuer}</span>
                    </span>
                  )}
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
              <span className="font-mono text-xs text-alpine-slate uppercase tracking-widest mt-2 flex items-center gap-1.5">
                <span>{publication.source}</span>
                <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
