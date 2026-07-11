import { Hreflang } from "@/components/Hreflang";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Section } from "@/components/Section";
import {
  BfuProtectionIcon,
  FiveGToLteIcon,
  KillPinIcon,
  LockNotificationIcon,
  LockdownModeIcon,
  MultipleProfilesIcon,
  PerAppLockIcon,
  ScrambledPinIcon,
  SelfDestructIcon,
  SensorPrivacyIcon,
  TopFiveIcon,
  UsbLockdownIcon,
} from "@/components/icons/SecurityIcons";
import { Card } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";
import { Cpu, Lock, MessageSquare, Shield, Smartphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const titleColors = [
  "text-accent-blue",
  "text-accent-green",
  "text-accent-purple",
  "text-foreground",
];

const heroFeatures = [
  { icon: Cpu, key: "security.hero.feature1" },
  { icon: Shield, key: "security.hero.feature2" },
  { icon: Lock, key: "security.hero.feature3" },
];

interface FeatureDef {
  id: string;
  Icon: React.FC<{ className?: string }>;
  borderColor: string;
  iconColor: string;
  bgColor: string;
}

const features: FeatureDef[] = [
  {
    id: "1",
    Icon: LockNotificationIcon,
    borderColor: "border-accent-blue",
    iconColor: "text-accent-blue",
    bgColor: "bg-accent-blue/10",
  },
  {
    id: "2",
    Icon: PerAppLockIcon,
    borderColor: "border-accent-green",
    iconColor: "text-accent-green",
    bgColor: "bg-accent-green/10",
  },
  {
    id: "3",
    Icon: SelfDestructIcon,
    borderColor: "border-accent-black",
    iconColor: "text-accent-black",
    bgColor: "bg-accent-black/10",
  },
  {
    id: "4",
    Icon: FiveGToLteIcon,
    borderColor: "border-accent-blue",
    iconColor: "text-accent-blue",
    bgColor: "bg-accent-blue/10",
  },
  {
    id: "5",
    Icon: MultipleProfilesIcon,
    borderColor: "border-accent-purple",
    iconColor: "text-accent-purple",
    bgColor: "bg-accent-purple/10",
  },
  {
    id: "6",
    Icon: BfuProtectionIcon,
    borderColor: "border-accent-black",
    iconColor: "text-accent-black",
    bgColor: "bg-accent-black/10",
  },
  {
    id: "7",
    Icon: ScrambledPinIcon,
    borderColor: "border-accent-green",
    iconColor: "text-accent-green",
    bgColor: "bg-accent-green/10",
  },
  {
    id: "8",
    Icon: UsbLockdownIcon,
    borderColor: "border-accent-blue",
    iconColor: "text-accent-blue",
    bgColor: "bg-accent-blue/10",
  },
  {
    id: "9",
    Icon: LockdownModeIcon,
    borderColor: "border-accent-black",
    iconColor: "text-accent-black",
    bgColor: "bg-accent-black/10",
  },
  {
    id: "10",
    Icon: KillPinIcon,
    borderColor: "border-accent-purple",
    iconColor: "text-accent-purple",
    bgColor: "bg-accent-purple/10",
  },
  {
    id: "11",
    Icon: SensorPrivacyIcon,
    borderColor: "border-accent-green",
    iconColor: "text-accent-green",
    bgColor: "bg-accent-green/10",
  },
];

interface TableDef {
  prefix: string;
  rows: number;
  icon: LucideIcon;
  accentClass: string;
  borderClass: string;
  bgIconClass: string;
  ocid: string;
}

const tables: TableDef[] = [
  {
    prefix: "security.hardwareTable",
    rows: 6,
    icon: Smartphone,
    accentClass: "text-accent-blue",
    borderClass: "border-accent-blue/40",
    bgIconClass: "bg-accent-blue/10",
    ocid: "security.hardware.table",
  },
  {
    prefix: "security.softwareTable",
    rows: 13,
    icon: Shield,
    accentClass: "text-accent-green",
    borderClass: "border-accent-green/40",
    bgIconClass: "bg-accent-green/10",
    ocid: "security.software.table",
  },
  {
    prefix: "security.qpwaTable",
    rows: 6,
    icon: Lock,
    accentClass: "text-accent-purple",
    borderClass: "border-accent-purple/40",
    bgIconClass: "bg-accent-purple/10",
    ocid: "security.qpwa.table",
  },
  {
    prefix: "security.sessionTable",
    rows: 6,
    icon: MessageSquare,
    accentClass: "text-accent-black",
    borderClass: "border-accent-black/40",
    bgIconClass: "bg-accent-black/10",
    ocid: "security.session.table",
  },
];

function SecurityTable({ table }: { table: TableDef }) {
  const { t } = useI18n();
  const Icon = table.icon;
  return (
    <Card className={`border-2 ${table.borderClass}`} data-ocid={table.ocid}>
      <div className="flex items-center gap-3 mb-6">
        <div
          className={`w-12 h-12 rounded-2xl ${table.bgIconClass} flex items-center justify-center`}
        >
          <Icon className={`w-6 h-6 ${table.accentClass}`} />
        </div>
        <h3
          className={`text-xl font-display font-semibold ${table.accentClass}`}
        >
          {t(`${table.prefix}.title`)}
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left font-mono font-medium text-muted-foreground py-3 pr-4">
                {t(`${table.prefix}.col.feature`)}
              </th>
              <th className="text-left font-mono font-medium text-muted-foreground py-3">
                {t(`${table.prefix}.col.desc`)}
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: table.rows }, (_, i) => i + 1).map((n, i) => (
              <tr
                key={n}
                className="border-b border-border/60 last:border-0"
                data-ocid={`${table.ocid}.row.${n}`}
              >
                <td className="py-3 pr-4 align-top">
                  <span className={`font-medium ${titleColors[i % 4]}`}>
                    {t(`${table.prefix}.rows.${n}.feature`)}
                  </span>
                </td>
                <td className="py-3 align-top text-foreground leading-relaxed">
                  {t(`${table.prefix}.rows.${n}.desc`)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

export default function Security() {
  const { t } = useI18n();

  return (
    <div>
      <SEO page="security" />
      <Hreflang path="/security" />
      <SchemaOrg type="Organization" />
      {/* Hero Section */}
      <Section variant="card" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        <div className="relative text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
            <Shield className="w-3.5 h-3.5" />
            {t("security.hero.badge")}
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4">
            {t("security.title")}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-10">
            {t("security.subtitle")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {heroFeatures.map((f, index) => (
              <div
                key={f.key}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border shadow-subtle"
                data-ocid={`security.hero.feature.${index + 1}`}
              >
                <f.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  {t(f.key)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 11 Security Features Grid */}
      <Section variant="default" className="text-center">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4">
          {t("security.title")}
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
          {t("security.subtitle")}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.Icon;
            return (
              <Card
                key={f.id}
                className={`text-left border-2 ${f.borderColor} transition-shadow hover:shadow-md`}
                data-ocid={`security.feature.${i + 1}`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${f.bgColor} flex items-center justify-center mb-5`}
                >
                  <Icon className={`w-8 h-8 ${f.iconColor}`} />
                </div>
                <h3
                  className={`text-lg font-display font-semibold ${titleColors[i % 4]} mb-2`}
                >
                  {t(`security.feature${f.id}.title`)}
                </h3>
                <p className="text-sm text-foreground leading-relaxed">
                  {t(`security.feature${f.id}.desc`)}
                </p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Top 5 Summary Section */}
      <Section variant="muted" className="text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-6">
            <TopFiveIcon className="w-3.5 h-3.5" />
            {t("security.summary.title")}
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4">
            {t("security.summary.title")}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-10">
            {[0, 1, 2, 3, 4].map((index) => (
              <Card
                key={index}
                className="bg-card/80 border-2 border-accent/30 text-left"
                data-ocid={`security.summary.item.${index + 1}`}
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <span className="text-lg font-mono font-bold text-accent">
                    {index + 1}
                  </span>
                </div>
                <p className="text-sm text-foreground font-medium leading-relaxed">
                  {t(`security.summary.features.${index}`)}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* 4 Security Tables */}
      <Section variant="default" className="text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
            <Shield className="w-3.5 h-3.5" />
            {t("security.tables.title")}
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4">
            {t("security.tables.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            {t("security.tables.subtitle")}
          </p>

          <div className="grid lg:grid-cols-2 gap-8 text-left">
            {tables.map((table) => (
              <SecurityTable key={table.prefix} table={table} />
            ))}
          </div>
        </div>
      </Section>

      {/* Technical Guarantee Section */}
      <Section variant="card" className="text-center">
        <div className="max-w-3xl mx-auto">
          <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-display font-bold text-foreground mb-3">
            {t("security.trust.title")}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {t("security.trust.desc")}
          </p>
        </div>
      </Section>
    </div>
  );
}
