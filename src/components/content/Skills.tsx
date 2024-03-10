import Section from "@/components/Section";
import Heading from "@/components/Heading";
import { skillsByCategory } from "@/data/resume";
import Card from "@/components/Card";
import Badge, { BadgeType } from "@/components/Badge";
import { SkillUsage } from "@/ts/models/resume/fact";
import SectionTitle, { SectionTitleProps } from "@/components/SectionTitle";
import FadeIn from "@/components/motion/FadeIn";
import SlideUp from "@/components/motion/SlideUp";

const skillBadgeTypeMap = {
  [SkillUsage.Production]: BadgeType.Success,
  [SkillUsage.Pet]: BadgeType.Warning,
};

export default function Skills({ firstTitle, secondTitle }: SectionTitleProps) {
  return (
    <Section>
      <SectionTitle firstTitle={firstTitle} secondTitle={secondTitle} />

      <div className="grid md:grid-cols-2 gap-8">
        {Array.from(skillsByCategory.entries()).map(([category, skills]) => (
          <Card key={category} className="space-y-8">
            <Heading as="h3" size="sm" className="text-primary">
              {category}
            </Heading>
            <FadeIn className={"flex flex-wrap gap-4"}>
              {skills.map((skill) => (
                <Badge key={skill.name} type={skillBadgeTypeMap[skill.usage]}>
                  {skill.name}
                </Badge>
              ))}
            </FadeIn>
          </Card>
        ))}
      </div>

      <SlideUp className={"flex flex-wrap md:justify-center p-4 gap-4"}>
        <Badge type={BadgeType.Success}>Production</Badge>
        <Badge type={BadgeType.Warning}>Pet projects</Badge>
      </SlideUp>
    </Section>
  );
}
