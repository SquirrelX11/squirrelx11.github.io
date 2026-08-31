import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { apps } from "@/lib/apps";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl.replace(/\/$/, "");
  const staticRoutes = ["/", "/support", "/privacy", "/terms"];
  const appRoutes = apps.map((app) => app.href);
  // Renewise legal sub-pages (indexable).
  const soonRoutes = [
    "/apps/renewise/privacy",
    "/apps/renewise/terms",
    "/apps/renewise/support",
    "/apps/renewise/faq",
    "/apps/renewise/privacy-choices"
  ];

  // Nesti legal sub-pages (indexable).
  const nestiRoutes = ["/apps/nesti/privacy", "/apps/nesti/terms", "/apps/nesti/support"];

  // Verden legal sub-pages (indexable). The app links to these directly.
  const verdenRoutes = [
    "/apps/verden/privacy",
    "/apps/verden/security",
    "/apps/verden/terms",
    "/apps/verden/support"
  ];

  // Chippy legal sub-pages (indexable). The App Store listing links to these.
  const chippyRoutes = ["/apps/chippy/privacy", "/apps/chippy/support"];

  return [...staticRoutes, ...appRoutes, ...soonRoutes, ...nestiRoutes, ...verdenRoutes, ...chippyRoutes].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.6
  }));
}
