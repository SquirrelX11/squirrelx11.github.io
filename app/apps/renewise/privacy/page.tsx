import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { soonPrivacyBody, soonLegalMeta } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Privacy Policy — Renewise",
  description:
    "How Renewise handles your information: local-first storage, optional private iCloud sync, on-device OCR, no analytics, no tracking, no third-party SDKs.",
  alternates: { canonical: "/apps/renewise/privacy" }
};

export default function Page() {
  return (
    <LegalLayout
      eyebrow="Renewise · Legal"
      title="Privacy Policy"
      body={soonPrivacyBody}
      meta={soonLegalMeta}
    />
  );
}
