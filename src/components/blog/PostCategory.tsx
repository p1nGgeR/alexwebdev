import Heading from "@/components/ui/Heading";
import { PostCategory } from "@/ts/models/blog/post";

export default function PostCategory({ category }: { category: PostCategory }) {
  return (
    <Heading as="p" size="sm" className="text-secondary">
      {category.name}
    </Heading>
  );
}
