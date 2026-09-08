import Link from "next/link";
import { ArrowRight } from "lucide-react";

import ImpactGallery, { type GalleryItem } from "@/components/impact/ImpactGallery";
import { getImpactStories, imageUrl } from "@/lib/cms";
import { FALLBACK_IMPACT_STORIES } from "@/lib/fallback-content";

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
  className = "section border-t border-border bg-surface",
}: {
  eyebrow?: string;
  heading?: string;
  description?: string;
  featuredOnly?: boolean;
  limit?: number;
  cta?: { label: string; href: string };
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
        <div className="reveal mx-auto mb-12 max-w-3xl text-center">
          <p className="eyebrow mb-5">{eyebrow}</p>
          <h2 className="display-2 text-foreground">{heading}</h2>
          {description && (
            <p className="mt-5 text-lg leading-relaxed text-muted">{description}</p>
          )}
        </div>

        <ImpactGallery items={items} />

        {cta && (
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
