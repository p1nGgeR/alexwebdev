export default async function fetchAPI<T>(
  path: string,
  config: RequestInit = {},
): Promise<{ response: Response; json: T }> {
  config.headers = {
    ...(config.headers ?? {}),
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `${process.env.API_KEY}`,
  };

  const response = await fetch(`${process.env.API_ENDPOINT}${path}`, config);
  const json = await response.json();

  if (!response.ok) {
    console.error({
      responseStatus: response.status,
      responseStatusText: response.statusText,
      json,
    });
  }

  return { response, json };
}
