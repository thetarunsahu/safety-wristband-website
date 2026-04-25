"use client";
import { motion } from "framer-motion";
import Image from "next/image";

/**
 * CinematicImage — Simple, reliable scroll-triggered reveal.
 *
 * NO mouse tilt. NO spring physics. NO nested motion divs.
 * Just: blur→focus + directional slide + subtle hover scale.
 */
export default function CinematicImage({
  src,
  alt,
  width,
  height,
  className = "",
  style = {},
  direction = "up",
  delay = 0,
  priority = false,
}) {
  const directionMap = {
    up:    { y: 40, x: 0 },
    down:  { y: -40, x: 0 },
    left:  { y: 0, x: 40 },
    right: { y: 0, x: -40 },
    none:  { y: 0, x: 0 },
  };
  const offset = directionMap[direction] || directionMap.up;

  return (
    <motion.div
      className={`cinematic-image group ${className}`}
      initial={{
        opacity: 0,
        filter: "blur(8px)",
        y: offset.y,
        x: offset.x,
      }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        x: 0,
      }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
      style={style}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="w-full h-auto object-cover block transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />
    </motion.div>
  );
}
