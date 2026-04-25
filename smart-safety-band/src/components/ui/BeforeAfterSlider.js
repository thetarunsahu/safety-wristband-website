"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

/**
 * BeforeAfterSlider — Clean, fixed aspect-ratio comparison.
 * Both images are forced to identical dimensions via the same container.
 */
export default function BeforeAfterSlider({ beforeSrc, afterSrc }) {
  const containerRef = useRef(null);

  const sliderPosition = useMotionValue(50);
  const smoothPosition = useSpring(sliderPosition, { stiffness: 400, damping: 40 });
  const clipPath = useTransform(smoothPosition, (val) => `inset(0 ${100 - val}% 0 0)`);

  const [isDragging, setIsDragging] = useState(false);

  const handlePointerMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    sliderPosition.set(percentage);
  };

  const handlePointerDown = (e) => {
    setIsDragging(true);
    // Snap to click position immediately
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      sliderPosition.set((x / rect.width) * 100);
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointermove", handlePointerMove);
    return () => {
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [isDragging]);

  return (
    <motion.div
      className="relative w-full max-w-4xl mx-auto overflow-hidden select-none touch-none"
      style={{
        aspectRatio: "16 / 9",
        borderRadius: "var(--radius-md)",
        boxShadow: "0 16px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        ref={containerRef}
        className="absolute inset-0 cursor-ew-resize"
        onPointerDown={handlePointerDown}
      >
        {/* After Image (background) — The Product */}
        <div className="absolute inset-0">
          <Image
            src={afterSrc}
            alt="Final Product"
            fill
            className="object-cover"
          />
        </div>

        {/* Before Image (foreground, clipped) — The Prototype */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ clipPath }}
        >
          <Image
            src={beforeSrc}
            alt="Raw Prototype"
            fill
            className="object-cover"
            style={{ filter: "grayscale(30%) brightness(0.85)" }}
          />
        </motion.div>

        {/* Slider Line */}
        <motion.div
          className="absolute top-0 bottom-0 w-[2px] bg-cyan-glow pointer-events-none z-10"
          style={{
            left: useTransform(smoothPosition, (val) => `${val}%`),
            boxShadow: "0 0 12px rgba(0,229,255,0.6)",
          }}
        >
          {/* Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/80 backdrop-blur-md border-2 border-cyan-glow flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.3)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-glow">
              <path d="M15 18l6-6-6-6" />
              <path d="M9 18l-6-6 6-6" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 glass px-3 py-1.5 pointer-events-none z-20" style={{ borderRadius: "var(--radius-sm)" }}>
        <p className="text-[10px] tracking-[0.15em] uppercase text-white-subtle font-mono">Before</p>
      </div>
      <div className="absolute top-4 right-4 glass px-3 py-1.5 pointer-events-none z-20" style={{ borderRadius: "var(--radius-sm)" }}>
        <p className="text-[10px] tracking-[0.15em] uppercase text-cyan-glow font-mono">After</p>
      </div>

      {/* Bottom instruction */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass px-4 py-2 pointer-events-none z-20" style={{ borderRadius: "var(--radius-full)" }}>
        <p className="text-[10px] tracking-[0.15em] uppercase text-white-subtle">Drag to compare</p>
      </div>
    </motion.div>
  );
}
