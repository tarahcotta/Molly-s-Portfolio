import React, { useState } from 'react';
import { FEATURED_PROJECTS, ADDITIONAL_PROJECTS, Project } from '../data/portfolioData';
import { ExternalLink, ChevronDown, ChevronUp, ArrowRight, Sparkles } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [showAdditional, setShowAdditional] = useState(false);

  return (
    <section id="projects" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 font-mono">
            Featured Case Studies
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900" style={{ textWrap: 'balance' }}>
            Transforming Complex Programs into Cohesive, High-Performing Results
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Leading high-visibility national initiatives across clean energy grid modernization, multidisciplinary research portfolios, and federal program governance.
          </p>
        </div>

        {/* Primary Showcase: The First Three Projects */}
        <div className="space-y-8">
          {FEATURED_PROJECTS.map((project, idx) => (
            <article
              key={project.id}
              className="group relative bg-stone-50/80 hover:bg-stone-50 border border-stone-200/90 hover:border-stone-300 rounded-2xl p-6 sm:p-8 transition-all duration-200 shadow-2xs hover:shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left 8 Cols: Project Story & Content */}
                <div className="lg:col-span-8 space-y-4">
                  {/* Unboxed Metadata Header */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-stone-500 uppercase tracking-wider">
                    <span className="font-semibold text-stone-900">Project 0{project.order}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.organization}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.timeframe}</span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-stone-950 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-stone-600 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Core Summary Paragraph (The exact words & context requested) */}
                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed whitespace-pre-line">
                    {project.summary}
                  </p>

                  {/* Unboxed Competency Tags */}
                  <div className="pt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-stone-500 font-medium">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="inline-flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-stone-400" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-stone-900 bg-white hover:bg-stone-100 border border-stone-300 rounded-lg transition-colors shadow-2xs cursor-pointer"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    {project.externalUrl && (
                      <a
                        href={project.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-stone-700 hover:text-stone-950 bg-stone-100/80 hover:bg-stone-200/80 rounded-lg transition-colors"
                      >
                        <span>Visit Study Portal</span>
                        <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right 4 Cols: Impact Metrics Grid */}
                <div className="lg:col-span-4 bg-white rounded-xl p-5 border border-stone-200/80 shadow-2xs space-y-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 font-mono pb-2 border-b border-stone-100">
                    Quantified Impact
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="space-y-0.5">
                        <div className="text-xl sm:text-2xl font-bold font-mono text-stone-900 tabular-nums">
                          {m.value}
                        </div>
                        <div className="text-xs text-stone-600 leading-tight">
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

        {/* "READ MORE" Interactive Expansion Control */}
        <div className="mt-12 text-center">
          <div className="inline-block p-1 bg-stone-100 rounded-xl border border-stone-200">
            <button
              onClick={() => setShowAdditional(!showAdditional)}
              className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-stone-900 bg-white hover:bg-stone-50 active:bg-stone-100 rounded-lg transition-all shadow-xs cursor-pointer"
              aria-expanded={showAdditional}
            >
              <span>
                {showAdditional
                  ? "Show Less (Collapse to Top 3 Projects)"
                  : "Read More: Explore 3 Additional Enterprise & Federal Projects"}
              </span>
              {showAdditional ? (
                <ChevronUp className="w-4 h-4 text-stone-600" />
              ) : (
                <ChevronDown className="w-4 h-4 text-stone-600" />
              )}
            </button>
          </div>
          <p className="text-xs text-stone-500 mt-2">
            {!showAdditional && "Including Work Planning & Control ($8M), Federal Funding ($250M+), and Enterprise Systems ($12M)."}
          </p>
        </div>

        {/* Additional Projects (4, 5, 6) Revealed on "Read More" */}
        {showAdditional && (
          <div className="mt-10 pt-10 border-t border-stone-200 space-y-8 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 font-mono">
                Additional Enterprise &amp; Federal Portfolios
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mt-1">
                Extending Impact Across Federal Oversight and Modern Systems
              </h3>
            </div>

            <div className="space-y-8">
              {ADDITIONAL_PROJECTS.map((project) => (
                <article
                  key={project.id}
                  className="group relative bg-stone-50/70 hover:bg-stone-50 border border-stone-200/90 hover:border-stone-300 rounded-2xl p-6 sm:p-8 transition-all duration-200 shadow-2xs hover:shadow-sm"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left 8 Cols: Project Details */}
                    <div className="lg:col-span-8 space-y-4">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-stone-500 uppercase tracking-wider">
                        <span className="font-semibold text-stone-900">Project 0{project.order}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.organization}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.timeframe}</span>
                      </div>

                      <div>
                        <h4 className="text-xl sm:text-2xl font-bold text-stone-900">
                          {project.title}
                        </h4>
                        <p className="text-sm font-medium text-stone-600 mt-1">
                          {project.subtitle}
                        </p>
                      </div>

                      <p className="text-sm sm:text-base text-stone-700 leading-relaxed whitespace-pre-line">
                        {project.summary}
                      </p>

                      <div className="pt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-stone-500 font-medium">
                        {project.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="inline-flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-stone-400" />
                            <span>{tag}</span>
                          </span>
                        ))}
                      </div>

                      <div className="pt-3">
                        <button
                          onClick={() => onSelectProject(project)}
                          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-stone-900 bg-white hover:bg-stone-100 border border-stone-300 rounded-lg transition-colors shadow-2xs cursor-pointer"
                        >
                          <span>Read Full Case Study</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Right 4 Cols: Metrics */}
                    <div className="lg:col-span-4 bg-white rounded-xl p-5 border border-stone-200/80 shadow-2xs space-y-4">
                      <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 font-mono pb-2 border-b border-stone-100">
                        Program Scope
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {project.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="space-y-0.5">
                            <div className="text-xl sm:text-2xl font-bold font-mono text-stone-900 tabular-nums">
                              {m.value}
                            </div>
                            <div className="text-xs text-stone-600 leading-tight">
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

            {/* Quick collapse helper */}
            <div className="pt-6 text-center">
              <button
                onClick={() => {
                  setShowAdditional(false);
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-600 hover:text-stone-950 transition-colors"
              >
                <ChevronUp className="w-4 h-4" />
                <span>Return to top 3 projects</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
