import { Hreflang } from "@/components/Hreflang";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Section } from "@/components/Section";
import { useI18n } from "@/lib/i18n";
import {
  AlertTriangle,
  FileText,
  Headphones,
  RotateCcw,
  Scale,
  Shield,
  Truck,
  Zap,
} from "lucide-react";

const titleColors = [
  "text-accent-blue",
  "text-accent-green",
  "text-accent-purple",
  "text-foreground",
];

const sections = [
  {
    key: "intro",
    icon: FileText,
    titleKey: "terms.introTitle",
    textKeys: ["terms.introText1", "terms.introText2"],
  },
  {
    key: "orders",
    icon: FileText,
    titleKey: "terms.ordersTitle",
    textKeys: ["terms.ordersText", "terms.ordersText1", "terms.ordersText2"],
  },
  {
    key: "shipping",
    icon: Truck,
    titleKey: "terms.shippingTitle",
    textKeys: [
      "terms.shippingText",
      "terms.shippingText1",
      "terms.shippingText2",
    ],
  },
  {
    key: "returns",
    icon: RotateCcw,
    titleKey: "terms.returnsTitle",
    textKeys: ["terms.returnsText", "terms.returnsText1", "terms.returnsText2"],
  },
  {
    key: "support",
    icon: Headphones,
    titleKey: "terms.supportTitle",
    textKeys: ["terms.supportText", "terms.supportText1", "terms.supportText2"],
  },
  {
    key: "updates",
    icon: Zap,
    titleKey: "terms.updatesTitle",
    textKeys: ["terms.updatesText", "terms.updatesText1", "terms.updatesText2"],
  },
  {
    key: "liability",
    icon: AlertTriangle,
    titleKey: "terms.liabilityTitle",
    textKeys: [
      "terms.liabilityText",
      "terms.liabilityText1",
      "terms.liabilityText2",
    ],
  },
  {
    key: "swissLaw",
    icon: Scale,
    titleKey: "terms.swissLawTitle",
    textKeys: ["terms.swissLaw"],
  },
];

export default function Terms() {
  const { t } = useI18n();

  return (
    <div className="space-y-6">
      <SEO page="terms" />
      <Hreflang path="/terms" />
      <SchemaOrg type="Organization" />
      <Section variant="card">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-2">
            {t("footer.terms")}
          </h1>
          <p className="text-muted-foreground mb-8">{t("terms.intro")}</p>

          <div className="space-y-6">
            {sections.map((section, idx) => {
              const Icon = section.icon;
              const titleColor = titleColors[idx % titleColors.length];
              return (
                <div
                  key={section.key}
                  className="bg-card border border-border rounded-xl p-6 shadow-subtle"
                  data-ocid={`terms.section.${section.key}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0 space-y-3">
                      <h2 className={`text-lg font-semibold ${titleColor}`}>
                        {t(section.titleKey)}
                      </h2>
                      <div className="space-y-2">
                        {section.textKeys.map((tk) => (
                          <p
                            key={tk}
                            className="text-sm text-foreground leading-relaxed"
                          >
                            {t(tk)}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-xs text-muted-foreground/60 pt-6 border-t border-border mt-6 text-center">
            {t("terms.swissLaw")}
          </p>
        </div>
      </Section>
    </div>
  );
}
