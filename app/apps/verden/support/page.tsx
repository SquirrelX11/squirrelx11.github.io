import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { verdenSupportBody, verdenLegalMeta } from "@/lib/verden-legal";

export const metadata: Metadata = {
  title: "Support — Verden",
  description:
    "Answers about Verden: recovery phrases, Password AutoFill, what the app can and cannot see, and how to reach the developer.",
  alternates: { canonical: "/apps/verden/support" }
};

export default function Page() {
  return (
    <LegalLayout
      eyebrow="Verden · Help"
      title="Support"
      body={verdenSupportBody}
      showDates={false}
      showDraftNote={false}
      meta={verdenLegalMeta}
    />
  );
}
