import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { soonTermsBody, soonLegalMeta } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Terms of Use — Renewise",
  description:
    "Terms of Use for Renewise. The app is licensed, not sold, and supplements Apple's Standard EULA. Renewise is not a bank or financial-advice service.",
  alternates: { canonical: "/apps/renewise/terms" }
};

export default function Page() {
  return (
    <LegalLayout
      eyebrow="Renewise · Legal"
      title="Terms of Use"
      body={soonTermsBody}
      meta={soonLegalMeta}
    />
  );
}
