"use client";
import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/utils";
import ArrowUp from "@/components/icons/ArrowUp";
import FadeIn from "@/components/motion/FadeIn";

const THRESHOLD = 100;

export default function ScrollTop() {
  const { scrollY } = useScroll();
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    scrollY.on("change", (latest) => {
      setShowScrollTop(latest > THRESHOLD);
    });

    return () => {
      scrollY.destroy();
    };
  }, [scrollY]);

  return showScrollTop ? (
    <FadeIn
      as={"button"}
      name={"scroll-to-top"}
      aria-label={"Scroll to top"}
      onClick={() =>
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        })
      }
      className={cn(
        "inline-block",
        "fixed bottom-4 right-4 md:right-8 z-50",
        "p-2",
        "bg-dark border border-secondary rounded-full hover:border-accent",
        "text-secondary hover:text-accent",
      )}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.2 }}
    >
      <ArrowUp />
    </FadeIn>
  ) : null;
}
