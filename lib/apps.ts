/**
 * The studio's app catalog (data/config).
 *
 * Add a new app by appending an entry here and dropping its assets under
 * /public/apps/<slug>/ — the homepage and cards are config-driven, so no
 * layout duplication is needed.
 */

export type AppPlatform = "iPhone" | "Apple Watch" | "Widgets" | "iPad" | "Mac";

export type AppStatus = "available" | "coming-soon" | "in-development";

export interface AppDefinition {
  slug: string;
  name: string;
  /** Short marketing tagline. */
  tagline: string;
  /** One-sentence description for cards. */
  description: string;
  platforms: AppPlatform[];
  /**
   * App icon path. May not exist yet — components fall back to a calm glass
   * placeholder when the asset is missing (see <AppIcon />).
   */
  icon: string;
  status: AppStatus;
  featured: boolean;
  /** Route to the app's page. */
  href: string;
}

export const apps: AppDefinition[] = [
  {
    slug: "b-day",
    name: "B-DAY",
    tagline: "Never miss a birthday that matters.",
    description: "A beautifully simple birthday organizer for iPhone and Apple Watch.",
    platforms: ["iPhone", "Apple Watch", "Widgets"],
    // TODO: Drop the real B-DAY icon here. Until then <AppIcon /> shows a placeholder.
    icon: "/apps/b-day/icon.png",
    status: "coming-soon",
    featured: true,
    href: "/apps/b-day"
  }
  // Future apps go here — one entry, no layout changes required.
];

export function featuredApp(): AppDefinition | undefined {
  return apps.find((app) => app.featured) ?? apps[0];
}

export function appBySlug(slug: string): AppDefinition | undefined {
  return apps.find((app) => app.slug === slug);
}
