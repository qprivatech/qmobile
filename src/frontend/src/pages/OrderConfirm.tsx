import {
  ConfirmError,
  type ConfirmResult,
  type OrderSummary,
  createActor,
} from "@/backend";
import { Hreflang } from "@/components/Hreflang";
import { SEO } from "@/components/SEO";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { type Lang, useI18n } from "@/lib/i18n";
import { useActor } from "@caffeineai/core-infrastructure";
import { Link, useParams } from "@tanstack/react-router";
import {
  AlertCircle,
  CheckCircle2,
  Home,
  Loader2,
  Package,
  ShieldCheck,
  Truck,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";

const titleColors = [
  "text-accent-blue",
  "text-accent-green",
  "text-accent-purple",
  "text-foreground",
];

type PageState =
  | { status: "loading" }
  | { status: "ok"; summary: OrderSummary }
  | { status: "err"; error: ConfirmError }
  | { status: "generic-error" };

function isLang(value: string): value is Lang {
  return value === "tr" || value === "de" || value === "en";
}

function SummaryRow({
  icon,
  iconClass,
  label,
  value,
}: {
  icon: React.ReactNode;
  iconClass: string;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-border last:border-b-0">
      <span className={`mt-0.5 shrink-0 ${iconClass}`}>{icon}</span>
      <div className="min-w-0 flex-1">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm text-foreground break-words">{value}</p>
      </div>
    </div>
  );
}

export default function OrderConfirm() {
  const { t, setLang } = useI18n();
  const { actor } = useActor(createActor);
  const params = useParams({ from: "/order/confirm/$token" });
  const token = params.token;

  const [state, setState] = useState<PageState>({ status: "loading" });

  useEffect(() => {
    let cancelled = false;
    if (!actor) return;

    setState({ status: "loading" });
    actor
      .confirm_order(token)
      .then((result: ConfirmResult) => {
        if (cancelled) return;
        if (result.__kind__ === "ok") {
          const summary = result.ok;
          if (isLang(summary.lang)) {
            setLang(summary.lang);
          }
          setState({ status: "ok", summary });
        } else {
          setState({ status: "err", error: result.err });
        }
      })
      .catch(() => {
        if (cancelled) return;
        setState({ status: "generic-error" });
      });

    return () => {
      cancelled = true;
    };
  }, [actor, token, setLang]);

  const renderError = (error: ConfirmError) => {
    if (error === ConfirmError.notFound) return t("orderConfirm.errorNotFound");
    if (error === ConfirmError.expired) return t("orderConfirm.errorExpired");
    if (error === ConfirmError.alreadyConfirmed)
      return t("orderConfirm.errorAlreadyConfirmed");
    return t("orderConfirm.errorGeneric");
  };

  return (
    <div>
      <SEO page="order" />
      <Hreflang path="/order/confirm/$token" />
      <Section variant="card">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-3">
            {t("orderConfirm.title")}
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {t("orderConfirm.subtitle")}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {state.status === "loading" && (
            <output
              className="flex flex-col items-center justify-center gap-3 py-16 rounded-2xl border border-border bg-background/40"
              data-ocid="orderConfirm.loading_state"
              aria-live="polite"
            >
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="text-sm text-muted-foreground">
                {t("orderConfirm.confirming")}
              </p>
            </output>
          )}

          {state.status === "ok" && (
            <div className="space-y-6" data-ocid="orderConfirm.success_state">
              {/* Order summary card */}
              <div className="relative overflow-hidden rounded-2xl border border-border bg-background/40 p-6 sm:p-8 shadow-subtle">
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-accent-blue via-accent-green to-accent-purple"
                />
                <div className="pl-2">
                  <h2 className="text-xl font-display font-semibold text-foreground mb-5 flex items-center gap-2">
                    <Package className={`w-5 h-5 ${titleColors[0]}`} />
                    {t("orderConfirm.summaryHeading")}
                  </h2>

                  <div className="divide-y divide-border">
                    <SummaryRow
                      icon={<Package className="w-4 h-4" />}
                      iconClass={titleColors[0]}
                      label={t("orderConfirm.product")}
                      value={state.summary.productName}
                    />
                    <SummaryRow
                      icon={<Package className="w-4 h-4" />}
                      iconClass={titleColors[1]}
                      label={t("orderConfirm.quantity")}
                      value={String(state.summary.quantity)}
                    />
                    <SummaryRow
                      icon={<User className="w-4 h-4" />}
                      iconClass={titleColors[1]}
                      label={t("orderConfirm.name")}
                      value={state.summary.fullName}
                    />
                    <SummaryRow
                      icon={<User className="w-4 h-4" />}
                      iconClass={titleColors[0]}
                      label={t("orderConfirm.email")}
                      value={state.summary.email}
                    />
                    <SummaryRow
                      icon={<User className="w-4 h-4" />}
                      iconClass={titleColors[2]}
                      label={t("orderConfirm.phone")}
                      value={state.summary.phone}
                    />
                    <SummaryRow
                      icon={<Truck className="w-4 h-4" />}
                      iconClass={titleColors[1]}
                      label={t("orderConfirm.address")}
                      value={`${state.summary.streetNo}, ${state.summary.postalCode} ${state.summary.city}`}
                    />
                    <SummaryRow
                      icon={<ShieldCheck className="w-4 h-4" />}
                      iconClass={titleColors[2]}
                      label={t("orderConfirm.securityProfile")}
                      value={state.summary.securityProfile}
                    />
                  </div>
                </div>
              </div>

              {/* Thank-you / success message */}
              <output
                className="relative overflow-hidden rounded-2xl border-2 border-success/40 bg-success/10 dark:bg-success/15 p-5 sm:p-6 shadow-lg shadow-success/10 dark:shadow-success/20"
                aria-live="polite"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-accent-blue via-accent-green to-accent-purple"
                />
                <div className="flex items-start gap-4 pl-2">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-success/20 dark:bg-success/25 ring-2 ring-success/30">
                    <CheckCircle2 className="h-6 w-6 text-success" />
                  </span>
                  <div className="pt-1.5">
                    <p className="text-base font-display font-semibold text-foreground mb-1">
                      {t("orderConfirm.successTitle")}
                    </p>
                    <p className="text-sm text-foreground leading-relaxed">
                      {t("orderConfirm.successMessage")}
                    </p>
                  </div>
                </div>
              </output>

              {/* Confirm button (visual acknowledgment) + back home */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  type="button"
                  variant="default"
                  className="w-full sm:flex-1"
                  data-ocid="orderConfirm.confirm_button"
                >
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  {t("orderConfirm.confirmButton")}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full sm:w-auto"
                  asChild
                  data-ocid="orderConfirm.back_home_button"
                >
                  <Link to="/">
                    <Home className="w-4 h-4 mr-2" />
                    {t("orderConfirm.backHome")}
                  </Link>
                </Button>
              </div>
            </div>
          )}

          {(state.status === "err" || state.status === "generic-error") && (
            <div
              className="relative overflow-hidden rounded-2xl border-2 border-destructive/40 bg-destructive/10 dark:bg-destructive/15 p-5 sm:p-6 shadow-lg shadow-destructive/10"
              data-ocid="orderConfirm.error_state"
              role="alert"
            >
              <span
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-1.5 bg-destructive"
              />
              <div className="flex items-start gap-4 pl-2">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-destructive/20 ring-2 ring-destructive/30">
                  <AlertCircle className="h-6 w-6 text-destructive" />
                </span>
                <div className="pt-1.5">
                  <p className="text-sm text-foreground leading-relaxed">
                    {state.status === "err"
                      ? renderError(state.error)
                      : t("orderConfirm.errorGeneric")}
                  </p>
                </div>
              </div>
              <div className="mt-5 pl-2">
                <Button
                  type="button"
                  variant="outline"
                  asChild
                  data-ocid="orderConfirm.error_back_home_button"
                >
                  <Link to="/">
                    <Home className="w-4 h-4 mr-2" />
                    {t("orderConfirm.backHome")}
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}
