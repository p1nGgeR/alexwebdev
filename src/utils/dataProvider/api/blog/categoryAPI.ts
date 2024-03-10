import { Category } from "@/ts/models/blog/category";
import "server-only";
import getList from "../getList";
import getOne from "../getOne";
import { getSitemap } from "../getSitemap";

export async function getCategories(): Promise<Category[]> {
  return await getList<Category>(`/blog/categories`);
}

export async function getCategory(slug: string): Promise<Category | null> {
  return await getOne<Category>(`/blog/categories/${slug}`);
}

export async function getCategorySitemap() {
  return await getSitemap("/blog/categories/sitemap");
}
