import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { termsBody } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Terms of Use — B-DAY",
  description: "Terms of Use for B-DAY: one-time purchase (no subscription), Apple-processed payments, and the Apple Standard EULA.",
  alternates: { canonical: "/apps/b-day/terms" }
};

export default function Page() {
  return <LegalLayout eyebrow="B-DAY · Legal" title="Terms of Use" body={termsBody} />;
}
