"use client";
import { animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import Motion from "@/components/motion/Motion";

export default function TypedText({ text }: { text: string }) {
  const count = useMotionValue(0);
  const displayText = useTransform(count, (latest) =>
    text.slice(0, Math.round(latest)),
  );

  useEffect(() => {
    const controls = animate(count, text.length, {
      duration: 1,
    });
    return controls.stop;
  }, []);

  return <Motion as={"span"}>{displayText}</Motion>;
}
