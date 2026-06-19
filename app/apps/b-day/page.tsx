import type { Metadata } from "next";
import Link from "next/link";
import { appBySlug } from "@/lib/apps";
import { routes } from "@/lib/site";
import { GlassSurface } from "@/components/GlassSurface";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "B-DAY — Birthday Organizer for iPhone and Apple Watch",
  description:
    "B-DAY is a beautifully simple birthday organizer for iPhone and Apple Watch. Full product page coming soon.",
  alternates: { canonical: "/apps/b-day" }
};

/*
  Temporary B-DAY page so the "Meet B-DAY" / "Discover B-DAY" links never break.
  TODO: Replace with the full B-DAY product page (screenshots, features, App
  Store link) once assets and the audited copy are ready. Do NOT add fake
  screenshots or invented data here.
*/
export default function BdayPage() {
  const app = appBySlug("b-day");

  return (
    <main id="main" className="container page page-narrow">
      <p className="eyebrow">Featured App</p>
      <h1>{app?.name ?? "B-DAY"}</h1>
      <p>{app?.tagline ?? "Never miss a birthday that matters."}</p>
      <p>{app?.description}</p>

      <GlassSurface className="notice">
        <p>
          The full B-DAY page is coming soon. In the meantime, you can reach us through
          support if you have any questions.
        </p>
      </GlassSurface>

      <div className="hero-actions" style={{ marginTop: 26 }}>
        <Link href={routes.support} className="btn btn-ghost">
          Support
        </Link>
        <Link href={routes.home} className="btn btn-ghost">
          Back home
        </Link>
      </div>

      <Link href={routes.explore} className="back-link">
        <Icon name="arrow" /> All apps
      </Link>
    </main>
  );
}
