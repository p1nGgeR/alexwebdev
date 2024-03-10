import Section from "@/components/Section";
import Image from "next/image";
import { cn } from "@/utils";
import Heading from "@/components/Heading";
import AbsoluteLink from "@/components/AbsoluteLink";
import SlideRight from "@/components/motion/SlideRight";
import Motion from "@/components/motion/Motion";
import { AUTHOR } from "@/data/resume";
import SlideLeft from "@/components/motion/SlideLeft";

export default function AboutMe() {
  return (
    <Section
      className={"flex flex-col gap-8 md:gap-16 md:flex-row-reverse space-y-0"}
    >
      <SlideLeft
        as={Image}
        src={"/images/me.png"}
        className={cn(
          "md:w-80 h-80",
          "border border-secondary",
          "rounded-3xl",
          "object-cover object-center",
        )}
        width={400}
        height={400}
        alt={AUTHOR}
        loading={"eager"}
      />

      <SlideRight
        className={cn(
          "prose prose-xl prose-invert",
          "prose-a:text-accent prose-a:inline-block hover:prose-a:no-underline",
        )}
      >
        <Heading size="xl" className="text-accent">
          About me
        </Heading>

        <p>Hi, I`m Alex, a professional web developer.</p>

        <p>
          I`ve been working as a full-stack web developer since 2016. My main
          speciality is back-end development and I`ve got plenty of front-end
          experience as well. Throughout my career I have released numerous
          projects of varying complexity, converted hundreds of business
          requirements into technical solutions, reviewed thousands of pull
          requests and conducted dozens of interviews.
        </p>

        <p>
          Find out more about my previous
          <AbsoluteLink href={"/experience"} className={"mx-1"}>
            work experience
          </AbsoluteLink>
          and
          <AbsoluteLink href={"/skills"} className={"mx-1"}>
            the technologies
          </AbsoluteLink>
          I have experience with.
        </p>
      </SlideRight>
    </Section>
  );
}
