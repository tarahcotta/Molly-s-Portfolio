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
    <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-stone-800/80">
          <div>
            <span className="text-base font-bold text-stone-100">
              {MOLLY_PROFILE.name}, {MOLLY_PROFILE.credentials}
            </span>
            <p className="text-xs text-stone-400 mt-0.5">
              Research Portfolio &amp; Project Management Leader · Lakewood / Golden, CO
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-stone-400">
            <a
              href="#projects"
              className="hover:text-stone-200 transition-colors"
            >
              Featured Projects
            </a>
            <a
              href="#philosophy"
              className="hover:text-stone-200 transition-colors"
            >
              Philosophy
            </a>
            <a
              href="#experience"
              className="hover:text-stone-200 transition-colors"
            >
              Experience
            </a>
            <a
              href={MOLLY_PROFILE.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-stone-200 transition-colors"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>
            <button
              onClick={onOpenResume}
              className="hover:text-stone-200 transition-colors cursor-pointer"
            >
              Resume
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Molly Hames. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-stone-400 hover:text-stone-200 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
