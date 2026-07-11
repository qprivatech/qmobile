import { useI18n } from "@/lib/i18n";
import { Link } from "@tanstack/react-router";
import { Shield } from "lucide-react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  const categories = [
    {
      title: t("footer.products"),
      links: [
        { to: "/products", label: t("nav.products") },
        { to: "/compare", label: t("nav.compare") },
        { to: "/why", label: t("nav.why") },
      ],
    },
    {
      title: t("footer.company"),
      links: [
        { to: "/about", label: t("nav.about") },
        { to: "/services", label: t("nav.services") },
        { to: "/security", label: t("nav.security") },
        { to: "/contact", label: t("nav.contact") },
      ],
    },
    {
      title: t("footer.legal"),
      links: [
        { to: "/privacy", label: t("footer.privacy") },
        { to: "/terms", label: t("footer.terms") },
        { to: "/cookies", label: t("footer.cookies") },
      ],
    },
    {
      title: t("footer.support"),
      links: [
        { to: "/blog", label: t("nav.blog") },
        { to: "/faq", label: t("nav.faq") },
      ],
    },
  ];

  const socials = [
    {
      href: "https://linkedin.com/company/qmobile",
      label: "LinkedIn",
      icon: FaLinkedin,
      ocid: "footer.social_linkedin",
    },
    {
      href: "https://x.com/qmobile",
      label: "X / Twitter",
      icon: FaTwitter,
      ocid: "footer.social_x",
    },
    {
      href: "https://instagram.com/qmobile",
      label: "Instagram",
      icon: FaInstagram,
      ocid: "footer.social_instagram",
    },
  ];

  return (
    <footer className="bg-muted/40 border-t border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-display font-semibold text-foreground">
                {t("header.brand")}
              </span>
            </div>
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-semibold tracking-wide border border-primary/20">
              <svg viewBox="0 0 20 20" className="w-3 h-3" aria-hidden="true">
                <rect fill="#DA020E" width="20" height="20" rx="2" />
                <rect fill="#FFFFFF" x="8" y="3" width="4" height="14" />
                <rect fill="#FFFFFF" x="3" y="8" width="14" height="4" />
              </svg>
              {t("footer.swissmade")}
            </span>
            <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
              {t("footer.tagline")}
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3 mt-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  data-ocid={s.ocid}
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Categories */}
          {categories.map((cat) => (
            <div key={cat.title}>
              <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
                {cat.title}
              </h4>
              <ul className="space-y-2">
                {cat.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      data-ocid={`footer.link.${link.to.replace("/", "")}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {year}. {t("footer.rights")}
          </p>
          <a
            href={`mailto:${t("contact.email.value")}`}
            className="text-xs text-primary hover:underline"
          >
            {t("contact.email.value")}
          </a>
        </div>
        <p
          className="mt-3 text-[11px] text-muted-foreground/80 text-center sm:text-left leading-relaxed"
          data-ocid="footer.disclaimer"
        >
          {t("footer.disclaimer")}
        </p>
      </div>
    </footer>
  );
}
