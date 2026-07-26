import { Hreflang } from "@/components/Hreflang";
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
  ForensicProtectionIcon,
  HardwareVerificationIcon,
  HideLockContentIcon,
  KillPinIcon,
  LockNotificationIcon,
  LockdownModeIcon,
  MultipleProfilesIcon,
  NetworkSecurityIcon,
  PerAppLockIcon,
  RemoteWipeIcon,
  ScrambledPinIcon,
  SecureBootIcon,
  SelfDestructIcon,
  SensorPrivacyIcon,
  ServerSideIcon,
  UsbLockdownIcon,
} from "@/components/icons/SecurityIcons";
import { useI18n } from "@/lib/i18n";

/* Cyclic accent title colors — 4 distinct accents rotate across 20 cards.
 * Dark mode: all accents are light tones (oklch 0.62–0.92) → readable on dark card.
 * Light mode: accents fall to dark tones → readable on light card. */
const titleColors = [
  "text-accent-blue",
  "text-accent-green",
  "text-accent-purple",
  "text-foreground",
] as const;

const balloons = [
  {
    id: "kernel",
    icon: HardwareVerificationIcon,
    titleKey: "why.kernel",
    descKey: "why.kernel.desc",
    borderColor: "border-accent-blue",
    bgColor: "bg-primary/5",
    iconColor: "text-primary",
  },
  {
    id: "tracking",
    icon: AntiTrackingIcon,
    titleKey: "why.tracking",
    descKey: "why.tracking.desc",
    borderColor: "border-accent-green",
    bgColor: "bg-accent/5",
    iconColor: "text-accent",
  },
  {
    id: "sandbox",
    icon: AppSandboxIcon,
    titleKey: "why.sandbox",
    descKey: "why.sandbox.desc",
    borderColor: "border-accent-black",
    bgColor: "bg-muted/30",
    iconColor: "text-foreground",
  },
  {
    id: "boot",
    icon: SecureBootIcon,
    titleKey: "why.boot",
    descKey: "why.boot.desc",
    borderColor: "border-accent-purple",
    bgColor: "bg-secondary",
    iconColor: "text-accent-purple",
  },
  {
    id: "qpwa-e2e",
    icon: EndToEndEncryptionIcon,
    titleKey: "why.qpwa.e2e",
    descKey: "why.qpwa.e2e.desc",
    borderColor: "border-accent-blue",
    bgColor: "bg-primary/5",
    iconColor: "text-primary",
  },
  {
    id: "qpwa-server",
    icon: ServerSideIcon,
    titleKey: "why.qpwa.server",
    descKey: "why.qpwa.server.desc",
    borderColor: "border-accent-green",
    bgColor: "bg-accent/5",
    iconColor: "text-accent",
  },
  {
    id: "bfu",
    icon: BfuProtectionIcon,
    titleKey: "why.bfu",
    descKey: "why.bfu.desc",
    borderColor: "border-accent-green",
    bgColor: "bg-accent/5",
    iconColor: "text-accent",
  },
  {
    id: "scrambledPin",
    icon: ScrambledPinIcon,
    titleKey: "why.scrambledPin",
    descKey: "why.scrambledPin.desc",
    borderColor: "border-accent-green",
    bgColor: "bg-accent/5",
    iconColor: "text-accent",
  },
  {
    id: "selfDestruct",
    icon: SelfDestructIcon,
    titleKey: "why.selfDestruct",
    descKey: "why.selfDestruct.desc",
    borderColor: "border-accent-black",
    bgColor: "bg-muted/30",
    iconColor: "text-foreground",
  },
  {
    id: "lockNotifications",
    icon: LockNotificationIcon,
    titleKey: "why.lockNotifications",
    descKey: "why.lockNotifications.desc",
    borderColor: "border-accent-blue",
    bgColor: "bg-primary/5",
    iconColor: "text-primary",
  },
  {
    id: "hideLockContent",
    icon: HideLockContentIcon,
    titleKey: "why.hideLockContent",
    descKey: "why.hideLockContent.desc",
    borderColor: "border-accent-green",
    bgColor: "bg-accent/5",
    iconColor: "text-accent",
  },
  {
    id: "appLock",
    icon: PerAppLockIcon,
    titleKey: "why.appLock",
    descKey: "why.appLock.desc",
    borderColor: "border-accent-purple",
    bgColor: "bg-secondary",
    iconColor: "text-accent-purple",
  },
  {
    id: "remoteWipe",
    icon: RemoteWipeIcon,
    titleKey: "why.remoteWipe",
    descKey: "why.remoteWipe.desc",
    borderColor: "border-accent-blue",
    bgColor: "bg-primary/5",
    iconColor: "text-primary",
  },
  {
    id: "multiProfile",
    icon: MultipleProfilesIcon,
    titleKey: "why.multiProfile",
    descKey: "why.multiProfile.desc",
    borderColor: "border-accent-green",
    bgColor: "bg-accent/5",
    iconColor: "text-accent",
  },
  {
    id: "networkSecurity",
    icon: NetworkSecurityIcon,
    titleKey: "why.networkSecurity",
    descKey: "why.networkSecurity.desc",
    borderColor: "border-accent-black",
    bgColor: "bg-muted/30",
    iconColor: "text-foreground",
  },
  {
    id: "forensicProtection",
    icon: ForensicProtectionIcon,
    titleKey: "why.forensicProtection",
    descKey: "why.forensicProtection.desc",
    borderColor: "border-accent-green",
    bgColor: "bg-accent/5",
    iconColor: "text-accent",
  },
  {
    id: "usbSecurity",
    icon: UsbLockdownIcon,
    titleKey: "why.usbSecurity",
    descKey: "why.usbSecurity.desc",
    borderColor: "border-accent-blue",
    bgColor: "bg-primary/5",
    iconColor: "text-primary",
  },
  {
    id: "lockdownMode",
    icon: LockdownModeIcon,
    titleKey: "why.lockdownMode",
    descKey: "why.lockdownMode.desc",
    borderColor: "border-accent-purple",
    bgColor: "bg-secondary",
    iconColor: "text-accent-purple",
  },
  {
    id: "killPin",
    icon: KillPinIcon,
    titleKey: "why.killPin",
    descKey: "why.killPin.desc",
    borderColor: "border-accent-black",
    bgColor: "bg-muted/30",
    iconColor: "text-foreground",
  },
  {
    id: "hiddenLocation",
    icon: SensorPrivacyIcon,
    titleKey: "why.hiddenLocation",
    descKey: "why.hiddenLocation.desc",
    borderColor: "border-accent-green",
    bgColor: "bg-accent/5",
    iconColor: "text-accent",
  },
];

export default function Why() {
  const { t } = useI18n();

  return (
    <div>
      <SEO page="why" />
      <Hreflang path="/why" />
      <SchemaOrg type="Organization" />
      {/* Swiss privacy compliance philosophy */}
      <Section variant="card">
        <div className="max-w-3xl mx-auto mb-12">
          <SwissCompliance />
        </div>
      </Section>

      <Section variant="card">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-3">
            {t("why.title")}
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {t("why.subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {balloons.map((b, i) => (
            <div
              key={b.id}
              className={`rounded-2xl border-2 ${b.borderColor} ${b.bgColor} p-6 transition-smooth hover:shadow-elevated hover:-translate-y-1`}
              data-ocid={`why.balloon.${i + 1}`}
            >
              <div className="w-12 h-12 rounded-xl bg-card flex items-center justify-center mb-4 border border-border">
                <b.icon className={`w-6 h-6 ${b.iconColor}`} />
              </div>
              <h3
                className={`text-lg font-display font-semibold ${titleColors[i % titleColors.length]} mb-2`}
              >
                {t(b.titleKey)}
              </h3>
              <p className="text-sm text-foreground leading-relaxed">
                {t(b.descKey)}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Legal disclaimer */}
      <Section variant="default">
        <div className="max-w-3xl mx-auto space-y-6">
          <SwissCompliance />
          <LegalNotice />
        </div>
      </Section>
    </div>
  );
}
