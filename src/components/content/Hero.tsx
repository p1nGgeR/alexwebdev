import { cn } from "@/utils";
import Heading from "@/components/Heading";
import ButtonLink from "@/components/ButtonLink";
import Container from "@/components/Container";
import SlideUp from "@/components/motion/SlideUp";
import SlideDown from "@/components/motion/SlideDown";
import { AUTHOR, JOB_TITLES } from "@/data/resume";
import TypedText from "@/components/TypedText";

export default function Hero() {
  return (
    <Container
      className={cn(
        "text-center",
        "flex flex-col justify-between items-center gap-8",
        "pt-24 md:pt-48",
      )}
    >
      <SlideDown>
        <Heading size="2xl" className="text-primary" aria-label={AUTHOR}>
          {AUTHOR}
        </Heading>
      </SlideDown>

      <Heading
        as="h2"
        size="xs"
        className="text-accent tracking-wider md:tracking-[0.3rem]"
        aria-label={JOB_TITLES.join(" / ")}
      >
        <TypedText text={JOB_TITLES.join(" / ")} />
      </Heading>

      <SlideUp className="flex gap-8">
        <ButtonLink href={"/about"} text={"About"} />
        <ButtonLink href={"/blog"} text={"Blog"} />
      </SlideUp>
    </Container>
  );
}
