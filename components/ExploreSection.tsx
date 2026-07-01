import { featuredApp, appBySlug } from "@/lib/apps";
import { AppCard } from "./AppCard";
import { ComingSoonCard } from "./ComingSoonCard";

export function ExploreSection() {
  const app = featuredApp();
  const soon = appBySlug("soon");

  return (
    <section id="explore" className="container section" aria-labelledby="explore-title">
      <div className="section-head">
        <p className="eyebrow">Explore</p>
        <h2 id="explore-title">Explore</h2>
        <p className="lead">Simple tools, thoughtfully made.</p>
      </div>

      <div className="explore-grid">
        {app && <AppCard app={app} />}
        {soon && <AppCard app={soon} eyebrow="New App" />}
        <ComingSoonCard />
      </div>
    </section>
  );
}
