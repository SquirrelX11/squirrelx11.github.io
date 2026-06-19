import type { Metadata } from "next";
import Link from "next/link";
import { routes } from "@/lib/site";
import { supportBody, fillTokens } from "@/lib/legal-content";
import { Markdown } from "@/components/Markdown";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Support — B-DAY Studio",
  description: "Help with B-DAY: notifications, Contacts, iCloud sync, backup, purchases, widgets, Apple Watch, and deleting your data.",
  alternates: { canonical: "/support" }
};

/* Support content derived from the audited app behavior (BirthdayOrganizer/website/content/support.en.md). */
export default function SupportPage() {
  return (
    <main id="main" className="container page legal">
      <p className="eyebrow">Support</p>
      <h1>B-DAY Support</h1>
      <article className="legal-body" style={{ marginTop: 18 }}>
        <Markdown source={fillTokens(supportBody)} />
      </article>
      <Link href={routes.home} className="back-link">
        <Icon name="arrow" /> Back home
      </Link>
    </main>
  );
}
