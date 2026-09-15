"use client";

import { motion } from "framer-motion";

export default function BackgroundMesh() {
  // Exactly 24 curved vertical glass slats
  const slats = Array.from({ length: 24 });

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none select-none bg-[#050107]">
      {/* 1. Deep Void Canvas Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#130312] via-[#050107] to-[#020003]" />

      {/* 2. CURVED SNAKE / COMET LIGHT TRAILS WITH TAPERING TAILS */}
      <svg
        className="absolute inset-0 w-full h-full filter blur-[45px] opacity-75"
        viewBox="0 0 1600 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Tapering comet gradient 1: Electric Blush to Plum */}
          <linearGradient id="blushComet" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff4d8d" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#ff7eb6" stopOpacity="0.6" />
            <stop offset="75%" stopColor="#9333ea" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#3b0764" stopOpacity="0" />
          </linearGradient>

          {/* Tapering comet gradient 2: Electric Cyan to Indigo */}
          <linearGradient id="cyanComet" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f5d4" stopOpacity="0.85" />
            <stop offset="35%" stopColor="#00bbf9" stopOpacity="0.5" />
            <stop offset="70%" stopColor="#4361ee" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#3a0ca3" stopOpacity="0" />
          </linearGradient>

          {/* Tapering comet gradient 3: Neon Coral to Gold */}
          <linearGradient id="coralComet" x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="#ff5e62" stopOpacity="0.75" />
            <stop offset="45%" stopColor="#ff9966" stopOpacity="0.4" />
            <stop offset="85%" stopColor="#f72585" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#7209b7" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Snake 1: S-Curve looping from Top-Right down to Center-Left */}
        <motion.path
          d="M 1700 -100 C 1300 200, 1100 0, 800 350 C 500 700, 900 900, 300 1100"
          stroke="url(#blushComet)"
          strokeWidth="110"
          strokeLinecap="round"
          strokeDasharray="600 1200"
          animate={{
            strokeDashoffset: [1800, -1800],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Snake 2: High-speed curving loop from Bottom-Left towards Top-Right */}
        <motion.path
          d="M -150 1100 C 300 800, 200 400, 700 300 C 1200 200, 1000 700, 1700 200"
          stroke="url(#cyanComet)"
          strokeWidth="80"
          strokeLinecap="round"
          strokeDasharray="500 1400"
          animate={{
            strokeDashoffset: [-1900, 1900],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
            delay: 1,
          }}
        />

        {/* Snake 3: Broad curved sweep across the middle */}
        <motion.path
          d="M 100 150 C 600 -50, 1100 500, 1400 950"
          stroke="url(#coralComet)"
          strokeWidth="95"
          strokeLinecap="round"
          strokeDasharray="450 1100"
          animate={{
            strokeDashoffset: [1550, -1550],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>

      {/* 3. 24 CURVED GLASS STRIPS (Lenticular / Fluted Tube Architecture) */}
      <div className="absolute inset-0 grid grid-cols-24 pointer-events-none">
        {slats.map((_, i) => (
          <div
            key={i}
            className="h-full relative border-r border-white/[0.04]"
            style={{
              // Gradient gives each individual slat a 3D cylindrical convex bend
              background: `linear-gradient(
                90deg, 
                rgba(255, 255, 255, 0.04) 0%, 
                rgba(255, 255, 255, 0.0) 25%, 
                rgba(0, 0, 0, 0.25) 75%, 
                rgba(0, 0, 0, 0.45) 100%
              )`,
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            {/* Specular highlight along the crest of each glass tube */}
            <div className="absolute top-0 left-[20%] w-[1px] h-full bg-white/[0.07]" />
          </div>
        ))}
      </div>

      {/* 4. Peripheral Smoked Vignette */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_35%,rgba(3,1,5,0.85)_100%]" />
    </div>
  );
}