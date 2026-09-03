import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  images: {
    // Uploads are served from /media by the Payload upload collection; local
    // paths need no remote patterns. Formats set explicitly so the optimiser
    // emits AVIF where the browser accepts it.
    formats: ["image/avif", "image/webp"],
  },
};

// withPayload wires the admin bundle into the Next build. It must wrap the
// exported config, not be called on it in place.
export default withPayload(nextConfig, { devBundleServerPackages: false });
