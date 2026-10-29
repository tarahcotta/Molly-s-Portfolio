import React, { useEffect } from 'react';
import { MOLLY_PROFILE, CAREER_HISTORY, AWARDS } from '../data/portfolioData';
import { X, Download, ExternalLink, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden text-stone-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-stone-50">
          <div className="flex items-center gap-3">
            <h2 id="resume-title" className="text-lg font-bold text-stone-900">
              {MOLLY_PROFILE.name}, {MOLLY_PROFILE.credentials} — Curriculum Vitae
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={MOLLY_PROFILE.resumePdfPath}
              download="Molly_Hames_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors shadow-2xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <a
              href={MOLLY_PROFILE.resumePdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 hover:text-stone-950 bg-white border border-stone-300 rounded-lg transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
              <span>Open PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 rounded-lg transition-colors cursor-pointer"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 text-stone-900">
          {/* Header */}
          <div className="border-b border-stone-200 pb-6 space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-stone-900">
              {MOLLY_PROFILE.name}, {MOLLY_PROFILE.credentials}
            </h1>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-stone-600 font-mono">
              <span>{MOLLY_PROFILE.location}</span>
              <span>·</span>
              <span>{MOLLY_PROFILE.phone}</span>
              <span>·</span>
              <span>{MOLLY_PROFILE.email}</span>
              <span>·</span>
              <span>{MOLLY_PROFILE.linkedInDisplay}</span>
            </div>
            <div className="text-sm font-semibold text-stone-800 pt-2 tracking-wide uppercase">
              Research Portfolio &amp; Project Management Leader
            </div>
            <p className="text-sm text-stone-700 leading-relaxed pt-1">
              {MOLLY_PROFILE.bio}
            </p>
          </div>

          {/* Core Competencies */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 font-mono">
              Core Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-stone-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Strategic Leadership &amp; Team Development</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Research Portfolio &amp; Program Management</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Project Governance &amp; Risk Management</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Financial, Schedule &amp; Resource Planning</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Proposal Management &amp; Business Development</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Federal Award Stewardship ($250M+ Warrants)</span>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 font-mono">
              Professional Experience
            </h3>

            {CAREER_HISTORY.map((job, idx) => (
              <div key={idx} className="space-y-2 border-b border-stone-100 last:border-0 pb-4 last:pb-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h4 className="text-base font-bold text-stone-900">{job.role}</h4>
                    <div className="text-xs text-stone-600 font-medium">
                      {job.organization} — {job.location}
                    </div>
                  </div>
                  <div className="text-xs font-mono text-stone-500 shrink-0">
                    {job.period}
                  </div>
                </div>
                <ul className="space-y-1.5 pt-1">
                  {job.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0 mt-1.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-stone-200">
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 font-mono">
                Education
              </h3>
              {MOLLY_PROFILE.education.map((edu, idx) => (
                <div key={idx} className="text-xs sm:text-sm space-y-0.5">
                  <div className="font-bold text-stone-900">{edu.degree}</div>
                  <div className="text-stone-600">{edu.institution} | {edu.location} | {edu.year}</div>
                  {edu.notes && <div className="text-xs text-stone-500 italic">{edu.notes}</div>}
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 font-mono">
                Certifications &amp; Recognition
              </h3>
              <div className="text-xs sm:text-sm text-stone-700 space-y-1.5">
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
