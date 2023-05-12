import { AppLocale, Continent, Country, Post } from "types/global";

export async function getPostsByTag({
  locale,
}: {
  locale: AppLocale;
}): Promise<{ posts: Post[] }> {
  const url = `${process.env.baseUrl}/${locale}/api/post`;
  const res = await fetch(url);
  // const res = await fetch(url, { next: { revalidate: 0 } });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

interface GetPostResponse {
  post: Post;
}

export async function getPost(
  slug: string,
  locale: AppLocale
): Promise<GetPostResponse> {
  const url = `${process.env.baseUrl}/${locale}/api/post/${slug}`;
  const res = await fetch(url);
  // const res = await fetch(url, { next: { revalidate: 0 } });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

interface GetContinentResponse {
  continent: Continent;
}

export async function getContinent(
  slug: string,
  locale: AppLocale
): Promise<GetContinentResponse> {
  const url = `${process.env.baseUrl}/${locale}/api/continent/${slug}`;
  // const res = await fetch(url);
  const res = await fetch(url, { next: { revalidate: 0 } });

  if (!res.ok) {
    throw new Error("Failed to fetch continent");
  }

  return res.json();
}

interface GetCountryResponse {
  country: Country;
}

export async function getCountry(
  slug: string,
  locale: AppLocale
): Promise<GetCountryResponse> {
  const url = `${process.env.baseUrl}/${locale}/api/country/${slug}`;
  const res = await fetch(url);
  // const res = await fetch(url, { next: { revalidate: 0 } });

  if (!res.ok) {
    throw new Error("Failed to fetch continent");
  }

  return res.json();
}
