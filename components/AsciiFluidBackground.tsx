"use client";

import React, { useEffect, useRef } from "react";

export default function AsciiFluidBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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

    const charWidth = 14;
    const charHeight = 20;
    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;

    const resize = () => {
      width = canvas.width = container.clientWidth;
      height = canvas.height = container.clientHeight;
      cols = Math.floor(width / charWidth);
      rows = Math.floor(height / charHeight);
    };
    resize();

    const charset = " .:-=+*#%@";
    const charLen = charset.length;

    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", resize);

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    let time = 0;

    const render = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(render);

      if (!isVisible) return;

      const delta = currentTime - lastTime;
      if (delta < interval) return;
      lastTime = currentTime - (delta % interval);

      time += 0.03;

      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      // Dark background canvas
      ctx.fillStyle = "#050107";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `bold 13px monospace`;
      ctx.textBaseline = "top";

      const mxNorm = mouse.x / width;
      const myNorm = mouse.y / height;

      for (let r = 0; r < rows; r += 1) {
        const yNorm = r / rows;
        for (let c = 0; c < cols; c += 1) {
          const xNorm = c / cols;

          const wave = Math.sin(xNorm * 4.0 + time + Math.cos(yNorm * 3.0 - time * 0.7));

          const dx = xNorm - mxNorm;
          const dy = yNorm - myNorm;
          const distSq = dx * dx + dy * dy;
          const wake = Math.sin(Math.sqrt(distSq) * 16.0 - time * 3.0) * Math.exp(-distSq * 6.0);

          let intensity = (wave + wake * 1.8 + 1.2) / 2.4;
          if (intensity < 0.1) continue;
          if (intensity > 0.95) intensity = 0.95;

          const char = charset[Math.floor(intensity * charLen)];

          // Dark-mode colors: deep cyan, ice blue, and subtle violet (No Green)
          if (intensity > 0.65) {
            ctx.fillStyle = "#38bdf8"; // Light sky blue
          } else if (intensity > 0.45) {
            ctx.fillStyle = "#818cf8"; // Indigo violet
          } else {
            ctx.fillStyle = "#334155"; // Deep slate
          }

          ctx.fillText(char, c * charWidth, r * charHeight);
        }
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden -z-10"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_30%,rgba(5,1,7,0.95)_100%]" />
    </div>
  );
}