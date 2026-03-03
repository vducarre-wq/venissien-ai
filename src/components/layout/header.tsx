"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IconMenu, IconX } from "@/components/icons";
import { mainNavigation, type NavItem } from "@/data/navigation";
import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* ---- Scroll detection (optimised with rAF + ref guard) ---- */
  const scrolledRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  const handleScroll = useCallback(() => {
    if (rafRef.current !== null) return; // already scheduled
    rafRef.current = requestAnimationFrame(() => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolledRef.current) {
        scrolledRef.current = isScrolled;
        setScrolled(isScrolled);
      }
      rafRef.current = null;
    });
  }, []);

  useEffect(() => {
    handleScroll(); // check on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

  /* ---- Lock body scroll when mobile menu is open ---- */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-sm transition-colors",
          scrolled ? "border-bg-alt" : "border-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/images/logo-venissien-ai.png"
              alt={siteConfig.name}
              width={150}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {mainNavigation.map((item) =>
              item.children ? (
                <DesktopDropdown
                  key={item.href}
                  item={item}
                  isActive={isActive}
                  open={dropdownOpen}
                  onOpenChange={setDropdownOpen}
                />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                    isActive(item.href)
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href={siteConfig.contact.googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90"
            >
              Prendre rendez-vous
            </a>
          </div>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-muted-foreground transition-colors hover:text-foreground md:hidden"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileOpen ? (
              <IconX className="size-5" />
            ) : (
              <IconMenu className="size-5" />
            )}
          </button>
        </div>
      </header>

      {/* ---- Mobile full-screen overlay ---- */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col bg-navy md:hidden">
          {/* Top bar with logo + close */}
          <div className="flex h-16 items-center justify-between px-4 sm:px-6">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="flex shrink-0 items-center"
            >
              <Image
                src="/images/logo-venissien-ai.png"
                alt={siteConfig.name}
                width={130}
                height={35}
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-white transition-colors hover:text-gray-300"
              aria-label="Fermer le menu"
            >
              <IconX className="size-5" />
            </button>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 pt-6 sm:px-6">
            {mainNavigation.map((item) =>
              item.children ? (
                <MobileDropdown
                  key={item.href}
                  item={item}
                  isActive={isActive}
                  onNavigate={() => setMobileOpen(false)}
                />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-3 text-base font-medium transition-colors",
                    isActive(item.href)
                      ? "text-primary"
                      : "text-white hover:text-gray-300"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile CTA */}
          <div className="px-4 pb-8 pt-4 sm:px-6">
            <a
              href={siteConfig.contact.googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="block w-full rounded-lg bg-primary px-4 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-primary/90"
            >
              Prendre rendez-vous
            </a>
          </div>
        </div>
      )}
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Desktop dropdown for items with children                          */
/* ------------------------------------------------------------------ */

function DesktopDropdown({
  item,
  isActive,
  open,
  onOpenChange,
}: {
  item: NavItem;
  isActive: (href: string) => boolean;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <div
      className="relative"
      onMouseEnter={() => onOpenChange(true)}
      onMouseLeave={() => onOpenChange(false)}
    >
      <button
        type="button"
        onClick={() => onOpenChange(!open)}
        className={cn(
          "inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
          isActive(item.href) ? "text-primary" : "text-muted-foreground"
        )}
      >
        {item.label}
        {/* Inline SVG chevron */}
        <svg
          className={cn(
            "size-3.5 transition-transform",
            open && "rotate-180"
          )}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <div
        className={cn(
          "absolute left-0 top-full z-50 mt-1 w-56 rounded-xl border border-gray-100 bg-white p-1.5 shadow-lg transition-opacity duration-150",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        {item.children!.map((child) => (
          <Link
            key={child.href}
            href={child.href}
            onClick={() => onOpenChange(false)}
            className={cn(
              "block rounded-lg px-3 py-2 text-sm transition-colors hover:text-primary",
              isActive(child.href)
                ? "font-medium text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile collapsible section for items with children                */
/* ------------------------------------------------------------------ */

function MobileDropdown({
  item,
  isActive,
  onNavigate,
}: {
  item: NavItem;
  isActive: (href: string) => boolean;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={cn(
          "flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium transition-colors",
          isActive(item.href)
            ? "text-primary"
            : "text-white hover:text-gray-300"
        )}
      >
        {item.label}
        {/* Inline SVG chevron */}
        <svg
          className={cn(
            "size-4 transition-transform",
            open && "rotate-180"
          )}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="ml-3 flex flex-col gap-0.5 border-l border-gray-700 pl-3">
          {item.children!.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={onNavigate}
              className={cn(
                "rounded-lg px-3 py-2 text-sm transition-colors",
                isActive(child.href)
                  ? "font-medium text-primary"
                  : "text-gray-400 hover:text-white"
              )}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
