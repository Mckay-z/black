"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const SHOW_AFTER_PX = 400;

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > SHOW_AFTER_PX);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      tabIndex={isVisible ? 0 : -1}
      aria-hidden={!isVisible}
      className={`group fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full border border-border bg-surface/90 backdrop-blur-md shadow-lg shadow-black/10 transition-all duration-300 hover:bg-primary hover:border-primary hover:text-on-primary hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      } h-12 w-12 hover:w-auto hover:px-5 justify-center overflow-hidden`}
    >
      <ArrowUp className="w-5 h-5 shrink-0 text-primary group-hover:text-on-primary transition-colors group-hover:-translate-y-0.5 duration-300" />
      <span className="hidden group-hover:inline whitespace-nowrap text-sm font-semibold text-on-primary">
        Back to top
      </span>
    </button>
  );
}
