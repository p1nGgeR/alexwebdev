import { Category } from "@/ts/models/blog/category";
import { Tag } from "@/ts/models/blog/tag";

export type PostCategory = Pick<Category, "slug" | "name" | "hidden">;
export type PostTag = Pick<Tag, "slug" | "name" | "hidden">;

export type Post = {
  title: string;
  slug: string;
  published_at: string;
  modified_at: string;
  excerpt: string;
  content: string;
  image: string;
  image_blurred: string;
  seo_title?: string;
  seo_description?: string;
  h1?: string;
  h2?: string;
  category?: PostCategory;
  tags: PostTag[];
};
