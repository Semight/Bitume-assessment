export type Article = {
  source?: { id?: string | null; name?: string | null };
  author?: string | null;
  title?: string | null;
  description?: string | null;
  url?: string | null;
  image?: string | null;
  publishedAt?: string | null;
  content?: string | null;
};


// export async function fetchNews(category?: string, query?: string) : Promise<Article[] | null> {
//   const apiKey = process.env.NEXT_PUBLIC_GNEWS_API_KEY;
//   const baseUrl = 'https://gnews.io/api/v4/top-headlines';
//   const country = 'us';

//   let url = `${baseUrl}?country=${country}&apikey=${apiKey}`;

//   if (category && category !== 'all') {
//     url += `&category=${category}`;
//   }

//   if (query) {
//     url = `https://gnews.io/api/v4/search?q=${query}&apikey=${apiKey}`;
//   }

//   try {
//     const res = await fetch(url);
//     if (!res.ok) throw new Error('Failed to fetch news');
//     const data = await res.json();
//     return data.articles as Article[] || [];
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// }

export async function fetchNews(category?: string, query?: string) {
  const url = new URL("/api/news", window.location.origin);

  if (category) url.searchParams.set("category", category);
  if (query) url.searchParams.set("q", query);

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error("Failed to fetch news");
  const data = await res.json();
  return data.articles || [];
}
