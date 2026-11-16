import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";

import { externalProps } from "@/lib/donate";

export const metadata: Metadata = {
  title: "Shop | Black In Rehab Foundation",
  description:
    "The Black in Rehab varsity jacket — pre-order now. $129, shipping included.",
};

/**
 * The shop: one item, the varsity jacket, on pre-order.
 *
 * Checkout is a Stripe Payment Link, the same approach as The Connection
 * Table. Every button here points at the link below; set
 * `NEXT_PUBLIC_JACKET_PREORDER_URL` to override it without a code change, or
 * set the link to `null` and the page says pre-orders are opening soon. The link is read at build time, so
 * changing it needs a redeploy.
 *
 * The link itself must collect, on top of payment: the buyer's name, a
 * REQUIRED "Size" dropdown (S, M, L, XL, 2XL, 3XL) and a shipping address.
 * $129 includes shipping, so no shipping rate is added in Stripe.
 */
const PREORDER_URL: string | null =
  process.env.NEXT_PUBLIC_JACKET_PREORDER_URL ||
  "https://buy.stripe.com/aFa28t51M3ec26wd4K8IU0b";

const JACKET_IMAGE = "/photos/merch-varsity-jacket.png";

const SIZES = ["S", "M", "L", "XL", "2XL", "3XL"] as const;

/** Inches, from the client's size chart. */
const SIZE_CHART = [
  { measure: "Width", values: [19, 21, 22, 24, 26, 27] },
  { measure: "Length", values: [26, 27, 28, 30, 31, 32] },
  { measure: "Sleeve length", values: [25, 26, 27, 28, 28, 29] },
] as const;

export default function ShopPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-surface border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-6">
            <Link href="/" className="hover:text-primary-hover">Home</Link>
            <span>/</span>
            <span className="text-foreground">Shop</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-4">
            Wear the <span className="text-primary">Movement</span>
          </h1>
          <p className="text-lg text-muted max-w-xl">
            Rep your purpose and show the world what Black in Rehab stands for.
          </p>
        </div>
      </section>

      {/* The jacket */}
      <section className="pt-12 md:pt-16 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="mx-auto w-full max-w-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={JACKET_IMAGE}
                alt="The Black in Rehab varsity jacket, front and back: black body with white sleeves, a BIR chest mark, and a back crest reading Black in Rehab, OT, PT, SLP, We Are the 5%."
                className="h-auto w-full drop-shadow-2xl"
              />
            </div>

            <div>
              <p className="chip self-start">Pre-order</p>
              <h2 className="mt-5 font-serif text-3xl md:text-4xl font-bold text-foreground">
                Black in Rehab Varsity Jacket
              </h2>
              <p className="mt-3 text-3xl font-semibold text-primary">$129</p>
              <p className="mt-1 text-sm text-muted">Shipping included.</p>

              <p className="mt-6 leading-relaxed text-muted">
                Black body, white sleeves, and the &ldquo;We Are the 5%&rdquo; crest across the
                back for OT, PT and SLP. Choose your size and shipping address at checkout.
              </p>

              <div className="mt-8">
                {PREORDER_URL ? (
                  <Link
                    href={PREORDER_URL}
                    {...externalProps(PREORDER_URL)}
                    className="btn btn-primary btn-lg group w-full sm:w-auto"
                  >
                    PRE-ORDER NOW <ArrowRight className="btn-arrow h-5 w-5" />
                  </Link>
                ) : (
                  <p
                    role="status"
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium text-foreground"
                  >
                    <ShoppingBag className="h-4 w-4 text-primary" aria-hidden="true" />
                    Pre-orders are opening soon.
                  </p>
                )}
              </div>

              {/* Size chart */}
              <h3 className="mt-12 font-serif text-2xl font-bold text-foreground">
                Size chart
              </h3>
              <div className="mt-4 overflow-x-auto rounded-xl border border-border">
                <table className="w-full min-w-[28rem] text-center text-sm">
                  <caption className="sr-only">
                    Jacket measurements in inches, by size
                  </caption>
                  <thead className="bg-surface text-foreground">
                    <tr>
                      <th scope="col" className="px-3 py-3 text-left font-bold">Size</th>
                      {SIZES.map((size) => (
                        <th key={size} scope="col" className="px-3 py-3 font-bold">
                          {size}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {SIZE_CHART.map((row) => (
                      <tr key={row.measure} className="border-t border-border">
                        <th scope="row" className="px-3 py-3 text-left font-semibold text-foreground">
                          {row.measure}
                        </th>
                        {row.values.map((value, i) => (
                          <td key={SIZES[i]} className="px-3 py-3 text-muted">
                            {value}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs uppercase tracking-wider text-muted">
                All measurements are in inches.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
