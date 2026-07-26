import LazyImage from "@/components/LazyImage";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { getBlogPost } from "@/lib/blog-data";
import { useI18n } from "@/lib/i18n";
import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, FileText } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useMemo } from "react";

function setMetaTag(name: string, content: string, property = false) {
  const attr = property ? "property" : "name";
  let tag = document.querySelector(
    `meta[${attr}="${name}"]`,
  ) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.content = content;
}

function setLinkTag(rel: string, href: string) {
  let link = document.querySelector(
    `link[rel="${rel}"]`,
  ) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.rel = rel;
    document.head.appendChild(link);
  }
  link.href = href;
}

const baseUrl = "https://qmobile.ch";

function getPostSeoMeta(
  slug: string,
  title: string,
  excerpt: string,
  lang: string,
) {
  const canonical = `${baseUrl}/${lang === "tr" ? "" : `${lang}/`}blog/${slug}`;
  return {
    title: `${title} | Qmobile Blog`,
    description: excerpt,
    canonical,
    ogTitle: title,
    ogDescription: excerpt,
    ogType: "article",
    ogImage: `${baseUrl}/assets/generated/og-image.dim_1200x630.png`,
    twitterCard: "summary_large_image",
    twitterTitle: title,
    twitterDescription: excerpt,
    twitterImage: `${baseUrl}/assets/generated/og-image.dim_1200x630.png`,
  };
}

function PostSchemaOrg({
  post,
  lang,
}: {
  post: {
    slug: string;
    title: Record<string, string>;
    excerpt: Record<string, string>;
    category: string;
    image?: string;
  };
  lang: string;
}) {
  const title = post.title[lang] ?? post.title.en;
  const excerpt = post.excerpt[lang] ?? post.excerpt.en;
  const schema = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description: excerpt,
      url: `${baseUrl}/${lang === "tr" ? "" : `${lang}/`}blog/${post.slug}`,
      image: post.image
        ? `${baseUrl}/assets/images/${post.image}`
        : `${baseUrl}/assets/generated/og-image.dim_1200x630.png`,
      publisher: {
        "@type": "Organization",
        name: "Qmobile",
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/assets/logo.png`,
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${baseUrl}/${lang === "tr" ? "" : `${lang}/`}blog/${post.slug}`,
      },
    };
  }, [title, excerpt, lang, post.slug, post.image]);

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD schema data is safe, generated from known object
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function PostHreflang({ slug }: { slug: string }) {
  const langs = [
    { lang: "tr", href: `${baseUrl}/blog/${slug}` },
    { lang: "de", href: `${baseUrl}/de/blog/${slug}` },
    { lang: "en", href: `${baseUrl}/en/blog/${slug}` },
  ];

  return (
    <>
      {langs.map(({ lang, href }) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={href} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={langs[0].href} />
    </>
  );
}

export default function BlogPost() {
  const { t, lang } = useI18n();
  const { slug } = useParams({ from: "/blog/$slug" });
  const post = getBlogPost(slug);

  const seoMeta = useMemo(() => {
    if (!post) return undefined;
    const title = post.title[lang] ?? post.title.en;
    const excerpt = post.excerpt[lang] ?? post.excerpt.en;
    return getPostSeoMeta(slug, title, excerpt, lang);
  }, [post, slug, lang]);

  // Override the static blogPost SEO with per-post dynamic metadata.
  // Runs after the <SEO page="blogPost" /> effect and re-applies on lang/slug change.
  useEffect(() => {
    if (!seoMeta) return;
    document.title = seoMeta.title;
    setMetaTag("description", seoMeta.description);
    setLinkTag("canonical", seoMeta.canonical);
    setMetaTag("og:title", seoMeta.ogTitle, true);
    setMetaTag("og:description", seoMeta.ogDescription, true);
    setMetaTag("og:type", seoMeta.ogType, true);
    setMetaTag("og:url", seoMeta.canonical, true);
    if (seoMeta.ogImage) {
      setMetaTag("og:image", seoMeta.ogImage, true);
      setMetaTag("og:image:width", "1200", true);
      setMetaTag("og:image:height", "630", true);
      setMetaTag("og:image:alt", seoMeta.ogTitle, true);
    }
    setMetaTag("twitter:card", seoMeta.twitterCard);
    setMetaTag("twitter:title", seoMeta.twitterTitle);
    setMetaTag("twitter:description", seoMeta.twitterDescription);
    if (seoMeta.twitterImage) {
      setMetaTag("twitter:image", seoMeta.twitterImage);
    }
  }, [seoMeta]);

  if (!post) {
    return (
      <>
        <SEO page="blog" />
        <section className="flex-1 flex items-center justify-center bg-background py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-md mx-auto px-6"
            data-ocid="blog.not_found"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
              <FileText className="w-8 h-8 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-display font-bold text-foreground mb-3">
              {t("blog.notFound.title")}
            </h1>
            <p className="text-muted-foreground mb-8">
              {t("blog.notFound.desc")}
            </p>
            <Link to="/blog" className="inline-block">
              <Button variant="default" data-ocid="blog.back_button">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t("blog.backToBlog")}
              </Button>
            </Link>
          </motion.div>
        </section>
      </>
    );
  }

  const title = post.title[lang] ?? post.title.en;
  const paragraphs = post.content[lang] ?? post.content.en;

  const categoryLabels: Record<string, Record<string, string>> = {
    Telefon: { tr: "Telefon", de: "Telefon", en: "Phone" },
    Bilgisayar: { tr: "Bilgisayar", de: "Computer", en: "Computer" },
    Tablet: { tr: "Tablet", de: "Tablet", en: "Tablet" },
    Mesajlasma: { tr: "Mesajlaşma", de: "Messaging", en: "Messaging" },
    Guvenlik: { tr: "Güvenlik", de: "Sicherheit", en: "Security" },
    Kripto: { tr: "Kripto", de: "Krypto", en: "Crypto" },
    Borsa: { tr: "Borsa", de: "Börse", en: "Stock Exchange" },
  };

  const categoryLabel = categoryLabels[post.category]?.[lang] ?? post.category;

  return (
    <>
      {seoMeta && (
        <>
          <SEO page="blogPost" />
          <PostSchemaOrg post={post} lang={lang} />
          <PostHreflang slug={slug} />
        </>
      )}
      <article className="bg-background">
        {/* Hero header */}
        <section className="bg-card border-b border-border">
          <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/blog"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
                data-ocid="blog.back_link"
              >
                <ArrowLeft className="w-4 h-4 mr-1.5" />
                {t("blog.backToBlog")}
              </Link>

              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4"
                data-ocid="blog.category_badge"
              >
                {categoryLabel}
              </span>

              <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight">
                {title}
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Post Image */}
        {post.image && (
          <section className="bg-background">
            <div className="max-w-3xl mx-auto px-6 pt-8 md:pt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative w-full h-56 md:h-72 rounded-xl overflow-hidden bg-muted"
              >
                <LazyImage
                  src={`/assets/images/${post.image}`}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </section>
        )}

        {/* Content */}
        <section className="max-w-3xl mx-auto px-6 py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="prose prose-lg max-w-none"
            data-ocid="blog.content"
          >
            {paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 20)}
                className="text-foreground/90 leading-relaxed mb-6 text-base md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Back navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 pt-8 border-t border-border"
          >
            <Link to="/blog" className="inline-block">
              <Button variant="outline" data-ocid="blog.back_to_blog_button">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t("blog.backToBlog")}
              </Button>
            </Link>
          </motion.div>
        </section>
      </article>
    </>
  );
}
