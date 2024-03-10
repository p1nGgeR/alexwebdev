import Heading from "@/components/Heading";
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
        <Heading as={"h2"} size="sm" className="text-primary font-normal">
          {secondTitle}
        </Heading>
      ) : null}
    </SlideRight>
  );
}
