import type { Metadata } from "next";
import Link from "next/link";
import { appBySlug } from "@/lib/apps";
import { routes } from "@/lib/site";
import { GlassSurface } from "@/components/GlassSurface";
import { Icon, type IconName } from "@/components/Icon";

export const metadata: Metadata = {
  title: "SooN — Subscription Organizer for iPhone and Apple Watch",
  description:
    "Track subscriptions and trials, get renewal reminders, review before you pay, and see your savings — private, local-first, with optional iCloud sync.",
  alternates: { canonical: "/apps/soon" }
};

const platformIcon: Record<string, IconName> = {
  iPhone: "iphone",
  "Apple Watch": "watch",
  Widgets: "widgets"
};

const features = [
  { icon: "iphone" as IconName, title: "All your subscriptions", text: "Every subscription and trial in one calm place, with prices, plans and renewal dates." },
  { icon: "bell" as IconName, title: "Renewal reminders", text: "Local reminders before a renewal or a trial converts — no server, no push service." },
  { icon: "shield" as IconName, title: "Renewal Check", text: "Review subscriptions before they renew: keep, remind, or manage — you decide." },
  { icon: "sparkles" as IconName, title: "Savings & forecasts", text: "See confirmed and projected savings and monthly / yearly totals from your own data." },
  { icon: "watch" as IconName, title: "Made for Apple Watch", text: "Check upcoming renewals and add a subscription right from your wrist." },
  { icon: "widgets" as IconName, title: "Beautiful widgets", text: "Upcoming renewals and this month's total on your Home and Lock Screen." }
];

// Only claims supported by the SooN privacy audit.
const privacy = [
  { icon: "lock" as IconName, text: "No account required" },
  { icon: "iphone" as IconName, text: "Local-first storage" },
  { icon: "cloud" as IconName, text: "Optional private iCloud sync" },
  { icon: "sparkles" as IconName, text: "No advertising or tracking" }
];

const resources = [
  { icon: "shield" as IconName, label: "Privacy Policy", href: routes.soonPrivacy },
  { icon: "document" as IconName, label: "Terms of Use", href: routes.soonTerms },
  { icon: "support" as IconName, label: "Support", href: routes.soonSupport },
  { icon: "message" as IconName, label: "FAQ", href: routes.soonFaq },
  { icon: "lock" as IconName, label: "Privacy Choices", href: routes.soonPrivacyChoices }
];

export default function SoonPage() {
  const app = appBySlug("soon")!;

  return (
    <main id="main" className="container bday-page">
      {/* Hero (single column — no device render assets yet) */}
      <section className="section" aria-labelledby="soon-title">
        <div className="reveal" style={{ textAlign: "center" }}>
          <span className="app-icon" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={app.icon} alt="" className="app-icon-img" />
          </span>
          <h1 id="soon-title" style={{ marginTop: 14 }}>SooN</h1>
          <p className="bday-hero-tagline">Know what renews. Keep what matters.</p>
          <p className="bday-hero-sub">
            A private, local-first subscription organizer for iPhone and Apple Watch.
          </p>
          <div className="badges" style={{ marginTop: 18, justifyContent: "center" }}>
            {app.platforms.map((p) => (
              <span className="badge" key={p}>
                <Icon name={platformIcon[p] ?? "iphone"} size={14} />
                {p}
              </span>
            ))}
          </div>
          <div className="hero-actions" style={{ marginTop: 26, justifyContent: "center" }}>
            {/* Non-clickable until a real App Store URL exists. */}
            <span className="availability-btn" aria-disabled="true">
              Coming soon on the App Store
            </span>
          </div>
        </div>
      </section>

      {/* Core features */}
      <section className="section" aria-labelledby="soon-features-title">
        <div className="section-head">
          <p className="eyebrow">Features</p>
          <h2 id="soon-features-title">Everything you pay for, in one place.</h2>
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
      <section className="section" aria-labelledby="soon-privacy-title">
        <GlassSurface className="bday-cta" tone="soft" style={{ alignItems: "flex-start", flexDirection: "column" }}>
          <p className="eyebrow">Privacy</p>
          <h2 id="soon-privacy-title">Private by design.</h2>
          <div className="privacy-list">
            {privacy.map((p) => (
              <span className="privacy-pill" key={p.text}>
                <Icon name={p.icon} size={15} />
                {p.text}
              </span>
            ))}
          </div>
          <Link href={routes.soonPrivacy} className="app-card-cta" style={{ marginTop: 18 }}>
            Read the SooN Privacy Policy
            <Icon name="arrow" />
          </Link>
        </GlassSurface>
      </section>

      {/* Resources */}
      <section className="section" aria-labelledby="soon-resources-title">
        <div className="section-head">
          <p className="eyebrow">SooN Resources</p>
          <h2 id="soon-resources-title">Help &amp; legal.</h2>
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
