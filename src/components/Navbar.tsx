import React, { useState } from 'react';
import { MOLLY_PROFILE } from '../data/portfolioData';
import { FileText, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-stone-50/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a 
          href="#top" 
          className="text-lg font-bold tracking-tight text-stone-900 whitespace-nowrap shrink-0 hover:text-stone-700 transition-colors"
        >
          {MOLLY_PROFILE.name}
          <span className="ml-1.5 text-xs font-semibold text-stone-500 uppercase tracking-wider">
            {MOLLY_PROFILE.credentials}
          </span>
        </a>

        {/* Zone 2: 4 Clean Single-Line Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
          <a 
            href="#projects" 
            className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0"
          >
            Featured Work
          </a>
          <a 
            href="#philosophy" 
            className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0"
          >
            Philosophy
          </a>
          <a 
            href="#experience" 
            className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0"
          >
            Experience
          </a>
          <a 
            href="#contact" 
            className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0"
          >
            Connect
          </a>
          <a 
            href={MOLLY_PROFILE.linkedInUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-stone-600 hover:text-stone-950 transition-colors whitespace-nowrap shrink-0"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="hidden md:flex items-center shrink-0">
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-stone-900 bg-stone-100 hover:bg-stone-200 active:bg-stone-300 border border-stone-300 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-stone-700" />
            <span>View Resume</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="p-2 text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors text-xs font-medium border border-stone-200"
            aria-label="View Resume"
          >
            Resume
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-700 hover:text-stone-900 rounded-lg"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-stone-50 px-6 py-4 space-y-3">
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-stone-700 hover:text-stone-950 py-1"
          >
            Featured Work
          </a>
          <a
            href="#philosophy"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-stone-700 hover:text-stone-950 py-1"
          >
            Philosophy
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-stone-700 hover:text-stone-950 py-1"
          >
            Experience
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-stone-700 hover:text-stone-950 py-1"
          >
            Connect
          </a>
          <a
            href={MOLLY_PROFILE.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-stone-700 hover:text-stone-950 py-1"
          >
            <span>LinkedIn Profile</span>
            <ArrowUpRight className="w-4 h-4 text-stone-400" />
          </a>
        </div>
      )}
    </header>
  );
};
