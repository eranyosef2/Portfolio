"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ParallaxWrapperProps {
  children: ReactNode;
  offset?: number;
  className?: string;
}

export default function ParallaxWrapper({
  children,
  offset = 50,
  className = "",
}: ParallaxWrapperProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div ref={ref} style={{ y: springY }} className={className}>
      {children}
    </motion.div>
  );
}

export function ParallaxBackground() {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.4, 0.2]);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      {/* Subtle gradient orbs with parallax */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-indigo-500/[0.07] rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2, opacity }}
        className="absolute top-1/3 -right-32 w-[400px] h-[400px] bg-purple-500/[0.07] rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-cyan-500/[0.05] rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-indigo-500/[0.05] rounded-full blur-3xl"
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
