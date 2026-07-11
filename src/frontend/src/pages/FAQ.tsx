import { Hreflang } from "@/components/Hreflang";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Section } from "@/components/Section";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqKeys = [
  { id: "what", q: "faq.q1", a: "faq.a1" },
  { id: "models", q: "faq.q2", a: "faq.a2" },
  { id: "apps", q: "faq.q3", a: "faq.a3" },
  { id: "updates", q: "faq.q4", a: "faq.a4" },
  { id: "sealed", q: "faq.q5", a: "faq.a5" },
  { id: "shipping", q: "faq.q6", a: "faq.a6" },
  { id: "return", q: "faq.q7", a: "faq.a7" },
  { id: "warranty", q: "faq.q8", a: "faq.a8" },
  { id: "qmsg", q: "faq.q9", a: "faq.a9" },
  { id: "pq", q: "faq.q10", a: "faq.a10" },
  { id: "e2e", q: "faq.q11", a: "faq.a11" },
  { id: "diff", q: "faq.q12", a: "faq.a12" },
  { id: "banking", q: "faq.q13", a: "faq.a13" },
  { id: "migrate", q: "faq.q14", a: "faq.a14" },
  { id: "consulting", q: "faq.q15", a: "faq.a15" },
];

const titleColors = [
  "text-accent-blue",
  "text-accent-green",
  "text-accent-purple",
  "text-foreground",
];

export default function FAQ() {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      <SEO page="faq" />
      <Hreflang path="/faq" />
      <SchemaOrg type="FAQPage" />
      <Section variant="card">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-3">
            {t("faq.title")}
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {t("faq.subtitle")}
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqKeys.map((faq, i) => (
            <div
              key={faq.id}
              className="border border-border rounded-xl bg-card overflow-hidden"
              data-ocid={`faq.item.${i + 1}`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-muted/30 transition-colors"
                data-ocid={`faq.toggle.${i + 1}`}
              >
                <span
                  className={cn(
                    "font-medium text-sm",
                    titleColors[i % titleColors.length],
                  )}
                >
                  {t(faq.q)}
                </span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 text-muted-foreground shrink-0 transition-transform",
                    openIndex === i && "rotate-180",
                  )}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4 text-sm text-foreground leading-relaxed">
                  {t(faq.a)}
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
