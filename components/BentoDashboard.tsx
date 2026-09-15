"use client";

import Link from "next/link";
import { 
  ArrowRight, 
  Trophy, 
  Terminal, 
  Play, 
  CheckCircle2, 
  BedDouble, 
  Utensils 
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BentoDashboard() {
  return (
    <section className="w-full max-w-[96vw] 2xl:max-w-[1700px] mx-auto px-2 sm:px-4 py-12 sm:py-20 flex flex-col lg:flex-row items-stretch gap-6 sm:gap-10">
      
      {/* =========================================================================
          LEFT SPINE: 90° ROTATED EDITORIAL HEADING (TOP TOWARDS LEFT)
          ========================================================================= */}
      <div className="hidden lg:flex flex-col justify-end items-start w-28 shrink-0 relative select-none pl-2">
        <div className="transform -rotate-90 origin-bottom-left whitespace-nowrap mb-6">
          <span className="text-xs font-mono uppercase tracking-[0.4em] text-[#e2f952] block mb-2">
            MANIPAL UNIVERSITY JAIPUR • 36-HOUR AI SPRINT
          </span>
          <h2 className="text-6xl 2xl:text-7xl font-black tracking-tight text-white leading-none font-editorial">
            It&apos;s not hype. It&apos;s{" "}
            <span className="text-[#e2f952] italic font-normal">Hypnexis.</span>
          </h2>
        </div>
      </div>

      {/* Mobile Header fallback */}
      <div className="lg:hidden text-center mb-6">
        <h2 className="text-4xl sm:text-6xl font-black text-white font-editorial">
          It&apos;s not hype. <br />
          It&apos;s <span className="text-[#e2f952] italic font-normal">Hypnexis.</span>
        </h2>
        <p className="text-sm text-white/70 mt-2 font-mono">
          Manipal University Jaipur&apos;s premier 36-Hour AI Offline Hackathon.
        </p>
      </div>

      {/* =========================================================================
          RIGHT: WARM OFF-WHITE BENTO GRID (#EBEAE5)
          ========================================================================= */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 text-[#141518]">
        
        {/* ROW 1 - LEFT: WIDE CARD (7 cols) - Phase 1 */}
        <div className="md:col-span-7 bg-[#EBEAE5] border border-[#d6d4cc] rounded-[32px] p-8 sm:p-12 flex flex-col justify-between shadow-2xl relative overflow-hidden group min-h-[420px]">
          <div className="z-10 pr-0 sm:pr-44">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#636672] uppercase tracking-widest font-mono">
                PHASE 01 // VIRTUAL QUALIFIER
              </span>
              <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#141518] text-[#e2f952] uppercase font-mono">
                60 Mins
              </span>
            </div>

            <h3 className="text-3xl sm:text-5xl font-black text-[#141518] mt-6 tracking-tight leading-[1.1] font-editorial">
              Hypnexis Aptitude <br />
              Challenge.
            </h3>
            
            <p className="text-base sm:text-lg text-[#3d3f49] mt-4 leading-relaxed font-normal">
              Mandatory online screening evaluating programming fundamentals, logical reasoning, and emerging tech capabilities. Shortlisting strictly based on merit, accuracy, and leaderboard standing.
            </p>

            <div className="flex flex-col sm:flex-row gap-y-2 sm:gap-x-6 mt-6 text-sm font-semibold text-[#141518]/90">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" /> 16th–17th October 2026
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" /> Blockchain Credentials
              </span>
            </div>
          </div>

          <div className="mt-8 z-10">
            <Link
              href="https://unstop.com/competitions/hypnexis-2026-manipal-university-mu-jaipur-1711890"
              target="_blank"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-extrabold text-[#141518] hover:text-black transition-colors"
            >
              Learn about Qualifying Criteria <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Unified Squircle Badge */}
          <div className="absolute right-6 bottom-8 sm:bottom-12 w-40 h-40 rounded-[28px] bg-gradient-to-br from-[#e2f952]/30 via-[#ffd1dc]/25 to-purple-500/15 border border-black/5 flex items-center justify-center shadow-inner pointer-events-none group-hover:scale-105 transition-transform duration-300">
            <Terminal className="w-18 h-18 text-[#141518]" />
          </div>
        </div>

        {/* ROW 1 - RIGHT: CARD (5 cols) - ₹10,00,000 Prize Pool */}
        <div className="md:col-span-5 bg-[#EBEAE5] border border-[#d6d4cc] rounded-[32px] p-8 sm:p-12 flex flex-col justify-between shadow-2xl relative overflow-hidden group min-h-[420px]">
          <div className="z-10 pr-0 sm:pr-44">
            <span className="text-xs font-bold text-[#636672] uppercase tracking-widest font-mono">
              REWARDS & RECOGNITION
            </span>
            
            <h3 className="text-3xl sm:text-5xl font-black text-[#141518] mt-6 tracking-tight leading-tight font-editorial">
              Get builders to the podium.
            </h3>
            
            <p className="text-base sm:text-lg text-[#3d3f49] mt-4 leading-relaxed font-normal">
              ₹10,00,000 valuation pool featuring direct liquid cash bounties, incubation pipelines, placement incentives, and exclusive hardware swag.
            </p>
          </div>

          <div className="mt-8 z-10">
            <Link
              href="https://unstop.com/competitions/hypnexis-2026-manipal-university-mu-jaipur-1711890"
              target="_blank"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-extrabold text-[#141518] hover:text-black transition-colors"
            >
              Full Bounty Breakdown <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Unified Squircle Badge */}
          <div className="absolute right-6 bottom-8 sm:bottom-12 w-40 h-40 rounded-[28px] bg-gradient-to-br from-[#e2f952]/30 via-[#ffd1dc]/25 to-purple-500/15 border border-black/5 flex items-center justify-center shadow-inner pointer-events-none group-hover:scale-105 transition-transform duration-300">
            <Trophy className="w-18 h-18 text-[#141518]" />
          </div>
        </div>

        {/* ROW 2 - LEFT: TALL CARD (4 cols) - Campus Hospitality */}
        <div className="md:col-span-4 bg-[#EBEAE5] border border-[#d6d4cc] rounded-[32px] p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group min-h-[500px]">
          <div>
            <span className="text-xs font-bold text-[#636672] uppercase tracking-widest font-mono">
              CAMPUS EXPERIENCE
            </span>
            
            <div className="my-6 w-full h-40 rounded-[28px] bg-gradient-to-br from-[#e2f952]/30 via-[#ffd1dc]/25 to-purple-500/15 border border-black/5 flex items-center justify-center shadow-inner">
              <div className="flex items-center gap-6">
                <Utensils className="w-11 h-11 text-[#141518]" />
                <div className="w-[1.5px] h-10 bg-[#141518]/20" />
                <BedDouble className="w-11 h-11 text-[#141518]" />
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-[#141518] tracking-tight leading-snug font-editorial">
              Full Hospitality. Zero Friction.
            </h3>
            
            <p className="text-sm sm:text-base text-[#3d3f49] mt-3 leading-relaxed font-normal">
              Complimentary meals and dedicated separate resting bays for boys and girls provided on campus for all shortlisted offline builders.
            </p>
          </div>

          <div className="mt-6 border-t border-[#141518]/10 pt-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-[#141518] hover:text-black transition-colors"
            >
              View Campus Accommodations <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* ROW 2 - RIGHT: (8 cols) - 36-Hour Sprints + Bottom Pill */}
        <div className="md:col-span-8 flex flex-col gap-6 justify-between">
          
          {/* Top Wide Card: 36-Hour Sprint */}
          <div className="bg-[#EBEAE5] border border-[#d6d4cc] rounded-[32px] p-8 sm:p-12 flex-1 flex flex-col justify-between shadow-2xl relative overflow-hidden group min-h-[350px]">
            <div className="z-10 pr-0 sm:pr-44">
              <span className="text-xs font-bold text-[#636672] uppercase tracking-widest font-mono">
                PHASE 02 & 03 // OFFLINE SPRINT
              </span>
              
              <h3 className="text-3xl sm:text-5xl font-black text-[#141518] mt-6 tracking-tight leading-tight font-editorial">
                36 Hours of Code. <br />
                24th–25th October at MUJ.
              </h3>
              
              <p className="text-base sm:text-lg text-[#3d3f49] mt-4 leading-relaxed font-normal">
                High-energy overnight sprint in Jaipur. Secret AI problem statements unlocked on hack morning, continuous mentorship rounds, and a grand finale evaluation before an industry jury.
              </p>
            </div>

            <div className="mt-8 z-10">
              <Link
                href="/timeline"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-extrabold text-[#141518] hover:text-black transition-colors"
              >
                Inspect Schedule & Timelines <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 36-Hour Nonstop Graphic */}
            <div className="absolute right-6 bottom-8 sm:bottom-12 w-40 h-40 rounded-[28px] bg-gradient-to-br from-[#e2f952]/30 via-[#ffd1dc]/25 to-purple-500/15 border border-black/5 text-[#141518] flex flex-col items-center justify-center p-4 shadow-inner pointer-events-none group-hover:scale-105 transition-transform duration-300">
              <span className="font-black text-6xl leading-none tracking-tighter font-editorial">
                36
              </span>
              <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-[#141518]/80 mt-1">
                HOURS NONSTOP
              </span>
            </div>
          </div>

          {/* Bottom Full-Width Pill Bar */}
          <div className="bg-[#EBEAE5] border border-[#d6d4cc] rounded-[28px] px-8 sm:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl">
            <div>
              <h4 className="text-xl sm:text-2xl font-black text-[#141518] tracking-tight font-editorial">
                Secure your team&apos;s slot on Unstop
              </h4>
              <p className="text-xs sm:text-sm text-[#636672] font-mono mt-0.5">
                MUJ: ₹699/team • Non-MUJ: ₹849/team • International: $50
              </p>
            </div>

            <Button
              asChild
              className="h-12 px-8 rounded-full bg-[#141518] hover:bg-black text-[#e2f952] font-extrabold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all"
            >
              <Link href="https://unstop.com/competitions/hypnexis-2026-manipal-university-mu-jaipur-1711890" target="_blank">
                <Play className="w-3.5 h-3.5 mr-2 fill-[#e2f952]" />
                Register Now
              </Link>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}