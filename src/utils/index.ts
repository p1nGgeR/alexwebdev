import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Post } from "@/ts/models/blog/post";
import { AUTHOR_LABEL } from "@/data/resume";

export const DOMAIN =
  process.env.NEXT_PUBLIC_DOMAIN || process.env.VERCEL_URL || "localhost:3000";

export const SITE_URL =
  DOMAIN.includes("localhost") || DOMAIN.includes("192.168")
    ? `http://${DOMAIN}`
    : `https://${DOMAIN}`;

export function absoluteUrl(url: string = ""): string {
  return new URL(url, SITE_URL).toString();
}

export function absolutePostUrl(post: Post): string {
  return absoluteUrl(`/blog/posts/${post.slug}`);
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// date formatting
export function dateToLabel(dateString: string): string {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Intl.DateTimeFormat("en-US", options).format(date);
}

export function dateToIso(dateString: string): string {
  return new Date(dateString).toISOString();
}

// SEO
export function formatSeoTitle(title: string): string {
  return `${title} - ${AUTHOR_LABEL}`;
}
