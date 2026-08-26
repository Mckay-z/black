"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

/**
 * Embeds a Cognito Forms form inline using their "seamless" script, which
 * renders the form into the page and keeps its height in sync as fields expand.
 *
 * The script is appended imperatively rather than through `next/script` because
 * seamless.js injects the form relative to its own <script> element — it has to
 * live inside this container, not wherever Next decides to put it.
 *
 * Note this loads third-party JavaScript from cognitoforms.com. The form's own
 * appearance is controlled in the Cognito account, not here.
 */
export default function CognitoForm({
  formKey,
  formId,
  fallbackUrl,
  title,
}: {
  formKey: string;
  formId: string;
  /** Public link to the same form, shown if the embed cannot load. */
  fallbackUrl: string;
  title: string;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    // Guard against React's development double-invoke mounting two forms.
    if (!wrapper || wrapper.dataset.embedded === "true") return;
    wrapper.dataset.embedded = "true";

    const script = document.createElement("script");
    script.src = "https://www.cognitoforms.com/f/seamless.js";
    script.async = true;
    script.dataset.key = formKey;
    script.dataset.form = formId;
    script.onerror = () => setFailed(true);

    // seamless.js reads `document.currentScript` to work out where to mount, so
    // the tag must end up as a sibling directly after the `.cognito` div — the
    // same shape as Cognito's documented snippet.
    wrapper.appendChild(script);
  }, [formKey, formId]);

  return (
    <div>
      <div ref={wrapperRef}>
        {/* seamless.js mounts the form into this element. */}
        <div className="cognito" aria-label={title} />
      </div>

      {failed && (
        <p className="text-muted text-sm">
          The form could not be loaded here.{" "}
          <a
            href={fallbackUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:text-primary-hover transition-colors"
          >
            Open it in a new tab
          </a>{" "}
          instead.
        </p>
      )}

      <p className="text-muted text-xs mt-6">
        Trouble with the form?{" "}
        <a
          href={fallbackUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-primary font-semibold hover:text-primary-hover transition-colors"
        >
          Open it in a new tab <ArrowUpRight className="w-3 h-3" />
        </a>
      </p>
    </div>
  );
}
