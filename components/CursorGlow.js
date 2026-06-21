"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorGlow() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 80, damping: 18 });
  const smoothY = useSpring(y, { stiffness: 80, damping: 18 });
  
  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;
    const move = (event) => {
      x.set(event.clientX - 160);
      y.set(event.clientY - 160);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-[1] hidden h-80 w-80 rounded-full bg-lime/10 blur-3xl [@media(pointer:fine)]:block"
      style={{ x: smoothX, y: smoothY }}
    />
  );
}
