import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { chippyPrivacyBody, chippyLegalMeta } from "@/lib/chippy-legal";

export const metadata: Metadata = {
  title: "Privacy Policy — Chippy",
  description:
    "How Chippy handles your information: key codes only, nothing written to disk, nothing sent anywhere, no accounts and no analytics.",
  alternates: { canonical: "/apps/chippy/privacy" }
};

export default function Page() {
  return (
    <LegalLayout
      eyebrow="Chippy · Legal"
      title="Privacy Policy"
      body={chippyPrivacyBody}
      meta={chippyLegalMeta}
    />
  );
}
