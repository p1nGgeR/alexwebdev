import { Post } from "@/ts/models/blog/post";
import "server-only";
import getAll from "../getAll";
import getOne from "../getOne";

export async function getAllPosts(): Promise<Post[]> {
  return (await getAll<Post>("blog")).map((postData) => ({
    ...postData.data,
    slug: postData.fileName,
  }));
}

export async function getPost(slug: string): Promise<Post | null> {
  const post = await getOne<Post>("blog", slug);

  return post
    ? {
        ...post,
        slug,
      }
    : null;
}
