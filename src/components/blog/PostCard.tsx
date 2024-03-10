import PostTags from "@/components/blog/PostTags";
import Card from "@/components/Card";
import ButtonLink from "@/components/ButtonLink";
import Heading from "@/components/Heading";
import { PropsWithChildren } from "react";
import { absolutePostUrl, dateToLabel } from "@/utils";
import { Post } from "@/ts/models/blog/post";
import AbsoluteLink from "@/components/AbsoluteLink";

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PropsWithChildren<PostCardProps>) {
  const postUrl = absolutePostUrl(post);
  return (
    <Card className="space-y-4" as="article">
      <AbsoluteLink href={absolutePostUrl(post)} title={post.title}>
        <Heading as="h1" size={"md"} className="text-primary hover:underline">
          {post.title}
        </Heading>
      </AbsoluteLink>

      {Array.isArray(post.tags) ? <PostTags tags={post.tags} /> : null}

      <p className="text-primary">{dateToLabel(post.published_at)}</p>

      <p className="text-secondary">{post.excerpt}</p>

      <div>
        <ButtonLink
          href={postUrl}
          text="Read more"
          title={`"${post.title}" - Read more`}
        />
      </div>
    </Card>
  );
}
