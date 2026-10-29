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

        {/* Header Bar - Pinned Top Zone */}
        <div className="shrink-0 bg-[#FBFBFA] border-b border-[#EAEAEA] px-6 sm:px-8 py-5 space-y-3">
          {/* Top Utility Row */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#787774] uppercase tracking-wider">
              <span className="font-semibold text-[#111111]">{project.organization}</span>
              <span aria-hidden="true" className="text-[#D0D0CE]">/</span>
              <span>{project.timeframe}</span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {/* Sequential Carousel Navigation */}
              {allProjects.length > 1 && (
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#787774] mr-1 pr-2 sm:border-r sm:border-[#EAEAEA]">
                  <button
                    onClick={handlePrev}
                    disabled={!hasPrev}
                    aria-label="Previous case study"
                    className="min-w-[32px] min-h-[32px] p-1.5 rounded-[4px] border border-[#EAEAEA] bg-[#FFFFFF] hover:bg-[#F7F6F3] active:scale-[0.98] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
                  >
                    <ChevronLeftIcon className="w-3.5 h-3.5" />
                  </button>

                  <span className="px-1.5 text-[11px] tabular-nums text-[#111111] font-medium">
                    0{currentIndex + 1} / 0{allProjects.length}
                  </span>

                  <button
                    onClick={handleNext}
                    disabled={!hasNext}
                    aria-label="Next case study"
                    className="min-w-[32px] min-h-[32px] p-1.5 rounded-[4px] border border-[#EAEAEA] bg-[#FFFFFF] hover:bg-[#F7F6F3] active:scale-[0.98] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
                  >
                    <ChevronRightIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              <kbd className="hidden sm:inline-block text-[10px] text-[#787774] font-mono px-1.5 py-0.5 rounded-[4px] border border-[#EAEAEA] bg-[#FFFFFF]">
                Esc
              </kbd>

              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="min-w-[36px] min-h-[36px] p-1.5 text-[#787774] hover:text-[#111111] hover:bg-[#FFFFFF] border border-transparent hover:border-[#EAEAEA] rounded-[4px] transition-colors cursor-pointer shrink-0 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
                aria-label="Close dossier"
              >
                <CloseIcon className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Title Row */}
          <div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-serif font-normal text-[#111111] leading-tight">
              {project.title}
            </h2>
            <p className="text-xs font-mono uppercase tracking-wider text-[#787774] mt-1">
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

        {/* Executive Summary */}
        <div className="space-y-2">
          <h3 className="text-xs font-mono font-medium uppercase tracking-wider text-[#787774]">
            Dossier Summary
          </h3>
          <p className="text-sm sm:text-base text-[#2F3437] leading-relaxed whitespace-pre-line bg-[#FBFBFA] p-4 border border-[#EAEAEA] rounded-[6px]">
            {project.summary}
          </p>
        </div>

        {/* Strategic Context */}
        <div className="space-y-2">
          <h3 className="text-xs font-mono font-medium uppercase tracking-wider text-[#787774]">
            Context &amp; Execution Framework
          </h3>
          <div className="space-y-2 text-sm sm:text-base text-[#2F3437] leading-relaxed">
            {project.narrative.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        {/* Measurable Outcomes */}
        <div className="space-y-2">
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

        {/* Footer actions - Pinned Bottom Zone */}
        <div className="shrink-0 flex flex-wrap items-center justify-between gap-4 px-6 sm:px-8 py-4 border-t border-[#EAEAEA] bg-[#FBFBFA]">
          <div className="flex items-center gap-3">
            {project.externalUrl ? (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit official study portal for ${project.title} (opens in new tab)`}
                className="inline-flex items-center gap-1.5 min-h-[38px] px-4 py-2 text-xs font-mono font-medium uppercase tracking-wider text-[#FFFFFF] bg-[#111111] hover:bg-[#333333] active:scale-[0.98] rounded-[4px] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
              >
                <span>Visit Official Study Portal</span>
                <ExternalLinkIcon className="w-3.5 h-3.5" />
              </a>
            ) : (
              <div className="text-xs font-mono text-[#787774]">
                Conducted at {project.organization}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="min-h-[38px] px-4 py-2 text-xs font-mono uppercase tracking-wider text-[#111111] bg-[#FFFFFF] hover:bg-[#F7F6F3] border border-[#EAEAEA] rounded-[4px] active:scale-[0.98] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
            >
              <span>Close Dossier</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
