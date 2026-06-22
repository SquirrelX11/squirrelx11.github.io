import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { privacyBody } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Privacy Policy — B-DAY",
  description: "How B-DAY handles your information: local-first storage, optional private iCloud, no analytics, no tracking.",
  alternates: { canonical: "/apps/b-day/privacy" }
};

export default function Page() {
  return <LegalLayout eyebrow="B-DAY · Legal" title="Privacy Policy" body={privacyBody} />;
}
