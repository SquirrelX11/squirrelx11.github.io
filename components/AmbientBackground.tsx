/**
 * Ambient background: base gradient + a few large blurred blobs, plus a field of
 * soft floating colored circles (large & small, varied opacity) that slowly
 * drift to give the dark background some life. All decorative, behind content,
 * and stilled under prefers-reduced-motion.
 */

type Orb = {
  size: number; // px
  x: number; // %
  y: number; // %
  color: "violet" | "pink" | "blue" | "soft";
  opacity: number;
  blur: number; // px
  duration: number; // s
  delay: number; // s
  path: 1 | 2 | 3 | 4;
};

// Hand-tuned distribution: big calm orbs + small denser ones, mixed colors.
const ORBS: Orb[] = [
  { size: 300, x: 8, y: 16, color: "violet", opacity: 0.4, blur: 40, duration: 38, delay: 0, path: 1 },
  { size: 96, x: 22, y: 60, color: "pink", opacity: 0.6, blur: 12, duration: 26, delay: 3, path: 2 },
  { size: 170, x: 38, y: 26, color: "blue", opacity: 0.34, blur: 26, duration: 44, delay: 1, path: 3 },
  { size: 56, x: 33, y: 12, color: "soft", opacity: 0.72, blur: 6, duration: 22, delay: 5, path: 4 },
  { size: 250, x: 72, y: 20, color: "pink", opacity: 0.32, blur: 38, duration: 41, delay: 2, path: 2 },
  { size: 76, x: 86, y: 44, color: "violet", opacity: 0.58, blur: 9, duration: 29, delay: 0, path: 1 },
  { size: 130, x: 58, y: 72, color: "violet", opacity: 0.36, blur: 22, duration: 36, delay: 4, path: 4 },
  { size: 44, x: 52, y: 50, color: "pink", opacity: 0.78, blur: 4, duration: 20, delay: 1, path: 3 },
  { size: 210, x: 90, y: 80, color: "blue", opacity: 0.3, blur: 34, duration: 47, delay: 6, path: 1 },
  { size: 64, x: 14, y: 82, color: "soft", opacity: 0.56, blur: 8, duration: 24, delay: 2, path: 2 },
  { size: 110, x: 78, y: 10, color: "soft", opacity: 0.34, blur: 16, duration: 33, delay: 3, path: 3 },
  { size: 36, x: 68, y: 36, color: "soft", opacity: 0.82, blur: 3, duration: 18, delay: 0, path: 4 },
  { size: 160, x: 4, y: 46, color: "pink", opacity: 0.3, blur: 28, duration: 43, delay: 5, path: 1 },
  { size: 50, x: 46, y: 90, color: "violet", opacity: 0.66, blur: 7, duration: 27, delay: 2, path: 2 },
  { size: 30, x: 28, y: 38, color: "soft", opacity: 0.8, blur: 3, duration: 16, delay: 4, path: 3 },
  { size: 34, x: 80, y: 62, color: "pink", opacity: 0.66, blur: 5, duration: 19, delay: 1, path: 1 },
  { size: 22, x: 60, y: 22, color: "soft", opacity: 0.85, blur: 2, duration: 15, delay: 2, path: 4 },
  { size: 26, x: 16, y: 30, color: "pink", opacity: 0.7, blur: 4, duration: 17, delay: 0, path: 2 },
  { size: 40, x: 92, y: 30, color: "violet", opacity: 0.6, blur: 6, duration: 23, delay: 3, path: 3 },
  { size: 24, x: 40, y: 70, color: "blue", opacity: 0.7, blur: 3, duration: 18, delay: 5, path: 1 }
];

export function AmbientBackground() {
  return (
    <div className="ambient" aria-hidden="true">
      <span className="blob blob-violet" />
      <span className="blob blob-blue" />
      <span className="blob blob-pink" />
      <div className="orb-field">
        {ORBS.map((o, i) => (
          <span
            key={i}
            className={`orb orb-${o.color} float-${o.path}`}
            style={{
              width: o.size,
              height: o.size,
              left: `${o.x}%`,
              top: `${o.y}%`,
              opacity: o.opacity,
              filter: `blur(${o.blur}px)`,
              animationDuration: `${o.duration}s`,
              animationDelay: `${o.delay}s`
            }}
          />
        ))}
      </div>
      <span className="floor" />
      <span className="grain" />
    </div>
  );
}
