import React, { useState } from 'react';
import { MOLLY_PROFILE } from '../data/portfolioData';
import { Mail, Phone, MapPin, ArrowUpRight, Copy, Check, FileText } from 'lucide-react';

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
    <section id="contact" className="py-16 md:py-24 bg-stone-900 text-stone-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Note */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-400 font-mono">
              Initiate a Conversation
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white" style={{ textWrap: 'balance' }}>
              Let&apos;s Connect &amp; Collaborate
            </h2>
            <p className="text-base text-stone-300 leading-relaxed max-w-xl">
              Whether you are looking to strengthen research portfolio delivery, align complex multi-team initiatives, or design sustainable systems that eliminate administrative drag, I welcome the opportunity to connect.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={MOLLY_PROFILE.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-stone-900 bg-white hover:bg-stone-100 rounded-lg transition-colors shadow-xs"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-4 h-4 text-stone-700" />
              </a>

              <a
                href={`mailto:${MOLLY_PROFILE.email}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-stone-800 hover:bg-stone-700 border border-stone-700 rounded-lg transition-colors"
              >
                <Mail className="w-4 h-4 text-stone-300" />
                <span>Send Email</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-stone-300 hover:text-white transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Resume</span>
              </button>
            </div>
          </div>

          {/* Right Column: Contact Cards */}
          <div className="lg:col-span-5 bg-stone-800/80 rounded-2xl p-6 sm:p-7 border border-stone-700/80 space-y-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-400 font-mono">
              Direct Contact Details
            </div>

            <div className="space-y-4 text-sm">
              {/* LinkedIn */}
              <div className="flex items-start justify-between gap-3 p-3 rounded-xl bg-stone-900/60 border border-stone-700/60">
                <div className="space-y-0.5">
                  <span className="text-xs text-stone-400">LinkedIn</span>
                  <div>
                    <a
                      href={MOLLY_PROFILE.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-white hover:text-stone-200 underline decoration-stone-500 underline-offset-4 flex items-center gap-1"
                    >
                      <span>{MOLLY_PROFILE.linkedInDisplay}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start justify-between gap-3 p-3 rounded-xl bg-stone-900/60 border border-stone-700/60">
                <div className="space-y-0.5">
                  <span className="text-xs text-stone-400">Email</span>
                  <div>
                    <a
                      href={`mailto:${MOLLY_PROFILE.email}`}
                      className="font-mono text-white hover:text-stone-200"
                    >
                      {MOLLY_PROFILE.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 text-stone-400 hover:text-white bg-stone-800 hover:bg-stone-700 rounded-md transition-colors cursor-pointer shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-start justify-between gap-3 p-3 rounded-xl bg-stone-900/60 border border-stone-700/60">
                <div className="space-y-0.5">
                  <span className="text-xs text-stone-400">Phone</span>
                  <div>
                    <a
                      href={`tel:${MOLLY_PROFILE.phone.replace(/[^0-9]/g, '')}`}
                      className="font-mono text-white hover:text-stone-200"
                    >
                      {MOLLY_PROFILE.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start justify-between gap-3 p-3 rounded-xl bg-stone-900/60 border border-stone-700/60">
                <div className="space-y-0.5">
                  <span className="text-xs text-stone-400">Location</span>
                  <div className="text-stone-200 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-stone-400 shrink-0" />
                    <span>{MOLLY_PROFILE.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
