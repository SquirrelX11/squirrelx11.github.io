import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { supportBody } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Support — B-DAY",
  description: "Help with B-DAY: notifications, Contacts, iCloud sync, backup, purchases, widgets, Apple Watch, and deleting your data.",
  alternates: { canonical: "/apps/b-day/support" }
};

export default function Page() {
  return <LegalLayout eyebrow="B-DAY · Support" title="B-DAY Support" body={supportBody} showDates={false} />;
}
