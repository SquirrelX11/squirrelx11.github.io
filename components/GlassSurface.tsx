import type { ElementType, HTMLAttributes, ReactNode } from "react";

type GlassSurfaceProps = {
  children: ReactNode;
  as?: ElementType;
  /** "soft" = dimmer fill, "violet" = violet-tinted border. */
  tone?: "default" | "soft" | "violet";
  className?: string;
} & HTMLAttributes<HTMLElement>;

/**
 * The single reusable liquid-glass surface. Used for the header, app cards,
 * feature cards and notices — never for whole sections.
 */
export function GlassSurface({
  children,
  as: Tag = "div",
  tone = "default",
  className = "",
  ...rest
}: GlassSurfaceProps) {
  const tones = tone === "soft" ? "glass-soft" : tone === "violet" ? "glass-violet" : "";
  return (
    <Tag className={`glass ${tones} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
