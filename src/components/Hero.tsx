import React from 'react';
import { MOLLY_PROFILE, KEY_METRICS } from '../data/portfolioData';
import { ArrowDown, ArrowUpRight, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="top" className="pt-12 pb-16 md:pt-16 md:pb-24 border-b border-stone-200 bg-gradient-to-b from-stone-100/60 to-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Split-Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Unboxed Metadata Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-stone-600 tracking-wider uppercase">
              <span>National Laboratory Leader</span>
              <span aria-hidden="true" className="text-stone-400">·</span>
              <span>PMP Certified</span>
              <span aria-hidden="true" className="text-stone-400">·</span>
              <span>Lakewood &amp; Golden, CO</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-[1.15]" style={{ textWrap: 'balance' }}>
              Enabling transformative science through strategic structure, operational clarity, and human connection.
            </h1>

            {/* Body Prose */}
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-2xl">
              I partner with world-class researchers, engineers, and executives to navigate complex, multi-million dollar initiatives. One of my core beliefs is that <strong className="font-semibold text-stone-900">project management should enable great work, not get in its way.</strong>
            </p>

            {/* Trust Markers / Highlights */}
            <div className="pt-1 flex flex-wrap gap-y-2 gap-x-6 text-xs text-stone-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>PMP Certified (Active since 2015)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>DOE Q Clearance (Active)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-700 shrink-0" />
                <span>NLR President&apos;s Award Recipient</span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors shadow-xs"
              >
                <span>Explore Featured Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={MOLLY_PROFILE.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-stone-800 bg-white hover:bg-stone-100 border border-stone-300 rounded-lg transition-colors shadow-2xs"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-4 h-4 text-stone-500" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-stone-700 hover:text-stone-950 transition-colors"
              >
                <span>Download Resume</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Portrait Asset */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="relative rounded-2xl overflow-hidden bg-stone-200 border border-stone-300 shadow-md">
                <img
                  src={MOLLY_PROFILE.headshotPath}
                  alt="Molly Hames, PMP — Research Portfolio & Project Management Leader"
                  className="w-full h-auto object-cover object-top aspect-4/5"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                {/* Clean Editorial Caption Strip */}
                <div className="p-4 bg-white/95 backdrop-blur-xs border-t border-stone-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-base font-bold text-stone-900">{MOLLY_PROFILE.name}, {MOLLY_PROFILE.credentials}</h2>
                      <p className="text-xs text-stone-600">Research Portfolio &amp; Program Leader</p>
                    </div>
                    <span className="text-xs text-stone-500 font-mono">Golden, CO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Quantitative Metrics Strip below Hero Split */}
        <div className="mt-16 pt-10 border-t border-stone-200/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {KEY_METRICS.map((metric, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-mono tracking-tight text-stone-900 tabular-nums">
                  {metric.value}
                </div>
                <div className="text-sm font-semibold text-stone-800">
                  {metric.label}
                </div>
                <div className="text-xs text-stone-600 leading-snug">
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
