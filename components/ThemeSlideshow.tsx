"use client";

import React from "react";
import AsciiFluidBackground from "./AsciiFluidBackground";
import { KittyTerminalCard, ThemeTerminalData } from "@/components/ui/cards";

const themes: ThemeTerminalData[] = [
  {
    id: "01",
    num: "01",
    bigLabel: "AI & ML",
    title: "AI & Distributed Systems",
    description: "Autonomous intelligence swarms, local LLM pipelines, and low-latency edge vision runtimes.",
    accent: "#38bdf8",
  },
  {
    id: "02",
    num: "02",
    bigLabel: "5G & COMMS",
    title: "5G/6G & Next-Gen Comms",
    description: "Sub-millisecond wireless routing, custom SDR topologies, and dynamic mesh packet relays.",
    accent: "#60a5fa",
  },
  {
    id: "03",
    num: "03",
    bigLabel: "CYBER SEC",
    title: "Cyber Defense & Privacy",
    description: "Mathematical zero-knowledge proofs, hardware enclave isolation, and eBPF intrusion shields.",
    accent: "#f472b6",
  },
  {
    id: "04",
    num: "04",
    bigLabel: "MED TECH",
    title: "Health & MedTech",
    description: "Diagnostics AI, physiological signal telemetry, and clinical edge computing.",
    accent: "#ff8fab",
  },
  {
    id: "05",
    num: "05",
    bigLabel: "SMART IOT",
    title: "Smart Infra & IoT",
    description: "Decentralized sensor networks, urban mobility intelligence, and resilient grid robotics.",
    accent: "#e2f952",
  },
  {
    id: "06",
    num: "06",
    bigLabel: "OPEN FORGE",
    title: "Open Innovation",
    description: "Unrestricted multidisciplinary engineering. Prototypes that break conventional domain limits.",
    accent: "#fb923c",
  },
];

export default function ThemeSlideshow() {
  return (
    <section className="relative w-full min-h-screen py-20 sm:py-28 px-4 sm:px-8 flex flex-col items-center justify-center overflow-hidden">
      {/* 1. Animated ASCII Fluid Background */}
      <AsciiFluidBackground />

      {/* 2. Section Header */}
      <div className="relative z-10 w-full max-w-[96vw] 2xl:max-w-[1700px] mx-auto flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 border-b border-white/10 pb-6 gap-4">
        <div>
          <span className="text-xs font-mono tracking-[0.4em] uppercase text-[#38bdf8] block mb-2 font-bold">
            PROBLEM TRACKS // CCE HYPNEXIS &apos;26
          </span>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white font-editorial">
            HACKATHON <span className="text-[#38bdf8] italic font-normal">TRACKS.</span>
          </h2>
        </div>
        <div className="font-mono text-xs text-white/50 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
          <span>6-SECTOR DEPLOYMENT</span>
        </div>
      </div>

      {/* 3. Solid Bento Grid */}
      <div className="relative z-10 w-full max-w-[96vw] 2xl:max-w-[1700px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {themes.map((theme) => (
          <KittyTerminalCard key={theme.id} data={theme} />
        ))}
      </div>
    </section>
  );
}