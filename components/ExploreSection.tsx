import { apps, featuredApp } from "@/lib/apps";
import { AppCard } from "./AppCard";
import { ComingSoonCard } from "./ComingSoonCard";

/**
 * Every app in the catalog, the featured one first.
 *
 * This used to name two slugs by hand, which is why Nesti shipped a product
 * page that nothing on the homepage linked to. `lib/apps.ts` says adding an app
 * is one entry and no layout change; now that is actually true.
 */
export function ExploreSection() {
  const featured = featuredApp();
  const rest = apps.filter((app) => app.slug !== featured?.slug);

  return (
    <section id="explore" className="container section" aria-labelledby="explore-title">
      <div className="section-head">
        <p className="eyebrow">Explore</p>
        <h2 id="explore-title">Explore</h2>
        <p className="lead">Simple tools, thoughtfully made.</p>
      </div>

      <div className="explore-grid">
        {featured && <AppCard app={featured} />}
        {rest.map((app) => (
          <AppCard key={app.slug} app={app} eyebrow="New App" />
        ))}
        <ComingSoonCard />
      </div>
    </section>
  );
}
