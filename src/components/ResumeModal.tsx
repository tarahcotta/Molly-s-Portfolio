import React, { useEffect, useRef } from 'react';
import { MOLLY_PROFILE, CAREER_HISTORY } from '../data/portfolioData';
import { CloseIcon, DownloadIcon, ExternalLinkIcon, CheckIcon } from './Icons';

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#111111]/45 backdrop-blur-[2px] animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#FFFFFF] border border-[#EAEAEA] rounded-[8px] overflow-hidden text-[#111111] focus:outline-none"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        {/* Modal Top Bar - Pinned Header */}
        <div className="shrink-0 flex items-center justify-between px-6 sm:px-8 py-4 border-b border-[#EAEAEA] bg-[#FBFBFA]">
          <div className="space-y-0.5">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#787774]">
              Official Record · Executive CV
            </div>
            <h2 id="resume-title" className="text-base sm:text-lg font-serif font-normal text-[#111111] leading-tight">
              {MOLLY_PROFILE.name}, {MOLLY_PROFILE.credentials}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={MOLLY_PROFILE.resumePdfPath}
              download="Molly_Hames_Resume.pdf"
              className="inline-flex items-center gap-1.5 min-h-[36px] px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider text-[#FFFFFF] bg-[#111111] hover:bg-[#333333] active:scale-[0.98] rounded-[4px] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
            >
              <DownloadIcon className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <a
              href={MOLLY_PROFILE.resumePdfPath}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Curriculum Vitae PDF in a new tab"
              className="hidden sm:inline-flex items-center gap-1.5 min-h-[36px] px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-[#111111] bg-[#FFFFFF] border border-[#EAEAEA] hover:bg-[#F7F6F3] active:scale-[0.98] rounded-[4px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
            >
              <ExternalLinkIcon className="w-3.5 h-3.5 text-[#787774]" />
              <span>Open PDF</span>
            </a>

            <kbd className="hidden sm:inline-block text-[10px] text-[#787774] font-mono px-1.5 py-0.5 rounded-[4px] border border-[#EAEAEA] bg-[#FFFFFF]">
              Esc
            </kbd>

            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="min-w-[36px] min-h-[36px] p-1.5 text-[#787774] hover:text-[#111111] hover:bg-[#FFFFFF] border border-transparent hover:border-[#EAEAEA] rounded-[4px] transition-colors cursor-pointer flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
              aria-label="Close Curriculum Vitae modal"
            >
              <CloseIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 text-[#111111]">
          {/* Header */}
          <div className="border-b border-[#EAEAEA] pb-6 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-serif font-normal text-[#111111] leading-tight">
              {MOLLY_PROFILE.name}, {MOLLY_PROFILE.credentials}
            </h1>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#787774] font-mono">
              <span>{MOLLY_PROFILE.location}</span>
              <span aria-hidden="true" className="text-[#EAEAEA]">/</span>
              <span>{MOLLY_PROFILE.phone}</span>
              <span aria-hidden="true" className="text-[#EAEAEA]">/</span>
              <span>{MOLLY_PROFILE.email}</span>
              <span aria-hidden="true" className="text-[#EAEAEA]">/</span>
              <span>{MOLLY_PROFILE.linkedInDisplay}</span>
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#111111] pt-2 font-medium">
              Research Portfolio &amp; Project Management Leader
            </div>
            <p className="text-sm text-[#2F3437] leading-relaxed pt-1 max-w-3xl">
              {MOLLY_PROFILE.bio}
            </p>
          </div>

          {/* Core Competencies */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-medium uppercase tracking-wider text-[#787774]">
              Core Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#111111]">
              <div className="flex items-center gap-2 p-2.5 rounded-[4px] bg-[#F7F6F3] border border-[#EAEAEA]">
                <CheckIcon className="w-3.5 h-3.5 text-[#346538] shrink-0" />
                <span>Strategic Leadership &amp; Team Development</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-[4px] bg-[#F7F6F3] border border-[#EAEAEA]">
                <CheckIcon className="w-3.5 h-3.5 text-[#346538] shrink-0" />
                <span>Research Portfolio &amp; Program Management</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-[4px] bg-[#F7F6F3] border border-[#EAEAEA]">
                <CheckIcon className="w-3.5 h-3.5 text-[#346538] shrink-0" />
                <span>Project Governance &amp; Risk Management</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-[4px] bg-[#F7F6F3] border border-[#EAEAEA]">
                <CheckIcon className="w-3.5 h-3.5 text-[#346538] shrink-0" />
                <span>Financial, Schedule &amp; Resource Planning</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-[4px] bg-[#F7F6F3] border border-[#EAEAEA]">
                <CheckIcon className="w-3.5 h-3.5 text-[#346538] shrink-0" />
                <span>Proposal Management &amp; Business Development</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-[4px] bg-[#F7F6F3] border border-[#EAEAEA]">
                <CheckIcon className="w-3.5 h-3.5 text-[#346538] shrink-0" />
                <span>Federal Award Stewardship ($250M+ Warrants)</span>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-6">
            <h3 className="text-xs font-mono font-medium uppercase tracking-wider text-[#787774]">
              Professional Experience
            </h3>

            {CAREER_HISTORY.map((job, idx) => (
              <div key={idx} className="space-y-2 border-b border-[#EAEAEA] last:border-0 pb-5 last:pb-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h4 className="text-base font-serif font-normal text-[#111111]">{job.role}</h4>
                    <div className="text-xs text-[#787774] font-mono">
                      {job.organization} — {job.location}
                    </div>
                  </div>
                  <div className="text-xs font-mono text-[#787774] shrink-0">
                    {job.period}
                  </div>
                </div>
                <ul className="space-y-1.5 pt-1">
                  {job.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#2F3437] leading-relaxed">
                      <span className="w-1.5 h-1.5 bg-[#111111] shrink-0 mt-2 rounded-[1px]" aria-hidden="true" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-[#EAEAEA]">
            <div className="space-y-2">
              <h3 className="text-xs font-mono font-medium uppercase tracking-wider text-[#787774]">
                Education
              </h3>
              {MOLLY_PROFILE.education.map((edu, idx) => (
                <div key={idx} className="text-xs sm:text-sm space-y-0.5">
                  <div className="font-medium text-[#111111]">{edu.degree}</div>
                  <div className="text-[#787774]">{edu.institution} | {edu.location} ({edu.year})</div>
                  {edu.notes && <div className="text-xs text-[#787774] font-mono mt-0.5">{edu.notes}</div>}
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-mono font-medium uppercase tracking-wider text-[#787774]">
                Certifications &amp; Recognition
              </h3>
              <div className="text-xs sm:text-sm text-[#2F3437] space-y-1.5">
                <div><strong className="font-medium text-[#111111]">Certifications:</strong> PMP (Active since 2015); DOE Q Clearance (Active)</div>
                <div><strong className="font-medium text-[#111111]">Key Awards:</strong> NLR President&apos;s Award (2024, 2017); Key Contributor Award (2022); Employee of the Month (2022, 2019, 2018); DOE Service &amp; Innovation Awards (2010, 2011)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
