/**
 * An inline `<script>` that runs during HTML parsing, before the first paint.
 *
 * This exists to satisfy two requirements that pull against each other:
 *
 * 1. The theme has to be applied *synchronously while the browser parses the
 *    document*, or the page paints in the wrong palette and then corrects
 *    itself. `next/script` cannot do this — even at `beforeInteractive` it
 *    queues the source into `self.__next_s` for the Next client runtime to run
 *    later, which is after first paint. Only a real inline tag executes early
 *    enough.
 *
 * 2. React warns in development whenever a component renders a `<script>`,
 *    because scripts produced by a *client* render never execute.
 *
 * The `type` switch is the resolution Next documents for this
 * (`node_modules/next/dist/docs/01-app/02-guides/preventing-flash-before-hydration.md`):
 * on the server the tag is real JavaScript and the browser runs it; on any
 * client render it becomes inert `text/plain`, which is honest — a
 * client-rendered script would not have run anyway. `suppressHydrationWarning`
 * covers the resulting `type` mismatch during hydration.
 *
 * Note: this relies on `'unsafe-inline'` being permitted. If a strict Content
 * Security Policy is ever added, this tag needs a nonce.
 */
export default function InlineScript({ html }: { html: string }) {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
