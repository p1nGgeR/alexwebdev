import { cn } from "@/utils";
import ArrowUpRightIcon from "@/components/icons/ArrowUpRightIcon";

export type ButtonProps = {
  text: string;
  className?: string;
};

export default function Button({ text, className }: ButtonProps) {
  return (
    <span
      className={cn(
        "group relative flex w-fit items-center justify-center overflow-hidden",
        "px-6 py-2",
        "font-bold",
        "rounded-md border-2 border-dark bg-primary",
        "transition-transform ease-out  hover:scale-105",
        className,
      )}
    >
      <span
        className={cn(
          "absolute inset-0 z-0 h-full translate-y-9 bg-accent",
          "transition-transform  duration-300 ease-in-out group-hover:translate-y-0",
        )}
      />
      <span className="relative flex items-center justify-center gap-2">
        {text} <ArrowUpRightIcon />
      </span>
    </span>
  );
}
