import { I18nProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";
import { InternetIdentityProvider } from "@caffeineai/core-infrastructure";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import ReactDOM from "react-dom/client";
import { router } from "./App";
import "./index.css";

BigInt.prototype.toJSON = function () {
  return this.toString();
};

declare global {
  interface BigInt {
    toJSON(): string;
  }
}

const queryClient = new QueryClient();

// Fallback shown while a lazy route's chunk is being fetched. Mirrors the
// root route's pendingComponent so the loader is consistent everywhere.
const routePendingFallback = () => (
  <output
    aria-live="polite"
    className="flex min-h-[40vh] w-full items-center justify-center"
  >
    <span className="h-8 w-8 animate-spin rounded-full border-2 border-muted border-t-primary" />
    <span className="sr-only">Loading…</span>
  </output>
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <InternetIdentityProvider>
      <ThemeProvider>
        <I18nProvider>
          <RouterProvider
            router={router}
            defaultPendingComponent={routePendingFallback}
          />
        </I18nProvider>
      </ThemeProvider>
    </InternetIdentityProvider>
  </QueryClientProvider>,
);

if ("serviceWorker" in navigator && import.meta.env.PROD) {
  navigator.serviceWorker.register("/sw.js").catch(() => {
    /* silently ignore registration failures */
  });
}
