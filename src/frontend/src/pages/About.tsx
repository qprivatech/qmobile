import { Hreflang } from "@/components/Hreflang";
import { LegalNotice } from "@/components/LegalNotice";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Section } from "@/components/Section";
import { SwissCompliance } from "@/components/SwissCompliance";
import { useI18n } from "@/lib/i18n";

/**
 * Cyclic accent colors for card titles (blue/green/purple/foreground, i % 4).
 * Dark mode: accents are light tones (oklch 0.62–0.92) → readable on dark card.
 * Light mode: accents fall to dark tones → readable on light card. */
const titleColors = [
  "text-accent-blue",
  "text-accent-green",
  "text-accent-purple",
  "text-foreground",
] as const;

function ShieldSvg() {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      className="w-full h-full"
      aria-hidden="true"
    >
      <path
        d="M60 10 L100 25 L100 55 C100 85 60 110 60 110 C60 110 20 85 20 55 L20 25 Z"
        stroke="#06b6d4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M40 55 L55 70 L85 40"
        stroke="#06b6d4"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle
        cx="60"
        cy="60"
        r="48"
        stroke="#06b6d4"
        strokeWidth="0.5"
        strokeDasharray="4 4"
        opacity="0.3"
      />
    </svg>
  );
}

function LockSvg() {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      className="w-full h-full"
      aria-hidden="true"
    >
      <rect
        x="30"
        y="50"
        width="60"
        height="50"
        rx="6"
        stroke="#06b6d4"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M40 50 L40 38 C40 24 48 16 60 16 C72 16 80 24 80 38 L80 50"
        stroke="#06b6d4"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <circle
        cx="60"
        cy="75"
        r="6"
        stroke="#06b6d4"
        strokeWidth="2"
        fill="none"
      />
      <line
        x1="60"
        y1="81"
        x2="60"
        y2="90"
        stroke="#06b6d4"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle
        cx="60"
        cy="60"
        r="48"
        stroke="#06b6d4"
        strokeWidth="0.5"
        strokeDasharray="4 4"
        opacity="0.3"
      />
    </svg>
  );
}

function SilenceSvg() {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      className="w-full h-full"
      aria-hidden="true"
    >
      <path
        d="M35 40 L55 60 L35 80"
        stroke="#06b6d4"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <line
        x1="60"
        y1="35"
        x2="60"
        y2="85"
        stroke="#06b6d4"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M75 40 L95 60 L75 80"
        stroke="#06b6d4"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.4"
      />
      <circle
        cx="60"
        cy="60"
        r="48"
        stroke="#06b6d4"
        strokeWidth="0.5"
        strokeDasharray="4 4"
        opacity="0.3"
      />
    </svg>
  );
}

export default function About() {
  const { t } = useI18n();

  return (
    <div>
      <SEO page="about" />
      <Hreflang path="/about" />
      <SchemaOrg type="Organization" />
      {/* Swiss privacy compliance philosophy */}
      <Section variant="card">
        <div className="max-w-3xl mx-auto">
          <SwissCompliance />
        </div>
      </Section>

      {/* Hero / Poetic Intro */}
      <Section variant="card">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <ShieldSvg />
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
            {t("about.title")}
          </h1>

          <div className="space-y-6 text-base sm:text-lg text-foreground leading-relaxed">
            <p>{t("about.intro")}</p>
            <p>{t("about.swiss.text")}</p>
            <p className="text-primary font-medium">{t("about.values.text")}</p>
          </div>
        </div>
      </Section>

      {/* SVG Illustrations + Values */}
      <Section variant="muted">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-8 mb-12">
            {[
              {
                Svg: ShieldSvg,
                title: t("about.security.title"),
                description: t("about.security.text"),
              },
              {
                Svg: LockSvg,
                title: t("about.tech.title"),
                description: t("about.tech.text"),
              },
              {
                Svg: SilenceSvg,
                title: t("about.comm.title"),
                description: t("about.comm.text"),
              },
            ].map(({ Svg, title, description }, i) => (
              <div
                key={title}
                className="text-center"
                data-ocid={`about.value.card.${i + 1}`}
              >
                <div className="w-24 h-24 mx-auto mb-4">
                  <Svg />
                </div>
                <h3
                  className={`text-sm font-semibold uppercase tracking-wider mb-2 ${titleColors[i % titleColors.length]}`}
                >
                  {title}
                </h3>
                <p className="text-xs text-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>

          {/* Poetic closing */}
          <div className="border-t border-border pt-10 text-center">
            <p className="text-base sm:text-lg text-foreground leading-relaxed max-w-2xl mx-auto italic">
              {t("about.expertise.text")}
            </p>
          </div>
        </div>
      </Section>

      {/* Stats */}
      <Section variant="card">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div data-ocid="about.stat.1">
            <p className="text-3xl font-display font-bold text-primary mb-1">
              3
            </p>
            <p className="text-sm text-foreground">{t("about.stats.models")}</p>
          </div>
          <div data-ocid="about.stat.2">
            <p className="text-3xl font-display font-bold text-primary mb-1">
              CH
            </p>
            <p className="text-sm text-foreground">{t("about.stats.based")}</p>
          </div>
          <div data-ocid="about.stat.3">
            <p className="text-3xl font-display font-bold text-primary mb-1">
              100%
            </p>
            <p className="text-sm text-foreground">
              {t("about.stats.privacy")}
            </p>
          </div>
          <div data-ocid="about.stat.4">
            <p className="text-3xl font-display font-bold text-primary mb-1">
              10+
            </p>
            <p className="text-sm text-foreground">{t("about.stats.years")}</p>
          </div>
        </div>
      </Section>

      {/* Legal disclaimer */}
      <Section variant="muted">
        <div className="max-w-3xl mx-auto">
          <LegalNotice />
        </div>
      </Section>
    </div>
  );
}
