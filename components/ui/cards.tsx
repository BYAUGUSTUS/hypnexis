"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { LucideIcon } from "lucide-react";

export interface ThemeTerminalData {
  id: string;
  tabTitle: string;
  command: string;
  title: string;
  description: string;
  tags: string[];
  accent: string;
  icon: LucideIcon;
  gradientBg: string;
}

export function KittyTerminalCard({ data }: { data: ThemeTerminalData }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = data.icon;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 260, mass: 0.6 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: 1200 }} className="w-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.02, zIndex: 30 }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="rounded-[28px] border border-white/10 bg-[#0c0814]/90 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden group hover:border-white/30 transition-colors duration-300 min-h-[380px] sm:min-h-[420px]"
      >
        {/* Kitty Terminal Titlebar */}
        <div className="bg-[#130d20] px-6 py-3.5 border-b border-white/10 flex items-center justify-between select-none">
          <div className="flex items-center gap-2.5">
            <span className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] inline-block shadow-[0_0_8px_rgba(255,95,86,0.5)]" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] inline-block shadow-[0_0_8px_rgba(255,189,46,0.5)]" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#27c93f] inline-block shadow-[0_0_8px_rgba(39,201,63,0.5)]" />
            <span className="font-mono text-xs sm:text-sm text-white/60 ml-3 tracking-wider font-semibold">
              {data.tabTitle}
            </span>
          </div>
          <span
            className="font-mono text-xs font-black uppercase tracking-widest px-3 py-0.5 rounded-full bg-white/5 border border-white/10"
            style={{ color: data.accent }}
          >
            TRK_{data.id}
          </span>
        </div>

        {/* Terminal Body */}
        <div className="p-8 sm:p-10 flex flex-col justify-between flex-1 font-mono">
          {/* Shell Prompt */}
          <div className="text-xs sm:text-sm text-white/40 mb-4 flex items-center gap-2">
            <span className="text-[#38bdf8] font-bold">&gt;</span>
            <span className="text-white/80">{data.command}</span>
          </div>

          {/* Title & Bento-Style Squircle Icon */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center my-auto py-2">
            <div className="sm:col-span-8">
              <h3 className="text-3xl sm:text-4xl font-black font-editorial tracking-tight text-white mb-3">
                {data.title}
              </h3>
              <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed font-light">
                {data.description}
              </p>
            </div>

            {/* Premium Squircle Icon Container */}
            <div className="sm:col-span-4 flex items-center justify-center">
              <div
                className={`w-28 h-28 sm:w-32 sm:h-32 rounded-[28px] border border-white/10 ${data.gradientBg} flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300`}
              >
                <Icon className="w-14 h-14" style={{ color: data.accent }} />
              </div>
            </div>
          </div>

          {/* Tag Badges */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap gap-2 mt-4">
            {data.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-white/80 group-hover:bg-white/[0.08] transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}