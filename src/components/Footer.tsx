import React from 'react';
import { MOLLY_PROFILE } from '../data/portfolioData';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#fcfbf9] text-[#73716b] py-10 border-t border-[#e5e3df]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-[#e5e3df]">
          <div>
            <span className="text-sm font-bold text-[#16181b]">
              {MOLLY_PROFILE.name}, {MOLLY_PROFILE.credentials}
            </span>
            <p className="text-xs font-mono text-[#73716b] mt-0.5">
              Research Portfolio &amp; Program Management Leader · Golden, CO
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono uppercase tracking-wider text-[#5a5853]">
            <a
              href="#projects"
              className="hover:text-[#16181b] transition-colors py-1"
            >
              Portfolios
            </a>
            <a
              href="#philosophy"
              className="hover:text-[#16181b] transition-colors py-1"
            >
              Principles
            </a>
            <a
              href="#experience"
              className="hover:text-[#16181b] transition-colors py-1"
            >
              Record
            </a>
            <a
              href={MOLLY_PROFILE.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Molly Hames on LinkedIn (opens in new tab)"
              className="inline-flex items-center gap-1 hover:text-[#16181b] transition-colors py-1"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" aria-hidden="true" />
            </a>
            <button
              onClick={onOpenResume}
              className="hover:text-[#16181b] transition-colors cursor-pointer py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14294a]"
            >
              CV
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8c8880]">
          <div>
            © {new Date().getFullYear()} Molly Hames. National Laboratory of the Rockies portfolio.
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to the top of the page"
            className="inline-flex items-center gap-1.5 text-[#5a5853] hover:text-[#16181b] transition-colors cursor-pointer min-h-[44px] px-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14294a]"
          >
            <span>Top of Page</span>
            <ArrowUp className="w-3 h-3" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};
