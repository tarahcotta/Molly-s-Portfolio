import React from 'react';
import { MOLLY_PROFILE, KEY_METRICS } from '../data/portfolioData';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="top" aria-labelledby="hero-heading" className="pt-12 pb-16 md:pt-16 md:pb-20 border-b border-[#e5e3df] bg-[#fcfbf9]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Split Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Archival Classification Bar */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#73716b]">
              <span className="font-semibold text-[#16181b]">Executive Dossier</span>
              <span aria-hidden="true" className="text-[#c4c0b6]">/</span>
              <span>National Laboratory Leadership</span>
              <span aria-hidden="true" className="text-[#c4c0b6]">/</span>
              <span>Golden, CO</span>
            </div>

            {/* Display Headline in Crisp Sans */}
            <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#16181b] leading-[1.12]" style={{ textWrap: 'balance' }}>
              Enabling transformative science through strategic structure, operational clarity, and human connection.
            </h1>

            {/* Body Prose in Public Sans */}
            <p className="text-base sm:text-lg text-[#373a3e] leading-relaxed max-w-2xl">
              I partner with researchers, engineering directors, and institutional leaders to guide high-stakes, multimillion-dollar portfolios from operational ambiguity to measurable scientific breakthroughs. One of my core beliefs is that <strong className="font-semibold text-[#16181b]">project management should enable great work, not get in its way.</strong>
            </p>

            {/* Credential Dossier Strip */}
            <div className="pt-1 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs font-mono text-[#5a5853]">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#14294a]" aria-hidden="true" />
                <span>PMP Certified (Active since 2015)</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#14294a]" aria-hidden="true" />
                <span>DOE Q Clearance (Active)</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#14294a]" aria-hidden="true" />
                <span>NLR President&apos;s Award</span>
              </span>
            </div>

            {/* Actions */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 min-h-[44px] px-4 py-2.5 text-xs font-mono font-medium uppercase tracking-wider text-white bg-[#14294a] hover:bg-[#0f203b] rounded-xs transition-colors shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14294a] focus-visible:ring-offset-2"
              >
                <span>View Key Portfolios</span>
                <ArrowDown className="w-3.5 h-3.5" aria-hidden="true" />
              </a>

              <a
                href={MOLLY_PROFILE.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Molly Hames on LinkedIn (opens in new tab)"
                className="inline-flex items-center gap-1.5 min-h-[44px] px-4 py-2.5 text-xs font-mono font-medium uppercase tracking-wider text-[#16181b] bg-white hover:bg-[#f2efe9] border border-[#d2cec5] rounded-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14294a] focus-visible:ring-offset-2"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#73716b]" aria-hidden="true" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 min-h-[44px] px-3.5 py-2.5 text-xs font-mono font-medium uppercase tracking-wider text-[#5a5853] hover:text-[#16181b] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14294a] focus-visible:ring-offset-2"
              >
                <span>Curriculum Vitae (PDF)</span>
              </button>
            </div>
          </div>

          {/* Right Column: Matte Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-xs sm:max-w-sm bg-white p-2.5 border border-[#d8d5cd] shadow-xs">
              <div className="overflow-hidden bg-[#ebe8e1]">
                <img
                  src={MOLLY_PROFILE.headshotPath}
                  alt="Molly Hames, PMP — Research Portfolio & Project Management Leader"
                  className="w-full h-auto object-cover object-top aspect-4/5"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
              </div>
              <div className="pt-3 pb-1 px-1 flex items-baseline justify-between border-t border-[#edebe6] mt-2">
                <div>
                  <div className="text-sm font-bold text-[#16181b]">
                    {MOLLY_PROFILE.name}, {MOLLY_PROFILE.credentials}
                  </div>
                  <div className="text-[11px] font-mono text-[#73716b]">
                    Portfolio &amp; Program Leader
                  </div>
                </div>
                <span className="text-[11px] font-mono uppercase text-[#8c8880]">
                  NLR · Golden, CO
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quantified Research Impact Ledger */}
        <div className="mt-14 pt-8 border-t border-[#e5e3df]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {KEY_METRICS.map((metric, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-mono font-semibold tracking-tight text-[#16181b] tabular-nums">
                  {metric.value}
                </div>
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#14294a]">
                  {metric.label}
                </div>
                <div className="text-xs text-[#5a5853] leading-snug">
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
