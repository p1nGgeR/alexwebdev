import { absoluteUrl, DOMAIN } from "@/utils";

export const sharedOpenGraph = {
  type: "website",
  url: absoluteUrl(),
  siteName: DOMAIN,
  images: [
    {
      url: absoluteUrl("/images/alexwebdev.png"),
    },
  ],
};

export const sharedTwitter = {
  card: "summary",
  images: [absoluteUrl("/images/alexwebdev.png")],
};
