import { notFound } from "next/navigation";
import { getAllPosts, getPost } from "@/utils/dataProvider/localMarkdown";
import BlogPost from "@/components/content/blog/BlogPost";
import type { Metadata, ResolvingMetadata } from "next";
import { absolutePostUrl, dateToIso, formatSeoTitle } from "@/utils";
import { sharedOpenGraph, sharedTwitter } from "@/data/metadata";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return {};
  }

  const parentMetadata = await parent;
  const title = formatSeoTitle(post.seo_title || "");
  const description = post.seo_description;
  const tags = post.tags.map((tag) => tag.name);

  return {
    title,
    description,
    keywords: tags,
    openGraph: {
      ...sharedOpenGraph,
      url: absolutePostUrl(post),
      type: "article",
      title,
      description,
      publishedTime: dateToIso(post.published_at),
      modifiedTime: dateToIso(post.modified_at),
      authors: parentMetadata.authors?.map((author) => author.name || ""),
      // section: null, Will be used if categories added
      tags: tags,
      images: [
        {
          url: post.image,
        },
      ],
    },
    twitter: {
      ...sharedTwitter,
      title,
      description,
      images: [post.image],
    },
  };
}

export default async function Page({ params }: Props) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return <BlogPost post={post} />;
}
