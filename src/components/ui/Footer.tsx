import Container from "@/components/ui/Container";
import { cn } from "@/utils";
import CurrentYear from "@/components/ui/CurrentYear";

export default function Footer() {
  return (
    <Container
      as="footer"
      className={cn("text-center text-secondary pt-8 md:pt-16")}
    >
      <CurrentYear />
    </Container>
  );
}
