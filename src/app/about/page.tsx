import AboutMe from "@/components/content/AboutMe";
import { Metadata } from "next";
import { absoluteUrl, formatSeoTitle } from "@/utils";
import { sharedOpenGraph, sharedTwitter } from "@/data/metadata";
import Experience from "@/components/content/Experience";
import Education from "@/components/content/Education";
import Skills from "@/components/content/Skills";
import ScrollProgress from "@/components/ui/ScrollProgress";

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
  return (
    <>
      <AboutMe />
      <Experience
        firstTitle={"Work experience"}
        secondTitle={"Responsibilities and achievements during my career"}
      />
      <Skills
        firstTitle={"Skills"}
        secondTitle={"Technologies I have experience with"}
      />
      <Education
        firstTitle={"Education"}
        secondTitle={"A journey that shaped my skills"}
      />

      <ScrollProgress />
    </>
  );
}
