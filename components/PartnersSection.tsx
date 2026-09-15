"use client";

import React from "react";
import AsciiFireBackground from "./AsciiFireBackground";

interface PartnerItem {
  name: string;
  sub: string;
  iconSvg?: React.ReactNode;
}

const partnersRow1: PartnerItem[] = [
  {
    name: "Unstop",
    sub: "Platform Partner",
    iconSvg: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5 10 5 10-5-5-2.5-5 2.5z" />
      </svg>
    ),
  },
  {
    name: "Supabase",
    sub: "Cloud Telemetry",
    iconSvg: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M11.9 1.1L1.2 13.9h9.1L8.8 22.9l12-14.8h-9.3l2.4-7z" />
      </svg>
    ),
  },
  {
    name: "GitHub Education",
    sub: "Dev Ecosystem",
    iconSvg: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    name: "Postman",
    sub: "API Platform",
    iconSvg: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.93V11a1 1 0 0 0-2 0v5.93A8 8 0 0 1 4.07 13H10a1 1 0 0 0 0-2H4.07A8 8 0 0 1 11 4.07V10a1 1 0 0 0 2 0V4.07A8 8 0 0 1 19.93 11H14a1 1 0 0 0 0 2h5.93A8 8 0 0 1 13 16.93z" />
      </svg>
    ),
  },
  {
    name: "JetBrains",
    sub: "IDE Tooling",
    iconSvg: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M7 16h4M7 8h2v8" stroke="#000" strokeWidth="2" />
      </svg>
    ),
  },
];

const partnersRow2: PartnerItem[] = [
  {
    name: "Manipal University Jaipur",
    sub: "Academic Host",
    iconSvg: <span className="font-editorial text-lg font-black text-[#e2f952]">MUJ</span>,
  },
  {
    name: "Dept. of CCE",
    sub: "Host Directorate",
    iconSvg: <span className="font-mono text-sm font-black text-[#38bdf8]">CCE</span>,
  },
  {
    name: "ACM Student Chapter",
    sub: "Technical Affiliate",
    iconSvg: <span className="font-mono text-sm font-bold text-white">ACM</span>,
  },
  {
    name: "IEEE ComSoc",
    sub: "Hardware Rig Sponsor",
    iconSvg: <span className="font-mono text-sm font-bold text-[#ff8fab]">IEEE</span>,
  },
  {
    name: "CCE Tech Society",
    sub: "Operations Desk",
    iconSvg: <span className="font-mono text-sm font-bold text-[#fef08a]">CTS</span>,
  },
];

export default function PartnersSection() {
  return (
    <section className="relative w-full min-h-[90vh] py-32 overflow-hidden select-none bg-transparent text-white flex flex-col justify-center">
      {/* 1. Subtle Asciify Fire Simulation Background */}
      <AsciiFireBackground />

      {/* 2. Bold Statement Header */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center mb-20">
        <span className="font-mono text-xs sm:text-sm tracking-[0.45em] uppercase text-amber-400 font-bold block mb-4">
          OUR PARTNERS
        </span>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white font-sans leading-[1.08]">
          POWERED BY <br />
          <span className="text-[#e2f952]">WORLD CLASS TEAMS</span> <br />
          AND COMPANIES!
        </h2>
      </div>

      {/* 3. Horizontal Infinite Marquee Streams */}
      <div className="relative z-10 w-full flex flex-col gap-10">
        
        {/* Row 1: Left to Right */}
        <div className="relative w-full overflow-hidden flex">
          <div className="absolute left-0 top-0 bottom-0 w-28 sm:w-48 bg-gradient-to-r from-[#050208] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-28 sm:w-48 bg-gradient-to-l from-[#050208] to-transparent z-20 pointer-events-none" />

          <div className="flex shrink-0 animate-marquee items-center gap-16 sm:gap-24 whitespace-nowrap py-3">
            {[...partnersRow1, ...partnersRow1, ...partnersRow1].map((partner, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3.5 text-white/75 hover:text-white transition-colors cursor-default group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/80 group-hover:text-[#e2f952] group-hover:border-[#e2f952]/40 transition-all shrink-0">
                  {partner.iconSvg}
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-black tracking-tight font-sans text-white group-hover:text-[#e2f952] transition-colors">
                    {partner.name}
                  </span>
                  <span className="text-[10px] font-mono text-white/40 tracking-widest uppercase">
                    {partner.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="relative w-full overflow-hidden flex">
          <div className="absolute left-0 top-0 bottom-0 w-28 sm:w-48 bg-gradient-to-r from-[#050208] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-28 sm:w-48 bg-gradient-to-l from-[#050208] to-transparent z-20 pointer-events-none" />

          <div className="flex shrink-0 animate-marquee-reverse items-center gap-16 sm:gap-24 whitespace-nowrap py-3">
            {[...partnersRow2, ...partnersRow2, ...partnersRow2].map((partner, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3.5 text-white/75 hover:text-white transition-colors cursor-default group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/80 group-hover:text-[#38bdf8] group-hover:border-[#38bdf8]/40 transition-all shrink-0">
                  {partner.iconSvg}
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-black tracking-tight font-sans text-white group-hover:text-[#38bdf8] transition-colors">
                    {partner.name}
                  </span>
                  <span className="text-[10px] font-mono text-white/40 tracking-widest uppercase">
                    {partner.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 4. Link */}
      <div className="relative z-10 mt-20 text-center font-mono text-xs text-white/40">
        <span>INTERESTED IN PARTNERING WITH CCE FOR HYPNEXIS &apos;26? </span>
        <a
          href="mailto:cce.hypnexis@jaipur.manipal.edu?subject=Sponsorship%20Inquiry%20-%20Hypnexis%202026"
          className="text-[#e2f952] hover:underline font-bold ml-1"
        >
          CONNECT WITH THE CCE DIRECTORATE &rarr;
        </a>
      </div>
    </section>
  );
}