import { Hreflang } from "@/components/Hreflang";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Section } from "@/components/Section";
import { Card } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";
import {
  GlobeLock,
  KeyRound,
  MessageSquare,
  Monitor,
  ShieldCheck,
  Smartphone,
  Tablet,
  Wrench,
} from "lucide-react";

const titleColors = [
  "text-accent-blue",
  "text-accent-green",
  "text-accent-purple",
  "text-foreground",
] as const;

const services = [
  {
    id: "tech",
    icon: Wrench,
    titleKey: "services.tech",
    descKey: "services.tech.desc",
  },
  {
    id: "security",
    icon: ShieldCheck,
    titleKey: "services.security",
    descKey: "services.security.desc",
  },
  {
    id: "comm",
    icon: MessageSquare,
    titleKey: "services.comm",
    descKey: "services.comm.desc",
  },
  {
    id: "phone",
    icon: Smartphone,
    titleKey: "services.phone",
    descKey: "services.phone.desc",
  },
  {
    id: "computer",
    icon: Monitor,
    titleKey: "services.computer",
    descKey: "services.computer.desc",
  },
  {
    id: "tablet",
    icon: Tablet,
    titleKey: "services.tablet",
    descKey: "services.tablet.desc",
  },
  {
    id: "online",
    icon: GlobeLock,
    titleKey: "services.online",
    descKey: "services.online.desc",
  },
  {
    id: "encryption",
    icon: KeyRound,
    titleKey: "services.encryption",
    descKey: "services.encryption.desc",
  },
];

export default function Services() {
  const { t } = useI18n();

  return (
    <div>
      <SEO page="services" />
      <Hreflang path="/services" />
      <SchemaOrg type="Organization" />
      <Section variant="card">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-3">
            {t("services.title")}
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto mb-2">
            {t("services.subtitle")}
          </p>
          <p className="text-sm text-accent font-medium">
            {t("services.hourly")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <Card
              key={s.id}
              className="transition-shadow hover:shadow-md"
              data-ocid={`services.item.${i + 1}`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3
                className={`text-lg font-display font-semibold mb-2 ${titleColors[i % titleColors.length]}`}
              >
                {t(s.titleKey)}
              </h3>
              <p className="text-sm text-foreground leading-relaxed mb-4">
                {t(s.descKey)}
              </p>
              <div className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                {t(`services.${s.id}.price`)}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Process / How it works */}
      <Section variant="muted">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-3">
            {t("services.process.title")}
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {t("services.process.subtitle")}
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            {
              step: "1",
              title: t("services.process.step1"),
              desc: t("services.process.step1.desc"),
            },
            {
              step: "2",
              title: t("services.process.step2"),
              desc: t("services.process.step2.desc"),
            },
            {
              step: "3",
              title: t("services.process.step3"),
              desc: t("services.process.step3.desc"),
            },
          ].map((item, idx) => (
            <div
              key={item.step}
              className="text-center"
              data-ocid={`services.process.${idx + 1}`}
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-sm font-bold text-primary">
                  {item.step}
                </span>
              </div>
              <h3
                className={`font-display font-semibold mb-2 ${titleColors[idx % titleColors.length]}`}
              >
                {item.title}
              </h3>
              <p className="text-sm text-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
