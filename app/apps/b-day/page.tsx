import type { Metadata } from "next";
import Link from "next/link";
import { appBySlug } from "@/lib/apps";
import { routes } from "@/lib/site";
import { GlassSurface } from "@/components/GlassSurface";
import { Icon, type IconName } from "@/components/Icon";

export const metadata: Metadata = {
  title: "B-DAY — Birthday Organizer for iPhone and Apple Watch",
  description: "Remember every birthday with reminders, widgets and Apple Watch support.",
  alternates: { canonical: "/apps/b-day" }
};

const platformIcon: Record<string, IconName> = {
  iPhone: "iphone",
  "Apple Watch": "watch",
  Widgets: "widgets"
};

const features = [
  { icon: "bell" as IconName, title: "Never miss a birthday", text: "Get reminders exactly when you need them." },
  { icon: "widgets" as IconName, title: "Beautiful widgets", text: "See upcoming birthdays right from your Home Screen." },
  { icon: "watch" as IconName, title: "Made for Apple Watch", text: "Check birthdays and celebrate directly from your wrist." },
  { icon: "shield" as IconName, title: "Private by design", text: "Local-first storage with optional private iCloud sync." }
];

// Only claims supported by the current B-DAY privacy audit.
const privacy = [
  { icon: "lock" as IconName, text: "No account required" },
  { icon: "iphone" as IconName, text: "Local-first storage" },
  { icon: "cloud" as IconName, text: "Optional private iCloud sync" },
  { icon: "sparkles" as IconName, text: "No advertising or tracking" }
];

const resources = [
  { icon: "shield" as IconName, label: "Privacy Policy", href: routes.bdayPrivacy },
  { icon: "document" as IconName, label: "Terms of Use", href: routes.bdayTerms },
  { icon: "support" as IconName, label: "Support", href: routes.bdaySupport },
  { icon: "lock" as IconName, label: "Privacy Choices", href: routes.bdayPrivacyChoices }
];

export default function BdayPage() {
  const app = appBySlug("b-day")!;

  return (
    <main id="main" className="container bday-page">
      {/* Hero */}
      <section className="bday-hero" aria-labelledby="bday-title">
        <div className="reveal">
          <div className="bday-hero-head">
            <span className="app-icon" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={app.icon} alt="" className="app-icon-img" />
            </span>
            <h1 id="bday-title">B-DAY</h1>
          </div>
          <p className="bday-hero-tagline">Never miss the people who matter.</p>
          <p className="bday-hero-sub">
            A beautifully simple birthday organizer for iPhone and Apple Watch.
          </p>
          <div className="badges" style={{ marginTop: 18 }}>
            {app.platforms.map((p) => (
              <span className="badge" key={p}>
                <Icon name={platformIcon[p] ?? "iphone"} size={14} />
                {p}
              </span>
            ))}
          </div>
          <div className="hero-actions" style={{ marginTop: 26 }}>
            {/* Non-clickable until a real App Store URL exists. */}
            <span className="availability-btn" aria-disabled="true">
              Coming soon on the App Store
            </span>
          </div>
        </div>

        {/* Product cluster: same composed device scene as the home hero. */}
        <div className="hero-product-stage reveal reveal-2" aria-hidden="true">
          {/* eslint-disable @next/next/no-img-element */}
          <img className="hero-orbit" src="/images/decor/orbit-particles.png" alt="" decoding="async" />
          <img className="hero-widget" src="/images/b-day/widget.png" alt="" decoding="async" />
          <img className="hero-phone" src="/images/b-day/iphone-today.png" alt="" loading="eager" decoding="async" />
          <img className="hero-watch" src="/images/b-day/watch.png" alt="" decoding="async" />
          {/* eslint-enable @next/next/no-img-element */}
        </div>
      </section>

      {/* Core features */}
      <section className="section" aria-labelledby="bday-features-title">
        <div className="section-head">
          <p className="eyebrow">Features</p>
          <h2 id="bday-features-title">Everything for the dates that matter.</h2>
        </div>
        <div className="bday-feature-grid">
          {features.map((f) => (
            <GlassSurface as="article" key={f.title} className="feature-card glass-feature">
              <span className="feature-ic" aria-hidden="true">
                <Icon name={f.icon} size={22} />
              </span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </GlassSurface>
          ))}
        </div>
      </section>

      {/* Privacy */}
      <section className="section" aria-labelledby="bday-privacy-title">
        <GlassSurface className="bday-cta" tone="soft" style={{ alignItems: "flex-start", flexDirection: "column" }}>
          <p className="eyebrow">Privacy</p>
          <h2 id="bday-privacy-title">Private by design.</h2>
          <div className="privacy-list">
            {privacy.map((p) => (
              <span className="privacy-pill" key={p.text}>
                <Icon name={p.icon} size={15} />
                {p.text}
              </span>
            ))}
          </div>
          <Link href={routes.bdayPrivacy} className="app-card-cta" style={{ marginTop: 18 }}>
            Read the B-DAY Privacy Policy
            <Icon name="arrow" />
          </Link>
        </GlassSurface>
      </section>

      {/* Resources */}
      <section className="section" aria-labelledby="bday-resources-title">
        <div className="section-head">
          <p className="eyebrow">B-DAY Resources</p>
          <h2 id="bday-resources-title">Help &amp; legal.</h2>
        </div>
        <div className="resource-grid">
          {resources.map((r) => (
            <Link key={r.label} href={r.href} className="glass resource-link">
              <Icon name={r.icon} size={18} />
              {r.label}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
