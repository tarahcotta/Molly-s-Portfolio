import React from 'react';
import { CORE_VALUES, PHILOSOPHY_QUOTE } from '../data/portfolioData';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" aria-labelledby="philosophy-heading" className="py-20 md:py-28 bg-[#FBFBFA] border-b border-[#EAEAEA]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-2">
          <div className="text-xs font-mono uppercase tracking-wider text-[#787774]">
            Operating Philosophy
          </div>
          <h2 id="philosophy-heading" className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium tracking-[-0.025em] text-[#111111]" style={{ textWrap: 'balance' }}>
            Structure That Enables, Not Bureaucracy That Constrains
          </h2>
        </div>

        {/* The Core Institutional Tenet Pull-Quote (Newsreader with -0.03em tracking) */}
        <div className="mb-16 border-l-2 border-[#111111] pl-6 sm:pl-8 py-2">
          <blockquote className="font-serif text-2xl sm:text-3xl lg:text-[2rem] font-medium tracking-[-0.03em] text-[#111111] leading-[1.2]">
            &ldquo;{PHILOSOPHY_QUOTE}&rdquo;
          </blockquote>
          <p className="text-xs font-mono uppercase tracking-widest text-[#787774] mt-3">
            Molly Hames, PMP — Foundational Operating Principle
          </p>
        </div>

        {/* Two-Column Monograph */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 pb-16 border-b border-[#EAEAEA]">
          <div className="space-y-3">
            <h3 className="font-serif text-xl font-medium text-[#111111] tracking-[-0.02em]">
              The Researcher-First Approach
            </h3>
            <p className="text-sm text-[#2F3437] leading-[1.6]">
              Scientists spend decades establishing the experiments that expand our understanding of energy, climate, and materials.
            </p>
            <p className="text-sm text-[#2F3437] leading-[1.6]">
              These initiatives represent their life&apos;s work. I do not manage their science; I manage the friction surrounding it—securing timely subcontract approvals, modeling burn rates before funds stall, and coordinating across federal monitors so researchers can conduct research.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-serif text-xl font-medium text-[#111111] tracking-[-0.02em]">
              Systems Architecture &amp; Delivery
            </h3>
            <p className="text-sm text-[#2F3437] leading-[1.6]">
              Isolated task lists fail when applied to complex federal programs. I evaluate how funding solicitations, subcontracts, laboratory milestones, and inter-team dependencies interact across an entire division.
            </p>
            <p className="text-sm text-[#2F3437] leading-[1.6]">
              When a program is distributed, high-risk, or tangled in legacy compliance, I construct modular tracking frameworks that give executive leadership immediate visibility while freeing project leads from administrative drag.
            </p>
          </div>
        </div>

        {/* Six Operating Standards Bento Grid */}
        <div className="pt-14 space-y-8">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#111111] tracking-[-0.02em]">
              Six Working Principles
            </h3>
            <p className="text-xs font-mono text-[#787774] mt-1">
              Practices applied across multidisciplinary teams, federal monitors, and executive leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map((val, idx) => (
              <div 
                key={val.id} 
                className="bg-[#FFFFFF] border border-[#EAEAEA] rounded-[8px] p-6 space-y-3 transition-all duration-200 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
              >
                <div className="flex items-center justify-between">
                  <kbd className="font-mono text-[11px] text-[#787774]">
                    § 0{idx + 1}
                  </kbd>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#787774]">
                    Standard
                  </span>
                </div>

                <h4 className="font-semibold text-sm text-[#111111] leading-snug">
                  {val.title}
                </h4>

                <div className="text-xs font-mono text-[#1F6C9F]">
                  {val.tagline}
                </div>

                <p className="text-xs text-[#2F3437] leading-[1.6] pt-1">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
