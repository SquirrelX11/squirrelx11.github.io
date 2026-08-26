import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { verdenSecurityBody, verdenLegalMeta } from "@/lib/verden-legal";

export const metadata: Metadata = {
  title: "Security — Verden",
  description:
    "How Verden encrypts a vault, the three ways back into it, what iCloud can see, and where each protection stops.",
  alternates: { canonical: "/apps/verden/security" }
};

export default function Page() {
  return (
    <LegalLayout
      eyebrow="Verden · Security"
      title="Security"
      body={verdenSecurityBody}
      meta={verdenLegalMeta}
    />
  );
}
