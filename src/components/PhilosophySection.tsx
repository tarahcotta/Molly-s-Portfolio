import React from 'react';
import { CORE_VALUES, PHILOSOPHY_QUOTE } from '../data/portfolioData';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" aria-labelledby="philosophy-heading" className="py-16 md:py-24 bg-[#fcfbf9] border-b border-[#e5e3df]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#73716b]">
            Operating Philosophy
          </div>
          <h2 id="philosophy-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#16181b]" style={{ textWrap: 'balance' }}>
            Structure That Enables, Not Bureaucracy That Constrains
          </h2>
        </div>

        {/* The Core Institutional Tenet */}
        <div className="mb-14 border-l-2 border-[#14294a] pl-6 sm:pl-8 py-2">
          <blockquote className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181b] leading-snug">
            &ldquo;{PHILOSOPHY_QUOTE}&rdquo;
          </blockquote>
          <p className="text-xs font-mono uppercase tracking-widest text-[#73716b] mt-3">
            Molly Hames, PMP — Foundational Principle
          </p>
        </div>

        {/* Two-Column Monograph */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 pb-14 border-b border-[#e5e3df]">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#16181b]">
              The Researcher-First Approach
            </h3>
            <p className="text-sm sm:text-base text-[#373a3e] leading-relaxed">
              In research institutions, scientists devote their careers to advancing their disciplines and securing the discoveries that advance human understanding.
            </p>
            <p className="text-sm sm:text-base text-[#373a3e] leading-relaxed">
              These projects belong to the researchers—<strong className="font-semibold text-[#16181b]">that is their life&apos;s work.</strong> My role is not to claim ownership of their science; it is to ensure their success by providing planning, financial visibility, inter-agency coordination, and operational structure while stripping away administrative drag so they can concentrate on the science.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#16181b]">
              Systems Thinking &amp; Organizational Architecture
            </h3>
            <p className="text-sm sm:text-base text-[#373a3e] leading-relaxed">
              I evaluate the broader organizational system rather than just the isolated task. I examine how strategy, personnel, workflows, technology, and governance interlock.
            </p>
            <p className="text-sm sm:text-base text-[#373a3e] leading-relaxed">
              I find genuine satisfaction in taking initiatives that are fragmented, high-risk, or difficult to govern and designing a practical, sustainable framework that brings them into cohesion.
            </p>
          </div>
        </div>

        {/* Six Operating Standards */}
        <div className="pt-12 space-y-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#16181b]">
              Six Working Principles
            </h3>
            <p className="text-xs font-mono text-[#73716b] mt-1">
              Practices applied across multidisciplinary teams, federal monitors, and executive leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_VALUES.map((val, idx) => (
              <div key={val.id} className="space-y-2">
                <div className="text-xs font-mono font-semibold text-[#14294a]">
                  Section 0{idx + 1}
                </div>
                <h4 className="text-base font-bold text-[#16181b] leading-snug">
                  {val.title}
                </h4>
                <div className="text-xs font-mono text-[#73716b]">
                  {val.tagline}
                </div>
                <p className="text-xs sm:text-sm text-[#373a3e] leading-relaxed pt-1">
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
