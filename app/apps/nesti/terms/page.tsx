import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { nestiTermsBody, nestiLegalMeta } from "@/lib/nesti-legal";

export const metadata: Metadata = {
  title: "Terms of Use — Nesti",
  description: "The licence terms for the Nesti Safari extension and the Nesti apps for Mac and iPhone.",
  alternates: { canonical: "/apps/nesti/terms" }
};

export default function Page() {
  return (
    <LegalLayout
      eyebrow="Nesti · Legal"
      title="Terms of Use"
      body={nestiTermsBody}
      meta={nestiLegalMeta}
    />
  );
}
