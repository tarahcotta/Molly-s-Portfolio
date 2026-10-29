import React, { useState } from 'react';
import { FEATURED_PROJECTS, ADDITIONAL_PROJECTS, Project } from '../data/portfolioData';
import { ExternalLink, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [showAdditional, setShowAdditional] = useState(false);

  return (
    <section id="projects" className="py-16 md:py-24 bg-white border-b border-[#e5e3df]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-2">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#73716b]">
            Institutional Case Studies
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#16181b]" style={{ textWrap: 'balance' }}>
            Transforming Complex Initiatives into Measurable Scientific &amp; Operational Results
          </h2>
          <p className="text-base text-[#5a5853] leading-relaxed">
            Directly orchestrating national laboratory research portfolios, inter-agency agreements, and federal investments.
          </p>
        </div>

        {/* Featured Showcase: The First Three Projects */}
        <div className="divide-y divide-[#e5e3df]">
          {FEATURED_PROJECTS.map((project) => (
            <article
              key={project.id}
              className="py-12 first:pt-0 last:pb-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left 8 Cols: Project Narrative & Context */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#73716b]">
                    <span className="font-semibold text-[#14294a] uppercase tracking-wider">{project.organization}</span>
                    <span aria-hidden="true" className="text-[#c4c0b6]">/</span>
                    <span>{project.timeframe}</span>
                    <span aria-hidden="true" className="text-[#c4c0b6]">/</span>
                    <span className="text-[#16181b]">{project.scopeBadge}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl lg:text-[1.65rem] font-bold text-[#16181b] leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-xs font-mono uppercase tracking-wider text-[#73716b]">
                    {project.subtitle}
                  </p>

                  <p className="text-sm sm:text-base text-[#373a3e] leading-relaxed whitespace-pre-line pt-1">
                    {project.summary}
                  </p>

                  {/* Clean unboxed tags with quiet square dividers */}
                  <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-[#5a5853]">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="inline-flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-[#14294a]" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-3 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#14294a] hover:text-[#0f203b] underline underline-offset-4 cursor-pointer transition-colors"
                    >
                      <span>Read Full Dossier</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    {project.externalUrl && (
                      <a
                        href={project.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-[#5a5853] hover:text-[#16181b] transition-colors"
                      >
                        <span>Official Study Map</span>
                        <ExternalLink className="w-3 h-3 opacity-60" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right 4 Cols: Archival Ledger Strip (No Outer/Inner Card Sandwich) */}
                <div className="lg:col-span-4 border-l border-[#e5e3df] lg:pl-8 pt-4 lg:pt-0 space-y-4">
                  <div className="text-[11px] font-mono font-semibold uppercase tracking-widest text-[#73716b] border-b border-[#e5e3df] pb-2">
                    Impact Balance Sheet
                  </div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="space-y-0.5">
                        <div className="text-xl sm:text-2xl font-mono font-semibold text-[#16181b] tabular-nums">
                          {m.value}
                        </div>
                        <div className="text-xs text-[#5a5853] leading-tight">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Read More Archival Continuation Trigger */}
        <div className="mt-14 pt-8 border-t border-[#e5e3df] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-sm font-serif font-bold text-[#16181b]">
              {showAdditional ? "All 6 Programs Displayed" : "Additional Federal & Enterprise Initiatives (3 more)"}
            </div>
            <p className="text-xs text-[#5a5853]">
              Work Planning &amp; Control ($8M), Federal Funding ($250M+ warrants), and Enterprise Systems ($12M).
            </p>
          </div>

          <button
            onClick={() => setShowAdditional(!showAdditional)}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium uppercase tracking-wider text-[#16181b] bg-[#fcfbf9] hover:bg-[#f2efe9] border border-[#d2cec5] rounded-xs transition-colors cursor-pointer shrink-0"
            aria-expanded={showAdditional}
          >
            <span>{showAdditional ? "Collapse to Primary 3 Portfolios" : "Read More Portfolios"}</span>
            {showAdditional ? (
              <ChevronUp className="w-3.5 h-3.5 text-[#5a5853]" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5 text-[#5a5853]" />
            )}
          </button>
        </div>

        {/* Additional Projects (4, 5, 6) Revealed on Read More */}
        {showAdditional && (
          <div className="mt-8 pt-8 border-t border-[#e5e3df] divide-y divide-[#e5e3df] animate-in fade-in duration-200">
            {ADDITIONAL_PROJECTS.map((project) => (
              <article
                key={project.id}
                className="py-12 first:pt-0 last:pb-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#73716b]">
                      <span className="font-semibold text-[#14294a] uppercase tracking-wider">{project.organization}</span>
                      <span aria-hidden="true" className="text-[#c4c0b6]">/</span>
                      <span>{project.timeframe}</span>
                      <span aria-hidden="true" className="text-[#c4c0b6]">/</span>
                      <span className="text-[#16181b]">{project.scopeBadge}</span>
                    </div>

                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#16181b]">
                      {project.title}
                    </h4>

                    <p className="text-xs font-mono uppercase tracking-wider text-[#73716b]">
                      {project.subtitle}
                    </p>

                    <p className="text-sm sm:text-base text-[#373a3e] leading-relaxed whitespace-pre-line pt-1">
                      {project.summary}
                    </p>

                    <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-[#5a5853]">
                      {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="inline-flex items-center gap-1.5">
                          <span className="w-1 h-1 bg-[#14294a]" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>

                    <div className="pt-3">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#14294a] hover:text-[#0f203b] underline underline-offset-4 cursor-pointer transition-colors"
                      >
                        <span>Read Full Dossier</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-4 border-l border-[#e5e3df] lg:pl-8 pt-4 lg:pt-0 space-y-4">
                    <div className="text-[11px] font-mono font-semibold uppercase tracking-widest text-[#73716b] border-b border-[#e5e3df] pb-2">
                      Program Scope
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="space-y-0.5">
                          <div className="text-xl sm:text-2xl font-mono font-semibold text-[#16181b] tabular-nums">
                            {m.value}
                          </div>
                          <div className="text-xs text-[#5a5853] leading-tight">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
