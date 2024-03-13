"use client";
import { useScroll, useSpring } from "framer-motion";
import Motion from "@/components/motion/Motion";
import { cn } from "@/utils";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Motion
      style={{ scaleX }}
      className={cn("fixed top-0 left-0 right-0 h-1 bg-accent origin-[0]")}
    />
  );
}
