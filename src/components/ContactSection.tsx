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
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#fcfbf9] border-b border-[#e5e3df]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#73716b]">
              Direct Communication
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#16181b]" style={{ textWrap: 'balance' }}>
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
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-medium uppercase tracking-wider text-white bg-[#14294a] hover:bg-[#0f203b] rounded-xs transition-colors shadow-2xs"
              >
                <span>Connect via LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={`mailto:${MOLLY_PROFILE.email}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-medium uppercase tracking-wider text-[#16181b] bg-white hover:bg-[#f2efe9] border border-[#d2cec5] rounded-xs transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#73716b]" />
                <span>Send Direct Email</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-medium uppercase tracking-wider text-[#5a5853] hover:text-[#16181b] transition-colors cursor-pointer"
              >
                <span>Curriculum Vitae</span>
              </button>
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
                  className="font-medium text-[#16181b] hover:text-[#14294a] hover:underline flex items-center gap-1"
                >
                  <span>{MOLLY_PROFILE.linkedInDisplay}</span>
                  <ArrowUpRight className="w-3 h-3 text-[#73716b]" />
                </a>
              </div>

              <div className="py-2.5 flex items-center justify-between gap-4">
                <span className="text-[#73716b] font-mono text-xs">Email</span>
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${MOLLY_PROFILE.email}`}
                    className="font-mono text-[#16181b] hover:underline"
                  >
                    {MOLLY_PROFILE.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1 text-[#73716b] hover:text-[#16181b] transition-colors cursor-pointer"
                    title="Copy email"
                    aria-label="Copy email"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="py-2.5 flex items-center justify-between gap-4">
                <span className="text-[#73716b] font-mono text-xs">Phone</span>
                <a
                  href={`tel:${MOLLY_PROFILE.phone.replace(/[^0-9]/g, '')}`}
                  className="font-mono text-[#16181b] hover:underline"
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
