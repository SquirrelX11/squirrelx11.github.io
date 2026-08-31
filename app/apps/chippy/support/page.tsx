import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { chippySupportBody, chippyLegalMeta } from "@/lib/chippy-legal";

export const metadata: Metadata = {
  title: "Support — Chippy",
  description:
    "Help with Chippy for macOS: granting Accessibility, why password fields are silent, where the app lives, and the one-time unlock.",
  alternates: { canonical: "/apps/chippy/support" }
};

export default function Page() {
  return (
    <LegalLayout
      eyebrow="Chippy · Help"
      title="Support"
      body={chippySupportBody}
      showDates={false}
      showDraftNote={false}
      meta={chippyLegalMeta}
    />
  );
}
