import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const category = url.searchParams.get("category") ?? undefined;
  const q = url.searchParams.get("q") ?? undefined;

  const apiKey = process.env.GNEWS_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Server: GNEWS_API_KEY not configured" },
      { status: 500 }
    );
  }

  const country = "us";
  const lang = "en";

  let upstreamUrl = `https://gnews.io/api/v4/top-headlines?country=${country}&lang=${lang}&apikey=${apiKey}`;

  if (category && category !== "all") {
    upstreamUrl += `&category=${encodeURIComponent(category)}`;
  }

  if (q) {
    upstreamUrl = `https://gnews.io/api/v4/search?q=${encodeURIComponent(
      q
    )}&lang=${lang}&apikey=${apiKey}`;
  }

  try {
    const res = await fetch(upstreamUrl);
    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json(
        { error: "Upstream error", status: res.status, body: text },
        { status: res.status }
      );
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch upstream", message: String(err) },
      { status: 500 }
    );
  }
}
