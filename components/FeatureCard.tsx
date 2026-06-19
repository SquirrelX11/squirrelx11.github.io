import { GlassSurface } from "./GlassSurface";
import { Icon, type IconName } from "./Icon";

export type Feature = {
  icon: IconName;
  title: string;
  text: string;
};

/** Advantages section — three compact feature cards. */
const features: Feature[] = [
  {
    icon: "sparkles",
    title: "Thoughtfully simple",
    text: "Focused tools without unnecessary complexity."
  },
  {
    icon: "devices",
    title: "Made for Apple devices",
    text: "Designed for iPhone, Apple Watch and the Apple ecosystem."
  },
  {
    icon: "shield",
    title: "Privacy by design",
    // NOTE: General marketing wording only. Do NOT claim "we collect no data"
    // until the iOS project has been fully audited (see LEGAL_AUDIT_CHECKLIST.md).
    text: "Your information stays under your control."
  }
];

export function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <GlassSurface as="article" className="feature-card">
      <span className="feature-ic" aria-hidden="true">
        <Icon name={feature.icon} size={22} />
      </span>
      <h3>{feature.title}</h3>
      <p>{feature.text}</p>
    </GlassSurface>
  );
}

export function AdvantagesSection() {
  return (
    <section className="container section" aria-labelledby="advantages-title">
      <h2 id="advantages-title" className="sr-only">
        Why these apps
      </h2>
      <div className="feature-grid">
        {features.map((f) => (
          <FeatureCard key={f.title} feature={f} />
        ))}
      </div>
    </section>
  );
}
