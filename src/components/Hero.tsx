import React from 'react';
import { MOLLY_PROFILE, KEY_METRICS } from '../data/portfolioData';
import { ArrowDownIcon, ArrowUpRightIcon } from './Icons';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="top" aria-labelledby="hero-heading" className="pt-16 pb-20 md:pt-24 md:pb-28 border-b border-[var(--border-color)] bg-[var(--bg-canvas)]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Split Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Meta-tag Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono tracking-wider uppercase text-[var(--ink-muted)]">
              <span className="font-medium text-[var(--ink-primary)]">Document 01</span>
              <span aria-hidden="true" className="text-[#D0D0CE]">/</span>
              <span>National Laboratory Research</span>
              <span aria-hidden="true" className="text-[#D0D0CE]">/</span>
              <span>Golden, CO</span>
            </div>

            {/* Editorial Serif Display Headline */}
            <h1 id="hero-heading" className="font-sans text-3xl sm:text-4xl lg:text-[2.75rem] font-medium tracking-[-0.03em] text-[var(--ink-primary)] leading-[1.15]" style={{ textWrap: 'balance' }}>
              Building the operational frameworks that carry high-stakes national research from proposal to publication.
            </h1>

            {/* Body Prose in Public Sans with line-height 1.6 */}
            <p className="text-base text-[var(--ink-secondary)] leading-[1.6] max-w-xl">
              Research belongs to the scientists doing it. My job is to protect their time, their funding, and their momentum. Over 15 years directing research portfolios and federal programs, I have managed more than $250M in federal awards, unified multi-laboratory energy programs, and eliminated administrative drag across multidisciplinary teams.
            </p>

            {/* Spot Pastel Tags & Status Badges (Section 4 & 5 Protocol) */}
            <div className="pt-1 flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-[0.05em]">
              <span className="bg-[#EDF3EC] text-[#346538] px-2.5 py-1 rounded-full border border-[#346538]/10">
                PMP Certified · Active
              </span>
              <span className="bg-[#E1F3FE] text-[#1F6C9F] px-2.5 py-1 rounded-full border border-[#1F6C9F]/10">
                DOE Q Clearance · Active
              </span>
              <span className="bg-[#FBF3DB] text-[#956400] px-2.5 py-1 rounded-full border border-[#956400]/10">
                President&apos;s Award
              </span>
            </div>

            {/* Actions (Section 5: Solid var(--ink-primary), radius 4px to 6px, active scale 0.98) */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 min-h-[42px] px-4 py-2 text-xs font-mono uppercase tracking-wider text-[var(--bg-surface)] bg-[var(--ink-primary)] hover:bg-[#333333] active:scale-[0.98] rounded-[4px] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink-primary)]"
              >
                <span>View Portfolios</span>
                <ArrowDownIcon className="w-3.5 h-3.5" />
              </a>

              <a
                href={MOLLY_PROFILE.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Molly Hames on LinkedIn (opens in new tab)"
                className="inline-flex items-center gap-1.5 min-h-[42px] px-4 py-2 text-xs font-mono uppercase tracking-wider text-[var(--ink-primary)] bg-[var(--bg-surface)] hover:bg-[var(--bg-subtle)] active:scale-[0.98] border border-[var(--border-color)] rounded-[4px] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink-primary)]"
              >
                <span>LinkedIn</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5 text-[var(--ink-muted)]" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 min-h-[42px] px-3.5 py-2 text-xs font-mono uppercase tracking-wider text-[var(--ink-muted)] hover:text-[var(--ink-primary)] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink-primary)]"
              >
                <span>Curriculum Vitae</span>
                <kbd className="hidden sm:inline-block">PDF</kbd>
              </button>
            </div>
          </div>

          {/* Right Column: Faux-OS Window Chrome Frame (Section 5 Protocol) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-xs sm:max-w-sm bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-[8px] overflow-hidden transition-all duration-200 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              {/* macOS Window Controls Top Bar */}
              <div className="px-3.5 py-2.5 bg-[var(--bg-surface)] border-b border-[var(--border-color)] flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--border-color)] border border-[#D0D0CE]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--border-color)] border border-[#D0D0CE]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--border-color)] border border-[#D0D0CE]" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--ink-muted)]">
                  molly_hames_dossier.pdf
                </span>
              </div>

              {/* Photo */}
              <div className="bg-[var(--bg-subtle)]">
                <img
                  src={MOLLY_PROFILE.headshotPath}
                  alt="Molly Hames, PMP: Research Portfolio & Project Management Leader"
                  className="w-full h-auto object-cover object-top aspect-4/5"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
              </div>

              {/* Window Footer Meta */}
              <div className="p-3 bg-[var(--bg-surface)] border-t border-[var(--border-color)] flex items-baseline justify-between text-xs">
                <div>
                  <div className="font-semibold text-[var(--ink-primary)]">
                    {MOLLY_PROFILE.name}, {MOLLY_PROFILE.credentials}
                  </div>
                  <div className="text-[11px] font-mono text-[var(--ink-muted)]">
                    Portfolio &amp; Program Leader
                  </div>
                </div>
                <span className="text-[11px] font-mono uppercase text-[var(--ink-muted)]">
                  NLR · Golden, CO
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Box Quantitative Metrics Ledger Strip */}
        <div className="mt-16 pt-8 border-t border-[var(--border-color)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {KEY_METRICS.map((metric, idx) => (
              <div 
                key={idx} 
                className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-[8px] p-5 sm:p-6 transition-all duration-200 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] space-y-1"
              >
                <div className="text-2xl sm:text-3xl font-mono font-medium tracking-tight text-[var(--ink-primary)] tabular-nums">
                  {metric.value}
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#1F6C9F]">
                  {metric.label}
                </div>
                <div className="text-xs text-[var(--ink-muted)] leading-snug">
                  {metric.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
