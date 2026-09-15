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
  icon?: LucideIcon;
  gradientBg?: string;
}

export function KittyTerminalCard({ data }: { data: ThemeTerminalData }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const IconComponent = data.icon;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 250,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 250,
    damping: 25,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

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
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="relative rounded-3xl border border-white/15 bg-[#0b0813]/90 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.85)] flex flex-col overflow-hidden group hover:border-white/30 transition-colors duration-300"
      >
        {/* Kitty Terminal Header */}
        <div className="bg-[#120e1c] px-5 py-3 border-b border-white/10 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block" />
            <span className="font-mono text-xs text-white/50 ml-2 tracking-wider">
              {data.tabTitle}
            </span>
          </div>
          <span
            className="font-mono text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-white/5 border border-white/10"
            style={{ color: data.accent }}
          >
            TRK_{data.id}
          </span>
        </div>

        {/* Card Body */}
        <div className="p-8 sm:p-10 flex flex-col justify-between flex-1 font-mono gap-6">
          {/* Terminal Command */}
          <div className="text-xs text-white/40 flex items-center gap-2">
            <span className="font-bold" style={{ color: data.accent }}>
              &gt;
            </span>
            <span className="text-white/80">{data.command}</span>
          </div>

          {/* Icon & Title */}
          <div className="flex items-start gap-6">
            {IconComponent && (
              <div
                className={`w-16 h-16 rounded-2xl shrink-0 border border-white/15 flex items-center justify-center ${
                  data.gradientBg || "bg-white/5"
                }`}
              >
                <IconComponent
                  className="w-8 h-8"
                  style={{ color: data.accent }}
                />
              </div>
            )}
            <div>
              <h3 className="text-2xl sm:text-3xl font-black font-editorial tracking-tight text-white mb-2">
                {data.title}
              </h3>
              <p className="text-sm text-white/70 font-sans leading-relaxed">
                {data.description}
              </p>
            </div>
          </div>

          {/* Technology Badges */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap gap-2">
            {data.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-white/80"
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