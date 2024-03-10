import Experience from "@/components/content/Experience";
import { Metadata } from "next";
import { absoluteUrl, formatSeoTitle } from "@/utils";
import { sharedOpenGraph, sharedTwitter } from "@/data/metadata";

const title = "Work experience";
const formattedTitle = formatSeoTitle(title);
const description = "Responsibilities and achievements during my career";

export const metadata: Metadata = {
  title: formattedTitle,
  description,
  openGraph: {
    ...sharedOpenGraph,
    url: absoluteUrl("/experience"),
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
  return <Experience firstTitle={title} secondTitle={description} />;
}
