import Link from "next/link";
import type { AppDefinition } from "@/lib/apps";
import { Icon, type IconName } from "./Icon";

const platformIcon: Record<string, IconName> = {
  iPhone: "iphone",
  "Apple Watch": "watch",
  Widgets: "widgets",
  iPad: "iphone",
  Mac: "devices"
};

/**
 * Featured app card (B-DAY). The whole card is a link to the app page.
 * The icon falls back to a calm glass tile when the asset is missing.
 */
export function AppCard({ app }: { app: AppDefinition }) {
  return (
    <Link
      href={app.href}
      className="glass glass-violet app-card"
      aria-label={`${app.name} — ${app.tagline}`}
    >
      <p className="eyebrow">Featured App</p>

      <div className="app-card-head">
        <span className="app-icon" aria-hidden="true">
          {/*
            TODO: Real B-DAY icon at /public/apps/b-day/icon.png. Until it
            exists we show a glass tile rather than an invented icon.
          */}
          <Icon name="sparkles" size={26} />
        </span>
        <h3>{app.name}</h3>
      </div>

      <p className="app-card-tagline">{app.tagline}</p>
      <p className="app-card-desc">{app.description}</p>

      <div className="badges">
        {app.platforms.map((p) => (
          <span className="badge" key={p}>
            <Icon name={platformIcon[p] ?? "iphone"} size={14} />
            {p}
          </span>
        ))}
      </div>

      <div className="app-card-foot">
        <span className="app-card-cta">
          Explore {app.name}
          <Icon name="arrow" />
        </span>
      </div>
    </Link>
  );
}
