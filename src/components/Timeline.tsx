import { cn } from "@/utils";
import { ReactNode } from "react";

export type TimelineItem = {
  key: string;
  contentLeft: ReactNode;
  contentRight: ReactNode;
};

export type TimelineProps = {
  items: TimelineItem[];
};

export default function Timeline({ items }: TimelineProps) {
  return (
    <div>
      {items.map((item) => (
        <div
          key={`timeline-${item.key}`}
          className={cn(
            "relative",
            "flex flex-col justify-center",
            item.contentLeft && item.contentRight
              ? "md:flex-row md:px-0"
              : "md:pl-32",
            "pl-10",
          )}
        >
          {item.contentLeft && (
            <div
              className={cn(
                item.contentRight ? "md:w-1/3 md:pr-16" : "",
                "mb-4 md:text-end",
              )}
            >
              {item.contentLeft}
            </div>
          )}

          <div
            className={cn(
              "absolute",
              item.contentLeft && item.contentRight
                ? "md:relative max-md:left-8"
                : "left-2 md:left-16",
              "top-0 bottom-0",
              "w-px",
              "border-s-2 border-dashed border-secondary",
            )}
          >
            <span
              className={cn(
                "after:content-[''] after:absolute after:top-2.5 after:-left-1.5",
                "after:w-3 after:h-3  after:bg-accent after:rounded-full",
                "before:content-[''] before:absolute before:top-0 before:-left-4",
                "before:w-8 before:h-8 before:bg-darkest before:rounded-full",
                "before:border-2 before:border-dashed before:border-secondary",
              )}
            />
          </div>

          {item.contentRight && (
            <div
              className={cn(
                item.contentLeft ? "md:w-2/3 md:pl-16" : "",
                "pb-16",
              )}
            >
              {item.contentRight}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
