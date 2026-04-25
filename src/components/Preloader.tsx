"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  "Initializing safety protocols...",
  "Connecting GPS module...",
  "Verifying emergency contacts...",
  "System ready.",
];

export default function Preloader({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const [msgIndex, setMsgIndex] = useState(0);
  const [done, setDone] = useState(false);

  const handleComplete = useCallback(() => {
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    // Skip if already shown this session
    if (sessionStorage.getItem("preloader_shown")) {
      handleComplete();
      return;
    }

    const duration = 2500;
    const interval = 25;
    let current = 0;

    const timer = setInterval(() => {
      current += (interval / duration) * 100;
      if (current >= 100) {
        clearInterval(timer);
        setProgress(100);
        setDone(true);
        sessionStorage.setItem("preloader_shown", "true");
        setTimeout(handleComplete, 800);
      } else {
        setProgress(current);
        if (current < 20) setMsgIndex(0);
        else if (current < 50) setMsgIndex(1);
        else if (current < 80) setMsgIndex(2);
        else setMsgIndex(3);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [handleComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* EKG Line */}
          <svg
            viewBox="0 0 400 60"
            className="w-64 h-10 mb-8"
            fill="none"
          >
            <motion.path
              d="M0,30 L80,30 L90,10 L100,50 L110,5 L120,55 L130,25 L140,35 L150,30 L400,30"
              stroke="#00E5FF"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0.6 }}
              animate={{ pathLength: progress / 100, opacity: 0.6 }}
              transition={{ duration: 0.1 }}
            />
          </svg>

          {/* Progress Bar */}
          <div className="relative w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full rounded-full"
              style={{
                width: `${progress}%`,
                background:
                  "linear-gradient(90deg, #00E5FF, #00FF88)",
              }}
            />
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full blur-[6px]"
              style={{
                left: `calc(${progress}% - 6px)`,
                background: "#00E5FF",
              }}
            />
          </div>

          {/* Status Message */}
          <motion.p
            key={msgIndex}
            className="mt-6 text-xs tracking-[0.2em] uppercase font-[family-name:var(--font-mono)] text-cyan/60"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {messages[msgIndex]}
          </motion.p>

          {/* Percentage */}
          <p className="mt-2 text-[10px] text-gray-600 font-[family-name:var(--font-mono)]">
            {Math.floor(progress)}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
