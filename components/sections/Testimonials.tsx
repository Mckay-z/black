import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

import { getTestimonials, imageUrl } from "@/lib/cms";
import { FALLBACK_TESTIMONIALS } from "@/lib/fallback-content";
import { parseVideoUrl } from "@/lib/video";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

/**
 * Member quotes on the homepage.
 *
 * Reads published testimonials from the CMS and falls back to the three that
 * shipped with the build. Those three are invented — the client has not yet
 * supplied attributed member stories — which is why a card without a photo
 * shows initials rather than a stock portrait of someone who does not exist.
 * Real testimonials entered in the dashboard can carry a real photo.
 *
 * A testimonial with a video link becomes a video card: the client asked for
 * people talking on camera about what Black in Rehab has meant to them, and
 * that is the shape it takes once the footage is uploaded and the link is
 * pasted into the dashboard. The written quote stays underneath, so a card
 * still reads as a testimonial with the video blocked or still loading.
 *
 * The iframes are lazy so three embeds below the fold do not cost three
 * third-party page loads on arrival.
 */

const initials = (name: string) =>
  name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

export default async function Testimonials() {
  const cmsTestimonials = await getTestimonials("homepage");

  const testimonials = cmsTestimonials.length
    ? cmsTestimonials.map((t) => ({
        id: String(t.id),
        quote: t.quote,
        author: t.author,
        role: t.role,
        photo: t.photo ? imageUrl(t.photo, "") : "",
        videoUrl: t.videoUrl,
      }))
    : FALLBACK_TESTIMONIALS.map((t, i) => ({
        ...t,
        id: `fallback-${i}`,
        photo: "",
        videoUrl: null as string | null,
      }));

  return (
    <section className="section bg-glow overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center">
          <p className="eyebrow mb-5">In Their Words</p>
          <h2 className="display-2 text-foreground">Real Stories. Real Impact.</h2>
        </Reveal>

        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => {
            const video = parseVideoUrl(testimonial.videoUrl);

            return (
            <StaggerItem
              as="figure"
              key={testimonial.id}
              className="card card-hover flex flex-col overflow-hidden"
            >
              {video?.kind === "iframe" ? (
                <iframe
                  src={video.src}
                  title={`${testimonial.author} on Black in Rehab`}
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="aspect-video w-full border-b border-border bg-black"
                />
              ) : video?.kind === "file" ? (
                <video
                  src={video.src}
                  poster={testimonial.photo || undefined}
                  controls
                  preload="none"
                  playsInline
                  className="aspect-video w-full border-b border-border bg-black"
                />
              ) : null}

              <div className="flex flex-1 flex-col p-8">
              <Quote
                className="mb-5 h-8 w-8 text-primary/30"
                aria-hidden="true"
              />

              <blockquote className="mb-8 flex-1 text-lg leading-relaxed text-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-auto flex items-center gap-4 border-t border-border pt-6">
                {testimonial.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={testimonial.photo}
                    alt=""
                    loading="lazy"
                    className="photo h-12 w-12 shrink-0 rounded-full border-2 border-primary/25 object-cover"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary/25 bg-primary/10"
                  >
                    <span className="font-serif text-sm font-bold text-primary">
                      {initials(testimonial.author)}
                    </span>
                  </span>
                )}

                <span>
                  <span className="block text-sm font-bold text-foreground">
                    {testimonial.author}
                  </span>
                  <span className="block text-xs uppercase tracking-[0.12em] text-muted">
                    {testimonial.role}
                  </span>
                </span>
              </figcaption>
              </div>
            </StaggerItem>
            );
          })}
        </Stagger>

        <div className="mt-14 text-center">
          <p className="mb-6 text-muted">
            Been part of this community? We would like to hear how it went.
          </p>
          <Link
            href="/community/share-your-story"
            className="btn btn-primary btn-lg group"
          >
            SHARE YOUR STORY
            <ArrowRight className="btn-arrow h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
