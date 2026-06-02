"use client";

import { useState } from "react";
import PropertyCard from "@/components/client/PropertyCard";
import PageHeader from "@/components/shared/PageHeader";
import { getListingProperties, LOCATIONS } from "@/lib/data";
import { SlidersHorizontal, X } from "lucide-react";

export default function PropertiesPage() {
  const [location, setLocation] = useState("");
  const [config, setConfig] = useState("");
  const [viewType, setViewType] = useState("");

  const filters = {
    ...(location && { location }),
    ...(config && { configuration: config }),
    ...(viewType && { viewType }),
  };

  const properties = getListingProperties(Object.keys(filters).length ? filters : undefined);
  const hasFilters = location || config || viewType;

  return (
    <div className="bg-[#F8F5F0] min-h-screen">
      {/* Header */}
      <div className="bg-[#0F1C2E] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <PageHeader
            eyebrow="Curated Listings"
            title="All Properties"
            subtitle="Personally verified residences across South Mumbai's most prestigious addresses."
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Filter bar */}
        <div className="bg-white border border-[#C9A96E]/20 p-5 mb-8 flex flex-wrap items-center gap-4">
          <SlidersHorizontal size={16} className="text-[#C9A96E]" />

          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="text-sm border border-gray-200 px-3 py-2 focus:outline-none focus:border-[#C9A96E]"
          >
            <option value="">All Locations</option>
            {LOCATIONS.map((l) => <option key={l} value={l}>{l}</option>)}
          </select>

          <select
            value={config}
            onChange={(e) => setConfig(e.target.value)}
            className="text-sm border border-gray-200 px-3 py-2 focus:outline-none focus:border-[#C9A96E]"
          >
            <option value="">All Types</option>
            <option value="3bhk">3 BHK</option>
            <option value="4bhk">4 BHK</option>
            <option value="duplex">Duplex</option>
            <option value="penthouse">Penthouse</option>
          </select>

          <select
            value={viewType}
            onChange={(e) => setViewType(e.target.value)}
            className="text-sm border border-gray-200 px-3 py-2 focus:outline-none focus:border-[#C9A96E]"
          >
            <option value="">All Views</option>
            <option value="sea">Sea View</option>
            <option value="skyline">Skyline View</option>
            <option value="city">City View</option>
          </select>

          {hasFilters && (
            <button
              onClick={() => { setLocation(""); setConfig(""); setViewType(""); }}
              className="flex items-center gap-1 text-xs text-red-500 hover:text-red-700"
            >
              <X size={12} /> Clear Filters
            </button>
          )}

          <span className="ml-auto text-sm text-gray-400">{properties.length} properties</span>
        </div>

        {/* Grid */}
        {properties.length === 0 ? (
          <div className="text-center py-24">
            <p className="font-serif text-3xl text-[#0F1C2E] mb-2">No Properties Found</p>
            <p className="text-gray-500">Try different filters to discover more properties.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
