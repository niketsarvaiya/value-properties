import { PROPERTIES } from "@/lib/data";
import { Eye, EyeOff, Flame } from "lucide-react";

export default function AdminPropertiesPage() {
  return (
    <div className="p-8">
      <div className="mb-8 flex items-start justify-between">
        <div>
          <p className="text-xs text-[#C9A96E] tracking-widest uppercase mb-1">Admin</p>
          <h1 className="font-serif text-3xl font-semibold text-[#0F1C2E]">Properties</h1>
        </div>
        <button className="bg-[#C9A96E] text-[#0F1C2E] px-5 py-2.5 text-sm font-semibold hover:bg-[#0F1C2E] hover:text-white transition-colors">
          + Add Property
        </button>
      </div>

      <div className="bg-white border border-gray-200 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50">
              <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Property</th>
              <th className="text-left px-4 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Location</th>
              <th className="text-left px-4 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Type</th>
              <th className="text-left px-4 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Price</th>
              <th className="text-left px-4 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
              <th className="text-left px-4 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Flags</th>
              <th className="px-4 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {PROPERTIES.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <p className="font-medium text-[#0F1C2E]">{p.buildingName}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{p.microLocation}</p>
                </td>
                <td className="px-4 py-4 text-gray-600">{p.location}</td>
                <td className="px-4 py-4 text-gray-600">{p.configuration.toUpperCase()}</td>
                <td className="px-4 py-4 font-medium text-[#0F1C2E]">{p.priceDisplay}</td>
                <td className="px-4 py-4">
                  <span className={`badge text-[10px] ${p.status === "active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-400"}`}>
                    {p.status}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex gap-2">
                    {p.showOnHomepage ? <Eye size={13} className="text-[#C9A96E]" /> : <EyeOff size={13} className="text-gray-300" />}
                    {p.hotProperty && <Flame size={13} className="text-orange-500" />}
                  </div>
                </td>
                <td className="px-4 py-4">
                  <button className="text-xs text-[#C9A96E] hover:text-[#0F1C2E] font-medium">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
