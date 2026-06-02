"use client";

import Link from "next/link";
import Image from "next/image";
import { X, MapPin, BedDouble, Maximize2, ArrowRight } from "lucide-react";
import type { Property } from "@/lib/data";
import { LOCATION_DESCRIPTIONS } from "@/lib/data";

interface PropertyDrawerProps {
  neighbourhood: string;
  properties: Property[];
  onClose: () => void;
}

export default function PropertyDrawer({ neighbourhood, properties, onClose }: PropertyDrawerProps) {
  const desc = LOCATION_DESCRIPTIONS[neighbourhood];

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[#F8F5F0] h-full overflow-y-auto shadow-2xl animate-slideIn">
        {/* Header */}
        <div className="bg-[#0F1C2E] px-6 py-6 sticky top-0 z-10">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-[#C9A96E] tracking-widest uppercase mb-1">South Mumbai</p>
              <h2 className="font-serif text-2xl font-semibold text-white">{neighbourhood}</h2>
              {desc && (
                <p className="text-white/60 text-sm mt-2 leading-relaxed">{desc.description}</p>
              )}
            </div>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors mt-1 ml-4"
            >
              <X size={20} />
            </button>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <span className="badge bg-[#C9A96E] text-[#0F1C2E]">
              {properties.length} {properties.length === 1 ? "Property" : "Properties"}
            </span>
          </div>
        </div>

        {/* Properties */}
        <div className="p-6">
          {properties.length === 0 ? (
            <div className="text-center py-16">
              <p className="font-serif text-xl text-[#0F1C2E] mb-2">Coming Soon</p>
              <p className="text-gray-500 text-sm">We are curating exclusive listings in {neighbourhood}.</p>
              <Link
                href="/contact"
                className="mt-6 inline-block bg-[#0F1C2E] text-white px-6 py-3 text-sm font-medium hover:bg-[#C9A96E] hover:text-[#0F1C2E] transition-colors"
              >
                Register Interest
              </Link>
            </div>
          ) : (
            <div className="space-y-5">
              {properties.map((p) => {
                const cover = p.images.find((i) => i.isCover) ?? p.images[0];
                return (
                  <Link
                    key={p.id}
                    href={`/properties/${p.slug}`}
                    className="group block bg-white border border-[#C9A96E]/20 hover:border-[#C9A96E]/60 transition-all overflow-hidden"
                  >
                    {cover && (
                      <div className="relative h-44 overflow-hidden">
                        <Image
                          src={cover.url}
                          alt={cover.caption}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          unoptimized
                        />
                        <div className="absolute top-2 right-2">
                          <span className="badge bg-white/90 text-[#0F1C2E] border border-[#C9A96E]/30">
                            {p.configuration.toUpperCase()}
                          </span>
                        </div>
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="font-serif text-lg font-semibold text-[#0F1C2E] group-hover:text-[#C9A96E] transition-colors">
                        {p.buildingName}
                      </h3>
                      <p className="text-sm font-semibold text-[#0F1C2E] mt-1">{p.priceDisplay}</p>
                      <div className="flex items-center gap-3 text-xs text-gray-400 mt-3 pt-3 border-t border-gray-100">
                        <span className="flex items-center gap-1"><BedDouble size={11} />{p.bedrooms} BHK</span>
                        <span className="flex items-center gap-1"><Maximize2 size={11} />{p.carpetArea}</span>
                        <span className="ml-auto flex items-center gap-1 text-[#C9A96E] font-medium">
                          View Details <ArrowRight size={11} />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-[#C9A96E]/20">
            <Link
              href={`/properties?location=${encodeURIComponent(neighbourhood)}`}
              className="block w-full text-center bg-[#0F1C2E] text-white py-3 text-sm font-medium hover:bg-[#C9A96E] hover:text-[#0F1C2E] transition-colors"
            >
              View All in {neighbourhood}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
