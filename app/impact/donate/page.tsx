"use client";

import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import { useState } from "react";

const AMOUNTS = [25, 50, 100, 250, 500, 1000];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");

  const displayAmount = customAmount || (selectedAmount ? `$${selectedAmount}` : "");

  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-secondary">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-15"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-6 justify-center">
            <Link href="/" className="hover:text-primary-hover">Home</Link>
            <span className="text-white/40">/</span>
            <Link href="/impact" className="hover:text-primary-hover">Impact</Link>
            <span className="text-white/40">/</span>
            <span className="text-white/70">Donate</span>
          </div>
          <Heart className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Make an <span className="text-primary">Impact</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Your generosity funds scholarships, global experiences, and programs that change lives. Every gift — large or small — moves our mission forward.
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <div className="bg-surface border border-border rounded-3xl p-8 md:p-12">
            {/* Frequency toggle */}
            <div className="flex rounded-full bg-background border border-border p-1 mb-10">
              <button
                onClick={() => setFrequency("one-time")}
                className={`flex-1 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                  frequency === "one-time" ? "bg-primary text-background" : "text-muted hover:text-foreground"
                }`}
              >
                One-Time
              </button>
              <button
                onClick={() => setFrequency("monthly")}
                className={`flex-1 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                  frequency === "monthly" ? "bg-primary text-background" : "text-muted hover:text-foreground"
                }`}
              >
                Monthly
              </button>
            </div>

            {/* Amount selection */}
            <p className="text-sm font-semibold text-muted uppercase tracking-wider mb-4">Select an Amount</p>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {AMOUNTS.map((amt) => (
                <button
                  key={amt}
                  onClick={() => { setSelectedAmount(amt); setCustomAmount(""); }}
                  className={`py-3 rounded-xl font-bold text-sm border transition-colors ${
                    selectedAmount === amt && !customAmount
                      ? "bg-primary text-background border-primary"
                      : "bg-background border-border text-foreground hover:border-primary/50"
                  }`}
                >
                  ${amt}
                </button>
              ))}
            </div>

            {/* Custom amount */}
            <div className="relative mb-10">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted font-semibold">$</span>
              <input
                type="number"
                placeholder="Enter custom amount"
                value={customAmount}
                onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                className="w-full bg-background rounded-xl pl-8 pr-4 py-3 transition-colors donate-input"
              />
            </div>

            {/* Proceed button */}
            <Link
              href="#"
              className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-background font-bold py-4 px-8 rounded-full transition-colors text-lg"
            >
              DONATE {displayAmount} {frequency === "monthly" ? "/ MONTH" : ""} <ArrowRight className="w-5 h-5" />
            </Link>

            <p className="text-muted text-xs text-center mt-6">
              Black in Rehab is a registered 501(c)(3) nonprofit. All donations are tax-deductible. You will receive a receipt via email.
            </p>
          </div>

          {/* Impact breakdown */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { amount: "$25", impact: "Provides educational resources for one student." },
              { amount: "$100", impact: "Funds a student&apos;s conference registration." },
              { amount: "$500", impact: "Contributes to a scholarship award." },
            ].map((item, idx) => (
              <div key={idx} className="bg-surface border border-border rounded-2xl p-6 text-center">
                <p className="text-primary text-2xl font-serif font-bold mb-3">{item.amount}</p>
                <p className="text-muted text-sm" dangerouslySetInnerHTML={{ __html: item.impact }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
