import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { soonTermsBody, soonLegalMeta } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Terms of Use — SooN",
  description:
    "Terms of Use for SooN. The app is licensed, not sold, and supplements Apple's Standard EULA. SooN is not a bank or financial-advice service.",
  alternates: { canonical: "/apps/soon/terms" }
};

export default function Page() {
  return (
    <LegalLayout
      eyebrow="SooN · Legal"
      title="Terms of Use"
      body={soonTermsBody}
      meta={soonLegalMeta}
    />
  );
}
