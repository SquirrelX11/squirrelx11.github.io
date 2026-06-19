import Link from "next/link";
import { routes } from "@/lib/site";
import { GlassSurface } from "./GlassSurface";
import { Icon } from "./Icon";

/** Short B-DAY band before the footer. Does not repeat the Explore card. */
export function BdayIntroSection() {
  return (
    <section className="container section" aria-labelledby="bday-intro-title">
      <GlassSurface tone="violet" className="bday-band">
        <p className="eyebrow">Meet B-DAY</p>
        <h2 id="bday-intro-title">Remember the people who matter.</h2>
        <p className="lead">
          B-DAY brings birthdays, reminders, widgets and Apple Watch support together in
          one beautifully simple app.
        </p>
        <Link className="btn btn-primary" href={routes.bday}>
          Discover B-DAY
          <Icon name="arrow" />
        </Link>
      </GlassSurface>
    </section>
  );
}
