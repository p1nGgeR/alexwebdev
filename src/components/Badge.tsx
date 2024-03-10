import { cn } from "@/utils";
import { HTMLAttributes, PropsWithChildren } from "react";

export enum BadgeType {
  Success,
  Warning,
}

export type BadgeProps = PropsWithChildren<HTMLAttributes<HTMLElement>> & {
  type?: BadgeType;
};

export default function Badge({
  children,
  className,
  type = BadgeType.Success,
}: BadgeProps) {
  const borderColorMap = {
    [BadgeType.Success]: "border-success",
    [BadgeType.Warning]: "border-warning",
  };

  return (
    <span
      className={cn(
        "px-4 pt-2 pb-1 font-bold",
        "rounded-md border-b-4 bg-primary",
        borderColorMap[type],
        className,
      )}
    >
      {children}
    </span>
  );
}
