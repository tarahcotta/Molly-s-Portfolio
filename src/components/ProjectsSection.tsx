import React, { useState } from 'react';
import { FEATURED_PROJECTS, ADDITIONAL_PROJECTS, Project } from '../data/portfolioData';
import { ExternalLinkIcon, PlusIcon, MinusIcon, ArrowRightIcon } from './Icons';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [showAdditional, setShowAdditional] = useState(false);

  // Spot pastel rotation for tags
  const pastelStyles = [
    'bg-[#E1F3FE] text-[#1F6C9F] border-[#1F6C9F]/10',
    'bg-[#EDF3EC] text-[#346538] border-[#346538]/10',
    'bg-[#FBF3DB] text-[#956400] border-[#956400]/10',
    'bg-[#FDEBEC] text-[#9F2F2D] border-[#9F2F2D]/10',
  ];

  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#EAEAEA]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-2">
          <div className="text-xs font-mono uppercase tracking-wider text-[#787774]">
            Portfolio Case Studies
          </div>
          <h2 id="projects-heading" className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium tracking-[-0.025em] text-[#111111]" style={{ textWrap: 'balance' }}>
            Transforming Complex Initiatives into Measurable Scientific &amp; Operational Results
          </h2>
          <p className="text-sm text-[#787774] leading-[1.6]">
            Directly orchestrating national laboratory research portfolios, inter-agency agreements, and federal investments.
          </p>
        </div>

        {/* Featured Showcase: The First Three Projects as Bento Box Cards */}
        <div className="space-y-8">
          {FEATURED_PROJECTS.map((project) => (
            <article
              key={project.id}
              className="bg-[#FFFFFF] border border-[#EAEAEA] rounded-[8px] sm:rounded-[12px] p-6 sm:p-10 transition-all duration-200 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
              aria-labelledby={`project-title-${project.id}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left 8 Cols: Project Narrative & Context */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#787774]">
                    <span className="font-semibold text-[#111111] uppercase tracking-wider">{project.organization}</span>
                    <span aria-hidden="true" className="text-[#D0D0CE]">/</span>
                    <span>{project.timeframe}</span>
                    <span aria-hidden="true" className="text-[#D0D0CE]">/</span>
                    <span className="text-[#2F3437]">{project.scopeBadge}</span>
                  </div>

                  <h3 id={`project-title-${project.id}`} className="font-serif text-xl sm:text-2xl font-medium text-[#111111] leading-tight tracking-[-0.02em]">
                    {project.title}
                  </h3>

                  <p className="text-xs font-mono uppercase tracking-wider text-[#787774]">
                    {project.subtitle}
                  </p>

                  <p className="text-sm text-[#2F3437] leading-[1.6] whitespace-pre-line pt-1">
                    {project.summary}
                  </p>

                  {/* Spot Pastel Tags & Status Badges (Section 4 & 5 Protocol) */}
                  <div className="pt-2 flex flex-wrap items-center gap-1.5 text-xs font-mono uppercase tracking-[0.05em]">
                    {project.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className={`px-2.5 py-0.5 rounded-full border text-[11px] ${pastelStyles[tIdx % pastelStyles.length]}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Desktop Actions Bar */}
                  <div className="hidden lg:flex pt-3 items-center gap-4">
                    <button
                      onClick={() => onSelectProject(project)}
                      aria-label={`Read full dossier for ${project.title}`}
                      className="inline-flex items-center gap-1.5 min-h-[40px] px-3.5 py-2 text-xs font-mono uppercase tracking-wider text-[#FFFFFF] bg-[#111111] hover:bg-[#333333] active:scale-[0.98] rounded-[4px] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
                    >
                      <span>Read Dossier</span>
                      <ArrowRightIcon className="w-3.5 h-3.5" />
                    </button>

                    {project.externalUrl && (
                      <a
                        href={project.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit official study portal for ${project.title} (opens in new tab)`}
                        className="inline-flex items-center gap-1.5 min-h-[40px] px-3.5 py-2 text-xs font-mono uppercase tracking-wider text-[#2F3437] hover:text-[#111111] bg-[#F7F6F3] hover:bg-[#EAEAEA] rounded-[4px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
                      >
                        <span>Study Map</span>
                        <ExternalLinkIcon className="w-3 h-3 opacity-60" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right 4 Cols: Archival Ledger Strip */}
                <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#EAEAEA] pt-6 lg:pt-0 lg:pl-8 space-y-4">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-[#787774] border-b border-[#EAEAEA] pb-2">
                    Impact Ledger
                  </div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="space-y-0.5">
                        <div className="text-xl sm:text-2xl font-mono font-medium text-[#111111] tabular-nums">
                          {m.value}
                        </div>
                        <div className="text-xs text-[#787774] leading-tight">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Actions Bar */}
                <div className="lg:hidden pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onSelectProject(project)}
                    aria-label={`Read full dossier for ${project.title}`}
                    className="inline-flex items-center gap-1.5 min-h-[42px] px-4 py-2 text-xs font-mono uppercase tracking-wider text-[#FFFFFF] bg-[#111111] active:scale-[0.98] rounded-[4px] transition-all cursor-pointer"
                  >
                    <span>Read Dossier</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </button>

                  {project.externalUrl && (
                    <a
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit official study portal for ${project.title} (opens in new tab)`}
                      className="inline-flex items-center gap-1.5 min-h-[42px] px-4 py-2 text-xs font-mono uppercase tracking-wider text-[#2F3437] bg-[#F7F6F3] rounded-[4px] transition-colors"
                    >
                      <span>Study Map</span>
                      <ExternalLinkIcon className="w-3 h-3 opacity-60" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Read More Trigger using Section 5 Accordion (+ and - icons) */}
        <div className="mt-14 pt-8 border-t border-[#EAEAEA] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-sm font-semibold text-[#111111]">
              {showAdditional ? "All 6 Programs Displayed" : "Additional Federal & Enterprise Initiatives (3 more)"}
            </div>
            <p className="text-xs text-[#787774]">
              Work Planning &amp; Control ($8M), Federal Funding ($250M+ warrants), and Enterprise Systems ($12M).
            </p>
          </div>

          <button
            onClick={() => setShowAdditional(!showAdditional)}
            aria-expanded={showAdditional}
            aria-controls="additional-projects"
            className="inline-flex items-center gap-2 min-h-[42px] px-4 py-2 text-xs font-mono uppercase tracking-wider text-[#111111] bg-[#FBFBFA] hover:bg-[#F7F6F3] active:scale-[0.98] border border-[#EAEAEA] rounded-[4px] transition-all cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
          >
            {showAdditional ? (
              <>
                <MinusIcon className="w-3.5 h-3.5 text-[#111111]" />
                <span>Collapse to Top 3</span>
              </>
            ) : (
              <>
                <PlusIcon className="w-3.5 h-3.5 text-[#111111]" />
                <span>Read More Projects</span>
              </>
            )}
          </button>
        </div>

        {/* Additional Projects (4, 5, 6) Revealed on Read More */}
        {showAdditional && (
          <div 
            id="additional-projects"
            className="mt-8 pt-8 border-t border-[#EAEAEA] space-y-8 animate-in fade-in duration-200"
          >
            {ADDITIONAL_PROJECTS.map((project) => (
              <article
                key={project.id}
                className="bg-[#FFFFFF] border border-[#EAEAEA] rounded-[8px] sm:rounded-[12px] p-6 sm:p-10 transition-all duration-200 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                aria-labelledby={`project-title-${project.id}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#787774]">
                      <span className="font-semibold text-[#111111] uppercase tracking-wider">{project.organization}</span>
                      <span aria-hidden="true" className="text-[#D0D0CE]">/</span>
                      <span>{project.timeframe}</span>
                      <span aria-hidden="true" className="text-[#D0D0CE]">/</span>
                      <span className="text-[#2F3437]">{project.scopeBadge}</span>
                    </div>

                    <h4 id={`project-title-${project.id}`} className="font-serif text-xl sm:text-2xl font-medium text-[#111111] tracking-[-0.02em]">
                      {project.title}
                    </h4>

                    <p className="text-xs font-mono uppercase tracking-wider text-[#787774]">
                      {project.subtitle}
                    </p>

                    <p className="text-sm text-[#2F3437] leading-[1.6] whitespace-pre-line pt-1">
                      {project.summary}
                    </p>

                    <div className="pt-2 flex flex-wrap items-center gap-1.5 text-xs font-mono uppercase tracking-[0.05em]">
                      {project.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx} 
                          className={`px-2.5 py-0.5 rounded-full border text-[11px] ${pastelStyles[tIdx % pastelStyles.length]}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="hidden lg:flex pt-3">
                      <button
                        onClick={() => onSelectProject(project)}
                        aria-label={`Read full dossier for ${project.title}`}
                        className="inline-flex items-center gap-1.5 min-h-[40px] px-3.5 py-2 text-xs font-mono uppercase tracking-wider text-[#FFFFFF] bg-[#111111] hover:bg-[#333333] active:scale-[0.98] rounded-[4px] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
                      >
                        <span>Read Dossier</span>
                        <ArrowRightIcon className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#EAEAEA] pt-6 lg:pt-0 lg:pl-8 space-y-4">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-[#787774] border-b border-[#EAEAEA] pb-2">
                      Program Scope
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="space-y-0.5">
                          <div className="text-xl sm:text-2xl font-mono font-medium text-[#111111] tabular-nums">
                            {m.value}
                          </div>
                          <div className="text-xs text-[#787774] leading-tight">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:hidden pt-2">
                    <button
                      onClick={() => onSelectProject(project)}
                      aria-label={`Read full dossier for ${project.title}`}
                      className="inline-flex items-center gap-1.5 min-h-[42px] px-4 py-2 text-xs font-mono uppercase tracking-wider text-[#FFFFFF] bg-[#111111] active:scale-[0.98] rounded-[4px] transition-all cursor-pointer"
                    >
                      <span>Read Dossier</span>
                      <ArrowRightIcon className="w-3.5 h-3.5" />
                    </button>
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
