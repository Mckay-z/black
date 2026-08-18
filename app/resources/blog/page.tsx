import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

const POSTS = [
  {
    slug: "breaking-barriers-black-rehabilitation",
    category: "Leadership",
    title: "Breaking Barriers: How Black Rehabilitation Professionals Are Leading the Way",
    excerpt: "From academic halls to global service trips, Black rehab professionals are reshaping what leadership looks like in healthcare.",
    date: "July 15, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1573166364524-d9dbfd8bbf83?auto=format&fit=crop&q=80",
    featured: true,
  },
  {
    slug: "five-reasons-ghana",
    category: "Global Experiences",
    title: "5 Reasons Every Rehab Professional Should Travel for Service",
    excerpt: "Service travel transforms your clinical lens. Here&apos;s why our Ghana experience changed everything for our members.",
    date: "June 28, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80",
    featured: false,
  },
  {
    slug: "mentorship-matters",
    category: "Professional Development",
    title: "Mentorship Matters: How to Find Your Tribe in Rehabilitation",
    excerpt: "Having a mentor isn't optional — it's essential. Here's how to identify, approach, and nurture meaningful mentorship relationships.",
    date: "June 10, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80",
    featured: false,
  },
  {
    slug: "health-equity-2025",
    category: "Advocacy",
    title: "The State of Health Equity in Rehabilitation: What the Data Tells Us",
    excerpt: "A deep dive into the disparities Black patients face when accessing rehabilitation services and what we can do about it.",
    date: "May 22, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
    featured: false,
  },
  {
    slug: "wellness-practices",
    category: "Wellness",
    title: "Heal the Healer: Wellness Practices Every Rehab Professional Needs",
    excerpt: "We spend our careers helping others heal. But who heals us? Here are evidence-based wellness strategies built for your profession.",
    date: "May 8, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80",
    featured: false,
  },
];

const CATEGORIES = ["All", "Leadership", "Global Experiences", "Professional Development", "Advocacy", "Wellness", "Community"];

export default function BlogPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="py-24 md:py-32 bg-surface border-b border-border">
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
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors border ${
                  cat === "All"
                    ? "bg-primary text-background border-primary"
                    : "bg-background border-border text-muted hover:border-primary hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {POSTS.filter(p => p.featured).map((post) => (
        <section key={post.slug} className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <Link href={`/resources/blog/${post.slug}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="h-80 lg:h-125 rounded-2xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">{post.category} · Featured</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6 group-hover:text-primary transition-colors">{post.title}</h2>
                <p className="text-muted text-lg leading-relaxed mb-6">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-muted text-sm">
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-primary" />{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      ))}

      {/* Post Grid */}
      <section className="py-16 bg-surface border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {POSTS.filter(p => !p.featured).map((post) => (
              <Link key={post.slug} href={`/resources/blog/${post.slug}`} className="group bg-background border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors flex flex-col">
                <div className="h-44 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-primary font-semibold text-xs uppercase tracking-widest mb-3">{post.category}</span>
                  <h3 className="font-bold text-foreground mb-3 group-hover:text-primary transition-colors flex-1">{post.title}</h3>
                  <div className="flex items-center gap-3 text-muted text-xs mt-auto pt-4 border-t border-border">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="inline-flex items-center gap-2 bg-surface border border-border hover:border-primary text-foreground font-semibold py-4 px-8 rounded-full transition-colors">
              LOAD MORE ARTICLES <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
