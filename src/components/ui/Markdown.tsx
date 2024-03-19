import { Children, createElement, PropsWithChildren } from "react";
import ReactMarkdown from "react-markdown";
import { getHighlighter } from "shiki/bundle/web";

interface MarkdownRenderProps {
  content: string;
}

function flatten(text: string, child: any): string {
  return typeof child === "string"
    ? text + child
    : Children.toArray(child.props.children).reduce(flatten, text);
}

function Heading(props: PropsWithChildren<any>) {
  var children = Children.toArray(props.children);
  var text = children.reduce(flatten, "");
  var slug = text.toLowerCase().replace(/\W/g, "-");
  return createElement("h" + props.level, { id: slug }, props.children);
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
    h1: (props: PropsWithChildren<any>) => <Heading level={1} {...props} />,
    h2: (props: PropsWithChildren<any>) => <Heading level={2} {...props} />,
    h3: (props: PropsWithChildren<any>) => <Heading level={3} {...props} />,
  };

  return (
    <ReactMarkdown
      // @ts-ignore
      components={components}
    >
      {content}
    </ReactMarkdown>
  );
}
