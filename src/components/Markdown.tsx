import { PropsWithChildren } from "react";
import ReactMarkdown from "react-markdown";
import { getHighlighter } from "shiki/bundle/web";

interface MarkdownRenderProps {
  content: string;
}

export default async function Markdown({ content }: MarkdownRenderProps) {
  const highlighter = await getHighlighter({
    langs: ["bash", "php", "html", "css", "js", "ts", "jsx", "tsx", "yaml"],
    themes: ["catppuccin-mocha"],
  });

  const components = {
    async code({
      children,
      className,
    }: PropsWithChildren<{ className?: string }>) {
      const hasLang = /language-(\w+)/.exec(className || "");

      return (
        <div
          dangerouslySetInnerHTML={{
            // @ts-ignore
            __html: highlighter.codeToHtml(children, {
              lang: hasLang?.[1] || "plaintext",
              theme: "catppuccin-mocha",
            }),
          }}
        />
      );
    },
    pre({ children }: PropsWithChildren<unknown>) {
      return <>{children}</>;
    },
  };

  // @ts-ignore
  return <ReactMarkdown components={components}>{content}</ReactMarkdown>;
}
