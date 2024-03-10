import { Index } from "@/ts/api";
import fetchAPI from "./fetchAPI";

export default async function getPaginatedList<T>(
  path: string,
  params: Record<string, string> = { page: "1" },
): Promise<({ data: T[] } & Index) | null> {
  const query = new URLSearchParams(params);
  const queryPath = `${path}?${query.toString()}`;
  const { response, json } = await fetchAPI<{ data: T[] } & Index>(queryPath);

  return response.ok ? json : null;
}
