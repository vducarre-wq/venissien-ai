"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "cookie-consent";

/**
 * Returns true if the user has previously accepted cookies.
 * Safe to call on both server and client -- returns false on the server.
 */
export function hasConsented(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(STORAGE_KEY) === "accepted";
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === null) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-4 rounded-xl border border-border/60 bg-white p-5 shadow-lg sm:flex-row sm:gap-6 sm:p-6">
        <p className="text-center text-sm text-muted-foreground sm:text-left">
          Ce site utilise des cookies pour am&eacute;liorer votre
          exp&eacute;rience.
        </p>
        <div className="flex shrink-0 gap-3">
          <Button variant="outline" size="sm" onClick={handleDecline}>
            Refuser
          </Button>
          <Button size="sm" onClick={handleAccept}>
            Accepter
          </Button>
        </div>
      </div>
    </div>
  );
}
