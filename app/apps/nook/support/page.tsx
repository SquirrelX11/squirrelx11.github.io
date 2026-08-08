import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { nookSupportBody } from "@/lib/nook-legal";

export const metadata: Metadata = {
  title: "Support — Nook",
  description:
    "Help with Nook: enabling the extension in Safari, previews and snapshots, importing open tabs, iCloud sync, export and reset.",
  alternates: { canonical: "/apps/nook/support" }
};

export default function Page() {
  return (
    <LegalLayout
      eyebrow="Nook · Support"
      title="Nook Support"
      body={nookSupportBody}
      showDates={false}
    />
  );
}
