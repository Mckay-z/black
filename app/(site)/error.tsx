"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, Home } from "lucide-react";

/**
 * Catches a render error anywhere in the site tree.
 *
 * Must be a client component — that is how Next delivers the reset handler.
 * The error's own message is deliberately not shown: it can contain stack
 * frames and internal paths. The digest is shown because it is the one thing
 * that lets a visitor's report be matched to a server log entry.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[app error]", error);
  }, [error]);

  return (
    <div className="bg-background min-h-[70vh] flex items-center justify-center py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-xl text-center">
        <h1 className="display-2 text-foreground mb-4">
          Something went wrong
        </h1>

        <p className="text-muted mb-10 leading-relaxed">
          We hit an unexpected problem loading this page. Trying again usually
          clears it.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={reset}
            className="btn btn-primary btn-lg group"
          >
            <RefreshCw className="w-5 h-5" /> TRY AGAIN
          </button>
          <Link
            href="/"
            className="btn btn-outline btn-lg"
          >
            <Home className="w-5 h-5" /> BACK TO HOME
          </Link>
        </div>

        {error.digest && (
          <p className="text-muted text-xs mt-10">
            If you contact us about this, quote reference{" "}
            <code className="text-foreground">{error.digest}</code>.
          </p>
        )}
      </div>
    </div>
  );
}
