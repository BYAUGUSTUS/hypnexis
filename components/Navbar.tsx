"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  num: string;
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { num: "01", name: "HOME", href: "/" },
  { num: "02", name: "PROBLEM STATEMENTS", href: "/problems" },
  { num: "03", name: "RESULTS", href: "/results" },
  { num: "04", name: "ABOUT", href: "/about" },
  { num: "05", name: "OUR TEAM", href: "/team" },
  { num: "06", name: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const pathname = usePathname();

  // Route change handler
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Live real-time clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Lock background scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* =========================================================================
          TOP FIXED NAVBAR (EDGE-TO-EDGE PUSHED)
          ========================================================================= */}
      <header className="fixed top-0 left-0 right-0 z-40 w-full px-4 sm:px-6 md:px-10 py-4 sm:py-5 pointer-events-none select-none">
        <div className="w-full flex items-center justify-between gap-4 pointer-events-auto">
          
          {/* Left Edge: Logo Box */}
          <Link href="/" className="flex items-center group shrink-0">
            <div className="relative h-9 sm:h-10 w-36 sm:w-44 md:w-48 flex items-center justify-start rounded-lg border border-dashed border-white/20 bg-black/40 backdrop-blur-md px-2.5 transition-all group-hover:border-[#ff8fab]/60">
              <span className="font-mono text-[9px] sm:text-[10px] md:text-xs text-white/50 uppercase tracking-widest group-hover:text-[#ff8fab] transition-colors truncate">
                [ LOGO_PLACEHOLDER ]
              </span>
            </div>
          </Link>

          {/* Center: Department Badge (Responsive: hidden on mobile, compact on tablet, full on desktop) */}
          <div className="hidden sm:inline-flex items-center justify-center px-4 md:px-6 py-2 rounded-full border border-white/15 bg-black/50 backdrop-blur-xl text-[10px] md:text-xs font-mono tracking-widest uppercase text-white/90 shadow-[0_0_20px_rgba(255,143,171,0.12)] pointer-events-auto shrink-0">
            <span className="hidden md:inline">DEPARTMENT OF COMPUTER &amp; COMMUNICATION ENGINEERING</span>
            <span className="md:hidden">CCE MUJ</span>
          </div>

          {/* Right Edge: Chamfered Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            style={{
              clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)",
            }}
            className="w-18 sm:w-22 md:w-24 h-9 sm:h-10 bg-white hover:bg-[#ff8fab] text-black font-mono font-black text-xs uppercase tracking-widest transition-all duration-200 flex items-center justify-center cursor-pointer shadow-lg active:scale-95 shrink-0"
            aria-label="Open Navigation Directory"
          >
            MENU
          </button>

        </div>
      </header>

      {/* =========================================================================
          FULL-HEIGHT FLYOUT DRAWER
          ========================================================================= */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex justify-end select-none">
            
            {/* Dark Frosted Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Top-to-Bottom Drawer Panel */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full sm:max-w-[460px] lg:max-w-[500px] h-screen bg-[#060209]/95 border-l border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.9)] p-6 sm:p-10 md:p-12 flex flex-col justify-between overflow-hidden"
            >
              {/* Glow Accents */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#ff8fab]/15 via-[#38bdf8]/10 to-transparent blur-[90px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#e2f952]/5 blur-[90px] pointer-events-none" />

              {/* Drawer Top Row */}
              <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-6 shrink-0">
                <div className="space-y-1">
                  <span className="font-mono text-[11px] tracking-[0.35em] text-[#ff8fab] uppercase font-bold block">
                    NAVIGATION
                  </span>
                  <span className="font-mono text-xs text-white/50">
                    Directory // Hypnexis &apos;26
                  </span>
                </div>

                {/* White Cut-corner Close Tag */}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  style={{
                    clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)",
                  }}
                  className="w-14 sm:w-16 h-8 bg-white hover:bg-[#ff8fab] text-black font-mono font-black text-xs uppercase tracking-wider transition-colors flex items-center justify-center cursor-pointer shadow-md active:scale-95"
                  aria-label="Close navigation"
                >
                  ✕
                </button>
              </div>

              {/* Menu Items */}
              <nav className="relative z-10 my-auto py-6 flex flex-col space-y-4 sm:space-y-6 overflow-y-auto pr-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-baseline gap-4 sm:gap-6 transition-all duration-200"
                  >
                    <span className="font-mono text-xs sm:text-sm text-white/30 tracking-widest group-hover:text-[#ff8fab] transition-colors">
                      {item.num}
                    </span>
                    <span className="text-2xl sm:text-4xl lg:text-[2.5rem] font-black font-sans uppercase tracking-tight text-white group-hover:translate-x-2 group-hover:text-[#ff8fab] transition-all duration-200 leading-none">
                      {item.name}
                    </span>
                  </Link>
                ))}
              </nav>

              {/* Bottom Telemetry Strip */}
              <div className="relative z-10 pt-6 border-t border-white/10 flex items-end justify-between font-mono text-xs shrink-0">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 block mb-1">
                    LOCAL TIME
                  </span>
                  <span className="text-white text-sm sm:text-base font-bold tracking-wider">
                    {currentTime || "02:35:09 AM"}
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-widest text-[#e2f952] block font-bold">
                    CCE MUJ
                  </span>
                  <span className="text-[10px] text-white/40">
                    © 2026 HYPNEXIS
                  </span>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}