import Button, { ButtonProps } from "@/components/ui/Button";
import AbsoluteLink, { AbsoluteLinkProps } from "@/components/ui/AbsoluteLink";

export type ButtonLinkProps = ButtonProps & AbsoluteLinkProps;

export default function ButtonLink({ className, ...props }: ButtonLinkProps) {
  return (
    <AbsoluteLink {...props}>
      <Button className={className} {...props} />
    </AbsoluteLink>
  );
}
