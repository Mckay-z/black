"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";

import { parseVideoUrl } from "@/lib/video";

export type GalleryItem = {
  id: string;
  title: string;
  category: "community" | "scholarships" | "donations";
  image: string;
  videoUrl?: string | null;
  caption?: string | null;
};

const CATEGORIES = [
  { value: "all", label: "All" },
  { value: "community", label: "Community Highlights" },
  { value: "scholarships", label: "Scholarships" },
  { value: "donations", label: "Donations" },
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
  // not end up with a "Donations" tab that shows an empty grid.
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

  /*
    The overlay walks the *filtered* list, not the whole gallery.

    What someone can page through should be what they were just looking at:
    open the third of four Donations and the arrow keys should give the other
    three, not the eleven behind the filter. `index` is therefore resolved
    against `visible`, and falls back to closing if the open item somehow is
    not in it.
  */
  const index = openId ? visible.findIndex((i) => i.id === openId) : -1;
  const open = index >= 0 ? visible[index] : null;

  const close = useCallback(() => setOpenId(null), []);

  const step = useCallback(
    (delta: number) => {
      setOpenId((current) => {
        const at = visible.findIndex((i) => i.id === current);
        if (at < 0 || visible.length === 0) return current;
        const next = (at + delta + visible.length) % visible.length;
        return visible[next].id;
      });
    },
    [visible],
  );

  const prev = useCallback(() => step(-1), [step]);
  const next = useCallback(() => step(1), [step]);

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
                  className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/0"
                />

                {isVideo && (
                  <span
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary/90 text-secondary shadow-float transition-transform duration-300 group-hover:scale-110"
                  >
                    <Play className="h-6 w-6 translate-x-0.5 fill-current" />
                  </span>
                )}

                <span className="sr-only">
                  {item.title}
                  {isVideo ? " — play video" : " — view larger"}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {open && (
        <Lightbox
          item={open}
          onClose={close}
          onPrev={prev}
          onNext={next}
          position={index + 1}
          total={visible.length}
        />
      )}
    </>
  );
}

/**
 * Overlay player / larger view, and the gallery's second way to browse.
 *
 * Mounted only while something is open, so the iframe is created on click and
 * torn down on close — which is also what stops a YouTube embed carrying on
 * playing behind a closed overlay. The media block is keyed on the item id so
 * that teardown also happens when you page from one video to the next, rather
 * than the same iframe being handed a new src while it is still playing.
 *
 * Left and right arrows page through, and wrap at both ends. The on-screen
 * buttons are not decoration: the keyboard shortcut is invisible, and a
 * pointer or touch user has no way to guess it.
 */
function Lightbox({
  item,
  onClose,
  onPrev,
  onNext,
  position,
  total,
}: {
  item: GalleryItem;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  position: number;
  total: number;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const video = parseVideoUrl(item.videoUrl);
  const many = total > 1;

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (!many) return;
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        onPrev();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        onNext();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose, onPrev, onNext, many]);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

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

        {many && (
          <>
            <button
              type="button"
              onClick={onPrev}
              aria-label="Previous image"
              className="absolute left-0 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-primary hover:text-on-primary md:-left-16"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={onNext}
              aria-label="Next image"
              className="absolute right-0 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-primary hover:text-on-primary md:-right-16"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}

        <div
          key={item.id}
          className="overflow-hidden rounded-[var(--radius-card)] bg-black"
        >
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

        <div className="flex items-end justify-between gap-6 pt-4">
          <div aria-live="polite" aria-atomic="true">
            <p className="font-serif text-lg font-bold text-white">{item.title}</p>
            {item.caption && (
              <p className="mt-1 text-sm leading-relaxed text-white/70">
                {item.caption}
              </p>
            )}
          </div>

          {many && (
            <p className="shrink-0 text-sm tabular-nums text-white/60">
              {position} / {total}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
