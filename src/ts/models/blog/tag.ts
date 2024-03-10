import { Post } from "@/ts/models/blog/post";

export type Tag = {
  slug: string;
  name: string;
  description?: string;
  hidden?: boolean;
  seo_title?: string;
  seo_description?: string;
  h1?: string;
  h2?: string;
  posts?: Pick<
    Post,
    | "slug"
    | "title"
    | "excerpt"
    | "published_at"
    | "image"
    | "category"
    | "tags"
  >[];
};
