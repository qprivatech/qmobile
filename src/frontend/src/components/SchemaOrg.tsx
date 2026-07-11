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

function getFAQPageSchema(lang: Lang): Record<string, unknown> {
  const faqItems: Record<Lang, Array<Record<string, unknown>>> = {
    tr: [
      {
        "@type": "Question",
        name: "Güvenlik odaklı özel işletim sistemi nedir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Güvenlik odaklı özel işletim sistemimiz, Android Açık Kaynak Projesi tabanlı, gizlilik ve güvenlik odaklı bir mobil işletim sistemidir.",
        },
      },
      {
        "@type": "Question",
        name: "Hangi Pixel modelleri mevcut?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Google Pixel 8, Pixel 9 ve Pixel 10 modellerini güvenlik odaklı özel işletim sistemi ön yüklü olarak sunuyoruz.",
        },
      },
      {
        "@type": "Question",
        name: "Google Play uygulamaları çalışır mı?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kumlanmış Google Play veya F-Droid, Aurora Store gibi alternatif mağazaları kullanabilirsiniz.",
        },
      },
      {
        "@type": "Question",
        name: "Güncelleme desteği ne kadar sürer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pixel 8 için 5 yıl, Pixel 9 ve 10 için 4 yıl güvenlik ve işletim sistemi güncellemesi.",
        },
      },
      {
        "@type": "Question",
        name: "Cihazlar sıfır ve kapalı kutu mu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet. Tüm cihazlar sıfır, orijinal ambalajında kapalı kutudur.",
        },
      },
    ],
    de: [
      {
        "@type": "Question",
        name: "Was ist ein sicherheitsorientiertes spezielles Betriebssystem?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unser sicherheitsorientiertes spezielles Betriebssystem ist ein auf dem Android Open Source Project basierendes mobiles Betriebssystem mit Fokus auf Privatsphäre und Sicherheit.",
        },
      },
      {
        "@type": "Question",
        name: "Welche Pixel-Modelle sind verfügbar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wir bieten Google Pixel 8, Pixel 9 und Pixel 10 mit vorinstalliertem sicherheitsorientiertem speziellem Betriebssystem an.",
        },
      },
      {
        "@type": "Question",
        name: "Funktionieren Google Play-Apps?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sie können Sandboxed Google Play oder alternative Stores wie F-Droid und Aurora Store verwenden.",
        },
      },
      {
        "@type": "Question",
        name: "Wie lange dauert der Update-Support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "5 Jahre für Pixel 8, 4 Jahre für Pixel 9 und 10 für Sicherheits- und Betriebssystem-Updates.",
        },
      },
      {
        "@type": "Question",
        name: "Sind die Geräte neu und originalverpackt?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Alle Geräte sind neu und in Originalverpackung.",
        },
      },
    ],
    en: [
      {
        "@type": "Question",
        name: "What is a security-focused custom operating system?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our security-focused custom operating system is a mobile operating system based on the Android Open Source Project, focused on privacy and security.",
        },
      },
      {
        "@type": "Question",
        name: "Which Pixel models are available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer Google Pixel 8, Pixel 9 and Pixel 10 pre-installed with our security-focused custom operating system.",
        },
      },
      {
        "@type": "Question",
        name: "Do Google Play apps work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can use Sandboxed Google Play or alternative stores like F-Droid and Aurora Store.",
        },
      },
      {
        "@type": "Question",
        name: "How long does update support last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "5 years for Pixel 8, 4 years for Pixel 9 and 10 for security and operating system updates.",
        },
      },
      {
        "@type": "Question",
        name: "Are the devices new and sealed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. All devices are brand new and in original sealed packaging.",
        },
      },
    ],
  };

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems[lang] ?? faqItems.en,
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
      return getFAQPageSchema(lang);
    case "BlogPosting":
      return getBlogPostingSchema(data);
    case "Article":
      return getArticleSchema(data);
    default:
      return null;
  }
}

export function SchemaOrg({ type, data }: SchemaOrgProps) {
  const { lang } = useI18n();

  useEffect(() => {
    const schema = getSchema(type, lang, data);
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
  }, [type, lang, data]);

  return null;
}
