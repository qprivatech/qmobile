import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Check, Shield } from "lucide-react";

/**
 * Swiss privacy compliance block.
 * - Mirrors LegalNotice.tsx pattern: rounded-xl border shadow-subtle bg-card,
 *   accent-blue header with icon, text-foreground body.
 * - Renders: title (h2), intro paragraph, 7-rule bulleted list with
 *   accent-green check markers, market paragraph, and an emphasized qmobile
 *   paragraph (border-l-2 border-accent-green pl-4) highlighting Qmobile's
 *   differentiation.
 * - variant='card' (default) wraps in the full card container; 'inline' omits
 *   the card wrapper so it can sit inside an existing card/section.
 * - TR/DE/EN via useI18n t() with swissCompliance.* keys.
 */
interface SwissComplianceProps {
  variant?: "card" | "inline";
  className?: string;
}

const ruleKeys = [
  "swissCompliance.rule1",
  "swissCompliance.rule2",
  "swissCompliance.rule3",
  "swissCompliance.rule4",
  "swissCompliance.rule5",
  "swissCompliance.rule6",
  "swissCompliance.rule7",
] as const;

export function SwissCompliance({
  variant = "card",
  className,
}: SwissComplianceProps) {
  const { t } = useI18n();

  const body = (
    <>
      <div className="flex items-center gap-2 mb-3">
        <Shield
          className="w-4 h-4 text-accent-blue shrink-0"
          aria-hidden="true"
        />
        <h2 className="text-sm font-display font-semibold uppercase tracking-wider text-accent-blue">
          {t("swissCompliance.title")}
        </h2>
      </div>

      <div className="space-y-3 text-xs sm:text-sm text-foreground leading-relaxed">
        <p data-ocid="swiss_compliance.intro">{t("swissCompliance.intro")}</p>

        <ul className="space-y-2" data-ocid="swiss_compliance.rules">
          {ruleKeys.map((key, i) => (
            <li
              key={key}
              className="flex items-start gap-2"
              data-ocid={`swiss_compliance.rule.${i + 1}`}
            >
              <Check
                className="w-4 h-4 text-accent-green shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span>{t(key)}</span>
            </li>
          ))}
        </ul>

        <p data-ocid="swiss_compliance.market">{t("swissCompliance.market")}</p>

        <p
          className="border-l-2 border-accent-green pl-4 text-accent-green font-medium"
          data-ocid="swiss_compliance.qmobile"
        >
          {t("swissCompliance.qmobile")}
        </p>
      </div>
    </>
  );

  if (variant === "inline") {
    return (
      <div className={cn(className)} data-ocid="swiss_compliance.section">
        {body}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "rounded-xl border border-border shadow-subtle p-5 sm:p-6 bg-card",
        className,
      )}
      data-ocid="swiss_compliance.section"
    >
      {body}
    </div>
  );
}
