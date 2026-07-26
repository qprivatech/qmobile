import { createActor } from "@/backend";
import { Hreflang } from "@/components/Hreflang";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { useActor } from "@caffeineai/core-infrastructure";
import {
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  ShoppingCart,
  Wrench,
} from "lucide-react";
import { useEffect, useState } from "react";

const titleColors = [
  "text-accent-blue",
  "text-accent-green",
  "text-accent-purple",
  "text-foreground",
];

const SUBJECT_LABELS: Record<string, string> = {
  sales: "contact.sales",
  support: "contact.support",
  consulting: "contact.consulting",
  other: "contact.other",
};

function randomCaptchaPair(): [number, number] {
  const a = Math.floor(Math.random() * 9) + 1;
  const b = Math.floor(Math.random() * 9) + 1;
  return [a, b];
}

export default function Contact() {
  const { t } = useI18n();
  const { actor } = useActor(createActor);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [captchaError, setCaptchaError] = useState(false);
  const [contractAccepted, setContractAccepted] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [captchaPair, setCaptchaPair] = useState<[number, number]>([3, 5]);
  const captchaSum = captchaPair[0] + captchaPair[1];

  // Randomize CAPTCHA on mount
  useEffect(() => {
    setCaptchaPair(randomCaptchaPair());
  }, []);

  const resetForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setCaptchaAnswer("");
    setCaptchaError(false);
    setContractAccepted(false);
    setSendError(false);
    setCaptchaPair(randomCaptchaPair());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSendError(false);

    if (Number.parseInt(captchaAnswer, 10) !== captchaSum) {
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
      const subjectLabel = SUBJECT_LABELS[subject]
        ? t(SUBJECT_LABELS[subject])
        : subject;
      await actor.send_contact_email(name, email, subjectLabel, message);
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

  const reasons = [
    { icon: ShoppingCart, label: t("contact.sales") },
    { icon: Wrench, label: t("contact.support") },
    { icon: MessageSquare, label: t("contact.consulting") },
  ];

  return (
    <div>
      <SEO page="contact" />
      <Hreflang path="/contact" />
      <SchemaOrg type="Organization" />
      <Section variant="card">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-3">
            {t("contact.title")}
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-10 max-w-3xl mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {sent && (
              <output
                className="flex items-start gap-3 rounded-xl border border-success/30 bg-success/10 p-4"
                data-ocid="contact.success_state"
                aria-live="polite"
              >
                <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                <p className="text-sm text-foreground">
                  {t("contact.successMessage")}
                </p>
              </output>
            )}
            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm font-medium text-foreground mb-1"
              >
                {t("contact.name")}
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={submitting}
                placeholder={t("contact.name.placeholder")}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-60"
                data-ocid="contact.name_input"
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm font-medium text-foreground mb-1"
              >
                {t("contact.email")}
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={submitting}
                placeholder={t("contact.email.placeholder")}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-60"
                data-ocid="contact.email_input"
              />
            </div>
            <div>
              <label
                htmlFor="contact-subject"
                className="block text-sm font-medium text-foreground mb-1"
              >
                {t("contact.subject")}
              </label>
              <select
                id="contact-subject"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                disabled={submitting}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-60"
                data-ocid="contact.subject_select"
              >
                <option value="">{t("contact.subject.placeholder")}</option>
                <option value="sales">{t("contact.sales")}</option>
                <option value="support">{t("contact.support")}</option>
                <option value="consulting">{t("contact.consulting")}</option>
                <option value="other">{t("contact.other")}</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-medium text-foreground mb-1"
              >
                {t("contact.message")}
              </label>
              <textarea
                id="contact-message"
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={submitting}
                placeholder={t("contact.message.placeholder")}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring resize-none disabled:opacity-60"
                data-ocid="contact.message_input"
              />
            </div>

            {/* Captcha */}
            <div>
              <label
                htmlFor="contact-captcha"
                className="block text-sm font-medium text-foreground mb-1"
              >
                {captchaPair[0]} + {captchaPair[1]} = ?
              </label>
              <input
                id="contact-captcha"
                type="text"
                inputMode="numeric"
                required
                value={captchaAnswer}
                onChange={(e) => {
                  setCaptchaAnswer(e.target.value);
                  setCaptchaError(false);
                }}
                disabled={submitting}
                placeholder={t("contact.captchaPlaceholder")}
                className={`w-full rounded-lg border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-60 ${
                  captchaError ? "border-destructive" : "border-border"
                }`}
                data-ocid="contact.captcha_input"
              />
              {captchaError && (
                <p
                  className="text-xs text-destructive mt-1"
                  data-ocid="contact.captcha_error"
                >
                  {t("contact.captchaError")}
                </p>
              )}
            </div>

            {/* Sales contract acceptance */}
            <div className="flex items-start gap-3">
              <input
                id="contact-sales-contract"
                type="checkbox"
                checked={contractAccepted}
                onChange={(e) => setContractAccepted(e.target.checked)}
                disabled={submitting}
                required
                className="mt-0.5 h-4 w-4 shrink-0 rounded border border-border bg-background text-primary accent-primary focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-60"
                data-ocid="contact.sales_contract_checkbox"
              />
              <label
                htmlFor="contact-sales-contract"
                className="text-sm text-foreground leading-relaxed"
              >
                {t("contact.salesContractAccept")}{" "}
                <a
                  href="https://qmobile.ch/sales-contract"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                  data-ocid="contact.sales_contract_link"
                >
                  ({t("contact.salesContractViewLink")})
                </a>
              </label>
            </div>

            {sendError && (
              <p
                className="text-sm text-destructive"
                data-ocid="contact.error_state"
                role="alert"
              >
                {t("contact.sendError")}
              </p>
            )}

            <Button
              type="submit"
              variant="default"
              className="w-full"
              disabled={submitting || !contractAccepted}
              data-ocid="contact.send_button"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  {t("contact.sending")}
                </>
              ) : sent ? (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  {t("contact.sent")}
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  {t("contact.send")}
                </>
              )}
            </Button>
            {submitting && (
              <span
                className="sr-only"
                data-ocid="contact.loading_state"
                aria-live="polite"
              >
                {t("contact.sending")}
              </span>
            )}
          </form>

          {/* Info */}
          <div className="space-y-6">
            {/* Response guarantee badge */}
            <div className="border border-border rounded-xl bg-card p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-success" />
              </div>
              <div>
                <p className={`text-sm font-medium ${titleColors[0]}`}>
                  {t("contact.response")}
                </p>
                <p className="text-xs text-foreground">
                  {t("contact.response.desc")}
                </p>
              </div>
            </div>

            {/* Contact reasons */}
            <div className="border border-border rounded-xl bg-card p-4 space-y-3">
              <p className={`text-sm font-medium ${titleColors[1]} mb-2`}>
                {t("contact.reasons")}
              </p>
              {reasons.map((r) => (
                <div key={r.label} className="flex items-center gap-3">
                  <r.icon className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-foreground">{r.label}</span>
                </div>
              ))}
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className={`text-sm font-medium ${titleColors[2]}`}>
                  {t("contact.address")}
                </p>
                <p className="text-sm text-foreground">
                  {t("contact.address")}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className={`text-sm font-medium ${titleColors[3]}`}>
                  {t("contact.email.label")}
                </p>
                <a
                  href={`mailto:${t("contact.email.value")}`}
                  className="text-sm text-primary hover:underline"
                >
                  {t("contact.email.value")}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className={`text-sm font-medium ${titleColors[4 % 4]}`}>
                  {t("contact.phone.label")}
                </p>
                <p className="text-sm text-foreground">
                  {t("contact.phone.value")}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className={`text-sm font-medium ${titleColors[5 % 4]}`}>
                  {t("contact.hours.label")}
                </p>
                <p className="text-sm text-foreground">{t("contact.hours")}</p>
                <p className="text-xs text-warning mt-1">
                  {t("contact.no247")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
