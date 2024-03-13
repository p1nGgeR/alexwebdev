import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import { skillsByCategory } from "@/data/resume";
import Card from "@/components/ui/Card";
import Badge, { BadgeType } from "@/components/ui/Badge";
import { SkillUsage } from "@/ts/models/resume/fact";
import SectionTitle, { SectionTitleProps } from "@/components/ui/SectionTitle";
import FadeIn from "@/components/motion/FadeIn";
import SlideUp from "@/components/motion/SlideUp";

const skillBadgeTypeMap = {
  [SkillUsage.Production]: BadgeType.Success,
  [SkillUsage.Pet]: BadgeType.Warning,
};

export const SKILLS_SECTION_ID = "skills";

export default function Skills({ firstTitle, secondTitle }: SectionTitleProps) {
  return (
    <Section id={SKILLS_SECTION_ID}>
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
