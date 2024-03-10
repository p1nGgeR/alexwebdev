import { cn } from "@/utils";
import { ContainerProps } from "@/components/Container";

export type CardProps = ContainerProps & {};

export default function Card({
  children,
  className,
  as: Component = "div",
}: CardProps) {
  return (
    <Component
      className={cn(
        "p-4 md:p-8",
        "rounded-2xl border-2 border-lightdark bg-dark",
        className,
      )}
    >
      {children}
    </Component>
  );
}
