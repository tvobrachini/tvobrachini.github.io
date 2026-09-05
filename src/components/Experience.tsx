import React from 'react';
import { ExternalLink } from 'lucide-react';
import { experiences, foundationalRoles, formatDuration } from '../data/portfolio';

export const Experience: React.FC = () => {
  const formatPeriod = (startDate: Date, endDate?: Date) => {
    const startStr = startDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    const endStr = endDate
      ? endDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
      : 'Present';
    const duration = formatDuration(startDate, endDate);
    return `${startStr} - ${endStr} (${duration})`;
  };

  return (
    <section id="professional-experience" className="space-y-16">
      <div className="border-b border-alpine-stone pb-4 flex flex-col md:flex-row md:items-baseline md:justify-between flex-wrap gap-y-2">
        <h2 className="text-3xl font-serif font-bold text-alpine-crepe">Professional Experience</h2>
        <p className="font-mono text-xs text-alpine-cloud mt-2 md:mt-0 uppercase tracking-widest whitespace-nowrap">
          10+ Years of Excellence
        </p>
      </div>

      <div className="border-l border-alpine-stone pl-6 md:pl-10 space-y-16 relative">
        {experiences.map((exp) => (
          <div key={exp.company} className="relative group">
            {/* Timeline indicator dot */}
            <div
              className="absolute left-[-28px] md:left-[-44px] top-1.5 w-3 h-3 bg-alpine-obsidian border-2 transition-colors"
              style={{ borderColor: exp.dotColor }}
            />

            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-baseline mb-2 flex-wrap gap-y-2">
              <h3 className="text-2xl font-serif font-bold text-alpine-crepe flex items-center gap-2 flex-wrap">
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-alpine-moss transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{exp.company}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-60 transition-opacity" />
                </a>
                <span className="font-mono text-[10px] sm:text-xs text-alpine-cloud tracking-widest uppercase align-middle bg-alpine-stone/50 px-2 py-0.5 rounded-sm whitespace-nowrap">
                  {exp.badge}
                </span>
              </h3>
              <span
                className="font-mono text-xs font-bold tracking-widest uppercase mt-2 lg:mt-0 whitespace-nowrap"
                style={{ color: exp.dotColor }}
              >
                {formatPeriod(exp.startDate, exp.endDate)}
              </span>
            </div>

            <div className="font-sans font-bold tracking-wide text-alpine-slate mb-4">
              {exp.role}
            </div>

            <p className="text-alpine-cloud leading-relaxed max-w-3xl">
              {exp.description}
            </p>
          </div>
        ))}

        {/* Foundational Era */}
        <div className="relative pt-8 mt-12 border-t border-alpine-stone/50">
          <div className="absolute left-[-24px] md:[-40px] top-14 w-6 border-b border-alpine-stone/50" />
          <div className="pt-2">
            <h4 className="font-serif font-bold text-lg text-alpine-crepe mb-2">
              Foundational Engineering (2009 - 2015)
            </h4>
            <p className="font-mono text-xs text-alpine-cloud mb-4 tracking-widest uppercase">
              Software Development & Infrastructure
            </p>
            <div className="text-sm text-alpine-cloud/80 leading-relaxed max-w-3xl space-y-4">
              <p>
                Before shifting focus to IT Audit and GRC, my foundation was forged in hands-on technical environments across several roles:
              </p>
              <ul className="space-y-3">
                {foundationalRoles.map((role, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-alpine-moss font-mono mr-2">›</span>
                    <span>
                      <strong className="text-alpine-crepe font-medium">{role.title}</strong> at {role.company} ({role.period})
                      {role.details && `. ${role.details}`}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
