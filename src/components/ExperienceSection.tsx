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
    { key: 'awards', label: 'Honors & Recognition' }
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
    <section id="experience" aria-labelledby="experience-heading" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#EAEAEA]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#EAEAEA]">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-wider text-[#787774]">
              Leadership Record
            </div>
            <h2 id="experience-heading" className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium tracking-[-0.025em] text-[#111111]">
              15+ Years in National Laboratories &amp; Federal Programs
            </h2>
            <p className="text-sm text-[#787774] leading-[1.6]">
              A continuous record of managing multimillion-dollar research, federal awards under Unlimited Contracting Officer authority, and enterprise technology implementations.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onOpenResume}
              className="min-h-[40px] px-4 py-2 text-xs font-mono uppercase tracking-wider text-[#111111] bg-[#FBFBFA] hover:bg-[#F7F6F3] active:scale-[0.98] border border-[#EAEAEA] rounded-[4px] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
            >
              Curriculum Vitae (PDF)
            </button>
          </div>
        </div>

        {/* Tab Controls: Clean Editorial Tabs */}
        <div 
          role="tablist" 
          aria-label="Experience and credentials tabs"
          className="flex items-center gap-2 border-b border-[#EAEAEA] mb-12"
        >
          {tabs.map((tab, idx) => (
            <React.Fragment key={tab.key}>
              {idx > 0 && <span className="text-[#D0D0CE] pb-3 font-mono" aria-hidden="true">/</span>}
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
                    ? 'border-[#111111] text-[#111111] font-medium'
                    : 'border-transparent text-[#787774] hover:text-[#111111]'
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
            className="divide-y divide-[#EAEAEA] focus:outline-none"
            tabIndex={0}
          >
            {CAREER_HISTORY.map((exp, idx) => (
              <div
                key={idx}
                className="py-8 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
              >
                <div className="md:col-span-4 space-y-1">
                  <div className="text-xs font-mono text-[#787774]">
                    {exp.period}
                  </div>
                  <h3 className="text-base font-semibold text-[#111111]">
                    {exp.role}
                  </h3>
                  <div className="text-xs text-[#787774] font-mono">
                    {exp.organization} · {exp.location}
                  </div>
                </div>

                <div className="md:col-span-8">
                  <ul className="space-y-2">
                    {exp.highlights.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2F3437] leading-[1.6]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#111111] shrink-0 mt-2" aria-hidden="true" />
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
            className="grid grid-cols-1 md:grid-cols-2 gap-8 focus:outline-none"
            tabIndex={0}
          >
            <div className="bg-[#FFFFFF] border border-[#EAEAEA] rounded-[8px] p-6 sm:p-8 space-y-5">
              <h3 className="font-serif text-xl font-medium text-[#111111] pb-2 border-b border-[#EAEAEA]">
                Certifications &amp; Clearances
              </h3>
              <div className="space-y-4">
                {MOLLY_PROFILE.certifications.map((cert, i) => (
                  <div key={i} className="space-y-1">
                    <div className="text-sm font-semibold text-[#111111]">
                      {cert.name}
                    </div>
                    <div className="text-xs text-[#787774] font-mono flex items-center gap-2">
                      <span>{cert.issuer}</span>
                      <span className="text-[#D0D0CE]" aria-hidden="true">/</span>
                      <span className="text-[#346538] font-medium">{cert.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#FFFFFF] border border-[#EAEAEA] rounded-[8px] p-6 sm:p-8 space-y-5">
              <h3 className="font-serif text-xl font-medium text-[#111111] pb-2 border-b border-[#EAEAEA]">
                Academic Degrees
              </h3>
              <div className="space-y-4">
                {MOLLY_PROFILE.education.map((edu, i) => (
                  <div key={i} className="space-y-1">
                    <div className="text-sm font-semibold text-[#111111]">
                      {edu.degree}
                    </div>
                    <div className="text-xs text-[#787774]">
                      {edu.institution} · {edu.location} ({edu.year})
                    </div>
                    {edu.notes && (
                      <div className="text-xs text-[#787774] font-mono mt-0.5">
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
            <h3 className="font-serif text-xl font-medium text-[#111111] pb-2 border-b border-[#EAEAEA]">
              Laboratory &amp; Department of Energy Recognition
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {AWARDS.map((award, i) => (
                <div key={i} className="p-5 bg-[#FFFFFF] border border-[#EAEAEA] rounded-[8px] space-y-1.5 transition-all duration-200 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <div className="text-sm font-semibold text-[#111111]">
                    {award.title}
                  </div>
                  <div className="text-xs text-[#787774]">
                    {award.organization}
                  </div>
                  <div className="text-xs font-mono font-medium text-[#956400]">
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
