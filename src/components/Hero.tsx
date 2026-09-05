import React, { useState } from 'react';
import { Linkedin, Github, Mail, Copy, Check, Printer } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="executive-summary" className="relative">
      <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-start gap-12 lg:gap-20">
        {/* Text Content */}
        <div className="space-y-10 flex-1">
          <div className="font-mono text-xs tracking-widest uppercase text-alpine-moss border-b border-alpine-stone pb-3 mb-8 inline-block">
            {personalInfo.tagline}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-alpine-crepe leading-[1.1] tracking-tight">
            Navigating the expansive landscape of{' '}
            <span className="italic text-alpine-slate">IT risk.</span>
          </h1>

          <div className="border-l-2 border-alpine-moss pl-6 sm:pl-8 mt-10">
            <p className="text-xl text-alpine-crepe/90 max-w-2xl leading-relaxed">
              {personalInfo.subheadlineLead}
            </p>
            <p className="text-lg text-alpine-cloud max-w-2xl leading-relaxed mt-4">
              {personalInfo.subheadlineBody}
            </p>
          </div>

          {/* Action Links & Buttons */}
          <div className="flex flex-wrap gap-4 pt-10 font-mono text-xs uppercase tracking-widest items-center print:hidden">
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-alpine-crepe text-alpine-obsidian px-6 py-3 border border-alpine-crepe hover:bg-transparent hover:text-alpine-crepe transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-transparent text-alpine-cloud px-6 py-3 border border-alpine-stone hover:border-alpine-crepe hover:text-alpine-crepe transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            {/* Email with copy button */}
            <div className="relative inline-flex items-stretch border border-alpine-stone hover:border-alpine-crepe transition-colors">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-5 py-3 text-alpine-cloud hover:text-alpine-crepe transition-colors"
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
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
              {copied && (
                <span className="absolute -top-8 right-0 bg-alpine-stone border border-alpine-moss text-[10px] text-alpine-crepe px-2 py-0.5 rounded font-mono shadow-md animate-in fade-in">
                  Copied!
                </span>
              )}
            </div>

            {/* Print / Save CV */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 bg-transparent text-alpine-cloud px-5 py-3 border border-dashed border-alpine-stone hover:border-alpine-moss hover:text-alpine-crepe transition-colors"
              title="Print or save PDF resume"
            >
              <Printer className="w-4 h-4 text-alpine-moss" />
              <span>Print / Save CV</span>
            </button>
          </div>
        </div>

        {/* Profile Image Avatar */}
        <div className="w-32 h-32 md:w-40 md:h-40 xl:w-56 xl:h-56 shrink-0 relative mt-4 md:mt-2 group self-start">
          <div className="absolute inset-0 bg-alpine-moss translate-x-3 translate-y-3 opacity-30 border border-alpine-stone group-hover:translate-x-4 group-hover:translate-y-4 group-hover:opacity-50 transition-all duration-500" />
          <img
            src={personalInfo.profileImage}
            alt={personalInfo.name}
            width={224}
            height={224}
            loading="eager"
            decoding="async"
            className="relative w-full h-full object-cover border border-alpine-stone brightness-90 saturate-[0.85] opacity-90 hover:brightness-100 hover:saturate-100 hover:opacity-100 transition-all duration-700 isolate"
          />
        </div>
      </div>
    </section>
  );
};
