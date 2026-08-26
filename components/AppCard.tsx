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

/** Featured app card. The body links to the app page; a live App Store badge sits
 *  in the footer for published apps (a real <a>, so it can't nest inside the body link). */
export function AppCard({ app, eyebrow = "Featured App" }: { app: AppDefinition; eyebrow?: string }) {
  return (
    <div className="glass glass-violet app-card">
      <Link href={app.href} className="app-card-body" aria-label={`${app.name} — ${app.tagline}`}>
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
      </Link>

      <div className="app-card-foot">
        <Link href={app.href} className="app-card-cta">
          Explore {app.name}
          <Icon name="arrow" />
        </Link>
        {app.appStoreUrl && (
          <a
            className="store-badge-link"
            href={app.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Download ${app.name} on the App Store`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="store-badge store-badge-sm" src={`${app.href}/appstore-badge.png`} alt="Download on the App Store" />
          </a>
        )}
      </div>
    </div>
  );
}
