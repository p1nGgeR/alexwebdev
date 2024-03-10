import { SitemapResponse } from "@/ts/api";
import "server-only";
import fetchAPI from "./fetchAPI";

export async function getSitemap(path: string) {
  const { response, json } = await fetchAPI<SitemapResponse>(path);

  return !response.ok || json.data.length === 0 ? [] : json.data;
}
