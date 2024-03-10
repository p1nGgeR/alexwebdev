import Heading from "@/components/Heading";
import { EducationContent } from "@/ts/models/resume/fact";
import Timeline, { TimelineItem } from "@/components/Timeline";
import { education } from "@/data/resume";
import SectionTitle, { SectionTitleProps } from "@/components/SectionTitle";
import Card from "@/components/Card";
import Section from "@/components/Section";
import SlideUp from "@/components/motion/SlideUp";

export default function Education({
  firstTitle,
  secondTitle,
}: SectionTitleProps) {
  const items: TimelineItem[] = education.map((educationContent, index) => {
    return {
      key: `education-${index}`,
      contentLeft: null,
      contentRight: (
        <EducationTimelineContent educationContent={educationContent} />
      ),
    } as TimelineItem;
  });

  return (
    <Section>
      <SectionTitle firstTitle={firstTitle} secondTitle={secondTitle} />

      <SlideUp>
        <Card className={"md:py-16"}>
          <Timeline items={items} />
        </Card>
      </SlideUp>
    </Section>
  );
}

function EducationTimelineContent({
  educationContent,
}: {
  educationContent: EducationContent;
}) {
  return (
    <div className={"space-y-4 text-primary"}>
      <Heading as="p" size="sm">
        {educationContent.university}
      </Heading>
      <Heading as="p" size="xs" className={"text-accent tracking-widest"}>
        {educationContent.degree} / {educationContent.timeframe}
      </Heading>
      <Heading as="p" size="xs">
        Speciality:{" "}
        <span className={"text-secondary font-normal"}>
          {educationContent.speciality}
        </span>
      </Heading>
      <Heading as="p" size="xs">
        Qualification:{" "}
        <span className={"text-secondary font-normal"}>
          {educationContent.qualification}
        </span>
      </Heading>
    </div>
  );
}
