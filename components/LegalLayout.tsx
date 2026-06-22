import Link from "next/link";
import { routes } from "@/lib/site";
import { legalMeta, fillTokens } from "@/lib/legal-content";
import { Markdown, tocFromMarkdown } from "./Markdown";
import { GlassSurface } from "./GlassSurface";
import { Icon } from "./Icon";

/**
 * Shared layout for /privacy and /terms. Renders an eyebrow, title, effective /
 * last-updated dates, a "draft" notice (these are technical drafts pending
 * final legal review and owner details), a table of contents, and the body.
 */
export function LegalLayout({
  eyebrow,
  title,
  body,
  showDates = true
}: {
  eyebrow: string;
  title: string;
  body: string;
  showDates?: boolean;
}) {
  const filled = fillTokens(body);
  const toc = tocFromMarkdown(filled);

  return (
    <main id="main" className="container page legal">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {showDates && (
        <p className="legal-dates">
          Effective date: {legalMeta.effectiveDate} · Last updated: {legalMeta.lastUpdated}
        </p>
      )}

      <GlassSurface tone="violet" className="legal-draft-note">
        <p>
          This document is based on a technical audit of the app and is pending a final
          professional legal review before being considered definitive.
        </p>
      </GlassSurface>

      <div className="legal-grid">
        {toc.length > 0 && (
          <nav className="legal-toc" aria-label="Contents">
            <p className="legal-toc-title">Contents</p>
            <ul>
              {toc.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`}>{t.text}</a>
                </li>
              ))}
            </ul>
          </nav>
        )}
        <article className="legal-body">
          <Markdown source={filled} />
        </article>
      </div>

      <Link href={routes.home} className="back-link">
        <Icon name="arrow" /> Back home
      </Link>
    </main>
  );
}
