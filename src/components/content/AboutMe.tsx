import Section from "@/components/ui/Section";
import { cn } from "@/utils";
import Heading from "@/components/ui/Heading";
import SlideRight from "@/components/motion/SlideRight";
import Link from "next/link";
import { EXPERIENCE_SECTION_ID } from "@/components/content/Experience";
import { SKILLS_SECTION_ID } from "@/components/content/Skills";
import { EDUCATION_SECTION_ID } from "@/components/content/Education";

export default function AboutMe() {
  return (
    <Section className={"space-y-0"}>
      <SlideRight
        className={cn(
          "prose prose-xl prose-invert",
          "prose-a:text-accent prose-a:inline-block hover:prose-a:no-underline",
        )}
      >
        <Heading size="xl" className="text-accent mb-8 md:mb-16">
          About me
        </Heading>

        <p>Hi, I`m Alex, a professional web developer.</p>

        <p>
          I`ve been working as a full-stack web developer since 2016. My main
          speciality is back-end development and I`ve got plenty of front-end
          experience as well.
        </p>

        <p>
          Throughout my career I have released numerous projects of varying
          complexity, converted hundreds of business requirements into technical
          solutions, reviewed thousands of pull requests and conducted dozens of
          interviews.
        </p>

        <p>
          Besides coding, I find joy in helping others to improve their skills,
          making the learning journey smoother for everyone on the team.
        </p>

        <p>
          I`m excited to continue leveraging and improving my skills to
          contribute to innovative and impactful projects.
        </p>

        <p className={"space-x-4 mt-8 md:mt-16"}>
          <Link href={`#${EXPERIENCE_SECTION_ID}`}>Experience</Link>
          <Link href={`#${SKILLS_SECTION_ID}`}>Skills</Link>
          <Link href={`#${EDUCATION_SECTION_ID}`}>Education</Link>
        </p>
      </SlideRight>
    </Section>
  );
}
