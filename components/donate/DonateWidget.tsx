"use client";

import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";

/**
 * Amount picker for the donation page.
 *
 * The picker itself always worked; the button beneath it was `href="#"`, so
 * choosing an amount led nowhere. It now sends the donor to the processor URL
 * set in Site Settings, passing the chosen amount and frequency as query
 * parameters — the convention Givebutter, Donorbox and Stripe payment links
 * all accept.
 *
 * With no processor configured the button is replaced by a plain explanation
 * rather than a control that silently fails. An obviously unfinished donation
 * flow costs less trust than one that looks ready and isn't.
 */

const AMOUNTS = [25, 50, 100, 250, 500, 1000];

export default function DonateWidget({
  donationUrl,
  contactEmail,
}: {
  donationUrl?: string | null;
  contactEmail: string;
}) {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");

  const amount = customAmount || (selectedAmount ? String(selectedAmount) : "");
  const displayAmount = amount ? `$${amount}` : "";

  const checkoutUrl = (() => {
    if (!donationUrl) return null;
    try {
      const url = new URL(donationUrl);
      if (amount) url.searchParams.set("amount", amount);
      url.searchParams.set("frequency", frequency);
      return url.toString();
    } catch {
      // A malformed URL in settings must not crash the page.
      return donationUrl;
    }
  })();

  return (
    <div className="card rounded-3xl p-8 md:p-12">
      {/* Frequency toggle */}
      <div className="flex rounded-full bg-background border border-border p-1 mb-10">
        <button
          type="button"
          onClick={() => setFrequency("one-time")}
          className={`flex-1 py-2.5 rounded-full text-sm font-semibold transition-colors ${
            frequency === "one-time" ? "bg-primary text-on-primary" : "text-muted hover:text-foreground"
          }`}
        >
          One-Time
        </button>
        <button
          type="button"
          onClick={() => setFrequency("monthly")}
          className={`flex-1 py-2.5 rounded-full text-sm font-semibold transition-colors ${
            frequency === "monthly" ? "bg-primary text-on-primary" : "text-muted hover:text-foreground"
          }`}
        >
          Monthly
        </button>
      </div>

      {/* Amount selection */}
      <p className="text-sm font-semibold text-muted uppercase tracking-wider mb-4">
        Select an Amount
      </p>
      <div className="grid grid-cols-3 gap-3 mb-6">
        {AMOUNTS.map((amt) => (
          <button
            key={amt}
            type="button"
            onClick={() => {
              setSelectedAmount(amt);
              setCustomAmount("");
            }}
            className={`py-3 rounded-xl font-bold text-sm border transition-colors ${
              selectedAmount === amt && !customAmount
                ? "bg-primary text-on-primary border-primary"
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
        <label htmlFor="custom-amount" className="sr-only">
          Custom donation amount
        </label>
        <input
          id="custom-amount"
          type="number"
          min="1"
          placeholder="Enter custom amount"
          value={customAmount}
          onChange={(e) => {
            setCustomAmount(e.target.value);
            setSelectedAmount(null);
          }}
          className="w-full bg-background rounded-xl pl-8 pr-4 py-3 transition-colors donate-input"
        />
      </div>

      {checkoutUrl ? (
        <a
          href={checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-lg group w-full"
        >
          DONATE {displayAmount} {frequency === "monthly" ? "/ MONTH" : ""}
          <ExternalLink className="w-5 h-5" />
        </a>
      ) : (
        <div className="rounded-2xl border border-border bg-background p-6 text-center">
          <p className="text-foreground font-semibold mb-2">
            Online giving is being set up.
          </p>
          <p className="text-muted text-sm">
            To make a gift today, email{" "}
            <a
              href={`mailto:${contactEmail}`}
              className="text-primary font-semibold hover:text-primary-hover transition-colors inline-flex items-center gap-1"
            >
              {contactEmail} <ArrowRight className="w-3 h-3" />
            </a>{" "}
            and we will send you everything you need.
          </p>
        </div>
      )}
    </div>
  );
}
