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
            {project.sample && (
              <figure className="mt-6 border border-alpine-stone bg-alpine-basalt print:hidden">
                <dl className="p-4 md:p-5 font-mono text-xs md:text-sm leading-relaxed space-y-1">
                  {project.sample.rows.map(([label, value]) => (
                    <div key={label} className="grid grid-cols-[4.5rem_1fr] md:grid-cols-[6rem_1fr] gap-x-3">
                      <dt className="text-alpine-cloud/70">{label}</dt>
                      <dd className="text-alpine-crepe [overflow-wrap:anywhere]">{value}</dd>
                    </div>
                  ))}
                </dl>
                <figcaption className="border-t border-alpine-stone px-4 md:px-5 py-3 text-xs text-alpine-cloud">
                  {project.sample.caption}{' '}
                  <a
                    href={project.sample.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-alpine-stone underline-offset-4 hover:text-alpine-crepe hover:decoration-alpine-moss transition-colors"
                  >
                    See the files
                  </a>
                </figcaption>
              </figure>
            )}
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
