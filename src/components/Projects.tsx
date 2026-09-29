import React from 'react';
import { strategicProjects } from '../data/portfolio';
import { SectionHeader } from './SectionHeader';
import { ExternalAnchor } from './ExternalAnchor';

export const Projects: React.FC = () => {
  return (
    <section id="strategic-projects" className="space-y-16">
      <SectionHeader
        title="Open-Source Projects (Personal)"
        note="Built on my own time, not affiliated with any employer"
      />

      <div className="space-y-12">
        {strategicProjects.map((project) => (
          <article key={project.title} className="border-t border-alpine-stone pt-8 print:break-inside-avoid">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <h3 className="text-2xl font-serif font-bold text-alpine-crepe">
                <ExternalAnchor href={project.repoUrl} iconClassName="w-3.5 h-3.5">
                  <span>{project.title}</span>
                </ExternalAnchor>
              </h3>
              <span className="text-sm text-alpine-cloud">{project.stack}</span>
            </div>
            <p className="mt-4 text-alpine-cloud leading-relaxed max-w-3xl">{project.summary}</p>
            <a
              href={project.caseStudyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 text-sm text-alpine-cloud underline decoration-alpine-stone underline-offset-4 hover:text-alpine-crepe hover:decoration-alpine-moss transition-colors print:hidden"
            >
              Read the case study
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};
