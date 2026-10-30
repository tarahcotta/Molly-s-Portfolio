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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[var(--ink-primary)]/45 backdrop-blur-[2px] animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        ref={modalRef}
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-[8px] overflow-hidden text-[var(--ink-primary)] focus:outline-none"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        {/* Screen Reader Live Region for Case Study Navigation */}
        <div role="status" aria-live="polite" className="sr-only">
          {liveAnnouncement}
        </div>



        {/* Header Bar - Clean Pinned Top Zone */}
        <div className="shrink-0 bg-[var(--bg-surface)] border-b border-[var(--border-color)] px-6 sm:px-8 py-5 space-y-3">
          {/* Top Utility Row */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center px-2.5 py-1 rounded-[4px] bg-[#EDF3EC] text-[#346538] font-mono text-xs font-semibold tracking-wider uppercase border border-[#346538]/15">
                {project.organization}
              </span>
              <span className="text-xs font-mono font-medium text-[var(--ink-muted)]">
                {project.timeframe}
              </span>
              {allProjects.length > 1 && (
                <span className="inline-flex items-center px-2 py-0.5 rounded-[4px] bg-[var(--bg-subtle)] text-[var(--ink-muted)] font-mono text-[11px] font-medium border border-[var(--border-color)]">
                  0{currentIndex + 1} / 0{allProjects.length}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <kbd className="hidden sm:inline-block text-[11px] text-[var(--ink-secondary)] font-mono font-medium px-2 py-0.5 rounded-[4px] border border-[#D0D0CE] bg-[var(--bg-canvas)]">
                Esc
              </kbd>

              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="min-w-[36px] min-h-[36px] p-1.5 text-[var(--ink-primary)] hover:text-[#000000] hover:bg-[var(--bg-subtle)] border border-[#D0D0CE] rounded-[4px] transition-colors cursor-pointer shrink-0 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink-primary)]"
                aria-label="Close dossier"
              >
                <CloseIcon className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Title Row */}
          <div className="space-y-1">
            <h2 id="modal-title" className="text-2xl sm:text-[1.75rem] font-sans font-medium text-[var(--ink-primary)] leading-snug tracking-[-0.025em]">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base font-sans font-normal text-[var(--ink-secondary)] leading-relaxed">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-6 space-y-6 text-[var(--ink-primary)]">
          {/* Impact Balance Sheet */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-[var(--bg-subtle)] border border-[var(--border-color)] rounded-[6px]">
            {project.metrics.map((metric, i) => (
              <div key={i} className="space-y-0.5">
                <div className="text-xl sm:text-2xl font-mono font-medium text-[var(--ink-primary)] tabular-nums">
                  {metric.value}
                </div>
                <div className="text-xs text-[var(--ink-muted)] font-medium leading-tight">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Strategic Context & Execution Framework */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-mono font-medium uppercase tracking-wider text-[var(--ink-muted)]">
              Context &amp; Execution Framework
            </h3>
            <div className="space-y-2.5 text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed">
              {project.narrative.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* Measurable Outcomes */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-mono font-medium uppercase tracking-wider text-[var(--ink-muted)]">
              Key Outcomes &amp; Deliverables
            </h3>
            <ul className="space-y-2">
              {project.keyOutcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--ink-primary)]">
                  <CheckIcon className="w-3.5 h-3.5 text-[#346538] shrink-0 mt-1" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Competencies */}
          <div className="pt-2 border-t border-[var(--border-color)]">
            <div className="flex flex-wrap gap-2 text-xs font-mono text-[var(--ink-secondary)]">
              {project.tags.map((tag, i) => (
                <span key={i} className="inline-flex items-center px-2 py-0.5 rounded-[4px] bg-[var(--bg-subtle)] border border-[var(--border-color)]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Navigation Bar - Relocated Left & Right Navigation */}
        <div className="shrink-0 flex items-center justify-between gap-3 px-6 sm:px-8 py-3.5 border-t border-[var(--border-color)] bg-[var(--bg-canvas)]">
          {/* Left Navigation: Previous Project */}
          <button
            onClick={handlePrev}
            disabled={!hasPrev}
            aria-label="Previous case study"
            className="inline-flex items-center gap-1.5 min-h-[38px] px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider text-[var(--ink-primary)] bg-[var(--bg-surface)] hover:bg-[#F2EFE9] border border-[#D0D0CE] rounded-[4px] disabled:opacity-30 disabled:cursor-not-allowed active:scale-[0.98] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink-primary)]"
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
                className="inline-flex items-center gap-1.5 min-h-[38px] px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-[var(--bg-surface)] bg-[var(--ink-primary)] hover:bg-[#333333] active:scale-[0.98] rounded-[4px] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink-primary)]"
              >
                <span>Study Portal</span>
                <ExternalLinkIcon className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="hidden sm:inline-block text-[11px] font-mono text-[var(--ink-muted)]">
                Navigate with ← and → keys
              </span>
            )}
          </div>

          {/* Right Navigation: Next Project */}
          <button
            onClick={handleNext}
            disabled={!hasNext}
            aria-label="Next case study"
            className="inline-flex items-center gap-1.5 min-h-[38px] px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider text-[var(--ink-primary)] bg-[var(--bg-surface)] hover:bg-[#F2EFE9] border border-[#D0D0CE] rounded-[4px] disabled:opacity-30 disabled:cursor-not-allowed active:scale-[0.98] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink-primary)]"
          >
            <span>Next</span>
            <ChevronRightIcon className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
