"use client";

import React from "react";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

interface ContactLead {
  role: string;
  name: string;
  phone: string;
  email: string;
}

const convenors: ContactLead[] = [
  {
    role: "CONVENOR",
    name: "Madhurjya Kakati",
    phone: "+91 88220 73927",
    email: "madhurjya.kakati@outlook.com",
  },
  {
    role: "CONVENOR",
    name: "Akul Chitkara",
    phone: "+91 80762 29840",
    email: "akulchitkaraakul@gmail.com",
  },
];

export default function ContactSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between py-16 sm:py-24 px-4 sm:px-8 lg:px-12 overflow-hidden select-none bg-[#030206] text-white">
      {/* 1. FULL-VIEWPORT BRUTALIST STATEMENT */}
      <div className="w-full my-auto py-10 sm:py-16 flex flex-col justify-center">
        <h2 className="w-full text-[14vw] sm:text-[13.5vw] font-black uppercase tracking-tighter leading-[0.82] text-white font-sans text-left">
          READY TO <br />
          BUILD <br />
          THE <br />
          <span className="font-editorial italic font-normal text-[#38bdf8] tracking-normal">
            FUTURE ?
          </span> <br />
        </h2>
      </div>

      {/* 2. CONTACT REGISTRY (CONVENORS + GENERAL ENQUIRIES SIDE-BY-SIDE) */}
      <div className="w-full pt-10 border-t border-white/15 font-mono">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          
          {/* Convenors Columns */}
          {convenors.map((lead) => (
            <div key={lead.name} className="lg:col-span-3 space-y-2">
              <span className="text-[10px] text-[#e2f952] font-bold tracking-[0.25em] uppercase block">
                {lead.role}
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-sans tracking-tight text-white">
                {lead.name}
              </h3>
              <div className="space-y-1 text-xs text-white/60">
                <a
                  href={`tel:${lead.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-white/40" />
                  <span>{lead.phone}</span>
                </a>
                <a
                  href={`mailto:${lead.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors truncate"
                >
                  <Mail className="w-3.5 h-3.5 text-white/40" />
                  <span className="truncate">{lead.email}</span>
                </a>
              </div>
            </div>
          ))}

          {/* General Enquiries Placed Right Beside Convenors */}
          <div className="lg:col-span-3 space-y-2">
            <span className="text-[10px] text-[#38bdf8] font-bold tracking-[0.25em] uppercase block">
              GENERAL ENQUIRIES
            </span>
            <a
              href="mailto:hypnexis2026@muj.manipal.edu"
              className="text-base sm:text-lg font-bold tracking-tight text-white hover:text-[#38bdf8] transition-colors inline-flex items-center gap-1.5 break-all"
            >
              hypnexis2026@muj.manipal.edu
              <ArrowUpRight className="w-4 h-4 text-white/50 shrink-0" />
            </a>
            <p className="text-xs text-white/40">Official communications desk</p>
          </div>

          {/* Institutional Label */}
          <div className="lg:col-span-3 flex flex-col justify-start lg:items-end text-left lg:text-right space-y-1">
            <span className="text-xs font-bold uppercase text-white tracking-wider">
              DEPARTMENT OF COMPUTER &amp; COMMUNICATION ENGINEERING
            </span>
            <span className="text-[11px] text-white/40">
              MANIPAL UNIVERSITY JAIPUR • RAJASTHAN, INDIA
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}