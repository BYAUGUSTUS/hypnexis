"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export interface ThemeTerminalData {
  id: string;
  num: string;
  title: string;
  bigLabel: string;
  description: string;
  accent: string;
}

export function KittyTerminalCard({ data }: { data: ThemeTerminalData }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 240,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 240,
    damping: 24,
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
    <div style={{ perspective: 1000 }} className="w-full h-full select-none">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="w-full h-full min-h-[220px] rounded-xl bg-[#090614] hover:bg-[#0e0920] p-6 sm:p-7 flex flex-col justify-between transition-colors duration-300 shadow-xl"
      >
        {/* Top Header: Track Number + Accent Dot */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-xs text-white/40 tracking-[0.25em] font-bold">
            {data.num}
          </span>
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: data.accent }}
          />
        </div>

        {/* Big Bold Typography */}
        <div className="my-auto py-2">
          <span
            style={{ color: data.accent }}
            className="block text-4xl sm:text-5xl font-black uppercase tracking-tight font-sans leading-none"
          >
            {data.bigLabel}
          </span>
        </div>

        {/* Title & Description */}
        <div className="mt-4 pt-3 space-y-1.5">
          <h3 className="text-base sm:text-lg font-bold font-sans tracking-tight text-white">
            {data.title}
          </h3>
          <p className="text-xs sm:text-sm text-white/60 font-sans leading-relaxed">
            {data.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}