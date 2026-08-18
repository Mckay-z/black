import Link from "next/link";
import { Calendar, MapPin, ArrowRight, HandHeart, Globe2, BookOpen } from "lucide-react";

const WHAT_TO_EXPECT = [
  { icon: <HandHeart className="w-6 h-6 text-primary" />, title: "Community Service", desc: "Hands-on rehabilitation service at local clinics, schools, and community centers." },
  { icon: <Globe2 className="w-6 h-6 text-primary" />, title: "Cultural Immersion", desc: "Guided tours, local cuisine, traditional ceremony, and community storytelling." },
  { icon: <BookOpen className="w-6 h-6 text-primary" />, title: "Professional Development", desc: "Workshops, site visits, and collaboration with local healthcare practitioners." },
];

export default function GhanaPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-secondary">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-25"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-6">
            <Link href="/" className="hover:text-primary-hover">Home</Link>
            <span className="text-white/40">/</span>
            <Link href="/experiences" className="hover:text-primary-hover">Experiences</Link>
            <span className="text-white/40">/</span>
            <span className="text-white/70">Ghana Global Experience</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold text-white mb-6">
            Ghana<br /><span className="text-primary">Experience</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10">
            A week of service, cultural immersion, and professional growth in the heart of West Africa. Reconnect with your roots, serve with purpose, and leave transformed.
          </p>
          <div className="flex flex-wrap gap-6 mb-10 text-white/70 text-sm font-medium">
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /> October 10–17, 2025</div>
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Accra, Ghana</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/experiences/ghana/register" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-background font-bold py-4 px-8 rounded-full transition-colors text-lg">
              APPLY NOW <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="#experience" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold py-4 px-8 rounded-full transition-colors text-lg">
              LEARN MORE
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section id="experience" className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-primary font-medium tracking-widest uppercase mb-4 text-sm">The Experience</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                More Than a Trip. A Life-Changing Encounter.
              </h3>
              <p className="text-muted text-lg leading-relaxed mb-6">
                Our Ghana Global Experience brings together rehabilitation professionals and students for a week of purpose-driven service alongside our community partners in Accra. You will provide care, learn from local practitioners, and experience the warmth and beauty of Ghanaian culture.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                All skill levels are welcome. The only requirement is a heart for service and a spirit of learning.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&q=80",
                "https://images.unsplash.com/photo-1556484687-30636164638b?auto=format&fit=crop&q=80",
              ].map((src, idx) => (
                <div key={idx} className={`rounded-2xl overflow-hidden ${idx === 0 ? "row-span-2" : ""}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="Ghana experience" className="w-full h-full object-cover" style={{ height: idx === 0 ? "100%" : "180px" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12 text-center">What to Expect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WHAT_TO_EXPECT.map((item, idx) => (
              <div key={idx} className="bg-background border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-colors">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">{item.icon}</div>
                <h3 className="font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Ready to Answer the Call?</h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">Spots are limited. Apply now to secure your place on this transformative journey to Ghana.</p>
          <Link href="/experiences/ghana/register" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-background font-bold py-4 px-8 rounded-full transition-colors text-lg">
            APPLY NOW <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
