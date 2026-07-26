import { Layout } from "@/components/Layout";
import {
  Outlet,
  createRootRoute,
  createRoute,
  createRouter,
  lazyRouteComponent,
} from "@tanstack/react-router";

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
  // Pending fallback shown while any lazy route chunk is downloading.
  pendingComponent: () => (
    <output
      aria-live="polite"
      className="flex min-h-[40vh] w-full items-center justify-center"
    >
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-muted border-t-primary" />
      <span className="sr-only">Loading…</span>
    </output>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: lazyRouteComponent(() => import("@/pages/Home")),
});
const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products",
  component: lazyRouteComponent(() => import("@/pages/Products")),
});
const whyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/why",
  component: lazyRouteComponent(() => import("@/pages/Why")),
});
const compareRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/compare",
  component: lazyRouteComponent(() => import("@/pages/Compare")),
});
const securityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/security",
  component: lazyRouteComponent(() => import("@/pages/Security")),
});
const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: lazyRouteComponent(() => import("@/pages/Services")),
});
const faqRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/faq",
  component: lazyRouteComponent(() => import("@/pages/FAQ")),
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: lazyRouteComponent(() => import("@/pages/About")),
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: lazyRouteComponent(() => import("@/pages/Contact")),
});
const orderRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/order",
  component: lazyRouteComponent(() => import("@/pages/Order")),
});
const orderConfirmRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/order/confirm/$token",
  component: lazyRouteComponent(() => import("@/pages/OrderConfirm")),
});
const privacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/privacy",
  component: lazyRouteComponent(() => import("@/pages/Privacy")),
});
const termsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/terms",
  component: lazyRouteComponent(() => import("@/pages/Terms")),
});
const cookiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cookies",
  component: lazyRouteComponent(() => import("@/pages/Cookies")),
});
const agbRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/agb",
  component: lazyRouteComponent(() => import("@/pages/Agb")),
});
const salesContractRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/sales-contract",
  component: lazyRouteComponent(() => import("@/pages/SalesContract")),
});
const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog",
  component: lazyRouteComponent(() => import("@/pages/Blog")),
});
const blogPostRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog/$slug",
  component: lazyRouteComponent(() => import("@/pages/BlogPost")),
});
const techSpecsPixel8Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/googlepixel8/teknik-ozellikleri",
  component: lazyRouteComponent(() => import("@/pages/TechSpecsPixel8")),
});
const techSpecsPixel9Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/googlepixel9/teknik-ozellikleri",
  component: lazyRouteComponent(() => import("@/pages/TechSpecsPixel9")),
});
const techSpecsPixel10Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/googlepixel10/teknik-ozellikleri",
  component: lazyRouteComponent(() => import("@/pages/TechSpecsPixel10")),
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  productsRoute,
  whyRoute,
  compareRoute,
  securityRoute,
  servicesRoute,
  faqRoute,
  aboutRoute,
  contactRoute,
  orderRoute,
  orderConfirmRoute,
  privacyRoute,
  termsRoute,
  cookiesRoute,
  agbRoute,
  salesContractRoute,
  blogRoute,
  blogPostRoute,
  techSpecsPixel8Route,
  techSpecsPixel9Route,
  techSpecsPixel10Route,
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
