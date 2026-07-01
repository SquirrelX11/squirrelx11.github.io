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

/** Featured app card (B-DAY). The whole card is a link to the app page. */
export function AppCard({ app, eyebrow = "Featured App" }: { app: AppDefinition; eyebrow?: string }) {
  return (
    <Link
      href={app.href}
      className="glass glass-violet app-card"
      aria-label={`${app.name} — ${app.tagline}`}
    >
      <p className="eyebrow">{eyebrow}</p>

      <div className="app-card-head">
        <span className="app-icon" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={app.icon} alt="" className="app-icon-img" />
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
