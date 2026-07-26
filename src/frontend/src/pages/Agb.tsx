import { Hreflang } from "@/components/Hreflang";
import { LegalNotice } from "@/components/LegalNotice";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Section } from "@/components/Section";
import { SwissCompliance } from "@/components/SwissCompliance";
import { useI18n } from "@/lib/i18n";
import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  Compass,
  CreditCard,
  FileText,
  FileWarning,
  Lock,
  Scale,
  ShieldCheck,
  Truck,
  Undo2,
} from "lucide-react";

const titleColors = [
  "text-accent-blue",
  "text-accent-green",
  "text-accent-purple",
  "text-foreground",
];

type SectionKey =
  | "scope"
  | "contractFormation"
  | "pricesPayment"
  | "delivery"
  | "warranty"
  | "liability"
  | "withdrawalRight"
  | "dataProtection"
  | "applicableLaw"
  | "severability";

const sections: {
  key: SectionKey;
  icon: typeof FileText;
  bg: string;
  color: string;
}[] = [
  {
    key: "scope",
    icon: Compass,
    bg: "bg-primary/10",
    color: "text-primary",
  },
  {
    key: "contractFormation",
    icon: FileText,
    bg: "bg-emerald-500/10",
    color: "text-emerald-600",
  },
  {
    key: "pricesPayment",
    icon: CreditCard,
    bg: "bg-blue-500/10",
    color: "text-blue-600",
  },
  {
    key: "delivery",
    icon: Truck,
    bg: "bg-amber-500/10",
    color: "text-amber-600",
  },
  {
    key: "warranty",
    icon: ShieldCheck,
    bg: "bg-rose-500/10",
    color: "text-rose-600",
  },
  {
    key: "liability",
    icon: AlertTriangle,
    bg: "bg-primary/10",
    color: "text-primary",
  },
  {
    key: "withdrawalRight",
    icon: Undo2,
    bg: "bg-emerald-500/10",
    color: "text-emerald-600",
  },
  {
    key: "dataProtection",
    icon: Lock,
    bg: "bg-blue-500/10",
    color: "text-blue-600",
  },
  {
    key: "applicableLaw",
    icon: Scale,
    bg: "bg-amber-500/10",
    color: "text-amber-600",
  },
  {
    key: "severability",
    icon: FileWarning,
    bg: "bg-rose-500/10",
    color: "text-rose-600",
  },
];

export default function Agb() {
  const { t } = useI18n();

  return (
    <div className="space-y-0">
      <SEO page="agb" />
      <Hreflang path="/agb" />
      <SchemaOrg type="Organization" />

      {/* Hero header */}
      <Section variant="muted" className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Scale className="w-4 h-4" />
            <span>{t("agb.title")}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-bold text-foreground mb-4">
            {t("agb.title")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("agb.intro")}
          </p>

          {/* CTA to Sales Contract */}
          <div className="mt-6">
            <Link
              to="/sales-contract"
              data-ocid="agb.view_sales_contract.link"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-subtle transition-smooth hover:bg-primary/90 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <FileText className="w-4 h-4" />
              <span>{t("agb.viewSalesContract")}</span>
            </Link>
          </div>
        </div>
      </Section>

      {/* Content cards */}
      <Section variant="default" className="py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          {sections.map((s, idx) => {
            const Icon = s.icon;
            const titleKey = `agb.sections.${s.key}.title`;
            const bodyKey = `agb.sections.${s.key}.body`;
            const titleColor = titleColors[idx % titleColors.length];
            const body = t(bodyKey);
            const paragraphs = body.split("\n\n");
            return (
              <div
                key={s.key}
                data-ocid={`agb.section.${s.key}`}
                className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-subtle transition-smooth hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`shrink-0 w-12 h-12 rounded-xl ${s.bg} flex items-center justify-center`}
                  >
                    <Icon className={`w-6 h-6 ${s.color}`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className={`text-xl font-semibold mb-3 ${titleColor}`}>
                      {t(titleKey)}
                    </h2>
                    <div className="space-y-2">
                      {paragraphs.map((p) => (
                        <p key={p} className="text-foreground leading-relaxed">
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Legal disclaimer */}
      <Section variant="muted" className="py-12">
        <div className="max-w-3xl mx-auto space-y-6">
          <SwissCompliance />
          <LegalNotice />
        </div>
      </Section>

      {/* Trust footer */}
      <Section variant="card" className="py-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Scale className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              {t("footer.tagline")}
            </span>
          </div>
          <p className="text-sm text-muted-foreground/70">
            © {new Date().getFullYear()} Qmobile. {t("footer.rights")}
          </p>
        </div>
      </Section>
    </div>
  );
}
