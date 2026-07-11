import { Hreflang } from "@/components/Hreflang";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Section } from "@/components/Section";
import { useI18n } from "@/lib/i18n";
import {
  BarChart3,
  Clock,
  Cookie,
  Mail,
  MapPin,
  Settings,
  Shield,
} from "lucide-react";

const titleColors = [
  "text-accent-blue",
  "text-accent-green",
  "text-accent-purple",
  "text-foreground",
];

export default function Cookies() {
  const { t } = useI18n();

  return (
    <div className="space-y-0">
      <SEO page="cookies" />
      <Hreflang path="/cookies" />
      <SchemaOrg type="Organization" />
      {/* Hero intro */}
      <Section
        variant="card"
        className="bg-gradient-to-br from-primary/5 to-background"
      >
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Cookie className="w-4 h-4" />
            <span>{t("footer.cookies")}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            {t("footer.cookies")}
          </h1>
          <p className="text-foreground max-w-2xl mx-auto leading-relaxed">
            {t("cookies.intro")}
          </p>
        </div>
      </Section>

      {/* What are cookies */}
      <Section variant="default">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Cookie className="w-5 h-5 text-primary" />
            </div>
            <h2
              className={`text-xl sm:text-2xl font-display font-semibold ${titleColors[0]}`}
            >
              {t("cookies.whatTitle")}
            </h2>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 shadow-subtle">
            <p className="text-foreground leading-relaxed">
              {t("cookies.whatText")}
            </p>
          </div>
        </div>
      </Section>

      {/* How we use cookies */}
      <Section variant="muted">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <h2
              className={`text-xl sm:text-2xl font-display font-semibold ${titleColors[1]}`}
            >
              {t("cookies.useTitle")}
            </h2>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 shadow-subtle">
            <p className="text-foreground leading-relaxed">
              {t("cookies.useText")}
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-accent-green bg-accent-green/10 px-4 py-2 rounded-lg">
              <Shield className="w-4 h-4" />
              <span>{t("cookies.zeroTracking")}</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Types of cookies */}
      <Section variant="default">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Settings className="w-5 h-5 text-primary" />
            </div>
            <h2
              className={`text-xl sm:text-2xl font-display font-semibold ${titleColors[2]}`}
            >
              {t("cookies.typesTitle")}
            </h2>
          </div>
          <div className="space-y-4">
            <div className="bg-card border border-border rounded-xl p-5 shadow-subtle flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-accent-purple/15 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-accent-purple text-xs font-bold">!</span>
              </div>
              <p className="text-foreground leading-relaxed">
                {t("cookies.essential")}
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 shadow-subtle flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-accent-blue/15 flex items-center justify-center shrink-0 mt-0.5">
                <Settings className="w-4 h-4 text-accent-blue" />
              </div>
              <p className="text-foreground leading-relaxed">
                {t("cookies.preference")}
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 shadow-subtle flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-accent-green/15 flex items-center justify-center shrink-0 mt-0.5">
                <BarChart3 className="w-4 h-4 text-accent-green" />
              </div>
              <p className="text-foreground leading-relaxed">
                {t("cookies.analytics")}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Managing cookies */}
      <Section variant="muted">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Settings className="w-5 h-5 text-primary" />
            </div>
            <h2
              className={`text-xl sm:text-2xl font-display font-semibold ${titleColors[3]}`}
            >
              {t("cookies.manageTitle")}
            </h2>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 shadow-subtle">
            <p className="text-foreground leading-relaxed">
              {t("cookies.manageText")}
            </p>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section
        variant="card"
        className="bg-gradient-to-br from-primary/5 to-background"
      >
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <h2
              className={`text-xl sm:text-2xl font-display font-semibold ${titleColors[0]}`}
            >
              {t("cookies.contactTitle")}
            </h2>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 shadow-subtle space-y-4">
            <p className="text-foreground leading-relaxed">
              {t("cookies.contactText")}
            </p>
            <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-border">
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>{t("cookies.contactEmail")}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>{t("cookies.contactAddress")}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Clock className="w-4 h-4 text-primary" />
                <span>{t("cookies.contactResponse")}</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
