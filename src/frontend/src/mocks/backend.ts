import type { backendInterface } from "../backend";

export const mockBackend: backendInterface = {
  send_contact_email: async () => "Message sent successfully",
};
