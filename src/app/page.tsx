import Hero from "@/components/content/Hero";
import { Metadata } from "next";
import { AUTHOR, JOB_TITLES } from "@/data/resume";
import { sharedOpenGraph, sharedTwitter } from "@/data/metadata";
import { absoluteUrl } from "@/utils";

const title = AUTHOR;
const description = JOB_TITLES.join(" / ");

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
