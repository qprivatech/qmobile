import type { Lang } from "@/lib/i18n";

export interface BlogPost {
  slug: string;
  category: string;
  title: Record<Lang, string>;
  excerpt: Record<Lang, string>;
  content: Record<Lang, string[]>;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "telefon-guvenligi-101",
    category: "Telefon",
    title: {
      tr: "Telefon Güvenliği 101: Cihazınızı Nasıl Korursunuz?",
      de: "Telefonsicherheit 101: Wie schützen Sie Ihr Gerät?",
      en: "Phone Security 101: How to Protect Your Device?",
    },
    excerpt: {
      tr: "Akıllı telefonunuzun güvenliğini artırmak için uygulayabileceğiniz temel adımları ve en iyi uygulamaları keşfedin.",
      de: "Entdecken Sie die grundlegenden Schritte und Best Practices, um die Sicherheit Ihres Smartphones zu erhöhen.",
      en: "Discover the basic steps and best practices to enhance your smartphone's security.",
    },
    content: {
      tr: [
        "Akıllı telefonlar hayatımızın ayrılmaz bir parçası haline geldi. Bankacılık işlemlerinden özel mesajlara kadar her şeyi telefonlarımız üzerinden yapıyoruz. Bu nedenle telefon güvenliği hayati önem taşıyor.",
        "İlk adım olarak güçlü bir ekran kilidi kullanın. PIN, desen veya biyometrik kimlik doğrulama tercih edin. Ayrıca iki faktörlü kimlik doğrulamayı (2FA) tüm hesaplarınızda aktif hale getirin.",
        "Uygulama izinlerini düzenli olarak gözden geçirin. Konum, mikrofon ve kamera erişimlerini yalnızca güvendiğiniz uygulamalara verin. Güncellemeleri zamanında yükleyerek güvenlik açıklarını kapatın.",
      ],
      de: [
        "Smartphones sind zu einem unverzichtbaren Teil unseres Lebens geworden. Wir erledigen alles über unsere Telefone, von Bankgeschäften bis hin zu privaten Nachrichten. Daher ist die Telefonsicherheit von entscheidender Bedeutung.",
        "Verwenden Sie als ersten Schritt eine starke Bildschirmsperre. Bevorzugen Sie PIN, Muster oder biometrische Authentifizierung. Aktivieren Sie außerdem die Zwei-Faktor-Authentifizierung (2FA) für alle Ihre Konten.",
        "Überprüfen Sie App-Berechtigungen regelmäßig. Geben Sie Standort-, Mikrofon- und Kamerazugriff nur vertrauenswürdigen Apps. Installieren Sie Updates rechtzeitig, um Sicherheitslücken zu schließen.",
      ],
      en: [
        "Smartphones have become an integral part of our lives. We do everything on our phones, from banking to private messages. Therefore, phone security is of vital importance.",
        "As a first step, use a strong screen lock. Prefer PIN, pattern, or biometric authentication. Also, enable two-factor authentication (2FA) on all your accounts.",
        "Regularly review app permissions. Give location, microphone, and camera access only to trusted apps. Install updates promptly to close security vulnerabilities.",
      ],
    },
    image: "blog/phone-security.svg",
  },
  {
    slug: "bilgisayar-koruma-rehberi",
    category: "Bilgisayar",
    title: {
      tr: "Bilgisayar Koruma Rehberi: Kapsamlı Güvenlik",
      de: "Computer-Schutzleitfaden: Umfassende Sicherheit",
      en: "Computer Protection Guide: Comprehensive Security",
    },
    excerpt: {
      tr: "Bilgisayarınızı kötü amaçlı yazılımlardan, fidye yazılımlarından ve yetkisiz erişimden korumanın en etkili yöntemlerini öğrenin.",
      de: "Lernen Sie die effektivsten Methoden kennen, um Ihren Computer vor Malware, Ransomware und unbefugtem Zugriff zu schützen.",
      en: "Learn the most effective methods to protect your computer from malware, ransomware, and unauthorized access.",
    },
    content: {
      tr: [
        "Bilgisayar güvenliği, hem kişisel hem de kurumsal kullanıcılar için kritik öneme sahiptir. Güçlü bir antivirüs yazılımı kullanmak temel bir gerekliliktir, ancak yeterli değildir.",
        "Güvenlik duvarınızı (firewall) her zaman aktif tutun. Ağ trafiğini izleyin ve şüpheli bağlantıları engelleyin. Düzenli yedeklemeler yaparak veri kaybı riskini minimize edin.",
        "E-posta eklerine ve indirilen dosyalara dikkat edin. Bilinmeyen kaynaklardan gelen dosyaları açmayın. Sistem ve yazılım güncellemelerini ihmal etmeyin.",
      ],
      de: [
        "Die Computersicherheit ist sowohl für private als auch für Unternehmensnutzer von entscheidender Bedeutung. Die Verwendung einer starken Antivirensoftware ist eine grundlegende Notwendigkeit, aber nicht ausreichend.",
        "Halten Sie Ihre Firewall immer aktiv. Überwachen Sie den Netzwerkverkehr und blockieren Sie verdächtige Verbindungen. Minimieren Sie das Risiko eines Datenverlusts durch regelmäßige Backups.",
        "Seien Sie vorsichtig mit E-Mail-Anhängen und heruntergeladenen Dateien. Öffnen Sie keine Dateien aus unbekannten Quellen. Vernachlässigen Sie keine System- und Software-Updates.",
      ],
      en: [
        "Computer security is critical for both personal and enterprise users. Using strong antivirus software is a basic necessity, but not sufficient.",
        "Keep your firewall always active. Monitor network traffic and block suspicious connections. Minimize data loss risk with regular backups.",
        "Be careful with email attachments and downloaded files. Do not open files from unknown sources. Do not neglect system and software updates.",
      ],
    },
    image: "blog/computer-protection.svg",
  },
  {
    slug: "tablet-gizlilik-ayarlari",
    category: "Tablet",
    title: {
      tr: "Tablet Gizlilik Ayarları: Tam Rehber",
      de: "Tablet-Datenschutzeinstellungen: Vollständiger Leitfaden",
      en: "Tablet Privacy Settings: Complete Guide",
    },
    excerpt: {
      tr: "Tablet cihazınızın gizlilik ayarlarını optimize ederek verilerinizi koruyun ve izlenme riskini azaltın.",
      de: "Schützen Sie Ihre Daten und reduzieren Sie das Tracking-Risiko, indem Sie die Datenschutzeinstellungen Ihres Tablets optimieren.",
      en: "Protect your data and reduce tracking risk by optimizing your tablet's privacy settings.",
    },
    content: {
      tr: [
        "Tabletler, telefonlar kadar kişisel veri içerir ancak genellikle güvenlik ayarları göz ardı edilir. İlk olarak reklam kimliğini sıfırlayın ve kişiselleştirilmiş reklamları devre dışı bırakın.",
        "Konum hizmetlerini yalnızca gerekli uygulamalar için sınırlayın. Arka planda uygulama yenilemesini kapatın. Tarayıcıda gizli modu ve izleyici engelleyicileri kullanın.",
        "Bulut yedeklemelerini şifreleyin ve hassas verileri yerel olarak saklayın. Uygulama izinlerini düzenli olarak denetleyin ve kullanmadığınız uygulamaları kaldırın.",
      ],
      de: [
        "Tablets enthalten genauso viele persönliche Daten wie Telefone, aber Sicherheitseinstellungen werden oft vernachlässigt. Setzen Sie zuerst die Werbe-ID zurück und deaktivieren Sie personalisierte Werbung.",
        "Beschränken Sie Standortdienste nur auf notwendige Apps. Deaktivieren Sie die Hintergrundaktualisierung von Apps. Verwenden Sie im Browser den Inkognito-Modus und Tracker-Blocker.",
        "Verschlüsseln Sie Cloud-Backups und speichern Sie sensible Daten lokal. Überprüfen Sie App-Berechtigungen regelmäßig und entfernen Sie ungenutzte Apps.",
      ],
      en: [
        "Tablets contain as much personal data as phones, but security settings are often neglected. First, reset your advertising ID and disable personalized ads.",
        "Limit location services to only necessary apps. Turn off background app refresh. Use incognito mode and tracker blockers in your browser.",
        "Encrypt cloud backups and store sensitive data locally. Regularly audit app permissions and remove unused apps.",
      ],
    },
    image: "blog/tablet-privacy.svg",
  },
  {
    slug: "mesajlasma-uygulamalari-karsilastirmasi",
    category: "Mesajlasma",
    title: {
      tr: "Güvenli Mesajlaşma Uygulamaları Karşılaştırması",
      de: "Vergleich sicherer Messaging-Apps",
      en: "Secure Messaging Apps Comparison",
    },
    excerpt: {
      tr: "Signal, WhatsApp, Telegram ve iMessage arasındaki güvenlik farklarını ve hangi uygulamanın size en uygun olduğunu keşfedin.",
      de: "Entdecken Sie die Sicherheitsunterschiede zwischen Signal, WhatsApp, Telegram und iMessage und welche App am besten zu Ihnen passt.",
      en: "Discover the security differences between Signal, WhatsApp, Telegram, and iMessage and which app suits you best.",
    },
    content: {
      tr: [
        "Günlük mesajlaşmalarımızda binlerce kişisel bilgi paylaşıyoruz. Bu nedenle mesajlaşma uygulamanızın güvenliği kritik öneme sahiptir. Güvenli şifreleme (E2EE) temel bir gerekliliktir.",
        "Signal, açık kaynak kodlu ve kâr amacı gütmeyen yapısıyla en güvenilir seçenektir. Meta'nın sahibi olduğu WhatsApp ise veri paylaşımı konusunda endişeler yaratıyor.",
        "Telegram'ın varsayılan şifrelemesi bulunmaz, gizli sohbetler dışında. iMessage Apple ekosisteminde güvenlidir ancak yedeklemeler şifrelenmemiş olabilir. Seçiminizi veri gizliliğine göre yapın.",
      ],
      de: [
        "Wir teilen täglich Tausende persönlicher Informationen in unseren Nachrichten. Daher ist die Sicherheit Ihrer Messaging-App von entscheidender Bedeutung. Sichere Verschlüsselung (E2EE) ist eine grundlegende Notwendigkeit.",
        "Signal ist aufgrund seiner Open-Source- und gemeinnützigen Struktur die vertrauenswürdigste Option. WhatsApp, das Meta gehört, wirft Bedenken hinsichtlich des Datenaustauschs auf.",
        "Telegram hat standardmäßig keine Verschlüsselung, außer bei geheimen Chats. iMessage ist im Apple-Ökosystem sicher, aber Backups können unverschlüsselt sein. Treffen Sie Ihre Wahl basierend auf Datenschutz.",
      ],
      en: [
        "We share thousands of personal pieces of information in our daily messages. Therefore, your messaging app's security is critical. Secure encryption (E2EE) is a basic necessity.",
        "Signal is the most trustworthy option due to its open-source and non-profit structure. WhatsApp, owned by Meta, raises concerns about data sharing.",
        "Telegram has no default encryption except for secret chats. iMessage is secure within the Apple ecosystem, but backups may be unencrypted. Make your choice based on data privacy.",
      ],
    },
    image: "blog/messaging-apps-compare.svg",
  },
  {
    slug: "sifreleme-nedir",
    category: "Guvenlik",
    title: {
      tr: "Şifreleme Nedir ve Neden Önemlidir?",
      de: "Was ist Verschlüsselung und warum ist sie wichtig?",
      en: "What is Encryption and Why is it Important?",
    },
    excerpt: {
      tr: "Verilerinizi koruyan şifreleme teknolojisinin temellerini, türlerini ve günlük hayattaki uygulamalarını öğrenin.",
      de: "Lernen Sie die Grundlagen, Arten und alltäglichen Anwendungen der Verschlüsselungstechnologie kennen, die Ihre Daten schützt.",
      en: "Learn the basics, types, and everyday applications of encryption technology that protects your data.",
    },
    content: {
      tr: [
        "Şifreleme, verilerinizi yetkisiz kişilerin okuyamayacağı bir formata dönüştürme işlemidir. Antik çağlardan beri kullanılan bu teknoloji, dijital çağda hayati önem taşıyor.",
        "Modern şifreleme yöntemleri, verilerin güvenliğini sağlayan en yaygın araçlardır. Güvenli şifreleme (E2EE), mesajların yalnızca alıcı ve gönderici tarafından okunmasını sağlar.",
        "HTTPS, VPN'ler ve şifreli mesajlaşma uygulamaları günlük hayatta şifrelemenin en bilinen örnekleridir. Güçlü şifreleme, dijital gizliliğinizin temel taşıdır.",
      ],
      de: [
        "Verschlüsselung ist der Prozess der Umwandlung Ihrer Daten in ein Format, das unbefugte Personen nicht lesen können. Diese seit der Antike verwendete Technologie ist im digitalen Zeitalter von entscheidender Bedeutung.",
        "Moderne Verschlüsselungsmethoden sind die gebräuchlichsten Werkzeuge, um die Sicherheit Ihrer Daten zu gewährleisten. Sichere Verschlüsselung (E2EE) stellt sicher, dass Nachrichten nur vom Empfänger und Absender gelesen werden können.",
        "HTTPS, VPNs und verschlüsselte Messaging-Apps sind die bekanntesten Beispiele für Verschlüsselung im Alltag. Starke Verschlüsselung ist der Grundstein Ihrer digitalen Privatsphäre.",
      ],
      en: [
        "Encryption is the process of converting your data into a format that unauthorized people cannot read. This technology, used since ancient times, is vital in the digital age.",
        "Modern encryption methods are the most common tools to ensure the security of your data. Secure encryption (E2EE) ensures messages can only be read by the recipient and sender.",
        "HTTPS, VPNs, and encrypted messaging apps are the most well-known examples of encryption in everyday life. Strong encryption is the cornerstone of your digital privacy.",
      ],
    },
    image: "blog/encryption.svg",
  },
  {
    slug: "kripto-cuzdan-guvenligi",
    category: "Kripto",
    title: {
      tr: "Kripto Cüzdan Güvenliği: Soğuk ve Sıcak Cüzdanlar",
      de: "Krypto-Wallet-Sicherheit: Cold und Hot Wallets",
      en: "Crypto Wallet Security: Cold and Hot Wallets",
    },
    excerpt: {
      tr: "Kripto varlıklarınızı güvenle saklamak için soğuk cüzdan, sıcak cüzdan ve donanım cüzdanı arasındaki farkları öğrenin.",
      de: "Lernen Sie die Unterschiede zwischen Cold Wallet, Hot Wallet und Hardware Wallet kennen, um Ihre Krypto-Vermögenswerte sicher aufzubewahren.",
      en: "Learn the differences between cold wallets, hot wallets, and hardware wallets to securely store your crypto assets.",
    },
    content: {
      tr: [
        "Kripto para dünyasında güvenlik en önemli konudur. Özel anahtarlarınızı (private key) korumak, varlıklarınızın güvenliğini doğrudan etkiler.",
        "Sıcak cüzdanlar (hot wallets) internete bağlıdır ve günlük işlemler için uygundur ancak hack riski taşır. Soğuk cüzdanlar (cold wallets) internetten bağımsızdır ve uzun vadeli saklama için idealdir.",
        "Donanım cüzdanları (Ledger, Trezor) en güvenli seçenektir. Kurtarma kelimelerinizi (seed phrase) asla dijital ortamda saklamayın ve yedeklerini güvenli bir yerde bulundurun.",
      ],
      de: [
        "In der Welt der Kryptowährungen ist Sicherheit das wichtigste Thema. Der Schutz Ihrer privaten Schlüssel beeinflusst direkt die Sicherheit Ihrer Vermögenswerte.",
        "Hot Wallets sind mit dem Internet verbunden und für tägliche Transaktionen geeignet, bergen aber ein Hack-Risiko. Cold Wallets sind internetunabhängig und ideal für die langfristige Aufbewahrung.",
        "Hardware-Wallets (Ledger, Trezor) sind die sicherste Option. Bewahren Sie Ihre Wiederherstellungsphrase (Seed Phrase) niemals digital auf und halten Sie Backups an einem sicheren Ort.",
      ],
      en: [
        "In the world of cryptocurrency, security is the most important topic. Protecting your private keys directly affects the security of your assets.",
        "Hot wallets are connected to the internet and suitable for daily transactions but carry hack risk. Cold wallets are offline and ideal for long-term storage.",
        "Hardware wallets (Ledger, Trezor) are the most secure option. Never store your recovery phrase (seed phrase) digitally and keep backups in a secure place.",
      ],
    },
    image: "blog/crypto-wallet.svg",
  },
  {
    slug: "borsa-uygulamalari-guvenligi",
    category: "Borsa",
    title: {
      tr: "Borsa Uygulamaları Güvenliği: Yatırımlarınızı Koruyun",
      de: "Börsen-App-Sicherheit: Schützen Sie Ihre Investitionen",
      en: "Stock Exchange App Security: Protect Your Investments",
    },
    excerpt: {
      tr: "Borsa ve kripto para borsası uygulamalarında hesap güvenliğinizi artırmanın en etkili yöntemlerini keşfedin.",
      de: "Entdecken Sie die effektivsten Methoden, um die Sicherheit Ihres Kontos bei Börsen- und Krypto-Börsen-Apps zu erhöhen.",
      en: "Discover the most effective methods to increase your account security on stock and crypto exchange apps.",
    },
    content: {
      tr: [
        "Borsa uygulamaları, finansal verilerinizin ve yatırımlarınızın merkezidir. Güçlü bir şifre ve iki faktörlü kimlik doğrulama (2FA) kullanmak zorunludur.",
        "Kimlik avı (phishing) saldırılarına karşı dikkatli olun. Resmi uygulamaları yalnızca güvenilir kaynaklardan indirin. Giriş bildirimlerini aktif tutun.",
        "API anahtarlarınızı güvenli saklayın ve gereksiz izinleri kaldırın. Düzenli olarak hesap aktivitelerinizi kontrol edin ve şüpheli işlemleri hemen raporlayın.",
      ],
      de: [
        "Börsen-Apps sind das Zentrum Ihrer Finanzdaten und Investitionen. Die Verwendung eines starken Passworts und der Zwei-Faktor-Authentifizierung (2FA) ist zwingend erforderlich.",
        "Seien Sie vorsichtig vor Phishing-Angriffen. Laden Sie offizielle Apps nur aus vertrauenswürdigen Quellen herunter. Halten Sie Anmeldebenachrichtigungen aktiv.",
        "Bewahren Sie Ihre API-Schlüssel sicher auf und entfernen Sie unnötige Berechtigungen. Überprüfen Sie regelmäßig Ihre Kontenaktivitäten und melden Sie verdächtige Transaktionen sofort.",
      ],
      en: [
        "Exchange apps are the center of your financial data and investments. Using a strong password and two-factor authentication (2FA) is mandatory.",
        "Be careful of phishing attacks. Download official apps only from trusted sources. Keep login notifications active.",
        "Store your API keys securely and remove unnecessary permissions. Regularly check your account activities and report suspicious transactions immediately.",
      ],
    },
    image: "blog/stock-security.svg",
  },
  {
    slug: "sahte-baz-istasyonlari",
    category: "Telefon",
    title: {
      tr: "Sahte Baz İstasyonları (IMSI Catcher) Tehdidi",
      de: "Gefälschte Basisstationen (IMSI Catcher) Bedrohung",
      en: "Fake Base Stations (IMSI Catcher) Threat",
    },
    excerpt: {
      tr: "IMSI catcher cihazlarının nasıl çalıştığını ve telefonunuzu bu tehditten nasıl koruyacağınızı öğrenin.",
      de: "Erfahren Sie, wie IMSI-Catcher-Geräte funktionieren und wie Sie Ihr Telefon vor dieser Bedrohung schützen können.",
      en: "Learn how IMSI catcher devices work and how to protect your phone from this threat.",
    },
    content: {
      tr: [
        "IMSI catcher'lar, sahte baz istasyonları olarak çalışarak telefonunuzu kandırıp bağlanmaya zorlar. Bu sayede aramalarınızı ve mesajlarınızı dinleyebilir, konumunuzu tespit edebilirler.",
        "Bu cihazlar, telefonunuzu 2G/3G ağlarına düşürerek şifrelemeyi zayıflatabilir. Modern akıllı telefonlarda 2G bağlantısını devre dışı bırakmak önemli bir koruma sağlar.",
        "Güvenlik odaklı işletim sistemleri, sahte baz istasyonlarına karşı ek koruma katmanları sunar. Ayrıca güvenli şifreleme (E2EE) kullanan mesajlaşma uygulamaları kullanmak veri güvenliğinizi artırır.",
      ],
      de: [
        "IMSI-Catcher arbeiten als gefälschte Basisstationen und zwingen Ihr Telefon, sich mit ihnen zu verbinden. Auf diese Weise können sie Ihre Anrufe und Nachrichten abhören und Ihren Standort bestimmen.",
        "Diese Geräte können Ihr Telefon auf 2G/3G-Netzwerke herabstufen und die Verschlüsselung schwächen. Das Deaktivieren der 2G-Verbindung auf modernen Smartphones bietet wichtigen Schutz.",
        "Sicherheitsorientierte Betriebssysteme bieten zusätzliche Schutzschichten gegen gefälschte Basisstationen. Die Verwendung von Messaging-Apps mit sicherer Verschlüsselung (E2EE) erhöht außerdem Ihre Datensicherheit.",
      ],
      en: [
        "IMSI catchers work as fake base stations and force your phone to connect to them. This way, they can listen to your calls and messages and determine your location.",
        "These devices can downgrade your phone to 2G/3G networks and weaken encryption. Disabling 2G connection on modern smartphones provides important protection.",
        "Security-focused operating systems offer additional layers of protection against fake base stations. Also, using messaging apps with secure encryption (E2EE) increases your data security.",
      ],
    },
    image: "blog/fake-base-stations.svg",
  },
  {
    slug: "adli-cihazlardan-korunma",
    category: "Guvenlik",
    title: {
      tr: "Adli Cihazlardan ve Veri Çıkarma Tekniklerinden Korunma",
      de: "Schutz vor forensischen Geräten und Datenextraktionstechniken",
      en: "Protection from Forensic Devices and Data Extraction Techniques",
    },
    excerpt: {
      tr: "Cellebrite ve benzeri adli cihazların telefonunuzdan veri çıkarma yöntemlerini ve karşı önlemleri keşfedin.",
      de: "Entdecken Sie die Methoden, mit denen forensische Geräte wie Cellebrite Daten aus Ihrem Telefon extrahieren, und Gegenmaßnahmen.",
      en: "Discover the methods used by forensic devices like Cellebrite to extract data from your phone and countermeasures.",
    },
    content: {
      tr: [
        "Adli cihazlar, kilitli telefonlardan bile veri çıkarabilen özel donanımlardır. Cellebrite, GrayKey ve benzeri cihazlar, güvenlik açıklarını ve bootrom exploitlerini kullanır.",
        "Güvenlik odaklı işletim sistemleri, bu cihazlara karşı dirençli yapılandırılmıştır. USB veri erişimini kısıtlamak, ADB'yi devre dışı bırakmak ve OEM kilidini kapatmak temel önlemlerdir.",
        "Telefonunuzun fiziksel güvenliğini sağlayın. Güçlü bir PIN veya şifre kullanın. Cihazınız ele geçirilirse uzaktan silme özelliğini aktif tutun.",
      ],
      de: [
        "Forensische Geräte sind Spezialhardware, die selbst aus gesperrten Telefonen Daten extrahieren kann. Geräte wie Cellebrite und GrayKey nutzen Sicherheitslücken und Bootrom-Exploits.",
        "Sicherheitsorientierte Betriebssysteme sind so konfiguriert, dass sie gegen solche Geräte resistent sind. Die Einschränkung des USB-Datenzugriffs, die Deaktivierung von ADB und das Schließen des OEM-Unlocks sind grundlegende Maßnahmen.",
        "Sorgen Sie für die physische Sicherheit Ihres Telefons. Verwenden Sie eine starke PIN oder ein Passwort. Halten Sie die Fernlöschfunktion aktiv, falls Ihr Gerät in die Hände anderer gerät.",
      ],
      en: [
        "Forensic devices are specialized hardware that can extract data even from locked phones. Devices like Cellebrite and GrayKey use security vulnerabilities and bootrom exploits.",
        "Security-focused operating systems are configured to be resistant to such devices. Restricting USB data access, disabling ADB, and closing OEM unlock are basic measures.",
        "Ensure the physical security of your phone. Use a strong PIN or password. Keep the remote wipe feature active in case your device falls into the wrong hands.",
      ],
    },
    image: "blog/forensic-protection.svg",
  },
  {
    slug: "uygulama-casuslugunu-onleme",
    category: "Guvenlik",
    title: {
      tr: "Uygulama Casusluğunu Önleme Rehberi",
      de: "Leitfaden zur Verhinderung von App-Spionage",
      en: "Guide to Preventing App Espionage",
    },
    excerpt: {
      tr: "Telefonunuzdaki uygulamaların sizi nasıl izlediğini tespit edin ve casus uygulamalara karşı korunun.",
      de: "Erfahren Sie, wie Apps auf Ihrem Telefon Sie verfolgen, und schützen Sie sich vor Spionage-Apps.",
      en: "Learn how apps on your phone track you and protect yourself from spy apps.",
    },
    content: {
      tr: [
        "Modern uygulamalar, kullanıcı davranışlarını, konumlarını ve hatta mikrofon/kamera erişimlerini izlemek için kapsamlı veri toplama teknikleri kullanır.",
        "Uygulama izinlerini düzenli olarak denetleyin. Arka planda çalışan uygulamaları sınırlayın. Ağ trafiğini izlemek için güvenlik duvarı uygulamaları kullanın.",
        "Güvenlik odaklı işletim sistemleri, uygulama kuması (sandboxing) ve ağ kısıtlamaları ile her uygulamanın yalnızca gerekli verilere erişmesini sağlar. Bilinmeyen kaynaklardan uygulama yüklemeyin.",
      ],
      de: [
        "Moderne Apps verwenden umfassende Datenerfassungstechniken, um Benutzerverhalten, Standorte und sogar Mikrofon-/Kamerazugriffe zu verfolgen.",
        "Überprüfen Sie App-Berechtigungen regelmäßig. Beschränken Sie im Hintergrund laufende Apps. Verwenden Sie Firewall-Apps, um den Netzwerkverkehr zu überwachen.",
        "Sicherheitsorientierte Betriebssysteme stellen durch App-Sandboxing und Netzwerkeinschränkungen sicher, dass jede App nur auf notwendige Daten zugreifen kann. Installieren Sie keine Apps aus unbekannten Quellen.",
      ],
      en: [
        "Modern apps use extensive data collection techniques to track user behavior, locations, and even microphone/camera access.",
        "Regularly audit app permissions. Limit background running apps. Use firewall apps to monitor network traffic.",
        "Security-focused operating systems ensure that each app only accesses necessary data through app sandboxing and network restrictions. Do not install apps from unknown sources.",
      ],
    },
    image: "blog/app-espionage.svg",
  },
  // ===== 8 NEW POSTS =====
  {
    slug: "guvenli-mesajlasma-nedir",
    category: "Guvenlik",
    title: {
      tr: "Güvenli Mesajlaşma Nedir?",
      de: "Was ist sichere Nachrichtenübermittlung?",
      en: "What is Secure Messaging?",
    },
    excerpt: {
      tr: "Güvenli şifreleme (E2EE) nedir? Neden önemlidir? Güvenli mesajlaşmanın temellerini basit bir dille öğrenin.",
      de: "Was ist sichere Verschlüsselung (E2EE)? Warum ist sie wichtig? Lernen Sie die Grundlagen sicherer Nachrichtenübermittlung in einfacher Sprache.",
      en: "What is secure encryption (E2EE)? Why does it matter? Learn the basics of secure messaging in simple terms.",
    },
    content: {
      tr: [
        "Güvenli mesajlaşma, gönderdiğiniz mesajların yalnızca sizin ve karşı tarafın okuyabildiği bir iletişim şeklidir. Bunu sağlayan teknolojiye güvenli şifreleme (E2EE) denir. Bu şifreleme sayesinde mesajlarınız yoldayken bile kimse okuyamaz.",
        "Günlük hayatta birçok mesajlaşma uygulaması var. Ancak hepsi aynı güvenliği sunmuyor. Bazı uygulamalar mesajlarınızı sunucularında saklıyor ve bu veriler üçüncü taraflarla paylaşılabiliyor. Güvenli şifreleme (E2EE) kullanan uygulamalarda ise mesajlar sadece sizin telefonunuzda ve alıcının telefonunda çözülebilir.",
        "Güvenli mesajlaşma seçerken dikkat etmeniz gerekenler: güvenli şifreleme (E2EE) olup olmadığı, uygulamanın açık kaynak kodlu olup olmadığı ve veri toplama politikalarıdır. Bu konularda en şeffaf ve güvenilir seçenekleri tercih edin.",
      ],
      de: [
        "Sichere Nachrichtenübermittlung bedeutet, dass nur Sie und Ihr Gesprächspartner die gesendeten Nachrichten lesen können. Die Technologie, die dies ermöglicht, heißt sichere Verschlüsselung (E2EE). Dank dieser Verschlüsselung kann niemand Ihre Nachrichten unterwegs lesen.",
        "Es gibt viele Messaging-Apps im Alltag. Aber nicht alle bieten die gleiche Sicherheit. Einige Apps speichern Ihre Nachrichten auf ihren Servern, und diese Daten können mit Dritten geteilt werden. Bei Apps mit sicherer Verschlüsselung (E2EE) können Nachrichten nur auf Ihrem Telefon und dem Telefon des Empfängers entschlüsselt werden.",
        "Bei der Auswahl einer sicheren Messaging-App sollten Sie auf Folgendes achten: sichere Verschlüsselung (E2EE), Open-Source-Code und Datensammelrichtlinien. Wählen Sie die transparentesten und vertrauenswürdigsten Optionen in diesen Bereichen.",
      ],
      en: [
        "Secure messaging is a form of communication where only you and the recipient can read the messages you send. The technology that makes this possible is called secure encryption (E2EE). Thanks to this encryption, no one can read your messages while they are in transit.",
        "There are many messaging apps in daily life. But not all offer the same security. Some apps store your messages on their servers, and this data can be shared with third parties. With secure encryption (E2EE), messages can only be decrypted on your phone and the recipient's phone.",
        "When choosing a secure messaging app, pay attention to: secure encryption (E2EE), whether the app is open source, and data collection policies. Choose the most transparent and trustworthy options in these areas.",
      ],
    },
    image: "blog/secure-messaging.svg",
  },
  {
    slug: "mesajlasma-uygulamalari-karsilastirma",
    category: "Mesajlasma",
    title: {
      tr: "Popüler Mesajlaşma Uygulamaları Karşılaştırması",
      de: "Vergleich beliebter Messaging-Apps",
      en: "Comparison of Popular Messaging Apps",
    },
    excerpt: {
      tr: "WhatsApp, Telegram, Signal ve iMessage'i basit bir dille karşılaştırın. Hangisi daha güvenli?",
      de: "Vergleichen Sie WhatsApp, Telegram, Signal und iMessage in einfacher Sprache. Welches ist sicherer?",
      en: "Compare WhatsApp, Telegram, Signal, and iMessage in simple terms. Which one is more secure?",
    },
    content: {
      tr: [
        "Günlük hayatta en çok kullanılan mesajlaşma uygulamalarını basit bir dille karşılaştıralım. Her uygulamanın güçlü ve zayıf yönlerini anlamak, doğru seçimi yapmanıza yardımcı olur.",
        "WhatsApp: Dünyada en çok kullanılan uygulama. Güvenli şifreleme (E2EE) sunar ancak Meta (Facebook) tarafından sahiplenilmiştir. Bu, verilerinizin reklam amaçlı kullanılabileceği anlamına gelir. Ayrıca yedeklemeler bulutta şifrelenmemiş olabilir.",
        "Telegram: Hızlı ve kullanıcı dostu. Ancak varsayılan şifreleme yoktur. Sadece 'gizli sohbetler' güvenli şifreleme (E2EE) ile şifrelidir. Normal sohbetler sunucularda saklanır. Bu, güvenlik açısından bir eksikliktir.",
        "Signal: Açık kaynak kodlu ve kâr amacı gütmeyen bir yapı. En güçlü güvenli şifreleme (E2EE) seçeneğini sunar. Meta verisi bile toplamaz. Ancak kullanıcı sayısı diğerlerine göre daha azdır.",
        "iMessage: Apple cihazları arasında güvenlidir. Ancak Android kullanıcılarıyla mesajlaşırken SMS'e düşer ve bu durumda şifreleme yoktur. Yedeklemeler iCloud'da şifrelenmemiş olabilir.",
        "Özetle, güvenli mesajlaşma için dikkat etmeniz gerekenler: güvenli şifreleme (E2EE), açık kaynak kod, sıfır veri toplama ve güçlü gizlilik politikası. Bu ölçütleri karşılayan uygulamaları tercih edin.",
      ],
      de: [
        "Vergleichen wir die am häufigsten verwendeten Messaging-Apps im Alltag in einfacher Sprache. Das Verständnis der Stärken und Schwächen jeder App hilft Ihnen, die richtige Wahl zu treffen.",
        "WhatsApp: Die am häufigsten genutzte App weltweit. Bietet sichere Verschlüsselung (E2EE), gehört aber Meta (Facebook). Das bedeutet, dass Ihre Daten für Werbezwecke genutzt werden können. Außerdem können Backups in der Cloud unverschlüsselt sein.",
        "Telegram: Schnell und benutzerfreundlich. Aber es gibt keine Standardverschlüsselung. Nur 'geheime Chats' sind mit sicherer Verschlüsselung (E2EE) geschützt. Normale Chats werden auf Servern gespeichert. Das ist ein Sicherheitsmangel.",
        "Signal: Open-Source und gemeinnützig. Bietet die stärkste sichere Verschlüsselung (E2EE). Sammelt nicht einmal Metadaten. Die Nutzerzahl ist jedoch geringer als bei anderen.",
        "iMessage: Sicher zwischen Apple-Geräten. Beim Messaging mit Android-Benutzern fällt es jedoch auf SMS zurück, wobei keine Verschlüsselung vorhanden ist. Backups können in iCloud unverschlüsselt sein.",
        "Zusammenfassend sollten Sie für sicheres Messaging auf Folgendes achten: sichere Verschlüsselung (E2EE), Open-Source-Code, keine Datensammlung und eine starke Datenschutzrichtlinie. Wählen Sie Apps, die diese Kriterien erfüllen.",
      ],
      en: [
        "Let's compare the most commonly used messaging apps in daily life in simple terms. Understanding the strengths and weaknesses of each app helps you make the right choice.",
        "WhatsApp: The most used app worldwide. Offers secure encryption (E2EE) but is owned by Meta (Facebook). This means your data can be used for advertising purposes. Also, backups in the cloud may be unencrypted.",
        "Telegram: Fast and user-friendly. But there is no default encryption. Only 'secret chats' are encrypted with secure encryption (E2EE). Normal chats are stored on servers. This is a security shortcoming.",
        "Signal: Open source and non-profit. Offers the strongest secure encryption (E2EE). Doesn't even collect metadata. However, the user base is smaller compared to others.",
        "iMessage: Secure between Apple devices. But when messaging with Android users, it falls back to SMS, which has no encryption. Backups may be unencrypted in iCloud.",
        "In summary, for secure messaging, pay attention to: secure encryption (E2EE), open source code, zero data collection, and a strong privacy policy. Choose apps that meet these criteria.",
      ],
    },
    image: "blog/messaging-comparison.svg",
  },
  {
    slug: "blockchain-nedir",
    category: "Kripto",
    title: {
      tr: "Blockchain Nedir?",
      de: "Was ist Blockchain?",
      en: "What is Blockchain?",
    },
    excerpt: {
      tr: "Blockchain'i basit bir dille anlayın. Dijital bir defter gibi çalışan bu teknolojinin temellerini keşfedin.",
      de: "Verstehen Sie Blockchain in einfacher Sprache. Entdecken Sie die Grundlagen dieser Technologie, die wie ein digitales Buch funktioniert.",
      en: "Understand blockchain in simple terms. Discover the basics of this technology that works like a digital notebook.",
    },
    content: {
      tr: [
        "Blockchain, herkesin görebildiği ama kimsenin silemediği dijital bir defterdir. Hayal edin: Bir sınıfta herkesin önünde duran büyük bir defter var. Herkes bu deftere yazı yazabilir, ama bir kez yazıldıktan sonra silinemez.",
        "Bu teknolojinin en büyük özelliği merkeziyetsiz olmasıdır. Yani tek bir kişi veya kurum kontrol etmez. Binlerce bilgisayar aynı defteri tutar ve her yeni bilgi eklendiğinde tüm bilgisayarlar güncellenir. Bu sayede hile yapmak neredeyse imkansız hale gelir.",
        "Blockchain'in en bilinen kullanım alanı kripto paralardır. Bitcoin ve Ethereum gibi dijital paralar bu teknoloji üzerinde çalışır. Ancak blockchain sadece para için değil, oylama sistemleri, tedarik zinciri takibi ve dijital kimlik doğrulama gibi birçok alanda kullanılır.",
        "Basit bir benzetme yaparsak: Blockchain, bir apartmanda yaşayan komşuların ortak kullandığı duvar panosuna benzer. Herkes not bırakabilir, herkes notları görebilir, ama bir kez asıldıktan sonra notu değiştirmek için tüm apartmanın onayını almanız gerekir.",
      ],
      de: [
        "Blockchain ist ein digitales Buch, das jeder sehen, aber niemand löschen kann. Stellen Sie sich vor: Ein großes Buch steht in einem Klassenzimmer vor jedem. Jeder kann hineinschreiben, aber einmal geschrieben, kann es nicht gelöscht werden.",
        "Das größte Merkmal dieser Technologie ist ihre Dezentralisierung. Das bedeutet, dass keine einzelne Person oder Institution die Kontrolle hat. Tausende Computer halten das gleiche Buch, und wenn neue Informationen hinzugefügt werden, aktualisieren sich alle Computer. Das macht Betrug fast unmöglich.",
        "Der bekannteste Anwendungsbereich von Blockchain ist Kryptowährung. Digitale Währungen wie Bitcoin und Ethereum arbeiten auf dieser Technologie. Aber Blockchain wird nicht nur für Geld verwendet, sondern auch für Wahlsysteme, Lieferkettenverfolgung und digitale Identitätsprüfung.",
        "Als einfache Analogie: Blockchain ist wie eine Pinnwand in einem Apartmentgebäude, die von den Nachbarn gemeinsam genutzt wird. Jeder kann Notizen hinterlassen, jeder kann die Notizen sehen, aber sobald eine angebracht ist, müssen Sie die Zustimmung des gesamten Gebäudes erhalten, um sie zu ändern.",
      ],
      en: [
        "Blockchain is a digital notebook that everyone can see but no one can erase. Imagine: A large notebook stands in front of everyone in a classroom. Everyone can write in it, but once written, it cannot be erased.",
        "The biggest feature of this technology is that it is decentralized. This means no single person or institution controls it. Thousands of computers hold the same notebook, and when new information is added, all computers update. This makes cheating almost impossible.",
        "The most well-known use of blockchain is cryptocurrency. Digital currencies like Bitcoin and Ethereum run on this technology. But blockchain is used not only for money but also for voting systems, supply chain tracking, and digital identity verification.",
        "As a simple analogy: Blockchain is like a bulletin board in an apartment building shared by neighbors. Everyone can leave notes, everyone can see the notes, but once posted, you need the approval of the entire building to change it.",
      ],
    },
    image: "blog/blockchain.svg",
  },
  {
    slug: "bitcoin-nedir-nasil-calisir",
    category: "Kripto",
    title: {
      tr: "Bitcoin Nedir ve Nasıl Çalışır?",
      de: "Was ist Bitcoin und wie funktioniert es?",
      en: "What is Bitcoin and How Does it Work?",
    },
    excerpt: {
      tr: "Bitcoin'i basit bir dille öğrenin. Merkez bankası olmayan dijital para nasıl işler?",
      de: "Lernen Sie Bitcoin in einfacher Sprache. Wie funktioniert digitales Geld ohne Zentralbank?",
      en: "Learn Bitcoin in simple terms. How does digital money without a central bank work?",
    },
    content: {
      tr: [
        "Bitcoin, 2009 yılında bir kişi veya grup tarafından yaratılan dijital bir para birimidir. En önemli özelliği merkez bankası veya hükümet gibi bir otoriteye bağlı olmamasıdır. Bu, Bitcoin'i tamamen bağımsız ve küresel bir para birimi yapar.",
        "Bitcoin nasıl çalışır? Her Bitcoin işlemi, blockchain adı verilen dijital deftere kaydedilir. Bu defter, dünya genelinde binlerce bilgisayar tarafından tutulur. Bir işlem yapıldığında, tüm bu bilgisayarlar işlemi doğrular ve deftere ekler.",
        "Madencilik (mining), Bitcoin sisteminin güvenliğini sağlayan süreçtir. Madenciler, karmaşık matematik problemleri çözerek yeni Bitcoin üretir ve işlemleri onaylar. Bu süreç, sistemin güvenli kalmasını sağlar. Basit bir benzetme: Madenciler, apartmanın kapısını kilitleyen ve yeni anahtarlar üreten görevlilere benzer.",
        "Bitcoin ile alışveriş yapmak için dijital bir cüzdan kullanırsınız. Her cüzdanın benzersiz bir adresi vardır. Bu adres, banka hesap numarası gibi düşünebilirsiniz. Bitcoin göndermek istediğinizde, alıcının adresine transfer yaparsınız ve işlem dakikalar içinde gerçekleşir.",
      ],
      de: [
        "Bitcoin ist eine digitale Währung, die 2009 von einer Person oder Gruppe geschaffen wurde. Das wichtigste Merkmal ist, dass sie nicht an eine Zentralbank oder Regierung gebunden ist. Das macht Bitcoin zu einer völlig unabhängigen und globalen Währung.",
        "Wie funktioniert Bitcoin? Jede Bitcoin-Transaktion wird in ein digitales Buch namens Blockchain aufgezeichnet. Dieses Buch wird von Tausenden Computern weltweit geführt. Wenn eine Transaktion durchgeführt wird, überprüfen alle diese Computer die Transaktion und fügen sie dem Buch hinzu.",
        "Mining ist der Prozess, der die Sicherheit des Bitcoin-Systems gewährleistet. Miner lösen komplexe mathematische Probleme, um neue Bitcoin zu erzeugen und Transaktionen zu bestätigen. Dieser Prozess stellt sicher, dass das System sicher bleibt. Als einfache Analogie: Miner sind wie Angestellte, die die Tür eines Gebäudes verschließen und neue Schlüssel herstellen.",
        "Um mit Bitcoin einzukaufen, verwenden Sie eine digitale Wallet. Jede Wallet hat eine einzigartige Adresse. Diese Adresse können Sie sich wie eine Bankkontonummer vorstellen. Wenn Sie Bitcoin senden möchten, überweisen Sie an die Adresse des Empfängers, und die Transaktion wird innerhalb von Minuten abgeschlossen.",
      ],
      en: [
        "Bitcoin is a digital currency created in 2009 by a person or group. The most important feature is that it is not tied to a central bank or government. This makes Bitcoin a completely independent and global currency.",
        "How does Bitcoin work? Every Bitcoin transaction is recorded in a digital notebook called the blockchain. This notebook is maintained by thousands of computers worldwide. When a transaction is made, all these computers verify the transaction and add it to the notebook.",
        "Mining is the process that ensures the security of the Bitcoin system. Miners solve complex math problems to create new Bitcoin and confirm transactions. This process ensures the system remains secure. As a simple analogy: Miners are like staff who lock the door of a building and produce new keys.",
        "To shop with Bitcoin, you use a digital wallet. Each wallet has a unique address. You can think of this address like a bank account number. When you want to send Bitcoin, you transfer to the recipient's address, and the transaction is completed within minutes.",
      ],
    },
    image: "blog/bitcoin.svg",
  },
  {
    slug: "internet-nedir-nasil-calisir",
    category: "Bilgisayar",
    title: {
      tr: "İnternet Nedir ve Nasıl Çalışır?",
      de: "Was ist das Internet und wie funktioniert es?",
      en: "What is the Internet and How Does it Work?",
    },
    excerpt: {
      tr: "İnterneti basit bir dille anlayın. Bilgisayarların nasıl konuştuğunu ve web sitelerinin nasıl çalıştığını öğrenin.",
      de: "Verstehen Sie das Internet in einfacher Sprache. Lernen Sie, wie Computer miteinander sprechen und Websites funktionieren.",
      en: "Understand the internet in simple terms. Learn how computers talk to each other and how websites work.",
    },
    content: {
      tr: [
        "İnternet, dünya genelindeki milyarlarca bilgisayarın birbirine bağlandığı devasa bir ağdır. Bu ağ sayesinde insanlar mesajlaşabilir, video izleyebilir, alışveriş yapabilir ve bilgi paylaşabilir. İnternet, modern hayatın vazgeçilmez bir parçası haline geldi.",
        "İnternet nasıl çalışır? Basit bir benzetme kullanalım: Posta sistemini düşünün. Bir mektup yazdığınızda, adresi üzerine yazarsınız ve posta kutusuna atarsınız. Posta görevlileri mektubu adresine kadar taşır. İnternet de benzer şekilde çalışır. Bilgiler, 'paketler' adı verilen küçük parçalara bölünür ve adreslerine gönderilir.",
        "DNS (Domain Name System), internetin telefon rehberi gibidir. Bir web sitesinin adını (örneğin google.com) yazdığınızda, DNS bu adı bir IP adresine çevirir. IP adresi, her bilgisayarın benzersiz kimlik numarasıdır. Bu sayede bilgisayarlar birbirini bulur.",
        "Web siteleri, sunucu adı verilen özel bilgisayarlarda saklanır. Bir siteye girdiğinizde, tarayıcınız o sunucuya bağlanır ve siteyi size gösterir. Bu süreç saniyeler içinde gerçekleşir. İnternetin gücü, bu basit ama etkili sistemde yatar.",
      ],
      de: [
        "Das Internet ist ein riesiges Netzwerk, das Milliarden von Computern weltweit miteinander verbindet. Durch dieses Netzwerk können Menschen Nachrichten senden, Videos ansehen, einkaufen und Informationen teilen. Das Internet ist zu einem unverzichtbaren Teil des modernen Lebens geworden.",
        "Wie funktioniert das Internet? Verwenden wir eine einfache Analogie: Denken Sie an das Postsystem. Wenn Sie einen Brief schreiben, schreiben Sie die Adresse darauf und werfen ihn in den Briefkasten. Postangestellte bringen den Brief an die Adresse. Das Internet funktioniert ähnlich. Informationen werden in kleine Teile namens 'Pakete' aufgeteilt und an ihre Adressen gesendet.",
        "DNS (Domain Name System) ist wie das Telefonbuch des Internets. Wenn Sie den Namen einer Website eingeben (z.B. google.com), wandelt DNS diesen Namen in eine IP-Adresse um. Die IP-Adresse ist die eindeutige Identifikationsnummer jedes Computers. So finden Computer einander.",
        "Websites werden auf speziellen Computern namens Servern gespeichert. Wenn Sie eine Website besuchen, verbindet sich Ihr Browser mit diesem Server und zeigt Ihnen die Website. Dieser Vorgang dauert nur Sekunden. Die Kraft des Internets liegt in diesem einfachen aber effektiven System.",
      ],
      en: [
        "The internet is a huge network connecting billions of computers worldwide. Through this network, people can message, watch videos, shop, and share information. The internet has become an indispensable part of modern life.",
        "How does the internet work? Let's use a simple analogy: Think of the postal system. When you write a letter, you put the address on it and drop it in the mailbox. Postal workers carry the letter to its address. The internet works similarly. Information is divided into small pieces called 'packets' and sent to their addresses.",
        "DNS (Domain Name System) is like the phone book of the internet. When you type a website name (e.g., google.com), DNS converts that name into an IP address. The IP address is the unique identification number of every computer. This is how computers find each other.",
        "Websites are stored on special computers called servers. When you visit a site, your browser connects to that server and shows you the site. This process happens within seconds. The power of the internet lies in this simple but effective system.",
      ],
    },
    image: "blog/internet.svg",
  },
  {
    slug: "telefon-sms-nasil-calisir",
    category: "Telefon",
    title: {
      tr: "Telefon Görüşmeleri ve SMS Nasıl Çalışır?",
      de: "Wie funktionieren Telefonanrufe und SMS?",
      en: "How Do Phone Calls and SMS Work?",
    },
    excerpt: {
      tr: "Telefonunuzun arkasındaki teknolojiyi basit bir dille keşfedin. Ses ve mesajlar nasıl iletilir?",
      de: "Entdecken Sie die Technologie hinter Ihrem Telefon in einfacher Sprache. Wie werden Sprache und Nachrichten übertragen?",
      en: "Discover the technology behind your phone in simple terms. How are voice and messages transmitted?",
    },
    content: {
      tr: [
        "Telefon görüşmeleri ve SMS, günlük hayatta en çok kullandığımız iletişim yöntemleridir. Peki bu teknoloji nasıl çalışır? Sesiniz ve mesajlarınız nasıl bir yerden diğerine ulaşır?",
        "Bir telefon görüşmesi yaptığınızda, sesiniz önce dijital sinyallere dönüştürülür. Bu sinyaller, en yakın baz istasyonuna (kule) radyo dalgalarıyla gönderilir. Baz istasyonu, sinyalleri telefon şirketinin anahtarlama merkezine iletir. Oradan da aradığınız kişinin telefonuna ulaşır.",
        "SMS (Short Message Service), kısa mesajların iletilme yöntemidir. Bir mesaj gönderdiğinizde, mesaj metin olarak baz istasyonuna gider ve oradan alıcının telefonuna iletilir. SMS'ler, telefon görüşmelerinden daha az veri kullanır ve daha basit bir sistemle çalışır.",
        "Modern telefonlar 4G ve 5G teknolojilerini kullanır. Bu teknolojiler, ses ve veriyi daha hızlı ve kaliteli iletir. VoIP (Voice over IP) teknolojisi ise internet üzerinden ses iletimini sağlar. WhatsApp ve benzeri uygulamalar bu teknolojiyi kullanır.",
      ],
      de: [
        "Telefonanrufe und SMS sind die Kommunikationsmethoden, die wir im Alltag am häufigsten nutzen. Aber wie funktioniert diese Technologie? Wie gelangen Ihre Stimme und Nachrichten von einem Ort zum anderen?",
        "Wenn Sie einen Telefonanruf tätigen, wird Ihre Stimme zuerst in digitale Signale umgewandelt. Diese Signale werden per Funkwellen zur nächsten Basisstation (Sendemast) gesendet. Die Basisstation leitet die Signale zur Vermittlungsstelle des Telefonunternehmens weiter. Von dort gelangen sie zum Telefon der angerufenen Person.",
        "SMS (Short Message Service) ist die Methode zur Übermittlung kurzer Nachrichten. Wenn Sie eine Nachricht senden, geht der Text zur Basisstation und wird von dort zum Telefon des Empfängers weitergeleitet. SMS verwenden weniger Daten als Telefonanrufe und arbeiten mit einem einfacheren System.",
        "Moderne Telefone nutzen 4G- und 5G-Technologien. Diese Technologien übertragen Sprache und Daten schneller und in besserer Qualität. VoIP (Voice over IP) ermöglicht die Sprachübertragung über das Internet. Apps wie WhatsApp nutzen diese Technologie.",
      ],
      en: [
        "Phone calls and SMS are the communication methods we use most in daily life. But how does this technology work? How do your voice and messages get from one place to another?",
        "When you make a phone call, your voice is first converted into digital signals. These signals are sent by radio waves to the nearest base station (tower). The base station forwards the signals to the telephone company's switching center. From there, they reach the phone of the person you are calling.",
        "SMS (Short Message Service) is the method for sending short messages. When you send a message, the text goes to the base station and is forwarded from there to the recipient's phone. SMS use less data than phone calls and work with a simpler system.",
        "Modern phones use 4G and 5G technologies. These technologies transmit voice and data faster and in better quality. VoIP (Voice over IP) enables voice transmission over the internet. Apps like WhatsApp use this technology.",
      ],
    },
    image: "blog/phone-sms.svg",
  },
  {
    slug: "qprivate-guvenli-mesajlasma",
    category: "Mesajlasma",
    title: {
      tr: "Güvenli Mesajlaşmanın Öncüsü",
      de: "Pionier der sicheren Nachrichtenübermittlung",
      en: "Pioneer of Secure Messaging",
    },
    excerpt: {
      tr: "Güvenli mesajlaşma dünyasındaki en iyi gizlilik seçeneklerini ve güvenli şifreleme (E2EE) teknolojisinin önemini öğrenin.",
      de: "Erfahren Sie, welche Optionen die beste Datenschutzwahl in der Welt der sicheren Nachrichtenübermittlung sind und warum sichere Verschlüsselung (E2EE) wichtig ist.",
      en: "Learn about the best privacy options in the world of secure messaging and why secure encryption (E2EE) matters.",
    },
    content: {
      tr: [
        "Güvenli mesajlaşma alanında çığır açan uygulamalar, gizliliği ve kullanıcı güvenliğini en üst düzeye çıkarmak için tasarlanmıştır. Peki bu uygulamalar diğerlerinden ne yapar?",
        "En önemli özellik, güvenli şifreleme (E2EE) teknolojisini en güçlü şekilde kullanmaktır. Bu sayede mesajlarınız sadece sizin ve karşı tarafın cihazında okunabilir. Sunucular, hükümetler veya hackerlar mesaj içeriğine erişemez.",
        "Diğer popüler uygulamalarla karşılaştırıldığında, en şeffaf ve en az veri toplayan uygulamalar tercih edilmelidir. Meta'nın sahibi olduğu WhatsApp kullanıcı verilerini paylaşırken, Telegram varsayılan şifreleme sunmaz. En güvenilir seçenekler ise hiçbir kullanıcı verisini toplamaz ve satmaz.",
        "Güvenli mesajlaşma uygulamaları sadece mesajlaşma değil, aynı zamanda güvenli dosya paylaşımı, sesli aramalar ve grup sohbetleri sunar. Tüm bu özellikler, en yüksek güvenlik standartlarıyla korunur.",
      ],
      de: [
        "Bahnbrechende Apps im Bereich der sicheren Nachrichtenübermittlung wurden entwickelt, um Privatsphäre und Benutzersicherheit auf höchstem Niveau zu gewährleisten. Was macht diese Apps anders als andere?",
        "Das wichtigste Merkmal ist die Verwendung der sicheren Verschlüsselung (E2EE) in der stärksten Form. Dadurch können Ihre Nachrichten nur auf Ihrem Gerät und dem Gerät des Empfängers gelesen werden. Server, Regierungen oder Hacker können nicht auf den Nachrichteninhalt zugreifen.",
        "Im Vergleich zu anderen beliebten Apps sollten die transparentesten und datensparsamsten Apps bevorzugt werden. Während WhatsApp, das Meta gehört, Benutzerdaten teilt, bietet Telegram keine Standardverschlüsselung. Die vertrauenswürdigsten Optionen sammeln und verkaufen keine Benutzerdaten.",
        "Sichere Messaging-Apps bieten nicht nur Messaging, sondern auch sicheren Dateiaustausch, Sprachanrufe und Gruppenchats. Alle diese Funktionen sind durch die höchsten Sicherheitsstandards geschützt.",
      ],
      en: [
        "Groundbreaking apps in the field of secure messaging are designed to maximize privacy and user security. What makes these apps different from others?",
        "The most important feature is the use of secure encryption (E2EE) technology in the strongest form. This means your messages can only be read on your device and the recipient's device. Servers, governments, or hackers cannot access the message content.",
        "Compared to other popular apps, the most transparent and least data-collecting apps should be preferred. While WhatsApp, owned by Meta, shares user data, Telegram offers no default encryption. The most trustworthy options collect and sell no user data.",
        "Secure messaging apps offer not only messaging but also secure file sharing, voice calls, and group chats. All these features are protected by the highest security standards.",
      ],
    },
    image: "blog/qprivate-secure.svg",
  },
  {
    slug: "qprivate-iletisimden-fazlasi",
    category: "Mesajlasma",
    title: {
      tr: "Güvenli İletişimden Fazlası",
      de: "Mehr als nur sichere Kommunikation",
      en: "More Than Secure Communication",
    },
    excerpt: {
      tr: "Güvenli mesajlaşma sadece mesajlaşma değil. Güvenli dosya paylaşımı, sesli aramalar ve daha fazlasını keşfedin.",
      de: "Sicheres Messaging ist nicht nur Messaging. Entdecken Sie sicheren Dateiaustausch, Sprachanrufe und mehr.",
      en: "Secure messaging is not just messaging. Discover secure file sharing, voice calls, and more.",
    },
    content: {
      tr: [
        "Güvenli mesajlaşma uygulamaları sadece bir mesajlaşma aracı değil, aynı zamanda dijital hayatınızı güvenle yönetmenizi sağlayan bir platformdur. Bu uygulamalar iletişimin ötesinde birçok özellik sunar.",
        "Güvenli dosya paylaşımı, bu uygulamaların en güçlü özelliklerinden biridir. Fotoğraflar, videolar, belgeler ve diğer dosyaları güvenli şifreleme (E2EE) ile gönderebilirsiniz. Dosyalarınız yoldayken veya sunucularda saklanırken bile güvendedir.",
        "Sesli aramalar ve görüntülü aramalar da en yüksek güvenlik standartlarıyla sunulur. Aramalarınız dinlenemez ve kaydedilemez. Grup sohbetleri ise aynı güvenlik seviyesiyle çalışır. Aile, arkadaş ve iş gruplarınızı güvenle yönetebilirsiniz.",
        "Bu uygulamaların temel felsefesi, gizliliği her şeyin üzerinde tutmaktır. Hiçbir reklam, hiçbir veri satışı, hiçbir gizli takip yoktur. Dijital özgürlüğünüzü korurken size modern iletişim olanakları sunar.",
      ],
      de: [
        "Sichere Messaging-Apps sind nicht nur ein Messaging-Werkzeug, sondern auch eine Plattform, die es Ihnen ermöglicht, Ihr digitales Leben sicher zu verwalten. Diese Apps bieten viele Funktionen jenseits der Kommunikation.",
        "Sicherer Dateiaustausch ist eine der stärksten Funktionen dieser Apps. Sie können Fotos, Videos, Dokumente und andere Dateien mit sicherer Verschlüsselung (E2EE) senden. Ihre Dateien sind sicher, während sie unterwegs sind oder auf Servern gespeichert werden.",
        "Sprach- und Videoanrufe werden auch mit den höchsten Sicherheitsstandards angeboten. Ihre Anrufe können nicht abgehört oder aufgezeichnet werden. Gruppenchats funktionieren mit dem gleichen Sicherheitsniveau. Sie können Familien-, Freundes- und Arbeitsgruppen sicher verwalten.",
        "Die Grundphilosophie dieser Apps ist es, die Privatsphäre über alles zu stellen. Keine Werbung, kein Datenverkauf, keine heimliche Verfolgung. Sie bieten Ihnen moderne Kommunikationsmöglichkeiten und schützen gleichzeitig Ihre digitale Freiheit.",
      ],
      en: [
        "Secure messaging apps are not just a messaging tool but also a platform that allows you to manage your digital life securely. These apps offer many features beyond communication.",
        "Secure file sharing is one of the strongest features of these apps. You can send photos, videos, documents, and other files with secure encryption (E2EE). Your files are safe while in transit or stored on servers.",
        "Voice and video calls are also offered with the highest security standards. Your calls cannot be listened to or recorded. Group chats work with the same security level. You can safely manage family, friend, and work groups.",
        "The core philosophy of these apps is to put privacy above everything. No ads, no data sales, no secret tracking. They offer you modern communication capabilities while protecting your digital freedom.",
      ],
    },
    image: "blog/qprivate-more.svg",
  },
];

export const blogCategories = [
  { key: "all", label: { tr: "Tümü", de: "Alle", en: "All" } },
  {
    key: "Telefon",
    label: { tr: "Telefon", de: "Telefon", en: "Phone" },
  },
  {
    key: "Bilgisayar",
    label: { tr: "Bilgisayar", de: "Computer", en: "Computer" },
  },
  {
    key: "Tablet",
    label: { tr: "Tablet", de: "Tablet", en: "Tablet" },
  },
  {
    key: "Mesajlasma",
    label: { tr: "Mesajlaşma", de: "Messaging", en: "Messaging" },
  },
  {
    key: "Guvenlik",
    label: { tr: "Güvenlik", de: "Sicherheit", en: "Security" },
  },
  {
    key: "Kripto",
    label: { tr: "Kripto", de: "Krypto", en: "Crypto" },
  },
  {
    key: "Borsa",
    label: { tr: "Borsa", de: "Börse", en: "Stock Exchange" },
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}
