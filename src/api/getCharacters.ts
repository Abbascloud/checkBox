import { SearchParams } from "../types";
export async function getCharacters<T>(
  url: string,
  searchParams: SearchParams
): Promise<T> {
  const response = await fetch(
    url + "?name=" + searchParams.name + "&status=" + searchParams.status
  );
  const body = await response.json();
  return body;
}
