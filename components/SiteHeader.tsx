"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig, routes } from "@/lib/site";
import { GlassSurface } from "./GlassSurface";
import { Icon } from "./Icon";

const nav = [
  { href: routes.home, label: "Home" },
  // Explore scrolls to the on-page #explore section.
  { href: routes.explore, label: "Explore" },
  { href: routes.support, label: "Support" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="container" style={{ position: "relative" }}>
        <GlassSurface className="header-inner">
          <Link href={routes.home} className="brand" onClick={() => setOpen(false)}>
            {/* Temporary logo mark — replace in components/SiteHeader.tsx + lib/site.ts */}
            <span className="brand-mark" aria-hidden="true" />
            <span className="brand-name">{siteConfig.studioName}</span>
          </Link>

          <button
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} size={20} />
          </button>

          <nav
            id="primary-nav"
            className={open ? "nav open glass" : "nav"}
            aria-label="Primary"
          >
            <div className="nav-links">
              {nav.map((item) => (
                <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              href={routes.explore}
              className="btn btn-primary nav-cta"
              onClick={() => setOpen(false)}
            >
              Explore Apps
            </Link>
          </nav>
        </GlassSurface>
      </div>
    </header>
  );
}
