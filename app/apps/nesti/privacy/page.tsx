import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { nestiPrivacyBody, nestiLegalMeta } from "@/lib/nesti-legal";

export const metadata: Metadata = {
  title: "Privacy Policy — Nesti",
  description:
    "How Nesti handles your information: local-first storage, optional private iCloud sync, no accounts, no analytics, no server.",
  alternates: { canonical: "/apps/nesti/privacy" }
};

export default function Page() {
  return (
    <LegalLayout
      eyebrow="Nesti · Legal"
      title="Privacy Policy"
      body={nestiPrivacyBody}
      meta={nestiLegalMeta}
    />
  );
}
