"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const duration = 2000;
    const interval = 20;
    let current = 0;

    const timer = setInterval(() => {
      current += (interval / duration) * 100;
      if (current >= 100) {
        clearInterval(timer);
        setProgress(100);
        setTimeout(() => {
          onComplete();
        }, 600); // Wait for exit animation
      } else {
        setProgress(current);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[150] flex flex-col items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
      onAnimationComplete={() => {
        if (progress === 100) onComplete();
      }}
    >
      <div className="relative w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
        {/* Loading Bar */}
        <motion.div
          className="absolute top-0 left-0 h-full bg-cyan-glow"
          style={{ width: `${progress}%` }}
          initial={{ width: "0%" }}
        />
        {/* Glow effect on the tip of the bar */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-glow rounded-full blur-[8px]"
          style={{ left: `calc(${progress}% - 8px)` }}
        />
      </div>
      
      <motion.p
        className="mt-6 text-xs text-cyan-glow/60 tracking-[0.3em] uppercase font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Initializing System... {Math.floor(progress)}%
      </motion.p>
    </motion.div>
  );
}
