import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { nookPrivacyBody, nookLegalMeta } from "@/lib/nook-legal";

export const metadata: Metadata = {
  title: "Privacy Policy — Nook",
  description:
    "How Nook handles your information: local-first storage, optional private iCloud sync, no accounts, no analytics, no server.",
  alternates: { canonical: "/apps/nook/privacy" }
};

export default function Page() {
  return (
    <LegalLayout
      eyebrow="Nook · Legal"
      title="Privacy Policy"
      body={nookPrivacyBody}
      meta={nookLegalMeta}
    />
  );
}
