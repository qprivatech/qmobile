import { Hreflang } from "@/components/Hreflang";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Section } from "@/components/Section";
import { useI18n } from "@/lib/i18n";
import { Check, ExternalLink, X } from "lucide-react";

/**
 * Cyclic accent pattern for card titles (blue/green/purple/foreground, i % 4).
 * Matches the Why.tsx rule: dark mode readable, light mode contrast preserved.
 */
const titleColors = [
  "text-accent-blue",
  "text-accent-green",
  "text-accent-purple",
  "text-foreground",
] as const;

const rows = [
  {
    id: "opensource",
    featureKey: "compare.opensource",
    qprivate: true,
    stock: false,
    iphone: false,
    samsung: false,
  },
  {
    id: "nogoogle",
    featureKey: "compare.nogoogle",
    qprivate: true,
    stock: false,
    iphone: true,
    samsung: false,
  },
  {
    id: "kernel",
    featureKey: "compare.kernel",
    qprivate: true,
    stock: false,
    iphone: false,
    samsung: false,
  },
  {
    id: "boot",
    featureKey: "compare.boot",
    qprivate: true,
    stock: true,
    iphone: true,
    samsung: true,
  },
  {
    id: "sandbox",
    featureKey: "compare.sandbox",
    qprivate: true,
    stock: true,
    iphone: true,
    samsung: true,
  },
  {
    id: "network",
    featureKey: "compare.network",
    qprivate: true,
    stock: false,
    iphone: false,
    samsung: false,
  },
  {
    id: "mac",
    featureKey: "compare.mac",
    qprivate: true,
    stock: false,
    iphone: false,
    samsung: false,
  },
  {
    id: "update",
    featureKey: "compare.update",
    qprivate: true,
    stock: true,
    iphone: true,
    samsung: true,
  },
  {
    id: "telemetry",
    featureKey: "compare.telemetry",
    qprivate: true,
    stock: false,
    iphone: false,
    samsung: false,
  },
  {
    id: "contacts",
    featureKey: "compare.contacts",
    qprivate: true,
    stock: false,
    iphone: false,
    samsung: false,
  },
  {
    id: "storage",
    featureKey: "compare.storage",
    qprivate: true,
    stock: false,
    iphone: false,
    samsung: false,
  },
  {
    id: "sensors",
    featureKey: "compare.sensors",
    qprivate: true,
    stock: false,
    iphone: false,
    samsung: false,
  },
  {
    id: "auditable",
    featureKey: "compare.auditable",
    qprivate: true,
    stock: false,
    iphone: false,
    samsung: false,
  },
  {
    id: "reproducible",
    featureKey: "compare.reproducible",
    qprivate: true,
    stock: false,
    iphone: false,
    samsung: false,
  },
  {
    id: "appstore",
    featureKey: "compare.appstore",
    qprivate: true,
    stock: true,
    iphone: true,
    samsung: true,
  },
  {
    id: "opensourcehw",
    featureKey: "compare.opensourcehw",
    qprivate: true,
    stock: false,
    iphone: false,
    samsung: false,
  },
];

const sources = [
  {
    id: "android-security",
    key: "1",
    href: "https://source.android.com/docs/security/overview",
  },
  {
    id: "ios-security",
    key: "2",
    href: "https://csrc.nist.gov/projects/post-quantum-cryptography",
  },
  {
    id: "knox-whitepaper",
    key: "3",
    href: "https://www.edoeb.admin.ch/en/data-protection-law",
  },
  {
    id: "signal-protocol",
    key: "4",
    href: "https://gdpr-info.eu/",
  },
  {
    id: "qprivate-docs",
    key: "5",
    href: "https://grapheneos.org/articles/attestation-certificate-service",
  },
];

export default function Compare() {
  const { t } = useI18n();

  return (
    <div>
      <SEO page="compare" />
      <Hreflang path="/compare" />
      <SchemaOrg type="Organization" />
      <Section variant="card">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-3">
            {t("compare.title")}
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {t("compare.subtitle")}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm" data-ocid="compare.table">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-medium text-foreground min-w-[200px]">
                  {t("compare.feature")}
                </th>
                <th className="text-center py-3 px-4 font-medium text-primary min-w-[100px]">
                  {t("compare.qprivate")}
                </th>
                <th className="text-center py-3 px-4 font-medium text-foreground min-w-[100px]">
                  {t("compare.stock")}
                </th>
                <th className="text-center py-3 px-4 font-medium text-foreground min-w-[100px]">
                  {t("compare.iphone")}
                </th>
                <th className="text-center py-3 px-4 font-medium text-foreground min-w-[100px]">
                  {t("compare.samsung")}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.id}
                  className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
                  data-ocid={`compare.row.${i + 1}`}
                >
                  <td className="py-3 px-4 text-foreground">
                    {t(row.featureKey)}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {row.qprivate ? (
                      <Check className="w-5 h-5 text-success mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-destructive mx-auto" />
                    )}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {row.stock ? (
                      <Check className="w-5 h-5 text-success mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-destructive mx-auto" />
                    )}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {row.iphone ? (
                      <Check className="w-5 h-5 text-success mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-destructive mx-auto" />
                    )}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {row.samsung ? (
                      <Check className="w-5 h-5 text-success mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-destructive mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="mt-8 p-4 bg-muted/30 rounded-xl border border-border">
          <p className="text-sm font-medium text-foreground mb-2">
            {t("compare.legend.title")}
          </p>
          <div className="grid sm:grid-cols-2 gap-2 text-xs text-foreground">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-success" />
              <span>{t("compare.legend.yes")}</span>
            </div>
            <div className="flex items-center gap-2">
              <X className="w-4 h-4 text-destructive" />
              <span>{t("compare.legend.no")}</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Sources Section */}
      <Section variant="muted">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-3 text-center">
            {t("compare.sources.title")}
          </h2>
          <p className="text-foreground text-center mb-8 max-w-lg mx-auto">
            {t("compare.sources.intro")}
          </p>

          <div className="space-y-3" data-ocid="compare.sources.list">
            {sources.map((source, i) => (
              <a
                key={source.id}
                href={source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-4 rounded-xl border border-border bg-card hover:bg-muted/40 transition-smooth"
                data-ocid={`compare.source.item.${i + 1}`}
              >
                <div className="mt-0.5 shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <ExternalLink className="w-4 h-4 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3
                    className={`text-sm font-semibold ${titleColors[i % titleColors.length]} group-hover:text-primary transition-colors truncate`}
                  >
                    {t(`compare.sources.${source.key}.title`)}
                  </h3>
                  <p className="text-xs text-foreground mt-1 leading-relaxed">
                    {t(`compare.sources.${source.key}.desc`)}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" />
              </a>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
