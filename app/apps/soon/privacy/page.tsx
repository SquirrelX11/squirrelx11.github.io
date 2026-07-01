import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { soonPrivacyBody, soonLegalMeta } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Privacy Policy — SooN",
  description:
    "How SooN handles your information: local-first storage, optional private iCloud sync, on-device OCR, no analytics, no tracking, no third-party SDKs.",
  alternates: { canonical: "/apps/soon/privacy" }
};

export default function Page() {
  return (
    <LegalLayout
      eyebrow="SooN · Legal"
      title="Privacy Policy"
      body={soonPrivacyBody}
      meta={soonLegalMeta}
    />
  );
}
