import { HeroSection } from "@/components/HeroSection";
import { ExploreSection } from "@/components/ExploreSection";
import { AdvantagesSection } from "@/components/FeatureCard";
import { BdayIntroSection } from "@/components/BdayIntroSection";

export default function HomePage() {
  return (
    <main id="main">
      <HeroSection />
      <ExploreSection />
      <AdvantagesSection />
      <BdayIntroSection />
    </main>
  );
}
