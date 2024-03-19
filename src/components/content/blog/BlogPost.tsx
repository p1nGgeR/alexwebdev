import Heading from "@/components/ui/Heading";
import { Post } from "@/ts/models/blog/post";
import Image from "next/image";
import PostTags from "@/components/blog/PostTags";
import { cn, dateToLabel } from "@/utils";
import Markdown from "@/components/ui/Markdown";
import PostCategory from "@/components/blog/PostCategory";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import SlideUp from "@/components/motion/SlideUp";
import ScrollProgress from "@/components/ui/ScrollProgress";

export default function BlogPost({ post }: { post: Post }) {
  return (
    <>
      <Section as="article">
        <Card>
          {post.image ? (
            <Image
              src={post.image}
              alt={post.title}
              priority={true}
              width={950}
              height={400}
              className={cn(
                "md:h-[400px] object-cover object-center rounded-xl mb-4 md:mb-8",
                "bg-center bg-cover",
              )}
              style={{ backgroundImage: `url('${post.image_blurred}')` }}
            />
          ) : null}
          <SlideUp
            className={cn(
              "prose md:prose-lg prose-invert max-w-none",
              "prose-a:text-primary hover:prose-a:no-underline",
            )}
          >
            {post.category ? <PostCategory category={post.category} /> : null}

            <Heading>{post.title}</Heading>

            {Array.isArray(post.tags) ? <PostTags tags={post.tags} /> : null}

            <p className="text-xl font-medium">
              {dateToLabel(post.published_at)}
            </p>

            <hr />

            {post.content && <Markdown content={post.content} />}
          </SlideUp>
        </Card>
      </Section>

      <ScrollProgress />
    </>
  );
}
