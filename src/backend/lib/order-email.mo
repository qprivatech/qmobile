import EmailClient "mo:caffeineai-email/emailClient";
import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Nat8 "mo:core/Nat8";
import Random "mo:core/Random";
import Time "mo:core/Time";
import Types "../types/order-email";

module {
  public type OrderMessage = Types.OrderMessage;
  public type OrderRecord = Types.OrderRecord;
  public type OrderSummary = Types.OrderSummary;
  public type ConfirmResult = Types.ConfirmResult;
  public type ConfirmError = Types.ConfirmError;

  public type OrderStore = Map.Map<Text, OrderRecord>;

  let confirmBaseUrl : Text = "https://qmobile.ch/order/confirm/";
  let businessEmail : Text = "info@qmobile.ch";
  let sevenDaysMillis : Int = 604800000; // 7 * 24 * 60 * 60 * 1000 (literal: module-level let must be static)

  // --- Hex encoding for URL-safe random tokens ---

  let hexChars : [Text] = [
    "0", "1", "2", "3", "4", "5", "6", "7",
    "8", "9", "a", "b", "c", "d", "e", "f",
  ];

  func nat8ToHex(b : Nat8) : Text {
    let hi = Nat8.toNat(b / 16);
    let lo = Nat8.toNat(b % 16);
    hexChars[hi] # hexChars[lo]
  };

  // Generate a 16-byte (32 hex char) cryptographically random URL-safe token.
  func generateToken() : async Text {
    let random = Random.crypto();
    let bytes : [var Nat8] = [var 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (i in Nat.range(0, 16)) {
      bytes[i] := await* random.nat8();
    };
    var token = "";
    for (i in Nat.range(0, 16)) {
      token #= nat8ToHex(bytes[i]);
    };
    token
  };

  // --- Business notification email (Turkish, sent only on confirm) ---

  public func buildHtmlBody(order : OrderMessage) : Text {
    "<!DOCTYPE html>" #
    "<html><body style=\"font-family: Arial, sans-serif; line-height: 1.6; color: #333;\">" #
      "<h2 style=\"color: #2c3e50;\">Yeni Sipariş</h2>" #
      "<h3 style=\"color: #2c3e50;\">Ürün Bilgileri</h3>" #
      "<table style=\"width: 100%; border-collapse: collapse;\">" #
        "<tr><td style=\"padding: 8px; font-weight: bold; width: 160px;\">Ürün:</td>" #
        "<td style=\"padding: 8px;\">" # order.productName # "</td></tr>" #
        "<tr><td style=\"padding: 8px; font-weight: bold;\">Ürün ID:</td>" #
        "<td style=\"padding: 8px;\">" # order.productId # "</td></tr>" #
        "<tr><td style=\"padding: 8px; font-weight: bold;\">Adet:</td>" #
        "<td style=\"padding: 8px;\">" # order.quantity.toText() # "</td></tr>" #
      "</table>" #
      "<h3 style=\"color: #2c3e50; margin-top: 24px;\">Müşteri Bilgileri</h3>" #
      "<table style=\"width: 100%; border-collapse: collapse;\">" #
        "<tr><td style=\"padding: 8px; font-weight: bold; width: 160px;\">Ad Soyad:</td>" #
        "<td style=\"padding: 8px;\">" # order.fullName # "</td></tr>" #
        "<tr><td style=\"padding: 8px; font-weight: bold;\">E-posta:</td>" #
        "<td style=\"padding: 8px;\"><a href=\"mailto:" # order.email # "\">" # order.email # "</a></td></tr>" #
        "<tr><td style=\"padding: 8px; font-weight: bold;\">Telefon:</td>" #
        "<td style=\"padding: 8px;\">" # order.phone # "</td></tr>" #
      "</table>" #
      "<h3 style=\"color: #2c3e50; margin-top: 24px;\">Teslimat Adresi</h3>" #
      "<table style=\"width: 100%; border-collapse: collapse;\">" #
        "<tr><td style=\"padding: 8px; font-weight: bold; width: 160px;\">Sokak ve No:</td>" #
        "<td style=\"padding: 8px;\">" # order.streetNo # "</td></tr>" #
        "<tr><td style=\"padding: 8px; font-weight: bold;\">Posta Kodu:</td>" #
        "<td style=\"padding: 8px;\">" # order.postalCode # "</td></tr>" #
        "<tr><td style=\"padding: 8px; font-weight: bold;\">Şehir:</td>" #
        "<td style=\"padding: 8px;\">" # order.city # "</td></tr>" #
      "</table>" #
      "<h3 style=\"color: #2c3e50; margin-top: 24px;\">Güvenlik Profili</h3>" #
      "<table style=\"width: 100%; border-collapse: collapse;\">" #
        "<tr><td style=\"padding: 8px; font-weight: bold; width: 160px;\">Profil:</td>" #
        "<td style=\"padding: 8px;\">" # order.securityProfile # "</td></tr>" #
      "</table>" #
      "<h3 style=\"color: #2c3e50; margin-top: 24px;\">Güvenlik Notları</h3>" #
      "<div style=\"padding: 12px; background-color: #f9f9f9; border-left: 4px solid #2c3e50; white-space: pre-wrap;\">" # order.securityNotes # "</div>" #
      "<h3 style=\"color: #2c3e50; margin-top: 24px;\">Sözleşme Onayları</h3>" #
      "<table style=\"width: 100%; border-collapse: collapse;\">" #
        "<tr><td style=\"padding: 8px; font-weight: bold; width: 160px;\">Satış Sözleşmesi:</td>" #
        "<td style=\"padding: 8px;\">" # (if (order.contractAccepted) { "Kabul edildi" } else { "Kabul edilmedi" }) # "</td></tr>" #
        "<tr><td style=\"padding: 8px; font-weight: bold;\">Gizlilik Politikası:</td>" #
        "<td style=\"padding: 8px;\">" # (if (order.privacyAccepted) { "Kabul edildi" } else { "Kabul edilmedi" }) # "</td></tr>" #
      "</table>" #
      "<p style=\"margin-top: 24px; font-size: 12px; color: #999;\">Bu e-posta sipariş formu üzerinden gönderilmiştir.</p>" #
    "</body></html>"
  };

  // --- Localized customer confirmation email (sent at submission) ---

  func customerSubject(lang : Text) : Text {
    switch (lang) {
      case ("de") { "Ihre Bestellung ist eingegangen — bestätigen Sie?" };
      case ("en") { "Your order has been received — do you confirm?" };
      case _ { "Siparişiniz alındı — onaylıyor musunuz?" };
    }
  };

  func customerHtmlBody(order : OrderMessage, token : Text) : Text {
    let confirmLink = confirmBaseUrl # token;
    let (greeting, productLabel, quantityLabel, nameLink, addressLabel, streetLabel, postalLabel, cityLabel, profileLabel, confirmText, validityNote, footer) = switch (order.lang) {
      case ("de") {
        ("Guten Tag " # order.fullName # ",", "Produkt", "Menge", "Name", "Lieferadresse", "Straße und Nr.", "PLZ", "Stadt", "Sicherheitsprofil", "Bestellung bestätigen", "Dieser Link ist 7 Tage gültig.", "Diese E-Mail wurde automatisch gesendet — bitte nicht antworten.")
      };
      case ("en") {
        ("Hello " # order.fullName # ",", "Product", "Quantity", "Name", "Delivery address", "Street and no.", "Postal code", "City", "Security profile", "Confirm your order", "This link is valid for 7 days.", "This email was sent automatically — please do not reply.")
      };
      case _ {
        ("Merhaba " # order.fullName # ",", "Ürün", "Adet", "Ad Soyad", "Teslimat Adresi", "Sokak ve No", "Posta Kodu", "Şehir", "Güvenlik Profili", "Siparişinizi Onaylayın", "Bu bağlantı 7 gün geçerlidir.", "Bu e-posta otomatik gönderilmiştir — lütfen yanıtlamayın.")
      }
    };
    "<!DOCTYPE html>" #
    "<html><body style=\"font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;\">" #
      "<h2 style=\"color: #2c3e50;\">" # customerSubject(order.lang) # "</h2>" #
      "<p style=\"margin: 16px 0;\">" # greeting # "</p>" #
      "<h3 style=\"color: #2c3e50; margin-top: 24px;\">" # productLabel # "</h3>" #
      "<table style=\"width: 100%; border-collapse: collapse;\">" #
        "<tr><td style=\"padding: 8px; font-weight: bold; width: 160px;\">" # productLabel # ":</td>" #
        "<td style=\"padding: 8px;\">" # order.productName # "</td></tr>" #
        "<tr><td style=\"padding: 8px; font-weight: bold;\">" # quantityLabel # ":</td>" #
        "<td style=\"padding: 8px;\">" # order.quantity.toText() # "</td></tr>" #
      "</table>" #
      "<h3 style=\"color: #2c3e50; margin-top: 24px;\">" # nameLink # "</h3>" #
      "<table style=\"width: 100%; border-collapse: collapse;\">" #
        "<tr><td style=\"padding: 8px; font-weight: bold; width: 160px;\">" # nameLink # ":</td>" #
        "<td style=\"padding: 8px;\">" # order.fullName # "</td></tr>" #
        "<tr><td style=\"padding: 8px; font-weight: bold;\">E-posta:</td>" #
        "<td style=\"padding: 8px;\">" # order.email # "</td></tr>" #
        "<tr><td style=\"padding: 8px; font-weight: bold;\">Telefon:</td>" #
        "<td style=\"padding: 8px;\">" # order.phone # "</td></tr>" #
      "</table>" #
      "<h3 style=\"color: #2c3e50; margin-top: 24px;\">" # addressLabel # "</h3>" #
      "<table style=\"width: 100%; border-collapse: collapse;\">" #
        "<tr><td style=\"padding: 8px; font-weight: bold; width: 160px;\">" # streetLabel # ":</td>" #
        "<td style=\"padding: 8px;\">" # order.streetNo # "</td></tr>" #
        "<tr><td style=\"padding: 8px; font-weight: bold;\">" # postalLabel # ":</td>" #
        "<td style=\"padding: 8px;\">" # order.postalCode # "</td></tr>" #
        "<tr><td style=\"padding: 8px; font-weight: bold;\">" # cityLabel # ":</td>" #
        "<td style=\"padding: 8px;\">" # order.city # "</td></tr>" #
      "</table>" #
      "<h3 style=\"color: #2c3e50; margin-top: 24px;\">" # profileLabel # "</h3>" #
      "<table style=\"width: 100%; border-collapse: collapse;\">" #
        "<tr><td style=\"padding: 8px; font-weight: bold; width: 160px;\">" # profileLabel # ":</td>" #
        "<td style=\"padding: 8px;\">" # order.securityProfile # "</td></tr>" #
      "</table>" #
      "<div style=\"margin: 32px 0; text-align: center;\">" #
        "<a href=\"" # confirmLink # "\" style=\"display: inline-block; padding: 14px 32px; background-color: #2c3e50; color: #ffffff; text-decoration: none; font-weight: bold; border-radius: 6px;\">" # confirmText # "</a>" #
      "</div>" #
      "<p style=\"margin: 16px 0; font-size: 13px; color: #666;\">" # validityNote # "</p>" #
      "<p style=\"margin: 8px 0; font-size: 12px; color: #999; word-break: break-all;\">" # confirmLink # "</p>" #
      "<p style=\"margin-top: 24px; font-size: 12px; color: #999;\">" # footer # "</p>" #
    "</body></html>"
  };

  func toSummary(order : OrderMessage) : OrderSummary {
    {
      productName = order.productName;
      quantity = order.quantity;
      fullName = order.fullName;
      email = order.email;
      phone = order.phone;
      streetNo = order.streetNo;
      postalCode = order.postalCode;
      city = order.city;
      securityProfile = order.securityProfile;
      price = "-"; // OrderMessage has no price field; placeholder
      lang = order.lang;
    }
  };

  // --- Public API ---

  public func createOrder(store : OrderStore, order : OrderMessage) : async Text {
    let token = await generateToken();
    let record : OrderRecord = {
      token;
      order;
      createdAt = Time.now() / 1_000_000; // millis
      status = "pending";
    };
    store.add(token, record);
    let subject = customerSubject(order.lang);
    let htmlBody = customerHtmlBody(order, token);
    let result = await EmailClient.sendServiceEmail(
      "no-reply",
      [order.email],
      subject,
      htmlBody,
    );
    switch (result) {
      case (#ok) { token };
      case (#err(error)) { "Sipariş onay e-postası gönderilemedi: " # error };
    }
  };

  public func confirmOrder(store : OrderStore, token : Text) : async ConfirmResult {
    switch (store.get(token)) {
      case null { #err(#notFound) };
      case (?record) {
        if (record.status == "confirmed") {
          return #err(#alreadyConfirmed);
        };
        let nowMillis = Time.now() / 1_000_000;
        if (nowMillis - record.createdAt > sevenDaysMillis) {
          return #err(#expired);
        };
        let confirmed : OrderRecord = { record with status = "confirmed" };
        store.add(token, confirmed);
        // Single business notification to info@qmobile.ch (Turkish)
        let subject = "Onaylanan Sipariş: " # record.order.productName;
        let htmlBody = buildHtmlBody(record.order);
        let _ = await EmailClient.sendServiceEmail(
          "no-reply",
          [businessEmail],
          subject,
          htmlBody,
        );
        #ok(toSummary(record.order))
      };
    }
  };
};
