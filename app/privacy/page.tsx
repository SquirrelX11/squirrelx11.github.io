import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { privacyBody } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Privacy Policy — B-DAY",
  description:
    "How B-DAY handles your information: local-first storage, optional private iCloud, no analytics, no tracking, no third-party SDKs.",
  alternates: { canonical: "/privacy" }
};

/*
  Content is a technical draft derived from a full audit of the B-DAY iOS/watchOS
  project (see BirthdayOrganizer/docs/legal-audit + website/content). Bracketed
  tokens (developer legal name, effective date, governing law, support email)
  require owner input; final legal review is recommended before release.
*/
export default function PrivacyPage() {
  return <LegalLayout eyebrow="Legal" title="Privacy Policy" body={privacyBody} />;
}
