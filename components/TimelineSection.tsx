"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  Terminal, 
  MapPin, 
  Clock, 
  Flame, 
  Lock, 
  CheckCircle2, 
  Radio,
  Cpu,
  Layers
} from "lucide-react";

interface PhaseData {
  id: string;
  step: string;
  stageName: string;
  codename: string;
  dateDisplay: string;
  window: string;
  location: string;
  status: "ACTIVE" | "LOCKED";
  headline: string;
  coreLog: string;
  telemetry: {
    duration: string;
    throughput: string;
    accessType: string;
  };
  inclusions: string[];
  accent: string;
}

const phases: PhaseData[] = [
  {
    id: "01",
    step: "PHASE_01",
    stageName: "Aptitude Challenge",
    codename: "VIRTUAL_SCREENING",
    dateDisplay: "16—17 OCT '26",
    window: "18:00 — 23:59 IST [60 MIN CAP]",
    location: "Unstop Assessment Engine",
    status: "ACTIVE",
    headline: "Mandatory Algorithmic Elimination Gateway",
    coreLog:
      "Online evaluation benchmarking core programming proficiency, logical reasoning, and algorithmic optimization. Standings dictate on-campus offline shortlisting.",
    telemetry: {
      duration: "60 MINUTES",
      throughput: "AUTOMATED RANKING",
      accessType: "REMOTE CLOUD GATEWAY",
    },
    inclusions: [
      "Verifiable on-chain Blockchain Participation Credentials",
      "Detailed telemetry scorecards & percentile analytics",
      "Partner software credits & developer tooling access",
    ],
    accent: "#38bdf8",
  },
  {
    id: "02",
    step: "PHASE_02",
    stageName: "36H Offline Sprint",
    codename: "ONSITE_MARATHON",
    dateDisplay: "24—25 OCT '26",
    window: "08:00 AM IST COMMENCEMENT",
    location: "Computing Laboratories, MUJ Campus",
    status: "LOCKED",
    headline: "Continuous Hardware & AI Prototyping",
    coreLog:
      "Non-stop 36-hour offline execution. Secret AI problem statements released strictly on the hack floor. Includes 24/7 dedicated high-speed fiber, lab equipment, complimentary meals, and separate rest lounges.",
    telemetry: {
      duration: "36 HOURS NONSTOP",
      throughput: "CAMPUS LAN TESTBED",
      accessType: "ONSITE BUILD FLOOR",
    },
    inclusions: [
      "Zero-cost resting lounges and full catering hospitality",
      "Continuous mentor review rounds with industry experts",
      "Direct hardware rig access & compute cluster allocations",
    ],
    accent: "#e2f952",
  },
  {
    id: "03",
    step: "PHASE_03",
    stageName: "Grand Finale",
    codename: "JURY_DEFENSE",
    dateDisplay: "25 OCT '26",
    window: "10:00 AM — 20:00 IST",
    location: "Main Auditorium, MUJ",
    status: "LOCKED",
    headline: "Podium Evaluation & Venture Distribution",
    coreLog:
      "Elite qualifying teams defend code architecture, edge inference efficiency, and practical utility before an enterprise CTO jury to claim the ₹10,00,000 bounty pool.",
    telemetry: {
      duration: "10 HOURS",
      throughput: "STAGE PRESENTATIONS",
      accessType: "AUDITORIUM STAGE",
    },
    inclusions: [
      "₹10,00,000 Total Valuation cash bounty & seed grants",
      "Fast-track internship & placement hiring pipelines",
      "Official institutional letters of recommendation & incubator intro",
    ],
    accent: "#ff8fab",
  },
];

export default function TimelineSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activePhase = phases[activeIdx];

  return (
    <section className="relative w-full max-w-[96vw] 2xl:max-w-[1700px] mx-auto px-4 sm:px-8 py-24 sm:py-36 text-white select-none">
      
      {/* 1. Header with Editorial Serif Typography */}
      <div className="w-full flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-8 gap-6">
        <div>
          <span className="text-xs font-mono tracking-[0.4em] uppercase text-[#38bdf8] block mb-2 font-bold">
            EXECUTION PROTOCOL & TIMELINE
          </span>
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-white font-editorial leading-none">
            CHRONO <span className="text-[#e2f952] italic font-normal">STAGES.</span>
          </h2>
        </div>
        
        <div className="font-mono text-xs text-white/50 flex items-center gap-3">
          <Radio className="w-4 h-4 text-[#e2f952] animate-pulse" />
          <span>3 PHASES • 36 HOURS REALTIME RUN</span>
        </div>
      </div>

      {/* 2. Glassmorphic Telemetry Tape (Phase Selector Ribbon) */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {phases.map((phase, idx) => {
          const isSelected = activeIdx === idx;
          return (
            <button
              key={phase.id}
              onClick={() => setActiveIdx(idx)}
              className={`text-left p-6 sm:p-8 rounded-3xl transition-all duration-300 relative overflow-hidden backdrop-blur-2xl border ${
                isSelected
                  ? "bg-white/[0.08] border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.08)]"
                  : "bg-black/40 border-white/5 hover:border-white/15 opacity-60 hover:opacity-90"
              }`}
            >
              {/* Progress Indicator Bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 transition-all ${
                  isSelected ? "opacity-100" : "opacity-0"
                }`}
                style={{ backgroundColor: phase.accent }}
              />

              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-white/40">
                  {phase.step}
                </span>
                {phase.status === "ACTIVE" ? (
                  <span className="flex items-center gap-1.5 font-mono text-[10px] text-[#38bdf8] px-2.5 py-0.5 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/30">
                    <Flame className="w-3 h-3" /> ACTIVE
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 font-mono text-[10px] text-white/40 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10">
                    <Lock className="w-3 h-3 text-[#ff8fab]" /> LOCKED
                  </span>
                )}
              </div>

              <div className="font-mono text-2xl sm:text-3xl font-black text-white tracking-tight mb-1">
                {phase.dateDisplay}
              </div>

              <div className="font-editorial text-lg text-white/80">
                {phase.stageName}
              </div>
            </button>
          );
        })}
      </div>

      {/* 3. Central Telemetry Cockpit (Glass Container) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePhase.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
          className="w-full rounded-[36px] bg-[#0c0814]/85 border border-white/15 backdrop-blur-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden"
        >
          {/* Ambient Glow Pill */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none blur-3xl"
            style={{ backgroundColor: activePhase.accent }}
          />

          {/* Top Stage Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8 font-mono text-xs">
            <div className="flex items-center gap-4">
              <span
                className="px-3.5 py-1 rounded-full bg-white/5 border border-white/10 font-bold"
                style={{ color: activePhase.accent }}
              >
                {activePhase.codename}
              </span>
              <span className="text-white/40 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> {activePhase.window}
              </span>
            </div>

            <span className="text-white/60 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#38bdf8]" /> {activePhase.location}
            </span>
          </div>

          {/* Stage Core Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Description Block */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-3xl sm:text-5xl font-black text-white font-editorial tracking-tight leading-tight">
                {activePhase.headline}
              </h3>
              
              <p className="text-base sm:text-lg text-white/70 font-sans font-light leading-relaxed">
                {activePhase.coreLog}
              </p>

              {/* Inclusions Checklist */}
              <div className="pt-4 space-y-3 font-mono text-xs sm:text-sm">
                <span className="text-[11px] uppercase tracking-widest text-white/40 block mb-2">
                  VERIFIED DELIVERABLES & PROVISIONS
                </span>
                {activePhase.inclusions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-white/80">
                    <CheckCircle2
                      className="w-4 h-4 shrink-0 mt-0.5"
                      style={{ color: activePhase.accent }}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Telemetry Column */}
            <div className="lg:col-span-5 flex flex-col gap-4 font-mono">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
                <span className="text-[10px] uppercase tracking-widest text-white/40 block">
                  TELEMETRY METRICS
                </span>

                <div className="flex justify-between items-center border-b border-white/10 pb-3 text-xs">
                  <span className="text-white/50">OPERATIONAL TIME:</span>
                  <span className="text-white font-bold">{activePhase.telemetry.duration}</span>
                </div>

                <div className="flex justify-between items-center border-b border-white/10 pb-3 text-xs">
                  <span className="text-white/50">NETWORK STANDARD:</span>
                  <span className="text-white font-bold">{activePhase.telemetry.throughput}</span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-white/50">GATEWAY ACCESS:</span>
                  <span
                    className="font-bold"
                    style={{ color: activePhase.accent }}
                  >
                    {activePhase.telemetry.accessType}
                  </span>
                </div>
              </div>

              {/* Status Ribbon */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-white/60">
                  <Terminal className="w-4 h-4" />
                  <span>PHASE SEQUENCE [{activePhase.id} OF 03]</span>
                </div>
                <span
                  className="font-bold tracking-wider"
                  style={{ color: activePhase.accent }}
                >
                  SYNCHRONIZED
                </span>
              </div>
            </div>

          </div>
        </motion.div>
      </AnimatePresence>

      {/* 4. Action Banner */}
      <div className="w-full mt-12 p-8 sm:p-10 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="text-2xl sm:text-3xl font-black font-editorial text-white">
            Registration Tier Breakdown
          </h4>
          <p className="text-xs sm:text-sm font-mono text-white/60 mt-1">
            MUJ: ₹699/team • Non-MUJ: ₹849/team • International: $50 (Teams of 1–4)
          </p>
        </div>

        <Link
          href="https://unstop.com/competitions/hypnexis-2026-manipal-university-mu-jaipur-1711890"
          target="_blank"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black hover:bg-[#e2f952] transition-colors font-mono font-bold text-xs uppercase tracking-wider shrink-0"
        >
          <span>Claim Slot on Unstop</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

    </section>
  );
}