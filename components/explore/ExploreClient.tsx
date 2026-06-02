"use client";

import { useState } from "react";
import MumbaiMap from "./MumbaiMap";
import PropertyDrawer from "./PropertyDrawer";
import PropertyCard from "@/components/client/PropertyCard";
import { PROPERTIES, LOCATIONS } from "@/lib/data";
import { MapPin, SlidersHorizontal, X } from "lucide-react";

export default function ExploreClient() {
  const [selectedNeighbourhood, setSelectedNeighbourhood] = useState<string | null>(null);
  const [filterLocation, setFilterLocation] = useState<string>("");
  const [filterConfig, setFilterConfig] = useState<string>("");
  const [filterView, setFilterView] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"map" | "list">("map");

  const allProperties = PROPERTIES.filter((p) => p.status === "active" && p.showInListings);

  const filtered = allProperties.filter((p) => {
    if (filterLocation && p.location !== filterLocation) return false;
    if (filterConfig && p.configuration !== filterConfig) return false;
    if (filterView && p.viewType !== filterView) return false;
    return true;
  });

  const drawerProperties = selectedNeighbourhood
    ? PROPERTIES.filter((p) => p.location === selectedNeighbourhood && p.status === "active")
    : [];

  const clearFilters = () => {
    setFilterLocation("");
    setFilterConfig("");
    setFilterView("");
  };

  const hasFilters = filterLocation || filterConfig || filterView;

  return (
    <div className="min-h-screen">
      {/* Mobile tab switcher */}
      <div className="md:hidden flex border-b border-[#C9A96E]/20 bg-white sticky top-18 z-30">
        <button
          onClick={() => setActiveTab("map")}
          className={`flex-1 py-3 text-sm font-medium transition-colors ${activeTab === "map" ? "text-[#C9A96E] border-b-2 border-[#C9A96E]" : "text-gray-500"}`}
        >
          Interactive Map
        </button>
        <button
          onClick={() => setActiveTab("list")}
          className={`flex-1 py-3 text-sm font-medium transition-colors ${activeTab === "list" ? "text-[#C9A96E] border-b-2 border-[#C9A96E]" : "text-gray-500"}`}
        >
          All Properties ({allProperties.length})
        </button>
      </div>

      <div className="flex flex-col md:flex-row min-h-[calc(100vh-72px)]">
        {/* Left: Map */}
        <div className={`md:w-[45%] lg:w-[40%] bg-[#0F1C2E] ${activeTab === "list" ? "hidden md:block" : "block"}`}>
          <div className="sticky top-18 p-6 lg:p-10">
            <div className="mb-6">
              <p className="text-xs text-[#C9A96E] tracking-widest uppercase mb-1">Interactive</p>
              <h2 className="font-serif text-3xl font-semibold text-white">South Mumbai</h2>
              <p className="text-white/50 text-sm mt-2">Click a neighbourhood to explore properties</p>
            </div>

            <MumbaiMap
              selectedNeighbourhood={selectedNeighbourhood}
              onSelect={setSelectedNeighbourhood}
            />

            {/* Neighbourhood grid */}
            <div className="mt-6 grid grid-cols-2 gap-2">
              {LOCATIONS.map((loc) => {
                const count = PROPERTIES.filter((p) => p.location === loc && p.status === "active").length;
                return (
                  <button
                    key={loc}
                    onClick={() => setSelectedNeighbourhood(selectedNeighbourhood === loc ? null : loc)}
                    className={`flex items-center justify-between px-3 py-2 text-xs transition-colors ${
                      selectedNeighbourhood === loc
                        ? "bg-[#C9A96E] text-[#0F1C2E] font-semibold"
                        : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      <MapPin size={10} />
                      {loc}
                    </span>
                    {count > 0 && <span className="font-bold">{count}</span>}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Property list */}
        <div className={`flex-1 bg-[#F8F5F0] ${activeTab === "map" ? "hidden md:block" : "block"}`}>
          {/* Filter bar */}
          <div className="sticky top-18 bg-white border-b border-[#C9A96E]/20 px-6 py-4 z-20">
            <div className="flex flex-wrap items-center gap-3">
              <SlidersHorizontal size={15} className="text-[#C9A96E]" />

              <select
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
                className="text-sm border border-gray-200 px-3 py-1.5 bg-white text-[#0F1C2E] focus:outline-none focus:border-[#C9A96E]"
              >
                <option value="">All Locations</option>
                {LOCATIONS.map((l) => <option key={l} value={l}>{l}</option>)}
              </select>

              <select
                value={filterConfig}
                onChange={(e) => setFilterConfig(e.target.value)}
                className="text-sm border border-gray-200 px-3 py-1.5 bg-white text-[#0F1C2E] focus:outline-none focus:border-[#C9A96E]"
              >
                <option value="">All Types</option>
                <option value="3bhk">3 BHK</option>
                <option value="4bhk">4 BHK</option>
                <option value="duplex">Duplex</option>
                <option value="penthouse">Penthouse</option>
              </select>

              <select
                value={filterView}
                onChange={(e) => setFilterView(e.target.value)}
                className="text-sm border border-gray-200 px-3 py-1.5 bg-white text-[#0F1C2E] focus:outline-none focus:border-[#C9A96E]"
              >
                <option value="">All Views</option>
                <option value="sea">Sea View</option>
                <option value="skyline">Skyline View</option>
                <option value="city">City View</option>
              </select>

              {hasFilters && (
                <button onClick={clearFilters} className="flex items-center gap-1 text-xs text-red-500 hover:text-red-700">
                  <X size={12} /> Clear
                </button>
              )}

              <span className="ml-auto text-xs text-gray-400">{filtered.length} properties</span>
            </div>
          </div>

          {/* Properties grid */}
          <div className="p-6">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-[#0F1C2E] mb-2">No Properties Found</p>
                <p className="text-gray-500 text-sm mb-6">Try adjusting your filters.</p>
                <button onClick={clearFilters} className="text-sm text-[#C9A96E] underline">Clear all filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {filtered.map((p) => (
                  <PropertyCard key={p.id} property={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Drawer */}
      {selectedNeighbourhood && (
        <PropertyDrawer
          neighbourhood={selectedNeighbourhood}
          properties={drawerProperties}
          onClose={() => setSelectedNeighbourhood(null)}
        />
      )}
    </div>
  );
}
