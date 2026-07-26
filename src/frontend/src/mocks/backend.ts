import {
  ConfirmError,
  type backendInterface,
  type OrderSummary,
  type Result,
} from "../backend";

const sampleSummary: OrderSummary = {
  city: "Zürich",
  postalCode: "8001",
  lang: "tr",
  fullName: "Mehmet Yılmaz",
  securityProfile: "high",
  productName: "Google Pixel 9",
  email: "mehmet@example.com",
  streetNo: "Bahnhofstrasse 12",
  quantity: BigInt(2),
  phone: "+41 44 123 45 67",
  price: "3000",
};

export const mockBackend: backendInterface = {
  __orders: async (_ko: string | null, _count: bigint | null) => [],
  send_contact_email: async () => "Message sent successfully",
  send_order_email: async () => "Order sent successfully",
  schema: async () => "{}",
  execute: async (_qJson: string): Promise<Result> => ({
    hasMore: false,
    rows: [],
  }),
  confirm_order: async (token: string) => {
    // Token conventions for visual QA state verification:
    //   "success"          -> ok with sample summary
    //   "expired"          -> err expired
    //   "alreadyConfirmed" -> err alreadyConfirmed
    //   "notFound"         -> err notFound
    //   any other          -> err notFound (default)
    if (token === "success") {
      return { __kind__: "ok", ok: sampleSummary };
    }
    if (token === "expired") {
      return { __kind__: "err", err: ConfirmError.expired };
    }
    if (token === "alreadyConfirmed") {
      return { __kind__: "err", err: ConfirmError.alreadyConfirmed };
    }
    return { __kind__: "err", err: ConfirmError.notFound };
  },
};
