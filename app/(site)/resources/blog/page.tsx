import type { Metadata } from "next";
import Link from "next/link";
import { Calendar } from "lucide-react";

import { getPosts, imageUrl } from "@/lib/cms";
import { FALLBACK_POSTS, BLOG_CATEGORIES } from "@/lib/fallback-content";
import { PHOTOS } from "@/lib/images";

export const metadata: Metadata = {
  title: "Insights & Stories | Black in Rehab Foundation",
  description:
    "Articles, perspectives, and thought leadership from rehabilitation professionals, community leaders, and advocates.",
};

/**
 * Blog index.
 *
 * Reads published posts from the CMS. With none published it shows the five
 * articles the site shipped with, so the page is never empty while the client
 * is still filling the dashboard.
 */
export default async function BlogPage() {
  const cmsPosts = await getPosts();

  // Normalise both sources to one shape so the markup below stays single-path.
  const posts = cmsPosts.length
    ? cmsPosts.map((post) => ({
        slug: post.slug,
        category: post.category,
        title: post.title,
        excerpt: post.excerpt,
        readTime: post.readTime ?? "",
        featured: Boolean(post.featured),
        image: imageUrl(post.featuredImage, PHOTOS.conferencePresentation),
        date: new Date(post.publishedDate).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      }))
    : FALLBACK_POSTS;

  const featured = posts.filter((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 bg-surface border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-6">
            <Link href="/" className="hover:text-primary-hover">Home</Link>
            <span>/</span>
            <Link href="/resources" className="hover:text-primary-hover">Resources</Link>
            <span>/</span>
            <span className="text-foreground">Blog</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6">
            Insights & <span className="text-primary">Stories</span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl">
            Articles, perspectives, and thought leadership from rehabilitation professionals, community leaders, and advocates.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-surface border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex gap-2 flex-wrap">
            {BLOG_CATEGORIES.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-semibold border ${
                  cat === "All"
                    ? "bg-primary text-on-primary border-primary"
                    : "bg-background border-border text-muted"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured post */}
      {featured.map((post) => (
        <section key={post.slug} className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <Link
              href={`/resources/blog/${post.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="h-80 lg:h-125 rounded-2xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="photo photo-hover-lift w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">
                  {post.category} · Featured
                </span>
                <h2 className="display-2 text-foreground mb-6 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted text-lg leading-relaxed mb-6">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-muted text-sm">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-primary" />
                    {post.date}
                  </span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      ))}

      {/* Post grid */}
      <section className="py-16 bg-surface border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/resources/blog/${post.slug}`}
                className="group card card-sunken overflow-hidden card-hover flex flex-col"
              >
                <div className="h-44 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="photo photo-hover-lift w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-primary font-semibold text-xs uppercase tracking-widest mb-3">
                    {post.category}
                  </span>
                  <h3 className="font-bold text-foreground mb-3 group-hover:text-primary transition-colors flex-1">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-3 text-muted text-xs mt-auto pt-4 border-t border-border">
                    <span>{post.date}</span>
                    {post.readTime && (
                      <>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
