import { Hreflang } from "@/components/Hreflang";
import LazyImage from "@/components/LazyImage";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { blogCategories, blogPosts } from "@/lib/blog-data";
import { useI18n } from "@/lib/i18n";
import { useState } from "react";

const titleColors = [
  "text-accent-blue",
  "text-accent-green",
  "text-accent-purple",
  "text-foreground",
];

export default function Blog() {
  const { t, lang } = useI18n();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "all" || post.category === activeCategory;
    const searchLower = search.toLowerCase();
    const matchesSearch =
      post.title[lang].toLowerCase().includes(searchLower) ||
      post.excerpt[lang].toLowerCase().includes(searchLower);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <SEO page="blog" />
      <SchemaOrg type="WebSite" />
      <Hreflang path="/blog" />
      {/* Hero / Header Section */}
      <section className="bg-card border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge
              variant="default"
              className="mb-4 bg-accent/10 text-accent border-accent/20"
            >
              {t("blog.badge")}
            </Badge>
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {t("blog.title")}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              {t("blog.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <svg
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t("blog.searchPlaceholder")}
                className="w-full rounded-lg border border-border bg-card py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                data-ocid="blog.search_input"
              />
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap gap-2" data-ocid="blog.filter.tab">
              {blogCategories.map((cat) => (
                <Button
                  key={cat.key}
                  variant={activeCategory === cat.key ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(cat.key)}
                  data-ocid={`blog.filter.${cat.key}`}
                >
                  {cat.label[lang]}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Post Grid */}
      <section className="bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div
              className="flex flex-col items-center justify-center py-20 text-center"
              data-ocid="blog.empty_state"
            >
              <svg
                className="mb-4 h-12 w-12 text-muted-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {t("blog.notFound.title")}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {t("blog.notFound.desc")}
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, index) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block"
                  data-ocid={`blog.item.${index + 1}`}
                >
                  <Card className="h-full transition-shadow hover:shadow-md overflow-hidden">
                    <div className="flex h-full flex-col">
                      {/* Post Image */}
                      <div className="relative w-full h-40 bg-muted overflow-hidden">
                        {post.image ? (
                          <LazyImage
                            src={`/assets/images/${post.image}`}
                            alt={post.title[lang]}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-muted">
                            <svg
                              className="h-10 w-10 text-muted-foreground/50"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={1.5}
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <Badge
                          variant="default"
                          className="mb-3 w-fit capitalize bg-accent/10 text-accent border-accent/20"
                        >
                          {blogCategories.find((c) => c.key === post.category)
                            ?.label[lang] ?? post.category}
                        </Badge>
                        <h3
                          className={`font-display text-lg font-semibold transition-colors group-hover:text-primary ${
                            titleColors[index % titleColors.length]
                          }`}
                        >
                          {post.title[lang]}
                        </h3>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground">
                          {post.excerpt[lang]}
                        </p>
                        <div className="mt-4 flex items-center text-sm font-medium text-primary">
                          <span>{t("blog.readMore")}</span>
                          <svg
                            className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
