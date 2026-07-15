import type { Metadata } from "next";
import Link from "next/link";
import { routes } from "@/lib/site";
import { soonFaq, fillTokens } from "@/lib/legal-content";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "FAQ — Renewise",
  description:
    "Answers about Renewise: privacy, iCloud sync, Renewal Check, savings, Apple Watch, Quick Add, purchases, notifications, and more.",
  alternates: { canonical: "/apps/renewise/faq" }
};

export default function Page() {
  return (
    <main id="main" className="container page legal">
      <p className="eyebrow">Renewise · Support</p>
      <h1>Frequently asked questions</h1>
      <p className="lead" style={{ marginTop: 8 }}>
        Straight answers, based on how Renewise actually works.
      </p>

      <div style={{ marginTop: 24, display: "grid", gap: 12 }}>
        {soonFaq.map((item, i) => (
          <details
            key={i}
            className="glass"
            style={{ padding: "14px 18px", borderRadius: 16 }}
          >
            <summary
              style={{ cursor: "pointer", fontWeight: 600, lineHeight: 1.4 }}
            >
              {item.q}
            </summary>
            <p style={{ marginTop: 10, opacity: 0.82, lineHeight: 1.6 }}>
              {fillTokens(item.a)}
            </p>
          </details>
        ))}
      </div>

      <Link href={routes.home} className="back-link" style={{ marginTop: 28 }}>
        <Icon name="arrow" /> Back home
      </Link>
    </main>
  );
}
