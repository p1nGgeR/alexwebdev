import Heading from "@/components/ui/Heading";
import { JobContent } from "@/ts/models/resume/fact";
import { experience } from "@/data/resume";
import Timeline, { TimelineItem } from "@/components/ui/Timeline";
import SectionTitle, { SectionTitleProps } from "@/components/ui/SectionTitle";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import SlideUp from "@/components/motion/SlideUp";

export const EXPERIENCE_SECTION_ID = "experience";

export default function Experience({
  firstTitle,
  secondTitle,
}: SectionTitleProps) {
  const items: TimelineItem[] = experience.map((jobContent) => {
    return {
      key: `education-${jobContent.company}`,
      contentLeft: null,
      contentRight: <ExperienceTimelineContent jobContent={jobContent} />,
    };
  });

  return (
    <Section id={EXPERIENCE_SECTION_ID}>
      <SectionTitle firstTitle={firstTitle} secondTitle={secondTitle} />

      <Card className={"md:py-16"}>
        <Timeline items={items} />
      </Card>
    </Section>
  );
}

function ExperienceTimelineContent({ jobContent }: { jobContent: JobContent }) {
  return (
    <SlideUp className={"space-y-4 text-primary"}>
      <Heading as="p" size="sm">
        {jobContent.role}
      </Heading>
      <Heading as="p" size="xs" className={"text-accent tracking-widest"}>
        {jobContent.company} / {jobContent.timeframe}
      </Heading>
      <Heading as="p" size="xs">
        Responsibilities:
      </Heading>
      <ul className={"list-disc list-inside text-secondary prose"}>
        {jobContent.responsibilities.map((responsibility) => (
          <li key={responsibility}>{responsibility}</li>
        ))}
      </ul>
      <Heading as="p" size="xs">
        Achievements:
      </Heading>
      <ul className={"list-disc list-inside text-secondary prose"}>
        {jobContent.achievements.map((achievement) => (
          <li key={achievement}>{achievement}</li>
        ))}
      </ul>
    </SlideUp>
  );
}
