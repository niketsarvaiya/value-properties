import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getPropertyBySlug, PROPERTIES } from "@/lib/data";
import { MapPin, BedDouble, Bath, Maximize2, Building, ArrowRight, CheckCircle, Car } from "lucide-react";

export async function generateStaticParams() {
  return PROPERTIES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return {};
  return { title: property.seoTitle, description: property.seoDescription };
}

export default async function PropertyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) notFound();

  const cover = property.images.find((i) => i.isCover) ?? property.images[0];
  const otherImages = property.images.filter((i) => !i.isCover).slice(0, 3);

  return (
    <div className="bg-[#F8F5F0]">
      {/* Gallery Hero */}
      <div className="relative bg-[#0F1C2E]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 h-80 md:h-[520px]">
          {cover && (
            <div className="md:col-span-2 relative overflow-hidden">
              <Image
                src={cover.url}
                alt={cover.caption}
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </div>
          )}
          <div className="hidden md:grid grid-rows-3 gap-1">
            {otherImages.map((img) => (
              <div key={img.id} className="relative overflow-hidden">
                <Image src={img.url} alt={img.caption} fill className="object-cover" unoptimized />
              </div>
            ))}
            {Array(3 - otherImages.length).fill(null).map((_, i) => (
              <div key={i} className="bg-[#1A2F4A] flex items-center justify-center">
                <span className="font-serif text-sm text-[#C9A96E]/50">{property.buildingName}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {property.hotProperty && (
            <span className="badge bg-[#C9A96E] text-[#0F1C2E]">Hot Property</span>
          )}
          <span className="badge bg-white/90 text-[#0F1C2E]">{property.configuration.toUpperCase()}</span>
          <span className="badge bg-[#0F1C2E] text-white border border-[#C9A96E]/30">{property.possessionStatus}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: Details */}
          <div className="lg:col-span-2 space-y-10">
            {/* Title block */}
            <div>
              <p className="text-xs text-[#C9A96E] tracking-widest uppercase mb-2">
                {property.location} · {property.microLocation}
              </p>
              <h1 className="font-serif text-4xl md:text-5xl font-semibold text-[#0F1C2E] leading-tight mb-4">
                {property.title}
              </h1>
              <p className="text-gray-400 text-sm flex items-center gap-1">
                <MapPin size={13} />
                {property.address}
              </p>
            </div>

            {/* Specs grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: BedDouble, label: "Bedrooms", value: `${property.bedrooms} + ${property.bathrooms} Baths` },
                { icon: Maximize2, label: "Carpet Area", value: property.carpetArea },
                { icon: Building, label: "Floor", value: `${property.floorNumber} of ${property.totalFloors}` },
                { icon: Car, label: "Parking", value: property.parking },
              ].map((spec) => (
                <div key={spec.label} className="bg-white border border-[#C9A96E]/20 p-4">
                  <spec.icon size={16} className="text-[#C9A96E] mb-2" />
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{spec.label}</p>
                  <p className="font-semibold text-[#0F1C2E] text-sm">{spec.value}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div>
              <h2 className="font-serif text-2xl font-semibold text-[#0F1C2E] mb-4">About This Residence</h2>
              <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed whitespace-pre-line">
                {property.description}
              </div>
            </div>

            {/* Lifestyle */}
            <div className="bg-[#0F1C2E] p-8">
              <h2 className="font-serif text-2xl font-semibold text-white mb-4">The Lifestyle</h2>
              <p className="text-white/70 text-sm leading-relaxed">{property.lifestyleDescription}</p>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="font-serif text-2xl font-semibold text-[#0F1C2E] mb-6">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {property.amenities.map((a) => (
                  <div key={a} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle size={14} className="text-[#C9A96E] shrink-0" />
                    {a}
                  </div>
                ))}
              </div>
            </div>

            {/* Floor Plans */}
            {property.floorPlans.length > 0 && (
              <div>
                <h2 className="font-serif text-2xl font-semibold text-[#0F1C2E] mb-6">Floor Plans</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {property.floorPlans.map((fp) => (
                    <div key={fp.id} className="bg-white border border-[#C9A96E]/20 overflow-hidden">
                      <div className="relative h-48">
                        <Image src={fp.imageUrl} alt={fp.title} fill className="object-contain p-4" unoptimized />
                      </div>
                      <div className="p-4 border-t border-gray-100">
                        <h3 className="font-semibold text-[#0F1C2E] text-sm">{fp.title}</h3>
                        <p className="text-xs text-gray-400 mt-1">{fp.carpetArea} · {fp.roomCount} rooms</p>
                        {fp.notes && <p className="text-xs text-gray-500 mt-2">{fp.notes}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Nearby Landmarks */}
            {property.nearbyLandmarks.length > 0 && (
              <div>
                <h2 className="font-serif text-2xl font-semibold text-[#0F1C2E] mb-6">Nearby Landmarks</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {property.nearbyLandmarks.map((lm) => (
                    <div key={lm.name} className="flex items-center justify-between bg-white border border-gray-100 px-4 py-3">
                      <div>
                        <p className="text-xs text-[#C9A96E] uppercase tracking-wide">{lm.category}</p>
                        <p className="text-sm font-medium text-[#0F1C2E]">{lm.name}</p>
                      </div>
                      <span className="text-xs text-gray-400 font-medium">{lm.distance}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Neighbourhood Note */}
            <div className="border-l-4 border-[#C9A96E] pl-6">
              <h3 className="font-serif text-lg font-semibold text-[#0F1C2E] mb-2">The Neighbourhood</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{property.neighbourhoodNote}</p>
            </div>

            {/* Investment note */}
            <div className="bg-[#C9A96E]/10 border border-[#C9A96E]/30 p-6">
              <h3 className="font-serif text-lg font-semibold text-[#0F1C2E] mb-2">Investment Perspective</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{property.investmentNote}</p>
            </div>
          </div>

          {/* Right: Sticky sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white border border-[#C9A96E]/30 overflow-hidden">
                {/* Price */}
                <div className="bg-[#0F1C2E] px-6 py-6">
                  <p className="text-[#C9A96E]/70 text-xs tracking-widest uppercase mb-1">Price</p>
                  <p className="font-serif text-3xl font-semibold text-white">{property.priceDisplay}</p>
                  {!property.hidePrice && (
                    <p className="text-white/50 text-xs mt-1">{property.pricePerSqFt}</p>
                  )}
                </div>

                {/* Quick specs */}
                <div className="px-6 py-5 space-y-3 border-b border-gray-100">
                  {[
                    { label: "Type", value: property.propertyType },
                    { label: "Configuration", value: property.configuration.toUpperCase() },
                    { label: "Carpet Area", value: property.carpetArea },
                    { label: "Floor", value: property.floorNumber },
                    { label: "View", value: property.viewType.charAt(0).toUpperCase() + property.viewType.slice(1) },
                    { label: "Facing", value: property.facing },
                    { label: "Vastu", value: property.vastuStatus === "yes" ? "Compliant" : property.vastuStatus === "no" ? "Not Compliant" : "Unknown" },
                    { label: "RERA", value: property.reraNumber },
                    { label: "Maintenance", value: property.maintenance },
                  ].map((spec) => (
                    <div key={spec.label} className="flex justify-between items-start gap-4 text-sm">
                      <span className="text-gray-400 text-xs shrink-0">{spec.label}</span>
                      <span className="text-[#0F1C2E] text-xs font-medium text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="px-6 py-5 space-y-3">
                  <Link
                    href={`/enquire/${property.slug}`}
                    className="flex items-center justify-center gap-2 w-full bg-[#C9A96E] text-[#0F1C2E] py-3.5 font-semibold text-sm hover:bg-[#0F1C2E] hover:text-white transition-colors"
                  >
                    Book a Site Visit
                    <ArrowRight size={15} />
                  </Link>
                  <a
                    href="tel:+919820000000"
                    className="flex items-center justify-center gap-2 w-full border border-[#0F1C2E] text-[#0F1C2E] py-3.5 font-medium text-sm hover:bg-[#0F1C2E] hover:text-white transition-colors"
                  >
                    Call Sreeja
                  </a>
                  <p className="text-center text-xs text-gray-400">Strictly by appointment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
