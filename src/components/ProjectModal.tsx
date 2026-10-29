import React, { useEffect, useRef, useState } from 'react';
import { Project } from '../data/portfolioData';
import { X, ExternalLink, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  allProjects?: Project[];
  onNavigate?: (project: Project) => void;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ 
  project, 
  allProjects = [], 
  onNavigate, 
  onClose 
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [liveAnnouncement, setLiveAnnouncement] = useState('');

  const currentIndex = project && allProjects.length > 0 
    ? allProjects.findIndex(p => p.id === project.id) 
    : -1;

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex >= 0 && currentIndex < allProjects.length - 1;

  const handlePrev = () => {
    if (hasPrev && onNavigate) {
      const prevProject = allProjects[currentIndex - 1];
      onNavigate(prevProject);
      setLiveAnnouncement(`Now viewing project ${currentIndex} of ${allProjects.length}: ${prevProject.title}`);
    }
  };

  const handleNext = () => {
    if (hasNext && onNavigate) {
      const nextProject = allProjects[currentIndex + 1];
      onNavigate(nextProject);
      setLiveAnnouncement(`Now viewing project ${currentIndex + 2} of ${allProjects.length}: ${nextProject.title}`);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && hasPrev) {
        handlePrev();
      } else if (e.key === 'ArrowRight' && hasNext) {
        handleNext();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, currentIndex, hasPrev, hasNext, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#16181b]/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        ref={modalRef}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white border border-[#d8d5cd] p-6 sm:p-8 space-y-6 text-[#16181b] shadow-xl focus:outline-none"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        {/* Screen Reader Live Region for Case Study Navigation */}
        <div role="status" aria-live="polite" className="sr-only">
          {liveAnnouncement}
        </div>

        {/* Header Bar */}
        <div className="flex items-start justify-between gap-4 border-b border-[#e5e3df] pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-[#73716b] uppercase tracking-wider">
              <span className="font-semibold text-[#14294a]">{project.organization}</span>
              <span aria-hidden="true" className="text-[#c4c0b6]">/</span>
              <span>{project.timeframe}</span>
            </div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181b]">
              {project.title}
            </h2>
            <p className="text-xs font-mono uppercase tracking-wider text-[#73716b]">
              {project.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Sequential Carousel Navigation */}
            {allProjects.length > 1 && (
              <div className="hidden sm:flex items-center gap-1.5 mr-2 pr-3 border-r border-[#e5e3df] text-xs font-mono text-[#73716b]">
                <button
                  onClick={handlePrev}
                  disabled={!hasPrev}
                  aria-label="Previous case study"
                  className="min-w-[36px] min-h-[36px] p-1.5 rounded-xs border border-[#d2cec5] hover:bg-[#f2efe9] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14294a]"
                >
                  <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                </button>

                <span className="px-1 text-[11px] tabular-nums">
                  0{currentIndex + 1} / 0{allProjects.length}
                </span>

                <button
                  onClick={handleNext}
                  disabled={!hasNext}
                  aria-label="Next case study"
                  className="min-w-[36px] min-h-[36px] p-1.5 rounded-xs border border-[#d2cec5] hover:bg-[#f2efe9] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14294a]"
                >
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            )}

            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="min-w-[44px] min-h-[44px] p-2 text-[#73716b] hover:text-[#16181b] transition-colors cursor-pointer shrink-0 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14294a]"
              aria-label="Close dossier"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Impact Balance Sheet */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#fcfbf9] border border-[#e5e3df]">
          {project.metrics.map((metric, i) => (
            <div key={i} className="space-y-0.5">
              <div className="text-xl sm:text-2xl font-mono font-semibold text-[#16181b] tabular-nums">
                {metric.value}
              </div>
              <div className="text-xs text-[#5a5853] font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Executive Summary */}
        <div className="space-y-2">
          <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#73716b]">
            Dossier Summary
          </h3>
          <p className="text-sm sm:text-base text-[#373a3e] leading-relaxed whitespace-pre-line bg-[#fcfbf9] p-4 border border-[#edebe6]">
            {project.summary}
          </p>
        </div>

        {/* Strategic Context */}
        <div className="space-y-2">
          <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#73716b]">
            Context &amp; Execution Framework
          </h3>
          <div className="space-y-2 text-sm sm:text-base text-[#373a3e] leading-relaxed">
            {project.narrative.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        {/* Measurable Outcomes */}
        <div className="space-y-2">
          <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#73716b]">
            Key Outcomes &amp; Deliverables
          </h3>
          <ul className="space-y-2">
            {project.keyOutcomes.map((outcome, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-[#16181b]">
                <CheckCircle2 className="w-4 h-4 text-[#14294a] shrink-0 mt-0.5" aria-hidden="true" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Competencies */}
        <div className="pt-2 border-t border-[#edebe6]">
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono text-[#5a5853]">
            {project.tags.map((tag, i) => (
              <span key={i} className="inline-flex items-center gap-1.5">
                <span className="w-1 h-1 bg-[#14294a]" aria-hidden="true" />
                <span>{tag}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#e5e3df]">
          <div className="flex items-center gap-3">
            {project.externalUrl ? (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit official study portal for ${project.title} (opens in new tab)`}
                className="inline-flex items-center gap-1.5 min-h-[44px] px-4 py-2 text-xs font-mono font-medium uppercase tracking-wider text-white bg-[#14294a] hover:bg-[#0f203b] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14294a]"
              >
                <span>Visit Official Study Portal</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            ) : (
              <div className="text-xs font-mono text-[#73716b]">
                Conducted at {project.organization}
              </div>
            )}
          </div>

          <div className="flex items-center gap-3">
            {/* Mobile Carousel Controls */}
            {allProjects.length > 1 && (
              <div className="flex sm:hidden items-center gap-2 text-xs font-mono">
                <button
                  onClick={handlePrev}
                  disabled={!hasPrev}
                  className="min-h-[44px] px-3 border border-[#d2cec5] disabled:opacity-30"
                  aria-label="Previous project"
                >
                  Prev
                </button>
                <button
                  onClick={handleNext}
                  disabled={!hasNext}
                  className="min-h-[44px] px-3 border border-[#d2cec5] disabled:opacity-30"
                  aria-label="Next project"
                >
                  Next
                </button>
              </div>
            )}

            <button
              onClick={onClose}
              className="min-h-[44px] px-4 py-2 text-xs font-mono uppercase tracking-wider text-[#16181b] bg-[#fcfbf9] hover:bg-[#f2efe9] border border-[#d2cec5] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14294a]"
            >
              <span>Close Dossier</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
