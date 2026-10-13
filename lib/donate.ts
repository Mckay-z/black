/**
 * The Zeffy donation form. Every general Donate button on the site points
 * here directly, at the client's request, and `/impact/donate` falls back to
 * embedding it when Site Settings has no donation URL of its own.
 */
export const DONATE_URL =
  "https://www.zeffy.com/en-US/donation-form/donate-to-change-lives-20883";

/** `target`/`rel` for a link that may leave the site — spread onto `<Link>`. */
export function externalProps(href: string) {
  return /^https?:\/\//.test(href)
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
}
