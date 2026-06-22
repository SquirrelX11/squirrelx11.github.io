import Link from "next/link";
import { routes, siteConfig } from "@/lib/site";
import { Icon, type IconName } from "./Icon";

const chips: { icon: IconName; label: string }[] = [
  { icon: "iphone", label: "iPhone" },
  { icon: "watch", label: "Apple Watch" },
  { icon: "widgets", label: "Widgets" }
];

export function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="container hero">
        <div className="hero-copy reveal">
          <div className="hero-brand">
            <span className="hero-logo" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/squirrel-logo.webp" alt="" />
            </span>
            <span className="hero-brand-name">{siteConfig.studioName}</span>
          </div>

          <p className="eyebrow">Independent App Studio</p>
          <h1 id="hero-title">
            Nutty little apps for <span className="grad-text">everyday life</span>.
          </h1>
          <p className="hero-sub">Thoughtful tools designed to make everyday moments easier.</p>

          <div className="hero-chips">
            {chips.map((c) => (
              <span className="chip" key={c.label}>
                <Icon name={c.icon} size={14} />
                {c.label}
              </span>
            ))}
          </div>

          <div className="hero-actions">
            <Link className="btn btn-primary" href={routes.explore}>
              Explore Apps
              <Icon name="arrow" />
            </Link>
            <Link className="btn btn-ghost" href={routes.bday}>
              Discover B-DAY
              <Icon name="arrow" />
            </Link>
          </div>
        </div>

        {/* Product cluster: one cohesive group of separate device layers over a
            clean transparent orbit pattern + a single shared ambient glow. */}
        <div className="hero-product-stage" aria-hidden="true">
          {/* eslint-disable @next/next/no-img-element */}
          <img className="hero-orbit" src="/images/decor/orbit-particles.png" alt="" decoding="async" />
          <img className="hero-widget" src="/images/b-day/widget.png" alt="" decoding="async" />
          <img className="hero-phone" src="/images/b-day/iphone-today.png" alt="" loading="eager" decoding="async" />
          <img className="hero-watch" src="/images/b-day/watch.png" alt="" decoding="async" />
          {/* eslint-enable @next/next/no-img-element */}
        </div>
      </div>
    </section>
  );
}
