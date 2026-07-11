import { useI18n } from "@/lib/i18n";
import { getSeoMeta } from "@/lib/seo";
import { useEffect } from "react";

interface SEOProps {
  page: string;
}

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

export function SEO({ page }: SEOProps) {
  const { lang } = useI18n();
  const meta = getSeoMeta(page, lang);

  useEffect(() => {
    document.title = meta.title;

    setMetaTag("description", meta.description);
    setLinkTag("canonical", meta.canonical);

    setMetaTag("og:title", meta.ogTitle, true);
    setMetaTag("og:description", meta.ogDescription, true);
    setMetaTag("og:type", meta.ogType, true);
    setMetaTag("og:url", meta.canonical, true);
    if (meta.ogImage) {
      setMetaTag("og:image", meta.ogImage, true);
      setMetaTag("og:image:width", "1200", true);
      setMetaTag("og:image:height", "630", true);
      setMetaTag("og:image:alt", meta.ogTitle, true);
    }

    setMetaTag("twitter:card", meta.twitterCard);
    setMetaTag("twitter:title", meta.twitterTitle);
    setMetaTag("twitter:description", meta.twitterDescription);
    if (meta.twitterImage) {
      setMetaTag("twitter:image", meta.twitterImage);
    }

    document.documentElement.lang =
      lang === "tr" ? "tr-TR" : lang === "de" ? "de-DE" : "en-US";
  }, [meta, lang]);

  return null;
}
