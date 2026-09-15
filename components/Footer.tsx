"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#030206] text-white/60 font-mono text-xs select-none">
      <div className="max-w-[96vw] 2xl:max-w-[1700px] mx-auto px-4 sm:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Department Attribution */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-bold text-white tracking-widest uppercase">
            HYPNEXIS &apos;26
          </span>
          <span className="hidden sm:inline text-white/20">•</span>
          <span className="text-white/50">
            Dept. of Computer &amp; Communication Engineering, Manipal University Jaipur
          </span>
        </div>

        {/* Right: Quick Links */}
        <div className="flex items-center gap-6 text-white/70">
          <Link
            href="https://unstop.com/competitions/hypnexis-2026-manipal-university-mu-jaipur-1711890"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#e2f952] transition-colors inline-flex items-center gap-1"
          >
            <span>Unstop</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
          <Link
            href="https://jaipur.manipal.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#38bdf8] transition-colors"
          >
            MUJ Portal
          </Link>
          <a href="#top" className="hover:text-white transition-colors">
            Back to Top ↑
          </a>
        </div>

      </div>
    </footer>
  );
}