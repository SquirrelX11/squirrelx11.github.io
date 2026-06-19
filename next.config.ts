import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — the site is fully static and can be hosted anywhere.
  output: "export",
  // Required for `output: "export"`: we use plain <img>, so no optimizer needed.
  images: { unoptimized: true },
  // Cleaner static URLs (/privacy/ instead of /privacy.html).
  trailingSlash: true,
  reactStrictMode: true
};

export default nextConfig;
