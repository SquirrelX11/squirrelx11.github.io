import type { Metadata } from "next";
import Link from "next/link";
import { routes } from "@/lib/site";
import { GlassSurface } from "@/components/GlassSurface";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Privacy Policy — B-DAY Studio",
  description: "Privacy Policy for B-DAY. The final policy will be published before release.",
  alternates: { canonical: "/privacy" }
};

/*
  TODO: Replace with final legal text after auditing the B-DAY iOS project,
  permissions, data storage, iCloud, Contacts access, notifications, StoreKit
  and third-party SDKs. See LEGAL_AUDIT_CHECKLIST.md for the full checklist.
  Do NOT write a fictitious final privacy policy here.
*/
export default function PrivacyPage() {
  return (
    <main id="main" className="container page page-narrow">
      <p className="eyebrow">Legal</p>
      <h1>Privacy Policy</h1>
      <GlassSurface className="notice">
        <p>The final privacy policy will be published here before the app is released.</p>
      </GlassSurface>
      <Link href={routes.home} className="back-link">
        <Icon name="arrow" /> Back home
      </Link>
    </main>
  );
}
