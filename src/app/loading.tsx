import { cn } from "@/utils";
import SpinnerIcon from "@/components/icons/SpinnerIcon";

export default function Loading() {
  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-screen h-screen z-50 overflow-hidden",
        "bg-darkest bg-opacity-50 flex flex-col items-center justify-center",
      )}
    >
      <SpinnerIcon />
    </div>
  );
}
