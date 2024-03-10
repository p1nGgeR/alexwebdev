import Section from "@/components/Section";
import PostCard from "@/components/blog/PostCard";
import { Post } from "@/ts/models/blog/post";
import SectionTitle, { SectionTitleProps } from "@/components/SectionTitle";
import SlideUp from "@/components/motion/SlideUp";

export default function BlogList({
  firstTitle,
  secondTitle,
  posts,
}: SectionTitleProps & { posts: Post[] }) {
  return (
    <Section>
      <SectionTitle firstTitle={firstTitle} secondTitle={secondTitle} />

      <SlideUp className={"space-y-8"}>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </SlideUp>
    </Section>
  );
}
