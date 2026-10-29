import React, { useEffect, useRef } from 'react';
import { MOLLY_PROFILE, CAREER_HISTORY } from '../data/portfolioData';
import { X, Download, ExternalLink, CheckCircle2 } from 'lucide-react';

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#16181b]/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white border border-[#d8d5cd] overflow-hidden text-[#16181b] shadow-xl focus:outline-none"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e5e3df] bg-[#fcfbf9]">
          <h2 id="resume-title" className="text-base font-bold text-[#16181b]">
            {MOLLY_PROFILE.name}, {MOLLY_PROFILE.credentials} — Official Curriculum Vitae
          </h2>

          <div className="flex items-center gap-2">
            <a
              href={MOLLY_PROFILE.resumePdfPath}
              download="Molly_Hames_Resume.pdf"
              className="inline-flex items-center gap-1.5 min-h-[44px] px-3.5 py-2 text-xs font-mono uppercase tracking-wider text-white bg-[#14294a] hover:bg-[#0f203b] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14294a]"
            >
              <Download className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Download PDF</span>
            </a>

            <a
              href={MOLLY_PROFILE.resumePdfPath}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Curriculum Vitae PDF in a new tab"
              className="inline-flex items-center gap-1.5 min-h-[44px] px-3.5 py-2 text-xs font-mono uppercase tracking-wider text-[#16181b] bg-white border border-[#d2cec5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14294a]"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#73716b]" aria-hidden="true" />
              <span>Open PDF</span>
            </a>

            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="min-w-[44px] min-h-[44px] p-2 text-[#73716b] hover:text-[#16181b] transition-colors cursor-pointer flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14294a]"
              aria-label="Close Curriculum Vitae modal"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 text-[#16181b]">
          {/* Header */}
          <div className="border-b border-[#e5e3df] pb-6 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16181b]">
              {MOLLY_PROFILE.name}, {MOLLY_PROFILE.credentials}
            </h1>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#5a5853] font-mono">
              <span>{MOLLY_PROFILE.location}</span>
              <span aria-hidden="true">/</span>
              <span>{MOLLY_PROFILE.phone}</span>
              <span aria-hidden="true">/</span>
              <span>{MOLLY_PROFILE.email}</span>
              <span aria-hidden="true">/</span>
              <span>{MOLLY_PROFILE.linkedInDisplay}</span>
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#14294a] pt-2 font-semibold">
              Research Portfolio &amp; Project Management Leader
            </div>
            <p className="text-sm text-[#373a3e] leading-relaxed pt-1">
              {MOLLY_PROFILE.bio}
            </p>
          </div>

          {/* Core Competencies */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#73716b]">
              Core Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#16181b]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#14294a] shrink-0" aria-hidden="true" />
                <span>Strategic Leadership &amp; Team Development</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#14294a] shrink-0" aria-hidden="true" />
                <span>Research Portfolio &amp; Program Management</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#14294a] shrink-0" aria-hidden="true" />
                <span>Project Governance &amp; Risk Management</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#14294a] shrink-0" aria-hidden="true" />
                <span>Financial, Schedule &amp; Resource Planning</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#14294a] shrink-0" aria-hidden="true" />
                <span>Proposal Management &amp; Business Development</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#14294a] shrink-0" aria-hidden="true" />
                <span>Federal Award Stewardship ($250M+ Warrants)</span>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-6">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#73716b]">
              Professional Experience
            </h3>

            {CAREER_HISTORY.map((job, idx) => (
              <div key={idx} className="space-y-2 border-b border-[#f2efe9] last:border-0 pb-5 last:pb-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h4 className="text-base font-bold text-[#16181b]">{job.role}</h4>
                    <div className="text-xs text-[#5a5853] font-mono">
                      {job.organization} — {job.location}
                    </div>
                  </div>
                  <div className="text-xs font-mono text-[#73716b] shrink-0">
                    {job.period}
                  </div>
                </div>
                <ul className="space-y-1.5 pt-1">
                  {job.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#373a3e] leading-relaxed">
                      <span className="w-1.5 h-1.5 bg-[#14294a] shrink-0 mt-1.5" aria-hidden="true" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-[#e5e3df]">
            <div className="space-y-2">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#73716b]">
                Education
              </h3>
              {MOLLY_PROFILE.education.map((edu, idx) => (
                <div key={idx} className="text-xs sm:text-sm space-y-0.5">
                  <div className="font-bold text-[#16181b]">{edu.degree}</div>
                  <div className="text-[#5a5853]">{edu.institution} | {edu.location} ({edu.year})</div>
                  {edu.notes && <div className="text-xs text-[#73716b] font-mono mt-0.5">{edu.notes}</div>}
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#73716b]">
                Certifications &amp; Recognition
              </h3>
              <div className="text-xs sm:text-sm text-[#373a3e] space-y-1">
                <div><strong>Certifications:</strong> PMP (Active since 2015); DOE Q Clearance (Active)</div>
                <div><strong>Key Awards:</strong> NLR President&apos;s Award (2024, 2017); Key Contributor Award (2022); Employee of the Month (2022, 2019, 2018); DOE Service &amp; Innovation Awards (2010, 2011)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
