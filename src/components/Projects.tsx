import React from 'react';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { strategicProjects } from '../data/portfolio';

export const Projects: React.FC = () => {
  return (
    <section id="strategic-projects" className="space-y-16">
      <div className="border-b border-alpine-stone pb-4 flex flex-col md:flex-row md:items-baseline md:justify-between flex-wrap gap-y-2">
        <h2 className="text-3xl font-serif font-bold text-alpine-crepe">Strategic Projects</h2>
        <p className="font-mono text-xs text-alpine-cloud mt-2 md:mt-0 uppercase tracking-widest whitespace-nowrap">
          Automation & Architecture
        </p>
      </div>

      <div className="grid gap-8">
        {strategicProjects.map((project) => (
          <div
            key={project.title}
            className="border border-alpine-stone bg-alpine-basalt p-8 md:p-10 relative group hover:border-alpine-moss transition-all"
          >
            <div className="mb-8 border-b border-alpine-stone pb-6 flex items-center justify-between flex-wrap gap-4">
              <h3 className="text-2xl font-serif font-bold text-alpine-crepe">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-alpine-moss transition-colors inline-flex items-center gap-3"
                >
                  <FolderGit2 className="w-5 h-5 text-alpine-moss" />
                  <span>{project.title}</span>
                  <span className="font-mono text-xs text-alpine-cloud bg-alpine-stone px-2 py-1">
                    {project.badge}
                  </span>
                  <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              </h3>
            </div>

            <div className="space-y-6 text-alpine-cloud text-sm md:text-base">
              <p className="leading-relaxed">
                <strong className="font-mono font-bold uppercase text-alpine-moss block mb-1">
                  Objective
                </strong>
                {project.objective}
              </p>
              <p className="leading-relaxed">
                <strong className="font-mono font-bold uppercase text-alpine-slate block mb-1">
                  Execution
                </strong>
                {project.execution}
              </p>
              <p className="leading-relaxed">
                <strong className="font-mono font-bold uppercase text-alpine-leather block mb-1">
                  Outcome
                </strong>
                {project.outcome}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 font-mono text-xs font-medium">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-alpine-stone/60 text-alpine-cloud px-3 py-1 uppercase hover:border-alpine-crepe/50 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
