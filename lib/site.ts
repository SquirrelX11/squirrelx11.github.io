/**
 * Central site configuration.
 *
 * Everything brand- or environment-specific lives here so components never
 * hard-code values. Replace the fallbacks below (or set the matching
 * NEXT_PUBLIC_* environment variables) before a production build.
 */

/** Resolve an optional env value into a real string or `null` (never a placeholder). */
function optionalEnv(value: string | undefined): string | null {
  if (!value) return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  if (trimmed.startsWith("[") && trimmed.endsWith("]")) return null;
  return trimmed;
}

const supportEmail = optionalEnv(process.env.NEXT_PUBLIC_SUPPORT_EMAIL) ?? "alexblessingx@gmail.com";

// Owner-input reminder: surfaced at build time only (never rendered in the UI).
if (process.env.NODE_ENV !== "production" && !supportEmail) {
  console.warn(
    "[squirrel-apps] NEXT_PUBLIC_SUPPORT_EMAIL is not set — the footer/support pages link to the Support page instead of a mailto. Set it before production."
  );
}

export const siteConfig = {
  /** Studio brand. The single place to rename the studio. */
  studioName: process.env.NEXT_PUBLIC_STUDIO_NAME ?? "Squirrel Apps",
  /** Brand name shown in the header only (top of the page). */
  headerName: "Squirrel Studio",
  copyrightName: process.env.NEXT_PUBLIC_STUDIO_NAME ?? "Squirrel Apps",
  tagline: "Beautifully simple apps for everyday life.",

  /** Production domain (GitHub Pages user site). Override with NEXT_PUBLIC_SITE_URL. */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://squirrelx11.github.io",

  /** Support email — null when unset; UI links to the Support page instead of a fake mailto. */
  supportEmail,

  brand: {
    ogImage: "/brand/og-image.png"
  }
} as const;

/** Site routes in one place. */
export const routes = {
  home: "/",
  explore: "/#explore",
  apps: "/#explore",
  bday: "/apps/b-day",
  // Studio-level legal routes (kept working; mirror the B-DAY content for now).
  support: "/support",
  privacy: "/privacy",
  terms: "/terms",
  // App-specific (B-DAY) legal routes — canonical for the app.
  bdayPrivacy: "/apps/b-day/privacy",
  bdayTerms: "/apps/b-day/terms",
  bdaySupport: "/apps/b-day/support",
  bdayPrivacyChoices: "/apps/b-day/privacy-choices",
  // App-specific (Renewise) legal routes — canonical for the app.
  soon: "/apps/renewise",
  soonPrivacy: "/apps/renewise/privacy",
  soonTerms: "/apps/renewise/terms",
  soonSupport: "/apps/renewise/support",
  soonFaq: "/apps/renewise/faq",
  soonPrivacyChoices: "/apps/renewise/privacy-choices"
} as const;
