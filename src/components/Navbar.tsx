import React, { useState, useEffect } from 'react';
import { MOLLY_PROFILE } from '../data/portfolioData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('top');
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const sectionMeta: Record<string, string> = {
    top: 'Overview',
    projects: 'Portfolios',
    philosophy: 'Principles',
    experience: 'Record',
    contact: 'Contact',
  };

  useEffect(() => {
    const handleScroll = () => {
      // Track reading progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollProgress(progress);
      }

      // Immediate bottom check for contact section
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection('contact');
        return;
      }

      // Section position detection
      const sectionIds = ['contact', 'experience', 'philosophy', 'projects', 'top'];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sectionIds) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-[#fcfbf9]/95 backdrop-blur-xs border-b border-[#e5e3df]">
      {/* Target element: header inner container with active section information */}
      <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark + Live Breadcrumb Section Status */}
        <div className="flex items-center gap-3 shrink-0">
          <a 
            href="#top" 
            className="group inline-flex items-baseline gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14294a] focus-visible:ring-offset-2 rounded-xs"
            aria-label="Molly Hames, PMP — Back to top"
          >
            <span className="text-base font-bold tracking-tight text-[#16181b] group-hover:text-[#14294a] transition-colors">
              {MOLLY_PROFILE.name}
            </span>
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#73716b]">
              {MOLLY_PROFILE.credentials}
            </span>
          </a>

          {/* Dynamic Active Section Indicator attached to brand lockup */}
          {activeSection !== 'top' && (
            <div className="flex items-center gap-2 pl-3 border-l border-[#d8d5cd] animate-in fade-in duration-200">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#73716b] hidden sm:inline">
                Section:
              </span>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#14294a] bg-[#edeae3] border border-[#d2cec5] px-2 py-0.5 rounded-xs">
                {sectionMeta[activeSection] || activeSection}
              </span>
            </div>
          )}
        </div>

        {/* Zone 2: 4 Single-Line Text Links with Prominent Active Pill Indication */}
        <nav 
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-2 text-xs font-mono uppercase tracking-wider"
        >
          <a 
            href="#projects" 
            aria-current={activeSection === 'projects' ? 'location' : undefined}
            className={`px-3 py-1.5 rounded-xs transition-all whitespace-nowrap shrink-0 ${
              activeSection === 'projects'
                ? 'bg-[#14294a] text-white font-bold shadow-2xs'
                : 'text-[#5a5853] hover:text-[#16181b] hover:bg-[#f2efe9]'
            }`}
          >
            Portfolios
          </a>
          <a 
            href="#philosophy" 
            aria-current={activeSection === 'philosophy' ? 'location' : undefined}
            className={`px-3 py-1.5 rounded-xs transition-all whitespace-nowrap shrink-0 ${
              activeSection === 'philosophy'
                ? 'bg-[#14294a] text-white font-bold shadow-2xs'
                : 'text-[#5a5853] hover:text-[#16181b] hover:bg-[#f2efe9]'
            }`}
          >
            Principles
          </a>
          <a 
            href="#experience" 
            aria-current={activeSection === 'experience' ? 'location' : undefined}
            className={`px-3 py-1.5 rounded-xs transition-all whitespace-nowrap shrink-0 ${
              activeSection === 'experience'
                ? 'bg-[#14294a] text-white font-bold shadow-2xs'
                : 'text-[#5a5853] hover:text-[#16181b] hover:bg-[#f2efe9]'
            }`}
          >
            Record
          </a>
          <a 
            href="#contact" 
            aria-current={activeSection === 'contact' ? 'location' : undefined}
            className={`px-3 py-1.5 rounded-xs transition-all whitespace-nowrap shrink-0 ${
              activeSection === 'contact'
                ? 'bg-[#14294a] text-white font-bold shadow-2xs'
                : 'text-[#5a5853] hover:text-[#16181b] hover:bg-[#f2efe9]'
            }`}
          >
            Contact
          </a>
          <a 
            href={MOLLY_PROFILE.linkedInUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Molly Hames on LinkedIn (opens in new tab)"
            className="inline-flex items-center gap-1 text-[#5a5853] hover:text-[#16181b] hover:bg-[#f2efe9] px-3 py-1.5 rounded-xs transition-all whitespace-nowrap shrink-0 ml-2"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" aria-hidden="true" />
          </a>
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="hidden md:flex items-center shrink-0">
          <button
            onClick={onOpenResume}
            className="px-3.5 py-1.5 text-xs font-mono font-medium tracking-wider uppercase text-[#16181b] bg-white hover:bg-[#f2efe9] active:bg-[#e8e4dc] border border-[#d2cec5] rounded-xs transition-colors cursor-pointer shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14294a] focus-visible:ring-offset-2"
          >
            Curriculum Vitae
          </button>
        </div>

        {/* Mobile controls & active status */}
        <div className="flex md:hidden items-center gap-2">
          {activeSection !== 'top' && (
            <span className="text-[11px] font-mono font-bold uppercase text-[#14294a] bg-[#edeae3] border border-[#d2cec5] px-2 py-0.5 rounded-xs truncate max-w-[90px]">
              {sectionMeta[activeSection]}
            </span>
          )}

          <button
            onClick={onOpenResume}
            className="min-h-[40px] px-2.5 py-1 text-xs font-mono uppercase text-[#16181b] border border-[#d2cec5] rounded-xs flex items-center justify-center cursor-pointer"
            aria-label="View Curriculum Vitae"
          >
            CV
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-w-[40px] min-h-[40px] p-2 text-[#5a5853] hover:text-[#16181b] rounded-xs flex items-center justify-center cursor-pointer"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav 
          aria-label="Mobile navigation"
          className="md:hidden border-t border-[#e5e3df] bg-[#fcfbf9] px-6 py-4 space-y-1"
        >
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            aria-current={activeSection === 'projects' ? 'location' : undefined}
            className={`block text-xs uppercase tracking-wider font-mono font-medium min-h-[44px] flex items-center px-2 rounded-xs ${
              activeSection === 'projects' ? 'bg-[#14294a] text-white font-bold' : 'text-[#16181b]'
            }`}
          >
            Portfolios
          </a>
          <a
            href="#philosophy"
            onClick={() => setMobileMenuOpen(false)}
            aria-current={activeSection === 'philosophy' ? 'location' : undefined}
            className={`block text-xs uppercase tracking-wider font-mono font-medium min-h-[44px] flex items-center px-2 rounded-xs ${
              activeSection === 'philosophy' ? 'bg-[#14294a] text-white font-bold' : 'text-[#16181b]'
            }`}
          >
            Principles
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            aria-current={activeSection === 'experience' ? 'location' : undefined}
            className={`block text-xs uppercase tracking-wider font-mono font-medium min-h-[44px] flex items-center px-2 rounded-xs ${
              activeSection === 'experience' ? 'bg-[#14294a] text-white font-bold' : 'text-[#16181b]'
            }`}
          >
            Record
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            aria-current={activeSection === 'contact' ? 'location' : undefined}
            className={`block text-xs uppercase tracking-wider font-mono font-medium min-h-[44px] flex items-center px-2 rounded-xs ${
              activeSection === 'contact' ? 'bg-[#14294a] text-white font-bold' : 'text-[#16181b]'
            }`}
          >
            Contact
          </a>
          <a
            href={MOLLY_PROFILE.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Molly Hames on LinkedIn (opens in new tab)"
            className="flex items-center gap-1.5 text-xs uppercase tracking-wider font-mono font-medium text-[#16181b] min-h-[44px] px-2"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#73716b]" aria-hidden="true" />
          </a>
        </nav>
      )}

      {/* Subtle 2px Reading Progress Indicator */}
      <div 
        role="progressbar"
        aria-label="Page reading progress"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        className="w-full h-[2px] bg-transparent overflow-hidden"
      >
        <div 
          className="h-full bg-[#14294a] transition-all duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
};
