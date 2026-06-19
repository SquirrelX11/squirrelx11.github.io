import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { termsBody } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Terms of Use — B-DAY",
  description:
    "Terms of Use for B-DAY: one-time purchase (no subscription), Apple-processed payments, and the Apple Standard EULA.",
  alternates: { canonical: "/terms" }
};

/*
  Technical draft based on the audited implementation. B-DAY needs no custom EULA
  (no subscription, no accounts, no server) — these Terms supplement the Apple
  Standard EULA. Bracketed tokens require owner input; final legal review advised.
*/
export default function TermsPage() {
  return <LegalLayout eyebrow="Legal" title="Terms of Use" body={termsBody} />;
}
