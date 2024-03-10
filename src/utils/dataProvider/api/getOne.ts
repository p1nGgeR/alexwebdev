import fetchAPI from "./fetchAPI";

export default async function getOne<T>(path: string): Promise<T | null> {
  const { response, json } = await fetchAPI<T>(path);

  return response.ok ? json : null;
}
