"use client";

import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import BreakingNews from "@/public/images/breaking-news.jpeg";
import { Article, fetchNews } from "@/app/lib/fetchNews";
import { useCategoryStore } from "@/app/store/categoryStore";

export default function PostArchive() {
  const activeCategory = useCategoryStore((s) => s.activeCategory);
const setActiveCategory = useCategoryStore((s) => s.setActiveCategory);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "All",
    "Top Stories",
    "World",
    "Politics",
    "Business",
    "Tech",
  ];

  const fetchArticles = async (category?: string, query?: string) => {
    setLoading(true);
    setError(null);
    try {
      const articles = await fetchNews(category, query);
      if (articles) {
        setArticles(articles);
      } else {
        setError("No articles found for the selected category or query.");
      }
    } catch (err) {
      setError(
        "Failed to fetch articles: " +
          (err instanceof Error ? err.message : "Unknown error")
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles(
      activeCategory !== "All" ? activeCategory.toLowerCase() : undefined
    );
  }, [activeCategory]);

  useEffect(() => {
    if (searchTerm.trim() === "") return;

    const delay = setTimeout(() => {
      fetchArticles(undefined, searchTerm);
    }, 600);

    return () => clearTimeout(delay);
  }, [searchTerm]);

  return (
    <section className="bg-gray-100 min-h-screen py-10">
      <div className="px-6 md:px-20 lg:px-40 xl:px-56">
        <div className="w-full mx-auto mb-8">
          <div className="relative">
            <FiSearch className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for news, topics..."
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full cursor-pointer text-sm font-medium transition ${
                activeCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 📰 Breaking News Section */}
        {/* <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-md mb-20">
          <Image
            src={BreakingNews}
            alt="Breaking News"
            width={1200}
            height={600}
            className="w-full h-[400px] object-cover"
          />

          <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-10 text-white">
            <div>
              <h2 className="text-4xl max-w-xl font-bold mb-3">
                Breaking: Major Political Event Unfolds
              </h2>
              <p className="max-w-xl mb-5 text-gray-200">
                A significant political event has just occurred, impacting global relations
                and sparking widespread discussion. Our team provides in-depth analysis and live
                updates as the situation develops.
              </p>
              <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 transition px-6 py-2 rounded-full text-white font-medium">
                Read more
              </button>
            </div>
          </div>
        </div> */}

        {articles.length > 0 && (
          <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-md mb-12">
            <Image
              src={articles[0]?.image || BreakingNews}
              alt={articles[0]?.title || "Breaking News"}
              width={1200}
              height={600}
              className="w-full h-[280px] sm:h-[350px] md:h-[400px] object-cover"
            />

            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4 sm:p-6 md:p-10 text-white">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-4xl max-w-xl font-bold mb-3">
                  {articles[0]?.title}
                </h2>

                <p className="max-w-full md:max-w-xl text-sm sm:text-base md:text-lg mb-4 text-gray-200 line-clamp-3 md:line-clamp-none">
                  {articles[0]?.description}
                </p>

                <a
                  href={articles[0]?.url ?? undefined}
                  target="_blank"
                  className="bg-blue-600 cursor-pointer hover:bg-blue-700 transition px-4 py-2 sm:px-5 sm:py-2 text-sm sm:text-base rounded-full text-white font-medium inline-block"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        )}

        <h2 className="text-2xl font-bold mb-8 text-gray-800">
          Recent Articles
        </h2>

        {loading && <p className="text-gray-600 mb-4">Loading articles…</p>}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.length <= 1 && !loading && (
            <p className="text-gray-600">No articles found.</p>
          )}
          {articles.slice(1).map((article) => (
            <a
              key={article.url || article.title}
              href={article.url || undefined}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              {article.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={article.image}
                  alt={article.title ?? "Article image"}
                  className="w-full h-56 object-cover"
                />
              ) : null}

              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 text-gray-800 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                  {article.description || "No description available."}
                </p>
                <p className="text-gray-500 text-sm">
                  {article.publishedAt
                    ? new Date(article.publishedAt).toLocaleDateString(
                        "en-US",
                        {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        }
                      )
                    : "No date"}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
