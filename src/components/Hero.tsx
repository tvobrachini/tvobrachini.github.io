import React, { useState } from 'react';
import { Mail, Copy, Check, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${personalInfo.email}`;
    }
  };

  return (
    <section id="executive-summary" className="relative">
      <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-start gap-12 lg:gap-20">
        {/* Text Content */}
        <div className="space-y-8 flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm tracking-wide text-alpine-moss">
              {personalInfo.tagline}
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-alpine-crepe leading-[1.1] tracking-tight">
            Tiago Brachini
          </h1>
          <p className="text-2xl md:text-3xl font-serif italic text-alpine-slate leading-snug max-w-3xl">
            {personalInfo.headline}
          </p>

          <div className="border-l-2 border-alpine-moss pl-6 sm:pl-8 mt-8">
            <p className="text-xl text-alpine-crepe/90 max-w-2xl leading-relaxed">
              {personalInfo.subheadlineLead}
            </p>
            <p className="text-lg text-alpine-cloud max-w-2xl leading-relaxed mt-4">
              {personalInfo.subheadlineBody}
            </p>
          </div>

          <p className="hidden print:block font-mono text-xs text-black">
            {[
              personalInfo.displayName,
              personalInfo.email,
              ...[personalInfo.linkedinUrl, personalInfo.githubUrl, personalInfo.siteUrl].map((url) =>
                url.replace(/^https:\/\/(www\.)?/, ''),
              ),
            ].join(' | ')}
          </p>

          {/* Action Links & Buttons */}
          <div className="flex flex-wrap gap-3 pt-6 text-sm items-center print:hidden">
            {/* Primary CV Downloads */}
            <a
              href={personalInfo.cvEnUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-alpine-crepe text-alpine-obsidian px-5 py-3 border border-alpine-crepe font-semibold hover:bg-transparent hover:text-alpine-crepe transition-colors shadow-sm"
              title="Download English CV (PDF)"
            >
              <FileText className="w-4 h-4" />
              <span>CV in English (PDF)</span>
            </a>

            <a
              href={personalInfo.cvPtUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-transparent text-alpine-crepe px-5 py-3 border border-alpine-moss hover:bg-alpine-moss/20 transition-colors"
              title="Baixar Currículo em Português (PDF)"
              lang="pt-BR"
              hrefLang="pt-BR"
            >
              <FileText className="w-4 h-4 text-alpine-moss" />
              <span>Currículo em português (PDF)</span>
            </a>

            {/* Email with copy button */}
            <div className="relative inline-flex items-stretch border border-alpine-stone hover:border-alpine-crepe transition-colors">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-4 py-3 text-alpine-cloud hover:text-alpine-crepe transition-colors"
                title="Send email"
              >
                <Mail className="w-4 h-4 text-alpine-slate" />
                <span>Email</span>
              </a>
              <button
                onClick={handleCopyEmail}
                className="px-3 border-l border-alpine-stone/80 text-alpine-cloud hover:text-alpine-crepe hover:bg-alpine-stone/30 transition-colors flex items-center justify-center"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-alpine-moss" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
              <span role="status" aria-live="polite">
              {copied && (
                <span className="absolute -top-8 right-0 bg-alpine-stone border border-alpine-moss text-xs text-alpine-crepe px-2 py-0.5 rounded shadow-md whitespace-nowrap">
                  Email copied
                </span>
              )}
              </span>
            </div>
          </div>
        </div>

        {/* Profile Image Avatar */}
        <div className="w-32 h-32 md:w-40 md:h-40 xl:w-56 xl:h-56 shrink-0 relative mt-4 md:mt-2 self-start">
          <div className="absolute inset-0 bg-alpine-moss translate-x-3 translate-y-3 opacity-30 border border-alpine-stone" />
          <img
            src={personalInfo.profileImage}
            alt={personalInfo.name}
            width={224}
            height={224}
            loading="eager"
            decoding="async"
            className="relative w-full h-full object-cover border border-alpine-stone brightness-90 saturate-[0.85] opacity-90 isolate"
          />
        </div>
      </div>
    </section>
  );
};
