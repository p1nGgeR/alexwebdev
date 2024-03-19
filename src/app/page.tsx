import Hero from "@/components/content/Hero";
import { Metadata } from "next";
import { AUTHOR, AUTHOR_LABEL, JOB_TITLES } from "@/data/resume";
import { sharedOpenGraph, sharedTwitter } from "@/data/metadata";

const title = AUTHOR_LABEL;
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
