import { Hreflang } from "@/components/Hreflang";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Section } from "@/components/Section";
import { useI18n } from "@/lib/i18n";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Building2, FileText, User } from "lucide-react";

/**
 * Sales Contract page — document-style legal contract.
 *
 * Visually distinct from AGB (which uses marketing-style cards):
 *  - Hero Section(muted) with FileText badge + title + subtitle
 *  - Parties block (seller / buyer) as a two-column document header
 *  - 11 numbered articles rendered as a clean contract document:
 *      * Articles 1, 10, 11       → single body paragraph
 *      * Articles 2-9             → numbered sub-clauses (e.g. "2.1", "2.2")
 *      * Article 7                → additional highlighted softwareChanges callout
 *  - Back-to-AGB link at the bottom
 *
 * All text comes from i18n via t(); no contract text is hardcoded.
 * PDF download and acceptance checkbox are explicitly excluded.
 */

const titleColors = [
  "text-accent-blue",
  "text-accent-green",
  "text-accent-purple",
  "text-foreground",
];

/** Articles that render a single body paragraph. */
const bodyArticles: ReadonlyArray<number> = [1, 10, 11];

/** Maximum sub-clauses any article is expected to define. */
const MAX_CLAUSES = 12;

const ALL_ARTICLES: ReadonlyArray<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export function SalesContract() {
  const { t } = useI18n();

  return (
    <div className="space-y-0">
      <SEO page="sales-contract" />
      <Hreflang path="/sales-contract" />
      <SchemaOrg type="Organization" />

      {/* Hero header */}
      <Section variant="muted" className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <FileText className="w-4 h-4" />
            <span>{t("salesContract.title")}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-bold text-foreground mb-4">
            {t("salesContract.title")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("salesContract.subtitle")}
          </p>
        </div>
      </Section>

      {/* Parties block — document header */}
      <Section variant="card" className="py-10 sm:py-12">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Seller */}
            <div
              className="bg-background border border-border rounded-xl p-6 shadow-subtle"
              data-ocid="sales_contract.parties.seller"
            >
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-5 h-5 text-accent-blue shrink-0" />
                <h2 className="text-sm font-display font-semibold uppercase tracking-wider text-accent-blue">
                  {t("salesContract.parties.seller")}
                </h2>
              </div>
              <dl className="space-y-2 text-sm text-foreground">
                <div className="flex flex-col">
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                    {t("salesContract.parties.sellerName")}
                  </dt>
                  <dd className="font-medium">Qmobile</dd>
                </div>
                <div className="flex flex-col">
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                    {t("salesContract.parties.sellerAddress")}
                  </dt>
                  <dd className="font-medium">
                    {t("salesContract.parties.sellerAddress")}
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                    {t("salesContract.parties.sellerPhone")}
                  </dt>
                  <dd className="font-medium">
                    {t("salesContract.parties.sellerPhone")}
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                    {t("salesContract.parties.sellerWebsite")}
                  </dt>
                  <dd className="font-medium">
                    {t("salesContract.parties.sellerWebsite")}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Buyer */}
            <div
              className="bg-background border border-border rounded-xl p-6 shadow-subtle"
              data-ocid="sales_contract.parties.buyer"
            >
              <div className="flex items-center gap-2 mb-4">
                <User className="w-5 h-5 text-accent-green shrink-0" />
                <h2 className="text-sm font-display font-semibold uppercase tracking-wider text-accent-green">
                  {t("salesContract.parties.buyer")}
                </h2>
              </div>
              <p className="text-sm text-foreground leading-relaxed">
                {t("salesContract.parties.buyerDesc")}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Articles — document body */}
      <Section variant="default" className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto">
          <article
            className="bg-card border border-border rounded-2xl shadow-subtle p-6 sm:p-10"
            data-ocid="sales_contract.articles"
          >
            <ol className="space-y-10">
              {ALL_ARTICLES.map((articleNum, idx) => {
                const titleColor = titleColors[idx % titleColors.length];
                const titleKey = `salesContract.articles.${articleNum}.title`;
                const isBodyArticle = bodyArticles.includes(articleNum);

                return (
                  <li
                    key={articleNum}
                    data-ocid={`sales_contract.article.${articleNum}`}
                    className="border-b border-border/60 pb-10 last:border-b-0 last:pb-0"
                  >
                    {/* Article heading: number + title */}
                    <header className="mb-4">
                      <h2
                        className={`text-xl sm:text-2xl font-display font-semibold ${titleColor}`}
                      >
                        <span className="text-muted-foreground/70 font-normal mr-2">
                          §{articleNum}
                        </span>
                        {t(titleKey)}
                      </h2>
                    </header>

                    {/* Body paragraph for single-body articles */}
                    {isBodyArticle && (
                      <p className="text-foreground leading-relaxed">
                        {t(`salesContract.articles.${articleNum}.body`)}
                      </p>
                    )}

                    {/* Numbered sub-clauses for clause articles */}
                    {!isBodyArticle && (
                      <ol className="space-y-3">
                        {Array.from(
                          { length: MAX_CLAUSES },
                          (_, i) => i + 1,
                        ).map((clauseNum) => {
                          const clauseKey = `salesContract.articles.${articleNum}.clauses.${clauseNum}`;
                          const clauseText = t(clauseKey);
                          // Skip clauses that are not defined (fallback returns the key).
                          if (clauseText === clauseKey) return null;
                          return (
                            <li
                              key={clauseNum}
                              data-ocid={`sales_contract.article.${articleNum}.clause.${clauseNum}`}
                              className="flex gap-3 text-foreground leading-relaxed"
                            >
                              <span className="shrink-0 font-mono text-sm font-semibold text-muted-foreground tabular-nums">
                                {articleNum}.{clauseNum}
                              </span>
                              <span className="min-w-0 flex-1">
                                {clauseText}
                              </span>
                            </li>
                          );
                        })}
                      </ol>
                    )}

                    {/* Article 7 — software changes callout */}
                    {articleNum === 7 && (
                      <div
                        className="mt-6 flex gap-3 rounded-lg border border-amber-500/40 bg-amber-500/10 p-4"
                        data-ocid="sales_contract.article.7.software_changes"
                      >
                        <FileText
                          className="w-5 h-5 text-amber-600 shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <p className="text-sm text-foreground leading-relaxed">
                          {t("salesContract.articles.7.softwareChanges")}
                        </p>
                      </div>
                    )}
                  </li>
                );
              })}
            </ol>
          </article>
        </div>
      </Section>

      {/* Back to AGB */}
      <Section variant="muted" className="py-10">
        <div className="max-w-3xl mx-auto text-center">
          <Link
            to="/agb"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            data-ocid="sales_contract.back_to_agb.link"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("salesContract.backToAgb")}
          </Link>
        </div>
      </Section>
    </div>
  );
}

export default SalesContract;
