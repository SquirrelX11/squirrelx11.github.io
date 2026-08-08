import type { Metadata } from "next";
import Link from "next/link";
import { appBySlug } from "@/lib/apps";
import { routes } from "@/lib/site";
import { GlassSurface } from "@/components/GlassSurface";
import { Icon, type IconName } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Nook — Visual Speed Dial for Safari on Mac and iPhone",
  description:
    "A Safari start page of large visual cards: collections, tab groups, a flexible grid and wallpapers — local-first, with optional private iCloud sync.",
  alternates: { canonical: "/apps/nook" }
};

const platformIcon: Record<string, IconName> = {
  Mac: "devices",
  iPhone: "iphone",
  Safari: "widgets"
};

const features = [
  {
    icon: "widgets" as IconName,
    title: "Cards, not a list of links",
    text: "Every site is a large visual card with its own preview and icon. Nook draws a cover of its own when a site offers none."
  },
  {
    icon: "devices" as IconName,
    title: "A grid that fits your screen",
    text: "1 to 3 columns on iPhone, 2 to 6 on Mac, with card size set separately. Narrow the window and Nook adapts, then returns to your choice."
  },
  {
    icon: "document" as IconName,
    title: "Collections",
    text: "Group sites the way you think about them — work, reading, whatever it is — and switch with one tap."
  },
  {
    icon: "history" as IconName,
    title: "Tab groups",
    text: "Save the tabs you have open as a named, coloured group and reopen the whole set later. Safari gives extensions no tab groups, so Nook keeps its own."
  },
  {
    icon: "sparkles" as IconName,
    title: "Import what you already have",
    text: "Nook offers to read your open tabs on first run and sorts them into collections for you. Nothing preinstalled, nothing to delete."
  },
  {
    icon: "cloud" as IconName,
    title: "Your Mac and your iPhone",
    text: "Optional sync through your own private iCloud keeps both start pages the same. Off by default; Nook works fully without it."
  }
];

// Only claims the shipping build actually keeps — see lib/nook-legal.ts.
const privacy = [
  { icon: "lock" as IconName, text: "No accounts" },
  { icon: "iphone" as IconName, text: "Local-first storage" },
  { icon: "cloud" as IconName, text: "Optional private iCloud sync" },
  { icon: "shield" as IconName, text: "No analytics, ads or trackers" },
  { icon: "document" as IconName, text: "No server on our side at all" }
];

const resources = [
  { icon: "shield" as IconName, label: "Privacy Policy", href: routes.nookPrivacy },
  { icon: "document" as IconName, label: "Terms of Use", href: routes.nookTerms },
  { icon: "support" as IconName, label: "Support", href: routes.nookSupport }
];

export default function NookPage() {
  const app = appBySlug("nook")!;

  return (
    <main id="main" className="container bday-page">
      <section className="section" aria-labelledby="nook-title">
        <div className="reveal" style={{ textAlign: "center" }}>
          <span className="app-icon" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={app.icon} alt="" className="app-icon-img" />
          </span>
          <h1 id="nook-title" style={{ marginTop: 14 }}>Nook</h1>
          <p className="bday-hero-tagline">Your web, the way you left it.</p>
          <p className="bday-hero-sub">
            A visual speed dial that replaces Safari&rsquo;s new tab page — on Mac and on
            iPhone.
          </p>
          <div className="badges" style={{ marginTop: 18, justifyContent: "center" }}>
            {app.platforms.map((p) => (
              <span className="badge" key={p}>
                <Icon name={platformIcon[p] ?? "devices"} size={14} />
                {p}
              </span>
            ))}
          </div>
          <div className="hero-actions" style={{ marginTop: 26, justifyContent: "center" }}>
            {/* Swap for the real App Store link once the apps are approved. */}
            <span className="availability-btn" aria-disabled="true">
              Coming soon on the App Store
            </span>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="nook-features-title">
        <div className="section-head">
          <p className="eyebrow">Features</p>
          <h2 id="nook-features-title">The sites you actually use, one tap away.</h2>
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

      <section className="section" aria-labelledby="nook-platform-title">
        <div className="section-head">
          <p className="eyebrow">Honest about the platform</p>
          <h2 id="nook-platform-title">What each device can do.</h2>
        </div>
        <div className="bday-feature-grid">
          <GlassSurface as="article" className="feature-card glass-feature">
            <span className="feature-ic" aria-hidden="true">
              <Icon name="devices" size={22} />
            </span>
            <h3>On Mac</h3>
            <p>
              Everything, plus page snapshots: the Nook app renders a saved page
              off-screen and uses that image as its card. Up to six columns, a full
              settings window and drag-and-drop across collections.
            </p>
          </GlassSurface>
          <GlassSurface as="article" className="feature-card glass-feature">
            <span className="feature-ic" aria-hidden="true">
              <Icon name="iphone" size={22} />
            </span>
            <h3>On iPhone</h3>
            <p>
              An interface built for the phone rather than a shrunken desktop: sheets,
              long-press menus, a floating toolbar and up to three columns. Snapshots
              are Mac-only — iOS gives extensions no way to render a page.
            </p>
          </GlassSurface>
        </div>
      </section>

      <section className="section" aria-labelledby="nook-privacy-title">
        <GlassSurface
          className="bday-cta"
          tone="soft"
          style={{ alignItems: "flex-start", flexDirection: "column" }}
        >
          <p className="eyebrow">Privacy</p>
          <h2 id="nook-privacy-title">Nothing leaves your device.</h2>
          <div className="privacy-list">
            {privacy.map((p) => (
              <span className="privacy-pill" key={p.text}>
                <Icon name={p.icon} size={15} />
                {p.text}
              </span>
            ))}
          </div>
          <Link href={routes.nookPrivacy} className="app-card-cta" style={{ marginTop: 18 }}>
            Read the Nook Privacy Policy
            <Icon name="arrow" />
          </Link>
        </GlassSurface>
      </section>

      <section className="section" aria-labelledby="nook-resources-title">
        <div className="section-head">
          <p className="eyebrow">Nook Resources</p>
          <h2 id="nook-resources-title">Help &amp; legal.</h2>
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
