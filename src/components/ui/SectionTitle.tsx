import Heading from "@/components/ui/Heading";
import SlideRight from "@/components/motion/SlideRight";

export type SectionTitleProps = {
  firstTitle?: string;
  secondTitle?: string;
};

export default function SectionTitle({
  firstTitle = "",
  secondTitle = "",
}: SectionTitleProps) {
  return (
    <SlideRight className={"space-y-2"}>
      <Heading size={"xl"} className="text-accent">
        {firstTitle}
      </Heading>
      {secondTitle ? (
        <h2 className="prose prose-xl prose-invert">{secondTitle}</h2>
      ) : null}
    </SlideRight>
  );
}
