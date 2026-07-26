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
import { Check, CheckCircle2, Clock, Star, Zap } from "lucide-react";
import type { ComponentType } from "react";

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

// Pixel product ids that get the 13-feature security list + 3-button row.
// Faraday Box and Faraday Pouch keep their original layout.
const pixelIds = new Set(["pixel8", "pixel9", "pixel10"]);

const products = [
  {
    id: "pixel8",
    nameKey: "products.pixel8",
    price: "1.200 CHF",
    image: "/assets/generated/pixel8.dim_600x600.png",
    features: [
      "products.features.secureOS",
      "products.features.titan",
      "products.features.updates5",
      "products.features.sealed",
    ],
    badgeKey: "products.popular",
    badgeVariant: "accent" as const,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
  },
  {
    id: "pixel9",
    nameKey: "products.pixel9",
    price: "1.500 CHF",
    image: "/assets/generated/pixel9.dim_600x600.png",
    features: [
      "products.features.secureOS",
      "products.features.titan",
      "products.features.updates7",
      "products.features.sealed",
      "products.features.ai",
    ],
    badgeKey: "products.bestvalue",
    badgeVariant: "success" as const,
    iconColor: "text-accent",
    iconBg: "bg-accent/10",
  },
  {
    id: "pixel10",
    nameKey: "products.pixel10",
    price: "1.800 CHF",
    image: "/assets/generated/pixel10.dim_600x600.png",
    features: [
      "products.features.secureOS",
      "products.features.titan3",
      "products.features.updates7",
      "products.features.sealed",
      "products.features.support",
    ],
    badgeKey: "products.flagship",
    badgeVariant: "default" as const,
    iconColor: "text-success",
    iconBg: "bg-success/10",
  },
  {
    id: "faradayBox",
    nameKey: "products.faradayBox",
    price: "300 CHF",
    image: "/assets/qfaradaybox.png",
    features: [
      "products.features.faradayBox.signalBlock",
      "products.features.faradayBox.capacity",
      "products.features.faradayBox.milStd",
      "products.features.faradayBox.emp",
    ],
    badgeKey: "products.faradayBadge",
    badgeVariant: "default" as const,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
  },
  {
    id: "faradayPouch",
    nameKey: "products.faradayPouch",
    price: "200 CHF",
    image: "/assets/qfaradaypouch.png",
    features: [
      "products.features.faradayPouch.signalBlock",
      "products.features.faradayPouch.capacity",
      "products.features.faradayPouch.milStd",
      "products.features.faradayPouch.emp",
    ],
    badgeKey: "products.faradayBadge",
    badgeVariant: "default" as const,
    iconColor: "text-accent",
    iconBg: "bg-accent/10",
  },
];

export default function Products() {
  const { t } = useI18n();

  return (
    <div>
      <SEO page="products" />
      <SchemaOrg type="Product" />
      <Hreflang path="/products" />
      <Section variant="card">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-3">
            {t("products.title")}
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {t("products.subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <Card
              key={product.id}
              className="flex flex-col relative transition-shadow hover:shadow-md"
              data-ocid={`products.item.${i + 1}`}
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

              {pixelIds.has(product.id) ? (
                <>
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
                      data-ocid={`products.order_button.${i + 1}`}
                    >
                      <Button
                        variant="default"
                        className="w-full shadow-elevated"
                      >
                        <Zap className="w-4 h-4 mr-2" />
                        {t("products.order")}
                      </Button>
                    </Link>
                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        to="/why"
                        data-ocid={`products.why_button.${i + 1}`}
                      >
                        <Button variant="outline" className="w-full">
                          {t("products.whyQmobileButton")}
                        </Button>
                      </Link>
                      <Link
                        to={techSpecsRoutes[product.id]}
                        data-ocid={`products.techspecs_button.${i + 1}`}
                      >
                        <Button variant="outline" className="w-full">
                          {t("products.techSpecsButton")}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-xs text-muted-foreground mb-2">
                    {t("products.trust")}
                  </p>

                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <Badge
                      variant="outline"
                      className="text-xs bg-success/10 text-success border-success/20"
                    >
                      <Check className="w-3 h-3 mr-1" />
                      {t("products.secureOSBadge")}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-xs bg-primary/10 text-primary border-primary/20"
                    >
                      <Check className="w-3 h-3 mr-1" />
                      {t("products.qprivateBadge")}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-xs bg-warning/10 text-warning border-warning/20"
                    >
                      <Clock className="w-3 h-3 mr-1" />
                      {t("products.fastdispatch")}
                    </Badge>
                  </div>

                  <ul className="space-y-2 mb-6 flex-1">
                    {product.features.map((featKey) => (
                      <li
                        key={featKey}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                        <span>{t(featKey)}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-2">
                    <Link
                      to="/order"
                      search={{ product: product.id }}
                      data-ocid={`products.order_button.${i + 1}`}
                    >
                      <Button
                        variant="default"
                        className="w-full shadow-elevated"
                      >
                        <Zap className="w-4 h-4 mr-2" />
                        {t("products.order")}
                      </Button>
                    </Link>
                    <p className="text-xs text-center text-muted-foreground">
                      {t("products.ordertext")}
                    </p>
                  </div>
                </>
              )}
            </Card>
          ))}
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
