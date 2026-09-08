import Link from "next/link";
import { ArrowRight, ShoppingBag, Star } from "lucide-react";
import { PHOTOS } from "@/lib/images";

const PRODUCTS = [
  {
    id: "classic-tee",
    name: "Classic BIR Tee",
    price: "$35",
    badge: "Bestseller",
    image: PHOTOS.merchTeeDc,
  },
  {
    id: "hoodie",
    name: "BIR Signature Hoodie",
    price: "$65",
    badge: "New",
    image: PHOTOS.merchSweatshirt,
  },
  {
    id: "hat",
    name: "Embroidered Dad Hat",
    price: "$30",
    badge: null,
    image: PHOTOS.merchTeeCasual,
  },
  {
    id: "mug",
    name: "Purpose Mug",
    price: "$22",
    badge: null,
    image: PHOTOS.merchTable,
  },
  {
    id: "tote",
    name: "Healing Beyond Borders Tote",
    price: "$28",
    badge: "Limited",
    image: PHOTOS.merchTeesSeated,
  },
  {
    id: "journal",
    name: "Leader&apos;s Journal",
    price: "$24",
    badge: null,
    image: PHOTOS.merchTable,
  },
];

export default function ShopPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 bg-surface border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-6">
            <Link href="/" className="hover:text-primary-hover">Home</Link>
            <span>/</span>
            <span className="text-foreground">Shop</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-4">
                Wear the <span className="text-primary">Movement</span>
              </h1>
              <p className="text-lg text-muted max-w-xl">
                Every purchase supports our mission. Rep your purpose, fund scholarships, and show the world what Black in Rehab stands for.
              </p>
            </div>
            <div className="flex items-center gap-2 text-muted text-sm">
              <ShoppingBag className="w-5 h-5 text-primary" />
              <span>Free shipping on orders over $75</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pt-12 md:pt-16 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="group card overflow-hidden card-hover">
                <div className="relative h-64 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="photo photo-hover-lift w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-primary text-on-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{product.name}</h3>
                    <p className="text-primary font-semibold">{product.price}</p>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center group/btn transition-colors">
                    <ShoppingBag className="w-4 h-4 text-primary group-hover/btn:text-on-primary transition-colors" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Note */}
      <section className="py-16 bg-surface border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 card card-sunken p-8">
            <Star className="w-12 h-12 text-primary shrink-0" />
            <div>
              <h3 className="font-bold text-foreground text-lg mb-2">100% of proceeds support the mission</h3>
              <p className="text-muted">Every item you purchase from our shop goes directly toward scholarships, global experiences, and community programs. Thank you for wearing your purpose.</p>
            </div>
            <Link href="/impact/donate" className="btn btn-primary group shrink-0">
              ALSO DONATE <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
