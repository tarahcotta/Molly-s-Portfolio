import React, { useState, useEffect } from 'react';
import { MOLLY_PROFILE } from '../data/portfolioData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('top');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['top', 'projects', 'philosophy', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
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
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Clean Sans with Mono Badge) */}
        <a 
          href="#top" 
          className="group inline-flex items-baseline gap-2 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14294a] focus-visible:ring-offset-2 rounded-xs"
          aria-label="Molly Hames, PMP — Back to top"
        >
          <span className="text-base font-bold tracking-tight text-[#16181b] group-hover:text-[#14294a] transition-colors">
            {MOLLY_PROFILE.name}
          </span>
          <span className="text-[11px] font-mono tracking-widest uppercase text-[#73716b]">
            {MOLLY_PROFILE.credentials}
          </span>
        </a>

        {/* Zone 2: 4 Single-Line Text Links with Scrollspy Status Indication */}
        <nav 
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-8 text-xs font-mono font-medium tracking-wide uppercase"
        >
          <a 
            href="#projects" 
            className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
              activeSection === 'projects'
                ? 'border-[#14294a] text-[#14294a] font-bold'
                : 'border-transparent text-[#5a5853] hover:text-[#16181b]'
            }`}
          >
            Portfolios
          </a>
          <a 
            href="#philosophy" 
            className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
              activeSection === 'philosophy'
                ? 'border-[#14294a] text-[#14294a] font-bold'
                : 'border-transparent text-[#5a5853] hover:text-[#16181b]'
            }`}
          >
            Principles
          </a>
          <a 
            href="#experience" 
            className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
              activeSection === 'experience'
                ? 'border-[#14294a] text-[#14294a] font-bold'
                : 'border-transparent text-[#5a5853] hover:text-[#16181b]'
            }`}
          >
            Record
          </a>
          <a 
            href="#contact" 
            className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
              activeSection === 'contact'
                ? 'border-[#14294a] text-[#14294a] font-bold'
                : 'border-transparent text-[#5a5853] hover:text-[#16181b]'
            }`}
          >
            Contact
          </a>
          <a 
            href={MOLLY_PROFILE.linkedInUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Molly Hames on LinkedIn (opens in new tab)"
            className="inline-flex items-center gap-1 text-[#5a5853] hover:text-[#16181b] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent"
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

        {/* Mobile menu toggle with >=44px touch target */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="min-h-[44px] px-3 py-2 text-xs font-mono uppercase text-[#16181b] border border-[#d2cec5] rounded-xs flex items-center justify-center cursor-pointer"
            aria-label="View Curriculum Vitae"
          >
            CV
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-w-[44px] min-h-[44px] p-2.5 text-[#5a5853] hover:text-[#16181b] rounded-xs flex items-center justify-center cursor-pointer"
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
            className={`block text-xs uppercase tracking-wider font-mono font-medium min-h-[44px] flex items-center ${
              activeSection === 'projects' ? 'text-[#14294a] font-bold' : 'text-[#16181b]'
            }`}
          >
            Portfolios
          </a>
          <a
            href="#philosophy"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-xs uppercase tracking-wider font-mono font-medium min-h-[44px] flex items-center ${
              activeSection === 'philosophy' ? 'text-[#14294a] font-bold' : 'text-[#16181b]'
            }`}
          >
            Principles
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-xs uppercase tracking-wider font-mono font-medium min-h-[44px] flex items-center ${
              activeSection === 'experience' ? 'text-[#14294a] font-bold' : 'text-[#16181b]'
            }`}
          >
            Record
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-xs uppercase tracking-wider font-mono font-medium min-h-[44px] flex items-center ${
              activeSection === 'contact' ? 'text-[#14294a] font-bold' : 'text-[#16181b]'
            }`}
          >
            Contact
          </a>
          <a
            href={MOLLY_PROFILE.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Molly Hames on LinkedIn (opens in new tab)"
            className="flex items-center gap-1.5 text-xs uppercase tracking-wider font-mono font-medium text-[#16181b] min-h-[44px]"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#73716b]" aria-hidden="true" />
          </a>
        </nav>
      )}
    </header>
  );
};
