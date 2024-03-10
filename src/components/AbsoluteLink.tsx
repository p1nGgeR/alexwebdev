import { default as NextLink, LinkProps as NextLinkProps } from "next/link";
import { HTMLAttributes, PropsWithChildren } from "react";
import { absoluteUrl } from "@/utils";

export type AbsoluteLinkProps = NextLinkProps & {
  text?: string;
  title?: string;
};

export default function AbsoluteLink({
  href,
  text,
  title,
  children,
  ...props
}: PropsWithChildren<AbsoluteLinkProps & HTMLAttributes<HTMLElement>>) {
  return (
    <NextLink
      href={absoluteUrl(href.toString())}
      title={title ?? text}
      {...props}
    >
      {children ?? <a title={title ?? text}>{text}</a>}
    </NextLink>
  );
}
