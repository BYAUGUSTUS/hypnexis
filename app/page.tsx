"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import MorphBackground from "@/components/BackgroundMesh";
import BentoDashboard from "@/components/BentoDashboard";
import ThemeSlideshow from "@/components/ThemeSlideshow";
import TimelineSection from "@/components/TimelineSection";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <div className="snap-container w-full min-h-screen text-white flex flex-col items-center">
      <Navbar />

      {/* =========================================
          1. IMMERSIVE HERO SECTION WITH MORPH CANVAS
          ========================================= */}
      <section className="snap-section w-full flex flex-col justify-between items-center px-4 sm:px-8 pt-20 pb-12 relative overflow-hidden bg-transparent">
        {/* Interactive Morph/Fluid Canvas Layer */}
        <div className="absolute inset-0 pointer-events-auto -z-10 overflow-hidden">
          <MorphBackground />
          {/* Subtle radial vignette so text remains crisp */}
          <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_20%,rgba(3,2,6,0.85)_95%] pointer-events-none" />
        </div>

        {/* 10 LAKH ROTATING STAMP (Right Margin) */}
        <div className="absolute top-[22%] right-4 sm:right-8 md:right-12 lg:right-16 z-30 pointer-events-none select-none">
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-full h-full"
            >
              <svg viewBox="0 0 300 300" className="w-full h-full">
                <defs>
                  <path
                    id="outerPrizeCircle"
                    d="M 150, 150 m -115, 0 a 115,115 0 1,1 230,0 a 115,115 0 1,1 -230,0"
                    fill="transparent"
                  />
                </defs>
                <circle
                  cx="150"
                  cy="150"
                  r="135"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.25)"
                  strokeWidth="1.5"
                  strokeDasharray="6 8"
                />
                <circle
                  cx="150"
                  cy="150"
                  r="95"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.3)"
                  strokeWidth="1"
                />
                <text className="font-mono text-[14.5px] uppercase tracking-[4px] fill-white font-black">
                  <textPath href="#outerPrizeCircle" startOffset="0%">
                    • TOTAL PRIZE POOL   • TOTAL PRIZE POOL   • TOTAL PRIZE POOL  
                  </textPath>
                </text>
              </svg>
            </motion.div>

            <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#ff8fab] via-[#ff5e9c] to-[#d13b7b] border-2 border-white/80 shadow-[0_0_40px_rgba(255,143,171,0.6)] flex flex-col items-center justify-center text-center">
              <span className="text-2xl sm:text-3xl md:text-4xl font-black font-sans text-black leading-none my-0.5 tracking-tight">
                ₹10L
              </span>
            </div>
          </div>
        </div>

        {/* Center Stage: Titan Title */}
        <div className="relative flex flex-col items-center justify-center my-auto w-full max-w-full px-2 z-20">
          <span className="text-xs sm:text-sm font-mono tracking-[0.5em] text-[#ff8fab] uppercase mb-4">
            [ PRESENTS ]
          </span>

          <div className="w-full flex items-center justify-center select-none">
            <motion.h1
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-[13vw] font-black tracking-[-0.05em] uppercase leading-[0.8] text-center whitespace-nowrap flex items-center justify-center drop-shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
            >
              <span className="text-white tracking-tighter">HYPNEXIS</span>
              <span className="text-[#ff8fab] ml-2 tracking-tighter drop-shadow-[0_0_70px_rgba(255,143,171,0.7)]">
                &apos;26
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="text-xs sm:text-base md:text-lg text-white/70 font-light tracking-[0.2em] uppercase mt-8 text-center max-w-3xl"
          >
            Manipal University Jaipur&apos;s Flagship Computing &amp; Communication Hackathon
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 z-20"
          >
            <Button
              asChild
              className="h-14 px-10 rounded-full bg-[#ff8fab] hover:bg-white text-black font-mono font-bold text-sm tracking-wider uppercase transition-all shadow-[0_0_40px_rgba(255,143,171,0.5)] hover:shadow-[0_0_60px_rgba(255,255,255,0.7)] hover:scale-105 cursor-pointer"
            >
              <Link
                href="https://unstop.com/competitions/hypnexis-2026-manipal-university-mu-jaipur-1711890"
                target="_blank"
                rel="noopener noreferrer"
              >
                REGISTER ON UNSTOP
                <ExternalLink className="ml-2 w-4 h-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-14 px-8 rounded-full border border-white/20 bg-black/40 hover:bg-white/10 text-white font-mono text-sm tracking-wider uppercase backdrop-blur-xl cursor-pointer"
            >
              <Link href="/problems">Problem Statements &rarr;</Link>
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center gap-2 opacity-50 z-20 pointer-events-none">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em]">Explore Architecture</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white to-transparent animate-pulse" />
        </div>
      </section>

      {/* =========================================
          2. STANDALONE BOLT-STYLE BENTO DASHBOARD
          ========================================= */}
      <section className="snap-section w-full">
        <BentoDashboard />
      </section>

      {/* =========================================
          3. THEMES MATRIX
          ========================================= */}
      <section className="snap-section w-full">
        <ThemeSlideshow />
      </section>

      {/* =========================================
          4. TIMELINE ROADMAP
          ========================================= */}
      <section className="snap-section w-full">
        <TimelineSection />
      </section>

      {/* =========================================
          5. PARTNERS SECTION (WITH ASCII FIRE)
          ========================================= */}
      <section className="snap-section w-full">
        <PartnersSection />
      </section>

      {/* =========================================
          6. CONTACT SECTION
          ========================================= */}
      <section className="snap-section w-full">
        <ContactSection />
      </section>
    </div>
  );
}