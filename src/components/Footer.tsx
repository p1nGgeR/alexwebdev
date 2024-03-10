import Container from "@/components/Container";
import { cn } from "@/utils";
import CurrentYear from "@/components/CurrentYear";

export default function Footer() {
  return (
    <Container as="footer" className={cn("text-center text-secondary")}>
      <CurrentYear />
    </Container>
  );
}
