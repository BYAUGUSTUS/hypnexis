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

  // Close overlay upon route transition
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

  return (
    <>
      {/* Top Header Bar */}
      <header className="fixed top-0 left-0 right-0 z-40 w-full px-3 sm:px-6 md:px-10 py-3 sm:py-5 pointer-events-none select-none">
        <div className="w-full flex items-center justify-between gap-3 pointer-events-auto">
          {/* Logo Placeholder */}
          <Link href="/" className="flex items-center group shrink-0">
            <div className="relative h-8 sm:h-10 w-32 sm:w-44 md:w-48 flex items-center justify-start rounded-lg border border-dashed border-white/20 bg-black/60 backdrop-blur-md px-2 sm:px-2.5 transition-all group-hover:border-[#ff8fab]/60">
              <span className="font-mono text-[9px] sm:text-[10px] md:text-xs text-white/50 uppercase tracking-widest group-hover:text-[#ff8fab] transition-colors truncate">
                [ LOGO_PLACEHOLDER ]
              </span>
            </div>
          </Link>

          {/* Department Center Stamp */}
          <div className="hidden sm:inline-flex items-center justify-center px-3.5 md:px-6 py-1.5 sm:py-2 rounded-full border border-white/15 bg-black/50 backdrop-blur-xl text-[10px] md:text-xs font-mono tracking-widest uppercase text-white/90 shadow-[0_0_20px_rgba(255,143,171,0.12)] shrink-0">
            <span className="hidden md:inline">DEPARTMENT OF COMPUTER &amp; COMMUNICATION ENGINEERING</span>
            <span className="md:hidden">CCE MUJ</span>
          </div>

          {/* Menu Trigger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            style={{
              clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)",
            }}
            className="w-16 sm:w-22 md:w-24 h-8 sm:h-10 bg-white hover:bg-[#ff8fab] text-black font-mono font-black text-[11px] sm:text-xs uppercase tracking-widest transition-colors flex items-center justify-center cursor-pointer shadow-lg active:scale-95 shrink-0"
            aria-label="Open Navigation Directory"
          >
            MENU
          </button>
        </div>
      </header>

      {/* Slide-out Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex justify-end select-none pointer-events-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Content Drawer */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full sm:max-w-[420px] md:max-w-[460px] h-full min-h-[100dvh] bg-[#060209] border-l border-white/10 shadow-2xl p-6 sm:p-10 flex flex-col justify-between overflow-y-auto"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 sm:pb-6 shrink-0">
                <div className="space-y-0.5 sm:space-y-1">
                  <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.35em] text-[#ff8fab] uppercase font-bold block">
                    NAVIGATION
                  </span>
                  <span className="font-mono text-[11px] sm:text-xs text-white/50">
                    Directory // Hypnexis &apos;26
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  style={{
                    clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)",
                  }}
                  className="w-12 sm:w-16 h-7 sm:h-8 bg-white hover:bg-[#ff8fab] text-black font-mono font-black text-xs uppercase tracking-wider transition-colors flex items-center justify-center cursor-pointer shadow-md active:scale-95"
                  aria-label="Close navigation"
                >
                  ✕
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="my-auto py-6 sm:py-8 flex flex-col space-y-4 sm:space-y-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-baseline gap-3 sm:gap-5 transition-all duration-200"
                  >
                    <span className="font-mono text-[11px] sm:text-xs text-white/30 tracking-widest group-hover:text-[#ff8fab] transition-colors">
                      {item.num}
                    </span>
                    <span className="text-xl sm:text-3xl md:text-4xl font-black font-sans uppercase tracking-tight text-white group-hover:translate-x-1.5 group-hover:text-[#ff8fab] transition-transform duration-200 leading-tight">
                      {item.name}
                    </span>
                  </Link>
                ))}
              </nav>

              {/* Drawer Footer */}
              <div className="pt-4 sm:pt-6 border-t border-white/10 flex items-end justify-between font-mono text-[11px] sm:text-xs shrink-0 text-white/60">
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-white/40 block mb-0.5">
                    LOCAL TIME
                  </span>
                  <span className="text-white font-bold tracking-wide">
                    {currentTime || "00:00:00"}
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-widest text-[#e2f952] block font-bold">
                    CCE MUJ
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-white/40">
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