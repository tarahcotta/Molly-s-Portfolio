import React from 'react';
import { CORE_VALUES, PHILOSOPHY_QUOTE, PHILOSOPHY_NARRATIVE } from '../data/portfolioData';
import { Users, Eye, Megaphone, SlidersHorizontal, Compass, RefreshCw } from 'lucide-react';

const VALUE_ICONS: Record<string, React.ReactNode> = {
  'people-first': <Users className="w-5 h-5 text-stone-800" />,
  'visibility': <Eye className="w-5 h-5 text-stone-800" />,
  'transparency': <Megaphone className="w-5 h-5 text-stone-800" />,
  'oversight': <SlidersHorizontal className="w-5 h-5 text-stone-800" />,
  'think-ahead': <Compass className="w-5 h-5 text-stone-800" />,
  'sustainable': <RefreshCw className="w-5 h-5 text-stone-800" />
};

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="py-16 md:py-24 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 font-mono">
            Leadership Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900" style={{ textWrap: 'balance' }}>
            Structure That Empowers, Not Bureaucracy That Constrains
          </h2>
        </div>

        {/* Core Pull-Quote Card */}
        <div className="mb-14 p-8 sm:p-10 rounded-2xl bg-white border border-stone-200/90 shadow-2xs">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <blockquote className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 leading-snug">
              &ldquo;{PHILOSOPHY_QUOTE}&rdquo;
            </blockquote>
            <p className="text-xs font-mono uppercase tracking-wider text-stone-500">
              Guiding Principle · Molly Hames, PMP
            </p>
          </div>
        </div>

        {/* Two-Column Deep Dive: Research Philosophy & Systems View */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-7 sm:p-8 rounded-2xl border border-stone-200/90 shadow-2xs space-y-4">
            <h3 className="text-xl font-bold text-stone-900">
              Honoring the Science &amp; Protecting the Scientist
            </h3>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              In research environments, scientists devote their careers to advancing their fields and developing the research that earns funding and expands our understanding of the world.
            </p>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              These projects belong to the researchers—<strong className="font-semibold text-stone-900">that is their life&apos;s work.</strong> My role isn&apos;t to take ownership of their science; it is to help them succeed by providing the planning, coordination, visibility, and operational support they need while reducing their administrative burden so they can focus on what only they can do: the science.
            </p>
          </div>

          <div className="bg-white p-7 sm:p-8 rounded-2xl border border-stone-200/90 shadow-2xs space-y-4">
            <h3 className="text-xl font-bold text-stone-900">
              Systems Thinking: Connecting the Dots
            </h3>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              I look at the whole system rather than just the isolated task. I am deeply interested in how strategy, people, processes, technology, information, and execution connect across an organization.
            </p>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              I enjoy taking something complex, fragmented, or difficult to manage and finding a practical, repeatable way to organize and bring it together to make it work smoothly over the long run.
            </p>
          </div>
        </div>

        {/* Six Core Values Grid */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-2xl font-bold text-stone-900">
              Six Principles That Guide Every Project
            </h3>
            <p className="text-sm text-stone-600">
              The everyday standards applied across multimillion-dollar portfolios and multidisciplinary teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {CORE_VALUES.map((val) => (
              <div
                key={val.id}
                className="bg-white p-6 rounded-xl border border-stone-200/90 shadow-2xs hover:border-stone-300 transition-colors space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-stone-100 border border-stone-200 shrink-0">
                    {VALUE_ICONS[val.id] || <Users className="w-5 h-5 text-stone-800" />}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-stone-900 leading-tight">
                      {val.title}
                    </h4>
                    <span className="text-xs text-stone-500 font-medium">
                      {val.tagline}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
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
