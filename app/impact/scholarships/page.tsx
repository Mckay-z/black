import Link from "next/link";
import { ArrowRight, GraduationCap, CheckCircle } from "lucide-react";

const SCHOLARSHIPS = [
  {
    name: "Black in Rehab General Scholarship",
    amount: "$1,000 – $2,500",
    eligibility: "Black students enrolled in an accredited PT, OT, or SLP graduate program.",
    deadline: "March 31, 2025",
    status: "Open",
  },
  {
    name: "Leadership Excellence Award",
    amount: "$2,500",
    eligibility: "Demonstrated leadership, community service, and academic excellence.",
    deadline: "March 31, 2025",
    status: "Open",
  },
  {
    name: "Community Impact Scholar",
    amount: "$1,500",
    eligibility: "Students who have shown outstanding commitment to underserved communities.",
    deadline: "April 15, 2025",
    status: "Open",
  },
];

const REQUIREMENTS = [
  "Identify as Black/African American",
  "Enrolled in an accredited PT, OT, or SLP graduate program",
  "Minimum 3.0 GPA",
  "Two letters of recommendation",
  "Personal statement (500–750 words)",
  "Proof of enrollment",
];

export default function ScholarshipsPage() {
  return (
    <div className="bg-background min-h-screen">
      <section className="py-24 md:py-32 bg-surface border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-6">
            <Link href="/" className="hover:text-primary-hover">Home</Link>
            <span>/</span>
            <Link href="/impact" className="hover:text-primary-hover">Impact</Link>
            <span>/</span>
            <span className="text-foreground">Scholarships</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6">
            Scholarships & <span className="text-primary">Financial Aid</span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl">
            We believe every qualified student deserves access to education. Our scholarship program breaks down financial barriers so the next generation of Black rehabilitation professionals can thrive.
          </p>
        </div>
      </section>

      {/* Available Scholarships */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-12">Available Scholarships</h2>
          <div className="space-y-6">
            {SCHOLARSHIPS.map((s, idx) => (
              <div key={idx} className="bg-surface border border-border rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-primary/50 transition-colors">
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{s.name}</h3>
                    <p className="text-primary font-semibold mb-1">{s.amount}</p>
                    <p className="text-muted text-sm">{s.eligibility}</p>
                    <p className="text-muted text-xs mt-2">Deadline: <span className="font-semibold text-foreground">{s.deadline}</span></p>
                  </div>
                </div>
                <Link
                  href="/impact/scholarships/apply"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-background font-semibold py-3 px-6 rounded-full transition-colors shrink-0"
                >
                  Apply Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-24 bg-surface border-t border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-12 text-center">General Requirements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {REQUIREMENTS.map((r, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-background border border-border rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-foreground text-sm">{r}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link href="/impact/scholarships/apply" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-background font-bold py-4 px-8 rounded-full transition-colors text-lg">
              START YOUR APPLICATION <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
