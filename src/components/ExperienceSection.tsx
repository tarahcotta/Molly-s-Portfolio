import React, { useState } from 'react';
import { CAREER_HISTORY, MOLLY_PROFILE, AWARDS } from '../data/portfolioData';
import { Briefcase, GraduationCap, Award, ShieldCheck, ChevronDown, ChevronUp, FileText } from 'lucide-react';

interface ExperienceSectionProps {
  onOpenResume: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'education' | 'awards'>('timeline');

  return (
    <section id="experience" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 font-mono">
              Track Record &amp; Credentials
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
              15+ Years of Leadership Across Science, Tech &amp; Government
            </h2>
            <p className="text-base text-stone-600">
              From managing federal grants under an Unlimited Contracting Officer Warrant to steering enterprise IT transitions and national laboratory research portfolios.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-stone-900 bg-stone-100 hover:bg-stone-200 active:bg-stone-300 border border-stone-300 rounded-lg transition-colors cursor-pointer shadow-xs"
            >
              <FileText className="w-4 h-4 text-stone-700" />
              <span>Open Complete Resume</span>
            </button>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 p-1 bg-stone-100 rounded-xl max-w-md mb-10 border border-stone-200">
          <button
            onClick={() => setActiveTab('timeline')}
            className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === 'timeline'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Career History
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === 'education'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Education &amp; Credentials
          </button>
          <button
            onClick={() => setActiveTab('awards')}
            className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === 'awards'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Honors &amp; Awards
          </button>
        </div>

        {/* Tab 1: Career Timeline */}
        {activeTab === 'timeline' && (
          <div className="space-y-6">
            {CAREER_HISTORY.map((exp, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-xl bg-stone-50 border border-stone-200/90 shadow-2xs space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 border-b border-stone-200/60 pb-3">
                  <div>
                    <h3 className="text-lg font-bold text-stone-900">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-medium text-stone-700">
                      {exp.organization} <span className="text-stone-400">·</span> <span className="text-xs text-stone-500 font-mono">{exp.location}</span>
                    </div>
                  </div>
                  <div className="text-xs font-mono font-medium text-stone-600 shrink-0">
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-2 pt-1">
                  {exp.highlights.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0 mt-2" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Education & Credentials */}
        {activeTab === 'education' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Certifications Card */}
            <div className="p-7 rounded-xl bg-stone-50 border border-stone-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-2 text-stone-900 font-bold text-lg">
                <ShieldCheck className="w-5 h-5 text-emerald-700" />
                <h3>Certifications &amp; Clearances</h3>
              </div>
              <div className="space-y-4">
                {MOLLY_PROFILE.certifications.map((cert, i) => (
                  <div key={i} className="border-b border-stone-200/60 last:border-0 pb-3 last:pb-0">
                    <div className="text-sm font-bold text-stone-900">
                      {cert.name}
                    </div>
                    <div className="text-xs text-stone-600 mt-0.5">
                      {cert.issuer} <span className="text-stone-400">·</span> <span className="font-mono text-emerald-800 font-medium">{cert.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Degrees Card */}
            <div className="p-7 rounded-xl bg-stone-50 border border-stone-200/90 shadow-2xs space-y-4">
              <div className="flex items-center gap-2 text-stone-900 font-bold text-lg">
                <GraduationCap className="w-5 h-5 text-stone-900" />
                <h3>Education &amp; Academics</h3>
              </div>
              <div className="space-y-4">
                {MOLLY_PROFILE.education.map((edu, i) => (
                  <div key={i} className="border-b border-stone-200/60 last:border-0 pb-3 last:pb-0">
                    <div className="text-sm font-bold text-stone-900">
                      {edu.degree}
                    </div>
                    <div className="text-xs text-stone-600 mt-0.5">
                      {edu.institution} · {edu.location} ({edu.year})
                    </div>
                    {edu.notes && (
                      <div className="text-xs text-stone-500 mt-1 italic">
                        {edu.notes}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Awards & Recognition */}
        {activeTab === 'awards' && (
          <div className="p-7 rounded-xl bg-stone-50 border border-stone-200/90 shadow-2xs space-y-6">
            <div className="flex items-center gap-2 text-stone-900 font-bold text-lg">
              <Award className="w-5 h-5 text-amber-700" />
              <h3>Laboratory &amp; Federal Honors</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {AWARDS.map((award, i) => (
                <div key={i} className="p-4 rounded-lg bg-white border border-stone-200/80 shadow-2xs">
                  <div className="text-sm font-bold text-stone-900">
                    {award.title}
                  </div>
                  <div className="text-xs text-stone-600 mt-0.5">
                    {award.organization}
                  </div>
                  <div className="text-xs font-mono font-semibold text-amber-900 mt-1">
                    {award.year}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
