import MixinViews "mo:caffeineai-data-viewer/MixinViews";
import ContactEmailApi "mixins/contact-email-api";

actor {
  include MixinViews();
  include ContactEmailApi();
};
