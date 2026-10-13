import Link from "next/link";
import { ArrowRight } from "lucide-react";

import ImpactGallery, { type GalleryItem } from "@/components/impact/ImpactGallery";
import { getImpactStories, imageUrl } from "@/lib/cms";
import { FALLBACK_IMPACT_STORIES } from "@/lib/fallback-content";
import Reveal from "@/components/motion/Reveal";

/**
 * The Impact section, as pictures rather than prose.
 *
 * This replaced three cards of programme description ("Community Service",
 * "Scholarships", "Advocacy", a paragraph each) on both the homepage and the
 * Impact page. The client's brief was to show the people served rather than
 * write about the work, so the copy here is deliberately thin — a heading and
 * one line — and the grid does the talking.
 *
 * Content comes from the `impact-stories` collection and falls back to the
 * photographs already in `public/photos/`, so the section is never empty.
 */
export default async function ImpactGallerySection({
  eyebrow = "Our Impact",
  heading = "Real People. Real Change.",
  description,
  featuredOnly = false,
  limit,
  cta,
  layout = "grid",
  aside,
  className = "section border-t border-border bg-surface",
}: {
  eyebrow?: string;
  heading?: string;
  description?: string;
  featuredOnly?: boolean;
  limit?: number;
  cta?: { label: string; href: string };
  /** See `ImpactGallery`. The mosaic puts the heading left and `cta` beside it. */
  layout?: "grid" | "mosaic";
  aside?: React.ReactNode;
  className?: string;
}) {
  const stories = await getImpactStories({ featuredOnly, limit });

  const items: GalleryItem[] = stories.length
    ? stories.map((story) => ({
        id: String(story.id),
        title: story.title,
        category: story.category,
        image: imageUrl(story.image, ""),
        videoUrl: story.videoUrl,
        caption: story.caption,
      }))
    : FALLBACK_IMPACT_STORIES.slice(0, limit).map((story, index) => ({
        id: `fallback-${index}`,
        title: story.title,
        category: story.category,
        image: story.image,
      }));

  return (
    <section className={className}>
      <div className="container mx-auto px-4 md:px-6">
        {layout === "mosaic" ? (
          <Reveal className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow mb-5">{eyebrow}</p>
              <h2 className="display-2 text-foreground">{heading}</h2>
              {description && <p className="mt-4 text-lg text-muted">{description}</p>}
            </div>
            {cta && (
              <Link href={cta.href} className="link-arrow group shrink-0">
                {cta.label}
                <ArrowRight className="btn-arrow h-4 w-4" aria-hidden="true" />
              </Link>
            )}
          </Reveal>
        ) : (
          <Reveal className="mx-auto mb-12 max-w-3xl text-center">
            <p className="eyebrow mb-5">{eyebrow}</p>
            <h2 className="display-2 text-foreground">{heading}</h2>
            {description && (
              <p className="mt-5 text-lg leading-relaxed text-muted">{description}</p>
            )}
          </Reveal>
        )}

        <ImpactGallery items={items} layout={layout} aside={aside} />

        {layout !== "mosaic" && cta && (
          <div className="mt-14 text-center">
            <Link href={cta.href} className="btn btn-outline btn-lg group">
              {cta.label}
              <ArrowRight className="btn-arrow h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
