"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Scroll-Fortschritt als feine goldene Linie am linken Bildschirmrand. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{ scaleY }}
      className="fixed bottom-0 left-0 top-0 z-50 w-[3px] origin-top bg-gradient-to-b from-gold to-gold-soft"
      aria-hidden
    />
  );
}
