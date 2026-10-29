import React from 'react';
import { MOLLY_PROFILE } from '../data/portfolioData';
import { ArrowUpIcon, ArrowUpRightIcon } from './Icons';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FBFBFA] text-[#787774] py-12 border-t border-[#EAEAEA]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-[#EAEAEA]">
          <div>
            <span className="text-sm font-semibold text-[#111111]">
              {MOLLY_PROFILE.name}, {MOLLY_PROFILE.credentials}
            </span>
            <p className="text-xs font-mono text-[#787774] mt-0.5">
              Research Portfolio &amp; Program Leadership · Golden, CO
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs font-mono uppercase tracking-wider text-[#787774]">
            <a
              href="#projects"
              className="hover:text-[#111111] transition-colors py-1"
            >
              Portfolios
            </a>
            <a
              href="#philosophy"
              className="hover:text-[#111111] transition-colors py-1"
            >
              Principles
            </a>
            <a
              href="#experience"
              className="hover:text-[#111111] transition-colors py-1"
            >
              Record
            </a>
            <a
              href={MOLLY_PROFILE.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Molly Hames on LinkedIn (opens in new tab)"
              className="inline-flex items-center gap-1 hover:text-[#111111] transition-colors py-1"
            >
              <span>LinkedIn</span>
              <ArrowUpRightIcon className="w-3 h-3 opacity-60" />
            </a>
            <button
              onClick={onOpenResume}
              className="hover:text-[#111111] transition-colors cursor-pointer py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
            >
              CV
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#787774]">
          <div>
            © {new Date().getFullYear()} Molly Hames. Site created by{' '}
            <a
              href="https://www.tarahcotta.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#111111] underline underline-offset-2 hover:opacity-75 transition-opacity inline-flex items-center gap-0.5"
            >
              <span>Tarah Cotta</span>
              <ArrowUpRightIcon className="w-2.5 h-2.5 opacity-60" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to the top of the page"
            className="inline-flex items-center gap-1.5 text-[#787774] hover:text-[#111111] transition-colors cursor-pointer min-h-[44px] px-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
          >
            <span>Top of Page</span>
            <ArrowUpIcon className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
