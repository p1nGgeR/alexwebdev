import Section from "@/components/ui/Section";
import Image from "next/image";
import { cn } from "@/utils";
import Heading from "@/components/ui/Heading";
import SlideRight from "@/components/motion/SlideRight";
import { AUTHOR } from "@/data/resume";
import SlideLeft from "@/components/motion/SlideLeft";
import Link from "next/link";
import { EXPERIENCE_SECTION_ID } from "@/components/content/Experience";
import { SKILLS_SECTION_ID } from "@/components/content/Skills";
import { EDUCATION_SECTION_ID } from "@/components/content/Education";

export default function AboutMe() {
  return (
    <Section
      className={
        "grid md:grid-cols-[2fr,1fr] gap-y-8 md:gap-y-0 md:gap-x-8 space-y-0"
      }
    >
      <SlideLeft
        className={cn(
          "row-start-1 md:col-start-2 md:row-end-3 max-w-sm",
          "aspect-square overflow-hidden",
        )}
      >
        <Image
          src={"/images/me.png"}
          alt={AUTHOR}
          priority={true}
          width={400}
          height={400}
          className={cn(
            "bg-center bg-cover",
            "border-2 border-secondary rounded-3xl",
          )}
          style={{ backgroundImage: `url('/images/me-blurred.png')` }}
        />
      </SlideLeft>

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

        <p className={"space-x-4"}>
          <Link href={`#${EXPERIENCE_SECTION_ID}`}>Experience</Link>
          <Link href={`#${SKILLS_SECTION_ID}`}>Skills</Link>
          <Link href={`#${EDUCATION_SECTION_ID}`}>Education</Link>
        </p>
      </SlideRight>
    </Section>
  );
}
