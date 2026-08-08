import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { nestiSupportBody } from "@/lib/nesti-legal";

export const metadata: Metadata = {
  title: "Support — Nesti",
  description:
    "Help with Nesti: enabling the extension in Safari, previews and snapshots, importing open tabs, iCloud sync, export and reset.",
  alternates: { canonical: "/apps/nesti/support" }
};

export default function Page() {
  return (
    <LegalLayout
      eyebrow="Nesti · Support"
      title="Nesti Support"
      body={nestiSupportBody}
      showDates={false}
    />
  );
}
