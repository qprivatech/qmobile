import { useI18n } from "@/lib/i18n";
import { useEffect } from "react";

interface HreflangProps {
  path: string;
}

const baseUrl = "https://qmobile.ch";

const langMap: Record<string, string> = {
  tr: "tr-TR",
  de: "de-DE",
  en: "en-US",
};

export function Hreflang({ path }: HreflangProps) {
  useI18n();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const langs = ["tr", "de", "en"] as const;
    const existing = document.querySelectorAll(
      'link[rel="alternate"][hreflang]',
    );
    for (const el of existing) {
      el.remove();
    }

    for (const l of langs) {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = langMap[l];
      link.href = `${baseUrl}${path}`;
      document.head.appendChild(link);
    }

    const xDefault = document.createElement("link");
    xDefault.rel = "alternate";
    xDefault.hreflang = "x-default";
    const xDefaultPath = `${baseUrl}${path}`;
    xDefault.href = xDefaultPath;
    document.head.appendChild(xDefault);

    return () => {
      const toRemove = document.querySelectorAll(
        'link[rel="alternate"][hreflang]',
      );
      for (const el of toRemove) {
        el.remove();
      }
    };
  }, [path]);

  return null;
}
