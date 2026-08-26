import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { verdenPrivacyBody, verdenLegalMeta } from "@/lib/verden-legal";

export const metadata: Metadata = {
  title: "Privacy Policy — Verden",
  description:
    "How Verden handles your information: encrypted on your device, optional private iCloud sync, no accounts, no analytics, no user database.",
  alternates: { canonical: "/apps/verden/privacy" }
};

export default function Page() {
  return (
    <LegalLayout
      eyebrow="Verden · Legal"
      title="Privacy Policy"
      body={verdenPrivacyBody}
      meta={verdenLegalMeta}
    />
  );
}
