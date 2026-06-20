"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { label: "Projects Completed", value: 24, suffix: "+" },
  { label: "Technologies", value: 18, suffix: "+" },
  { label: "Years Coding", value: 3, suffix: "+" },
  { label: "Happy Clients", value: 12, suffix: "+" }
];

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, { duration: 1.4, ease: "easeOut" });
    return controls.stop;
  }, [count, inView, value]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-[1.25rem] border border-line bg-coal p-6">
          <p className="font-display text-5xl font-black text-lime">
            <Counter value={stat.value} suffix={stat.suffix} />
          </p>
          <p className="mt-3 text-sm font-bold text-muted">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
