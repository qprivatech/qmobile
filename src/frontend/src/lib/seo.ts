import type { Lang } from "@/lib/i18n";

export interface SeoMeta {
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogType: string;
  ogImage?: string;
  twitterCard: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage?: string;
}

const baseUrl = "https://qmobile.ch";

const defaultOgImage = `${baseUrl}/assets/generated/og-image.dim_1200x630.png`;

export const seoData: Record<string, Record<Lang, SeoMeta>> = {
  home: {
    tr: {
      title: "Qmobile - Gizliliğin Kontrolü Sende",
      description:
        "İsviçre merkezli güvenli Pixel telefonlar. Güvenlik odaklı özel işletim sistemi yüklü, maksimum gizlilik için tam yapılandırılmış mobil cihazlar.",
      canonical: `${baseUrl}/`,
      ogTitle: "Qmobile - Gizliliğin Kontrolü Sende",
      ogDescription:
        "İsviçre merkezli güvenli Pixel telefonlar. Güvenlik odaklı özel işletim sistemi yüklü, maksimum gizlilik için tam yapılandırılmış mobil cihazlar.",
      ogType: "website",
      ogImage: defaultOgImage,
      twitterCard: "summary_large_image",
      twitterTitle: "Qmobile - Gizliliğin Kontrolü Sende",
      twitterDescription:
        "İsviçre merkezli güvenli Pixel telefonlar. Güvenlik odaklı özel işletim sistemi yüklü.",
      twitterImage: defaultOgImage,
    },
    de: {
      title: "Qmobile - Datenschutz unter Ihrer Kontrolle",
      description:
        "Schweizer sichere Pixel-Telefone. Mit sicherheitsorientiertem speziellem Betriebssystem vorinstalliert, für maximale Privatsphäre vollständig konfiguriert.",
      canonical: `${baseUrl}/`,
      ogTitle: "Qmobile - Datenschutz unter Ihrer Kontrolle",
      ogDescription:
        "Schweizer sichere Pixel-Telefone. Mit sicherheitsorientiertem speziellem Betriebssystem vorinstalliert.",
      ogType: "website",
      ogImage: defaultOgImage,
      twitterCard: "summary_large_image",
      twitterTitle: "Qmobile - Datenschutz unter Ihrer Kontrolle",
      twitterDescription:
        "Schweizer sichere Pixel-Telefone. Mit sicherheitsorientiertem speziellem Betriebssystem vorinstalliert.",
      twitterImage: defaultOgImage,
    },
    en: {
      title: "Qmobile - Privacy Under Your Control",
      description:
        "Swiss-based secure Pixel phones. Pre-installed with security-focused custom operating system, fully configured for maximum privacy.",
      canonical: `${baseUrl}/`,
      ogTitle: "Qmobile - Privacy Under Your Control",
      ogDescription:
        "Swiss-based secure Pixel phones. Pre-installed with security-focused custom operating system.",
      ogType: "website",
      ogImage: defaultOgImage,
      twitterCard: "summary_large_image",
      twitterTitle: "Qmobile - Privacy Under Your Control",
      twitterDescription:
        "Swiss-based secure Pixel phones. Pre-installed with security-focused custom operating system.",
      twitterImage: defaultOgImage,
    },
  },
  products: {
    tr: {
      title: "Güvenli Pixel Telefonlar | Qmobile",
      description:
        "Google Pixel 8, 9 ve 10 güvenlik odaklı özel işletim sistemi yüklü. Faraday korumalı aksesuarlar. İsviçre merkezli, ücretsiz kargo.",
      canonical: `${baseUrl}/products`,
      ogTitle: "Güvenli Pixel Telefonlar | Qmobile",
      ogDescription:
        "Google Pixel 8, 9 ve 10 güvenlik odaklı özel işletim sistemi yüklü. Faraday korumalı aksesuarlar.",
      ogType: "product",
      ogImage: defaultOgImage,
      twitterCard: "summary_large_image",
      twitterTitle: "Güvenli Pixel Telefonlar | Qmobile",
      twitterDescription:
        "Google Pixel 8, 9 ve 10 güvenlik odaklı özel işletim sistemi yüklü.",
      twitterImage: defaultOgImage,
    },
    de: {
      title: "Sichere Pixel-Telefone | Qmobile",
      description:
        "Google Pixel 8, 9 und 10 mit sicherheitsorientiertem speziellem Betriebssystem vorinstalliert. Faraday-geschützte Zubehörteile.",
      canonical: `${baseUrl}/products`,
      ogTitle: "Sichere Pixel-Telefone | Qmobile",
      ogDescription:
        "Google Pixel 8, 9 und 10 mit sicherheitsorientiertem speziellem Betriebssystem vorinstalliert.",
      ogType: "product",
      ogImage: defaultOgImage,
      twitterCard: "summary_large_image",
      twitterTitle: "Sichere Pixel-Telefone | Qmobile",
      twitterDescription:
        "Google Pixel 8, 9 und 10 mit sicherheitsorientiertem speziellem Betriebssystem vorinstalliert.",
      twitterImage: defaultOgImage,
    },
    en: {
      title: "Secure Pixel Phones | Qmobile",
      description:
        "Google Pixel 8, 9 and 10 pre-installed with security-focused custom operating system. Faraday-protected accessories.",
      canonical: `${baseUrl}/products`,
      ogTitle: "Secure Pixel Phones | Qmobile",
      ogDescription:
        "Google Pixel 8, 9 and 10 pre-installed with security-focused custom operating system.",
      ogType: "product",
      ogImage: defaultOgImage,
      twitterCard: "summary_large_image",
      twitterTitle: "Secure Pixel Phones | Qmobile",
      twitterDescription:
        "Google Pixel 8, 9 and 10 pre-installed with security-focused custom operating system.",
      twitterImage: defaultOgImage,
    },
  },
  why: {
    tr: {
      title: "Neden Qmobile? | Güvenlik ve Gizlilik",
      description:
        "Sertleştirilmiş çekirdek, sıfır takip, uygulama kuması, doğrulanmış önyükleme. Qmobile'ın fark yaratan güvenlik özellikleri.",
      canonical: `${baseUrl}/why`,
      ogTitle: "Neden Qmobile? | Güvenlik ve Gizlilik",
      ogDescription:
        "Sertleştirilmiş çekirdek, sıfır takip, uygulama kuması, doğrulanmış önyükleme.",
      ogType: "website",
      ogImage: defaultOgImage,
      twitterCard: "summary_large_image",
      twitterTitle: "Neden Qmobile? | Güvenlik ve Gizlilik",
      twitterDescription:
        "Sertleştirilmiş çekirdek, sıfır takip, uygulama kuması, doğrulanmış önyükleme.",
      twitterImage: defaultOgImage,
    },
    de: {
      title: "Warum Qmobile? | Sicherheit und Privatsphäre",
      description:
        "Gehärteter Kernel, Zero Tracking, App-Sandbox, Verified Boot. Die sicherheitsrelevanten Funktionen von Qmobile.",
      canonical: `${baseUrl}/why`,
      ogTitle: "Warum Qmobile? | Sicherheit und Privatsphäre",
      ogDescription:
        "Gehärteter Kernel, Zero Tracking, App-Sandbox, Verified Boot.",
      ogType: "website",
      ogImage: defaultOgImage,
      twitterCard: "summary_large_image",
      twitterTitle: "Warum Qmobile? | Sicherheit und Privatsphäre",
      twitterDescription:
        "Gehärteter Kernel, Zero Tracking, App-Sandbox, Verified Boot.",
      twitterImage: defaultOgImage,
    },
    en: {
      title: "Why Qmobile? | Security and Privacy",
      description:
        "Hardened kernel, zero tracking, app sandbox, verified boot. Qmobile's differentiating security features.",
      canonical: `${baseUrl}/why`,
      ogTitle: "Why Qmobile? | Security and Privacy",
      ogDescription:
        "Hardened kernel, zero tracking, app sandbox, verified boot.",
      ogType: "website",
      ogImage: defaultOgImage,
      twitterCard: "summary_large_image",
      twitterTitle: "Why Qmobile? | Security and Privacy",
      twitterDescription:
        "Hardened kernel, zero tracking, app sandbox, verified boot.",
      twitterImage: defaultOgImage,
    },
  },
  compare: {
    tr: {
      title: "Ürün Karşılaştırması | Qmobile vs Stok Android",
      description:
        "Qmobile güvenlik odaklı özel işletim sistemi ile stok Android, iPhone ve Samsung karşılaştırması. Açık kaynak, sıfır telemetri.",
      canonical: `${baseUrl}/compare`,
      ogTitle: "Ürün Karşılaştırması | Qmobile vs Stok Android",
      ogDescription:
        "Qmobile güvenlik odaklı özel işletim sistemi ile stok Android, iPhone ve Samsung karşılaştırması.",
      ogType: "website",
      ogImage: defaultOgImage,
      twitterCard: "summary_large_image",
      twitterTitle: "Ürün Karşılaştırması | Qmobile vs Stok Android",
      twitterDescription:
        "Qmobile güvenlik odaklı özel işletim sistemi ile stok Android karşılaştırması.",
      twitterImage: defaultOgImage,
    },
    de: {
      title: "Produktvergleich | Qmobile vs Stock Android",
      description:
        "Vergleich von Qmobile sicherheitsorientiertem speziellem Betriebssystem mit Stock Android, iPhone und Samsung.",
      canonical: `${baseUrl}/compare`,
      ogTitle: "Produktvergleich | Qmobile vs Stock Android",
      ogDescription:
        "Vergleich von Qmobile mit Stock Android, iPhone und Samsung.",
      ogType: "website",
      ogImage: defaultOgImage,
      twitterCard: "summary_large_image",
      twitterTitle: "Produktvergleich | Qmobile vs Stock Android",
      twitterDescription:
        "Vergleich von Qmobile mit Stock Android, iPhone und Samsung.",
      twitterImage: defaultOgImage,
    },
    en: {
      title: "Product Comparison | Qmobile vs Stock Android",
      description:
        "Comparison of Qmobile security-focused custom operating system with stock Android, iPhone and Samsung.",
      canonical: `${baseUrl}/compare`,
      ogTitle: "Product Comparison | Qmobile vs Stock Android",
      ogDescription:
        "Comparison of Qmobile with stock Android, iPhone and Samsung.",
      ogType: "website",
      ogImage: defaultOgImage,
      twitterCard: "summary_large_image",
      twitterTitle: "Product Comparison | Qmobile vs Stock Android",
      twitterDescription:
        "Comparison of Qmobile with stock Android, iPhone and Samsung.",
      twitterImage: defaultOgImage,
    },
  },
  security: {
    tr: {
      title: "Güvenlik | Qmobile",
      description:
        "Uçtan uca şifreleme, kuantum sonrası kriptografi, merkezi sunucu yok. Q-PWA güvenli mesajlaşma ve askeri düzeyde şifreleme.",
      canonical: `${baseUrl}/security`,
      ogTitle: "Güvenlik | Qmobile",
      ogDescription:
        "Uçtan uca şifreleme, kuantum sonrası kriptografi, merkezi sunucu yok.",
      ogType: "website",
      ogImage: defaultOgImage,
      twitterCard: "summary_large_image",
      twitterTitle: "Güvenlik | Qmobile",
      twitterDescription:
        "Uçtan uca şifreleme, kuantum sonrası kriptografi, merkezi sunucu yok.",
      twitterImage: defaultOgImage,
    },
    de: {
      title: "Sicherheit | Qmobile",
      description:
        "Ende-zu-Ende-Verschlüsselung, Post-Quantum-Kryptografie, keine zentralen Server. Q-PWA sichere Messaging.",
      canonical: `${baseUrl}/security`,
      ogTitle: "Sicherheit | Qmobile",
      ogDescription:
        "Ende-zu-Ende-Verschlüsselung, Post-Quantum-Kryptografie, keine zentralen Server.",
      ogType: "website",
      ogImage: defaultOgImage,
      twitterCard: "summary_large_image",
      twitterTitle: "Sicherheit | Qmobile",
      twitterDescription:
        "Ende-zu-Ende-Verschlüsselung, Post-Quantum-Kryptografie, keine zentralen Server.",
      twitterImage: defaultOgImage,
    },
    en: {
      title: "Security | Qmobile",
      description:
        "End-to-end encryption, post-quantum cryptography, no central servers. Q-PWA secure messaging.",
      canonical: `${baseUrl}/security`,
      ogTitle: "Security | Qmobile",
      ogDescription:
        "End-to-end encryption, post-quantum cryptography, no central servers.",
      ogType: "website",
      ogImage: defaultOgImage,
      twitterCard: "summary_large_image",
      twitterTitle: "Security | Qmobile",
      twitterDescription:
        "End-to-end encryption, post-quantum cryptography, no central servers.",
      twitterImage: defaultOgImage,
    },
  },
  services: {
    tr: {
      title: "Danışmanlık Hizmetleri | Qmobile",
      description:
        "Teknik danışmanlık, güvenlik danışmanlığı, güvenli iletişim çözümleri. Bireysel ve kurumsal hizmetler.",
      canonical: `${baseUrl}/services`,
      ogTitle: "Danışmanlık Hizmetleri | Qmobile",
      ogDescription:
        "Teknik danışmanlık, güvenlik danışmanlığı, güvenli iletişim çözümleri.",
      ogType: "website",
      ogImage: defaultOgImage,
      twitterCard: "summary_large_image",
      twitterTitle: "Danışmanlık Hizmetleri | Qmobile",
      twitterDescription:
        "Teknik danışmanlık, güvenlik danışmanlığı, güvenli iletişim çözümleri.",
      twitterImage: defaultOgImage,
    },
    de: {
      title: "Beratungsleistungen | Qmobile",
      description:
        "Technische Beratung, Sicherheitsberatung, sichere Kommunikationslösungen. Individuelle und Unternehmensdienstleistungen.",
      canonical: `${baseUrl}/services`,
      ogTitle: "Beratungsleistungen | Qmobile",
      ogDescription:
        "Technische Beratung, Sicherheitsberatung, sichere Kommunikationslösungen.",
      ogType: "website",
      ogImage: defaultOgImage,
      twitterCard: "summary_large_image",
      twitterTitle: "Beratungsleistungen | Qmobile",
      twitterDescription:
        "Technische Beratung, Sicherheitsberatung, sichere Kommunikationslösungen.",
      twitterImage: defaultOgImage,
    },
    en: {
      title: "Consulting Services | Qmobile",
      description:
        "Technical consulting, security consulting, secure communication solutions. Individual and corporate services.",
      canonical: `${baseUrl}/services`,
      ogTitle: "Consulting Services | Qmobile",
      ogDescription:
        "Technical consulting, security consulting, secure communication solutions.",
      ogType: "website",
      ogImage: defaultOgImage,
      twitterCard: "summary_large_image",
      twitterTitle: "Consulting Services | Qmobile",
      twitterDescription:
        "Technical consulting, security consulting, secure communication solutions.",
      twitterImage: defaultOgImage,
    },
  },
  faq: {
    tr: {
      title: "Sıkça Sorulan Sorular | Qmobile SSS",
      description:
        "Güvenli Pixel telefonlar, güvenlik odaklı özel işletim sistemi, Q-PWA mesajlaşma ve sipariş hakkında sık sorulan sorular.",
      canonical: `${baseUrl}/faq`,
      ogTitle: "Sıkça Sorulan Sorular | Qmobile SSS",
      ogDescription:
        "Güvenli Pixel telefonlar, güvenlik odaklı özel işletim sistemi, Q-PWA mesajlaşma hakkında SSS.",
      ogType: "website",
      ogImage: defaultOgImage,
      twitterCard: "summary_large_image",
      twitterTitle: "Sıkça Sorulan Sorular | Qmobile SSS",
      twitterDescription:
        "Güvenli Pixel telefonlar, güvenlik odaklı özel işletim sistemi hakkında SSS.",
      twitterImage: defaultOgImage,
    },
    de: {
      title: "Häufig gestellte Fragen | Qmobile FAQ",
      description:
        "FAQ zu sicheren Pixel-Telefonen, sicherheitsorientiertem speziellem Betriebssystem, Q-PWA Messaging und Bestellungen.",
      canonical: `${baseUrl}/faq`,
      ogTitle: "Häufig gestellte Fragen | Qmobile FAQ",
      ogDescription:
        "FAQ zu sicheren Pixel-Telefonen, sicherheitsorientiertem speziellem Betriebssystem.",
      ogType: "website",
      ogImage: defaultOgImage,
      twitterCard: "summary_large_image",
      twitterTitle: "Häufig gestellte Fragen | Qmobile FAQ",
      twitterDescription:
        "FAQ zu sicheren Pixel-Telefonen, sicherheitsorientiertem speziellem Betriebssystem.",
      twitterImage: defaultOgImage,
    },
    en: {
      title: "Frequently Asked Questions | Qmobile FAQ",
      description:
        "FAQ about secure Pixel phones, security-focused custom operating system, Q-PWA messaging and orders.",
      canonical: `${baseUrl}/faq`,
      ogTitle: "Frequently Asked Questions | Qmobile FAQ",
      ogDescription:
        "FAQ about secure Pixel phones, security-focused custom operating system.",
      ogType: "website",
      ogImage: defaultOgImage,
      twitterCard: "summary_large_image",
      twitterTitle: "Frequently Asked Questions | Qmobile FAQ",
      twitterDescription:
        "FAQ about secure Pixel phones, security-focused custom operating system.",
      twitterImage: defaultOgImage,
    },
  },
  about: {
    tr: {
      title: "Hakkımızda | Qmobile",
      description:
        "İsviçre merkezli güvenlik ve gizlilik teknolojisi uzmanları. 10+ yıllık deneyim, FADP/GDPR uyumlu.",
      canonical: `${baseUrl}/about`,
      ogTitle: "Hakkımızda | Qmobile",
      ogDescription:
        "İsviçre merkezli güvenlik ve gizlilik teknolojisi uzmanları. 10+ yıllık deneyim.",
      ogType: "website",
      ogImage: defaultOgImage,
      twitterCard: "summary_large_image",
      twitterTitle: "Hakkımızda | Qmobile",
      twitterDescription:
        "İsviçre merkezli güvenlik ve gizlilik teknolojisi uzmanları.",
      twitterImage: defaultOgImage,
    },
    de: {
      title: "Über uns | Qmobile",
      description:
        "Schweizer Experten für Sicherheits- und Privatsphäre-Technologie. 10+ Jahre Erfahrung, FADP/DSGVO-konform.",
      canonical: `${baseUrl}/about`,
      ogTitle: "Über uns | Qmobile",
      ogDescription:
        "Schweizer Experten für Sicherheits- und Privatsphäre-Technologie.",
      ogType: "website",
      ogImage: defaultOgImage,
      twitterCard: "summary_large_image",
      twitterTitle: "Über uns | Qmobile",
      twitterDescription:
        "Schweizer Experten für Sicherheits- und Privatsphäre-Technologie.",
      twitterImage: defaultOgImage,
    },
    en: {
      title: "About Us | Qmobile",
      description:
        "Swiss-based security and privacy technology experts. 10+ years of experience, FADP/GDPR compliant.",
      canonical: `${baseUrl}/about`,
      ogTitle: "About Us | Qmobile",
      ogDescription: "Swiss-based security and privacy technology experts.",
      ogType: "website",
      ogImage: defaultOgImage,
      twitterCard: "summary_large_image",
      twitterTitle: "About Us | Qmobile",
      twitterDescription:
        "Swiss-based security and privacy technology experts.",
      twitterImage: defaultOgImage,
    },
  },
  contact: {
    tr: {
      title: "İletişim | Qmobile",
      description:
        "Güvenli Pixel telefon siparişi ve danışmanlık hizmetleri için bize ulaşın. 24 saat içinde yanıt garantisi.",
      canonical: `${baseUrl}/contact`,
      ogTitle: "İletişim | Qmobile",
      ogDescription:
        "Güvenli Pixel telefon siparişi ve danışmanlık hizmetleri için bize ulaşın.",
      ogType: "website",
      ogImage: defaultOgImage,
      twitterCard: "summary_large_image",
      twitterTitle: "İletişim | Qmobile",
      twitterDescription:
        "Güvenli Pixel telefon siparişi ve danışmanlık hizmetleri için bize ulaşın.",
      twitterImage: defaultOgImage,
    },
    de: {
      title: "Kontakt | Qmobile",
      description:
        "Kontaktieren Sie uns für sichere Pixel-Telefonbestellungen und Beratungsleistungen. Antwortgarantie innerhalb von 24 Stunden.",
      canonical: `${baseUrl}/contact`,
      ogTitle: "Kontakt | Qmobile",
      ogDescription:
        "Kontaktieren Sie uns für sichere Pixel-Telefonbestellungen und Beratungsleistungen.",
      ogType: "website",
      ogImage: defaultOgImage,
      twitterCard: "summary_large_image",
      twitterTitle: "Kontakt | Qmobile",
      twitterDescription:
        "Kontaktieren Sie uns für sichere Pixel-Telefonbestellungen und Beratungsleistungen.",
      twitterImage: defaultOgImage,
    },
    en: {
      title: "Contact | Qmobile",
      description:
        "Contact us for secure Pixel phone orders and consulting services. 24-hour response guarantee.",
      canonical: `${baseUrl}/contact`,
      ogTitle: "Contact | Qmobile",
      ogDescription:
        "Contact us for secure Pixel phone orders and consulting services.",
      ogType: "website",
      ogImage: defaultOgImage,
      twitterCard: "summary_large_image",
      twitterTitle: "Contact | Qmobile",
      twitterDescription:
        "Contact us for secure Pixel phone orders and consulting services.",
      twitterImage: defaultOgImage,
    },
  },
  privacy: {
    tr: {
      title: "Gizlilik Politikası | Qmobile",
      description:
        "Qmobile gizlilik politikası. FADP ve GDPR uyumlu veri koruma. İsviçre merkezli, minimum veri toplama.",
      canonical: `${baseUrl}/privacy`,
      ogTitle: "Gizlilik Politikası | Qmobile",
      ogDescription:
        "Qmobile gizlilik politikası. FADP ve GDPR uyumlu veri koruma.",
      ogType: "website",
      ogImage: defaultOgImage,
      twitterCard: "summary_large_image",
      twitterTitle: "Gizlilik Politikası | Qmobile",
      twitterDescription:
        "Qmobile gizlilik politikası. FADP ve GDPR uyumlu veri koruma.",
      twitterImage: defaultOgImage,
    },
    de: {
      title: "Datenschutzerklärung | Qmobile",
      description:
        "Qmobile Datenschutzerklärung. FADP- und DSGVO-konformer Datenschutz.",
      canonical: `${baseUrl}/privacy`,
      ogTitle: "Datenschutzerklärung | Qmobile",
      ogDescription:
        "Qmobile Datenschutzerklärung. FADP- und DSGVO-konformer Datenschutz.",
      ogType: "website",
      ogImage: defaultOgImage,
      twitterCard: "summary_large_image",
      twitterTitle: "Datenschutzerklärung | Qmobile",
      twitterDescription:
        "Qmobile Datenschutzerklärung. FADP- und DSGVO-konformer Datenschutz.",
      twitterImage: defaultOgImage,
    },
    en: {
      title: "Privacy Policy | Qmobile",
      description:
        "Qmobile privacy policy. FADP and GDPR compliant data protection.",
      canonical: `${baseUrl}/privacy`,
      ogTitle: "Privacy Policy | Qmobile",
      ogDescription:
        "Qmobile privacy policy. FADP and GDPR compliant data protection.",
      ogType: "website",
      ogImage: defaultOgImage,
      twitterCard: "summary_large_image",
      twitterTitle: "Privacy Policy | Qmobile",
      twitterDescription:
        "Qmobile privacy policy. FADP and GDPR compliant data protection.",
      twitterImage: defaultOgImage,
    },
  },
  terms: {
    tr: {
      title: "Kullanım Şartları | Qmobile",
      description:
        "Qmobile kullanım şartları ve koşulları. Sipariş, kargo, iade ve destek politikaları.",
      canonical: `${baseUrl}/terms`,
      ogTitle: "Kullanım Şartları | Qmobile",
      ogDescription:
        "Qmobile kullanım şartları ve koşulları. Sipariş, kargo, iade.",
      ogType: "website",
      ogImage: defaultOgImage,
      twitterCard: "summary_large_image",
      twitterTitle: "Kullanım Şartları | Qmobile",
      twitterDescription:
        "Qmobile kullanım şartları ve koşulları. Sipariş, kargo, iade.",
      twitterImage: defaultOgImage,
    },
    de: {
      title: "Nutzungsbedingungen | Qmobile",
      description:
        "Qmobile Nutzungsbedingungen. Bestellung, Versand, Rückgabe und Support-Richtlinien.",
      canonical: `${baseUrl}/terms`,
      ogTitle: "Nutzungsbedingungen | Qmobile",
      ogDescription:
        "Qmobile Nutzungsbedingungen. Bestellung, Versand, Rückgabe.",
      ogType: "website",
      ogImage: defaultOgImage,
      twitterCard: "summary_large_image",
      twitterTitle: "Nutzungsbedingungen | Qmobile",
      twitterDescription:
        "Qmobile Nutzungsbedingungen. Bestellung, Versand, Rückgabe.",
      twitterImage: defaultOgImage,
    },
    en: {
      title: "Terms of Use | Qmobile",
      description:
        "Qmobile terms and conditions. Order, shipping, return and support policies.",
      canonical: `${baseUrl}/terms`,
      ogTitle: "Terms of Use | Qmobile",
      ogDescription: "Qmobile terms and conditions. Order, shipping, return.",
      ogType: "website",
      ogImage: defaultOgImage,
      twitterCard: "summary_large_image",
      twitterTitle: "Terms of Use | Qmobile",
      twitterDescription:
        "Qmobile terms and conditions. Order, shipping, return.",
      twitterImage: defaultOgImage,
    },
  },
  cookies: {
    tr: {
      title: "Çerez Politikası | Qmobile",
      description:
        "Qmobile çerez politikası. Minimum çerez kullanımı, sıfır izleme, gizlilik öncelikli.",
      canonical: `${baseUrl}/cookies`,
      ogTitle: "Çerez Politikası | Qmobile",
      ogDescription:
        "Qmobile çerez politikası. Minimum çerez kullanımı, sıfır izleme.",
      ogType: "website",
      ogImage: defaultOgImage,
      twitterCard: "summary_large_image",
      twitterTitle: "Çerez Politikası | Qmobile",
      twitterDescription:
        "Qmobile çerez politikası. Minimum çerez kullanımı, sıfır izleme.",
      twitterImage: defaultOgImage,
    },
    de: {
      title: "Cookie-Richtlinie | Qmobile",
      description:
        "Qmobile Cookie-Richtlinie. Minimale Cookie-Nutzung, Zero Tracking.",
      canonical: `${baseUrl}/cookies`,
      ogTitle: "Cookie-Richtlinie | Qmobile",
      ogDescription:
        "Qmobile Cookie-Richtlinie. Minimale Cookie-Nutzung, Zero Tracking.",
      ogType: "website",
      ogImage: defaultOgImage,
      twitterCard: "summary_large_image",
      twitterTitle: "Cookie-Richtlinie | Qmobile",
      twitterDescription:
        "Qmobile Cookie-Richtlinie. Minimale Cookie-Nutzung, Zero Tracking.",
      twitterImage: defaultOgImage,
    },
    en: {
      title: "Cookie Policy | Qmobile",
      description:
        "Qmobile cookie policy. Minimum cookie usage, zero tracking, privacy-first.",
      canonical: `${baseUrl}/cookies`,
      ogTitle: "Cookie Policy | Qmobile",
      ogDescription:
        "Qmobile cookie policy. Minimum cookie usage, zero tracking.",
      ogType: "website",
      ogImage: defaultOgImage,
      twitterCard: "summary_large_image",
      twitterTitle: "Cookie Policy | Qmobile",
      twitterDescription:
        "Qmobile cookie policy. Minimum cookie usage, zero tracking.",
      twitterImage: defaultOgImage,
    },
  },
  blog: {
    tr: {
      title: "Güvenlik Blogu | Qmobile",
      description:
        "Telefon, bilgisayar, tablet, mesajlaşma, güvenlik, kripto ve borsa konularında güvenlik odaklı içerikler. Qmobile güvenlik blogu.",
      canonical: `${baseUrl}/blog`,
      ogTitle: "Güvenlik Blogu | Qmobile",
      ogDescription:
        "Telefon, bilgisayar, tablet, mesajlaşma, güvenlik, kripto ve borsa konularında güvenlik odaklı içerikler.",
      ogType: "website",
      ogImage: defaultOgImage,
      twitterCard: "summary_large_image",
      twitterTitle: "Güvenlik Blogu | Qmobile",
      twitterDescription:
        "Telefon, bilgisayar, tablet, mesajlaşma, güvenlik, kripto ve borsa konularında güvenlik odaklı içerikler.",
      twitterImage: defaultOgImage,
    },
    de: {
      title: "Sicherheits-Blog | Qmobile",
      description:
        "Sicherheitsorientierte Inhalte zu Telefonen, Computern, Tablets, Messaging, Sicherheit, Krypto und Börse. Qmobile Sicherheits-Blog.",
      canonical: `${baseUrl}/blog`,
      ogTitle: "Sicherheits-Blog | Qmobile",
      ogDescription:
        "Sicherheitsorientierte Inhalte zu Telefonen, Computern, Tablets, Messaging, Sicherheit, Krypto und Börse.",
      ogType: "website",
      ogImage: defaultOgImage,
      twitterCard: "summary_large_image",
      twitterTitle: "Sicherheits-Blog | Qmobile",
      twitterDescription:
        "Sicherheitsorientierte Inhalte zu Telefonen, Computern, Tablets, Messaging, Sicherheit, Krypto und Börse.",
      twitterImage: defaultOgImage,
    },
    en: {
      title: "Security Blog | Qmobile",
      description:
        "Security-focused content on phones, computers, tablets, messaging, security, crypto and stock market. Qmobile security blog.",
      canonical: `${baseUrl}/blog`,
      ogTitle: "Security Blog | Qmobile",
      ogDescription:
        "Security-focused content on phones, computers, tablets, messaging, security, crypto and stock market.",
      ogType: "website",
      ogImage: defaultOgImage,
      twitterCard: "summary_large_image",
      twitterTitle: "Security Blog | Qmobile",
      twitterDescription:
        "Security-focused content on phones, computers, tablets, messaging, security, crypto and stock market.",
      twitterImage: defaultOgImage,
    },
  },
  blogPost: {
    tr: {
      title: "Blog Yazısı | Qmobile Güvenlik Blogu",
      description:
        "Qmobile güvenlik blogundan detaylı bir yazı. Telefon, bilgisayar, tablet, mesajlaşma, güvenlik, kripto ve borsa konularında uzman içerik.",
      canonical: `${baseUrl}/blog`,
      ogTitle: "Blog Yazısı | Qmobile Güvenlik Blogu",
      ogDescription:
        "Qmobile güvenlik blogundan detaylı bir yazı. Telefon, bilgisayar, tablet, mesajlaşma, güvenlik, kripto ve borsa konularında uzman içerik.",
      ogType: "article",
      ogImage: defaultOgImage,
      twitterCard: "summary_large_image",
      twitterTitle: "Blog Yazısı | Qmobile Güvenlik Blogu",
      twitterDescription:
        "Qmobile güvenlik blogundan detaylı bir yazı. Telefon, bilgisayar, tablet, mesajlaşma, güvenlik, kripto ve borsa konularında uzman içerik.",
      twitterImage: defaultOgImage,
    },
    de: {
      title: "Blog-Beitrag | Qmobile Sicherheits-Blog",
      description:
        "Detaillierter Beitrag aus dem Qmobile Sicherheits-Blog. Experteninhalte zu Telefonen, Computern, Tablets, Messaging, Sicherheit, Krypto und Börse.",
      canonical: `${baseUrl}/blog`,
      ogTitle: "Blog-Beitrag | Qmobile Sicherheits-Blog",
      ogDescription:
        "Detaillierter Beitrag aus dem Qmobile Sicherheits-Blog. Experteninhalte zu Telefonen, Computern, Tablets, Messaging, Sicherheit, Krypto und Börse.",
      ogType: "article",
      ogImage: defaultOgImage,
      twitterCard: "summary_large_image",
      twitterTitle: "Blog-Beitrag | Qmobile Sicherheits-Blog",
      twitterDescription:
        "Detaillierter Beitrag aus dem Qmobile Sicherheits-Blog. Experteninhalte zu Telefonen, Computern, Tablets, Messaging, Sicherheit, Krypto und Börse.",
      twitterImage: defaultOgImage,
    },
    en: {
      title: "Blog Post | Qmobile Security Blog",
      description:
        "Detailed post from the Qmobile security blog. Expert content on phones, computers, tablets, messaging, security, crypto and stock market.",
      canonical: `${baseUrl}/blog`,
      ogTitle: "Blog Post | Qmobile Security Blog",
      ogDescription:
        "Detailed post from the Qmobile security blog. Expert content on phones, computers, tablets, messaging, security, crypto and stock market.",
      ogType: "article",
      ogImage: defaultOgImage,
      twitterCard: "summary_large_image",
      twitterTitle: "Blog Post | Qmobile Security Blog",
      twitterDescription:
        "Detailed post from the Qmobile security blog. Expert content on phones, computers, tablets, messaging, security, crypto and stock market.",
      twitterImage: defaultOgImage,
    },
  },
};

export function getSeoMeta(page: string, lang: Lang): SeoMeta {
  const pageData = seoData[page];
  if (!pageData) {
    return seoData.home[lang];
  }
  return pageData[lang] ?? pageData.en;
}
