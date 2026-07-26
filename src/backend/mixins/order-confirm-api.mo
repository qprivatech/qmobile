import OrderEmailLib "../lib/order-email";
import Types "../types/order-email";

mixin (orders : OrderEmailLib.OrderStore) {
  public func confirm_order(token : Text) : async Types.ConfirmResult {
    await OrderEmailLib.confirmOrder(orders, token);
  };
};
