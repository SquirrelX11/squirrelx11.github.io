/**
 * Ambient background: a few soft blurred blobs, a base gradient, a darker
 * floor toward the bottom and a faint CSS grain. Purely decorative.
 */
export function AmbientBackground() {
  return (
    <div className="ambient" aria-hidden="true">
      <span className="blob blob-violet" />
      <span className="blob blob-blue" />
      <span className="blob blob-pink" />
      <span className="floor" />
      <span className="grain" />
    </div>
  );
}
