import { GlassSurface } from "./GlassSurface";

/**
 * "More apps coming soon" card — a dimmer glass surface with an abstract
 * lockup of violet glass squares. No fake app names, no buttons, and it must
 * not read as disabled or broken.
 */
export function ComingSoonCard() {
  return (
    <GlassSurface tone="soft" className="soon-card">
      <span className="tag">In development</span>
      <div className="soon-lockup" aria-hidden="true">
        <span className="soon-square" />
        <span className="soon-square" />
        <span className="soon-square" />
      </div>
      <h3>More apps coming soon</h3>
      <p>New simple tools are already in the works.</p>
    </GlassSurface>
  );
}
