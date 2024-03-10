import BlogList from "@/components/content/blog/BlogList";
import { getAllPosts } from "@/utils/dataProvider/localMarkdown";
import { Metadata } from "next";
import { absoluteUrl, formatSeoTitle } from "@/utils";
import { sharedOpenGraph, sharedTwitter } from "@/data/metadata";

const title = "Blog";
const formattedTitle = formatSeoTitle(title);
const description = "Recent posts";

export const metadata: Metadata = {
  title: formattedTitle,
  description,
  openGraph: {
    ...sharedOpenGraph,
    url: absoluteUrl("/blog"),
    title: formattedTitle,
    description,
  },
  twitter: {
    ...sharedTwitter,
    title: formattedTitle,
    description,
  },
};

export default async function Page() {
  const posts = (await getAllPosts()).sort((post1, post2) =>
    post2.published_at >= post1.published_at ? 1 : -1,
  );

  return (
    <BlogList firstTitle={title} secondTitle={description} posts={posts} />
  );
}
