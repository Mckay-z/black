import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";

import { PHOTOS } from "@/lib/images";
import { DONATE_URL, externalProps } from "@/lib/donate";
import PhotoSplitBand from "@/components/ui/PhotoSplitBand";

/** NSA's sensory room wishlist, supplied by the client. */
export const NSA_WISHLIST_URL =
  "https://www.amazon.com/hz/wishlist/ls/92BW299GGA5Z/ref=hz_ls_biz_ex";

/**
 * "Your Gift Powers the Mission" — the dark closing band from the client's
 * BIR CARES and Get Involved mockups: a photo on the left, the ask and both
 * giving actions on the right.
 */
export default function GiftBand({
  image = PHOTOS.impactVolunteersKids,
}: {
  image?: string;
}) {
  return (
    <PhotoSplitBand image={image} imageSide="left">
      <p className="eyebrow eyebrow-on-dark mb-5">Make a Difference</p>
      <h2 className="display-2 text-white">Your Gift Powers the Mission</h2>
      <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80">
        Every donation, big or small, supports therapist training in Ghana,
        NSA’s sensory room, our annual retreat, and student scholarships.
      </p>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <Link href={DONATE_URL} {...externalProps(DONATE_URL)} className="btn btn-primary btn-lg group">
          DONATE NOW <ArrowRight className="btn-arrow h-5 w-5" />
        </Link>
        <a href={NSA_WISHLIST_URL} target="_blank" rel="noopener noreferrer" className="btn btn-on-dark btn-lg">
          <Heart className="h-5 w-5" aria-hidden="true" /> SHOP THE NSA WISHLIST
        </a>
      </div>
    </PhotoSplitBand>
  );
}
