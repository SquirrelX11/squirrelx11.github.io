/**
 * Decorative media container for the hero's future artwork.
 *
 * It deliberately does NOT render a fake iPhone / Apple Watch or any
 * screenshot — just a calm glass rectangle with a soft violet glow.
 *
 * TODO: Replace this placeholder with the final B-DAY iPhone and Apple Watch
 * mockup artwork. When the image is ready, drop it in /public/apps/b-day/ and
 * set it in ONE line via the `.hero-visual` background-image in app/globals.css
 * (the swap point is marked there), or pass it as an inline style here.
 */
export function HeroVisualPlaceholder() {
  return (
    <div className="hero-visual reveal reveal-3" role="img" aria-label="B-DAY artwork placeholder">
      {/* Delicate, easily removable note. */}
      <span className="hero-visual-note">B-DAY visual coming soon</span>
    </div>
  );
}
