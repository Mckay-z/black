import Link from "next/link";
import { ArrowRight, GraduationCap, CheckCircle } from "lucide-react";

/**
 * Applications are closed, at the client's instruction in their revision
 * document. The page still describes each award and what it takes to qualify
 * — a student planning ahead needs that — but nothing here invites an
 * application that cannot be submitted.
 *
 * The 2025 deadlines the build shipped with are gone rather than rolled
 * forward: the client has not given the next round's dates. Put them back,
 * with `applicationsOpen` flipped to true, when they do.
 */
const APPLICATIONS_OPEN = false;

const SCHOLARSHIPS = [
  {
    name: "Black in Rehab General Scholarship",
    amount: "$1,000 – $2,500",
    eligibility: "Black students enrolled in an accredited PT, OT, or SLP graduate program.",
  },
  {
    name: "Leadership Excellence Award",
    amount: "$2,500",
    eligibility: "Demonstrated leadership, community service, and academic excellence.",
  },
  {
    name: "Community Impact Scholar",
    amount: "$1,500",
    eligibility: "Students who have shown outstanding commitment to underserved communities.",
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
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 bg-surface border-b border-border">
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
          {!APPLICATIONS_OPEN && (
            <p className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground">
              <span className="chip">Closed</span>
              Applications are closed for this round. Join the community and we
              will tell you the moment the next one opens.
            </p>
          )}
        </div>
      </section>

      {/* Available Scholarships */}
      <section className="section pt-12 md:pt-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-12">Available Scholarships</h2>
          <div className="space-y-6">
            {SCHOLARSHIPS.map((s, idx) => (
              <div key={idx} className="card p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 card-hover">
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{s.name}</h3>
                    <p className="text-primary font-semibold mb-1">{s.amount}</p>
                    <p className="text-muted text-sm">{s.eligibility}</p>
                  </div>
                </div>
                {APPLICATIONS_OPEN ? (
                  <Link
                    href="/impact/scholarships/apply"
                    className="btn btn-primary group shrink-0"
                  >
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <span className="shrink-0 text-sm font-semibold text-muted">
                    Applications closed
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section bg-surface border-t border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-12 text-center">General Requirements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {REQUIREMENTS.map((r, idx) => (
              <div key={idx} className="flex items-start gap-3 card card-sunken rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-foreground text-sm">{r}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            {APPLICATIONS_OPEN ? (
              <Link href="/impact/scholarships/apply" className="btn btn-primary btn-lg group">
                START YOUR APPLICATION <ArrowRight className="w-5 h-5" />
              </Link>
            ) : (
              <>
                <p className="mx-auto mb-8 max-w-xl leading-relaxed text-muted">
                  The next round is not open yet. Students in the community hear
                  about every award before it is announced anywhere else.
                </p>
                <Link href="/community/join" className="btn btn-primary btn-lg group">
                  JOIN FREE AS A STUDENT <ArrowRight className="w-5 h-5" />
                </Link>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
