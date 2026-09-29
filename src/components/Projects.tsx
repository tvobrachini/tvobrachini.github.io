import React from 'react';
import { FolderGit2 } from 'lucide-react';
import { strategicProjects } from '../data/portfolio';
import { SectionHeader } from './SectionHeader';
import { Card } from './Card';
import { ExternalAnchor } from './ExternalAnchor';

export const Projects: React.FC = () => {
  return (
    <section id="strategic-projects" className="space-y-16">
      <SectionHeader
        title="Open-Source Projects (Personal)"
        note="Built on my own time, not affiliated with any employer"
      />

      <div className="grid gap-8">
        {strategicProjects.map((project) => (
          <Card key={project.title} className="md:p-10">
            <div className="mb-8 border-b border-alpine-stone pb-6 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3 flex-wrap">
              <h3 className="text-2xl font-serif font-bold text-alpine-crepe">
                <ExternalAnchor href={project.repoUrl} gap="gap-3" iconClassName="w-4 h-4">
                  <FolderGit2 className="w-5 h-5 text-alpine-moss" />
                  <span>{project.title}</span>
                </ExternalAnchor>
              </h3>
              <a
                href={project.caseStudyUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-alpine-cloud underline decoration-alpine-stone underline-offset-4 hover:text-alpine-crepe hover:decoration-alpine-moss transition-colors"
              >
                {project.badge}
              </a>
              </div>
            </div>

            <div className="space-y-6 text-alpine-cloud text-sm md:text-base">
              {([
                ['Objective', project.objective],
                ['Execution', project.execution],
                ['Outcome', project.outcome],
              ] as const).map(([label, text]) => (
                <p key={label} className="leading-relaxed">
                  <strong className="font-serif font-bold text-alpine-crepe block mb-1">{label}</strong>
                  {text}
                </p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3 font-mono text-xs font-medium">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-alpine-stone/60 text-alpine-cloud px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
