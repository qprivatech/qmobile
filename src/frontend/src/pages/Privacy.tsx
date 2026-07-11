import { Hreflang } from "@/components/Hreflang";
import { LegalNotice } from "@/components/LegalNotice";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Section } from "@/components/Section";
import { useI18n } from "@/lib/i18n";
import { Eye, FileText, Lock, Scale, Shield } from "lucide-react";

const titleColors = [
  "text-accent-blue",
  "text-accent-green",
  "text-accent-purple",
  "text-foreground",
];

const sections = [
  {
    key: "intro",
    icon: Shield,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    key: "collect",
    icon: Eye,
    color: "text-emerald-600",
    bg: "bg-emerald-500/10",
  },
  {
    key: "use",
    icon: FileText,
    color: "text-blue-600",
    bg: "bg-blue-500/10",
  },
  {
    key: "security",
    icon: Lock,
    color: "text-amber-600",
    bg: "bg-amber-500/10",
  },
  {
    key: "rights",
    icon: Scale,
    color: "text-rose-600",
    bg: "bg-rose-500/10",
  },
];

export default function Privacy() {
  const { t } = useI18n();

  return (
    <div className="space-y-0">
      <SEO page="privacy" />
      <Hreflang path="/privacy" />
      <SchemaOrg type="Organization" />
      {/* Hero header */}
      <Section variant="muted" className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            <span>{t("privacy.hero.badge")}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-bold text-foreground mb-4">
            {t("footer.privacy")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("privacy.intro")}
          </p>
        </div>
      </Section>

      {/* Content cards */}
      <Section variant="default" className="py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          {sections.slice(1).map((s, idx) => {
            const Icon = s.icon;
            const titleKey = `privacy.${s.key}Title` as const;
            const textKey = `privacy.${s.key}` as const;
            const titleColor = titleColors[idx % titleColors.length];
            return (
              <div
                key={s.key}
                data-ocid={`privacy.section.${idx + 1}`}
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
                    <p className="text-foreground leading-relaxed">
                      {t(textKey)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Legal disclaimer */}
      <Section variant="muted" className="py-12">
        <div className="max-w-3xl mx-auto">
          <LegalNotice />
        </div>
      </Section>

      {/* Trust footer */}
      <Section variant="card" className="py-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Shield className="w-5 h-5 text-primary" />
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
