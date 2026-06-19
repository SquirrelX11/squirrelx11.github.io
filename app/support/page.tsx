import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, routes } from "@/lib/site";
import { GlassSurface } from "@/components/GlassSurface";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Support — B-DAY Studio",
  description: "Need help with one of our apps? Get in touch.",
  alternates: { canonical: "/support" }
};

export default function SupportPage() {
  const { supportEmail } = siteConfig;

  return (
    <main id="main" className="container page page-narrow">
      <p className="eyebrow">Support</p>
      <h1>Support</h1>
      <p>Need help with one of our apps?</p>
      <GlassSurface className="notice">
        {/* No fake email: render contact only when configured (NEXT_PUBLIC_SUPPORT_EMAIL). */}
        {supportEmail ? (
          <p>
            Contact us at <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.
          </p>
        ) : (
          <p>Our support contact details are being set up and will appear here soon.</p>
        )}
      </GlassSurface>
      <Link href={routes.home} className="back-link">
        <Icon name="arrow" /> Back home
      </Link>
    </main>
  );
}
