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
    "/apps/soon/privacy",
    "/apps/soon/terms",
    "/apps/soon/support",
    "/apps/soon/faq",
    "/apps/soon/privacy-choices"
  ];

  return [...staticRoutes, ...appRoutes, ...soonRoutes].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.6
  }));
}
