import { cn } from "@/utils";
import { PropsWithChildren } from "react";

export type HeadingComponent = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

export type HeadingSize = "2xl" | "xl" | "lg" | "md" | "sm" | "xs";

export type HeadingProps = {
  as?: HeadingComponent;
  size?: HeadingSize;
  className?: string;
};

export default function Heading({
  as: Component = "h1",
  className,
  children,
  size = "lg",
}: PropsWithChildren<HeadingProps>) {
  return (
    <Component
      className={cn(
        "font-bold leading-tight tracking-tight",
        size === "2xl" && "text-7xl md:text-9xl",
        size === "xl" && "text-6xl md:text-7xl",
        size === "lg" && "text-4xl md:text-6xl",
        size === "md" && "text-3xl md:text-4xl",
        size === "sm" && "text-2xl md:text-3xl",
        size === "xs" && "md:text-xl",
        className,
      )}
    >
      {children}
    </Component>
  );
}
