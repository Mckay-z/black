import Link from "next/link";
import { ArrowRight, GraduationCap, BookOpen, Users, FileText } from "lucide-react";
import { PHOTOS } from "@/lib/images";

const SECTIONS = [
  {
    icon: <BookOpen className="w-6 h-6 text-primary" />,
    title: "Exam Prep",
    description: "NPTE, NBCOT, Praxis — study guides, practice tests, and tips from professionals who passed.",
    cta: "Access Study Resources",
    href: "#",
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Mentorship Matching",
    description: "Get matched with a licensed professional who will guide, encourage, and advocate for you.",
    cta: "Find a Mentor",
    href: "#",
  },
  {
    icon: <FileText className="w-6 h-6 text-primary" />,
    title: "Career Toolkits",
    description: "Resume templates, interview guides, and cover letter frameworks designed for rehab students.",
    cta: "Download Toolkits",
    href: "#",
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-primary" />,
    title: "Scholarship Guide",
    description: "Everything you need to know about applying for the Black in Rehab scholarship — eligibility, timeline, and tips.",
    cta: "View Scholarship Info",
    href: "/impact/scholarships",
  },
];

const TIPS = [
  "Connect with a mentor in your field before you graduate",
  "Attend at least one national or regional conference as a student",
  "Start building your professional brand online early",
  "Apply for every scholarship you qualify for — every dollar counts",
  "Shadow practitioners in at least three different settings",
  "Join professional associations as a student member",
];

export default function StudentHubPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="section-dark relative pt-24 md:pt-32 pb-16 md:pb-20 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${PHOTOS.conferenceSession})` }}></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-6">
            <Link href="/" className="hover:text-primary-hover">Home</Link>
            <span className="text-white/40">/</span>
            <Link href="/resources" className="hover:text-primary-hover">Resources</Link>
            <span className="text-white/40">/</span>
            <span className="text-white/70">Student Hub</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6">
            Student <span className="text-primary">Hub</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10">
            Everything you need to succeed, grow, and thrive on your journey to becoming a Black rehabilitation professional.
          </p>
          <Link href="/community/join" className="btn btn-primary btn-lg group">
            JOIN FOR FREE <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="section pt-12 md:pt-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="eyebrow mb-5">For Students</h2>
            <h3 className="display-2 text-foreground">Resources Built for Your Journey</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SECTIONS.map((s, idx) => (
              <div key={idx} className="group card p-10 card-hover flex gap-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">{s.icon}</div>
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted leading-relaxed mb-6 flex-1">{s.description}</p>
                  <Link href={s.href} className="link-arrow">
                    {s.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pro Tips */}
      <section className="section bg-surface border-t border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-12 text-center">6 Tips for Future Rehab Leaders</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TIPS.map((tip, idx) => (
              <div key={idx} className="flex items-start gap-4 card card-sunken rounded-xl p-5">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold text-xs">{idx + 1}</span>
                </div>
                <p className="text-foreground text-sm leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Your Future Starts Here</h2>
          <p className="text-muted text-lg mb-10 max-w-xl mx-auto">Join thousands of students who are building their careers, finding mentors, and connecting with their community through Black in Rehab.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/community/join" className="btn btn-primary btn-lg group">
              JOIN AS A STUDENT <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/impact/scholarships" className="btn btn-outline btn-lg">
              APPLY FOR SCHOLARSHIP
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
