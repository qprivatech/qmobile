import { Card } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";
import { Scale } from "lucide-react";

/**
 * 4-paragraph legal disclaimer box.
 * - Matches existing card style: rounded-xl border shadow-subtle
 * - Dark mode: white body text (text-foreground), accent-colored title
 * - Compact but official-looking; placed at end of page content
 * - TR/DE/EN via useI18n t() with legalNotice.title + legalNotice.p1..p4
 */
export function LegalNotice() {
  const { t } = useI18n();

  return (
    <Card
      className="rounded-xl border border-border shadow-subtle p-5 sm:p-6 bg-card"
      data-ocid="legal_notice.section"
    >
      <div className="flex items-center gap-2 mb-3">
        <Scale
          className="w-4 h-4 text-accent-blue shrink-0"
          aria-hidden="true"
        />
        <h2 className="text-sm font-display font-semibold uppercase tracking-wider text-accent-blue">
          {t("legalNotice.title")}
        </h2>
      </div>
      <div className="space-y-2 text-xs sm:text-sm text-foreground leading-relaxed">
        <p data-ocid="legal_notice.p1">{t("legalNotice.p1")}</p>
        <p data-ocid="legal_notice.p2">{t("legalNotice.p2")}</p>
        <p data-ocid="legal_notice.p3">{t("legalNotice.p3")}</p>
        <p data-ocid="legal_notice.p4">{t("legalNotice.p4")}</p>
      </div>
    </Card>
  );
}
