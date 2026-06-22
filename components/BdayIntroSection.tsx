import Link from "next/link";
import { routes } from "@/lib/site";
import { featuredApp } from "@/lib/apps";
import { GlassSurface } from "./GlassSurface";
import { Icon } from "./Icon";

/** Compact horizontal B-DAY CTA (not a full-height banner). */
export function BdayIntroSection() {
  const app = featuredApp();

  return (
    <section className="container section" aria-labelledby="bday-cta-title">
      <GlassSurface tone="soft" className="bday-cta">
        <span className="app-icon" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={app?.icon ?? "/apps/b-day/icon.webp"} alt="" className="app-icon-img" />
        </span>
        <div className="bday-cta-copy">
          <h2 id="bday-cta-title">Remember the people who matter.</h2>
          <p>Discover B-DAY for iPhone, Apple Watch and widgets.</p>
        </div>
        <Link className="btn btn-primary" href={routes.bday}>
          Discover B-DAY
          <Icon name="arrow" />
        </Link>
      </GlassSurface>
    </section>
  );
}
