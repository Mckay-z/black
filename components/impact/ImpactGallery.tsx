"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Play, X } from "lucide-react";

import { parseVideoUrl } from "@/lib/video";

export type GalleryItem = {
  id: string;
  title: string;
  category: "community" | "scholarships" | "bookbags";
  image: string;
  videoUrl?: string | null;
  caption?: string | null;
};

const CATEGORIES = [
  { value: "all", label: "All" },
  { value: "community", label: "Community Highlights" },
  { value: "scholarships", label: "Scholarships" },
  { value: "bookbags", label: "Bookbags" },
] as const;

type Filter = (typeof CATEGORIES)[number]["value"];

/**
 * The Impact page's evidence grid.
 *
 * Cards are deliberately picture-first: the title sits over the image and the
 * caption is one optional line, because this section replaced three
 * paragraphs of programme description that the client asked us to cut.
 *
 * A video plays in an overlay rather than inline in the grid — an embed per
 * card would mean one third-party iframe per item on first paint.
 */
export default function ImpactGallery({ items }: { items: GalleryItem[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [openId, setOpenId] = useState<string | null>(null);

  // Only offer a filter the gallery can actually satisfy, so the client does
  // not end up with a "Bookbags" tab that shows an empty grid.
  const available = useMemo(
    () =>
      CATEGORIES.filter(
        (c) => c.value === "all" || items.some((i) => i.category === c.value),
      ),
    [items],
  );

  const visible = useMemo(
    () => (filter === "all" ? items : items.filter((i) => i.category === filter)),
    [items, filter],
  );

  const open = openId ? (items.find((i) => i.id === openId) ?? null) : null;
  const close = useCallback(() => setOpenId(null), []);

  if (!items.length) return null;

  return (
    <>
      {available.length > 2 && (
        <div
          role="tablist"
          aria-label="Filter impact stories"
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {available.map((category) => {
            const active = filter === category.value;
            return (
              <button
                key={category.value}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(category.value)}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
                  active
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>
      )}

      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item) => {
          const isVideo = Boolean(parseVideoUrl(item.videoUrl));

          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => setOpenId(item.id)}
                className="group relative block h-full w-full overflow-hidden rounded-[var(--radius-card)] border border-border text-left shadow-soft transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-float"
              >
                <span className="block aspect-4/3 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                  />
                </span>

                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent"
                />

                {isVideo && (
                  <span
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary/90 text-secondary shadow-float transition-transform duration-300 group-hover:scale-110"
                  >
                    <Play className="h-6 w-6 translate-x-0.5 fill-current" />
                  </span>
                )}

                <span className="absolute inset-x-0 bottom-0 p-6">
                  <span className="block font-serif text-lg font-bold leading-snug text-white">
                    {item.title}
                  </span>
                  {item.caption && (
                    <span className="mt-1.5 block text-sm leading-relaxed text-white/70">
                      {item.caption}
                    </span>
                  )}
                  <span className="sr-only">
                    {isVideo ? " — play video" : " — view larger"}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {open && <Lightbox item={open} onClose={close} />}
    </>
  );
}

/**
 * Overlay player / larger view.
 *
 * Mounted only while something is open, so the iframe is created on click and
 * torn down on close — which is also what stops a YouTube embed carrying on
 * playing behind a closed overlay.
 */
function Lightbox({ item, onClose }: { item: GalleryItem; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const video = parseVideoUrl(item.videoUrl);

  useEffect(() => {
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="relative w-full max-w-4xl"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute -top-12 right-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-primary hover:text-primary"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="overflow-hidden rounded-[var(--radius-card)] bg-black">
          {video?.kind === "iframe" ? (
            <iframe
              // An unlisted Vimeo link already carries its privacy hash as a
              // query, so the separator has to be chosen rather than assumed.
              src={`${video.src}${video.src.includes("?") ? "&" : "?"}autoplay=1`}
              title={item.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="aspect-video w-full"
            />
          ) : video?.kind === "file" ? (
            <video
              src={video.src}
              poster={item.image}
              controls
              autoPlay
              playsInline
              className="aspect-video w-full bg-black"
            />
          ) : (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={item.image}
              alt={item.title}
              className="max-h-[80vh] w-full object-contain"
            />
          )}
        </div>

        <div className="pt-4">
          <p className="font-serif text-lg font-bold text-white">{item.title}</p>
          {item.caption && (
            <p className="mt-1 text-sm leading-relaxed text-white/70">{item.caption}</p>
          )}
        </div>
      </div>
    </div>
  );
}
