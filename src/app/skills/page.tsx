import Skills from "@/components/content/Skills";
import { Metadata } from "next";
import { absoluteUrl, formatSeoTitle } from "@/utils";
import { sharedOpenGraph, sharedTwitter } from "@/data/metadata";

const title = "Skills";
const formattedTitle = formatSeoTitle(title);
const description = "Technologies I have experience with";

export const metadata: Metadata = {
  title: formattedTitle,
  description,
  openGraph: {
    ...sharedOpenGraph,
    url: absoluteUrl("/skills"),
    title: formattedTitle,
    description,
  },
  twitter: {
    ...sharedTwitter,
    title: formattedTitle,
    description,
  },
};

export default function Page() {
  return <Skills firstTitle={title} secondTitle={description} />;
}
