import Education from "@/components/content/Education";
import { Metadata } from "next";
import { absoluteUrl, formatSeoTitle } from "@/utils";
import { sharedOpenGraph, sharedTwitter } from "@/data/metadata";

const title = "Education";
const formattedTitle = formatSeoTitle(title);
const description = "A journey that shaped my skills";

export const metadata: Metadata = {
  title: formattedTitle,
  description,
  openGraph: {
    ...sharedOpenGraph,
    url: absoluteUrl("/education"),
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
  return <Education firstTitle={title} secondTitle={description} />;
}
