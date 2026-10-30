import React, { useEffect, useRef } from 'react';
import { MOLLY_PROFILE, CAREER_HISTORY } from '../data/portfolioData';
import { CloseIcon, DownloadIcon, CheckIcon } from './Icons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[var(--ink-primary)]/45 backdrop-blur-[2px] animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-[8px] overflow-hidden text-[var(--ink-primary)] focus:outline-none"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        {/* Modal Top Bar - High-Readability Pinned Header */}
        <div className="shrink-0 flex items-center justify-between px-6 sm:px-8 py-4 sm:py-5 border-b border-[var(--border-color)] bg-[var(--bg-surface)]">
          <div className="space-y-0.5">
            <div className="text-xs font-mono font-medium uppercase tracking-wider text-[var(--ink-secondary)]">
              Official Record · Executive CV
            </div>
            <h2 id="resume-title" className="text-lg sm:text-xl font-sans font-medium text-[var(--ink-primary)] leading-tight">
              {MOLLY_PROFILE.name}, {MOLLY_PROFILE.credentials}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={MOLLY_PROFILE.resumePdfPath}
              download="Molly_Hames_Resume.pdf"
              className="inline-flex items-center gap-1.5 min-h-[36px] px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider text-[var(--bg-surface)] bg-[var(--ink-primary)] hover:bg-[#333333] active:scale-[0.98] rounded-[4px] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink-primary)]"
            >
              <DownloadIcon className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <kbd className="hidden sm:inline-block text-[11px] text-[var(--ink-secondary)] font-mono font-medium px-2 py-0.5 rounded-[4px] border border-[#D0D0CE] bg-[var(--bg-canvas)]">
              Esc
            </kbd>

            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="min-w-[36px] min-h-[36px] p-1.5 text-[var(--ink-primary)] hover:text-[#000000] hover:bg-[var(--bg-subtle)] border border-[#D0D0CE] rounded-[4px] transition-colors cursor-pointer flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink-primary)]"
              aria-label="Close Curriculum Vitae modal"
            >
              <CloseIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 text-[var(--ink-primary)]">
          {/* Executive Overview & Direct Contacts */}
          <div className="border-b border-[var(--border-color)] pb-6 space-y-3">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-[var(--ink-muted)] font-mono">
              <span className="text-[var(--ink-primary)] font-medium">{MOLLY_PROFILE.location}</span>
              <span aria-hidden="true" className="text-[var(--border-color)]">/</span>
              <span>{MOLLY_PROFILE.phone}</span>
              <span aria-hidden="true" className="text-[var(--border-color)]">/</span>
              <span>{MOLLY_PROFILE.email}</span>
              <span aria-hidden="true" className="text-[var(--border-color)]">/</span>
              <span>{MOLLY_PROFILE.linkedInDisplay}</span>
            </div>
            <p className="text-sm text-[var(--ink-secondary)] leading-relaxed max-w-3xl">
              {MOLLY_PROFILE.bio}
            </p>
          </div>

          {/* Core Competencies */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-medium uppercase tracking-wider text-[var(--ink-muted)]">
              Core Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[var(--ink-primary)]">
              <div className="flex items-center gap-2 p-2.5 rounded-[4px] bg-[var(--bg-subtle)] border border-[var(--border-color)]">
                <CheckIcon className="w-3.5 h-3.5 text-[#346538] shrink-0" />
                <span>Strategic Leadership &amp; Team Development</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-[4px] bg-[var(--bg-subtle)] border border-[var(--border-color)]">
                <CheckIcon className="w-3.5 h-3.5 text-[#346538] shrink-0" />
                <span>Research Portfolio &amp; Program Management</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-[4px] bg-[var(--bg-subtle)] border border-[var(--border-color)]">
                <CheckIcon className="w-3.5 h-3.5 text-[#346538] shrink-0" />
                <span>Project Governance &amp; Risk Management</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-[4px] bg-[var(--bg-subtle)] border border-[var(--border-color)]">
                <CheckIcon className="w-3.5 h-3.5 text-[#346538] shrink-0" />
                <span>Financial, Schedule &amp; Resource Planning</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-[4px] bg-[var(--bg-subtle)] border border-[var(--border-color)]">
                <CheckIcon className="w-3.5 h-3.5 text-[#346538] shrink-0" />
                <span>Proposal Management &amp; Business Development</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-[4px] bg-[var(--bg-subtle)] border border-[var(--border-color)]">
                <CheckIcon className="w-3.5 h-3.5 text-[#346538] shrink-0" />
                <span>Federal Award Stewardship ($250M+ Warrants)</span>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-6">
            <h3 className="text-xs font-mono font-medium uppercase tracking-wider text-[var(--ink-muted)]">
              Professional Experience
            </h3>

            {CAREER_HISTORY.map((job, idx) => (
              <div key={idx} className="space-y-2 border-b border-[var(--border-color)] last:border-0 pb-5 last:pb-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h4 className="text-base font-sans font-normal text-[var(--ink-primary)]">{job.role}</h4>
                    <div className="text-xs text-[var(--ink-muted)] font-mono">
                      {job.organization} — {job.location}
                    </div>
                  </div>
                  <div className="text-xs font-mono text-[var(--ink-muted)] shrink-0">
                    {job.period}
                  </div>
                </div>
                <ul className="space-y-1.5 pt-1">
                  {job.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--ink-secondary)] leading-relaxed">
                      <span className="w-1.5 h-1.5 bg-[var(--ink-primary)] shrink-0 mt-2 rounded-[1px]" aria-hidden="true" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-[var(--border-color)]">
            <div className="space-y-2">
              <h3 className="text-xs font-mono font-medium uppercase tracking-wider text-[var(--ink-muted)]">
                Education
              </h3>
              {MOLLY_PROFILE.education.map((edu, idx) => (
                <div key={idx} className="text-xs sm:text-sm space-y-0.5">
                  <div className="font-medium text-[var(--ink-primary)]">{edu.degree}</div>
                  <div className="text-[var(--ink-muted)]">{edu.institution} | {edu.location} ({edu.year})</div>
                  {edu.notes && <div className="text-xs text-[var(--ink-muted)] font-mono mt-0.5">{edu.notes}</div>}
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-mono font-medium uppercase tracking-wider text-[var(--ink-muted)]">
                Certifications &amp; Recognition
              </h3>
              <div className="text-xs sm:text-sm text-[var(--ink-secondary)] space-y-1.5">
                <div><strong className="font-medium text-[var(--ink-primary)]">Certifications:</strong> PMP (Active since 2015); DOE Q Clearance (Active)</div>
                <div><strong className="font-medium text-[var(--ink-primary)]">Key Awards:</strong> NLR President&apos;s Award (2024, 2017); Key Contributor Award (2022); Employee of the Month (2022, 2019, 2018); DOE Service &amp; Innovation Awards (2010, 2011)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
