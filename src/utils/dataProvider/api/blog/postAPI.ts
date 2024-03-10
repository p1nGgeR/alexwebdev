import { Index } from "@/ts/api";
import { Post } from "@/ts/models/blog/post";
import "server-only";
import getOne from "../getOne";
import getPaginatedList from "../getPaginatedList";
import { getSitemap } from "../getSitemap";

export async function getPosts(
  params: Record<string, string> = { page: "1" },
): Promise<({ data: Post[] } & Index) | null> {
  return await getPaginatedList<Post>("/blog/posts", params);
}

export async function getPost(slug: string): Promise<Post | null> {
  return await getOne<Post>(`/blog/posts/${slug}`);
}

export async function getPostSitemap() {
  return await getSitemap("/blog/posts/sitemap");
}
