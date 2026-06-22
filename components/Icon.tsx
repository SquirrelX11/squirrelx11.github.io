/** Minimal SF-inspired outline icon set. Decorative — hidden from a11y tree. */
import type { ReactNode } from "react";

export type IconName =
  | "arrow"
  | "iphone"
  | "watch"
  | "widgets"
  | "devices"
  | "sparkles"
  | "shield"
  | "support"
  | "menu"
  | "close"
  | "bell"
  | "lock"
  | "cloud"
  | "document"
  | "mail";

const paths: Record<IconName, ReactNode> = {
  arrow: <path d="M5 12h13m-5-6 6 6-6 6" />,
  iphone: (
    <>
      <rect x="7" y="2" width="10" height="20" rx="3" />
      <path d="M11 18.5h2" />
    </>
  ),
  watch: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="3" />
      <path d="M9 7l.7-3.2A2 2 0 0 1 11.6 2h.8a2 2 0 0 1 1.9 1.8L15 7" />
      <path d="M9 17l.7 3.2A2 2 0 0 0 11.6 22h.8a2 2 0 0 0 1.9-1.8L15 17" />
    </>
  ),
  widgets: (
    <>
      <rect x="3" y="3" width="8" height="8" rx="2" />
      <rect x="13" y="3" width="8" height="5" rx="2" />
      <rect x="13" y="10" width="8" height="11" rx="2" />
      <rect x="3" y="13" width="8" height="8" rx="2" />
    </>
  ),
  devices: (
    <>
      <rect x="3" y="4" width="12" height="14" rx="2.5" />
      <rect x="16" y="9" width="5.5" height="9" rx="2" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6Z" />
      <path d="M18.5 15l.6 1.8.8.7-1.8.7-.6 1.8-.7-1.8-1.8-.7 1.8-.7Z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.5 3 7.7 7 9 4-1.3 7-4.5 7-9V6Z" />
      <path d="m9.2 12 1.9 1.9 3.7-3.8" />
    </>
  ),
  support: (
    <>
      <path d="M21 15a2 2 0 0 1-2 2H8l-4 4V5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2Z" />
      <path d="M9.2 9.5a2.8 2.8 0 0 1 5.3 1c0 1.8-2.5 2-2.5 3" />
      <path d="M12 15.5h.01" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  bell: (
    <>
      <path d="M18 8a6 6 0 0 0-12 0c0 6-3 7-3 7h18s-3-1-3-7" />
      <path d="M10.3 20a2 2 0 0 0 3.4 0" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </>
  ),
  cloud: <path d="M7 18a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 17 9.5a3.5 3.5 0 0 1 .5 7Z" />,
  document: (
    <>
      <path d="M7 3h7l5 5v13H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h4" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  )
};

export function Icon({
  name,
  size = 18,
  className
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      className={className ? `ic ${className}` : "ic"}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
