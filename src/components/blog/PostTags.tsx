import { PostTag } from "@/ts/models/blog/post";

export default function PostTags({ tags }: { tags: PostTag[] }) {
  return (
    <div className="flex gap-4 text-accent font-bold">
      {tags.map((tag) => (
        <span key={`post-tag-${tag.slug}`}># {tag.name}</span>
      ))}
    </div>
  );
}
