import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { nookTermsBody, nookLegalMeta } from "@/lib/nook-legal";

export const metadata: Metadata = {
  title: "Terms of Use — Nook",
  description: "The licence terms for the Nook Safari extension and the Nook apps for Mac and iPhone.",
  alternates: { canonical: "/apps/nook/terms" }
};

export default function Page() {
  return (
    <LegalLayout
      eyebrow="Nook · Legal"
      title="Terms of Use"
      body={nookTermsBody}
      meta={nookLegalMeta}
    />
  );
}
