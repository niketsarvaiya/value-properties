import Link from "next/link";
import Image from "next/image";
import { MapPin, Maximize2, BedDouble, ArrowRight } from "lucide-react";
import type { Property } from "@/lib/data";

interface PropertyCardProps {
  property: Property;
  compact?: boolean;
}

export default function PropertyCard({ property, compact }: PropertyCardProps) {
  const cover = property.images.find((i) => i.isCover) ?? property.images[0];

  return (
    <Link
      href={`/properties/${property.slug}`}
      className="group block bg-white border border-[#C9A96E]/20 hover:border-[#C9A96E]/60 transition-all duration-300 overflow-hidden"
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${compact ? "h-48" : "h-64"}`}>
        {cover ? (
          <Image
            src={cover.url}
            alt={cover.caption}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            unoptimized
          />
        ) : (
          <div className="w-full h-full bg-[#0F1C2E]/10 flex items-center justify-center">
            <span className="text-[#C9A96E] font-serif text-lg">Value Properties</span>
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {property.hotProperty && (
            <span className="badge bg-[#C9A96E] text-[#0F1C2E]">Hot</span>
          )}
          {property.hidePrice && (
            <span className="badge bg-[#0F1C2E] text-white">Price on Request</span>
          )}
        </div>

        <div className="absolute top-3 right-3">
          <span className="badge bg-white/90 text-[#0F1C2E] border border-[#C9A96E]/30">
            {property.configuration.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <p className="text-xs text-[#C9A96E] tracking-widest uppercase mb-1">{property.location}</p>
            <h3 className="font-serif text-lg font-semibold text-[#0F1C2E] leading-tight group-hover:text-[#C9A96E] transition-colors">
              {property.buildingName}
            </h3>
          </div>
          <div className="text-right shrink-0">
            <p className="text-sm font-semibold text-[#0F1C2E]">{property.priceDisplay}</p>
          </div>
        </div>

        {!compact && (
          <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
            {property.shortHighlight}
          </p>
        )}

        <div className="flex items-center gap-4 text-xs text-gray-400 mt-3 pt-3 border-t border-gray-100">
          <span className="flex items-center gap-1">
            <BedDouble size={12} />
            {property.bedrooms} BHK
          </span>
          <span className="flex items-center gap-1">
            <Maximize2 size={12} />
            {property.carpetArea}
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={12} />
            {property.microLocation}
          </span>
          <span className="ml-auto flex items-center gap-1 text-[#C9A96E] font-medium">
            View <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </Link>
  );
}
