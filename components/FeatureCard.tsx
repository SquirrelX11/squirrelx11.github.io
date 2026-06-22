import { GlassSurface } from "./GlassSurface";
import { Icon, type IconName } from "./Icon";

export type Feature = {
  icon: IconName;
  title: string;
  text: string;
};

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
    // NOTE: general marketing wording only — kept aligned with the audited app.
    title: "Privacy by design",
    text: "Your information stays under your control."
  }
];

export function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <GlassSurface as="article" className="feature-card glass-feature">
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
    <section className="container section" aria-labelledby="why-title">
      <div className="why-head">
        <p className="eyebrow">Why Squirrel Apps</p>
        <h2 id="why-title">Small apps, made with care.</h2>
      </div>
      <div className="feature-grid">
        {features.map((f) => (
          <FeatureCard key={f.title} feature={f} />
        ))}
      </div>
    </section>
  );
}
