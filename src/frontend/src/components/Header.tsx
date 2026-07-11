import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { Globe, Menu, Moon, Shield, Sun, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { to: "/", labelKey: "nav.home" },
  { to: "/products", labelKey: "nav.products" },
  { to: "/why", labelKey: "nav.why" },
  { to: "/compare", labelKey: "nav.compare" },
  { to: "/security", labelKey: "nav.security" },
  { to: "/services", labelKey: "nav.services" },
  { to: "/blog", labelKey: "nav.blog" },
  { to: "/faq", labelKey: "nav.faq" },
  { to: "/about", labelKey: "nav.about" },
  { to: "/contact", labelKey: "nav.contact" },
];

export function Header() {
  const { t, lang, setLang } = useI18n();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-card border-b border-border shadow-subtle sticky top-0 z-40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 min-w-0">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 shrink min-w-0"
          data-ocid="header.logo"
        >
          <Shield className="w-7 h-7 text-primary" />
          <div className="flex flex-col leading-none">
            <span className="text-xl font-display font-bold text-foreground tracking-tight truncate">
              {t("header.brand")}
            </span>
            <span className="text-[10px] font-medium text-muted-foreground tracking-widest uppercase inline truncate">
              {t("slogan")}
            </span>
          </div>
          {/* Swiss badge */}
          <span className="hidden md:inline-flex items-center gap-1 ml-1 px-1.5 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-semibold tracking-wide border border-primary/20">
            <svg viewBox="0 0 20 20" className="w-3 h-3" aria-hidden="true">
              <rect fill="#DA020E" width="20" height="20" rx="2" />
              <rect fill="#FFFFFF" x="8" y="3" width="4" height="14" />
              <rect fill="#FFFFFF" x="3" y="8" width="14" height="4" />
            </svg>
            {t("header.swissBadge")}
          </span>
        </Link>

        {/* Right Actions */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {/* Language Switcher - hidden on mobile (available in mobile menu) */}
          <div className="hidden sm:flex items-center gap-1">
            {(["tr", "de", "en"] as const).map((l) => (
              <button
                type="button"
                key={l}
                onClick={() => setLang(l)}
                className={cn(
                  "w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium transition-smooth overflow-hidden",
                  lang === l
                    ? "ring-2 ring-primary ring-offset-1 ring-offset-background"
                    : "opacity-60 hover:opacity-100",
                )}
                aria-label={t(`lang.${l}`)}
                data-ocid={`header.lang.${l}`}
              >
                {l === "tr" && "TR"}
                {l === "de" && "DE"}
                {l === "en" && "EN"}
              </button>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth"
            aria-label={theme === "dark" ? t("theme.light") : t("theme.dark")}
            data-ocid="header.theme_toggle"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>

          {/* Order CTA */}
          <Link to="/contact" data-ocid="header.order_button">
            <Button
              variant="default"
              size="sm"
              className="hidden sm:inline-flex"
            >
              {t("header.order")}
            </Button>
          </Link>

          {/* Menu Toggle - visible on all screens */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth"
            aria-label={t("header.toggleMenu")}
            data-ocid="header.menu_toggle"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Nav Dropdown - visible on all screens when menu is open */}
      {menuOpen && (
        <div className="border-t border-border bg-card">
          <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:text-primary hover:bg-muted transition-smooth"
                data-ocid={`header.nav.${link.labelKey}`}
              >
                {t(link.labelKey)}
              </Link>
            ))}
            <div className="flex items-center gap-2 pt-2 border-t border-border mt-2 sm:hidden">
              <Globe className="w-4 h-4 text-muted-foreground" />
              {(["tr", "de", "en"] as const).map((l) => (
                <button
                  type="button"
                  key={l}
                  onClick={() => setLang(l)}
                  className={cn(
                    "w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium transition-smooth overflow-hidden",
                    lang === l
                      ? "ring-2 ring-primary ring-offset-1 ring-offset-background"
                      : "opacity-60 hover:opacity-100",
                  )}
                  aria-label={t(`lang.${l}`)}
                  data-ocid={`header.mobile_lang.${l}`}
                >
                  {l === "tr" && "TR"}
                  {l === "de" && "DE"}
                  {l === "en" && "EN"}
                </button>
              ))}
            </div>
            <Link
              to="/contact"
              className="mt-2 sm:hidden"
              data-ocid="header.mobile_order_button"
            >
              <Button variant="default" className="w-full">
                {t("header.order")}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
