import { useI18n } from "@/lib/i18n";
import { Cookie } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./Button";

export function CookieConsent() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("qm-cookie-consent");
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("qm-cookie-consent", "true");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("qm-cookie-consent", "false");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-elevated"
      data-ocid="cookie.banner"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex items-start gap-3 flex-1">
          <Cookie className="w-5 h-5 text-primary mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-medium text-foreground">
              {t("cookie.title")}
            </p>
            <p className="text-sm text-muted-foreground">{t("cookie.text")}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="/cookies"
            className="text-sm text-primary hover:underline transition-colors"
            data-ocid="cookie.learn_link"
          >
            {t("cookie.learn")}
          </a>
          <a
            href="/terms"
            className="text-sm text-primary hover:underline transition-colors"
            data-ocid="cookie.terms_link"
          >
            {t("cookie.terms")}
          </a>
          <Button
            variant="outline"
            size="sm"
            onClick={reject}
            dataOcid="cookie.reject_button"
          >
            {t("cookie.reject")}
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={accept}
            dataOcid="cookie.accept_button"
          >
            {t("cookie.accept")}
          </Button>
        </div>
      </div>
    </div>
  );
}
