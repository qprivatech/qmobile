import EmailClient "mo:caffeineai-email/emailClient";
import Types "../types/contact-email";

module {
  public type ContactMessage = Types.ContactMessage;

  public func buildHtmlBody(message : ContactMessage) : Text {
    "<!DOCTYPE html>" #
    "<html><body style=\"font-family: Arial, sans-serif; line-height: 1.6; color: #333;\">" #
      "<h2 style=\"color: #2c3e50;\">Yeni İletişim Formu Mesajı</h2>" #
      "<table style=\"width: 100%; border-collapse: collapse;\">" #
        "<tr><td style=\"padding: 8px; font-weight: bold; width: 120px;\">Ad Soyad:</td>" #
        "<td style=\"padding: 8px;\">" # message.name # "</td></tr>" #
        "<tr><td style=\"padding: 8px; font-weight: bold;\">E-posta:</td>" #
        "<td style=\"padding: 8px;\"><a href=\"mailto:" # message.email # "\">" # message.email # "</a></td></tr>" #
        "<tr><td style=\"padding: 8px; font-weight: bold;\">Konu:</td>" #
        "<td style=\"padding: 8px;\">" # message.subject # "</td></tr>" #
      "</table>" #
      "<h3 style=\"color: #2c3e50; margin-top: 24px;\">Mesaj</h3>" #
      "<div style=\"padding: 12px; background-color: #f9f9f9; border-left: 4px solid #2c3e50; white-space: pre-wrap;\">" # message.message # "</div>" #
      "<p style=\"margin-top: 24px; font-size: 12px; color: #999;\">Bu e-posta iletişim formu üzerinden gönderilmiştir.</p>" #
    "</body></html>"
  };

  public func sendContactEmail(message : ContactMessage) : async Text {
    let htmlBody = buildHtmlBody(message);
    let result = await EmailClient.sendServiceEmail(
      "no-reply",
      ["Qprivate.ch@proton.me"],
      "İletişim Formu: " # message.subject,
      htmlBody,
    );
    switch (result) {
      case (#ok) { "Mesajınız başarıyla gönderildi." };
      case (#err(error)) { "E-posta gönderilemedi: " # error };
    };
  };
};
