"use client";

import React, { useEffect, useRef } from "react";

export default function AsciiFireBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let lastTime = 0;
    const fps = 30;
    const interval = 1000 / fps;

    // Font and cell metrics matching Asciify (fontSize 14, spacing 9x18)
    const fontSize = 14;
    const cellW = 9;
    const cellH = 18;
    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let fireBuffer: number[] = [];

    const resize = () => {
      width = canvas.width = container.clientWidth || window.innerWidth;
      height = canvas.height = container.clientHeight || 750;
      cols = Math.floor(width / cellW);
      rows = Math.floor(height / cellH);
      fireBuffer = new Array(cols * rows).fill(0);
    };
    resize();

    // Exact glyph progression from Asciify: empty spaces -> dots -> colons -> i -> + -> x -> X -> #
    const chars = "  ..,,::;;ii++xxXX##";
    const numChars = chars.length;

    window.addEventListener("resize", resize);

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    const render = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(render);

      if (!isVisible || cols === 0 || rows === 0) return;

      const delta = currentTime - lastTime;
      if (delta < interval) return;
      lastTime = currentTime - (delta % interval);

      // 1. Seed base heat row at 0.85 intensity (Asciify default)
      const lastRow = (rows - 1) * cols;
      const secondLast = (rows - 2) * cols;
      for (let x = 0; x < cols; x++) {
        const seed = Math.random() < 0.85 ? Math.random() * 0.95 + 0.1 : 0;
        fireBuffer[lastRow + x] = seed;
        fireBuffer[secondLast + x] = seed * 0.92;
      }

      // 2. Cellular automaton heat propagation with cooling decay
      for (let y = 0; y < rows - 2; y++) {
        for (let x = 0; x < cols; x++) {
          const below = (y + 1) * cols + x;
          const left = below > 0 ? below - 1 : below;
          const right = below < cols * rows - 1 ? below + 1 : below;
          const twoBelow = (y + 2) * cols + x;

          const blended =
            (fireBuffer[below] * 1.6 +
              fireBuffer[left] +
              fireBuffer[right] +
              fireBuffer[twoBelow] * 0.8) /
            4.25;

          const decay = Math.random() * 0.045 + 0.012;
          const drift = Math.random() > 0.6 ? (Math.random() > 0.5 ? 1 : -1) : 0;
          const targetX = Math.min(cols - 1, Math.max(0, x + drift));

          fireBuffer[y * cols + targetX] = Math.max(0, blended - decay);
        }
      }

      // 3. Clear canvas with pure dark background
      ctx.fillStyle = "#080604";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `bold ${fontSize}px monospace`;
      ctx.textBaseline = "top";

      // 4. Render ASCII characters mapped to heat with the exact Asciify flame color palette
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const heat = fireBuffer[y * cols + x];
          if (heat < 0.09) continue;

          const charIdx = Math.min(
            numChars - 1,
            Math.floor(heat * (numChars - 1))
          );
          const char = chars[charIdx];
          if (char === " ") continue;

          // Color palette from Asciify preview:
          // Deep smolder brown -> warm amber -> bright flame gold
          if (heat > 0.7) {
            ctx.fillStyle = "#fbbf24"; // Bright gold (#fbbf24)
          } else if (heat > 0.5) {
            ctx.fillStyle = "#f59e0b"; // Warm orange/amber (#f59e0b)
          } else if (heat > 0.3) {
            ctx.fillStyle = "#b45309"; // Rust amber (#b45309)
          } else {
            ctx.fillStyle = "#78350f"; // Dark smolder bronze (#78350f)
          }

          ctx.fillText(char, x * cellW, y * cellH);
        }
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden -z-10"
      style={{ backgroundColor: "#080604" }}
    >
      {/* 0.35 opacity gives the soft glowing texture while keeping text legible */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-40"
      />
      {/* Top vignette to transition smoothly into the surrounding page */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080604] via-transparent to-transparent pointer-events-none" />
    </div>
  );
}