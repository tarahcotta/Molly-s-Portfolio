import React, { useState } from 'react';
import { CAREER_HISTORY, MOLLY_PROFILE, AWARDS } from '../data/portfolioData';

interface ExperienceSectionProps {
  onOpenResume: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'credentials' | 'awards'>('timeline');

  return (
    <section id="experience" className="py-16 md:py-24 bg-white border-b border-[#e5e3df]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#e5e3df]">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#73716b]">
              Leadership Track Record
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#16181b]">
              15+ Years in National Laboratories &amp; Federal Programs
            </h2>
            <p className="text-sm sm:text-base text-[#5a5853]">
              A continuous record of managing multimillion-dollar research, federal awards under Unlimited Contracting Officer authority, and enterprise technology implementations.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onOpenResume}
              className="px-4 py-2 text-xs font-mono font-medium uppercase tracking-wider text-[#16181b] bg-[#fcfbf9] hover:bg-[#f2efe9] border border-[#d2cec5] rounded-xs transition-colors cursor-pointer"
            >
              Curriculum Vitae (PDF)
            </button>
          </div>
        </div>

        {/* Tab Controls: Architectural Segmented Control */}
        <div className="flex items-center gap-2 border-b border-[#e5e3df] mb-10">
          <button
            onClick={() => setActiveTab('timeline')}
            className={`pb-3 text-xs font-mono uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
              activeTab === 'timeline'
                ? 'border-[#14294a] text-[#14294a] font-semibold'
                : 'border-transparent text-[#73716b] hover:text-[#16181b]'
            }`}
          >
            Chronology
          </button>
          <span className="text-[#c4c0b6] pb-3 font-mono">/</span>
          <button
            onClick={() => setActiveTab('credentials')}
            className={`pb-3 text-xs font-mono uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
              activeTab === 'credentials'
                ? 'border-[#14294a] text-[#14294a] font-semibold'
                : 'border-transparent text-[#73716b] hover:text-[#16181b]'
            }`}
          >
            Clearances &amp; Academics
          </button>
          <span className="text-[#c4c0b6] pb-3 font-mono">/</span>
          <button
            onClick={() => setActiveTab('awards')}
            className={`pb-3 text-xs font-mono uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
              activeTab === 'awards'
                ? 'border-[#14294a] text-[#14294a] font-semibold'
                : 'border-transparent text-[#73716b] hover:text-[#16181b]'
            }`}
          >
            Institutional Honors
          </button>
        </div>

        {/* Tab 1: Career Chronology */}
        {activeTab === 'timeline' && (
          <div className="divide-y divide-[#e5e3df]">
            {CAREER_HISTORY.map((exp, idx) => (
              <div
                key={idx}
                className="py-8 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
              >
                <div className="md:col-span-4 space-y-1">
                  <div className="text-xs font-mono text-[#73716b]">
                    {exp.period}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#16181b]">
                    {exp.role}
                  </h3>
                  <div className="text-xs text-[#5a5853] font-mono">
                    {exp.organization} · {exp.location}
                  </div>
                </div>

                <div className="md:col-span-8">
                  <ul className="space-y-2.5">
                    {exp.highlights.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#373a3e] leading-relaxed">
                        <span className="w-1.5 h-1.5 bg-[#14294a] shrink-0 mt-2" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Education & Credentials */}
        {activeTab === 'credentials' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-5">
              <h3 className="font-serif text-xl font-bold text-[#16181b] pb-2 border-b border-[#e5e3df]">
                Certifications &amp; Security Clearances
              </h3>
              <div className="space-y-4">
                {MOLLY_PROFILE.certifications.map((cert, i) => (
                  <div key={i} className="space-y-0.5">
                    <div className="text-sm font-bold text-[#16181b]">
                      {cert.name}
                    </div>
                    <div className="text-xs text-[#5a5853] font-mono">
                      {cert.issuer} <span className="text-[#c4c0b6]">/</span> <span className="text-[#14294a] font-semibold">{cert.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <h3 className="font-serif text-xl font-bold text-[#16181b] pb-2 border-b border-[#e5e3df]">
                Academic Degrees
              </h3>
              <div className="space-y-4">
                {MOLLY_PROFILE.education.map((edu, i) => (
                  <div key={i} className="space-y-0.5">
                    <div className="text-sm font-bold text-[#16181b]">
                      {edu.degree}
                    </div>
                    <div className="text-xs text-[#5a5853]">
                      {edu.institution} · {edu.location} ({edu.year})
                    </div>
                    {edu.notes && (
                      <div className="text-xs text-[#73716b] font-mono mt-1">
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
          <div className="space-y-6">
            <h3 className="font-serif text-xl font-bold text-[#16181b] pb-2 border-b border-[#e5e3df]">
              Laboratory &amp; Department of Energy Recognition
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {AWARDS.map((award, i) => (
                <div key={i} className="p-4 bg-[#fcfbf9] border border-[#e5e3df] space-y-1">
                  <div className="font-serif text-base font-bold text-[#16181b]">
                    {award.title}
                  </div>
                  <div className="text-xs text-[#5a5853]">
                    {award.organization}
                  </div>
                  <div className="text-xs font-mono font-medium text-[#14294a]">
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
