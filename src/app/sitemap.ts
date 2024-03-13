import { MetadataRoute } from "next";
import { absolutePostUrl, absoluteUrl } from "@/utils";
import { getAllPosts } from "@/utils/dataProvider/localMarkdown";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = (await getAllPosts()).map((post) => ({
    url: absolutePostUrl(post),
    lastModified: new Date(post.modified_at),
  }));

  return [
    {
      url: absoluteUrl(),
      lastModified: new Date(),
    },
    {
      url: absoluteUrl("/about"),
      lastModified: new Date(),
    },
    {
      url: absoluteUrl("/blog"),
      lastModified: new Date(),
    },
    ...posts,
  ];
}
