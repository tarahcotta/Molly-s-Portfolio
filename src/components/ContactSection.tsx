import React, { useState } from 'react';
import { MOLLY_PROFILE } from '../data/portfolioData';
import { MailIcon, CopyIcon, CheckIcon, ArrowUpRightIcon } from './Icons';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(MOLLY_PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-20 md:py-28 bg-[#FBFBFA] border-b border-[#EAEAEA]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#787774]">
              Direct Contact
            </div>
            <h2 id="contact-heading" className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium tracking-[-0.025em] text-[#111111]" style={{ textWrap: 'balance' }}>
              Initiate a Dialogue
            </h2>
            <p className="text-sm text-[#2F3437] leading-[1.6] max-w-xl">
              Whether you are preparing a high-visibility scientific solicitation, aligning complex multidisciplinary programs, or evaluating operational structure across national laboratories, I welcome direct conversation.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={MOLLY_PROFILE.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Molly Hames on LinkedIn (opens in new tab)"
                className="inline-flex items-center gap-1.5 min-h-[42px] px-4 py-2 text-xs font-mono uppercase tracking-wider text-[#FFFFFF] bg-[#111111] hover:bg-[#333333] active:scale-[0.98] rounded-[4px] transition-all shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
              >
                <span>Connect via LinkedIn</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
              </a>

              <a
                href={`mailto:${MOLLY_PROFILE.email}`}
                aria-label={`Send direct email to ${MOLLY_PROFILE.email}`}
                className="inline-flex items-center gap-1.5 min-h-[42px] px-4 py-2 text-xs font-mono uppercase tracking-wider text-[#111111] bg-[#FFFFFF] hover:bg-[#F7F6F3] active:scale-[0.98] border border-[#EAEAEA] rounded-[4px] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
              >
                <MailIcon className="w-3.5 h-3.5 text-[#787774]" />
                <span>Send Direct Email</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 min-h-[42px] px-3.5 py-2 text-xs font-mono uppercase tracking-wider text-[#787774] hover:text-[#111111] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
              >
                <span>Curriculum Vitae</span>
                <kbd className="hidden sm:inline-block">PDF</kbd>
              </button>
            </div>

            {/* Screen reader live notification for copy action */}
            <div role="status" aria-live="polite" className="sr-only">
              {copied ? "Email address copied to clipboard." : ""}
            </div>
          </div>

          {/* Right Column: Bento Channel Table */}
          <div className="lg:col-span-5 bg-[#FFFFFF] p-6 border border-[#EAEAEA] rounded-[8px] space-y-4 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#787774] border-b border-[#EAEAEA] pb-2">
              Official Channels
            </div>

            <div className="divide-y divide-[#EAEAEA] text-xs sm:text-sm">
              <div className="py-2.5 flex items-center justify-between gap-4">
                <span className="text-[#787774] font-mono text-xs">LinkedIn</span>
                <a
                  href={MOLLY_PROFILE.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Molly Hames LinkedIn Profile (opens in new tab)"
                  className="font-medium text-[#111111] hover:underline flex items-center gap-1 py-1"
                >
                  <span>{MOLLY_PROFILE.linkedInDisplay}</span>
                  <ArrowUpRightIcon className="w-3 h-3 text-[#787774]" />
                </a>
              </div>

              <div className="py-2.5 flex items-center justify-between gap-4">
                <span className="text-[#787774] font-mono text-xs">Email</span>
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${MOLLY_PROFILE.email}`}
                    className="font-mono text-[#111111] hover:underline py-1"
                  >
                    {MOLLY_PROFILE.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="min-w-[34px] min-h-[34px] p-1.5 text-[#787774] hover:text-[#111111] hover:bg-[#F7F6F3] rounded-[4px] border border-[#EAEAEA] transition-colors cursor-pointer flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
                    title="Copy email address"
                    aria-label="Copy email address to clipboard"
                  >
                    {copied ? <CheckIcon className="w-3.5 h-3.5 text-[#346538]" /> : <CopyIcon className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="py-2.5 flex items-center justify-between gap-4">
                <span className="text-[#787774] font-mono text-xs">Phone</span>
                <a
                  href={`tel:${MOLLY_PROFILE.phone.replace(/[^0-9]/g, '')}`}
                  className="font-mono text-[#111111] hover:underline py-1"
                >
                  {MOLLY_PROFILE.phone}
                </a>
              </div>

              <div className="py-2.5 flex items-center justify-between gap-4">
                <span className="text-[#787774] font-mono text-xs">Jurisdiction</span>
                <span className="text-[#111111] font-mono text-xs">{MOLLY_PROFILE.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
