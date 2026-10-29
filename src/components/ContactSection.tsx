import React, { useState } from 'react';
import { MOLLY_PROFILE } from '../data/portfolioData';
import { Mail, ArrowUpRight, Copy, Check } from 'lucide-react';

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
    <section id="contact" aria-labelledby="contact-heading" className="py-16 md:py-24 bg-[#fcfbf9] border-b border-[#e5e3df]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#73716b]">
              Direct Communication
            </div>
            <h2 id="contact-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#16181b]" style={{ textWrap: 'balance' }}>
              Initiate a Dialogue
            </h2>
            <p className="text-sm sm:text-base text-[#373a3e] leading-relaxed max-w-xl">
              Whether you are preparing a high-visibility scientific solicitation, aligning complex multidisciplinary programs, or evaluating operational structure across national laboratories, I welcome direct conversation.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={MOLLY_PROFILE.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Molly Hames on LinkedIn (opens in new tab)"
                className="inline-flex items-center gap-1.5 min-h-[44px] px-4 py-2 text-xs font-mono font-medium uppercase tracking-wider text-white bg-[#14294a] hover:bg-[#0f203b] rounded-xs transition-colors shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14294a]"
              >
                <span>Connect via LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>

              <a
                href={`mailto:${MOLLY_PROFILE.email}`}
                aria-label={`Send direct email to ${MOLLY_PROFILE.email}`}
                className="inline-flex items-center gap-1.5 min-h-[44px] px-4 py-2 text-xs font-mono font-medium uppercase tracking-wider text-[#16181b] bg-white hover:bg-[#f2efe9] border border-[#d2cec5] rounded-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14294a]"
              >
                <Mail className="w-3.5 h-3.5 text-[#73716b]" aria-hidden="true" />
                <span>Send Direct Email</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 min-h-[44px] px-3.5 py-2 text-xs font-mono font-medium uppercase tracking-wider text-[#5a5853] hover:text-[#16181b] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14294a]"
              >
                <span>Curriculum Vitae</span>
              </button>
            </div>

            {/* Screen reader live notification for copy action */}
            <div role="status" aria-live="polite" className="sr-only">
              {copied ? "Email address copied to clipboard." : ""}
            </div>
          </div>

          {/* Right Column: Architectural Ledger Table */}
          <div className="lg:col-span-5 bg-white p-6 border border-[#e5e3df] shadow-2xs space-y-4">
            <div className="text-[11px] font-mono font-semibold uppercase tracking-widest text-[#73716b] border-b border-[#e5e3df] pb-2">
              Official Channels
            </div>

            <div className="divide-y divide-[#f2efe9] text-xs sm:text-sm">
              <div className="py-2.5 flex items-center justify-between gap-4">
                <span className="text-[#73716b] font-mono text-xs">LinkedIn</span>
                <a
                  href={MOLLY_PROFILE.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Molly Hames LinkedIn Profile (opens in new tab)"
                  className="font-medium text-[#16181b] hover:text-[#14294a] hover:underline flex items-center gap-1 py-1"
                >
                  <span>{MOLLY_PROFILE.linkedInDisplay}</span>
                  <ArrowUpRight className="w-3 h-3 text-[#73716b]" aria-hidden="true" />
                </a>
              </div>

              <div className="py-2.5 flex items-center justify-between gap-4">
                <span className="text-[#73716b] font-mono text-xs">Email</span>
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${MOLLY_PROFILE.email}`}
                    className="font-mono text-[#16181b] hover:underline py-1"
                  >
                    {MOLLY_PROFILE.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="min-w-[36px] min-h-[36px] p-1.5 text-[#73716b] hover:text-[#16181b] transition-colors cursor-pointer flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14294a]"
                    title="Copy email address"
                    aria-label="Copy email address to clipboard"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" /> : <Copy className="w-3.5 h-3.5" aria-hidden="true" />}
                  </button>
                </div>
              </div>

              <div className="py-2.5 flex items-center justify-between gap-4">
                <span className="text-[#73716b] font-mono text-xs">Phone</span>
                <a
                  href={`tel:${MOLLY_PROFILE.phone.replace(/[^0-9]/g, '')}`}
                  className="font-mono text-[#16181b] hover:underline py-1"
                >
                  {MOLLY_PROFILE.phone}
                </a>
              </div>

              <div className="py-2.5 flex items-center justify-between gap-4">
                <span className="text-[#73716b] font-mono text-xs">Jurisdiction</span>
                <span className="text-[#16181b] font-mono text-xs">{MOLLY_PROFILE.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
