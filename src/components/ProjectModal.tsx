import React, { useEffect, useRef, useState } from 'react';
import { Project } from '../data/portfolioData';
import { CloseIcon, ExternalLinkIcon, CheckIcon, ChevronLeftIcon, ChevronRightIcon } from './Icons';

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#111111]/45 backdrop-blur-[2px] animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        ref={modalRef}
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-[#FFFFFF] border border-[#EAEAEA] rounded-[8px] overflow-hidden text-[#111111] focus:outline-none"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        {/* Screen Reader Live Region for Case Study Navigation */}
        <div role="status" aria-live="polite" className="sr-only">
          {liveAnnouncement}
        </div>

        {/* Flanking Side Navigation on Desktop */}
        {allProjects.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              disabled={!hasPrev}
              aria-label={hasPrev ? `Previous: ${allProjects[currentIndex - 1].title}` : 'No previous project'}
              className="hidden lg:flex absolute -left-14 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-[#FFFFFF] hover:bg-[#F7F6F3] text-[#111111] border border-[#EAEAEA] disabled:opacity-0 disabled:pointer-events-none transition-all cursor-pointer shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
              title={hasPrev ? `Previous: ${allProjects[currentIndex - 1].title}` : undefined}
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              disabled={!hasNext}
              aria-label={hasNext ? `Next: ${allProjects[currentIndex + 1].title}` : 'No next project'}
              className="hidden lg:flex absolute -right-14 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-[#FFFFFF] hover:bg-[#F7F6F3] text-[#111111] border border-[#EAEAEA] disabled:opacity-0 disabled:pointer-events-none transition-all cursor-pointer shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
              title={hasNext ? `Next: ${allProjects[currentIndex + 1].title}` : undefined}
            >
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Header Bar - Clean Pinned Top Zone */}
        <div className="shrink-0 bg-[#FFFFFF] border-b border-[#EAEAEA] px-6 sm:px-8 py-5 space-y-3">
          {/* Top Utility Row */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center px-2.5 py-1 rounded-[4px] bg-[#EDF3EC] text-[#346538] font-mono text-xs font-semibold tracking-wider uppercase border border-[#346538]/15">
                {project.organization}
              </span>
              <span className="text-xs font-mono font-medium text-[#787774]">
                {project.timeframe}
              </span>
              {allProjects.length > 1 && (
                <span className="inline-flex items-center px-2 py-0.5 rounded-[4px] bg-[#F7F6F3] text-[#787774] font-mono text-[11px] font-medium border border-[#EAEAEA]">
                  0{currentIndex + 1} / 0{allProjects.length}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <kbd className="hidden sm:inline-block text-[11px] text-[#2F3437] font-mono font-medium px-2 py-0.5 rounded-[4px] border border-[#D0D0CE] bg-[#FBFBFA]">
                Esc
              </kbd>

              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="min-w-[36px] min-h-[36px] p-1.5 text-[#111111] hover:text-[#000000] hover:bg-[#F7F6F3] border border-[#D0D0CE] rounded-[4px] transition-colors cursor-pointer shrink-0 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
                aria-label="Close dossier"
              >
                <CloseIcon className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Title Row */}
          <div className="space-y-1">
            <h2 id="modal-title" className="text-2xl sm:text-[1.75rem] font-serif font-medium text-[#111111] leading-snug tracking-[-0.025em]">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base font-sans font-normal text-[#2F3437] leading-relaxed">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-6 space-y-6 text-[#111111]">
          {/* Impact Balance Sheet */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-[#F7F6F3] border border-[#EAEAEA] rounded-[6px]">
            {project.metrics.map((metric, i) => (
              <div key={i} className="space-y-0.5">
                <div className="text-xl sm:text-2xl font-mono font-medium text-[#111111] tabular-nums">
                  {metric.value}
                </div>
                <div className="text-xs text-[#787774] font-medium leading-tight">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Strategic Context & Execution Framework */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-mono font-medium uppercase tracking-wider text-[#787774]">
              Context &amp; Execution Framework
            </h3>
            <div className="space-y-2.5 text-sm sm:text-base text-[#2F3437] leading-relaxed">
              {project.narrative.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* Measurable Outcomes */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-mono font-medium uppercase tracking-wider text-[#787774]">
              Key Outcomes &amp; Deliverables
            </h3>
            <ul className="space-y-2">
              {project.keyOutcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-[#111111]">
                  <CheckIcon className="w-3.5 h-3.5 text-[#346538] shrink-0 mt-1" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Competencies */}
          <div className="pt-2 border-t border-[#EAEAEA]">
            <div className="flex flex-wrap gap-2 text-xs font-mono text-[#2F3437]">
              {project.tags.map((tag, i) => (
                <span key={i} className="inline-flex items-center px-2 py-0.5 rounded-[4px] bg-[#F7F6F3] border border-[#EAEAEA]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Navigation Bar - Relocated Left & Right Navigation */}
        <div className="shrink-0 flex items-center justify-between gap-3 px-6 sm:px-8 py-3.5 border-t border-[#EAEAEA] bg-[#FBFBFA]">
          {/* Left Navigation: Previous Project */}
          <button
            onClick={handlePrev}
            disabled={!hasPrev}
            aria-label="Previous case study"
            className="inline-flex items-center gap-1.5 min-h-[38px] px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider text-[#111111] bg-[#FFFFFF] hover:bg-[#F2EFE9] border border-[#D0D0CE] rounded-[4px] disabled:opacity-30 disabled:cursor-not-allowed active:scale-[0.98] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
          >
            <ChevronLeftIcon className="w-3.5 h-3.5" />
            <span>Previous</span>
          </button>

          {/* Center: External Study Portal or Keyboard Hint */}
          <div className="flex items-center gap-3">
            {project.externalUrl ? (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit official study portal for ${project.title} (opens in new tab)`}
                className="inline-flex items-center gap-1.5 min-h-[38px] px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-[#FFFFFF] bg-[#111111] hover:bg-[#333333] active:scale-[0.98] rounded-[4px] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
              >
                <span>Study Portal</span>
                <ExternalLinkIcon className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="hidden sm:inline-block text-[11px] font-mono text-[#787774]">
                Navigate with ← and → keys
              </span>
            )}
          </div>

          {/* Right Navigation: Next Project */}
          <button
            onClick={handleNext}
            disabled={!hasNext}
            aria-label="Next case study"
            className="inline-flex items-center gap-1.5 min-h-[38px] px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider text-[#111111] bg-[#FFFFFF] hover:bg-[#F2EFE9] border border-[#D0D0CE] rounded-[4px] disabled:opacity-30 disabled:cursor-not-allowed active:scale-[0.98] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
          >
            <span>Next</span>
            <ChevronRightIcon className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
