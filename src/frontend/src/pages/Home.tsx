import { Hreflang } from "@/components/Hreflang";
import LazyImage from "@/components/LazyImage";
import { LegalNotice } from "@/components/LegalNotice";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Section } from "@/components/Section";
import { SwissCompliance } from "@/components/SwissCompliance";
import {
  AntiTrackingIcon,
  AppSandboxIcon,
  BfuProtectionIcon,
  EndToEndEncryptionIcon,
  HardwareVerificationIcon,
  KillPinIcon,
  LockdownModeIcon,
  MultipleProfilesIcon,
  NetworkSecurityIcon,
  ScrambledPinIcon,
  SelfDestructIcon,
  TopFiveIcon,
  UsbLockdownIcon,
} from "@/components/icons/SecurityIcons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Shield, Star, Zap } from "lucide-react";
import type { ComponentType } from "react";

// Cyclic accent pattern for card titles: blue/green/purple/foreground (i % 4)
// Dark mode: accent tokens are light tones (0.62-0.92) → readable on dark cards
// Light mode: accent tokens are dark tones (0.45-0.55) → readable on light cards
const titleColors = [
  "text-accent-blue",
  "text-accent-green",
  "text-accent-purple",
  "text-foreground",
] as const;

// 13 security features grouped into 4 categories, shown identically across
// all Pixel 8/9/10 cards. Each feature maps to a dedicated SVG icon from
// SecurityIcons.tsx.
type SecurityFeature = {
  key: string;
  Icon: ComponentType<{ className?: string }>;
  fallback: boolean;
};

type SecurityCategory = {
  categoryKey: string;
  descKey: string;
  features: SecurityFeature[];
};

const securityCategories: SecurityCategory[] = [
  {
    categoryKey: "products.security.categories.physical",
    descKey: "products.security.categoriesDesc.physical",
    features: [
      {
        key: "products.security.selfDestruct",
        Icon: SelfDestructIcon,
        fallback: false,
      },
      {
        key: "products.security.killPin",
        Icon: KillPinIcon,
        fallback: false,
      },
      {
        key: "products.security.bfuProtection",
        Icon: BfuProtectionIcon,
        fallback: false,
      },
      {
        key: "products.security.hardwareVerification",
        Icon: HardwareVerificationIcon,
        fallback: false,
      },
    ],
  },
  {
    categoryKey: "products.security.categories.pinAccess",
    descKey: "products.security.categoriesDesc.pinAccess",
    features: [
      {
        key: "products.security.scrambledPin",
        Icon: ScrambledPinIcon,
        fallback: false,
      },
      {
        key: "products.security.appEncryption",
        Icon: AppSandboxIcon,
        fallback: false,
      },
      {
        key: "products.security.multiProfile",
        Icon: MultipleProfilesIcon,
        fallback: false,
      },
    ],
  },
  {
    categoryKey: "products.security.categories.network",
    descKey: "products.security.categoriesDesc.network",
    features: [
      {
        key: "products.security.networkSecurity",
        Icon: NetworkSecurityIcon,
        fallback: false,
      },
      {
        key: "products.security.usbSecurity",
        Icon: UsbLockdownIcon,
        fallback: false,
      },
      {
        key: "products.security.fakeCellTower",
        Icon: LockdownModeIcon,
        fallback: false,
      },
    ],
  },
  {
    categoryKey: "products.security.categories.privacy",
    descKey: "products.security.categoriesDesc.privacy",
    features: [
      {
        key: "products.security.antiTracking",
        Icon: AntiTrackingIcon,
        fallback: false,
      },
      {
        key: "products.security.e2eEncryption",
        Icon: EndToEndEncryptionIcon,
        fallback: false,
      },
      {
        key: "products.security.hiddenLocation",
        Icon: TopFiveIcon,
        fallback: false,
      },
    ],
  },
];

// Tech specs route per Pixel model. Routes are owned by another task; we only
// link to them here.
const techSpecsRoutes: Record<string, string> = {
  pixel8: "/googlepixel8/teknik-ozellikleri",
  pixel9: "/googlepixel9/teknik-ozellikleri",
  pixel10: "/googlepixel10/teknik-ozellikleri",
};

const topFiveFeatures = [
  {
    id: "selfDestruct",
    icon: SelfDestructIcon,
    titleKey: "home.top5.feature0.title",
    descKey: "home.top5.feature0.desc",
    borderColor: "border-accent-black",
    iconColor: "text-accent-black",
    iconBg: "bg-accent-black/10",
  },
  {
    id: "killPin",
    icon: KillPinIcon,
    titleKey: "home.top5.feature1.title",
    descKey: "home.top5.feature1.desc",
    borderColor: "border-accent-purple",
    iconColor: "text-accent-purple",
    iconBg: "bg-accent-purple/10",
  },
  {
    id: "bfu",
    icon: BfuProtectionIcon,
    titleKey: "home.top5.feature2.title",
    descKey: "home.top5.feature2.desc",
    borderColor: "border-accent-green",
    iconColor: "text-accent-green",
    iconBg: "bg-accent-green/10",
  },
  {
    id: "scrambledPin",
    icon: ScrambledPinIcon,
    titleKey: "home.top5.feature3.title",
    descKey: "home.top5.feature3.desc",
    borderColor: "border-accent-green",
    iconColor: "text-accent-green",
    iconBg: "bg-accent-green/10",
  },
  {
    id: "lockdown",
    icon: LockdownModeIcon,
    titleKey: "home.top5.feature4.title",
    descKey: "home.top5.feature4.desc",
    borderColor: "border-accent-blue",
    iconColor: "text-accent-blue",
    iconBg: "bg-accent-blue/10",
  },
  {
    id: "hardwareVerification",
    icon: HardwareVerificationIcon,
    titleKey: "home.top5.feature5.title",
    descKey: "home.top5.feature5.desc",
    borderColor: "border-accent-purple",
    iconColor: "text-accent-purple",
    iconBg: "bg-accent-purple/10",
  },
];
const products = [
  {
    id: "pixel8",
    nameKey: "products.pixel8",
    price: "1.200 CHF",
    image: "/assets/generated/pixel8.dim_600x600.png",
    badgeKey: "products.popular",
    badgeVariant: "accent" as const,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    borderColor: "border-accent-blue",
  },
  {
    id: "pixel9",
    nameKey: "products.pixel9",
    price: "1.500 CHF",
    image: "/assets/generated/pixel9.dim_600x600.png",
    badgeKey: "products.bestvalue",
    badgeVariant: "success" as const,
    iconColor: "text-accent",
    iconBg: "bg-accent/10",
    borderColor: "border-accent-green",
  },
  {
    id: "pixel10",
    nameKey: "products.pixel10",
    price: "1.800 CHF",
    image: "/assets/generated/pixel10.dim_600x600.png",
    badgeKey: "products.flagship",
    badgeVariant: "default" as const,
    iconColor: "text-success",
    iconBg: "bg-success/10",
    borderColor: "border-accent-purple",
  },
];

export default function Home() {
  const { t } = useI18n();

  return (
    <div>
      <SEO page="home" />
      <SchemaOrg type="WebSite" />
      <SchemaOrg type="Organization" />
      <Hreflang path="/" />
      {/* Hero */}
      <section className="relative bg-card border-b border-border overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge
                variant="default"
                className="bg-accent/10 text-accent border-accent/20"
              >
                {t("hero.badge")}
              </Badge>
              <Badge
                variant="default"
                className="bg-success/10 text-success border-success/20"
              >
                <Shield className="w-3 h-3 mr-1" />
                {t("hero.trust")}
              </Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-4">
              {t("hero.title")}
            </h1>
            <p className="text-lg sm:text-xl text-accent-blue leading-relaxed mb-8">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Link to="/products" data-ocid="hero.cta_button">
                <Button variant="default" size="lg">
                  {t("hero.cta")}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/contact" data-ocid="hero.contact_button">
                <Button variant="outline" size="lg">
                  {t("hero.contact")}
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-warning fill-warning" />
                <Star className="w-4 h-4 text-warning fill-warning" />
                <Star className="w-4 h-4 text-warning fill-warning" />
                <Star className="w-4 h-4 text-warning fill-warning" />
                <Star className="w-4 h-4 text-warning fill-warning" />
                <span className="ml-1 font-medium text-foreground">500+</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      </section>

      {/* Products */}
      <Section variant="default">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <Card
              key={product.id}
              className={`flex flex-col relative ${product.borderColor} border-2 transition-shadow hover:shadow-md`}
              data-ocid={`home.product.${i + 1}`}
            >
              <div className="relative mb-4 mt-2 rounded-xl overflow-hidden bg-muted/30 border border-border">
                <LazyImage
                  src={product.image}
                  alt={t(product.nameKey)}
                  className="w-full h-48 object-cover"
                  blur
                />
                <div className="absolute top-2 right-2">
                  <Badge
                    variant="default"
                    className={
                      product.badgeVariant === "accent"
                        ? "bg-accent/10 text-accent border-accent/20"
                        : product.badgeVariant === "success"
                          ? "bg-success/10 text-success border-success/20"
                          : ""
                    }
                  >
                    {t(product.badgeKey)}
                  </Badge>
                </div>
              </div>

              <h3
                className={`text-xl font-display font-semibold ${titleColors[i % titleColors.length]} mb-3`}
              >
                {t(product.nameKey)}
              </h3>

              <p className="text-2xl font-bold text-primary mb-4">
                {product.price}
              </p>

              <div className="flex flex-col gap-4 mb-6 flex-1">
                {securityCategories.map((category) => (
                  <div
                    key={category.categoryKey}
                    className="border-t border-border pt-3 first:border-t-0 first:pt-0"
                  >
                    <h4 className="text-xs font-display font-semibold uppercase tracking-wide text-accent-blue mb-1">
                      {t(category.categoryKey)}
                    </h4>
                    <p className="text-[11px] text-muted-foreground mb-2 leading-tight">
                      {t(category.descKey)}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-2">
                      {category.features.map((feature) => {
                        const Icon = feature.Icon;
                        return (
                          <li
                            key={feature.key}
                            className="flex items-center gap-2 text-xs text-foreground"
                          >
                            <Icon
                              className={`w-4 h-4 shrink-0 ${feature.fallback ? "text-success" : "text-accent-blue"}`}
                            />
                            <span className="leading-tight">
                              {t(feature.key)}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                <Link
                  to="/order"
                  search={{ product: product.id }}
                  data-ocid={`home.product_order_button.${i + 1}`}
                >
                  <Button variant="default" className="w-full shadow-elevated">
                    <Zap className="w-4 h-4 mr-2" />
                    {t("products.order")}
                  </Button>
                </Link>
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    to="/why"
                    data-ocid={`home.product_why_button.${i + 1}`}
                  >
                    <Button variant="outline" className="w-full">
                      {t("products.whyQmobileButton")}
                    </Button>
                  </Link>
                  <Link
                    to={techSpecsRoutes[product.id]}
                    data-ocid={`home.product_techspecs_button.${i + 1}`}
                  >
                    <Button variant="outline" className="w-full">
                      {t("products.techSpecsButton")}
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
      {/* Three Problems Standard Messaging Can't Solve */}
      <Section variant="muted">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-3">
            {t("home.problems.title")}
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {t("home.problems.subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* RED card - SMS */}
          <Card
            className="flex flex-col border-2 border-destructive/60 transition-shadow hover:shadow-md"
            data-ocid="home.problems.item.1"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-destructive/10 mb-4">
              <svg
                className="w-6 h-6 text-destructive"
                viewBox="0 0 64 64"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>SMS Threat</title>
                <rect x="8" y="16" width="48" height="32" rx="6" />
                <line x1="16" y1="28" x2="48" y2="28" />
                <line x1="16" y1="36" x2="40" y2="36" />
                <path d="M24 48 L16 56 L16 48" />
              </svg>
            </div>
            <h3 className="text-lg font-display font-semibold text-accent-blue mb-2">
              {t("home.problems.sms.title")}
            </h3>
            <p className="text-sm text-foreground leading-relaxed">
              {t("home.problems.sms.desc")}
            </p>
          </Card>

          {/* ORANGE card - WhatsApp/Telegram */}
          <Card
            className="flex flex-col border-2 border-warning/60 transition-shadow hover:shadow-md"
            data-ocid="home.problems.item.2"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-warning/10 mb-4">
              <svg
                className="w-6 h-6 text-warning"
                viewBox="0 0 64 64"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>WhatsApp Threat</title>
                <circle cx="20" cy="24" r="8" />
                <circle cx="44" cy="24" r="8" />
                <line x1="28" y1="24" x2="36" y2="24" />
                <rect x="12" y="40" width="40" height="12" rx="3" />
                <line x1="18" y1="46" x2="30" y2="46" />
                <line x1="34" y1="46" x2="46" y2="46" />
              </svg>
            </div>
            <h3 className="text-lg font-display font-semibold text-accent-green mb-2">
              {t("home.problems.whatsapp.title")}
            </h3>
            <p className="text-sm text-foreground leading-relaxed">
              {t("home.problems.whatsapp.desc")}
            </p>
          </Card>

          {/* PURPLE card - Signal */}
          <Card
            className="flex flex-col border-2 border-accent-purple/60 transition-shadow hover:shadow-md"
            data-ocid="home.problems.item.3"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent-purple/10 mb-4">
              <svg
                className="w-6 h-6 text-accent-purple"
                viewBox="0 0 64 64"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Signal Threat</title>
                <rect x="20" y="8" width="24" height="40" rx="4" />
                <line x1="28" y1="16" x2="36" y2="16" />
                <line x1="26" y1="24" x2="38" y2="24" />
                <line x1="26" y1="32" x2="38" y2="32" />
                <line x1="26" y1="40" x2="34" y2="40" />
                <path d="M24 48 L16 56 L16 48" />
                <circle cx="44" cy="44" r="10" />
                <line x1="38" y1="44" x2="50" y2="44" />
              </svg>
            </div>
            <h3 className="text-lg font-display font-semibold text-accent-purple mb-2">
              {t("home.problems.signal.title")}
            </h3>
            <p className="text-sm text-foreground leading-relaxed">
              {t("home.problems.signal.desc")}
            </p>
          </Card>
        </div>

        {/* GREEN banner - Qprivate solution */}
        <Card
          className="flex flex-col sm:flex-row items-center gap-6 border-2 border-accent-green/60 bg-accent-green/5"
          data-ocid="home.problems.solution"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-green/15 shrink-0">
            <svg
              className="w-8 h-8 text-accent-green"
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>Secure Solution</title>
              <path d="M32 8 L52 16 L52 32 C52 46 32 56 32 56 C32 56 12 46 12 32 L12 16 L32 8Z" />
              <polyline points="20 32 28 40 44 24" />
            </svg>
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl font-display font-bold text-accent-green mb-2">
              {t("home.problems.solution.title")}
            </h3>
            <p className="text-sm text-foreground leading-relaxed mb-2">
              {t("home.problems.solution.desc")}
            </p>
            <p className="text-xs text-accent-green/80 font-medium">
              {t("home.problems.install")}
            </p>
          </div>
        </Card>
      </Section>

      {/* Top 5 Differentiating Features */}
      <Section variant="default">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <TopFiveIcon className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-3">
            {t("home.top5.title")}
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {t("home.top5.subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topFiveFeatures.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.id}
                className={`flex flex-col ${feature.borderColor} border-2 transition-shadow hover:shadow-md`}
                data-ocid={`home.top5.item.${i + 1}`}
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.iconBg} mb-4`}
                >
                  <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>
                <h3
                  className={`text-lg font-display font-semibold ${titleColors[i % titleColors.length]} mb-2`}
                >
                  {t(feature.titleKey)}
                </h3>
                <p className="text-sm text-foreground leading-relaxed">
                  {t(feature.descKey)}
                </p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Legal disclaimer */}
      <Section variant="muted">
        <div className="max-w-3xl mx-auto space-y-6">
          <SwissCompliance />
          <LegalNotice />
        </div>
      </Section>
    </div>
  );
}
