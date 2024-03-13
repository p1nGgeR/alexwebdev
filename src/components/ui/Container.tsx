import { cn } from "@/utils";
import { ElementType, HTMLAttributes, PropsWithChildren } from "react";

export type ContainerProps = PropsWithChildren<HTMLAttributes<HTMLElement>> & {
  as?: ElementType;
};

export default function Container({
  as: Component = "section",
  className,
  children,
  ...restProps
}: ContainerProps) {
  return (
    <Component
      className={cn("container mx-auto max-w-5xl", className || "")}
      {...restProps}
    >
      {children}
    </Component>
  );
}
