/**
 * The studio's app catalog (data/config).
 *
 * Add a new app by appending an entry here and dropping its assets under
 * /public/apps/<slug>/ — the homepage and cards are config-driven.
 */

export type AppPlatform = "iPhone" | "Apple Watch" | "Widgets" | "iPad" | "Mac" | "Safari";
export type AppStatus = "available" | "coming-soon" | "in-development";

export interface AppDefinition {
  slug: string;
  name: string;
  tagline: string;
  /** Optional App Store-style subtitle shown under the name. */
  subtitle?: string;
  description: string;
  platforms: AppPlatform[];
  /** App icon (square). */
  icon: string;
  /** Promo/product artwork (iPhone + Watch + widget). */
  heroImage: string;
  status: AppStatus;
  featured: boolean;
  href: string;
}

export const apps: AppDefinition[] = [
  {
    slug: "b-day",
    name: "B-DAY",
    tagline: "Never miss a birthday that matters.",
    description: "Birthday reminders, widgets and Apple Watch support.",
    platforms: ["iPhone", "Apple Watch", "Widgets"],
    icon: "/apps/b-day/icon.webp",
    heroImage: "/images/b-day/iphone-today.webp",
    status: "available",
    featured: true,
    href: "/apps/b-day"
  },
  {
    slug: "soon",
    name: "Renewise",
    tagline: "Renew smarter. Spend better.",
    subtitle: "Renewals, trials and savings",
    description: "Track subscriptions and trials, get renewal reminders, and review before you pay — private by design.",
    platforms: ["iPhone", "Apple Watch", "Widgets"],
    icon: "/apps/renewise/icon.png",
    heroImage: "/apps/renewise/icon.png",
    status: "available",
    featured: false,
    href: "/apps/renewise"
  },
  {
    slug: "nesti",
    name: "Nesti",
    tagline: "Your web, the way you left it.",
    subtitle: "Visual speed dial for Safari",
    description:
      "A Safari start page of large visual cards: collections, tab groups and a flexible grid — local-first, with optional iCloud sync.",
    platforms: ["Mac", "iPhone", "Safari"],
    icon: "/apps/nesti/icon.png",
    heroImage: "/apps/nesti/icon.png",
    status: "coming-soon",
    featured: false,
    href: "/apps/nesti"
  },
  {
    slug: "verden",
    name: "Verden",
    tagline: "Be ready before you lose access.",
    subtitle: "Passwords, keys & recovery",
    description:
      "An encrypted vault for the things that get you back into your accounts: recovery phrases, backup codes, keys, and the plan for the day the phone is gone.",
    platforms: ["iPhone", "iPad"],
    icon: "/apps/verden/icon.png",
    heroImage: "/apps/verden/icon.png",
    status: "coming-soon",
    featured: false,
    href: "/apps/verden"
  }
  // Future apps go here — one entry, no layout changes required.
];

export function featuredApp(): AppDefinition | undefined {
  return apps.find((app) => app.featured) ?? apps[0];
}

export function appBySlug(slug: string): AppDefinition | undefined {
  return apps.find((app) => app.slug === slug);
}
