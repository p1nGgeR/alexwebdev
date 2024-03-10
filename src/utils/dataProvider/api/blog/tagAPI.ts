import { Tag } from "@/ts/models/blog/tag";
import "server-only";
import getList from "../getList";
import getOne from "../getOne";
import { getSitemap } from "../getSitemap";

export async function getTags(): Promise<Tag[]> {
  return await getList<Tag>(`/blog/tags`);
}

export async function getTag(slug: string): Promise<Tag | null> {
  return await getOne<Tag>(`/blog/tags/${slug}`);
}

export async function getTagSitemap() {
  return await getSitemap("/blog/tags/sitemap");
}
