import type { Metadata } from "next";
import Link from "next/link";
import { appBySlug } from "@/lib/apps";
import { routes } from "@/lib/site";
import { GlassSurface } from "@/components/GlassSurface";
import { Icon, type IconName } from "@/components/Icon";
import { ChippySoundTest } from "@/components/ChippySoundTest";

export const metadata: Metadata = {
  title: "Chippy — Mechanical Keyboard Sounds for Mac",
  description:
    "Eleven switch and typewriter profiles for your Mac keyboard, built key by key. Try them in the browser before you buy — no download, no account.",
  alternates: { canonical: "/apps/chippy" }
};

const features = [
  {
    icon: "sparkles" as IconName,
    title: "Eleven profiles, two families",
    text: "Six mechanical switches, from a creamy linear to a clicky jacket nobody in the room will miss, and five typewriters — including one cut key by key from a recording of a real machine."
  },
  {
    icon: "widgets" as IconName,
    title: "Four voices on every board",
    text: "Letters, modifiers, Return and the spacebar all sound different, and the wide keys carry their own stabiliser rattle, because that is how a real keyboard behaves."
  },
  {
    icon: "devices" as IconName,
    title: "Placed across the keyboard",
    text: "Keys are panned by where they sit, so your left hand lands left and your right hand lands right. A small random shift in pitch and level keeps a held sentence from repeating itself."
  },
  {
    icon: "history" as IconName,
    title: "The typewriters go further",
    text: "Return is not a key — it is the whole carriage going home, with the lever, the ratchet and the stop. The margin bell rings a few characters before the edge of the paper, and resets on every return."
  },
  {
    icon: "bell" as IconName,
    title: "Tuned to taste",
    text: "Volume, release volume, pitch variation and stereo width, all live. Optional mouse clicks. Holding a key stays silent by default, the way a real one does."
  },
  {
    icon: "shield" as IconName,
    title: "It reads one thing",
    text: "The code of the key that moved, and whether it went down or up. Never the character, never the app you are in. Nothing is written to disk and nothing is sent anywhere."
  }
];

const shots = [
  {
    src: "/apps/chippy/shots/switches.webp",
    alt: "The Switches tab: eleven sound profiles laid out as cards, six mechanical switches above and five typewriters below.",
    caption: "Eleven profiles, each with its own colour, waveform and description."
  },
  {
    src: "/apps/chippy/shots/keyboard.webp",
    alt: "The Keyboard tab: a live on-screen keyboard lighting up as keys are pressed, with typing speed and stroke counts.",
    caption: "A live board shows exactly what Chippy hears — and nothing else."
  },
  {
    src: "/apps/chippy/shots/machine.webp",
    alt: "The Machine and Voicing panels: switches for the carriage return and margin bell, and sliders for volume, release, pitch and stereo width.",
    caption: "Carriage return and margin bell switch off; four sliders shape the rest."
  },
  {
    src: "/apps/chippy/shots/general.webp",
    alt: "The General tab: switches for typing sounds, key release, modifiers and mouse clicks, with the accessibility and startup section below.",
    caption: "Every voice can be turned off on its own, mouse clicks included."
  }
];

const privacy = [
  { icon: "lock" as IconName, text: "No accounts" },
  { icon: "shield" as IconName, text: "No analytics, ads or trackers" },
  { icon: "document" as IconName, text: "Nothing written to disk" },
  { icon: "cloud" as IconName, text: "No server on our side at all" },
  { icon: "iphone" as IconName, text: "Silent in password fields, by design" }
];

const resources = [
  { icon: "shield" as IconName, label: "Privacy Policy", href: routes.chippyPrivacy },
  { icon: "support" as IconName, label: "Support", href: routes.chippySupport }
];

export default function ChippyPage() {
  const app = appBySlug("chippy")!;

  return (
    <main id="main" className="container bday-page">
      <section className="section" aria-labelledby="chippy-title">
        <div className="reveal" style={{ textAlign: "center" }}>
          <span className="app-icon" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={app.icon} alt="" className="app-icon-img" />
          </span>
          <h1 id="chippy-title" style={{ marginTop: 14 }}>Chippy</h1>
          <p className="lead" style={{ maxWidth: 620, margin: "10px auto 0" }}>
            Every Mac keyboard, with the sound of a mechanical one. Lives in the
            menu bar and answers every key you press.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="chippy-try">
        <h2 id="chippy-try">Hear it right here</h2>
        <p className="lead" style={{ marginBottom: 18 }}>
          Pick a profile and type anywhere on this page. These are the app&rsquo;s
          own sounds — nothing to install to find out whether you like them.
        </p>
        <ChippySoundTest />
      </section>

      <section className="section" aria-labelledby="chippy-shots">
        <p className="eyebrow">A closer look</p>
        <h2 id="chippy-shots">Small app, quiet about it</h2>
        <div className="mac-shots" role="list">
          {shots.map((shot) => (
            <div className="mac-shot" role="listitem" key={shot.src}>
              <figure>
                <span className="mac-frame" style={{ display: "block" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={shot.src} alt={shot.alt} loading="lazy" />
                </span>
                <figcaption>{shot.caption}</figcaption>
              </figure>
            </div>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="chippy-features">
        <h2 id="chippy-features">What it does</h2>
        <div className="feature-grid">
          {features.map((feature) => (
            <GlassSurface key={feature.title} className="feature-card">
              <span className="feature-ic" aria-hidden="true"><Icon name={feature.icon} /></span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </GlassSurface>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="chippy-privacy">
        <h2 id="chippy-privacy">Private by design</h2>
        <ul className="privacy-list">
          {privacy.map((item) => (
            <li key={item.text} className="privacy-pill">
              <Icon name={item.icon} aria-hidden="true" />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
        <p className="lead" style={{ marginTop: 16 }}>
          Because it listens for key presses, macOS asks you to allow Chippy in
          Privacy &amp; Security → Input Monitoring — the permission meant for
          exactly that, watching input without acting on it. Every profile can be
          auditioned inside the app before you grant anything.
        </p>
      </section>

      <section className="section" aria-labelledby="chippy-resources">
        <h2 id="chippy-resources">Resources</h2>
        <div className="resource-grid">
          {resources.map((resource) => (
            <Link key={resource.href} href={resource.href} className="resource-link">
              <Icon name={resource.icon} aria-hidden="true" />
              <span>{resource.label}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
