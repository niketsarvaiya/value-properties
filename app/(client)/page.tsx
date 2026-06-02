import Link from "next/link";
import { ArrowRight, CheckCircle, MapPin, Phone } from "lucide-react";
import PropertyCard from "@/components/client/PropertyCard";
import { getFeaturedProperties } from "@/lib/data";

export default function HomePage() {
  const featured = getFeaturedProperties().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0F1C2E 0%, #1A2F4A 40%, #0F1C2E 100%)",
        }}
      >
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A96E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Champagne accent lines */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C9A96E]/20 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C9A96E]/20 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <p className="text-[#C9A96E] text-xs tracking-[0.4em] uppercase mb-8 font-medium">
            South Mumbai · Est. 2024
          </p>

          <h1 className="font-serif text-5xl md:text-7xl font-semibold text-white leading-[1.05] mb-8">
            Luxury Residences in
            <br />
            <span className="text-[#C9A96E]">South Mumbai&apos;s</span>
            <br />
            Most Prestigious Addresses
          </h1>

          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
            Every property personally curated by Sreeja. From Malabar Hill to Cuffe Parade —
            homes that reflect your stature.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/explore"
              className="inline-flex items-center gap-3 bg-[#C9A96E] text-[#0F1C2E] px-8 py-4 font-semibold text-sm tracking-wide hover:bg-white transition-colors group"
            >
              <MapPin size={16} />
              Explore Mumbai Map
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+919820000000"
              className="inline-flex items-center gap-3 border border-[#C9A96E]/40 text-white px-8 py-4 font-medium text-sm tracking-wide hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors"
            >
              <Phone size={16} />
              Speak to Sreeja
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-[10px] tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-white border-y border-[#C9A96E]/20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Curated Residences", value: "10" },
              { label: "Price Range", value: "₹9Cr – ₹80Cr+" },
              { label: "Locations", value: "7" },
              { label: "Verified Listings", value: "100%" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl font-semibold text-[#0F1C2E] mb-1">{stat.value}</p>
                <p className="text-xs text-gray-500 tracking-widest uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs text-[#C9A96E] tracking-[0.25em] uppercase mb-2">Hand-Picked</p>
              <h2 className="font-serif text-4xl font-semibold text-[#0F1C2E]">Featured Residences</h2>
            </div>
            <Link
              href="/properties"
              className="hidden md:flex items-center gap-2 text-sm text-[#C9A96E] hover:text-[#0F1C2E] transition-colors font-medium"
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 text-sm text-[#C9A96E] font-medium"
            >
              View All Properties <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs text-[#C9A96E] tracking-[0.25em] uppercase mb-2">Simple Process</p>
            <h2 className="font-serif text-4xl font-semibold text-[#0F1C2E]">How It Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[
              {
                step: "01",
                title: "Explore the Map",
                desc: "Navigate South Mumbai's neighbourhoods on our interactive map to find your preferred area.",
              },
              {
                step: "02",
                title: "Select a Property",
                desc: "Browse curated listings with detailed specifications, floor plans, and neighbourhood context.",
              },
              {
                step: "03",
                title: "Book a Site Visit",
                desc: "Schedule a private viewing at your convenience. Sreeja personally accompanies each visit.",
              },
              {
                step: "04",
                title: "Get the Keys",
                desc: "Our team handles documentation, RERA compliance, and registration — end to end.",
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="text-[#C9A96E]/20 font-serif text-8xl font-bold leading-none absolute -top-4 -left-2 select-none">
                  {item.step}
                </div>
                <div className="relative pt-8">
                  <h3 className="font-serif text-xl font-semibold text-[#0F1C2E] mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#0F1C2E]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs text-[#C9A96E] tracking-[0.25em] uppercase mb-2">Client Stories</p>
            <h2 className="font-serif text-4xl font-semibold text-white">Trusted by Discerning Families</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Sreeja understood exactly what we were looking for — a sea-facing home in Worli that also felt like a family home. She found us the perfect unit at Oberoi Three Sixty West within three visits.",
                name: "Vikram & Priya Malhotra",
                detail: "Worli Seaface Residents",
              },
              {
                quote: "As an NRI, I was nervous about purchasing remotely. Sreeja handled every detail — from the initial shortlisting to registration — without me having to fly to Mumbai even once.",
                name: "Ananya Sharma",
                detail: "Singapore-based NRI",
              },
              {
                quote: "The quality of properties Sreeja curates is exceptional. No time-wasting — every property she showed us was exactly within our parameters. We closed on The Imperial in under 6 weeks.",
                name: "Rajesh Patel",
                detail: "Tardeo Resident",
              },
            ].map((t) => (
              <div key={t.name} className="bg-white/5 border border-[#C9A96E]/20 p-8">
                <div className="text-[#C9A96E] text-4xl font-serif mb-4">&ldquo;</div>
                <p className="text-white/80 text-sm leading-relaxed mb-6 italic">{t.quote}</p>
                <div>
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-[#C9A96E] text-xs tracking-wide">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-[#C9A96E]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl font-semibold text-[#0F1C2E] mb-4">
            Ready to Find Your Address?
          </h2>
          <p className="text-[#0F1C2E]/70 text-lg mb-8">
            Schedule a private consultation with Sreeja — no obligation, just clarity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/explore"
              className="inline-flex items-center gap-2 bg-[#0F1C2E] text-white px-8 py-4 font-semibold text-sm hover:bg-[#0A0A0A] transition-colors"
            >
              <MapPin size={16} /> Explore Properties
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-[#0F1C2E] text-[#0F1C2E] px-8 py-4 font-semibold text-sm hover:bg-[#0F1C2E] hover:text-white transition-colors"
            >
              <Phone size={16} /> Contact Sreeja
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
