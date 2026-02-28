/**
 * Minimal inline SVG icons used by shadcn/ui components.
 * Replaces lucide-react imports in accordion, navigation-menu, and sheet.
 */
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/** ChevronDown – used by Accordion & NavigationMenu */
export function IconChevronDown(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

/** XMark – used by Sheet close button */
export function IconXMark(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M18 6 6 18" /><path d="m6 6 12 12" />
    </svg>
  );
}
