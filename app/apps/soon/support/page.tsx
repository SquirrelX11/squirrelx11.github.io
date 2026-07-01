import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { soonSupportBody } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Support — SooN",
  description:
    "Help with SooN: notifications, renewals, Renewal Check, savings, iCloud sync, Apple Watch, widgets, Quick Add, purchases, and deleting your data.",
  alternates: { canonical: "/apps/soon/support" }
};

export default function Page() {
  return (
    <LegalLayout eyebrow="SooN · Support" title="SooN Support" body={soonSupportBody} showDates={false} />
  );
}
