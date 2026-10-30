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
    <footer className="bg-[var(--bg-canvas)] text-[var(--ink-muted)] py-12 border-t border-[var(--border-color)]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-[var(--border-color)]">
          <div>
            <span className="text-sm font-semibold text-[var(--ink-primary)]">
              {MOLLY_PROFILE.name}, {MOLLY_PROFILE.credentials}
            </span>
            <p className="text-xs font-mono text-[var(--ink-muted)] mt-0.5">
              Research Portfolio &amp; Program Leadership · Golden, CO
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs font-mono uppercase tracking-wider text-[var(--ink-muted)]">
            <a
              href="#projects"
              className="hover:text-[var(--ink-primary)] transition-colors py-1"
            >
              Portfolios
            </a>
            <a
              href="#philosophy"
              className="hover:text-[var(--ink-primary)] transition-colors py-1"
            >
              Principles
            </a>
            <a
              href="#experience"
              className="hover:text-[var(--ink-primary)] transition-colors py-1"
            >
              Record
            </a>
            <a
              href={MOLLY_PROFILE.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Molly Hames on LinkedIn (opens in new tab)"
              className="inline-flex items-center gap-1 hover:text-[var(--ink-primary)] transition-colors py-1"
            >
              <span>LinkedIn</span>
              <ArrowUpRightIcon className="w-3 h-3 opacity-60" />
            </a>
            <button
              onClick={onOpenResume}
              className="hover:text-[var(--ink-primary)] transition-colors cursor-pointer py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink-primary)]"
            >
              CV
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--ink-muted)]">
          <div>
            © {new Date().getFullYear()} Molly Hames. Site created by{' '}
            <a
              href="https://www.tarahcotta.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--ink-primary)] underline underline-offset-2 hover:opacity-75 transition-opacity inline-flex items-center gap-0.5"
            >
              <span>Tarah Cotta</span>
              <ArrowUpRightIcon className="w-2.5 h-2.5 opacity-60" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to the top of the page"
            className="inline-flex items-center gap-1.5 text-[var(--ink-muted)] hover:text-[var(--ink-primary)] transition-colors cursor-pointer min-h-[44px] px-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink-primary)]"
          >
            <span>Top of Page</span>
            <ArrowUpIcon className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
