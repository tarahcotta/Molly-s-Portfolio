import React, { useState } from 'react';
import { MOLLY_PROFILE } from '../data/portfolioData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#fcfbf9]/95 backdrop-blur-xs border-b border-[#e5e3df]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
        {/* Zone 1: Distinctive Brand Mark */}
        <a 
          href="#top" 
          className="group inline-flex items-baseline gap-2 whitespace-nowrap shrink-0"
        >
          <span className="font-serif text-lg font-bold tracking-tight text-[#16181b] group-hover:text-[#14294a] transition-colors">
            {MOLLY_PROFILE.name}
          </span>
          <span className="text-[11px] font-mono tracking-widest uppercase text-[#73716b]">
            {MOLLY_PROFILE.credentials}
          </span>
        </a>

        {/* Zone 2: 4 Single-Line Text Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide uppercase text-[#5a5853]">
          <a 
            href="#projects" 
            className="hover:text-[#16181b] transition-colors whitespace-nowrap shrink-0"
          >
            Portfolios
          </a>
          <a 
            href="#philosophy" 
            className="hover:text-[#16181b] transition-colors whitespace-nowrap shrink-0"
          >
            Principles
          </a>
          <a 
            href="#experience" 
            className="hover:text-[#16181b] transition-colors whitespace-nowrap shrink-0"
          >
            Record
          </a>
          <a 
            href="#contact" 
            className="hover:text-[#16181b] transition-colors whitespace-nowrap shrink-0"
          >
            Contact
          </a>
          <a 
            href={MOLLY_PROFILE.linkedInUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#5a5853] hover:text-[#16181b] transition-colors whitespace-nowrap shrink-0"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="hidden md:flex items-center shrink-0">
          <button
            onClick={onOpenResume}
            className="px-3.5 py-1.5 text-xs font-mono font-medium tracking-wider uppercase text-[#16181b] bg-white hover:bg-[#f2efe9] active:bg-[#e8e4dc] border border-[#d2cec5] rounded-xs transition-colors cursor-pointer shadow-2xs"
          >
            Curriculum Vitae
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="px-2.5 py-1 text-xs font-mono uppercase text-[#16181b] border border-[#d2cec5] rounded-xs"
            aria-label="View Resume"
          >
            CV
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#5a5853] hover:text-[#16181b] rounded-xs"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#e5e3df] bg-[#fcfbf9] px-6 py-4 space-y-3">
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-xs uppercase tracking-wider font-medium text-[#16181b] py-1"
          >
            Portfolios
          </a>
          <a
            href="#philosophy"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-xs uppercase tracking-wider font-medium text-[#16181b] py-1"
          >
            Principles
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-xs uppercase tracking-wider font-medium text-[#16181b] py-1"
          >
            Record
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-xs uppercase tracking-wider font-medium text-[#16181b] py-1"
          >
            Contact
          </a>
          <a
            href={MOLLY_PROFILE.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs uppercase tracking-wider font-medium text-[#16181b] py-1"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#73716b]" />
          </a>
        </div>
      )}
    </header>
  );
};
