import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { soonSupportBody } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Support — Renewise",
  description:
    "Help with Renewise: notifications, renewals, Renewal Check, savings, iCloud sync, Apple Watch, widgets, Quick Add, purchases, and deleting your data.",
  alternates: { canonical: "/apps/renewise/support" }
};

export default function Page() {
  return (
    <LegalLayout eyebrow="Renewise · Support" title="Renewise Support" body={soonSupportBody} showDates={false} />
  );
}
