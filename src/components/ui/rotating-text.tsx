"use client";

import { useState, useEffect, useRef } from "react";

interface RotatingTextProps {
  words: string[];
  interval?: number;
  className?: string;
}

export function RotatingText({
  words,
  interval = 2500,
  className = "",
}: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<"visible" | "erasing" | "typing">("visible");
  const [displayedChars, setDisplayedChars] = useState(words[0].length);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const currentWord = words[currentIndex];
  const longestWord = words.reduce((a, b) => (a.length >= b.length ? a : b), "");
  const charSpeed = 35;

  useEffect(() => {
    // Wait before starting to erase
    if (phase === "visible") {
      timeoutRef.current = setTimeout(() => {
        setPhase("erasing");
      }, interval);
    }

    // Erase characters one by one from the right
    if (phase === "erasing") {
      if (displayedChars > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayedChars((prev) => prev - 1);
        }, charSpeed);
      } else {
        // Switch to next word and start typing
        const nextIndex = (currentIndex + 1) % words.length;
        setCurrentIndex(nextIndex);
        setDisplayedChars(0);
        setPhase("typing");
      }
    }

    // Type characters one by one
    if (phase === "typing") {
      const targetLength = words[(currentIndex) % words.length].length;
      if (displayedChars < targetLength) {
        timeoutRef.current = setTimeout(() => {
          setDisplayedChars((prev) => prev + 1);
        }, charSpeed);
      } else {
        setPhase("visible");
      }
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [phase, displayedChars, currentIndex, words, interval]);

  const visibleText = currentWord.slice(0, displayedChars);

  return (
    <span className={`inline-block ${className}`}>
      {/* Invisible full word to maintain stable width (prevents reflow) */}
      <span className="relative inline-block">
        <span aria-hidden="true" className="invisible whitespace-normal lg:whitespace-pre">
          {longestWord}
        </span>
        <span className="absolute inset-x-0 top-0 whitespace-normal lg:whitespace-pre" aria-live="polite">
          {visibleText}
          <span
            className="inline-block w-[2px] h-[0.85em] bg-primary align-middle ml-0.5 animate-pulse"
            aria-hidden="true"
          />
        </span>
      </span>
    </span>
  );
}
