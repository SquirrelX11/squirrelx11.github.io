import Link from "next/link";
import { siteConfig, routes } from "@/lib/site";

export function SiteFooter() {
  const { supportEmail } = siteConfig;

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/squirrel-logo.webp" alt="" />
            </span>
            <span className="brand-name">{siteConfig.studioName}</span>
          </div>
          <p className="footer-tagline">{siteConfig.tagline}</p>
        </div>

        <nav className="footer-col" aria-label="Explore">
          <h4>Explore</h4>
          <ul>
            <li><Link href={routes.home}>Home</Link></li>
            <li><Link href={routes.apps}>Apps</Link></li>
            <li><Link href={routes.bday}>B-DAY</Link></li>
            <li><Link href={routes.soon}>Renewise</Link></li>
          </ul>
        </nav>

        <nav className="footer-col" aria-label="Resources">
          <h4>Resources</h4>
          <ul>
            <li><Link href={routes.support}>Support</Link></li>
            <li><Link href={routes.privacy}>Privacy</Link></li>
            <li><Link href={routes.terms}>Terms</Link></li>
          </ul>
        </nav>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>
              {/* No fake address: real mailto when configured, else link to Support. */}
              {supportEmail ? (
                <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
              ) : (
                <Link href={routes.support}>Contact support</Link>
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
