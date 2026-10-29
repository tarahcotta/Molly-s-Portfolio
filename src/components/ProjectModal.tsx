import React, { useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { X, ExternalLink, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-stone-200 p-6 sm:p-8 space-y-6 text-stone-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between gap-4 border-b border-stone-200 pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-stone-500 uppercase tracking-wider">
              <span>Project 0{project.order}</span>
              <span aria-hidden="true">·</span>
              <span>{project.organization}</span>
              <span aria-hidden="true">·</span>
              <span>{project.timeframe}</span>
            </div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
              {project.title}
            </h2>
            <p className="text-sm font-medium text-stone-600">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Key Metrics Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-stone-50 border border-stone-200/80">
          {project.metrics.map((metric, i) => (
            <div key={i} className="space-y-0.5">
              <div className="text-xl sm:text-2xl font-bold font-mono text-stone-900 tabular-nums">
                {metric.value}
              </div>
              <div className="text-xs text-stone-600 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Executive Summary */}
        <div className="space-y-2">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 font-mono">
            Overview
          </h3>
          <p className="text-base text-stone-800 leading-relaxed whitespace-pre-line bg-stone-50/50 p-4 rounded-xl border border-stone-100">
            {project.summary}
          </p>
        </div>

        {/* Narrative & Background */}
        <div className="space-y-3">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 font-mono">
            Context &amp; Strategic Approach
          </h3>
          <div className="space-y-2.5 text-sm sm:text-base text-stone-700 leading-relaxed">
            {project.narrative.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        {/* Key Outcomes & Measurable Results */}
        <div className="space-y-3">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 font-mono">
            Key Outcomes &amp; Value Delivered
          </h3>
          <ul className="space-y-2.5">
            {project.keyOutcomes.map((outcome, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-stone-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Competencies / Tags */}
        <div className="pt-2 border-t border-stone-100">
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 font-mono mb-2">
            Competencies Applied
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-stone-600">
            {project.tags.map((tag, i) => (
              <span key={i} className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400" />
                <span>{tag}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-stone-200">
          {project.externalUrl ? (
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors shadow-xs"
            >
              <span>View Official Study Portal</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <div className="text-xs text-stone-500">
              Internal initiative at {project.organization}
            </div>
          )}

          <button
            onClick={onClose}
            className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-stone-700 hover:text-stone-950 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
          >
            <span>Close Overview</span>
          </button>
        </div>
      </div>
    </div>
  );
};
