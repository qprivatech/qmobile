import type { Lang } from "@/lib/i18n";
import { useI18n } from "@/lib/i18n";
import { useEffect } from "react";

interface SchemaOrgProps {
  type:
    | "Organization"
    | "Product"
    | "FAQPage"
    | "WebSite"
    | "BlogPosting"
    | "Article";
  data?: Record<string, unknown>;
}

const baseUrl = "https://qmobile.ch";

function getOrganizationSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Qmobile",
    url: baseUrl,
    logo: `${baseUrl}/assets/logo.png`,
    description:
      "Swiss-based privacy technology company offering secure Pixel phones with custom operating system.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Basel",
      addressCountry: "CH",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "qmobile.ch@proton.me",
      contactType: "customer service",
      availableLanguage: ["Turkish", "German", "English"],
    },
    sameAs: [],
    foundingDate: "2020",
    areaServed: "CH",
    brand: {
      "@type": "Brand",
      name: "Qmobile",
    },
  };
}

function getWebSiteSchema(lang: Lang): Record<string, unknown> {
  const names: Record<Lang, string> = {
    tr: "Qmobile - Gizliliğin Kontrolü Sende",
    de: "Qmobile - Datenschutz unter Ihrer Kontrolle",
    en: "Qmobile - Privacy Under Your Control",
  };
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: names[lang],
    url: baseUrl,
    inLanguage: lang === "tr" ? "tr-TR" : lang === "de" ? "de-DE" : "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

function getProductSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Qmobile Secure Pixel Phones",
    image: [
      `${baseUrl}/assets/generated/pixel8.dim_600x600.png`,
      `${baseUrl}/assets/generated/pixel9.dim_600x600.png`,
      `${baseUrl}/assets/generated/pixel10.dim_600x600.png`,
    ],
    description:
      "Google Pixel phones pre-installed with security-focused custom operating system, fully configured for maximum privacy.",
    brand: {
      "@type": "Brand",
      name: "Qmobile",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Google",
    },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "1200",
      highPrice: "1800",
      priceCurrency: "CHF",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
      seller: {
        "@type": "Organization",
        name: "Qmobile",
        url: baseUrl,
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
      bestRating: "5",
      worstRating: "1",
    },
    category: "Electronics > Phones",
    sku: "QMOBILE-PIXEL",
    mpn: "QMOBILE-PIXEL",
  };
}

function getFAQPageSchema(t: (key: string) => string): Record<string, unknown> {
  const faqItems = Array.from({ length: 24 }, (_, i) => {
    const n = i + 1;
    return {
      "@type": "Question",
      name: t(`faq.q${n}`),
      acceptedAnswer: {
        "@type": "Answer",
        text: t(`faq.a${n}`),
      },
    };
  });

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems,
  };
}

function getBlogPostingSchema(
  data?: Record<string, unknown>,
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: (data?.headline as string) || "Qmobile Blog",
    description:
      (data?.description as string) ||
      "Security and privacy insights from Qmobile.",
    author: {
      "@type": "Organization",
      name: "Qmobile",
    },
    publisher: {
      "@type": "Organization",
      name: "Qmobile",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/assets/logo.png`,
      },
    },
    datePublished: (data?.datePublished as string) || new Date().toISOString(),
    url: (data?.url as string) || baseUrl,
  };
}

function getArticleSchema(
  data?: Record<string, unknown>,
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: (data?.headline as string) || "Qmobile Article",
    description:
      (data?.description as string) ||
      "Security and privacy insights from Qmobile.",
    image:
      (data?.image as string) ||
      `${baseUrl}/assets/generated/og-image.dim_1200x630.png`,
    author: {
      "@type": "Organization",
      name: "Qmobile",
    },
    publisher: {
      "@type": "Organization",
      name: "Qmobile",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/assets/logo.png`,
      },
    },
    datePublished: (data?.datePublished as string) || new Date().toISOString(),
    dateModified: (data?.dateModified as string) || new Date().toISOString(),
    url: (data?.url as string) || baseUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": (data?.url as string) || baseUrl,
    },
  };
}

function getSchema(
  type: SchemaOrgProps["type"],
  lang: Lang,
  t: (key: string) => string,
  data?: Record<string, unknown>,
): Record<string, unknown> | null {
  switch (type) {
    case "Organization":
      return getOrganizationSchema();
    case "WebSite":
      return getWebSiteSchema(lang);
    case "Product":
      return getProductSchema();
    case "FAQPage":
      return getFAQPageSchema(t);
    case "BlogPosting":
      return getBlogPostingSchema(data);
    case "Article":
      return getArticleSchema(data);
    default:
      return null;
  }
}

export function SchemaOrg({ type, data }: SchemaOrgProps) {
  const { lang, t } = useI18n();

  useEffect(() => {
    const schema = getSchema(type, lang, t, data);
    if (!schema) return;

    const id = `schema-org-${type}`;
    let script = document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);

    return () => {
      const existing = document.getElementById(id);
      if (existing) {
        document.head.removeChild(existing);
      }
    };
  }, [type, lang, t, data]);

  return null;
}
