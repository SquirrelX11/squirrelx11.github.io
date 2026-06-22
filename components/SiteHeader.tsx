"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig, routes } from "@/lib/site";
import { GlassSurface } from "./GlassSurface";
import { Icon } from "./Icon";

const nav = [
  { href: routes.home, label: "Home", match: (p: string) => p === "/" },
  { href: routes.explore, label: "Explore", match: (p: string) => p === "/" },
  { href: routes.support, label: "Support", match: (p: string) => p.includes("support") }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname() ?? "/";

  // Shrink the header once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="container" style={{ position: "relative" }}>
        <GlassSurface className="header-inner glass-nav">
          <Link href={routes.home} className="brand" onClick={() => setOpen(false)}>
            <span className="brand-mark" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/squirrel-logo.webp" alt="" />
            </span>
            <span className="brand-name">{siteConfig.headerName}</span>
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

          <nav id="primary-nav" className={open ? "nav open glass" : "nav"} aria-label="Primary">
            <div className="nav-links">
              {nav.map((item) => {
                const active = item.match(pathname);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={active ? "active" : ""}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
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
