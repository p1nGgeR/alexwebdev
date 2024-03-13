import { default as NextLink, LinkProps as NextLinkProps } from "next/link";
import { HTMLAttributes, PropsWithChildren } from "react";
import { absoluteUrl, cn } from "@/utils";

export type AbsoluteLinkProps = NextLinkProps & {
  text?: string;
  title?: string;
};

export default function AbsoluteLink({
  href,
  text,
  title,
  children,
  className = "",
  ...props
}: PropsWithChildren<AbsoluteLinkProps & HTMLAttributes<HTMLElement>>) {
  return (
    <NextLink
      href={absoluteUrl(href.toString())}
      title={title ?? text}
      className={cn("focus:outline-dark focus:outline-4", className)}
      {...props}
    >
      {children ?? <a title={title ?? text}>{text}</a>}
    </NextLink>
  );
}
