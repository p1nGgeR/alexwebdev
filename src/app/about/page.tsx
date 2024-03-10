import AboutMe from "@/components/content/AboutMe";
import { Metadata } from "next";
import { absoluteUrl, formatSeoTitle } from "@/utils";
import { sharedOpenGraph, sharedTwitter } from "@/data/metadata";

const title = "About me";
const formattedTitle = formatSeoTitle(title);
const description =
  "I've been working as a full-stack web developer since 2016. " +
  "My main speciality is back-end development and I have a lot of front-end experience as well";

export const metadata: Metadata = {
  title: formattedTitle,
  description,
  openGraph: {
    ...sharedOpenGraph,
    url: absoluteUrl("/about"),
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
  return <AboutMe />;
}
