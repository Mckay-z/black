import Image from "next/image";

/**
 * The wordmark shown on the admin login screen, replacing Payload's own.
 *
 * `logo.png` is the variant with an opaque black background baked in — which
 * is exactly why the login card is pure black. The two meet with no visible
 * seam, and the gold emblem carries the brand. `logo-light.png` would be wrong
 * here: it is transparent with a *dark* wordmark, meant for beige backgrounds.
 */
export function AdminLogo() {
  return (
    <Image
      src="/logo.png"
      alt="Black in Rehab Foundation"
      width={1536}
      height={1024}
      priority
      className="admin-logo"
    />
  );
}
