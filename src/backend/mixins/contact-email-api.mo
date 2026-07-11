import ContactEmailLib "../lib/contact-email";
import Types "../types/contact-email";

mixin () {
  public func send_contact_email(name : Text, email : Text, subject : Text, message : Text) : async Text {
    let contactMessage : Types.ContactMessage = {
      name;
      email;
      subject;
      message;
    };
    await ContactEmailLib.sendContactEmail(contactMessage);
  };
};
