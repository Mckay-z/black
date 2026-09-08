import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { RichText } from "@payloadcms/richtext-lexical/react";

import { getPostBySlug, getPosts, imageUrl } from "@/lib/cms";
import { FALLBACK_POSTS } from "@/lib/fallback-content";
import { PHOTOS } from "@/lib/images";

/**
 * Individual blog article.
 *
 * This route did not exist before. The blog index has always linked to
 * `/resources/blog/{slug}`, so every card on that page 404'd — the most
 * visible bug on the site.
 *
 * Posts come from the CMS. The five articles that shipped hardcoded still
 * resolve here so no existing link breaks; they render their summary with an
 * honest note that the body has not been written yet, rather than inventing
 * an article the foundation never published.
 */

type Params = { params: Promise<{ slug: string }> };

// Pre-render known posts; anything added in the dashboard later is rendered on
// demand and then cached.
export async function generateStaticParams() {
  const posts = await getPosts();
  const slugs = new Set([
    ...posts.map((p) => p.slug),
    ...FALLBACK_POSTS.map((p) => p.slug),
  ]);
  return [...slugs].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const fallback = FALLBACK_POSTS.find((p) => p.slug === slug);
  const title = post?.title ?? fallback?.title;
  const description = post?.excerpt ?? fallback?.excerpt;

  if (!title) return { title: "Article not found" };

  return {
    title: `${title} | Black in Rehab Foundation`,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post?.publishedDate ?? undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const fallback = FALLBACK_POSTS.find((p) => p.slug === slug);

  if (!post && !fallback) notFound();

  const title = post?.title ?? fallback!.title;
  const category = post?.category ?? fallback!.category;
  const excerpt = post?.excerpt ?? fallback!.excerpt;
  const readTime = post?.readTime ?? fallback!.readTime;
  const image = post
    ? imageUrl(post.featuredImage, fallback?.image ?? PHOTOS.conferencePresentation)
    : fallback!.image;
  const date = post?.publishedDate
    ? new Date(post.publishedDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : fallback!.date;

  const author =
    post?.author && typeof post.author === "object" ? post.author : null;

  return (
    <article className="bg-background min-h-screen">
      {/* Header over the featured image */}
      <header className="section-dark relative overflow-hidden bg-secondary pt-24 md:pt-32 pb-16 md:pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url('${image}')` }}
          aria-hidden="true"
        />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm font-medium text-primary mb-6"
          >
            <Link href="/" className="hover:text-primary-hover">Home</Link>
            <span className="text-white/40">/</span>
            <Link href="/resources" className="hover:text-primary-hover">Resources</Link>
            <span className="text-white/40">/</span>
            <Link href="/resources/blog" className="hover:text-primary-hover">Blog</Link>
          </nav>

          <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">
            {category}
          </span>

          <h1 className="display-1 text-white mb-6 max-w-4xl">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            {excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-6 mt-8 text-white/70 text-sm font-medium">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-primary" />
              {date}
            </span>
            {readTime && (
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-primary" />
                {readTime}
              </span>
            )}
            {author && <span>By {author.name}</span>}
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          {post?.content ? (
            <div className="prose-article">
              <RichText data={post.content} />
            </div>
          ) : (
            // A hardcoded post has a headline and summary but no body. Say so
            // plainly rather than padding it out with invented text.
            <div className="card p-8 text-center">
              <p className="text-foreground font-semibold mb-2">
                This article has not been published yet.
              </p>
              <p className="text-muted text-sm">
                The full text will appear here once it is added in the dashboard.
              </p>
            </div>
          )}

          <div className="mt-16 pt-8 border-t border-border">
            <Link
              href="/resources/blog"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-hover transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to all articles
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
