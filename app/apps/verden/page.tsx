import type { Metadata } from "next";
import Link from "next/link";
import { appBySlug } from "@/lib/apps";
import { routes } from "@/lib/site";
import { GlassSurface } from "@/components/GlassSurface";
import { Icon, type IconName } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Verden — Passwords, Keys & Recovery",
  description:
    "An encrypted vault for the things that get you back into your accounts: recovery phrases, backup codes, keys and the plan for the day you lose the phone.",
  alternates: { canonical: "/apps/verden" }
};

const platformIcon: Record<string, IconName> = {
  iPhone: "iphone",
  iPad: "devices",
  Widgets: "widgets"
};

const features = [
  {
    icon: "shield" as IconName,
    title: "A readiness score you can check",
    text: "One reading for how recoverable you are, and every point in it traced back to something you entered. It never guesses and never inspects your accounts."
  },
  {
    icon: "devices" as IconName,
    title: "The map of what depends on what",
    text: "One mailbox behind eleven accounts is a single point of failure you cannot see in a list. The map draws it, and names what falls over with it."
  },
  {
    icon: "history" as IconName,
    title: "Drills before the day itself",
    text: "Lost phone, stolen laptop, closed mailbox. Run the scenario and Verden tells you what you would still get back into — and what you would not."
  },
  {
    icon: "lock" as IconName,
    title: "Passwords, keys and phrases",
    text: "Seed phrases, private keys, API secrets and backup codes, encrypted with everything else and concealed until you ask. Optional autofill for the passwords."
  },
  {
    icon: "document" as IconName,
    title: "A capsule you can hand over",
    text: "Seal what someone would need into one file with its own key. Nothing readable sits outside the seal, and what goes in is decided per capsule."
  },
  {
    icon: "cloud" as IconName,
    title: "Your iCloud, or nothing at all",
    text: "Sync is optional and end-to-end encrypted with a key that never leaves your device. Apple stores ciphertext. So would we, if we stored anything."
  }
];

// Only claims the shipping build keeps — see lib/verden-legal.ts.
const privacy = [
  { icon: "lock" as IconName, text: "AES-256-GCM on your device" },
  { icon: "shield" as IconName, text: "No accounts, no user database" },
  { icon: "cloud" as IconName, text: "Optional private iCloud sync" },
  { icon: "iphone" as IconName, text: "The key never leaves your device" },
  { icon: "document" as IconName, text: "No analytics, ads or trackers" }
];

const resources = [
  { icon: "shield" as IconName, label: "Privacy Policy", href: routes.verdenPrivacy },
  { icon: "lock" as IconName, label: "Security", href: routes.verdenSecurity },
  { icon: "document" as IconName, label: "Terms of Use", href: routes.verdenTerms },
  { icon: "support" as IconName, label: "Support", href: routes.verdenSupport }
];

export default function VerdenPage() {
  const app = appBySlug("verden")!;

  return (
    <main id="main" className="container bday-page">
      <section className="section" aria-labelledby="verden-title">
        <div className="reveal" style={{ textAlign: "center" }}>
          <span className="app-icon" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={app.icon} alt="" className="app-icon-img" />
          </span>
          <h1 id="verden-title" style={{ marginTop: 14 }}>Verden</h1>
          <p className="bday-hero-tagline">Be ready before you lose access.</p>
          <p className="bday-hero-sub">
            An encrypted vault for the things that get you back in — recovery phrases,
            backup codes, keys, and the plan for the day the phone is gone.
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
            {/* Swap for the real App Store link once the app is approved. */}
            <span className="availability-btn" aria-disabled="true">
              Coming soon on the App Store
            </span>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="verden-features-title">
        <div className="section-head">
          <p className="eyebrow">Features</p>
          <h2 id="verden-features-title">The day you lose access is the wrong day to start.</h2>
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

      {/* A security app that overstates itself is worse than one that says less.
          These two cards exist so the limits are on the product page, not only
          in a policy nobody opens. */}
      <section className="section" aria-labelledby="verden-honest-title">
        <div className="section-head">
          <p className="eyebrow">Honest about the limits</p>
          <h2 id="verden-honest-title">What it does, and what it will not pretend.</h2>
        </div>
        <div className="bday-feature-grid">
          <GlassSurface as="article" className="feature-card glass-feature">
            <span className="feature-ic" aria-hidden="true">
              <Icon name="shield" size={22} />
            </span>
            <h3>Nobody can open it for you</h3>
            <p>
              Your Master Recovery Phrase is generated on the device, shown once and
              stored nowhere — not with us, not in iCloud. There is no escrow, no reset
              and no support procedure that can stand in for it. Write it down.
            </p>
          </GlassSurface>
          <GlassSurface as="article" className="feature-card glass-feature">
            <span className="feature-ic" aria-hidden="true">
              <Icon name="sparkles" size={22} />
            </span>
            <h3>It does not inspect your accounts</h3>
            <p>
              Verden cannot read Apple Passwords, list your passkeys or ask a service
              whether your two-factor is on. Everything it shows is built from what you
              entered or confirmed — and it says so on the screen where it shows it.
            </p>
          </GlassSurface>
        </div>
      </section>

      <section className="section" aria-labelledby="verden-privacy-title">
        <GlassSurface
          className="bday-cta"
          tone="soft"
          style={{ alignItems: "flex-start", flexDirection: "column" }}
        >
          <p className="eyebrow">Privacy</p>
          <h2 id="verden-privacy-title">We do not hold the key.</h2>
          <div className="privacy-list">
            {privacy.map((p) => (
              <span className="privacy-pill" key={p.text}>
                <Icon name={p.icon} size={15} />
                {p.text}
              </span>
            ))}
          </div>
          <Link href={routes.verdenSecurity} className="app-card-cta" style={{ marginTop: 18 }}>
            Read how the encryption works
            <Icon name="arrow" />
          </Link>
        </GlassSurface>
      </section>

      <section className="section" aria-labelledby="verden-resources-title">
        <div className="section-head">
          <p className="eyebrow">Verden Resources</p>
          <h2 id="verden-resources-title">Help &amp; legal.</h2>
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
