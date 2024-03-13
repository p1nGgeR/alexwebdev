"use client";
import Container from "@/components/ui/Container";
import { cn } from "@/utils";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import AbsoluteLink, { AbsoluteLinkProps } from "@/components/ui/AbsoluteLink";
import { AUTHOR } from "@/data/resume";
import { useScroll, useVelocity } from "framer-motion";
import Bars4Icon from "@/components/icons/Bars4Icon";
import XMarkIcon from "@/components/icons/XMarkIcon";

const headerNavigationItems: AbsoluteLinkProps[] = [
  { text: "About", href: "/about" },
  { text: "Blog", href: "/blog" },
];

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const [isScrollingBack, setIsScrollingBack] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    const updateScrollingBack = (latest: number) => {
      if (latest > 0) {
        setIsScrollingBack(false);
        return;
      }
      if (latest < 0) {
        setIsScrollingBack(true);
        return;
      }
    };

    scrollVelocity.on("change", updateScrollingBack);

    const updateIsAtTop = (latest: number) =>
      setIsAtTop(latest <= (headerRef.current?.clientHeight ?? 0));

    scrollY.on("change", updateIsAtTop);
  }, []);

  useEffect(
    () => setIsInView(isScrollingBack || isAtTop),
    [isScrollingBack, isAtTop],
  );

  return (
    <>
      <Container
        as={"header"}
        className={cn(
          "z-40 top-1 sticky duration-300 text-dark",
          isInView ? "translate-y-0" : `-translate-y-[110%]`,
        )}
      >
        <nav
          ref={headerRef}
          aria-label="Main navigation"
          className={cn(
            "flex justify-between items-center",
            "bg-primary",
            "p-2 md:p-4",
            "rounded-lg md:rounded-xl",
          )}
        >
          <AbsoluteLink
            href="/"
            aria-label={`${AUTHOR} - Homepage`}
            className="text-xl font-extrabold tracking-tighter text-dark"
          >
            {AUTHOR}
          </AbsoluteLink>
          <ul className="hidden md:flex flex-row items-center gap-1 text-base font-bold text-dark">
            {headerNavigationItems.map(({ href, text }, index) => (
              <li key={text}>
                <AbsoluteLink
                  href={href}
                  className={cn(
                    "group relative block overflow-hidden rounded px-3 py-1",
                  )}
                  aria-current={
                    pathname.includes(href as string) ? "page" : undefined
                  }
                >
                  <span
                    className={cn(
                      "absolute inset-0 z-0 h-full rounded bg-accent transition-transform  duration-300 ease-in-out group-hover:translate-y-0",
                      pathname.includes(href as string)
                        ? "translate-y-6"
                        : "translate-y-8",
                    )}
                  />
                  <span className="relative">{text}</span>
                </AbsoluteLink>
              </li>
            ))}
          </ul>
          <button
            aria-expanded={sidebarOpen}
            aria-label="Show sidebar"
            className="p-2 text-2xl md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Bars4Icon />
          </button>
        </nav>
      </Container>
      <aside
        className={cn(
          "fixed bottom-0 left-0 right-0 top-0 z-40",
          "flex flex-col items-end",
          "gap-8 p-8",
          "font-bold text-dark text-2xl",
          "bg-primary",
          "transition-transform duration-300 ease-in-out md:hidden",
          sidebarOpen ? "translate-x-0" : "translate-x-[100%]",
        )}
      >
        <button
          aria-label="Hide sidebar"
          aria-expanded={sidebarOpen}
          onClick={() => setSidebarOpen(false)}
        >
          <XMarkIcon />
        </button>
        <ul className={cn("flex flex-col items-end gap-8")}>
          {headerNavigationItems.map(({ href, text }, index) => (
            <li key={text}>
              <AbsoluteLink
                href={href}
                className={cn(
                  "p-1",
                  pathname.includes(href as string)
                    ? "border-b-8 border-b-accent rounded"
                    : "",
                )}
                aria-current={
                  pathname.includes(href as string) ? "page" : undefined
                }
                onClick={() => setSidebarOpen(false)}
              >
                {text}
              </AbsoluteLink>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
