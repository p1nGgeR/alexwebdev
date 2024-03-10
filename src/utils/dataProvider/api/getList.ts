import fetchAPI from "./fetchAPI";

export default async function getList<T>(
  path: string,
  params: Record<string, string> = {},
): Promise<T[]> {
  const query = new URLSearchParams(params);
  const queryPath = `${path}?${query.toString()}`;
  const { response, json } = await fetchAPI<{ data: T[] }>(queryPath);

  return response.ok ? json.data : [];
}
