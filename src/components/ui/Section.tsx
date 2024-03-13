import Container, { ContainerProps } from "@/components/ui/Container";
import { cn } from "@/utils";

export default function Section({
  children,
  className,
  as = "section",
  ...restProps
}: ContainerProps) {
  return (
    <Container
      className={cn("py-8 md:py-16 space-y-8", className)}
      as={as}
      {...restProps}
    >
      {children}
    </Container>
  );
}
