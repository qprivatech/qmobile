import { createActor } from "@/backend";
import type { OrderMessage } from "@/backend";
import { Hreflang } from "@/components/Hreflang";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { useActor } from "@caffeineai/core-infrastructure";
import { useLocation } from "@tanstack/react-router";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Lock,
  Package,
  ShieldCheck,
  ShoppingCart,
  Truck,
  User,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const titleColors = [
  "text-accent-blue",
  "text-accent-green",
  "text-accent-purple",
  "text-foreground",
];

interface Product {
  id: string;
  nameKey: string;
  /** Fallback label if i18n key is missing. */
  fallbackName: string;
  price: number;
}

const PRODUCTS: Product[] = [
  {
    id: "pixel8",
    nameKey: "products.pixel8",
    fallbackName: "Google Pixel 8",
    price: 1200,
  },
  {
    id: "pixel9",
    nameKey: "products.pixel9",
    fallbackName: "Google Pixel 9",
    price: 1500,
  },
  {
    id: "pixel10",
    nameKey: "products.pixel10",
    fallbackName: "Google Pixel 10",
    price: 1800,
  },
  {
    id: "faradayBox",
    nameKey: "products.faradayBox",
    fallbackName: "Q Faraday Box",
    price: 300,
  },
  {
    id: "faradayPouch",
    nameKey: "products.faradayPouch",
    fallbackName: "Q Faraday Pouch",
    price: 200,
  },
];

const SECURITY_PROFILES = ["standard", "high", "custom"] as const;
type SecurityProfile = (typeof SECURITY_PROFILES)[number];

const SECURITY_LABEL_KEYS: Record<SecurityProfile, string> = {
  standard: "order.securityStandard",
  high: "order.securityHigh",
  custom: "order.securityCustom",
};

const SECURITY_DESC_KEYS: Record<SecurityProfile, string> = {
  standard: "order.securityStandardDesc",
  high: "order.securityHighDesc",
  custom: "order.securityCustomDesc",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function randomCaptchaPair(): [number, number] {
  const a = Math.floor(Math.random() * 9) + 1;
  const b = Math.floor(Math.random() * 9) + 1;
  return [a, b];
}

export default function Order() {
  const { t, lang } = useI18n();
  const { actor } = useActor(createActor);
  const location = useLocation();

  // Resolve product from ?product= URL param (pixel8 fallback).
  const initialProductId = useMemo(() => {
    const params = new URLSearchParams(location.search ?? "");
    const requested = params.get("product");
    if (requested && PRODUCTS.some((p) => p.id === requested)) return requested;
    return "pixel8";
  }, [location.search]);

  const [productId, setProductId] = useState(initialProductId);
  const [quantity, setQuantity] = useState(1);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [streetNo, setStreetNo] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [securityProfile, setSecurityProfile] =
    useState<SecurityProfile>("standard");
  const [securityNotes, setSecurityNotes] = useState("");
  const [contractAccepted, setContractAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [captchaError, setCaptchaError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [captchaPair, setCaptchaPair] = useState<[number, number]>([3, 5]);

  const captchaSum = captchaPair[0] + captchaPair[1];
  const captchaValid = Number.parseInt(captchaAnswer, 10) === captchaSum;

  const selectedProduct =
    PRODUCTS.find((p) => p.id === productId) ?? PRODUCTS[0];
  const total = selectedProduct.price * quantity;

  // Resolve product name with fallback for missing i18n keys (e.g. faradayBox).
  const productName = useMemo(() => {
    const resolved = t(selectedProduct.nameKey);
    return resolved === selectedProduct.nameKey
      ? selectedProduct.fallbackName
      : resolved;
  }, [t, selectedProduct]);

  // Randomize CAPTCHA on mount.
  useEffect(() => {
    setCaptchaPair(randomCaptchaPair());
  }, []);

  // Keep product in sync if the URL param changes (e.g. navigation).
  useEffect(() => {
    setProductId(initialProductId);
  }, [initialProductId]);

  const resetForm = () => {
    setProductId("pixel8");
    setQuantity(1);
    setFullName("");
    setEmail("");
    setPhone("");
    setStreetNo("");
    setPostalCode("");
    setCity("");
    setSecurityProfile("standard");
    setSecurityNotes("");
    setContractAccepted(false);
    setPrivacyAccepted(false);
    setCaptchaAnswer("");
    setCaptchaError(false);
    setEmailError(false);
    setSendError(false);
    setCaptchaPair(randomCaptchaPair());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSendError(false);

    if (!EMAIL_RE.test(email)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);

    if (!captchaValid) {
      setCaptchaError(true);
      setCaptchaAnswer("");
      setCaptchaPair(randomCaptchaPair());
      return;
    }
    setCaptchaError(false);

    if (!actor) {
      setSendError(true);
      return;
    }

    setSubmitting(true);
    try {
      const order: OrderMessage = {
        productId: selectedProduct.id,
        productName,
        quantity: BigInt(quantity),
        fullName,
        email,
        phone,
        streetNo,
        postalCode,
        city,
        securityProfile,
        securityNotes,
        contractAccepted,
        privacyAccepted,
        lang,
      };
      await actor.send_order_email(order);
      setSent(true);
      resetForm();
    } catch {
      setSendError(true);
      setSent(false);
      setCaptchaAnswer("");
      setCaptchaPair(randomCaptchaPair());
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-60";

  return (
    <div>
      <SEO page="order" />
      <Hreflang path="/order" />
      <SchemaOrg type="Organization" />
      <Section variant="card">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-3">
            {t("order.title")}
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {t("order.subtitle")}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10 max-w-3xl mx-auto">
          {sent && (
            <output
              className="relative overflow-hidden rounded-2xl border-2 border-success/40 bg-success/10 dark:bg-success/15 p-5 sm:p-6 shadow-lg shadow-success/10 dark:shadow-success/20"
              data-ocid="order.success_state"
              aria-live="polite"
            >
              {/* Brand-colored accent bar (blue/green/purple) */}
              <span
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-accent-blue via-accent-green to-accent-purple"
              />
              <div className="flex items-start gap-4 pl-2">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-success/20 dark:bg-success/25 ring-2 ring-success/30">
                  <CheckCircle2 className="h-6 w-6 text-success" />
                </span>
                <p className="text-sm text-foreground leading-relaxed pt-1.5">
                  {t("order.successMessage")}
                </p>
              </div>
            </output>
          )}

          {/* 1. Order Summary */}
          <fieldset className="border border-border rounded-xl bg-background/40 p-6 space-y-5">
            <legend className="px-2 flex items-center gap-2">
              <Package className={`w-5 h-5 ${titleColors[0]}`} />
              <span className="text-sm font-semibold text-foreground">
                {t("order.title")}
              </span>
            </legend>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="order-product"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  {t("order.product")}
                </label>
                <select
                  id="order-product"
                  required
                  value={productId}
                  onChange={(e) => setProductId(e.target.value)}
                  disabled={submitting}
                  className={inputClass}
                  data-ocid="order.product_select"
                >
                  {PRODUCTS.map((p) => {
                    const name = t(p.nameKey);
                    const label = name === p.nameKey ? p.fallbackName : name;
                    return (
                      <option key={p.id} value={p.id}>
                        {label} — {p.price.toLocaleString("de-CH")} CHF
                      </option>
                    );
                  })}
                </select>
              </div>

              <div>
                <label
                  htmlFor="order-quantity"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  {t("order.quantity")}
                </label>
                <input
                  id="order-quantity"
                  type="number"
                  min={1}
                  step={1}
                  required
                  value={quantity}
                  onChange={(e) => {
                    const v = Number.parseInt(e.target.value, 10);
                    setQuantity(Number.isNaN(v) || v < 1 ? 1 : v);
                  }}
                  disabled={submitting}
                  className={inputClass}
                  data-ocid="order.quantity_input"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 pt-2 border-t border-border">
              <div className="flex items-start gap-3">
                <Truck
                  className={`w-5 h-5 mt-0.5 shrink-0 ${titleColors[1]}`}
                />
                <div>
                  <p className="text-xs text-muted-foreground">
                    {t("order.deliveryTime")}
                  </p>
                  <p className="text-sm text-foreground">
                    {t("order.deliveryValue")}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:justify-end">
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">
                    {t("order.total")}
                  </p>
                  <p
                    className={`text-2xl font-display font-bold ${titleColors[2]}`}
                  >
                    {total.toLocaleString("de-CH")} CHF
                  </p>
                </div>
              </div>
            </div>
          </fieldset>

          {/* 2. Customer Info */}
          <fieldset className="border border-border rounded-xl bg-background/40 p-6 space-y-5">
            <legend className="px-2 flex items-center gap-2">
              <User className={`w-5 h-5 ${titleColors[1]}`} />
              <span className="text-sm font-semibold text-foreground">
                {t("order.customerInfo")}
              </span>
            </legend>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="order-fullname"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  {t("order.fullName")}
                </label>
                <input
                  id="order-fullname"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  disabled={submitting}
                  placeholder={t("order.fullNamePlaceholder")}
                  className={inputClass}
                  data-ocid="order.fullname_input"
                />
              </div>
              <div>
                <label
                  htmlFor="order-email"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  {t("order.email")}
                </label>
                <input
                  id="order-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError(false);
                  }}
                  disabled={submitting}
                  placeholder="name@example.com"
                  className={`${inputClass} ${emailError ? "border-destructive" : ""}`}
                  data-ocid="order.email_input"
                />
                {emailError && (
                  <p
                    className="text-xs text-destructive mt-1"
                    data-ocid="order.email_error"
                  >
                    {t("order.invalidEmail")}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="order-phone"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  {t("order.phone")}
                </label>
                <input
                  id="order-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={submitting}
                  placeholder={t("order.phonePlaceholder")}
                  className={inputClass}
                  data-ocid="order.phone_input"
                />
              </div>
              <div>
                <label
                  htmlFor="order-streetno"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  {t("order.streetNo")}
                </label>
                <input
                  id="order-streetno"
                  type="text"
                  required
                  value={streetNo}
                  onChange={(e) => setStreetNo(e.target.value)}
                  disabled={submitting}
                  placeholder={t("order.streetNoPlaceholder")}
                  className={inputClass}
                  data-ocid="order.streetno_input"
                />
              </div>
              <div>
                <label
                  htmlFor="order-postalcode"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  {t("order.postalCode")}
                </label>
                <input
                  id="order-postalcode"
                  type="text"
                  required
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  disabled={submitting}
                  placeholder={t("order.postalCodePlaceholder")}
                  className={inputClass}
                  data-ocid="order.postalcode_input"
                />
              </div>
              <div>
                <label
                  htmlFor="order-city"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  {t("order.city")}
                </label>
                <input
                  id="order-city"
                  type="text"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  disabled={submitting}
                  placeholder={t("order.cityPlaceholder")}
                  className={inputClass}
                  data-ocid="order.city_input"
                />
              </div>
            </div>
          </fieldset>

          {/* 3. Security Config */}
          <fieldset className="border border-border rounded-xl bg-background/40 p-6 space-y-5">
            <legend className="px-2 flex items-center gap-2">
              <ShieldCheck className={`w-5 h-5 ${titleColors[2]}`} />
              <span className="text-sm font-semibold text-foreground">
                {t("order.securityConfig")}
              </span>
            </legend>

            <div>
              <label
                htmlFor="order-security-profile"
                className="block text-sm font-medium text-foreground mb-1"
              >
                {t("order.securityProfile")}
              </label>
              <select
                id="order-security-profile"
                required
                value={securityProfile}
                onChange={(e) =>
                  setSecurityProfile(e.target.value as SecurityProfile)
                }
                disabled={submitting}
                className={inputClass}
                data-ocid="order.security_profile_select"
              >
                <option value="">{t("order.securityProfileSelect")}</option>
                {SECURITY_PROFILES.map((p) => (
                  <option key={p} value={p}>
                    {t(SECURITY_LABEL_KEYS[p])}
                  </option>
                ))}
              </select>
              {securityProfile && (
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  {t(SECURITY_DESC_KEYS[securityProfile])}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="order-security-notes"
                className="block text-sm font-medium text-foreground mb-1"
              >
                {t("order.securityNotes")}
              </label>
              <textarea
                id="order-security-notes"
                rows={3}
                value={securityNotes}
                onChange={(e) => setSecurityNotes(e.target.value)}
                disabled={submitting}
                placeholder={t("order.securityNotesPlaceholder")}
                className={`${inputClass} resize-none`}
                data-ocid="order.security_notes_input"
              />
            </div>
          </fieldset>

          {/* 4. Legal Consent */}
          <fieldset className="border border-border rounded-xl bg-background/40 p-6 space-y-4">
            <legend className="px-2 flex items-center gap-2">
              <Lock className={`w-5 h-5 ${titleColors[3]}`} />
              <span className="text-sm font-semibold text-foreground">
                {t("order.legalConsent")}
              </span>
            </legend>

            <div className="flex items-start gap-3">
              <input
                id="order-contract"
                type="checkbox"
                checked={contractAccepted}
                onChange={(e) => setContractAccepted(e.target.checked)}
                disabled={submitting}
                required
                className="mt-0.5 h-4 w-4 shrink-0 rounded border border-border bg-background text-primary accent-primary focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-60"
                data-ocid="order.contract_checkbox"
              />
              <label
                htmlFor="order-contract"
                className="text-sm text-foreground leading-relaxed"
              >
                {t("order.contractAccept")}{" "}
                <a
                  href="/sales-contract"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                  data-ocid="order.contract_link"
                >
                  {t("order.contractViewLink")}
                </a>
              </label>
            </div>

            <div className="flex items-start gap-3">
              <input
                id="order-privacy"
                type="checkbox"
                checked={privacyAccepted}
                onChange={(e) => setPrivacyAccepted(e.target.checked)}
                disabled={submitting}
                required
                className="mt-0.5 h-4 w-4 shrink-0 rounded border border-border bg-background text-primary accent-primary focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-60"
                data-ocid="order.privacy_checkbox"
              />
              <label
                htmlFor="order-privacy"
                className="text-sm text-foreground leading-relaxed"
              >
                {t("order.privacyAccept")}{" "}
                <a
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                  data-ocid="order.privacy_link"
                >
                  {t("order.privacyViewLink")}
                </a>
              </label>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed pl-7">
              {t("order.withdrawalNotice")}
            </p>
          </fieldset>

          {/* 5. Captcha */}
          <fieldset className="border border-border rounded-xl bg-background/40 p-6 space-y-4">
            <legend className="px-2 text-sm font-semibold text-foreground">
              {t("order.captcha")}
            </legend>
            <div>
              <label
                htmlFor="order-captcha"
                className="block text-sm font-medium text-foreground mb-1"
              >
                {captchaPair[0]} + {captchaPair[1]} = ?
              </label>
              <input
                id="order-captcha"
                type="text"
                inputMode="numeric"
                required
                value={captchaAnswer}
                onChange={(e) => {
                  setCaptchaAnswer(e.target.value);
                  setCaptchaError(false);
                }}
                disabled={submitting}
                placeholder={t("order.captchaPlaceholder")}
                className={`${inputClass} ${captchaError ? "border-destructive" : ""}`}
                data-ocid="order.captcha_input"
              />
              {captchaError && (
                <p
                  className="text-xs text-destructive mt-1"
                  data-ocid="order.captcha_error"
                >
                  {t("order.requiredField")}
                </p>
              )}
            </div>
          </fieldset>

          {sendError && (
            <p
              className="flex items-center gap-2 text-sm text-destructive"
              data-ocid="order.error_state"
              role="alert"
            >
              <AlertCircle className="w-4 h-4 shrink-0" />
              {t("order.errorMessage")}
            </p>
          )}

          {/* 6. Submit */}
          <Button
            type="submit"
            variant="default"
            className="w-full"
            disabled={
              submitting ||
              !contractAccepted ||
              !privacyAccepted ||
              !captchaValid
            }
            data-ocid="order.submit_button"
          >
            {submitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                {t("order.sending")}
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4 mr-2" />
                {t("order.placeOrder")}
              </>
            )}
          </Button>
          {submitting && (
            <span
              className="sr-only"
              data-ocid="order.loading_state"
              aria-live="polite"
            >
              {t("order.sending")}
            </span>
          )}
        </form>
      </Section>
    </div>
  );
}
