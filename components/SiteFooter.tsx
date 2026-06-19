import Link from "next/link";
import { siteConfig, routes } from "@/lib/site";

export function SiteFooter() {
  const { supportEmail } = siteConfig;

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true" />
            <span className="brand-name">{siteConfig.studioName}</span>
          </div>
          <p className="footer-tagline">Thoughtful apps for everyday life.</p>
        </div>

        <nav className="footer-col" aria-label="Explore">
          <h4>Explore</h4>
          <ul>
            <li><Link href={routes.home}>Home</Link></li>
            <li><Link href={routes.explore}>Explore</Link></li>
            <li><Link href={routes.bday}>B-DAY</Link></li>
          </ul>
        </nav>

        <nav className="footer-col" aria-label="Resources">
          <h4>Resources</h4>
          <ul>
            <li><Link href={routes.support}>Support</Link></li>
            <li><Link href={routes.privacy}>Privacy Policy</Link></li>
            <li><Link href={routes.terms}>Terms of Use</Link></li>
          </ul>
        </nav>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>
              {/*
                No fake email: only render a mailto when NEXT_PUBLIC_SUPPORT_EMAIL
                is configured; otherwise show a neutral, honest note.
              */}
              {supportEmail ? (
                <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
              ) : (
                <span className="muted">Support email coming soon</span>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          © 2026 {siteConfig.copyrightName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
