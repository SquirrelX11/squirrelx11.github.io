import type { ReactNode } from "react";

/**
 * Minimal, dependency-free markdown renderer for our legal/support pages.
 * Supports: # ## ### headings, paragraphs, - lists, **bold**, *italic*,
 * [links](url), > blockquotes, and --- horizontal rules. Headings get ids
 * (slugs) so a table of contents can link to them.
 */

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

/** Inline formatting: bold, italic, links. Returns React nodes. */
function inline(text: string, keyBase: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  // Tokenize on **bold**, *italic*, and [text](url) in one pass.
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    const tok = m[0];
    const key = `${keyBase}-${i++}`;
    if (tok.startsWith("**")) {
      nodes.push(<strong key={key}>{tok.slice(2, -2)}</strong>);
    } else if (tok.startsWith("*")) {
      nodes.push(<em key={key}>{tok.slice(1, -1)}</em>);
    } else {
      const lm = /\[([^\]]+)\]\(([^)]+)\)/.exec(tok);
      if (lm) {
        const href = lm[2];
        const external = href.startsWith("http");
        nodes.push(
          <a
            key={key}
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {lm[1]}
          </a>
        );
      }
    }
    last = m.index + tok.length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

export type TocItem = { id: string; text: string };

/** Extract H2 headings for a table of contents. */
export function tocFromMarkdown(md: string): TocItem[] {
  return md
    .split("\n")
    .filter((l) => l.startsWith("## ") && !l.startsWith("### "))
    .map((l) => {
      const text = l.replace(/^##\s+/, "");
      return { id: slugify(text), text };
    });
}

export function Markdown({ source }: { source: string }) {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const out: ReactNode[] = [];
  let list: string[] = [];
  let key = 0;

  const flushList = () => {
    if (list.length === 0) return;
    const items = list;
    out.push(
      <ul key={`ul-${key++}`}>
        {items.map((it, i) => (
          <li key={i}>{inline(it, `li-${key}-${i}`)}</li>
        ))}
      </ul>
    );
    list = [];
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    if (line.startsWith("- ")) {
      list.push(line.slice(2));
      continue;
    }
    flushList();
    if (line === "") continue;
    if (line === "---") {
      out.push(<hr key={`hr-${key++}`} />);
    } else if (line.startsWith("### ")) {
      const t = line.slice(4);
      out.push(<h3 key={`h3-${key++}`} id={slugify(t)}>{inline(t, `h3-${key}`)}</h3>);
    } else if (line.startsWith("## ")) {
      const t = line.slice(3);
      out.push(<h2 key={`h2-${key++}`} id={slugify(t)}>{inline(t, `h2-${key}`)}</h2>);
    } else if (line.startsWith("# ")) {
      const t = line.slice(2);
      out.push(<h1 key={`h1-${key++}`}>{inline(t, `h1-${key}`)}</h1>);
    } else if (line.startsWith("> ")) {
      out.push(<blockquote key={`bq-${key++}`}>{inline(line.slice(2), `bq-${key}`)}</blockquote>);
    } else {
      out.push(<p key={`p-${key++}`}>{inline(line, `p-${key}`)}</p>);
    }
  }
  flushList();

  return <div className="markdown">{out}</div>;
}
