import MixinViews "mo:caffeineai-data-viewer/MixinViews";
import Expose "mo:caffeineai-oql/Expose";
import Entity "mo:caffeineai-oql/Entity";
import TextValue "mo:caffeineai-oql/TextValue";
import NatValue "mo:caffeineai-oql/NatValue";
import IntValue "mo:caffeineai-oql/IntValue";
import OQL "mo:caffeineai-oql";
import ContactEmailApi "mixins/contact-email-api";
import OrderEmailApi "mixins/order-email-api";
import OrderConfirmApi "mixins/order-confirm-api";
import OrderEmailLib "lib/order-email";

actor {
  let orders : OrderEmailLib.OrderStore;

  include MixinViews();
  include ContactEmailApi();
  include OrderEmailApi(orders);
  include OrderConfirmApi(orders);
  include Expose({
    entities = [
      OQL.Entity.manual<OrderEmailLib.OrderRecord>("order", func () = orders.values(), "OrderRecord", "token")
        .payload("token", func (r) = r.token)
        .payload("productName", func (r) = r.order.productName)
        .payload("quantity", func (r) = r.order.quantity)
        .payload("fullName", func (r) = r.order.fullName)
        .payload("email", func (r) = r.order.email)
        .payload("phone", func (r) = r.order.phone)
        .payload("city", func (r) = r.order.city)
        .payload("securityProfile", func (r) = r.order.securityProfile)
        .payload("lang", func (r) = r.order.lang)
        .payload("createdAt", func (r) = r.createdAt)
        .payload("status", func (r) = r.status)
        .controllerOnly()
        .build(),
    ];
  });
};
