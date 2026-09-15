"use client";

import { Bot, Radio, ShieldCheck, Sparkles } from "lucide-react";
import AsciiFluidBackground from "./AsciiFluidBackground";
import { KittyTerminalCard, ThemeTerminalData } from "@/components/ui/cards";

const themes: ThemeTerminalData[] = [
  {
    id: "01",
    tabTitle: "kitty: ~/cce/trk-01-ai",
    command: "cce-sys --exec track-01.bin",
    title: "AI & Distributed Systems",
    description:
      "Autonomous intelligence swarms, high-throughput model fine-tuning, low-latency edge vision runtimes, and local LLM tool-calling pipelines.",
    tags: ["Autonomous Agents", "ONNX", "vLLM", "TensorRT"],
    accent: "#38bdf8",
    icon: Bot,
    gradientBg: "bg-gradient-to-br from-[#38bdf8]/20 via-[#818cf8]/20 to-purple-900/30",
  },
  {
    id: "02",
    tabTitle: "kitty: ~/cce/trk-02-mesh",
    command: "cce-rf --bind sdr-rx:5.8GHz",
    title: "5G/6G & Next-Gen Comms",
    description:
      "Flagship CCE track: Sub-millisecond wireless routing, custom software-defined radio (SDR) topologies, and dynamic mesh packet relays under hostile telemetry.",
    tags: ["SDR", "LoRaWAN", "QUIC", "Zero Latency"],
    accent: "#60a5fa",
    icon: Radio,
    gradientBg: "bg-gradient-to-br from-[#60a5fa]/20 via-[#3b82f6]/20 to-indigo-950/40",
  },
  {
    id: "03",
    tabTitle: "kitty: ~/cce/trk-03-sec",
    command: "zk-snark --verify proof.bin",
    title: "Cyber Defense & Privacy",
    description:
      "Mathematical zero-knowledge proofs, hardware enclave isolation primitives, eBPF intrusion shields, and resilient encrypted communication pipelines.",
    tags: ["ZK-Proofs", "Enclave Compute", "eBPF", "WireGuard"],
    accent: "#f472b6",
    icon: ShieldCheck,
    gradientBg: "bg-gradient-to-br from-[#f472b6]/20 via-[#c084fc]/20 to-purple-950/40",
  },
  {
    id: "04",
    tabTitle: "kitty: ~/cce/trk-04-open",
    command: "sandbox --bypass constraints",
    title: "Open Innovation",
    description:
      "Unrestricted multi-disciplinary prototypes. Radical cross-domain engineering integrating microcontrollers, embedded kernels, web frameworks, and bespoke hardware.",
    tags: ["Embedded C++", "Docker", "Go", "Hardware Rigs"],
    accent: "#fb923c",
    icon: Sparkles,
    gradientBg: "bg-gradient-to-br from-[#fb923c]/20 via-[#f43f5e]/20 to-stone-900/40",
  },
];

export default function ThemeSlideshow() {
  return (
    <section className="relative w-full min-h-screen py-24 sm:py-32 px-4 sm:px-8 flex flex-col items-center justify-center overflow-hidden">
      {/* 1. Dark-Themed ASCII Fluid Background */}
      <AsciiFluidBackground />

      {/* 2. Header */}
      <div className="relative z-10 w-full max-w-[96vw] 2xl:max-w-[1700px] mx-auto flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 border-b border-white/10 pb-6 gap-4">
        <div>
          <span className="text-xs font-mono tracking-[0.4em] uppercase text-[#38bdf8] block mb-2 font-bold">
            CCE HYPNEXIS &apos;26 TELEMETRY
          </span>
          <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tight text-white font-editorial">
            SYSTEM <span className="text-[#38bdf8] italic font-normal">THEMES.</span>
          </h2>
        </div>
        <div className="font-mono text-xs text-white/50 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
          <span>KITTY SESSION: 4-WINDOW MATRIX</span>
        </div>
      </div>

      {/* 3. Responsive 2x2 Matrix with 3D Tilt Cards */}
      <div className="relative z-10 w-full max-w-[96vw] 2xl:max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
        {themes.map((theme) => (
          <KittyTerminalCard key={theme.id} data={theme} />
        ))}
      </div>
    </section>
  );
}