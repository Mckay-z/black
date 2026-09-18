import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  images: {
    // Uploads are served from /media by the Payload upload collection; local
    // paths need no remote patterns. Formats set explicitly so the optimiser
    // emits AVIF where the browser accepts it.
    formats: ["image/avif", "image/webp"],
  },

  /**
   * Retired URLs.
   *
   * All 308s rather than 307s: these paths are gone for good, and anything
   * already indexed, bookmarked, or printed on a flyer should hand its
   * ranking to the new URL rather than be re-crawled every time.
   *
   * Redirects are matched before the filesystem, so a rule here beats any
   * page of the same name — which is why the pages these replaced could be
   * deleted rather than left behind as one-line `redirect()` stubs. A stub
   * costs a render and a round trip; this costs neither.
   */
  redirects() {
    return Promise.resolve([
      // ---- Section renamed: /experiences → /trips ----------------------
      // Two rules, not one: `/trips/:path*` alone would match the bare
      // `/experiences` with an empty `path` and produce a trailing slash.
      { source: "/experiences", destination: "/trips", permanent: true },
      {
        source: "/experiences/:path*",
        destination: "/trips/:path*",
        permanent: true,
      },

      // ---- Community + Support merged into Get Involved ----------------
      // The children keep their own URLs; only the two landing pages moved.
      { source: "/community", destination: "/get-involved", permanent: true },
      { source: "/support", destination: "/get-involved", permanent: true },
      // Superseded outright by /get-involved, which asks the same question
      // and answers it more completely.
      { source: "/join-the-movement", destination: "/get-involved", permanent: true },

      // ---- Duplicate topics merged ------------------------------------
      // Sponsorship tiers moved onto the page that used to link to them.
      { source: "/partnerships", destination: "/support/sponsors", permanent: true },
      { source: "/support/sponsor", destination: "/support/sponsors", permanent: true },
      // Donating lived under both Impact and Support.
      { source: "/support/donate", destination: "/impact/donate", permanent: true },
      // Students lived under both Community and Resources.
      { source: "/resources/students", destination: "/community/students", permanent: true },
      { source: "/resources/student", destination: "/community/students", permanent: true },
      // The service programmes and the volunteer roles are one page now.
      { source: "/impact/volunteer", destination: "/impact/service", permanent: true },
      {
        source: "/impact/community-service",
        destination: "/impact/service",
        permanent: true,
      },

      // ---- Trip aliases, previously one-line redirect pages ------------
      {
        source: "/trips/annual-conference",
        destination: "/trips/conference",
        permanent: true,
      },
      { source: "/trips/community", destination: "/trips/local-events", permanent: true },
      {
        source: "/trips/wellness-retreats",
        destination: "/trips/retreats",
        permanent: true,
      },
    ]);
  },
};

// withPayload wires the admin bundle into the Next build. It must wrap the
// exported config, not be called on it in place.
export default withPayload(nextConfig, { devBundleServerPackages: false });
