import React, { useState } from 'react';
import { CAREER_HISTORY, MOLLY_PROFILE, AWARDS } from '../data/portfolioData';

interface ExperienceSectionProps {
  onOpenResume: () => void;
}

type TabKey = 'timeline' | 'credentials' | 'awards';

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<TabKey>('timeline');

  const tabs: { key: TabKey; label: string }[] = [
    { key: 'timeline', label: 'Chronology' },
    { key: 'credentials', label: 'Clearances & Academics' },
    { key: 'awards', label: 'Institutional Honors' }
  ];

  const handleTabKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = (index + 1) % tabs.length;
      setActiveTab(tabs[nextIndex].key);
      document.getElementById(`tab-${tabs[nextIndex].key}`)?.focus();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = (index - 1 + tabs.length) % tabs.length;
      setActiveTab(tabs[prevIndex].key);
      document.getElementById(`tab-${tabs[prevIndex].key}`)?.focus();
    }
  };

  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-16 md:py-24 bg-white border-b border-[#e5e3df]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#e5e3df]">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#73716b]">
              Leadership Track Record
            </div>
            <h2 id="experience-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#16181b]">
              15+ Years in National Laboratories &amp; Federal Programs
            </h2>
            <p className="text-sm sm:text-base text-[#5a5853]">
              A continuous record of managing multimillion-dollar research, federal awards under Unlimited Contracting Officer authority, and enterprise technology implementations.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onOpenResume}
              className="min-h-[44px] px-4 py-2.5 text-xs font-mono font-medium uppercase tracking-wider text-[#16181b] bg-[#fcfbf9] hover:bg-[#f2efe9] border border-[#d2cec5] rounded-xs transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14294a]"
            >
              Curriculum Vitae (PDF)
            </button>
          </div>
        </div>

        {/* Tab Controls: Fully Accessible Tablist with Arrow Navigation */}
        <div 
          role="tablist" 
          aria-label="Experience and credentials tabs"
          className="flex items-center gap-2 border-b border-[#e5e3df] mb-10"
        >
          {tabs.map((tab, idx) => (
            <React.Fragment key={tab.key}>
              {idx > 0 && <span className="text-[#c4c0b6] pb-3 font-mono" aria-hidden="true">/</span>}
              <button
                role="tab"
                id={`tab-${tab.key}`}
                aria-selected={activeTab === tab.key}
                aria-controls={`panel-${tab.key}`}
                tabIndex={activeTab === tab.key ? 0 : -1}
                onClick={() => setActiveTab(tab.key)}
                onKeyDown={(e) => handleTabKeyDown(e, idx)}
                className={`min-h-[44px] pb-3 text-xs font-mono uppercase tracking-wider border-b-2 transition-all cursor-pointer flex items-center ${
                  activeTab === tab.key
                    ? 'border-[#14294a] text-[#14294a] font-semibold'
                    : 'border-transparent text-[#73716b] hover:text-[#16181b]'
                }`}
              >
                {tab.label}
              </button>
            </React.Fragment>
          ))}
        </div>

        {/* Tab 1: Career Chronology */}
        {activeTab === 'timeline' && (
          <div 
            id="panel-timeline"
            role="tabpanel"
            aria-labelledby="tab-timeline"
            className="divide-y divide-[#e5e3df] focus:outline-none"
            tabIndex={0}
          >
            {CAREER_HISTORY.map((exp, idx) => (
              <div
                key={idx}
                className="py-8 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
              >
                <div className="md:col-span-4 space-y-1">
                  <div className="text-xs font-mono text-[#73716b]">
                    {exp.period}
                  </div>
                  <h3 className="text-lg font-bold text-[#16181b]">
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
                        <span className="w-1.5 h-1.5 bg-[#14294a] shrink-0 mt-2" aria-hidden="true" />
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
          <div 
            id="panel-credentials"
            role="tabpanel"
            aria-labelledby="tab-credentials"
            className="grid grid-cols-1 md:grid-cols-2 gap-12 focus:outline-none"
            tabIndex={0}
          >
            <div className="space-y-5">
              <h3 className="text-xl font-bold text-[#16181b] pb-2 border-b border-[#e5e3df]">
                Certifications &amp; Security Clearances
              </h3>
              <div className="space-y-4">
                {MOLLY_PROFILE.certifications.map((cert, i) => (
                  <div key={i} className="space-y-0.5">
                    <div className="text-sm font-bold text-[#16181b]">
                      {cert.name}
                    </div>
                    <div className="text-xs text-[#5a5853] font-mono">
                      {cert.issuer} <span className="text-[#c4c0b6]" aria-hidden="true">/</span> <span className="text-[#14294a] font-semibold">{cert.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <h3 className="text-xl font-bold text-[#16181b] pb-2 border-b border-[#e5e3df]">
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
          <div 
            id="panel-awards"
            role="tabpanel"
            aria-labelledby="tab-awards"
            className="space-y-6 focus:outline-none"
            tabIndex={0}
          >
            <h3 className="text-xl font-bold text-[#16181b] pb-2 border-b border-[#e5e3df]">
              Laboratory &amp; Department of Energy Recognition
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {AWARDS.map((award, i) => (
                <div key={i} className="p-4 bg-[#fcfbf9] border border-[#e5e3df] space-y-1">
                  <div className="text-base font-bold text-[#16181b]">
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
