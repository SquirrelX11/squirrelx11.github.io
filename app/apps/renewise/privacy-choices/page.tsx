import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { soonPrivacyChoicesBody } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Privacy Choices — Renewise",
  description:
    "Your privacy controls in Renewise, with the exact in-app paths: notifications, iCloud sync, Show Amounts, screenshot import, and deleting local or iCloud data.",
  alternates: { canonical: "/apps/renewise/privacy-choices" }
};

export default function Page() {
  return (
    <LegalLayout
      eyebrow="Renewise · Privacy"
      title="Your Privacy Choices"
      body={soonPrivacyChoicesBody}
      showDates={false}
    />
  );
}
