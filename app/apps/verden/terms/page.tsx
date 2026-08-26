import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { verdenTermsBody, verdenLegalMeta } from "@/lib/verden-legal";

export const metadata: Metadata = {
  title: "Terms of Use — Verden",
  description:
    "The terms for using Verden, including what the app is not, and what happens if you lose your recovery material.",
  alternates: { canonical: "/apps/verden/terms" }
};

export default function Page() {
  return (
    <LegalLayout
      eyebrow="Verden · Legal"
      title="Terms of Use"
      body={verdenTermsBody}
      meta={verdenLegalMeta}
    />
  );
}
