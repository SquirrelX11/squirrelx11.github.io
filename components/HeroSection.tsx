import Link from "next/link";
import { routes } from "@/lib/site";
import { Icon } from "./Icon";
import { HeroVisualPlaceholder } from "./HeroVisualPlaceholder";

export function HeroSection() {
  return (
    <section className="container hero" aria-labelledby="hero-title">
      <div className="hero-copy reveal">
        <p className="eyebrow">Independent App Studio</p>
        <h1 id="hero-title">
          Beautifully simple apps for <span className="grad-text">everyday life</span>.
        </h1>
        <p className="hero-sub">
          Thoughtful tools designed to make everyday moments easier.
        </p>
        <div className="hero-actions">
          {/* Smooth-scrolls to the Explore section (CSS scroll-behavior). */}
          <Link className="btn btn-primary" href={routes.explore}>
            Explore Apps
            <Icon name="arrow" />
          </Link>
          <Link className="btn btn-ghost" href={routes.bday}>
            Meet B-DAY
          </Link>
        </div>
      </div>

      <HeroVisualPlaceholder />
    </section>
  );
}
