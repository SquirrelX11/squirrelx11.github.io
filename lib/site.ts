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
  // Guard against template placeholders like "[SUPPORT EMAIL]" leaking into the UI.
  if (trimmed.startsWith("[") && trimmed.endsWith("]")) return null;
  return trimmed;
}

export const siteConfig = {
  /**
   * TEMPORARY studio name. There is no official studio name yet, so it lives
   * in this one constant — change it here to rebrand the whole site.
   * Override at build time with NEXT_PUBLIC_STUDIO_NAME.
   */
  studioName: process.env.NEXT_PUBLIC_STUDIO_NAME ?? "B-DAY STUDIO",

  /** Shown in the copyright line. Falls back to the studio name. */
  copyrightName: process.env.NEXT_PUBLIC_STUDIO_NAME ?? "B-DAY STUDIO",

  /**
   * Production domain. Intentionally a clear placeholder — set
   * NEXT_PUBLIC_SITE_URL before the production build. Used for canonical
   * URLs, Open Graph, robots and sitemap.
   */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",

  /**
   * Support email. Resolves to `null` when unset — the UI then hides it and
   * never shows a fake address. Set NEXT_PUBLIC_SUPPORT_EMAIL to enable it.
   */
  supportEmail: optionalEnv(process.env.NEXT_PUBLIC_SUPPORT_EMAIL),

  /** Brand assets (replaceable without touching components). */
  brand: {
    // OG / social preview image. Placeholder path — drop the real file here later.
    ogImage: "/brand/og-image.png"
  }
} as const;

/** Site routes in one place. */
export const routes = {
  home: "/",
  explore: "/#explore",
  bday: "/apps/b-day",
  support: "/support",
  privacy: "/privacy",
  terms: "/terms"
} as const;
