import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/site";
import { AmbientBackground } from "@/components/AmbientBackground";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const title = "Squirrel Apps — Beautifully Simple Apps for Everyday Life";
const description =
  "Thoughtful apps designed to make everyday moments easier. Discover B-DAY for iPhone and Apple Watch.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title,
  description,
  applicationName: siteConfig.studioName,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    siteName: siteConfig.studioName,
    url: "/",
    type: "website",
    images: [{ url: siteConfig.brand.ogImage }]
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#04050d"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AmbientBackground />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
