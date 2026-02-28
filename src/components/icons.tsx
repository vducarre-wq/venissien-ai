/**
 * Custom SVG icons from the venissien.ai design system.
 *
 * Each icon accepts a standard `className` prop (for Tailwind sizing like `size-5`)
 * and forwards the `aria-hidden` attribute.  They behave exactly like lucide-react
 * icon components so they can be used interchangeably.
 *
 * Mapping (semantic name → SVG source file):
 *   IconEcouter     → Ecouter.svg       (ear / listening)
 *   IconKing        → King.svg          (crown / premium)
 *   IconMagic       → Magic.svg         (magic wand / sparkle)
 *   IconPartager    → Partager.svg      (share / network)
 *   IconSmile       → Smile.svg         (happy face)
 *   IconSuivre      → Suivre.svg        (magnifier / search / track)
 *   IconSymbole     → Symbole.svg       (broadcast / wifi signal)
 *   IconTime        → Time.svg          (hourglass / time)
 *   IconTodo        → To do.svg         (checklist)
 *   IconAction      → action.svg        (connected nodes / action)
 *   IconCash        → cash.svg          (dollar / money)
 *   IconCrying      → crying.svg        (sad face / problem)
 */

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/* ------------------------------------------------------------------ */
/*  Ecouter – Ear / Listening                                         */
/* ------------------------------------------------------------------ */
export function IconEcouter(props: IconProps) {
  return (
    <svg viewBox="0 0 129 174" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path opacity="0.75" d="M50.5296 77.5298C54.3188 77.5298 57.3906 74.4581 57.3906 70.6689C57.3906 66.8797 54.3188 63.808 50.5296 63.808C46.7404 63.808 43.6687 66.8797 43.6687 70.6689C43.6687 74.4581 46.7404 77.5298 50.5296 77.5298Z" fill="currentColor"/>
      <path opacity="0.75" d="M18.1853 70.669C18.1853 52.8059 32.6666 38.3246 50.5297 38.3246C68.3927 38.3246 82.874 52.8059 82.874 70.669" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
      <path opacity="0.75" d="M5.4436 70.3724C5.4436 45.0945 25.8488 24.6027 51.0198 24.6027C76.1907 24.6027 96.5959 45.0945 96.5959 70.3724C96.5959 95.6503 75.6703 104.26 75.6703 121.203C75.6703 138.764 61.4946 153 44.008 153" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
      <path opacity="0.75" d="M79.9337 19.7019C87.2771 23.8508 93.6331 29.5528 98.5562 36.3642" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
      <path opacity="0.75" d="M80.9138 5C94.6698 11.5471 106.032 22.6074 113.258 36.3642" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  King – Crown / Premium                                            */
/* ------------------------------------------------------------------ */
export function IconKing(props: IconProps) {
  return (
    <svg viewBox="0 0 188 119" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#king-clip)">
        <path opacity="0.7" d="M18.63 27.26C18.63 48.06 35.49 64.92 56.29 64.92C77.09 64.92 93.95 48.06 93.95 27.26" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
        <path opacity="0.7" d="M93.9399 27.26C93.9399 48.06 110.8 64.92 131.6 64.92C152.4 64.92 169.26 48.06 169.26 27.26" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
        <path opacity="0.7" d="M169.25 27.26V113.4H18.63V27.26" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
        <path opacity="0.7" d="M18.63 91.08H169.25" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10" strokeLinecap="square"/>
        <g opacity="0.7">
          <path d="M93.9401 10C98.7101 10 102.57 13.86 102.57 18.63C102.57 23.4 98.7101 27.26 93.9401 27.26C89.1701 27.26 85.3101 23.4 85.3101 18.63C85.3101 13.86 89.1701 10 93.9401 10ZM93.9401 0C83.6701 0 75.3101 8.36 75.3101 18.63C75.3101 28.9 83.6701 37.26 93.9401 37.26C104.21 37.26 112.57 28.9 112.57 18.63C112.57 8.36 104.21 0 93.9401 0Z" fill="currentColor"/>
        </g>
        <g opacity="0.7">
          <path d="M169.25 10C174.02 10 177.88 13.86 177.88 18.63C177.88 23.4 174.02 27.26 169.25 27.26C164.48 27.26 160.62 23.4 160.62 18.63C160.62 13.86 164.48 10 169.25 10ZM169.25 0C158.98 0 150.62 8.36 150.62 18.63C150.62 28.9 158.98 37.26 169.25 37.26C179.52 37.26 187.88 28.9 187.88 18.63C187.88 8.36 179.52 0 169.25 0Z" fill="currentColor"/>
        </g>
        <g opacity="0.7">
          <path d="M18.63 10C23.4 10 27.26 13.86 27.26 18.63C27.26 23.4 23.4 27.26 18.63 27.26C13.86 27.26 10 23.4 10 18.63C10 13.86 13.86 10 18.63 10ZM18.63 0C8.36 0 0 8.36 0 18.63C0 28.9 8.36 37.26 18.63 37.26C28.9 37.26 37.26 28.9 37.26 18.63C37.26 8.36 28.9 0 18.63 0Z" fill="currentColor"/>
        </g>
      </g>
      <defs>
        <clipPath id="king-clip">
          <rect width="187.88" height="118.4" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Magic – Sparkle / Wand                                            */
/* ------------------------------------------------------------------ */
export function IconMagic(props: IconProps) {
  return (
    <svg viewBox="0 0 101 135" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#magic-clip)">
        <path opacity="0.7" d="M79.7134 135C79.7134 123.214 89.2428 113.662 101 113.662" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
        <path opacity="0.7" d="M67.3375 67.5H54.9615C43.2044 67.5 33.6749 77.0525 33.6749 88.838V101.244" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
        <path opacity="0.7" d="M33.6626 33.7438V46.1496C33.6626 57.9351 43.1921 67.4876 54.9492 67.4876H67.3251" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
        <path opacity="0.7" d="M0 67.5H12.3759C24.1331 67.5 33.6625 57.9476 33.6625 46.162V33.7562" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
        <path opacity="0.7" d="M33.6625 101.244V88.838C33.6625 77.0525 24.1331 67.5 12.3759 67.5H0" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
        <path opacity="0.7" d="M101 113.65C89.2428 113.65 79.7134 104.097 79.7134 92.3116" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
        <path opacity="0.7" d="M79.7134 92.3116C79.7134 104.097 70.1839 113.65 58.4268 113.65" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
        <path opacity="0.7" d="M58.4144 113.65C70.1716 113.65 79.701 123.202 79.701 134.988" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
        <path opacity="0.7" d="M79.7134 42.6883C79.7134 30.9028 89.2428 21.3503 101 21.3503" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
        <path opacity="0.7" d="M101 21.338C89.2428 21.338 79.7134 11.7855 79.7134 0" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
        <path opacity="0.7" d="M79.7134 0C79.7134 11.7855 70.1839 21.338 58.4268 21.338" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
        <path opacity="0.7" d="M58.4144 21.338C70.1716 21.338 79.701 30.8905 79.701 42.676" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
      </g>
      <defs>
        <clipPath id="magic-clip">
          <rect width="101" height="135" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Partager – Share / Network                                        */
/* ------------------------------------------------------------------ */
export function IconPartager(props: IconProps) {
  return (
    <svg viewBox="0 0 144 140" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path opacity="0.75" d="M71.9999 43.2782C84.0616 43.2782 93.8394 33.59 93.8394 21.6391C93.8394 9.68815 84.0616 0 71.9999 0C59.9383 0 50.1604 9.68815 50.1604 21.6391C50.1604 33.59 59.9383 43.2782 71.9999 43.2782Z" fill="currentColor"/>
      <path opacity="0.75" d="M21.8395 127.88C33.9012 127.88 43.679 118.192 43.679 106.241C43.679 94.29 33.9012 84.6018 21.8395 84.6018C9.77789 84.6018 0 94.29 0 106.241C0 118.192 9.77789 127.88 21.8395 127.88Z" fill="currentColor"/>
      <path opacity="0.75" d="M122.161 127.74C134.222 127.74 144 118.052 144 106.101C144 94.1504 134.222 84.4623 122.161 84.4623C110.099 84.4623 100.321 94.1504 100.321 106.101C100.321 118.052 110.099 127.74 122.161 127.74Z" fill="currentColor"/>
      <path opacity="0.75" d="M71.9999 135C104.138 135 130.192 109.186 130.192 77.3423C130.192 45.4988 104.138 19.6846 71.9999 19.6846C39.8614 19.6846 13.8081 45.4988 13.8081 77.3423C13.8081 109.186 39.8614 135 71.9999 135Z" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Smile – Happy face                                                */
/* ------------------------------------------------------------------ */
export function IconSmile(props: IconProps) {
  return (
    <svg viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#smile-clip)">
        <path opacity="0.7" d="M26.8199 74.14C26.8199 100.22 47.9699 121.37 74.0499 121.37C100.13 121.37 121.28 100.22 121.28 74.14H26.8199Z" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
        <path opacity="0.7" d="M108.09 112.23C99.7999 103.12 87.4299 97.75 74.0599 97.75C60.6899 97.75 48.2099 102.71 40.1899 112.06" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
        <path opacity="0.7" d="M74.14 143.28C112.325 143.28 143.28 112.325 143.28 74.14C143.28 35.955 112.325 5 74.14 5C35.955 5 5 35.955 5 74.14C5 112.325 35.955 143.28 74.14 143.28Z" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
      </g>
      <defs>
        <clipPath id="smile-clip">
          <rect width="148.27" height="148.27" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Suivre – Magnifier / Search / Track                               */
/* ------------------------------------------------------------------ */
export function IconSuivre(props: IconProps) {
  return (
    <svg viewBox="0 0 153 154" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path opacity="0.75" d="M22.4548 54.5787C23.9471 39.0637 35.3176 26.4578 50.1565 23.2151" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
      <path opacity="0.75" d="M24.7169 71.0606C23.8489 68.8307 23.197 66.4908 22.7888 64.0675" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
      <path opacity="0.75" d="M57.7045 111.117C86.8124 111.117 110.409 87.3616 110.409 58.0583C110.409 28.755 86.8124 5 57.7045 5C28.5966 5 5 28.755 5 58.0583C5 87.3616 28.5966 111.117 57.7045 111.117Z" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
      <path opacity="0.75" d="M115.373 102.244L101.535 116.174L131.163 146L145 132.07L115.373 102.244Z" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10" strokeLinecap="square"/>
      <path opacity="0.75" d="M94.9938 95.5737L108.496 109.166" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10" strokeLinecap="square"/>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Symbole – Broadcast / Signal / WiFi                               */
/* ------------------------------------------------------------------ */
export function IconSymbole(props: IconProps) {
  return (
    <svg viewBox="0 0 136 149" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#symbole-clip)">
        <g opacity="0.75">
          <path d="M111.168 148.766C111.168 135.047 122.282 123.934 136 123.934" stroke="currentColor" strokeWidth="15" strokeMiterlimit="10"/>
          <path d="M61.6636 148.766C61.6636 107.711 94.9449 74.4292 136 74.4292" stroke="currentColor" strokeWidth="15" strokeMiterlimit="10"/>
          <path d="M12.0001 148.766C12.0001 80.2743 67.5088 24.7657 136 24.7657" stroke="currentColor" strokeWidth="15" strokeMiterlimit="10"/>
        </g>
        <g opacity="0.75">
          <path d="M136 24.8318C122.282 24.8318 111.168 13.7181 111.168 1.13079e-05" stroke="currentColor" strokeWidth="15" strokeMiterlimit="10"/>
          <path d="M136 74.3364C94.9449 74.3364 61.6636 41.0551 61.6636 0.000152601" stroke="currentColor" strokeWidth="15" strokeMiterlimit="10"/>
          <path d="M136 124C67.5088 124 12.0002 68.4913 12.0002 0.000182801" stroke="currentColor" strokeWidth="15" strokeMiterlimit="10"/>
        </g>
      </g>
      <defs>
        <clipPath id="symbole-clip">
          <rect width="136" height="149" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Time – Hourglass                                                  */
/* ------------------------------------------------------------------ */
export function IconTime(props: IconProps) {
  return (
    <svg viewBox="0 0 135 135" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#time-clip)">
        <path opacity="0.7" d="M5 5C5 39.45 32.92 67.37 67.37 67.37C101.82 67.37 129.74 39.45 129.74 5H5Z" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
        <path opacity="0.7" d="M129.74 129.74C129.74 95.29 101.82 67.37 67.37 67.37C32.92 67.37 5 95.3 5 129.74H129.74Z" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
      </g>
      <defs>
        <clipPath id="time-clip">
          <rect width="134.74" height="134.74" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Todo – Checklist                                                  */
/* ------------------------------------------------------------------ */
export function IconTodo(props: IconProps) {
  return (
    <svg viewBox="0 0 151 125" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path opacity="0.75" d="M53.4131 23.2319H151" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
      <path opacity="0.75" d="M7.29419 22.902L18.1951 33.8042" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10" strokeLinecap="square"/>
      <path opacity="0.75" d="M18.1514 33.8041L39.297 12.6598" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10" strokeLinecap="square"/>
      <path opacity="0.75" d="M53.4131 65.2576H151" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
      <path opacity="0.75" d="M7.29419 64.9275L18.1951 75.8297" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10" strokeLinecap="square"/>
      <path opacity="0.75" d="M18.1514 75.8297L39.297 54.6854" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10" strokeLinecap="square"/>
      <path opacity="0.75" d="M53.4131 107.283H151" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
      <path opacity="0.75" d="M7.29419 106.953L18.1951 117.856" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10" strokeLinecap="square"/>
      <path opacity="0.75" d="M18.1514 117.856L39.297 96.7112" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10" strokeLinecap="square"/>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Action – Connected nodes / Network                                */
/* ------------------------------------------------------------------ */
export function IconAction(props: IconProps) {
  return (
    <svg viewBox="0 0 151 169" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#action-clip)">
        <path opacity="0.7" d="M62 157L149 71" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
        <path opacity="0.7" d="M2 168L94 76" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
        <path opacity="0.7" d="M5 116L117 4" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
        <path opacity="0.7" d="M149 71C139.61 80.3333 124.39 80.3333 115 71" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
        <path opacity="0.7" d="M149 105C139.667 95.6098 139.667 80.3902 149 71" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
        <path opacity="0.7" d="M94 76C85.995 84 73.005 84 65 76" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
        <path opacity="0.7" d="M94 105C86 96.995 86 84.005 94 76" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
        <path opacity="0.7" d="M116.39 3.54004C107.16 12.77 92.2 12.77 82.97 3.54004" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
        <path opacity="0.7" d="M116.39 36.95C107.16 27.72 107.16 12.76 116.39 3.53003" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
      </g>
      <defs>
        <clipPath id="action-clip">
          <rect width="150.96" height="168.48" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Cash – Dollar / Money                                             */
/* ------------------------------------------------------------------ */
export function IconCash(props: IconProps) {
  return (
    <svg viewBox="0 0 137 149" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#cash-clip)">
        <path opacity="0.7" d="M128.28 13.06C118.61 7.91 107.57 5 95.85 5C57.67 5 26.71 35.95 26.71 74.14C26.71 112.33 57.66 143.28 95.85 143.28C110.05 143.28 123.25 139 134.23 131.66" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
        <path opacity="0.7" d="M0 64.03H107.22" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
        <path opacity="0.7" d="M0 84.24H107.22" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
        <path opacity="0.7" d="M122.69 113.95C115.03 119.13 105.79 122.15 95.84 122.15C69.32 122.15 47.83 100.65 47.83 74.14C47.83 47.63 69.33 26.13 95.84 26.13C103.98 26.13 111.65 28.16 118.37 31.73" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
      </g>
      <defs>
        <clipPath id="cash-clip">
          <rect width="137" height="148.27" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Crying – Sad face / Problem                                       */
/* ------------------------------------------------------------------ */
export function IconCrying(props: IconProps) {
  return (
    <svg viewBox="0 0 201 149" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#crying-clip)">
        <path opacity="0.7" d="M100.26 143.28C138.445 143.28 169.4 112.325 169.4 74.14C169.4 35.955 138.445 5 100.26 5C62.075 5 31.12 35.955 31.12 74.14C31.12 112.325 62.075 143.28 100.26 143.28Z" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
        <path opacity="0.7" d="M150.43 111.02H50.09C50.09 93.21 72.55 78.76 100.26 78.76C127.97 78.76 150.43 93.2 150.43 111.02Z" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
        <path opacity="0.7" d="M71.51 116C71.51 105.79 84.38 97.51 100.26 97.51C116.14 97.51 129.01 105.79 129.01 116" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
        <path opacity="0.7" d="M65.6201 40.98L92.6701 55.2L56.9301 55.46" stroke="currentColor" strokeWidth="10" strokeLinejoin="bevel"/>
        <path opacity="0.7" d="M134.91 40.98L107.86 55.2L143.59 55.46" stroke="currentColor" strokeWidth="10" strokeLinejoin="bevel"/>
        <path opacity="0.7" d="M178.7 55.46H200.52" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
        <path opacity="0.7" d="M165.77 24.4L186.81 13.34" stroke="currentColor" strokeWidth="10" strokeLinejoin="bevel"/>
        <path opacity="0.7" d="M21.82 55.46H0" stroke="currentColor" strokeWidth="10" strokeMiterlimit="10"/>
        <path opacity="0.7" d="M34.75 24.4L13.71 13.34" stroke="currentColor" strokeWidth="10" strokeLinejoin="bevel"/>
      </g>
      <defs>
        <clipPath id="crying-clip">
          <rect width="200.52" height="148.27" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Utility: Simple inline SVG icons for UI chrome                    */
/*  (arrows, chevrons, menu, close, loader, check, alert, etc.)      */
/*  These replace the remaining lucide-react icons for navigation     */
/*  and form feedback.                                                */
/* ------------------------------------------------------------------ */

/** ArrowRight – → */
export function IconArrowRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  );
}

/** ArrowLeft – ← */
export function IconArrowLeft(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M19 12H5" /><path d="m12 19-7-7 7-7" />
    </svg>
  );
}

/** ChevronRight – › */
export function IconChevronRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

/** Calendar */
export function IconCalendar(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" />
    </svg>
  );
}

/** CalendarDays */
export function IconCalendarDays(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" />
      <path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" />
    </svg>
  );
}

/** Menu (hamburger) */
export function IconMenu(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

/** X (close) */
export function IconX(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M18 6 6 18" /><path d="m6 6 12 12" />
    </svg>
  );
}

/** Mail */
export function IconMail(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

/** Phone */
export function IconPhone(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

/** MapPin */
export function IconMapPin(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" />
    </svg>
  );
}

/** Linkedin */
export function IconLinkedin(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
    </svg>
  );
}

/** Loader2 (spinning) */
export function IconLoader(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}

/** CheckCircle */
export function IconCheckCircle(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
    </svg>
  );
}

/** AlertCircle */
export function IconAlertCircle(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" />
    </svg>
  );
}

/** Quote */
export function IconQuote(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
      <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
    </svg>
  );
}
