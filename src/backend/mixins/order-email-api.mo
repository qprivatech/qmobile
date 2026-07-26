import OrderEmailLib "../lib/order-email";
import Types "../types/order-email";

mixin (orders : OrderEmailLib.OrderStore) {
  public func send_order_email(order : Types.OrderMessage) : async Text {
    await OrderEmailLib.createOrder(orders, order);
  };
};
