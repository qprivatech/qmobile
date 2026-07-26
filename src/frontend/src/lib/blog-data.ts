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
    slug: "sifre-yonetimi-guclu-parola",
    category: "Guvenlik",
    title: {
      tr: "Şifre Yönetimi ve Güçlü Parola Oluşturma",
      de: "Passwortverwaltung und Erstellung starker Passwörter",
      en: "Password Management and Creating Strong Passwords",
    },
    excerpt: {
      tr: "Güçlü parola kriterlerini, parola yöneticisi kullanımını, iki faktörlü kimlik doğrulamayı ve parola sıfırlamayı detaylı pratik bir rehberle öğrenin.",
      de: "Erfahren Sie Kriterien für starke Passwörter, Passwort-Manager-Nutzung, Zwei-Faktor-Authentifizierung und Passwort-Zurücksetzung mit einem detaillierten praktischen Leitfaden.",
      en: "Learn strong password criteria, password manager usage, two-factor authentication, and password reset with a detailed practical guide.",
    },
    content: {
      tr: [
        "Şifreler, dijital hayatınızın anahtarıdır. Ancak çoğu kullanıcı zayıf şifreler seçer ve birden fazla hesapta aynı şifreyi kullanır. Bu rehber, güçlü parola oluşturmanın ve şifrelerinizi güvenle yönetmenin temel yollarını açıklar.",
        "Güçlü parola kriterleri: En az 12 karakter uzunluğunda olmalı, büyük ve küçük harfler, rakamlar ve özel karakterler içermelidir. Sözlük kelimeleri, isimler, doğum tarihleri ve '123456' gibi dizilerden kaçının. Rastgele ifadeler (passphrase) daha güvenlidir: örneğin 'Mavi-Kedi-Dağ-42!' gibi dört kelime birleştirilmiş bir ifade.",
        "Parola yöneticisi kullanımı: Bir parola yöneticisi (Bitwarden, 1Password, KeePass), tüm şifrelerinizi güvenli bir 'kasa'da saklar. Her hesap için benzersiz, rastgele şifreler oluşturur. Sadece bir ana parola hatırlamanız gerekir. Bitwarden açık kaynak kodludur ve denetlenmiştir — bu, güvenilirliği için önemlidir.",
        "İki faktörlü kimlik doğrulama (2FA): Şifreniz ele geçirilse bile hesabınızı korur. SMS tabanlı 2FA yerine uygulama tabanlı (TOTP) veya donanım anahtarı (YubiKey) kullanın. SMS, SIM takası saldırılarına karşı savunmasızdır. Google Authenticator, Authy veya açık kaynak kodlu Aegis gibi uygulamalar daha güvenlidir.",
        "Parola sıfırlama: Hesap kurtarma seçeneklerini güncelleyin — kurtarma e-postası ve telefon numarası sizin kontrolünüzde olmalı. Güvenlik sorularını güçlü ve tahmin edilemez yapın (örneğin 'Doğduğunuz şehir' sorusuna 'Mor Fil' gibi rastgele bir yanıt verin ve bunu parola yöneticinizde saklayın).",
        "Yaygın hatalar: Aynı şifreyi birden fazla hesapta kullanmak (bir hesap sızdırılırsa tüm hesaplarınız risk altındadır), şifreleri e-posta veya not uygulamasında saklamak, ve 'şifremi hatırla' özelliğini her yerde kullanmak. Bu hatalar, hesap güvenliğinizi ciddi şekilde zayıflatır.",
        "QMOBILE BASEL bağlantısı: QMOBILE, BASEL merkezli gizlilik yaklaşımıyla kullanıcılarına İsviçre gizlilik standartlarına uygun parola yöneticilerini önerir. Bitwarden ve Proton Pass, İsviçre gizlilik yasalarına uygun, açık kaynak kodlu seçeneklerdir. QMOBILE Pixel cihazları, bu araçlarla sorunsuz çalışır.",
        "Pratik adımlar: Önce bir parola yöneticisi seçin ve ana parolanızı güçlü yapın. Mevcut tüm hesaplarınızın şifrelerini benzersiz ve rastgele şifrelerle değiştirin. Tüm hesaplarda 2FA'yı etkinleştirin. Şüpheli etkinlik için hesaplarınızı düzenli olarak kontrol edin. 'Have I Been Pwned' sitesini kullanarak e-posta adreslerinizin veri ihlallerine karışıp karışmadığını kontrol edin.",
        "İleri düzey: Donanım anahtarı (YubiKey) kullanın — bu, en yüksek güvenlik seviyesidir. FIDO2/WebAuthn desteği olan hesaplarda donanım anahtarı, phishing saldırılarına karşı tam koruma sağlar. Birden fazla donanım anahtarı bulundurun (birincil ve yedek) ve bunları güvenli yerlerde saklayın. Bu, en kritik hesaplarınız (e-posta, bankacılık) için idealdir.",
      ],
      de: [
        "Passwörter sind der Schlüssel zu Ihrem digitalen Leben. Doch die meisten Nutzer wählen schwache Passwörter und verwenden dasselbe Passwort für mehrere Konten. Dieser Leitfaden erklärt die grundlegenden Wege, starke Passwörter zu erstellen und Ihre Passwörter sicher zu verwalten.",
        "Kriterien für starke Passwörter: Mindestens 12 Zeichen lang, Groß- und Kleinbuchstaben, Zahlen und Sonderzeichen. Vermeiden Sie Wörterbuchwörter, Namen, Geburtsdaten und Folgen wie '123456'. Zufällige Passphrasen sind sicherer: beispielsweise 'Blau-Katze-Berg-42!' als vier Wörter kombiniert.",
        "Passwort-Manager-Nutzung: Ein Passwort-Manager (Bitwarden, 1Password, KeePass) speichert alle Ihre Passwörter in einem sicheren 'Tresor'. Er erstellt einzigartige, zufällige Passwörter für jedes Konto. Sie müssen sich nur ein Master-Passwort merken. Bitwarden ist Open-Source und geprüft — wichtig für Vertrauenswürdigkeit.",
        "Zwei-Faktor-Authentifizierung (2FA): Schützt Ihr Konto, selbst wenn Ihr Passwort kompromittiert wird. Verwenden Sie anstelle der SMS-basierten 2FA App-basierte (TOTP) oder Hardware-Schlüssel (YubiKey). SMS ist anfällig für SIM-Swap-Angriffe. Apps wie Google Authenticator, Authy oder die Open-Source-App Aegis sind sicherer.",
        "Passwort-Zurücksetzung: Aktualisieren Sie die Kontowiederherstellungsoptionen — Wiederherstellungs-E-Mail und Telefonnummer sollten unter Ihrer Kontrolle sein. Machen Sie Sicherheitsfragen stark und unvorhersehbar (beispielsweise 'Ihre Geburtsstadt' mit einer zufälligen Antwort wie 'Lila Elefant' und speichern Sie diese in Ihrem Passwort-Manager).",
        "Häufige Fehler: Dasselbe Passwort für mehrere Konten verwenden (wenn ein Konto kompromittiert wird, sind alle Ihre Konten gefährdet), Passwörter in E-Mail- oder Notiz-Apps speichern, und die Funktion 'Passwort merken' überall verwenden. Diese Fehler schwächen Ihre Kontosicherheit erheblich.",
        "QMOBILE BASEL-Bezug: QMOBILE empfiehlt mit seinem BASEL-basierten Datenschutzansatz Passwort-Manager, die den Schweizer Datenschutzstandards entsprechen. Bitwarden und Proton Pass sind Open-Source-Optionen, die den Schweizer Datenschutzgesetzen entsprechen. QMOBILE Pixel-Geräte arbeiten nahtlos mit diesen Tools zusammen.",
        "Praktische Schritte: Wählen Sie zuerst einen Passwort-Manager und machen Sie Ihr Master-Passwort stark. Ändern Sie die Passwörter aller bestehenden Konten in einzigartige, zufällige Passwörter. Aktivieren Sie 2FA für alle Konten. Überprüfen Sie Ihre Konten regelmäßig auf verdächtige Aktivitäten. Verwenden Sie die Seite 'Have I Been Pwned', um zu prüfen, ob Ihre E-Mail-Adressen in Datenlecks involviert waren.",
        "Erweitert: Verwenden Sie einen Hardware-Schlüssel (YubiKey) — dies ist die höchste Sicherheitsstufe. Bei Konten mit FIDO2/WebAuthn-Unterstützung bietet der Hardware-Schlüssel vollständigen Schutz vor Phishing-Angriffen. Halten Sie mehrere Hardware-Schlüssel bereit (primär und Backup) und bewahren Sie diese an sicheren Orten auf. Dies ist ideal für Ihre kritischsten Konten (E-Mail, Banking).",
      ],
      en: [
        "Passwords are the key to your digital life. Yet most users choose weak passwords and reuse the same password across multiple accounts. This guide explains the basic ways to create strong passwords and manage your passwords securely.",
        "Strong password criteria: at least 12 characters long, with uppercase and lowercase letters, numbers, and special characters. Avoid dictionary words, names, birth dates, and sequences like '123456'. Random passphrases are more secure: for example, 'Blue-Cat-Mountain-42!' as four words combined.",
        "Password manager usage: a password manager (Bitwarden, 1Password, KeePass) stores all your passwords in a secure 'vault'. It generates unique, random passwords for each account. You only need to remember one master password. Bitwarden is open source and audited — important for trustworthiness.",
        "Two-factor authentication (2FA): protects your account even if your password is compromised. Instead of SMS-based 2FA, use app-based (TOTP) or hardware key (YubiKey). SMS is vulnerable to SIM swap attacks. Apps like Google Authenticator, Authy, or the open-source Aegis are more secure.",
        "Password reset: update your account recovery options — recovery email and phone number should be under your control. Make security questions strong and unpredictable (for example, 'Your birth city' with a random answer like 'Purple Elephant' and store it in your password manager).",
        "Common mistakes: using the same password across multiple accounts (if one account is breached, all your accounts are at risk), storing passwords in email or note apps, and using the 'remember password' feature everywhere. These mistakes seriously weaken your account security.",
        "QMOBILE BASEL connection: QMOBILE, with its BASEL-based privacy approach, recommends password managers that comply with Swiss privacy standards. Bitwarden and Proton Pass are open-source options that comply with Swiss privacy laws. QMOBILE Pixel devices work seamlessly with these tools.",
        "Practical steps: first choose a password manager and make your master password strong. Change all your existing account passwords to unique, random passwords. Enable 2FA on all accounts. Regularly check your accounts for suspicious activity. Use the 'Have I Been Pwned' site to check whether your email addresses have been involved in data breaches.",
        "Advanced: use a hardware key (YubiKey) — this is the highest security level. For accounts with FIDO2/WebAuthn support, the hardware key provides complete protection against phishing attacks. Keep multiple hardware keys (primary and backup) and store them in secure places. This is ideal for your most critical accounts (email, banking).",
      ],
    },
    image: "blog/password-management.svg",
  },
  {
    slug: "bulut-depolama-guvenligi",
    category: "Guvenlik",
    title: {
      tr: "Bulut Depolama Güvenliği (Google Drive, iCloud, OneDrive)",
      de: "Cloud-Speicher-Sicherheit (Google Drive, iCloud, OneDrive)",
      en: "Cloud Storage Security (Google Drive, iCloud, OneDrive)",
    },
    excerpt: {
      tr: "Şifreleme, iki faktörlü kimlik doğrulama, paylaşım ayarları ve sıfır bilgi ilkesini detaylı bir rehberle öğrenin.",
      de: "Erfahren Sie Verschlüsselung, Zwei-Faktor-Authentifizierung, Freigabeeinstellungen und das Zero-Knowledge-Prinzip mit einem detaillierten Leitfaden.",
      en: "Learn encryption, two-factor authentication, sharing settings, and the zero-knowledge principle with a detailed guide.",
    },
    content: {
      tr: [
        "Bulut depolama hizmetleri (Google Drive, iCloud, OneDrive), dosyalarınızı her yerden erişilebilir kılar ancak güvenliği doğru yapılandırmak kritik önem taşır. Bu rehber, bulut depolamanızı güvenli hale getirmenin temel adımlarını açıklar.",
        "Şifreleme: Bulut hizmetleri, verilerinizi 'dinlenme halinde' (at rest) şifreler — bu, sunucularda saklanan verilerin şifrelendiği anlamına gelir. Ancak, şifreleme anahtarları genellikle hizmet sağlayıcısının kontrolündedir. Bu, sağlayıcının teorik olarak verilerinize erişebileceği anlamına gelir. Daha güçlü koruma için istemci tarafı şifreleme (client-side encryption) kullanın.",
        "İki faktörlü kimlik doğrulama (2FA): Bulut hesabınız için 2FA'yı mutlaka etkinleştirin. SMS tabanlı 2FA yerine uygulama tabanlı (TOTP) veya donanım anahtarı (YubiKey) kullanın. SMS, SIM takası saldırılarına karşı savunmasızdır. Google Authenticator veya Authy gibi uygulamalar daha güvenlidir.",
        "Paylaşım ayarları: Dosyalarınızı paylaşırken dikkatli olun. 'Bağlantıya sahip herkes' seçeneğinden kaçının — bu, bağlantıyı bulan herkesin dosyaya erişmesine izin verir. Bunun yerine, belirli e-posta adresleriyle paylaşın ve 'düzenleme' yerine 'görüntüleme' izni verin. Düzenli olarak paylaşılan dosyalarınızı gözden geçirin.",
        "Sıfır bilgi ilkesi (Zero-Knowledge): Bazı bulut hizmetleri (Tresorit, Proton Drive), sıfır bilgi şifrelemesi sunar — bu, şifreleme anahtarlarının yalnızca sizde olduğu ve sağlayıcının bile verilerinizi okuyamayacağı anlamına gelir. Bu, en yüksek gizlilik seviyesidir. QMOBILE, BASEL merkezli yaklaşımıyla sıfır bilgi hizmetlerini önerir.",
        "Google Drive güvenliği: Hesap kurtarma seçeneklerini güncelleyin, Google'ın 'Güvenlik Kontrolü' aracını kullanın ve üçüncü taraf uygulama erişimini düzenli olarak denetleyin. Google Workspace kullanıcıları için istemci tarafı şifreleme (CSE) özelliği mevcuttur — bu, kurumsal veriler için ek koruma sağlar.",
        "iCloud güvenliği: 'Gelişmiş Veri Koruma' (Advanced Data Protection) özelliğini etkinleştirin — bu, çoğu iCloud verisi için uçtan uca şifreleme sağlar. iCloud yedeklemelerinin şifrelendiğinden emin olun. Apple, varsayılan olarak anahtarları saklar, ancak Gelişmiş Veri Koruma ile anahtarlar yalnızca sizin cihazlarınızda olur.",
        "OneDrive güvenliği: Microsoft 365 kişisel kasa (Personal Vault) özelliğini kullanın — bu, hassas dosyalar için ek kimlik doğrulama gerektiren bir alan sağlar. Kişisel kasa, 2FA ile korunur ve belirli bir süre sonra otomatik kilitlenir. Düzenli olarak OneDrive etkinlik günlüklerini kontrol edin.",
        "Pratik adımlar: Hassas dosyaları buluta yüklemeden önce yerel olarak şifreleyin (VeraCrypt, Cryptomator gibi araçlarla). Bulut hesabınızın parolasını bir parola yöneticisi kullanarak benzersiz ve güçlü yapın. Eski paylaşımları iptal edin ve kullanmadığınız üçüncü taraf uygulama erişimini kaldırın. Bu adımlar, bulut verilerinizin güvenliğini önemli ölçüde artırır.",
      ],
      de: [
        "Cloud-Speicherdienste (Google Drive, iCloud, OneDrive) machen Ihre Dateien von überall zugänglich, aber die richtige Sicherheitskonfiguration ist kritisch. Dieser Leitfaden erklärt die grundlegenden Schritte zur Sicherung Ihres Cloud-Speichers.",
        "Verschlüsselung: Cloud-Dienste verschlüsseln Ihre Daten 'in Ruhe' (at rest) — das bedeutet, dass auf Servern gespeicherte Daten verschlüsselt sind. Die Verschlüsselungsschlüssel sind jedoch in der Regel unter der Kontrolle des Diensteanbieters. Das bedeutet, dass der Anbieter theoretisch auf Ihre Daten zugreifen kann. Verwenden Sie für stärkeren Schutz clientseitige Verschlüsselung (client-side encryption).",
        "Zwei-Faktor-Authentifizierung (2FA): Aktivieren Sie unbedingt 2FA für Ihr Cloud-Konto. Verwenden Sie anstelle der SMS-basierten 2FA App-basierte (TOTP) oder Hardware-Schlüssel (YubiKey). SMS ist anfällig für SIM-Swap-Angriffe. Apps wie Google Authenticator oder Authy sind sicherer.",
        "Freigabeeinstellungen: Seien Sie vorsichtig beim Teilen Ihrer Dateien. Vermeiden Sie die Option 'Jeder mit dem Link' — dies erlaubt jedem, der den Link findet, Zugriff auf die Datei. Teilen Sie stattdessen mit bestimmten E-Mail-Adressen und geben Sie 'Ansehen' statt 'Bearbeiten'-Berechtigung. Überprüfen Sie regelmäßig Ihre geteilten Dateien.",
        "Zero-Knowledge-Prinzip: Einige Cloud-Dienste (Tresorit, Proton Drive) bieten Zero-Knowledge-Verschlüsselung — das bedeutet, dass die Verschlüsselungsschlüssel nur bei Ihnen sind und nicht einmal der Anbieter Ihre Daten lesen kann. Dies ist die höchste Datenschutzebene. QMOBILE empfiehlt mit seinem BASEL-basierten Ansatz Zero-Knowledge-Dienste.",
        "Google Drive Sicherheit: Aktualisieren Sie die Kontowiederherstellungsoptionen, verwenden Sie das 'Sicherheitscheck'-Tool von Google und überprüfen Sie regelmäßig den Drittanbieter-App-Zugriff. Für Google Workspace-Nutzer ist die clientseitige Verschlüsselung (CSE) verfügbar — dies bietet zusätzlichen Schutz für Unternehmensdaten.",
        "iCloud Sicherheit: Aktivieren Sie die 'Erweiterte Datenschutzfunktion' (Advanced Data Protection) — dies bietet Ende-zu-Ende-Verschlüsselung für die meisten iCloud-Daten. Stellen Sie sicher, dass iCloud-Backups verschlüsselt sind. Apple speichert standardmäßig die Schlüssel, aber mit Erweitertem Datenschutz sind die Schlüssel nur auf Ihren Geräten.",
        "OneDrive Sicherheit: Verwenden Sie die Microsoft 365 Personal Vault-Funktion — dies bietet einen Bereich für sensible Dateien, der eine zusätzliche Authentifizierung erfordert. Personal Vault ist durch 2FA geschützt und sperrt sich nach einer bestimmten Zeit automatisch. Überprüfen Sie regelmäßig die OneDrive-Aktivitätsprotokolle.",
        "Praktische Schritte: Verschlüsseln Sie sensible Dateien lokal, bevor Sie sie in die Cloud hochladen (mit Tools wie VeraCrypt, Cryptomator). Machen Sie das Passwort Ihres Cloud-Kontos über einen Passwort-Manager einzigartig und stark. Widerrufen Sie alte Freigaben und entfernen Sie nicht genutzten Drittanbieter-App-Zugriff. Diese Schritte erhöhen die Sicherheit Ihrer Cloud-Daten erheblich.",
      ],
      en: [
        "Cloud storage services (Google Drive, iCloud, OneDrive) make your files accessible from anywhere, but configuring security correctly is critical. This guide explains the basic steps to secure your cloud storage.",
        "Encryption: cloud services encrypt your data 'at rest' — meaning data stored on servers is encrypted. However, the encryption keys are typically under the control of the service provider. This means the provider can theoretically access your data. For stronger protection, use client-side encryption.",
        "Two-factor authentication (2FA): always enable 2FA for your cloud account. Instead of SMS-based 2FA, use app-based (TOTP) or hardware key (YubiKey). SMS is vulnerable to SIM swap attacks. Apps like Google Authenticator or Authy are more secure.",
        "Sharing settings: be careful when sharing your files. Avoid the 'Anyone with the link' option — this allows anyone who finds the link to access the file. Instead, share with specific email addresses and grant 'view' rather than 'edit' permission. Regularly review your shared files.",
        "Zero-knowledge principle: some cloud services (Tresorit, Proton Drive) offer zero-knowledge encryption — meaning the encryption keys are only with you and not even the provider can read your data. This is the highest level of privacy. QMOBILE, with its BASEL-based approach, recommends zero-knowledge services.",
        "Google Drive security: update account recovery options, use Google's 'Security Checkup' tool, and regularly audit third-party app access. For Google Workspace users, client-side encryption (CSE) is available — this provides additional protection for enterprise data.",
        "iCloud security: enable 'Advanced Data Protection' — this provides end-to-end encryption for most iCloud data. Ensure iCloud backups are encrypted. Apple stores the keys by default, but with Advanced Data Protection, the keys are only on your devices.",
        "OneDrive security: use the Microsoft 365 Personal Vault feature — this provides an area for sensitive files that requires additional authentication. Personal Vault is protected by 2FA and automatically locks after a certain period. Regularly check OneDrive activity logs.",
        "Practical steps: encrypt sensitive files locally before uploading to the cloud (with tools like VeraCrypt, Cryptomator). Make your cloud account password unique and strong using a password manager. Revoke old shares and remove unused third-party app access. These steps significantly increase the security of your cloud data.",
      ],
    },
    image: "blog/cloud-storage-security.svg",
  },
  {
    slug: "guvenli-wifi-kullanimi",
    category: "Gizlilik",
    title: {
      tr: "Güvenli Wi-Fi Kullanımı ve Ortak Ağ Riskleri",
      de: "Sichere WLAN-Nutzung und öffentliche Netzwerkrisiken",
      en: "Secure Wi-Fi Usage and Public Network Risks",
    },
    excerpt: {
      tr: "Açık ağ risklerini, VPN kullanımını, WPA3'ü ve ortadaki adam saldırılarını detaylı pratik bir rehberle öğrenin.",
      de: "Erfahren Sie offene Netzwerkrisiken, VPN-Nutzung, WPA3 und Man-in-the-Middle-Angriffe mit einem detaillierten praktischen Leitfaden.",
      en: "Learn open network risks, VPN usage, WPA3, and man-in-the-middle attacks with a detailed practical guide.",
    },
    content: {
      tr: [
        "Wi-Fi, günlük hayatın ayrılmaz bir parçasıdır ancak güvenliği genellikle göz ardı edilir. Açık (şifresiz) ağlar, özellikle kafe, havalimanı ve otellerde yaygındır ve ciddi gizlilik riskleri taşır. Bu rehber, güvenli Wi-Fi kullanımının temellerini açıklar.",
        "Açık ağ riskleri: Şifresiz Wi-Fi ağlarında, trafiğiniz aynı ağdaki diğer kullanıcılar tarafından izlenebilir. 'Ortadaki adam' (man-in-the-middle) saldırılarında, saldırgan sizin ve internet arasındaki trafiği yakalayarak şifrelerinizi, mesajlarınızı ve bankacılık verilerinizi okuyabilir. HTTPS, bu riski azaltır ancak tüm trafiği korumaz.",
        "VPN kullanımı: Ortak Wi-Fi ağlarına bağlandığınızda her zaman bir VPN kullanın. VPN, trafiğinizi şifreler ve aynı ağdaki saldırganlar verilerinizi okuyamaz. Proton VPN gibi İsviçre merkezli sağlayıcılar, BASEL gizlilik standartlarına uygun güvenli seçenekler sunar. VPN'in 'öldürme anahtarı' (kill switch) özelliğini etkinleştirin.",
        "WPA3: Modern Wi-Fi şifreleme standardıdır. WPA2'ye göre daha güçlü şifreleme sunar ve özellikle zayıf şifrelere karşı daha dirençlidir. Yeni bir yönlendirici alırken WPA3 desteğine dikkat edin. QMOBILE, BASEL merkezli gizlilik yaklaşımıyla WPA3 uyumlu cihazları önerir.",
        "Ev Wi-Fi güvenliği: Yönlendiricinizin varsayılan şifresini değiştirin (admin paneli ve Wi-Fi şifresi). WPA3 veya en az WPA2-AES şifrelemesi kullanın. Yönlendirici yazılımını düzenli olarak güncelleyin. Misafir ağı özelliğini kullanın — bu, misafirlerin ana ağınızdaki cihazlara erişmesini engeller.",
        "Ortadaki adam (MITM) saldırıları: Saldırgan, sahte bir Wi-Fi ağı oluşturarak (örneğin 'Free_Airport_WiFi' adıyla) kullanıcıları bağlanmaya ikna eder. Bağlandığınızda, tüm trafiğiniz saldırganın üzerinden geçer. Korunma: her zaman HTTPS sitelerini kullanın, tarayıcı uyarılarını (sertifika hataları) ciddiye alın ve VPN kullanın.",
        "Pratik adımlar: Ortak ağlara otomatik bağlanmayı kapatın ('Ayarlar > Wi-Fi > Bilinen ağlar' bölümünde). Bankacılık ve hassas işlemleri yalnızca mobil veri üzerinden yapın. Wi-Fi paylaşım özelliklerini (Wi-Fi Sense) devre dışı bırakın. Cihazınızın MAC adresini rastgeleleştirin — bu, sizi farklı ağlarda takip etmeyi zorlaştırır.",
        "İleri düzey: DNS-over-HTTPS (DoH) kullanın — bu, DNS sorgularınızı şifreler ve ISS'nin hangi sitelere gittiğinizi görmesini engeller. Tarayıcınızda izleyici engelleyici eklentiler kullanın. QMOBILE Pixel cihazları, bu gizlilik araçlarını varsayılan olarak destekler ve kullanıcıya ağ düzeyinde tam kontrol sağlar.",
      ],
      de: [
        "WLAN ist ein unverzichtbarer Teil des Alltags, aber die Sicherheit wird oft vernachlässigt. Offene (unverschlüsselte) Netzwerke, insbesondere in Cafés, Flughäfen und Hotels, sind weit verbreitet und bergen ernsthafte Datenschutzrisiken. Dieser Leitfaden erklärt die Grundlagen der sicheren WLAN-Nutzung.",
        "Offene Netzwerkrisiken: In unverschlüsselten WLAN-Netzwerken kann Ihr Verkehr von anderen Nutzern im selben Netzwerk überwacht werden. Bei 'Man-in-the-Middle'-Angriffen fängt der Angreifer den Verkehr zwischen Ihnen und dem Internet ab und kann Ihre Passwörter, Nachrichten und Bankdaten lesen. HTTPS reduziert dieses Risiko, schützt aber nicht den gesamten Verkehr.",
        "VPN-Nutzung: Verwenden Sie immer ein VPN, wenn Sie sich mit öffentlichen WLAN-Netzwerken verbinden. Ein VPN verschlüsselt Ihren Verkehr, sodass Angreifer im selben Netzwerk Ihre Daten nicht lesen können. Schweizer Anbieter wie Proton VPN bieten sichere Optionen, die den BASEL-Datenschutzstandards entsprechen. Aktivieren Sie die 'Kill Switch'-Funktion des VPNs.",
        "WPA3: Der moderne WLAN-Verschlüsselungsstandard. Bietet stärkere Verschlüsselung als WPA2 und ist insbesondere gegenüber schwachen Passwörtern widerstandsfähiger. Achten Sie beim Kauf eines neuen Routers auf WPA3-Unterstützung. QMOBILE empfiehlt mit seinem BASEL-basierten Datenschutzansatz WPA3-kompatible Geräte.",
        "Heim-WLAN-Sicherheit: Ändern Sie die Standardpasswörter Ihres Routers (Admin-Panel und WLAN-Passwort). Verwenden Sie WPA3 oder mindestens WPA2-AES-Verschlüsselung. Aktualisieren Sie die Router-Software regelmäßig. Verwenden Sie die Gastnetzwerk-Funktion — dies verhindert, dass Gäste auf Geräte in Ihrem Hauptnetzwerk zugreifen.",
        "Man-in-the-Middle (MITM)-Angriffe: Ein Angreifer erstellt ein gefälschtes WLAN-Netzwerk (z. B. 'Free_Airport_WiFi') und überzeugt Nutzer, sich zu verbinden. Wenn Sie verbunden sind, läuft Ihr gesamter Verkehr über den Angreifer. Schutz: Verwenden Sie immer HTTPS-Sites, nehmen Sie Browser-Warnungen (Zertifikatsfehler) ernst und verwenden Sie ein VPN.",
        "Praktische Schritte: Deaktivieren Sie die automatische Verbindung zu öffentlichen Netzwerken (unter 'Einstellungen > WLAN > Bekannte Netzwerke'). Führen Sie Banking und sensible Transaktionen nur über mobile Daten durch. Deaktivieren Sie WLAN-Sharing-Funktionen (Wi-Fi Sense). Randomisieren Sie die MAC-Adresse Ihres Geräts — dies erschwert die Verfolgung über verschiedene Netzwerke hinweg.",
        "Erweitert: Verwenden Sie DNS-over-HTTPS (DoH) — dies verschlüsselt Ihre DNS-Anfragen und verhindert, dass Ihr ISP sieht, welche Websites Sie besuchen. Verwenden Sie Tracker-Blocker-Erweiterungen in Ihrem Browser. QMOBILE Pixel-Geräte unterstützen diese Datenschutz-Tools standardmäßig und geben dem Nutzer volle Kontrolle auf Netzwerkebene.",
      ],
      en: [
        "Wi-Fi is an integral part of daily life, but its security is often overlooked. Open (unencrypted) networks, especially in cafés, airports, and hotels, are common and carry serious privacy risks. This guide explains the basics of secure Wi-Fi usage.",
        "Open network risks: on unencrypted Wi-Fi networks, your traffic can be monitored by other users on the same network. In 'man-in-the-middle' attacks, the attacker intercepts traffic between you and the internet and can read your passwords, messages, and banking data. HTTPS reduces this risk but does not protect all traffic.",
        "VPN usage: always use a VPN when connecting to public Wi-Fi networks. A VPN encrypts your traffic, so attackers on the same network cannot read your data. Swiss-based providers like Proton VPN offer secure options that comply with BASEL privacy standards. Enable the VPN's 'kill switch' feature.",
        "WPA3: the modern Wi-Fi encryption standard. Offers stronger encryption than WPA2 and is more resistant to weak passwords. When buying a new router, look for WPA3 support. QMOBILE, with its BASEL-based privacy approach, recommends WPA3-compatible devices.",
        "Home Wi-Fi security: change your router's default passwords (admin panel and Wi-Fi password). Use WPA3 or at least WPA2-AES encryption. Regularly update the router software. Use the guest network feature — this prevents guests from accessing devices on your main network.",
        "Man-in-the-Middle (MITM) attacks: an attacker creates a fake Wi-Fi network (e.g., 'Free_Airport_WiFi') and convinces users to connect. Once connected, all your traffic passes through the attacker. Protection: always use HTTPS sites, take browser warnings (certificate errors) seriously, and use a VPN.",
        "Practical steps: turn off automatic connection to public networks (under 'Settings > Wi-Fi > Known networks'). Do banking and sensitive transactions only over mobile data. Disable Wi-Fi sharing features (Wi-Fi Sense). Randomize your device's MAC address — this makes tracking you across different networks harder.",
        "Advanced: use DNS-over-HTTPS (DoH) — this encrypts your DNS queries and prevents your ISP from seeing which websites you visit. Use tracker-blocking extensions in your browser. QMOBILE Pixel devices support these privacy tools by default and give the user full control at the network level.",
      ],
    },
    image: "blog/secure-wifi.svg",
  },
  {
    slug: "uygulama-izinleri-nasil-yonetilir",
    category: "Guvenlik",
    title: {
      tr: "Uygulama İzinleri Nasıl Yönetilir?",
      de: "Wie verwaltet man App-Berechtigungen?",
      en: "How to Manage App Permissions?",
    },
    excerpt: {
      tr: "İzin türlerini, Android ve iPhone yönetim yöntemlerini ve en az ayrıcalık ilkesini pratik bir rehberle öğrenin.",
      de: "Lernen Sie Berechtigungsarten, Android- und iPhone-Verwaltungsmethoden und das Prinzip der minimalen Rechte mit einem praktischen Leitfaden.",
      en: "Learn permission types, Android and iPhone management methods, and the principle of least privilege with a practical guide.",
    },
    content: {
      tr: [
        "Uygulama izinleri, bir uygulamanın cihazınızın hangi özelliklerine veya verilerine erişebileceğini belirler. Bir flashlight uygulamasının konum izni istemesi gibi, gereksiz izinler gizlilik riski taşır. Bu rehber, izinleri doğru yönetmenin pratik yollarını açıklar.",
        "İzin türleri: Konum (kesin/tahmini), kamera, mikrofon, kişiler, arama kayıtları, SMS, depolama, telefon durumu ve arka plan verisi. Her izin türü farklı bir gizlilik riski taşır. Örneğin konum izni, hareket haritanızın çıkarılmasına olanak tanır; mikrofon izni ise konuşmalarınızın dinlenmesine yol açabilir.",
        "En az ayrıcalık ilkesi (Principle of Least Privilege): Bir uygulamaya yalnızca çalışması için gereken minimum izinleri verin. Bir uygulama konum izni istiyorsa, 'Yalnızca uygulamayı kullanırken' seçeneğini tercih edin. 'Her zaman' seçeneğinden kaçının — bu, uygulamanın arka planda da konumunuzu izlemesine izin verir.",
        "Android'de izin yönetimi: 'Ayarlar > Gizlilik > İzin yöneticisi' bölümüne gidin. Her izni tek tek seçin ve hangi uygulamaların o izne sahip olduğunu gözden geçirin. Şüpheli bir uygulama bulursanız, izni 'İzin ver' menüsünden iptal edin. Android 12+, izinleri tek seferde iptal etmenize olanak tanıyan 'İzinleri sil' özelliği sunar.",
        "iPhone'da izin yönetimi: 'Ayarlar > Gizlilik ve Güvenlik' bölümüne gidin. Her izin kategorisini seçin ve uygulamaları gözden geçirin. iOS, izinleri 'Asla', 'Bir kez', 'Uygulamayı kullanırken' ve 'Her zaman' olarak sınıflandırır. 'Bir kez' seçeneği, geçici erişim için idealdir.",
        "Yeni bir uygulama yüklediğinizde, izin isteklerini dikkatli değerlendirin. Bir uygulama, yüklenir yüklenmez tüm izinleri istiyorsa şüphelenin. Önce uygulamayı kullanın ve gerçekten ihtiyaç duyduğunda izin verin. Örneğin, bir kamera uygulaması ilk açılışta konum izni isteyebilir — bu, fotoğraflara konum etiketi eklemek içindir ve reddedebilirsiniz.",
        "Düzenli denetim: Ayda bir kez tüm izinleri gözden geçirin. Kullanmadığınız uygulamaların izinlerini iptal edin. QMOBILE Pixel tabanlı cihazlar, BASEL merkezli gizlilik yaklaşımıyla izin denetimini kolaylaştırır: erişim günlükleri hangi uygulamanın hangi izne ne zaman eriştiğini şeffaf bir şekilde gösterir.",
        "İleri düzey ipuçları: Sosyal medya uygulamalarının mikrofon ve kamera izinlerini kapatın (sadece kullanmanız gerektiğinde açın). Tarayıcı izinlerini sınırlayın (konum, kamera, mikrofon). Çocuklar için aile bağlantısı uygulamaları kullanın ve izinleri yaşa göre ayarlayın. Bu adımlar, hem gizliliğinizi hem de güvenliğinizi önemli ölçüde artırır.",
      ],
      de: [
        "App-Berechtigungen bestimmen, auf welche Funktionen oder Daten Ihres Geräts eine App zugreifen kann. Unnötige Berechtigungen, wie eine Taschenlampen-App, die Standortzugriff verlangt, bergen Datenschutzrisiken. Dieser Leitfaden erklärt praktische Wege zur richtigen Verwaltung von Berechtigungen.",
        "Berechtigungsarten: Standort (genau/ungefähr), Kamera, Mikrofon, Kontakte, Anrufprotokolle, SMS, Speicher, Telefonstatus und Hintergrunddaten. Jede Berechtigungsart birgt ein anderes Datenschutzrisiko. Beispielsweise ermöglicht der Standortzugriff das Erstellen eines Bewegungsprofils; die Mikrofonberechtigung kann zum Abhören Ihrer Gespräche führen.",
        "Prinzip der minimalen Rechte (Principle of Least Privilege): Geben Sie einer App nur die minimalen Berechtigungen, die sie zum Funktionieren benötigt. Wenn eine App Standortzugriff verlangt, wählen Sie 'Nur während der App-Nutzung'. Vermeiden Sie die Option 'Immer' — dies erlaubt der App, Ihren Standort auch im Hintergrund zu verfolgen.",
        "Berechtigungsverwaltung unter Android: Gehen Sie zu 'Einstellungen > Datenschutz > Berechtigungsmanager'. Wählen Sie jede Berechtigung einzeln und überprüfen Sie, welche Apps diese Berechtigung haben. Wenn Sie eine verdächtige App finden, widerrufen Sie die Berechtigung über das 'Zulassen'-Menü. Android 12+ bietet die Funktion 'Berechtigungen entfernen', um Berechtigungen auf einmal zu widerrufen.",
        "Berechtigungsverwaltung auf dem iPhone: Gehen Sie zu 'Einstellungen > Datenschutz & Sicherheit'. Wählen Sie jede Berechtigungskategorie und überprüfen Sie die Apps. iOS klassifiziert Berechtigungen als 'Nie', 'Einmal', 'Während der App-Nutzung' und 'Immer'. Die Option 'Einmal' ist ideal für temporären Zugriff.",
        "Wenn Sie eine neue App installieren, bewerten Sie Berechtigungsanfragen sorgfältig. Misstrauen Sie, wenn eine App sofort nach der Installation alle Berechtigungen verlangt. Verwenden Sie die App zuerst und gewähren Sie Berechtigungen nur, wenn sie wirklich benötigt werden. Beispielsweise kann eine Kamera-App beim ersten Öffnen Standortzugriff verlangen — dies dient zum Hinzufügen von Standort-Tags zu Fotos und kann abgelehnt werden.",
        "Regelmäßige Prüfung: Überprüfen Sie einmal im Monat alle Berechtigungen. Widerrufen Sie Berechtigungen von Apps, die Sie nicht verwenden. QMOBILE Pixel-basierte Geräte erleichtern mit ihrem BASEL-basierten Datenschutzansatz die Berechtigungsprüfung: Zugriffsprotokolle zeigen transparent, welche App wann auf welche Berechtigung zugegriffen hat.",
        "Erweiterte Tipps: Deaktivieren Sie Mikrofon- und Kameraberechtigungen von Social-Media-Apps (aktivieren Sie sie nur bei Bedarf). Beschränken Sie Browser-Berechtigungen (Standort, Kamera, Mikrofon). Verwenden Sie für Kinder Family-Link-Apps und passen Sie Berechtigungen nach Alter an. Diese Schritte erhöhen Ihre Privatsphäre und Sicherheit erheblich.",
      ],
      en: [
        "App permissions determine which features or data of your device an app can access. Unnecessary permissions, like a flashlight app requesting location access, carry privacy risks. This guide explains practical ways to manage permissions correctly.",
        "Permission types: location (precise/approximate), camera, microphone, contacts, call logs, SMS, storage, phone state, and background data. Each permission type carries a different privacy risk. For example, location permission allows building a movement profile; microphone permission can lead to your conversations being listened to.",
        "Principle of Least Privilege: give an app only the minimum permissions it needs to function. If an app requests location access, choose 'Only while using the app'. Avoid the 'Always' option — this allows the app to track your location in the background.",
        "Permission management on Android: go to 'Settings > Privacy > Permission manager'. Select each permission individually and review which apps have that permission. If you find a suspicious app, revoke the permission from the 'Allow' menu. Android 12+ offers the 'Remove permissions' feature to revoke permissions at once.",
        "Permission management on iPhone: go to 'Settings > Privacy & Security'. Select each permission category and review the apps. iOS classifies permissions as 'Never', 'Once', 'While Using the App', and 'Always'. The 'Once' option is ideal for temporary access.",
        "When you install a new app, evaluate permission requests carefully. Be suspicious if an app requests all permissions immediately upon installation. Use the app first and grant permissions only when truly needed. For example, a camera app may request location access on first launch — this is for adding location tags to photos and can be denied.",
        "Regular audit: review all permissions once a month. Revoke permissions from apps you don't use. QMOBILE Pixel-based devices, with their BASEL-based privacy approach, make permission auditing easy: access logs transparently show which app accessed which permission and when.",
        "Advanced tips: turn off microphone and camera permissions for social media apps (enable only when needed). Limit browser permissions (location, camera, microphone). Use Family Link apps for children and adjust permissions by age. These steps significantly increase both your privacy and security.",
      ],
    },
    image: "blog/app-permissions.svg",
  },
  {
    slug: "iphone-guvenlik-ayarlari-rehber",
    category: "Telefon",
    title: {
      tr: "iPhone Güvenlik Ayarları – Temel Rehber",
      de: "iPhone-Sicherheitseinstellungen – Grundlegender Leitfaden",
      en: "iPhone Security Settings – Basic Guide",
    },
    excerpt: {
      tr: "Face ID/Touch ID, gizlilik ayarları, App Tracking Transparency ve Find My dahil temel iPhone güvenlik ayarlarını kapsamlı bir başlangıç rehberiyle öğrenin.",
      de: "Lernen Sie die grundlegenden iPhone-Sicherheitseinstellungen einschließlich Face ID/Touch ID, Datenschutzeinstellungen, App Tracking Transparency und Find My mit einem umfassenden Einsteigerleitfaden.",
      en: "Learn the basic iPhone security settings including Face ID/Touch ID, privacy settings, App Tracking Transparency, and Find My with a comprehensive beginner guide.",
    },
    content: {
      tr: [
        "iPhone güvenlik ayarları, Apple'ın kapalı ekosisteminin gücünü kullanarak cihazınızı korumanın temel yoludur. Bu rehber, yeni başlayanlar için Face ID'den Find My'ye kadar tüm temel ayarları kapsamlı bir şekilde açıklar.",
        "Face ID/Touch ID: iPhone'unuzun biyometrik güvenliğidir. 'Ayarlar > Face ID ve Parola' bölümünde Face ID'yi etkinleştirin ve güçlü bir alfanümerik parola belirleyin. Face ID, yüzünüzü 30.000'den fazla noktayla tarar ve bu veriler cihazınızın Secure Enclave çipinde saklanır — Apple'a gönderilmez.",
        "Gizlilik ayarları: 'Ayarlar > Gizlilik ve Güvenlik' bölümü, uygulama izinlerinin merkezidir. Konum, kamera, mikrofon ve kişiler izinlerini her uygulama için tek tek gözden geçirin. 'İzinleri İnceleme' özelliğini kullanarak tüm izinleri bir kerede denetleyin.",
        "App Tracking Transparency (ATT): iOS 14.5 ve sonrasında gelen kritik bir özelliktir. 'Ayarlar > Gizlilik ve Güvenlik > İzleme' bölümünde 'Uygulamaların izleme isteğine izin ver' seçeneğini kapatın. Bu, uygulamaların sizden izin almadan sizi diğer şirketlerin uygulamaları arasında takip etmesini engeller.",
        "Find My (Bul): Cihazınızı kaybettiğinizde veya çalındığında kritik bir araçtır. 'Ayarlar > [Adınız] > Bul' bölümünde 'Bul iPhone' ve 'Bul ağı' seçeneklerini etkinleştirin. Bul ağı, cihazınız internete bağlı olmasa bile çevredeki Apple cihazları aracılığıyla konumunu gönderebilir.",
        "iCloud yedekleme şifrelemesi: 'Ayarlar > [Adınız] > iCloud > iCloud Yedekleme' bölümünde 'Yerel verileri şifrele' (iOS 16+) seçeneğini etkinleştirin. Bu, yedeklemelerinizin uçtan uca şifrelenmesini sağlar ve iCloud'a erişimi olan kişiler bile içeriği göremez.",
        "Güvenlik güncellemeleri: iPhone'lar güncellemeleri doğrudan Apple'dan alır — bu, Android'deki parçalanmış ekosisteme göre bir avantajdır. 'Ayarlar > Genel > Yazılım Güncellemesi' bölümünde 'Otomatik Güncellemeler' seçeneğini etkinleştirin. Güvenlik yamaları genellikle haftalar içinde gelir.",
        "Ek güvenlik adımları: 'Ayarlar > Face ID ve Parola > Yan butonla onayla' özelliğini kullanın (Apple Pay ve parola girişleri için ek güvenlik). 'Ayarlar > Safari > Gizliliği Koru ve Gizli Verileri Engelle' seçeneğini etkinleştirin. QMOBILE, BASEL merkezli gizlilik yaklaşımıyla iPhone kullanıcılarına da bu ayarların önemini vurgular.",
      ],
      de: [
        "Die iPhone-Sicherheitseinstellungen sind die grundlegende Möglichkeit, Ihr Gerät unter Nutzung der Stärke von Apples geschlossenem Ökosystem zu schützen. Dieser Leitfaden erklärt umfassend für Anfänger alle grundlegenden Einstellungen von Face ID bis Find My.",
        "Face ID/Touch ID: Die biometrische Sicherheit Ihres iPhones. Aktivieren Sie unter 'Einstellungen > Face ID & Code' die Face ID und legen Sie ein starkes alphanumerisches Passwort fest. Face ID scannt Ihr Gesicht mit über 30.000 Punkten, und diese Daten werden im Secure Enclave-Chip Ihres Geräts gespeichert — nicht an Apple gesendet.",
        "Datenschutzeinstellungen: Der Bereich 'Einstellungen > Datenschutz & Sicherheit' ist das Zentrum der App-Berechtigungen. Überprüfen Sie Standort-, Kamera-, Mikrofon- und Kontakte-Berechtigungen für jede App einzeln. Verwenden Sie die Funktion 'Berechtigungen überprüfen', um alle Berechtigungen auf einmal zu prüfen.",
        "App Tracking Transparency (ATT): Eine kritische Funktion ab iOS 14.5. Deaktivieren Sie unter 'Einstellungen > Datenschutz & Sicherheit > Tracking' die Option 'Apps erlauben, Tracking anzufordern'. Dies verhindert, dass Apps Sie ohne Erlaubnis über Apps anderer Unternehmen hinweg verfolgen.",
        "Find My (Suchen): Ein kritisches Werkzeug, wenn Sie Ihr Gerät verlieren oder es gestohlen wird. Aktivieren Sie unter 'Einstellungen > [Ihr Name] > Suchen' die Optionen 'iPhone suchen' und 'Suchen-Netzwerk'. Das Suchen-Netzwerk kann den Standort Ihres Geräts über umgebende Apple-Geräte senden, selbst wenn es nicht mit dem Internet verbunden ist.",
        "iCloud-Backup-Verschlüsselung: Aktivieren Sie unter 'Einstellungen > [Ihr Name] > iCloud > iCloud-Backup' die Option 'Lokale Daten verschlüsseln' (iOS 16+). Dies stellt eine Ende-zu-Ende-Verschlüsselung Ihrer Backups sicher, sodass selbst Personen mit iCloud-Zugriff den Inhalt nicht sehen können.",
        "Sicherheitsupdates: iPhones erhalten Updates direkt von Apple — ein Vorteil gegenüber dem fragmentierten Android-Ökosystem. Aktivieren Sie unter 'Einstellungen > Allgemein > Softwareupdate' die Option 'Automatische Updates'. Sicherheitspatches kommen in der Regel innerhalb von Wochen.",
        "Zusätzliche Sicherheitsschritte: Verwenden Sie 'Einstellungen > Face ID & Code > Mit Seitentaste bestätigen' (zusätzliche Sicherheit für Apple Pay und Passworteingaben). Aktivieren Sie 'Einstellungen > Safari > Privatsphäre schützen und verfolger blockieren'. QMOBILE betont mit seinem BASEL-basierten Datenschutzansatz die Bedeutung dieser Einstellungen auch für iPhone-Nutzer.",
      ],
      en: [
        "iPhone security settings are the fundamental way to protect your device using the strength of Apple's closed ecosystem. This guide explains comprehensively for beginners all the basic settings from Face ID to Find My.",
        "Face ID/Touch ID: your iPhone's biometric security. Enable Face ID under 'Settings > Face ID & Passcode' and set a strong alphanumeric password. Face ID scans your face with over 30,000 points, and this data is stored in your device's Secure Enclave chip — not sent to Apple.",
        "Privacy settings: the 'Settings > Privacy & Security' section is the center of app permissions. Review location, camera, microphone, and contacts permissions for each app individually. Use the 'Review Permissions' feature to audit all permissions at once.",
        "App Tracking Transparency (ATT): a critical feature from iOS 14.5. Turn off 'Allow Apps to Request to Track' under 'Settings > Privacy & Security > Tracking'. This prevents apps from tracking you across other companies' apps without your permission.",
        "Find My: a critical tool when you lose your device or it is stolen. Enable 'Find My iPhone' and 'Find My network' under 'Settings > [Your Name] > Find My'. The Find My network can send your device's location through surrounding Apple devices even when it is not connected to the internet.",
        "iCloud backup encryption: enable 'Encrypt local data' (iOS 16+) under 'Settings > [Your Name] > iCloud > iCloud Backup'. This ensures end-to-end encryption of your backups, so even people with iCloud access cannot see the content.",
        "Security updates: iPhones receive updates directly from Apple — an advantage over the fragmented Android ecosystem. Enable 'Automatic Updates' under 'Settings > General > Software Update'. Security patches typically arrive within weeks.",
        "Additional security steps: use 'Settings > Face ID & Passcode > Confirm with Side Button' (extra security for Apple Pay and password entries). Enable 'Settings > Safari > Protect Privacy and Block Trackers'. QMOBILE, with its BASEL-based privacy approach, emphasizes the importance of these settings for iPhone users as well.",
      ],
    },
    image: "blog/iphone-security-guide.svg",
  },
  {
    slug: "android-guvenlik-ayarlari-rehber",
    category: "Telefon",
    title: {
      tr: "Android Güvenlik Ayarları – Temel Rehber",
      de: "Android-Sicherheitseinstellungen – Grundlegender Leitfaden",
      en: "Android Security Settings – Basic Guide",
    },
    excerpt: {
      tr: "Ekran kilidi, Google Play Protect, izinler ve güvenlik güncellemeleri dahil temel Android güvenlik ayarlarını kapsamlı bir başlangıç rehberiyle öğrenin.",
      de: "Lernen Sie die grundlegenden Android-Sicherheitseinstellungen einschließlich Bildschirmsperre, Google Play Protect, Berechtigungen und Sicherheitsupdates mit einem umfassenden Einsteigerleitfaden.",
      en: "Learn the basic Android security settings including screen lock, Google Play Protect, permissions, and security updates with a comprehensive beginner guide.",
    },
    content: {
      tr: [
        "Android güvenlik ayarları, telefonunuzu kötü amaçlı yazılımlardan ve yetkisiz erişimden korumanın ilk savunma hattıdır. Bu rehber, yeni başlayanlar için temel adımları kapsamlı bir şekilde açıklar. QMOBILE Pixel tabanlı cihazlar, bu ayarların çoğunu varsayılan olarak optimize eder.",
        "Ekran kilidi: En temel güvenlik adımıdır. 'Ayarlar > Güvenlik > Ekran kilidi' bölümünde en az 6 haneli bir PIN veya alfanümerik şifre kullanın. Desen kilidi güvenlidir ancak parmak izinizden tahmin edilebilir. Biyometrik (parmak izi/yüz) kilidi PIN ile birlikte kullanın.",
        "Google Play Protect: Android'in yerleşik kötü amaçlı yazılım tarayıcısıdır. 'Ayarlar > Google > Güvenlik > Google Play Protect' bölümünde 'Cihazı güvenlik tehditleri için tara' seçeneğinin açık olduğundan emin olun. Play Protect, yüklenen uygulamaları periyodik olarak tarar ve zararlı olanları uyarır.",
        "Uygulama izinleri: En sık istismar edilen güvenlik açığıdır. 'Ayarlar > Gizlilik > İzin yöneticisi' bölümünde her izni gözden geçirin. Konum, kamera, mikrofon ve kişiler izinlerini yalnızca gerçekten ihtiyaç duyan uygulamalara verin. 'Yalnızca uygulamayı kullanırken' seçeneğini tercih edin.",
        "Güvenlik güncellemeleri: Kritik öneme sahiptir. 'Ayarlar > Sistem > Sistem güncellemesi > Güvenlik güncellemesi' bölümünü kontrol edin. QMOBILE Pixel cihazları, Google'ın doğrudan güvenlik yamalarını zamanında alır — bu, birçok üreticinin aksine aylarca gecikmeli güncelleme almamaları anlamına gelir.",
        "Bulut yedekleme şifrelemesi: 'Ayarlar > Google > Yedekle' bölümünde yedeklemelerin şifrelendiğinden emin olun. Hassas veriler için yerel yedekleme tercih edin. Google Drive yedeklemeleri şifrelidir ancak bulutta saklanan veriler hala erişilebilirdir.",
        "Otomatik kilitleme ve Smart Lock: 'Ayarlar > Güvenlik > Otomatik kilitleme' süresini kısa tutun (5 saniye önerilir). Smart Lock (güvenli yerlerde kilidi açık bırakma) özelliğini devre dışı bırakın — bu özellik, evinizde veya iş yerinizde telefonunuzun kilitli kalmamasını sağlar ancak güvenlik riski taşır.",
        "QMOBILE BASEL bağlantısı: QMOBILE, BASEL merkezli gizlilik yaklaşımıyla Pixel cihazlarında ek güvenlik katmanları sunar. Bunlar arasında geliştirici seçeneklerinin varsayılan olarak kapalı olması, OEM kilidinin korunması ve USB veri erişiminin kısıtlanması yer alır. Bu ayarlar, adli cihazlara ve fiziksel saldırılara karşı koruma sağlar.",
      ],
      de: [
        "Die Android-Sicherheitseinstellungen sind die erste Verteidigungslinie, um Ihr Telefon vor Malware und unbefugtem Zugriff zu schützen. Dieser Leitfaden erklärt die grundlegenden Schritte umfassend für Anfänger. QMOBILE Pixel-basierte Geräte optimieren viele dieser Einstellungen standardmäßig.",
        "Bildschirmsperre: Der grundlegendste Sicherheitsschritt. Verwenden Sie unter 'Einstellungen > Sicherheit > Bildschirmsperre' mindestens eine 6-stellige PIN oder ein alphanumerisches Passwort. Die Mustersperre ist sicher, kann aber aus Fingerabdrücken erraten werden. Verwenden Sie biometrische (Fingerabdruck/Gesicht) Sperre zusammen mit einer PIN.",
        "Google Play Protect: Der eingebaute Malware-Scanner von Android. Stellen Sie sicher, dass unter 'Einstellungen > Google > Sicherheit > Google Play Protect' die Option 'Gerät auf Sicherheitsbedrohungen scannen' aktiviert ist. Play Protect scannt installierte Apps regelmäßig und warnt vor schädlichen Apps.",
        "App-Berechtigungen: Die am häufigsten ausgenutzte Sicherheitslücke. Überprüfen Sie unter 'Einstellungen > Datenschutz > Berechtigungsmanager' jede Berechtigung. Geben Sie Standort-, Kamera-, Mikrofon- und Kontakte-Berechtigungen nur Apps, die diese wirklich benötigen. Wählen Sie die Option 'Nur während der App-Nutzung'.",
        "Sicherheitsupdates: Von entscheidender Bedeutung. Prüfen Sie 'Einstellungen > System > Systemupdate > Sicherheitsupdate'. QMOBILE Pixel-Geräte erhalten zeitnahe direkte Sicherheitspatches von Google — im Gegensatz zu vielen Herstellern, die Updates monatelang verzögern.",
        "Cloud-Backup-Verschlüsselung: Stellen Sie unter 'Einstellungen > Google > Sichern' sicher, dass Backups verschlüsselt sind. Bevorzugen Sie für sensible Daten lokale Backups. Google Drive-Backups sind verschlüsselt, aber in der Cloud gespeicherte Daten bleiben zugänglich.",
        "Automatische Sperre und Smart Lock: Halten Sie die 'Einstellungen > Sicherheit > Automatische Sperre'-Zeit kurz (5 Sekunden empfohlen). Deaktivieren Sie Smart Lock (Sperre an sicheren Orten offen lassen) — diese Funktion lässt Ihr Telefon zu Hause oder am Arbeitsplatz entsperrt, birgt aber Sicherheitsrisiken.",
        "QMOBILE BASEL-Bezug: QMOBILE bietet mit seinem BASEL-basierten Datenschutzansatz auf Pixel-Geräten zusätzliche Sicherheitsebenen. Dazu gehören standardmäßig deaktivierte Entwickleroptionen, geschützter OEM-Unlock und eingeschränkter USB-Datenzugriff. Diese Einstellungen bieten Schutz vor forensischen Geräten und physischen Angriffen.",
      ],
      en: [
        "Android security settings are the first line of defense to protect your phone from malware and unauthorized access. This guide explains the basic steps comprehensively for beginners. QMOBILE Pixel-based devices optimize many of these settings by default.",
        "Screen lock: the most fundamental security step. Use at least a 6-digit PIN or alphanumeric password under 'Settings > Security > Screen lock'. Pattern lock is secure but can be guessed from fingerprints. Use biometric (fingerprint/face) lock together with a PIN.",
        "Google Play Protect: Android's built-in malware scanner. Make sure 'Scan device for security threats' is enabled under 'Settings > Google > Security > Google Play Protect'. Play Protect periodically scans installed apps and warns about harmful ones.",
        "App permissions: the most exploited security vulnerability. Review each permission under 'Settings > Privacy > Permission manager'. Give location, camera, microphone, and contacts permissions only to apps that truly need them. Prefer the 'Only while using the app' option.",
        "Security updates: critically important. Check 'Settings > System > System update > Security update'. QMOBILE Pixel devices receive timely direct security patches from Google — unlike many manufacturers that delay updates for months.",
        "Cloud backup encryption: ensure backups are encrypted under 'Settings > Google > Backup'. Prefer local backups for sensitive data. Google Drive backups are encrypted, but data stored in the cloud remains accessible.",
        "Auto-lock and Smart Lock: keep the 'Settings > Security > Auto-lock' time short (5 seconds recommended). Disable Smart Lock (keep unlocked in trusted places) — this feature keeps your phone unlocked at home or work but carries security risks.",
        "QMOBILE BASEL connection: QMOBILE, with its BASEL-based privacy approach, offers additional security layers on Pixel devices. These include developer options disabled by default, OEM unlock protection, and restricted USB data access. These settings provide protection against forensic devices and physical attacks.",
      ],
    },
    image: "blog/android-security-guide.svg",
  },
  {
    slug: "telefon-arka-plan-veri-engelleme",
    category: "Gizlilik",
    title: {
      tr: "Telefonun Arka Planda Veri Göndermesini Engelleme",
      de: "Verhindern, dass Ihr Telefon im Hintergrund Daten sendet",
      en: "Preventing Your Phone from Sending Data in the Background",
    },
    excerpt: {
      tr: "Arka plan veri trafiğini adım adım nasıl engelleyeceğinizi, QMOBILE Pixel cihazının avantajını ve gizlilik etkilerini öğrenin.",
      de: "Erfahren Sie Schritt für Schritt, wie Sie Hintergrunddatenverkehr blockieren, den Vorteil von QMOBILE Pixel-Geräten und die Auswirkungen auf die Privatsphäre.",
      en: "Learn step by step how to block background data traffic, the advantage of QMOBILE Pixel devices, and the privacy implications.",
    },
    content: {
      tr: [
        "Akıllı telefonunuz, ekranı kapalıyken bile arka planda veri gönderir. Uygulama güncellemeleri, senkronizasyon, konum raporlama ve reklam kimliği gönderimi bu trafiğin bir parçasıdır. Bu veri akışı, gizliliğinizi ihlal edebilir ve mobil veri planınızı tüketebilir.",
        "Arka plan verilerini engellemek için ilk adım: Android'de 'Ayarlar > Ağ ve İnternet > Veri kullanımı > Veri tasarrufu' seçeneğini etkinleştirin. Bu mod, uygulamaların arka planda veri göndermesini kısıtlar. Yalnızca öncelikli uygulamalara (örneğin mesajlaşma) istisna tanıyabilirsiniz.",
        "İkinci adım: Uygulama bazında arka plan verilerini kapatın. 'Ayarlar > Uygulamalar > [Uygulama] > Mobil veri ve Wi-Fi > Arka plan verileri' seçeneğini devre dışı bırakın. Bu, uygulamanın yalnızca açıkken veri göndermesine izin verir. Sosyal medya uygulamaları için bu ayar özellikle etkilidir.",
        "Üçüncü adım: Konum hizmetlerini 'Yalnızca uygulamayı kullanırken' moduna ayarlayın. 'Ayarlar > Konum > Uygulama izinleri' bölümünde her uygulama için konum erişimini sınırlayın. Arka planda konum gönderen uygulamalar (örneğin hava durumu, alışveriş uygulamaları) bu ayarla sınırlandırılır.",
        "Dördüncü adım: Reklam kimliğini sıfırlayın ve kişiselleştirilmiş reklamları devre dışı bırakın. 'Ayarlar > Gizlilik > Reklamlar > Reklam kimliğini sıfırla' seçeneğini kullanın. Bu, uygulamaların sizi tek bir kimlik üzerinden takip etmesini engeller. QMOBILE Pixel cihazları bu ayarı varsayılan olarak optimize eder.",
        "QMOBILE Pixel tabanlı cihazlar, arka plan veri yönetiminde önemli avantajlar sunar. QMOBILE, BASEL merkezli gizlilik yaklaşımıyla, gereksiz arka plan trafiğini donanım düzeyinde kısıtlar ve kullanıcıya hangi uygulamanın ne kadar veri gönderdiğini şeffaf bir şekilde gösterir. Bu, standart Android cihazlara göre daha güçlü bir gizlilik kontrolü sağlar.",
        "Gizlilik etkileri: Arka plan verilerini engellemek, uygulama izlemeğini azaltır, batarya ömrünü uzatır ve mobil veri maliyetlerinizi düşürür. Ancak bazı uygulamalar (örneğin e-posta ve mesajlaşma) bildirim almak için arka plan verisine ihtiyaç duyar. Bu nedenle, kısıtlamaları uygularken öncelikli uygulamaları istisna olarak işaretleyin.",
        "İleri düzey kullanıcılar için: Ağ düzeyinde kontrol için güvenlik duvarı uygulamaları (NetGuard, RethinkDNS) kullanın. Bu uygulamalar, belirli uygulamaların internet erişimini tamamen engelleyebilir. QMOBILE cihazları, bu tür araçlarla uyumludur ve kullanıcıya ağ trafiği üzerinde tam kontrol sağlar.",
      ],
      de: [
        "Ihr Smartphone sendet auch bei gesperrtem Bildschirm im Hintergrund Daten. App-Updates, Synchronisation, Standortmeldungen und das Senden der Werbe-ID sind Teil dieses Verkehrs. Dieser Datenfluss kann Ihre Privatsphäre verletzen und Ihr mobiles Datenvolumen verbrauchen.",
        "Erster Schritt zum Blockieren von Hintergrunddaten: Aktivieren Sie unter Android 'Einstellungen > Netzwerk & Internet > Datennutzung > Datensparmodus'. Dieser Modus schränkt das Senden von Daten durch Apps im Hintergrund ein. Sie können nur für priorisierte Apps (z. B. Messaging) Ausnahmen festlegen.",
        "Zweiter Schritt: Deaktivieren Sie hintergrunddaten pro App. Schalten Sie 'Einstellungen > Apps > [App] > Mobile Daten & WLAN > Hintergrunddaten' aus. Dies erlaubt der App, nur im geöffneten Zustand Daten zu senden. Für Social-Media-Apps ist diese Einstellung besonders wirksam.",
        "Dritter Schritt: Stellen Sie Standortdienste auf den Modus 'Nur während der App-Nutzung'. Beschränken Sie unter 'Einstellungen > Standort > App-Berechtigungen' den Standortzugriff für jede App. Apps, die im Hintergrund Standorte senden (z. B. Wetter- oder Shopping-Apps), werden durch diese Einstellung eingeschränkt.",
        "Vierter Schritt: Setzen Sie die Werbe-ID zurück und deaktivieren Sie personalisierte Werbung. Verwenden Sie 'Einstellungen > Datenschutz > Werbung > Werbe-ID zurücksetzen'. Dies verhindert, dass Apps Sie über eine einzige ID verfolgen. QMOBILE Pixel-Geräte optimieren diese Einstellung standardmäßig.",
        "QMOBILE Pixel-basierte Geräte bieten wesentliche Vorteile beim Hintergrunddaten-Management. QMOBILE schränkt mit seinem BASEL-basierten Datenschutzansatz unnötigen Hintergrundverkehr auf Hardware-Ebene ein und zeigt dem Nutzer transparent, welche App wie viele Daten sendet. Dies bietet eine stärkere Datenschutzkontrolle als Standard-Android-Geräte.",
        "Auswirkungen auf die Privatsphäre: Das Blockieren von Hintergrunddaten reduziert das App-Tracking, verlängert die Akkulaufzeit und senkt Ihre mobilen Datenkosten. Einige Apps (z. B. E-Mail und Messaging) benötigen jedoch Hintergrunddaten für Benachrichtigungen. Markieren Sie daher beim Anwenden von Einschränkungen priorisierte Apps als Ausnahme.",
        "Für fortgeschrittene Nutzer: Verwenden Sie für Netzwerkebene-Kontrolle Firewall-Apps (NetGuard, RethinkDNS). Diese Apps können den Internetzugang bestimmter Apps vollständig blockieren. QMOBILE-Geräte sind mit solchen Tools kompatibel und geben dem Nutzer volle Kontrolle über den Netzwerkverkehr.",
      ],
      en: [
        "Your smartphone sends data in the background even when the screen is off. App updates, synchronization, location reporting, and advertising ID transmission are part of this traffic. This data flow can violate your privacy and consume your mobile data plan.",
        "First step to block background data: enable 'Settings > Network & Internet > Data usage > Data Saver' on Android. This mode restricts apps from sending data in the background. You can grant exceptions only to priority apps (e.g., messaging).",
        "Second step: disable background data per app. Turn off 'Settings > Apps > [App] > Mobile data & Wi-Fi > Background data'. This allows the app to send data only when open. For social media apps, this setting is especially effective.",
        "Third step: set location services to 'Only while using the app' mode. Restrict location access for each app under 'Settings > Location > App permissions'. Apps that send location in the background (e.g., weather or shopping apps) are restricted by this setting.",
        "Fourth step: reset the advertising ID and disable personalized ads. Use 'Settings > Privacy > Ads > Reset advertising ID'. This prevents apps from tracking you through a single ID. QMOBILE Pixel devices optimize this setting by default.",
        "QMOBILE Pixel-based devices offer significant advantages in background data management. QMOBILE, with its BASEL-based privacy approach, restricts unnecessary background traffic at the hardware level and transparently shows the user which app sends how much data. This provides stronger privacy control than standard Android devices.",
        "Privacy implications: blocking background data reduces app tracking, extends battery life, and lowers your mobile data costs. However, some apps (e.g., email and messaging) need background data for notifications. Therefore, when applying restrictions, mark priority apps as exceptions.",
        "For advanced users: use firewall apps (NetGuard, RethinkDNS) for network-level control. These apps can completely block internet access for specific apps. QMOBILE devices are compatible with such tools and give the user full control over network traffic.",
      ],
    },
    image: "blog/background-data-blocking.svg",
  },
  {
    slug: "vpn-nedir-ne-zaman-kullanilmali",
    category: "Gizlilik",
    title: {
      tr: "VPN Nedir? Ne Zaman Kullanılmalı?",
      de: "Was ist ein VPN? Wann sollte man es verwenden?",
      en: "What is a VPN? When Should You Use It?",
    },
    excerpt: {
      tr: "VPN'in amacını, doğru ve yanlış kullanım senaryolarını, gizlilik avantajlarını ve sınırlamalarını pratik örneklerle öğrenin.",
      de: "Erfahren Sie den Zweck eines VPN, richtige und falsche Anwendungsszenarien, Datenschutzvorteile und Grenzen anhand praktischer Beispiele.",
      en: "Learn the purpose of a VPN, correct and incorrect usage scenarios, privacy benefits, and limitations with practical examples.",
    },
    content: {
      tr: [
        "VPN (Virtual Private Network), internet trafiğinizi şifreleyen ve farklı bir konumdan bağlanıyormuş gibi gösteren bir teknolojidir. Basit bir benzetmeyle, VPN internete giderken arkanızda görünmez bir tünel açar. Bu tünelden geçen verileriniz, dışarıdan gelen gözler tarafından okunamaz.",
        "VPN ne zaman kullanılmalı? En yaygın senaryo, ortak Wi-Fi ağlarına bağlandığınızdadır. Kafe, havalimanı veya otel ağlarında trafiğiniz izlenebilir. VPN, bu ağlardaki 'ortadaki adam' (man-in-the-middle) saldırılarına karşı koruma sağlar. Ayrıca, İnternet Servis Sağlayıcınızın (ISS) tarama alışkanlıklarınızı kaydetmesini engeller.",
        "VPN'in doğru kullanım senaryoları: iş seyahatlerinde şirket ağına güvenli erişim, sansürlü içeriklere erişim (basın özgürlüğü bağlamında), ve ISS tabanlı izlemeyi engelleme. Örneğin, BASEL'den bir iş seyahatindeyken şirket içi kaynaklara erişmek için VPN kullanmak standart bir güvenlik uygulamasıdır.",
        "VPN'in yanlış kullanım senaryoları: VPN, anonimliği garanti etmez. VPN sağlayıcınız trafiğinizi görebilir ve bazı ücretsiz VPN'ler verilerinizi satar. Ayrıca, VPN kullanmak hızınızı düşürebilir; bu nedenle yüksek bant genişliği gerektiren işlemlerde (büyük dosya indirme) performans sorunları yaşayabilirsiniz.",
        "Proton VPN, İsviçre merkezli gizlilik odaklı bir VPN sağlayıcıdır. İsviçre'nin güçlü gizlilik yasaları ve Proton'un şeffaf kayıt politikası (no-logs policy), onu güvenilir bir seçenek yapar. QMOBILE, BASEL merkezli yaklaşımıyla kullanıcılarına İsviçre gizlilik standartlarına uygun araçları önerir.",
        "VPN sınırlamaları: VPN, tarayıcı çerezlerini, tarayıcı parmak izini (browser fingerprinting) veya uygulama içi izlemeyi engellemez. Tam gizlilik için VPN'i izleyici engelleyici tarayıcı eklentileri ve gizlilik odaklı tarayıcılarla birlikte kullanın. Ayrıca, VPN'in yasal olduğu ülkelerde bile bazı hizmetler VPN trafiğini engelleyebilir.",
        "Pratik adımlar: Güvenilir bir VPN seçin (Proton VPN, Mullvad gibi), uygulamanın 'öldürme anahtarı' (kill switch) özelliğini etkinleştirin — bu, VPN bağlantısı kesilirse verilerinizin şifresiz sızmasını engeller — ve bağlantı protokolini WireGuard olarak ayarlayın. WireGuard, modern, hızlı ve güvenli bir protokoldür.",
      ],
      de: [
        "Ein VPN (Virtual Private Network) ist eine Technologie, die Ihren Internetverkehr verschlüsselt und so darstellt, als ob Sie sich von einem anderen Standort aus verbinden. Als einfache Analogie: Ein VPN öffnet beim Surfen im Internet einen unsichtbaren Tunnel hinter Ihnen. Die Daten, die durch diesen Tunnel gehen, können von außen nicht gelesen werden.",
        "Wann sollte ein VPN verwendet werden? Das häufigste Szenario ist, wenn Sie sich mit öffentlichen WLAN-Netzwerken verbinden. In Café-, Flughafen- oder Hotelnetzwerken kann Ihr Verkehr überwacht werden. Ein VPN schützt vor 'Man-in-the-Middle'-Angriffen in diesen Netzwerken. Außerdem verhindert es, dass Ihr Internetdienstanbieter (ISP) Ihre Surfgewohnheiten aufzeichnet.",
        "Richtige VPN-Anwendungsszenarien: sicherer Zugriff auf das Firmennetzwerk auf Geschäftsreisen, Zugang zu zensierten Inhalten (im Kontext der Pressefreiheit) und Verhinderung der ISP-basierten Überwachung. Beispielsweise ist die Verwendung eines VPN für den Zugriff auf interne Unternehmensressourcen während einer Geschäftsreise von BASEL aus eine Standard-Sicherheitspraxis.",
        "Falsche VPN-Anwendungsszenarien: Ein VPN garantiert keine Anonymität. Ihr VPN-Anbieter kann Ihren Verkehr sehen, und einige kostenlose VPNs verkaufen Ihre Daten. Außerdem kann ein VPN Ihre Geschwindigkeit verringern; daher können bei bandbreitenintensiven Vorgängen (große Datei-Downloads) Leistungsprobleme auftreten.",
        "Proton VPN ist ein datenschutzorientierter VPN-Anbieter mit Hauptsitz in der Schweiz. Die strengen Schweizer Datenschutzgesetze und die transparente No-Logs-Richtlinie von Proton machen ihn zu einer vertrauenswürdigen Option. QMOBILE empfiehlt mit seinem BASEL-basierten Ansatz Nutzern Werkzeuge, die den Schweizer Datenschutzstandards entsprechen.",
        "VPN-Grenzen: Ein VPN blockiert keine Browser-Cookies, Browser-Fingerprinting oder In-App-Tracking. Für vollständige Privatsphäre verwenden Sie VPN in Kombination mit Tracker-Blocker-Browser-Erweiterungen und datenschutzorientierten Browsern. Außerdem können einige Dienste VPN-Verkehr blockieren, selbst in Ländern, in denen VPNs legal sind.",
        "Praktische Schritte: Wählen Sie einen vertrauenswürdigen VPN-Anbieter (wie Proton VPN, Mullvad), aktivieren Sie die 'Kill Switch'-Funktion der App — dies verhindert, dass Ihre Daten unverschlüsselt entweichen, wenn die VPN-Verbindung abbricht — und stellen Sie das Verbindungsprotokoll auf WireGuard ein. WireGuard ist ein modernes, schnelles und sicheres Protokoll.",
      ],
      en: [
        "A VPN (Virtual Private Network) is a technology that encrypts your internet traffic and makes it appear as if you are connecting from a different location. As a simple analogy: a VPN opens an invisible tunnel behind you when you go online. The data passing through this tunnel cannot be read by outside eyes.",
        "When should you use a VPN? The most common scenario is when you connect to public Wi-Fi networks. In café, airport, or hotel networks, your traffic can be monitored. A VPN protects against 'man-in-the-middle' attacks in these networks. It also prevents your Internet Service Provider (ISP) from logging your browsing habits.",
        "Correct VPN usage scenarios: secure access to company network on business trips, access to censored content (in the context of press freedom), and preventing ISP-based surveillance. For example, using a VPN to access internal company resources during a business trip from BASEL is a standard security practice.",
        "Incorrect VPN usage scenarios: a VPN does not guarantee anonymity. Your VPN provider can see your traffic, and some free VPNs sell your data. Also, using a VPN can reduce your speed; therefore, you may experience performance issues with bandwidth-intensive operations (large file downloads).",
        "Proton VPN is a privacy-focused VPN provider based in Switzerland. Switzerland's strong privacy laws and Proton's transparent no-logs policy make it a trustworthy option. QMOBILE, with its BASEL-based approach, recommends tools to users that comply with Swiss privacy standards.",
        "VPN limitations: a VPN does not block browser cookies, browser fingerprinting, or in-app tracking. For complete privacy, use a VPN in combination with tracker-blocking browser extensions and privacy-focused browsers. Also, some services may block VPN traffic even in countries where VPNs are legal.",
        "Practical steps: choose a trustworthy VPN provider (such as Proton VPN, Mullvad), enable the app's 'kill switch' feature — this prevents your data from leaking unencrypted if the VPN connection drops — and set the connection protocol to WireGuard. WireGuard is a modern, fast, and secure protocol.",
      ],
    },
    image: "blog/vpn-security.svg",
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
        "Stalkerware (takip yazılımları), cihazınıza gizlice yüklenen ve sizi izlemek için kullanılan uygulamalardır. Bu tür uygulamalar genellikle bir partner, ebeveyn veya işveren tarafından 'denetim' amacıyla kurulur. Cihazınızda adı tanıdık olmayan, pil tüketimi yüksek ve arka planda sürekli çalışan uygulamalar varsa stalkerware şüphesi uyandırabilir.",
        "Stalkerware belirtileri arasında şunlar yer alır: bataryanın normalden hızlı bitmesi, veri kullanımında açıklanamayan artış, telefonda tanımadığınız uygulamaların görünmesi ve cihazın aniden ısınması. Ayrıca bazı stalkerware türleri, kurulumdan sonra uygulama simgesini gizleyerek tespiti zorlaştırır.",
        "Tespit yöntemleri arasında, güvenlik odaklı işletim sistemlerinde bulunan 'Erişim günlükleri' (access logs) özelliğini kullanmak gelir. Bu günlükler, hangi uygulamanın hangi izne ne zaman eriştiğini gösterir. Mikrofon, kamera ve konum erişimlerini düzenli olarak denetleyin. Şüpheli bir uygulama bulursanız, izinlerini hemen iptal edin ve uygulamayı kaldırın.",
        "Korunma adımları: cihazınıza fiziksel erişimi sınırlayın, güçlü bir ekran kilidi kullanın ve bilinmeyen kaynaklardan uygulama yüklemeyi devre dışı bırakın. QMOBILE Pixel tabanlı cihazlar, uygulama yükleme sürecini sıkı bir şekilde denetler ve yalnızca güvenilir kaynaklardan gelen uygulamalara izin verir. Bu, stalkerware kurulumunu büyük ölçüde engeller.",
        "Yasal boyut: Birçok ülkede stalkerware kurmak ve kullanmak suçtur. İsviçre'de, bir kişinin izni olmadan onu dijital olarak izlemek gizlilik ihlali sayılır ve ciddi yaptırımlara tabidir. QMOBILE, BASEL merkezli yaklaşımıyla kullanıcılarını bu tür tehditlere karşı bilgilendirir ve hukuki hakları konusunda destekler. Şüpheli bir durumda, cihazınızı sıfırlamadan önce dijital delilleri güvenli bir şekilde saklayın ve yetkili makamlara başvurun.",
      ],
      de: [
        "Moderne Apps verwenden umfassende Datenerfassungstechniken, um Benutzerverhalten, Standorte und sogar Mikrofon-/Kamerazugriffe zu verfolgen.",
        "Überprüfen Sie App-Berechtigungen regelmäßig. Beschränken Sie im Hintergrund laufende Apps. Verwenden Sie Firewall-Apps, um den Netzwerkverkehr zu überwachen.",
        "Sicherheitsorientierte Betriebssysteme stellen durch App-Sandboxing und Netzwerkeinschränkungen sicher, dass jede App nur auf notwendige Daten zugreifen kann. Installieren Sie keine Apps aus unbekannten Quellen.",
        "Stalkerware sind Apps, die heimlich auf Ihrem Gerät installiert und zur Überwachung verwendet werden. Solche Apps werden oft von einem Partner, Elternteil oder Arbeitgeber zu 'Kontrollzwecken' installiert. Apps auf Ihrem Gerät mit unbekanntem Namen, hohem Akkuverbrauch und dauerhafter Hintergrundaktivität können den Verdacht auf Stalkerware erwecken.",
        "Zu den Stalkerware-Anzeichen gehören: ein schneller als normal entladener Akku, unerklärliche Zunahme der Datennutzung, das Auftauchen unbekannter Apps und plötzliches Erwärmen des Geräts. Einige Stalkerware-Arten verbergen zudem nach der Installation ihr App-Symbol, was die Erkennung erschwert.",
        "Zu den Erkennungsmethoden gehört die Nutzung der 'Zugriffsprotokolle' (access logs), die auf sicherheitsorientierten Betriebssystemen verfügbar sind. Diese Protokolle zeigen, welche App wann auf welche Berechtigung zugegriffen hat. Überprüfen Sie Mikrofon-, Kamera- und Standortzugriffe regelmäßig. Wenn Sie eine verdächtige App finden, widerrufen Sie sofort ihre Berechtigungen und deinstallieren Sie die App.",
        "Schutzmaßnahmen: Beschränken Sie den physischen Zugriff auf Ihr Gerät, verwenden Sie eine starke Bildschirmsperre und deaktivieren Sie die Installation von Apps aus unbekannten Quellen. QMOBILE Pixel-basierte Geräte überwachen den App-Installationsprozess streng und erlauben nur Apps aus vertrauenswürdigen Quellen. Dies verhindert Stalkerware-Installationen weitgehend.",
        "Rechtliche Dimension: In vielen Ländern ist die Installation und Verwendung von Stalkerware strafbar. In der Schweiz gilt die digitale Überwachung einer Person ohne deren Zustimmung als Datenschutzverletzung und unterliegt schweren Sanktionen. QMOBILE informiert mit seinem BASEL-basierten Ansatz Nutzer über solche Bedrohungen und unterstützt sie bei ihren rechtlichen Rechten. Bewahren Sie bei einem Verdachtsfall digitale Beweise sicher auf, bevor Sie das Gerät zurücksetzen, und wenden Sie sich an die zuständigen Behörden.",
      ],
      en: [
        "Modern apps use extensive data collection techniques to track user behavior, locations, and even microphone/camera access.",
        "Regularly audit app permissions. Limit background running apps. Use firewall apps to monitor network traffic.",
        "Security-focused operating systems ensure that each app only accesses necessary data through app sandboxing and network restrictions. Do not install apps from unknown sources.",
        "Stalkerware refers to apps secretly installed on your device and used to monitor you. Such apps are often installed by a partner, parent, or employer for 'control' purposes. Apps on your device with unfamiliar names, high battery consumption, and constant background activity can raise stalkerware suspicion.",
        "Stalkerware symptoms include: battery draining faster than normal, unexplained increase in data usage, appearance of unfamiliar apps, and sudden device heating. Some types of stalkerware also hide their app icon after installation, making detection harder.",
        "Detection methods include using the 'access logs' feature available on security-focused operating systems. These logs show which app accessed which permission and when. Regularly audit microphone, camera, and location access. If you find a suspicious app, immediately revoke its permissions and uninstall the app.",
        "Protection steps: limit physical access to your device, use a strong screen lock, and disable installation of apps from unknown sources. QMOBILE Pixel-based devices strictly monitor the app installation process and only allow apps from trusted sources. This largely prevents stalkerware installation.",
        "Legal dimension: In many countries, installing and using stalkerware is a crime. In Switzerland, digitally monitoring a person without their consent is considered a privacy violation and is subject to severe sanctions. QMOBILE, with its BASEL-based approach, informs users about such threats and supports them regarding their legal rights. In a suspected case, preserve digital evidence safely before resetting your device and contact the relevant authorities.",
      ],
    },
    image: "blog/app-espionage.svg",
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
        "IMSI catcher'ların çalışma prensibi, telefonunuzun kimlik kartı olan IMSI numarasını ele geçirmeye dayanır. Cihazınız sahte istasyona bağlandığında, IMSI numaranız kaydedilir ve bu numara üzerinden sizi takip etmek mümkün hale gelir. Bu yöntem, özellikle kalabalık alanlarda (havalimanları, mitingler, alışveriş merkezleri) sessizce uygulanabilir.",
        "SS7 (Signaling System 7) zafiyetleri, telefon şirketlerinin birbirleriyle haberleştiği protokoldeki açıklardır. Bu zafiyetler sayesinde saldırganlar, dünyanın diğer ucundan bile SMS'lerinizi okuyabilir, aramalarınızı yönlendirebilir ve konumunuzu öğrenebilir. SS7 saldırıları, IMSI catcher'lardan farklı olarak fiziksel yakınlık gerektirmez.",
        "Sinyal istihbaratı (SIGINT), devletler ve büyük kurumlar tarafından kullanılan geniş kapsamlı bir izleme yöntemidir. Bu sistemler, baz istasyonu verilerini toplayarak belirli kişilerin hareket haritasını çıkarabilir. Bu nedenle konum verilerinizin gizliliği, yalnızca telefonunuzdaki ayarlarla değil, altyapı düzeyinde de ilgilidir.",
        "Savunma yöntemleri arasında en etkili olanı, 2G ağını tamamen devre dışı bıkmaktır. 2G ağları, modern şifreleme standartlarını desteklemez ve IMSI catcher saldırılarına karşı en savunmasız katmandır. Android 12 ve üzeri sürümlerde bu ayar 'Ayarlar > Ağ ve İnternet > SIM'ler > 2G'yi devre dışı bırak' yoluyla erişilebilir.",
        "QMOBILE, BASEL merkezli gizlilik odaklı yaklaşımıyla Pixel tabanlı cihazlarında 2G bağlantısını varsayılan olarak kısıtlar. Bu sayede kullanıcılar, IMSI catcher saldırılarına karşı donanım ve yazılım düzeyinde korunmuş olur. QMOBILE cihazları, güvenlik güncellemelerini zamanında alarak SS7 ve benzeri zafiyetlere karşı da dirençli kalır.",
        "Ek bir koruma olarak, hassas görüşmelerinizi güvenli şifreleme (E2EE) sunan uygulamalar üzerinden yapın. Signal ve benzeri uygulamalar, sesli aramaları da uçtan uca şifreler ve bu sayede IMSI catcher veya SS7 saldırıları aramalarınızı dinleyemez. SMS tabanlı iki faktörlü kimlik doğrulama yerine uygulama tabanlı (TOTP) yöntemleri tercih edin.",
      ],
      de: [
        "IMSI-Catcher arbeiten als gefälschte Basisstationen und zwingen Ihr Telefon, sich mit ihnen zu verbinden. Auf diese Weise können sie Ihre Anrufe und Nachrichten abhören und Ihren Standort bestimmen.",
        "Diese Geräte können Ihr Telefon auf 2G/3G-Netzwerke herabstufen und die Verschlüsselung schwächen. Das Deaktivieren der 2G-Verbindung auf modernen Smartphones bietet wichtigen Schutz.",
        "Sicherheitsorientierte Betriebssysteme bieten zusätzliche Schutzschichten gegen gefälschte Basisstationen. Die Verwendung von Messaging-Apps mit sicherer Verschlüsselung (E2EE) erhöht außerdem Ihre Datensicherheit.",
        "Die Funktionsweise von IMSI-Catchern basiert auf dem Abfangen der IMSI-Nummer, der Identitätskarte Ihres Telefons. Wenn sich Ihr Gerät mit der gefälschten Station verbindet, wird Ihre IMSI-Nummer aufgezeichnet und ermöglicht die Nachverfolgung. Diese Methode kann unbemerkt insbesondere in belebten Bereichen (Flughäfen, Demonstrationen, Einkaufszentren) eingesetzt werden.",
        "SS7-Schwachstellen (Signaling System 7) sind Lücken im Protokoll, über das Telefonanbieter miteinander kommunizieren. Über diese Schwachstellen können Angreifer Ihre SMS lesen, Anrufe umleiten und Ihren Standort bestimmen – selbst vom anderen Ende der Welt. SS7-Angriffe erfordern im Gegensatz zu IMSI-Catchern keine physische Nähe.",
        "Signal Intelligence (SIGINT) ist eine umfassende Überwachungsmethode, die von Staaten und großen Organisationen eingesetzt wird. Diese Systeme sammeln Basisstationsdaten und können Bewegungsprofile bestimmter Personen erstellen. Daher hängt die Privatsphäre Ihrer Standortdaten nicht nur von den Einstellungen auf Ihrem Telefon ab, sondern auch von der Infrastruktur.",
        "Zu den wirksamsten Abwehrmethoden gehört die vollständige Deaktivierung des 2G-Netzwerks. 2G-Netze unterstützen keine modernen Verschlüsselungsstandards und sind am anfälligsten für IMSI-Catcher-Angriffe. Unter Android 12 und höher ist diese Einstellung unter 'Einstellungen > Netzwerk & Internet > SIMs > 2G deaktivieren' verfügbar.",
        "QMOBILE schränkt die 2G-Verbindung auf seinen Pixel-basierten Geräten standardmäßig ein und verfolgt einen datenschutzorientierten Ansatz mit Hauptsitz in BASEL. Dadurch sind Nutzer auf Hardware- und Software-Ebene vor IMSI-Catcher-Angriffen geschützt. QMOBILE-Geräte bleiben durch zeitnahe Sicherheitsupdates auch gegenüber SS7- und ähnlichen Schwachstellen widerstandsfähig.",
        "Als zusätzlicher Schutz sollten Sie sensible Gespräche über Apps mit sicherer Verschlüsselung (E2EE) führen. Signal und ähnliche Apps verschlüsseln auch Sprachanrufe Ende-zu-Ende, sodass IMSI-Catcher oder SS7-Angriffe Ihre Anrufe nicht abhören können. Bevorzugen Sie App-basierte (TOTP) Methoden gegenüber der SMS-basierten Zwei-Faktor-Authentifizierung.",
      ],
      en: [
        "IMSI catchers work as fake base stations and force your phone to connect to them. This way, they can listen to your calls and messages and determine your location.",
        "These devices can downgrade your phone to 2G/3G networks and weaken encryption. Disabling 2G connection on modern smartphones provides important protection.",
        "Security-focused operating systems offer additional layers of protection against fake base stations. Also, using messaging apps with secure encryption (E2EE) increases your data security.",
        "IMSI catchers work by intercepting the IMSI number, your phone's identity card. When your device connects to the fake station, your IMSI number is recorded and tracking becomes possible. This method can be applied silently, especially in crowded areas (airports, protests, shopping malls).",
        "SS7 (Signaling System 7) vulnerabilities are weaknesses in the protocol that telephone providers use to communicate with each other. Through these vulnerabilities, attackers can read your SMS, redirect your calls, and learn your location — even from the other side of the world. Unlike IMSI catchers, SS7 attacks do not require physical proximity.",
        "Signal Intelligence (SIGINT) is a broad surveillance method used by states and large organizations. These systems collect base station data and can build movement profiles of specific individuals. Therefore, the privacy of your location data depends not only on your phone settings but also on the infrastructure level.",
        "One of the most effective defense methods is to completely disable the 2G network. 2G networks do not support modern encryption standards and are the most vulnerable layer against IMSI catcher attacks. On Android 12 and above, this setting is available under 'Settings > Network & Internet > SIMs > Turn off 2G'.",
        "QMOBILE, with its privacy-focused approach headquartered in BASEL, restricts 2G connectivity by default on its Pixel-based devices. This way, users are protected against IMSI catcher attacks at both hardware and software levels. QMOBILE devices remain resistant to SS7 and similar vulnerabilities by receiving timely security updates.",
        "As additional protection, conduct sensitive conversations through apps that offer secure encryption (E2EE). Signal and similar apps encrypt voice calls end-to-end, so IMSI catchers or SS7 attacks cannot listen to your calls. Prefer app-based (TOTP) methods over SMS-based two-factor authentication.",
      ],
    },
    image: "blog/fake-base-stations.svg",
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
