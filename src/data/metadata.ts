import { absoluteUrl, DOMAIN } from "@/utils";

export const sharedOpenGraph = {
  type: "website",
  url: absoluteUrl(),
  siteName: DOMAIN,
  images: [
    {
      url: absoluteUrl("/images/me.png"),
    },
  ],
};

export const sharedTwitter = {
  card: "summary",
  images: [absoluteUrl("/images/me.png")],
};
