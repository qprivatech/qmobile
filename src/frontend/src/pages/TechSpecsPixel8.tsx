import { Hreflang } from "@/components/Hreflang";
import { SEO } from "@/components/SEO";
import { Section } from "@/components/Section";
import { Card } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

/**
 * Technical specifications page for Google Pixel 8.
 * All labels are translated via techSpecs.* i18n keys; numeric/spec
 * values are hardcoded (language-independent).
 * OS is genericized to "security-focused custom operating system"
 * (NOT GrapheneOS) per legal guidance.
 */

interface SpecRow {
  fieldKey: string;
  value: string;
}

interface SpecSection {
  titleKey: string;
  rows: SpecRow[];
}

const PHONE_NAME_KEY = "products.pixel8";
const HREFLANG_PATH = "/googlepixel8/teknik-ozellikleri";

const sections: SpecSection[] = [
  {
    titleKey: "techSpecs.sections.technical",
    rows: [
      { fieldKey: "techSpecs.fields.productType", value: "Smartphone" },
      { fieldKey: "techSpecs.fields.os", value: "techSpecs.values.os" },
      { fieldKey: "techSpecs.fields.processor", value: "Google Tensor G3" },
      { fieldKey: "techSpecs.fields.clockSpeed", value: "3.0 GHz" },
      { fieldKey: "techSpecs.fields.storage", value: "128 GB" },
      { fieldKey: "techSpecs.fields.ram", value: "8 GB" },
      { fieldKey: "techSpecs.fields.sdSlot", value: "techSpecs.values.no" },
      {
        fieldKey: "techSpecs.fields.frequencyBand",
        value: "850;900;1800;1900",
      },
      { fieldKey: "techSpecs.fields.sarHead", value: "1.13 W/kg" },
      { fieldKey: "techSpecs.fields.sarBody", value: "1.42 W/kg" },
      { fieldKey: "techSpecs.fields.sarCategory", value: "D" },
      {
        fieldKey: "techSpecs.fields.sensors",
        value: "techSpecs.values.sensors",
      },
      { fieldKey: "techSpecs.fields.simSize", value: "Nano-SIM" },
      {
        fieldKey: "techSpecs.fields.simLockFree",
        value: "techSpecs.values.yes",
      },
      { fieldKey: "techSpecs.fields.gtin", value: "N/A" },
      { fieldKey: "techSpecs.fields.manufacturer", value: "Google" },
    ],
  },
  {
    titleKey: "techSpecs.sections.display",
    rows: [
      { fieldKey: "techSpecs.fields.numDisplays", value: "1" },
      { fieldKey: "techSpecs.fields.screenDiagonalInch", value: '6.2"' },
      { fieldKey: "techSpecs.fields.screenDiagonalCm", value: "15.7 cm" },
      { fieldKey: "techSpecs.fields.resolution", value: "1080 x 2400" },
      { fieldKey: "techSpecs.fields.resolutionWidth", value: "1080" },
      { fieldKey: "techSpecs.fields.resolutionHeight", value: "2400" },
      { fieldKey: "techSpecs.fields.aspectRatio", value: "20:9" },
      { fieldKey: "techSpecs.fields.pixelDensity", value: "416 ppi" },
      {
        fieldKey: "techSpecs.fields.colorDisplay",
        value: "techSpecs.values.yes",
      },
      {
        fieldKey: "techSpecs.fields.displayDetails",
        value: "techSpecs.values.displayDetailsPixel8",
      },
      {
        fieldKey: "techSpecs.fields.antiScratch",
        value: "Corning Gorilla Glass Victus",
      },
      {
        fieldKey: "techSpecs.fields.curvedDisplay",
        value: "techSpecs.values.no",
      },
      {
        fieldKey: "techSpecs.fields.touchscreen",
        value: "techSpecs.values.yes",
      },
    ],
  },
  {
    titleKey: "techSpecs.sections.safety",
    rows: [
      { fieldKey: "techSpecs.fields.sarHead", value: "1.13 W/kg" },
      { fieldKey: "techSpecs.fields.sarBody", value: "1.42 W/kg" },
      { fieldKey: "techSpecs.fields.sarCategory", value: "D" },
      {
        fieldKey: "techSpecs.fields.simLockFree",
        value: "techSpecs.values.yes",
      },
    ],
  },
];

export default function TechSpecsPixel8() {
  const { t } = useI18n();
  const phoneName = t(PHONE_NAME_KEY);
  const pageTitle = t("techSpecs.title").replace("{phone}", phoneName);

  const renderValue = (value: string) =>
    value.startsWith("techSpecs.values.") ? t(value) : value;

  return (
    <div>
      <SEO page="products" />
      <Hreflang path={HREFLANG_PATH} />

      <Section variant="card">
        <div className="mb-8">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-smooth"
            data-ocid="techspecs_pixel8.back_link"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("techSpecs.backToProducts")}
          </Link>
        </div>

        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-2">
            {pageTitle}
          </h1>
          <p className="text-muted-foreground">{phoneName}</p>
        </div>

        <div className="space-y-8">
          {sections.map((section, sIdx) => (
            <Card
              key={section.titleKey}
              className="overflow-hidden"
              data-ocid={`techspecs_pixel8.section.${sIdx + 1}`}
            >
              <div className="border-b border-border bg-muted/30 px-5 py-3">
                <h2 className="text-lg font-display font-semibold text-foreground">
                  {t(section.titleKey)}
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody>
                    {section.rows.map((row, rIdx) => (
                      <tr
                        key={row.fieldKey}
                        className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors"
                        data-ocid={`techspecs_pixel8.row.${sIdx + 1}.${rIdx + 1}`}
                      >
                        <th
                          scope="row"
                          className="text-left py-3 px-5 font-medium text-muted-foreground align-top w-2/5"
                        >
                          {t(row.fieldKey)}
                        </th>
                        <td className="py-3 px-5 text-foreground break-words">
                          {renderValue(row.value)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
