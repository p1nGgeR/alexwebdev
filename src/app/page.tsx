import Hero from "@/components/content/Hero";
import { Metadata } from "next";
import { AUTHOR, JOB_TITLES } from "@/data/resume";
import { sharedOpenGraph, sharedTwitter } from "@/data/metadata";
import { formatSeoTitle } from "@/utils";

const title = formatSeoTitle(AUTHOR);
const description = `${AUTHOR} - ${JOB_TITLES.join(", ")}`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    ...sharedOpenGraph,
    title,
    description,
  },
  twitter: {
    ...sharedTwitter,
    title,
    description,
  },
};

export default function Page() {
  return <Hero />;
}
