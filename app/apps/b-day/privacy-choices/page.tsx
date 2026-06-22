import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { privacyChoicesBody } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Privacy Choices — B-DAY",
  description: "Your privacy controls in B-DAY: Contacts, notifications, iCloud sync, and deleting your data.",
  alternates: { canonical: "/apps/b-day/privacy-choices" }
};

export default function Page() {
  return <LegalLayout eyebrow="B-DAY · Privacy" title="Your Privacy Choices" body={privacyChoicesBody} showDates={false} />;
}
