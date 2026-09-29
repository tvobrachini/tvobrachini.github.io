import React from 'react';
import { experiences, foundationalRoles, formatDuration } from '../data/portfolio';
import { SectionHeader } from './SectionHeader';
import { ExternalAnchor } from './ExternalAnchor';

const formatMonth = (date: Date) =>
  date.toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });

const formatPeriod = (startDate: Date, endDate?: Date) =>
  `${formatMonth(startDate)} - ${endDate ? formatMonth(endDate) : 'Present'} (${formatDuration(startDate, endDate)})`;

export const Experience: React.FC = () => {
  return (
    <section id="professional-experience" className="space-y-16">
      <SectionHeader title="Professional Experience" note="Since 2015" />

      <div className="border-l border-alpine-stone pl-6 md:pl-10 space-y-16 relative">
        {experiences.map((exp) => {
          // Roles are newest first, so the company span runs from the last role's start to the first role's end.
          const companyStart = exp.roles[exp.roles.length - 1].startDate;
          const companyEnd = exp.roles[0].endDate;
          const multiRole = exp.roles.length > 1;

          return (
            <div key={exp.company} className="relative print:break-inside-avoid">
              {/* Timeline indicator dot */}
              <div
                className="absolute left-[-30px] md:left-[-46px] top-2.5 w-3 h-3 bg-alpine-obsidian border-2"
                style={{ borderColor: exp.dotColor }}
              />

              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-baseline mb-2 gap-x-4 gap-y-2">
                <h3 className="text-2xl font-serif font-bold text-alpine-crepe flex items-center gap-x-3 gap-y-2 flex-wrap">
                  <ExternalAnchor href={exp.companyUrl} iconClassName="w-3.5 h-3.5">
                    <span>{exp.company}</span>
                  </ExternalAnchor>
                  <span className="font-sans font-normal text-xs text-alpine-cloud bg-alpine-stone/50 px-2 py-0.5 rounded-sm">
                    {exp.badge}
                  </span>
                </h3>
                <span
                  className="font-mono text-xs font-bold tracking-widest uppercase sm:whitespace-nowrap"
                  style={{ color: exp.dotColor }}
                >
                  {formatPeriod(companyStart, companyEnd)}
                </span>
              </div>

              <ol
                className={
                  multiRole
                    ? `mt-6 border-l border-alpine-stone/60 pl-5 ${exp.description ? 'space-y-2' : 'space-y-8'}`
                    : undefined
                }
              >
                {exp.roles.map((role) => (
                  <li key={role.title}>
                    <div
                      className={`flex flex-col lg:flex-row lg:justify-between lg:items-baseline gap-x-4 gap-y-1 ${
                        role.description ? 'mb-3' : ''
                      }`}
                    >
                      <div className="font-sans font-bold tracking-wide text-alpine-slate">{role.title}</div>
                      {multiRole && (
                        <span className="font-mono text-xs tracking-widest uppercase sm:whitespace-nowrap text-alpine-cloud">
                          {formatPeriod(role.startDate, role.endDate)}
                        </span>
                      )}
                    </div>
                    {role.description && (
                      <p className="text-alpine-cloud leading-relaxed max-w-3xl">{role.description}</p>
                    )}
                  </li>
                ))}
              </ol>
              {exp.description && (
                <p className="mt-6 text-alpine-cloud leading-relaxed max-w-3xl">{exp.description}</p>
              )}
            </div>
          );
        })}

        {/* Foundational Era */}
        <div className="relative pt-8 mt-12 border-t border-alpine-stone/50">
          <div className="absolute left-[-24px] md:left-[-40px] top-14 w-6 border-b border-alpine-stone/50" />
          <div className="pt-2">
            <h4 className="font-serif font-bold text-lg text-alpine-crepe mb-4">
              Foundational Engineering (2011–2015)
            </h4>
            <div className="text-sm text-alpine-cloud/80 leading-relaxed max-w-3xl space-y-4">
              <p>
                Before moving into IT audit, I worked in software development:
              </p>
              <ul className="space-y-3">
                {foundationalRoles.map((role) => (
                  <li key={`${role.company}-${role.title}`} className="flex items-start">
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
