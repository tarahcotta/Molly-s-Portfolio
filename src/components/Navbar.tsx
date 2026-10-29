import React, { useState, useEffect } from 'react';
import { MOLLY_PROFILE } from '../data/portfolioData';
import { MenuIcon, CloseIcon } from './Icons';

interface NavbarProps {
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('top');
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100)));
      }

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection('contact');
        return;
      }

      const sections = ['contact', 'experience', 'philosophy', 'projects', 'top'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          if (scrollPosition >= el.offsetTop) {
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
    <header className="sticky top-0 z-40 bg-[#FBFBFA]/95 backdrop-blur-xs border-b border-[#EAEAEA]">
      <div className="max-w-5xl mx-auto px-6 py-3.5 flex items-center justify-between gap-6">
        {/* Brand Wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <a 
            href="#top" 
            className="group inline-flex items-baseline gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded-xs"
            aria-label="Molly Hames, PMP — Back to top"
          >
            <span className="text-sm font-semibold tracking-tight text-[#111111]">
              {MOLLY_PROFILE.name}
            </span>
            <span className="text-[11px] font-mono tracking-wider uppercase text-[#787774]">
              {MOLLY_PROFILE.credentials}
            </span>
          </a>
        </div>

        {/* Navigation Links */}
        <nav 
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-1 text-xs font-mono uppercase tracking-wider"
        >
          <a 
            href="#projects" 
            aria-current={activeSection === 'projects' ? 'location' : undefined}
            className={`px-2.5 py-1.5 rounded-[4px] transition-all whitespace-nowrap shrink-0 ${
              activeSection === 'projects'
                ? 'bg-[#111111] text-[#FFFFFF] font-medium'
                : 'text-[#787774] hover:text-[#111111] hover:bg-[#F7F6F3]'
            }`}
          >
            Portfolios
          </a>
          <a 
            href="#philosophy" 
            aria-current={activeSection === 'philosophy' ? 'location' : undefined}
            className={`px-2.5 py-1.5 rounded-[4px] transition-all whitespace-nowrap shrink-0 ${
              activeSection === 'philosophy'
                ? 'bg-[#111111] text-[#FFFFFF] font-medium'
                : 'text-[#787774] hover:text-[#111111] hover:bg-[#F7F6F3]'
            }`}
          >
            Principles
          </a>
          <a 
            href="#experience" 
            aria-current={activeSection === 'experience' ? 'location' : undefined}
            className={`px-2.5 py-1.5 rounded-[4px] transition-all whitespace-nowrap shrink-0 ${
              activeSection === 'experience'
                ? 'bg-[#111111] text-[#FFFFFF] font-medium'
                : 'text-[#787774] hover:text-[#111111] hover:bg-[#F7F6F3]'
            }`}
          >
            Record
          </a>
          <a 
            href="#contact" 
            aria-current={activeSection === 'contact' ? 'location' : undefined}
            className={`px-2.5 py-1.5 rounded-[4px] transition-all whitespace-nowrap shrink-0 ${
              activeSection === 'contact'
                ? 'bg-[#111111] text-[#FFFFFF] font-medium'
                : 'text-[#787774] hover:text-[#111111] hover:bg-[#F7F6F3]'
            }`}
          >
            Contact
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-w-[38px] min-h-[38px] p-2 text-[#2F3437] hover:text-[#111111] rounded-[4px] border border-[#EAEAEA] flex items-center justify-center cursor-pointer"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <CloseIcon className="w-4 h-4" /> : <MenuIcon className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav 
          aria-label="Mobile navigation"
          className="md:hidden border-t border-[#EAEAEA] bg-[#FBFBFA] px-6 py-4 space-y-1"
        >
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            aria-current={activeSection === 'projects' ? 'location' : undefined}
            className={`block text-xs uppercase tracking-wider font-mono min-h-[44px] flex items-center px-3 rounded-[4px] ${
              activeSection === 'projects' ? 'bg-[#111111] text-[#FFFFFF] font-medium' : 'text-[#2F3437]'
            }`}
          >
            Portfolios
          </a>
          <a
            href="#philosophy"
            onClick={() => setMobileMenuOpen(false)}
            aria-current={activeSection === 'philosophy' ? 'location' : undefined}
            className={`block text-xs uppercase tracking-wider font-mono min-h-[44px] flex items-center px-3 rounded-[4px] ${
              activeSection === 'philosophy' ? 'bg-[#111111] text-[#FFFFFF] font-medium' : 'text-[#2F3437]'
            }`}
          >
            Principles
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            aria-current={activeSection === 'experience' ? 'location' : undefined}
            className={`block text-xs uppercase tracking-wider font-mono min-h-[44px] flex items-center px-3 rounded-[4px] ${
              activeSection === 'experience' ? 'bg-[#111111] text-[#FFFFFF] font-medium' : 'text-[#2F3437]'
            }`}
          >
            Record
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            aria-current={activeSection === 'contact' ? 'location' : undefined}
            className={`block text-xs uppercase tracking-wider font-mono min-h-[44px] flex items-center px-3 rounded-[4px] ${
              activeSection === 'contact' ? 'bg-[#111111] text-[#FFFFFF] font-medium' : 'text-[#2F3437]'
            }`}
          >
            Contact
          </a>
        </nav>
      )}

      {/* Reading Progress Indicator */}
      <div 
        role="progressbar"
        aria-label="Page reading progress"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        className="w-full h-[1px] bg-transparent overflow-hidden"
      >
        <div 
          className="h-full bg-[#111111] transition-all duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
};
